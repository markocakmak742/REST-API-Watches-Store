$(document).ready(function() {

$(document).on('click', '.update-product-button', function() {


var id = $(this).attr('data-id');

$.getJSON("http://localhost/api/product/read_one.php?id=" + id, function(data) {

var name = data.name;
var price = data.price;
var description = data.description;
var category_id = data.category_id;
var category_name = data.category_name;

$.getJSON("http://localhost/api/category/read.php", function(data){

var categories_options_html=`<select name='category_id' class='form-control'>`;

$.each(data.records, function(key, val){

if(val.id==category_id){ categories_options_html+=`<option value='` + val.id + `' selected>` + val.name + `</option>`; }

else{ categories_options_html+=`<option value='` + val.id + `'>` + val.name + `</option>`; }
});
categories_options_html+=`</select>`;


var update_product_html=`
<div style='margin-bottom:20px;' id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
<span class='glyphicon glyphicon-list'></span> Home
</div>    

<!-- build 'update product' html form -->
<!-- we used the 'required' html5 property to prevent empty fields -->
<form id='update-product-form' action='#' method='post' border='0'>
<table class='table table-hover table-responsive table-bordered'>

<!-- name field -->
<tr>
<td>Name</td>
<td><input value=\"` + name + `\" type='text' name='name' class='form-control' required /></td>
</tr>

<!-- price field -->
<tr>
<td>Price</td>
<td><input value=\"` + price + `\" type='number' min='1' name='price' class='form-control' required /></td>
</tr>

<!-- description field -->
<tr>
<td>Description</td>
<td><textarea name='description' class='form-control' required>` + description + `</textarea></td>
</tr>

<!-- categories 'select' field -->
<tr>
<td>Category</td>
<td>` + categories_options_html + `</td>
</tr>

<tr>

<!-- hidden 'product id' to identify which record to delete -->
<td><input value=\"` + id + `\" name='id' type='hidden' /></td>

<!-- button to submit form -->
<td>
<button type='submit' class='btn btn-info'>
<span class='glyphicon glyphicon-edit'></span> Save
</button>
</td>

</tr>

</table>
</form>`;


$("#page-content").html(update_product_html);

changePageTitle("Edit Product");


});

});


});





$(document).on('submit', '#update-product-form', function() {

var form_data=JSON.stringify($(this).serializeObject());

$.ajax({
url: "http://localhost/api/product/update.php",
type : "POST",
contentType : 'application/json',
data : form_data,
success : function(result) {
// product was created, go back to products list
showProducts();
},
error: function(xhr, resp, text) {
// show error to console
console.log(xhr, resp, text);
}
});

return false;

});


});
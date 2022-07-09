$(document).ready(function(){

$(document).on('click', '.create-product-button', function() {

$.getJSON("http://localhost/api/category/read.php", function(data) {

var categories_options_html= `<select name='category_id' class='form-control'>`;

$.each(data.records, function(key, val) {

categories_options_html+=`<option value='` + val.id + `'>` + val.name + `</option>`;

});

categories_options_html+=`</select>`;    

var create_product_html=`

<!-- 'read products' button to show list of products -->
<div style='margin-bottom:20px;' id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
<span class='glyphicon glyphicon-list'></span> Home
</div>    

<!-- 'create product' html form -->
<form id='create-product-form' action='#' method='post' border='0'>
<table class='table table-hover table-responsive table-bordered'>

<!-- name field -->
<tr>
<td>Name</td>
<td><input type='text' name='name' class='form-control' required /></td>
</tr>

<!-- price field -->
<tr>
<td>Price</td>
<td><input type='number' min='1' name='price' class='form-control' required /></td>
</tr>

<!-- description field -->
<tr>
<td>Description</td>
<td><textarea name='description' class='form-control' required></textarea></td>
</tr>

<!-- categories 'select' field -->
<tr>
<td>Category</td>
<td>` + categories_options_html + `</td>
</tr>

<!-- button to submit form -->
<tr>
<td></td>
<td>
<button type='submit' class='btn btn-primary'>
<span class='glyphicon glyphicon-plus'></span> Save
</button>
</td>
</tr>

</table>
</form>`;

// inject html to 'page-content' of our app
$("#page-content").html(create_product_html);

// chage page title
changePageTitle("Create Product");    

});

});



$(document).on('submit', '#create-product-form', function() {

var form_data=JSON.stringify($(this).serializeObject());    

$.ajax({
url: "http://localhost/api/product/create.php",
type : "POST",
contentType : 'application/json',
data : form_data,
success : function(result) {

showProducts();

},
error: function(xhr, resp, text) {

console.log(xhr, resp, text);
}
});

return false;      
    
});

  

});
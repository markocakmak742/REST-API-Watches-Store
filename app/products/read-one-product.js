$(document).ready(function(){

$(document).on('click', '.read-one-product-button', function() {

var id = $(this).attr('data-id');

$.getJSON("http://localhost/api/product/read_one.php?id=" + id, function(data) {

var read_one_product_html=`

<!-- when clicked, it will show the product's list -->
<div style='margin-bottom:20px;' id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
<span class='glyphicon glyphicon-list'></span> Home
</div>

<!-- product data will be shown in this table -->
<table class='table table-bordered table-hover'>

<!-- product name -->
<tr>
<td class='w-30-pct'>Name</td>
<td class='w-70-pct'>` + data.name + `</td>
</tr>

<!-- product price -->
<tr>
<td>Price</td>
<td>` + data.price + ` €</td>
</tr>

<!-- product description -->
<tr>
<td>Description</td>
<td>` + data.description + `</td>
</tr>

<!-- product category name -->
<tr>
<td>Category</td>
<td>` + data.category_name + `</td>
</tr>

</table>`;
    
$("#page-content").html(read_one_product_html);

changePageTitle("Product Information");



});    

});

});
function readProductsTemplate(data, keywords) {


var read_products_html=`
<!-- search products form -->
<form id='search-product-form' action='#' method='post'>
<div class='input-group pull-left w-30-pct'>

<input type='text' value='` + keywords + `' name='keywords' class='form-control product-search-keywords' placeholder='Search' />

<span class='input-group-btn'>
<button type='submit' class='btn btn-default' type='button'>
<span class='glyphicon glyphicon-search'></span>
</button>
</span>

</div>
</form>

<!-- when clicked, it will load the create product form -->
<div style='margin-top:20px; margin-bottom:20px;' id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>
<span class='glyphicon glyphicon-plus'></span> Create Product
</div>

<!-- start table -->
<table class='table table-bordered table-hover'>

<!-- creating our table heading -->
<tr>
<th class='w-25-pct'>Name</th>
<th class='w-10-pct'>Price</th>
<th class='w-15-pct'>Category</th>
<th class='w-25-pct text-align-center'>Action</th>
</tr>`;

$.each(data.records, function(key, val) {

read_products_html+=`<tr>

<td>` + val.name + `</td>
<td>` + val.price +  ` €</td>
<td>` + val.category_name + `</td>

<!-- 'action' buttons -->
<td>
<!-- read product button -->
<button class='btn btn-primary m-r-10px read-one-product-button' data-id='` + val.id + `'>
<span class='glyphicon glyphicon-eye-open'></span> View
</button>

<!-- edit button -->
<button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
<span class='glyphicon glyphicon-edit'></span> Edit
</button>

<!-- delete button -->
<button class='btn btn-danger delete-product-button' data-id='` + val.id + `'>
<span class='glyphicon glyphicon-remove'></span> Delete
</button>
</td>
</tr>`;
});

read_products_html+=`</table>`;


$("#page-content").html(read_products_html);

}
$(document).ready(function() {

showProducts();

$(document).on('click', '.read-products-button', function() {

showProducts();

});    

});

function showProducts() {

$.getJSON("http://localhost/api/product/read.php", function(data){

readProductsTemplate(data, "");

changePageTitle("Watches Store");

});

}




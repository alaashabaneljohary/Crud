var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc") ;
console.log(productNameInput , productPriceInput , productCategoryInput , productDescInput);
var productContainer ;
var mainBtn = document.getElementById("mainBtn");
var mood = `Add Product` ;
var tmp;

if(localStorage.getItem("myproduct") == null)
{
    productContainer = [];
} else {
    productContainer = JSON.parse(localStorage.getItem("myproduct"));
    displayProduct(productContainer) ;
}
function addProduct() {
  
    var product = {
        pName : productNameInput.value,
        pPrice : productPriceInput.value,
        pCateg : productCategoryInput.value,
        pDesc  : productDescInput.value
    }
    if(mood === `Add Product`) {
        productContainer.push(product) ;
        console.log(productContainer) ;
        localStorage.setItem("myproduct" , JSON.stringify(productContainer)) ;
        displayProduct(productContainer) ;
        clearForm() ;       
    }  else 
    {
          productContainer[tmp] = product ;
          mood = `Add Product`;
          mainBtn.innerHTML = `Add Product` ;
          displayProduct(productContainer) ;
          localStorage.setItem("myproduct" , JSON.stringify(productContainer)) ;
    };
};

function displayProduct(productList) {
 
    var productIsList = ` ` ;
    for(var i = 0 ; i < productList.length ; i++ ) {

        productIsList+=`  <tr>
        <td>${i}</td>
        <td>${productList[i].pName}</td>
        <td>${productList[i].pPrice}</td>
        <td>${productList[i].pCateg}</td>
        <td>${productList[i].pDesc}</td>
        <td><button onclick="updateProuducts(${i})" class="btn bg-warning">Update</button> </td>
        <td><button onclick="deleteProduct(${i})" class="btn bg-warning">Delete</button></td>
    </tr>`;
    }
    document.getElementById("tableData").innerHTML = productIsList ;
};

function clearForm() {
 
        productNameInput.value = " " ;
        productPriceInput.value = " ";
        productCategoryInput.value = " ";
        productDescInput.value = " " ;
}

function deleteProduct(index) {

    productContainer.splice(index,1) ;
    localStorage.setItem("myproduct" , JSON.stringify(productContainer)) ;
    displayProduct(productContainer) ;
}

function searchProducts(klma) {

    var searchProduct = [];
    for(var i = 0 ; i<productContainer.length;i++){
        if(productContainer[i].pName.toLowerCase().includes(klma.toLowerCase() ) == true) {
         
            searchProduct.push(productContainer[i]);
        }
    }
    displayProduct(searchProduct)
}


function updateProuducts(i) {

     productNameInput.value = productContainer[i].pName ;
     productPriceInput.value = productContainer[i].pPrice ;
     productCategoryInput.value = productContainer[i].pCateg;
     productDescInput.value  = productContainer[i].pDesc ;
     mainBtn.innerHTML = `Update Product` ;
     mood = `Update Product`;
    tmp = i ;
}
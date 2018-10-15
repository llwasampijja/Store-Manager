function deleteProductComfirm() {
    confirm("Do you really want to delete this Item?");
}

function deactivateAccountComfirm() {
    confirm("Do you really want to deactivate this Account?");
}

function loginUser() {
    location.href='products.html'
}

function addProductToCart(){
    location.href='cart.html'
}

function createNewCategory(){
    location.href='product_categories.html'
}

function addProductToInventory(){
    location.href='stock_view.html'
}

function  addNewStoreAttendant(){
    location.href='index.html'
}

function  checkOutBuyersCart(){
    location.href='products.html'
}
function saveProductChanges(){
    location.href='stock_view.html'
}
function  openEditProfilePage(){
    location.href='edit_profile.html'
}
function  openUserProfilePage(){
    location.href='user.html'
}
function  launchEditProductPage(){
    location.href='edit_product.html'
}
function  launchAddNewCategoryPage(){
    location.href='add_category.html'
}

function saveProfileChanges(){
    location.href='user.html'
}

function confirmDeactivate(){
    var retVal = confirm("Do you really want to deactivate this Account?");
    if( retVal == true ){
      window.location.replace("store_attendants_list.html");
       return true;
    }
 }

 function confirmDelete() {
    var retVal = confirm("Do you really want to delete this Item?");
    if (retVal == true) {
        window.location.replace("stock_view.html");
        return true;
    }
}
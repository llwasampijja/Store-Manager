function deleteProductComfirm() {
    confirm("Do you really want to delete this Item?");
}

function deactivateAccountComfirm() {
    confirm("Do you really want to deactivate this Account?");
}

function loginUser() {
    location.href = 'products.html'
}

function addProductToCart() {
    location.href = 'cart.html'
}

function createNewCategory() {
    location.href = 'product_categories.html'
}

function addProductToInventory() {
    location.href = 'stock_view.html'
}

function addNewStoreAttendant() {
    location.href = 'index.html'
}

function checkOutBuyersCart() {
    location.href = 'products.html'
}
function saveProductChanges() {
    location.href = 'stock_view.html'
}
function openEditProfilePage() {
    location.href = 'edit_profile.html'
}
function openUserProfilePage() {
    location.href = 'user.html'
}
function launchEditProductPage() {
    location.href = 'edit_product.html'
}
function launchAddNewCategoryPage() {
    location.href = 'add_category.html'
}

function saveProfileChanges() {
    location.href = 'user.html'
}

function confirmDeactivate() {
    var retVal = confirm("Do you really want to deactivate this Account?");
    if (retVal == true) {
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

function openUserInputModal() {
    // Get the modal elements
    var modal_wrapper_user = document.getElementById('add_user_modal');
    var btn_launch_modal_user = document.getElementById("btn_add_user_modal");
    var span_close = document.getElementsByClassName("close")[0];

    // open the modal 
    btn_launch_modal_user.onclick = function () {
        modal_wrapper_user.style.display = "block";
    }

    //close the modal
    span_close.onclick = function () {
        modal_wrapper_user.style.display = "none";
    }

    // Additionally, close the modal whenever the user clicks anywhere outside the modal
    window.onclick = function (event) {
        if (event.target == modal_wrapper_user) {
            modal_wrapper_user.style.display = "none";
        }
    }
}

function openProductAddModal() {
    // Get the modal elements
    var modal_wrapper_product = document.getElementById('add_product_modal');
    var btn_launch_product = document.getElementById("btn_add_product_modal");
    var span_close_product = document.getElementsByClassName("close")[0];

    // open the modal 
    btn_launch_product.onclick = function () {
        modal_wrapper_product.style.display = "block";
    }

    //close the modal
    span_close_product.onclick = function () {
        modal_wrapper_product.style.display = "none";
    }

    // Additionally, close the modal whenever the user clicks anywhere outside the modal
    window.onclick = function (event) {
        if (event.target == modal_wrapper_product) {
            modal_wrapper_product.style.display = "none";
        }
    }
}

function openCategoryAddModal() {
    // Get the modal elements
    var modal_wrapper_category = document.getElementById('add_category_modal');
    var btn_launch_category = document.getElementById("btn_add_category_modal");
    var span_close_category = document.getElementsByClassName("close")[0];

    // open the modal 
    btn_launch_category.onclick = function () {
        modal_wrapper_category.style.display = "block";
    }

    //close the modal
    span_close_category.onclick = function () {
        modal_wrapper_category.style.display = "none";
    }

    // Additionally, close the modal whenever the user clicks anywhere outside the modal
    window.onclick = function (event) {
        if (event.target == modal_wrapper_category) {
            modal_wrapper_category.style.display = "none";
        }
    }
}

function modalViewUserDetails() {
    var btn_launch_user_details_modal = document.getElementsByClassName("btn_view_user_details");
    // var btn_launch_user_details_modal = document.getElementById("btn_view_user_details-test");
    var modal_user_details_wrapper = document.getElementById("model_user_details");
    var span_close = document.getElementsByClassName("close")[1];

    document.addEventListener('click', function (event) {
        if ( event.target.classList.contains( 'btn_view_user_details' ) ) {
            modal_user_details_wrapper.style.display = "block";
        }
    }, false);


    btn_launch_user_details_modal.onclick = function () {
        modal_user_details_wrapper.style.display = "block";
    }

    span_close.onclick = function() {
        modal_user_details_wrapper.style.display = "none";
    }

    window.onclick = function(event){
        if (event.target == modal_user_details_wrapper){
            modal_user_details_wrapper.style.display = "none";
        }
    }
}

function runAllJavaScript(){
    openUserInputModal();
    modalViewUserDetails();
}
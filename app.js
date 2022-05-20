var cart = document.getElementById("cart-info");
var parent = document.querySelector(".parent");
var exit = document.getElementById("exit-cart");


cart.addEventListener("click", function() {
    var x = parent.parentElement;
    var showCart = x.querySelector(".cart")
    showCart.style.visibility = "visible";
    }
)
exit.addEventListener("click", function(){
    var y = exit.parentElement;
    y.style.visibility = "hidden";
})
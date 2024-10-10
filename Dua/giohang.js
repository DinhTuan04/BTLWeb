const cartItemsContainer = document.getElementById("cart-items");  // Lấy container chứa các sản phẩm
const totalPriceElement = document.getElementById("total-price");
const totalItemsElement = document.getElementById("total-items");

function updateCart() {
    const cartItems = document.querySelectorAll("#cart-items tr");  // Cập nhật lại danh sách các sản phẩm sau khi có thay đổi
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        const quantityInput = item.querySelector("input[type='number']");
        const price = parseInt(item.querySelector("td:nth-child(3)").textContent.replace(/[^0-9]/g, ''));
        const quantity = parseInt(quantityInput.value);

        totalItems += quantity;
        totalPrice += price * quantity;

        item.querySelector("td:nth-child(5)").textContent = (price * quantity).toLocaleString() + " VND";
    });

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toLocaleString() + " VND";

    // Nếu không có sản phẩm nào trong giỏ hàng
    if (cartItems.length === 0) {
        totalItemsElement.textContent = "0";
        totalPriceElement.textContent = "0 VND";
    }
}

// Cập nhật giỏ hàng khi thay đổi số lượng
cartItemsContainer.addEventListener("change", function(e) {
    if (e.target.matches("input[type='number']")) {
        updateCart();
    }
});

// Xóa sản phẩm khỏi giỏ hàng
cartItemsContainer.addEventListener("click", function(e) {
    if (e.target.matches(".remove-btn")) {
        const itemRow = e.target.closest("tr");
        itemRow.remove();  // Xóa dòng sản phẩm
        updateCart();  // Cập nhật lại giỏ hàng
    }
});
//Thanh toán
function checkout()
{
window.location.href="thanhtoan.html";
}

updateCart(); // Cập nhật giỏ hàng ban đầu

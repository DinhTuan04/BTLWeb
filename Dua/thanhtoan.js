document.getElementById("payment-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn việc gửi form mặc định

    // Lấy thông tin từ form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const cardNumber = document.getElementById("card-number").value;

    // Kiểm tra và xử lý thanh toán ở đây (có thể gửi dữ liệu đến máy chủ)

    alert(`Cảm ơn ${name}, đơn hàng của bạn đang được xử lý!`);
    
});

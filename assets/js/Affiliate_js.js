
document.getElementById('main-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const uname = document.getElementById('uname').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConf = document.getElementById('password-conf').value;
    const payment = document.getElementById('Payment').value;
    const web = document.getElementById('web').value;
    const promotion = document.getElementById('promotion').value;
    const agree = document.getElementById('agree').checked;

    // Kiểm tra mật khẩu có khớp nhau không
    if (password !== passwordConf) {
        alert('Mật khẩu và Xác nhận mật khẩu không khớp nhau.');
        document.getElementById('password').value = '';
        document.getElementById('password-conf').value = '';
        document.getElementById('password').focus();    
        return;
    }

    // Kiểm tra các trường bắt buộc
    if (!uname || !fname || !lname || !email || !password || !passwordConf || !Payment || !web || !promotion || !agree) {
        alert('Vui lòng điền đầy đủ các trường bắt buộc.');
        return;
    }

    // In dữ liệu ra console (thay bằng gửi dữ liệu thật nếu cần)
    console.log({
        uname: uname,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        payment: payment,
        web: web,
        promotion: promotion,
        agree: agree
    });

    alert('Đăng ký thành công!');
    // Xử lý gửi form hoặc AJAX tại đây

    window.location.href = 'https://www.example.com';
});


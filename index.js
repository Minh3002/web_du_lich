const modalLogin = document.querySelector('.js-modal-register');
const btnLogin = document.querySelector('.js-btn-register');
const closeModalLogin = document.querySelector('.js-modal-close');
const modalLoginContainer = document.querySelector('.js-modal-container')
function showModalLogin(){
    modalLogin.classList.add('open-modal-register')
}
function hiddenModalLogin(){
    modalLogin.classList.remove('open-modal-register');
}
btnLogin.addEventListener('click', showModalLogin)
closeModalLogin.addEventListener('click', function(e){
    e.preventDefault();
    hiddenModalLogin();
})
modalLoginContainer.addEventListener('click', function(e){
    e.stopPropagation();
    
})
// automatic
var counter = 1;
var check = true;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    if(counter > 7){
        check = false;
    }
    if (counter < 2) check = true;
    if (check) counter++;
    else counter--;
    
},5000)

// dang nhap
function logIn() {
    const dataInputUser = document.querySelector(".js-input-user");
    const dataInputPass = document.querySelector(".js-input-password")
    var user = localStorage.getItem(dataInputUser.value)
    var checkUser = JSON.parse(user);

    if (dataInputUser.value != "" && dataInputPass.value != "") {
        if (checkUser == null) {
            alert("Mời đăng kí tài khoản")
        }
        else {
            if (dataInputUser.value == 'minh123' && dataInputPass.value == '1234') {
                alert("Đăng nhập thành công ")
                hiddenModalLogin();
                window.location.href = 'http://127.0.0.1:5500/do_an/index.html';
            }

            else {
                if (!(dataInputUser.value == checkUser.email)) {
                    alert("Bạn nhập chưa đúng gmail...")
                    dataInputUser.focus();
                }
                else if (!(dataInputPass.value == checkUser.password)) {
                    alert("Bạn nhập chưa đúng password...")
                    dataInputPass.focus();
                }
            }
        }
    }

    else {
        if (dataInputUser.value == "" && dataInputPass.value == "") {
            alert("Bạn chưa nhập gmail và password...")
            dataInputUser.focus();
        }
        else if (dataInputUser.value == "") {
            alert("Chưa nhập gmail nha ông dà...")
            dataInputUser.focus();
        }
        else if (dataInputPass.value == "") {
            alert("Chưa nhập password nha bà dà...")
            dataInputPass.focus();
        }
    }
}

function checkInputPassWord(){
    
}

// ket thuc dang nhap
function register(){
var email = document.getElementById("auth-form__email")
    var username = document.getElementById("auth-form__username")
    var password = document.getElementById("auth-form__password")
    var confirmPassword = document.getElementById("auth-form__confirm-password")
    var user = localStorage.getItem(username.value);
    var checkUser = JSON.parse(user);

    if (username.value != "" && email.value != "" && password.value != "" && confirmPassword.value != "") {
        if (password.value.length != 4) {
            alert("nhap ps du 4 ky tu")
            password.focus()
        }
        else {
            if (password.value == confirmPassword.value) {
                //check local co trong hay khong neu khong check thi checkUser tai else if se loi (null)
                if (checkUser == null) {
                    var newUser = {
                        username: username.value,
                        password: password.value,
                        email: email.value,
                    }
                    var json = JSON.stringify(newUser)
                    localStorage.setItem(username.value, json)
                    alert("Đăng ký thành công rồi ông dà...")
                    
                }
                else if (username.value == checkUser.username) {
                    alert("Tài khoản có người đăng ký rồi bà dà...")
                    username.value = ""
                    username.focus()
                }
                else {
                    var newUser = {
                        username: username.value,
                        password: password.value,
                        email: email.value,
                    }
                    var json = JSON.stringify(newUser)
                    localStorage.setItem(username.value, json)
                    alert("Đăng ký thành công rồi ông dà...")
                }
            }
            else {
                alert("Mật khẩu không khớp...")
                confirmPassword.value = ""
                confirmPassword.focus()
            }
        }

    }
    else {
        alert("Bạn chưa nhập đủ thông tin...")
        username.focus();
    }
}
var formRegister = document.querySelector('#form-register');
formRegister.addEventListener('submit', function (e) {
    e.preventDefault();
    register();
})
var formLogin = document.querySelector('#form-login');
formLogin.addEventListener('submit', function (e) {
    // alert('ok')
    e.preventDefault();
    logIn();
})


// 
// alert('OK Sudah Berhasil Terhubung')

// Set Password
const password = 'password_anda'

// ambil element html
const getusername = document.querySelector('#username')
const getpassword = document.querySelector('#password')
const getform = document.querySelector('form')

const USERS = [
    {
        name : "kucinggeming77",
        password : "meong11",
    },
];

//perulangan ambil data
USERS.forEach((user) => {
    console.log(user);
    
});

// testing console log
console.log(USERS);

getform.addEventListener('submit',(event)=>{
    event.preventDefault()
    //alert(getusername.value)
    //alert(getpassword.value)
    USERS.forEach((user) => {
        //percabangan
        if(getusername.value== user.name && getpassword.value ==user.password) {
            alert("berhasil login");
        }   else {
            alert("Invalid Credentials");
        }
    })
})

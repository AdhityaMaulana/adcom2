const password = 'password_anda'

const getusername = document.querySelector('#username')
const getpassword = document.querySelector('#password')
const getform = document.querySelector('form')

const USERS = [
    {
        name : "kucinggeming77",
        password : "meong11",
    },
];

USERS.forEach((user) => {
    console.log(user);
    
});

console.log(USERS);

getform.addEventListener('submit',(event)=>{
    event.preventDefault()
    USERS.forEach((user) => {
        if(getusername.value== user.name && getpassword.value ==user.password) {
            alert("berhasil login");
        }   else {
            alert("Invalid Credentials");
        }
    })
})

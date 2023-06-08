const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const numberset="1234567890";
    const symbolset="!@#$%^&*,./()"

    const passbox=document.getElementById("pass-box")
    const totalchar=document.getElementById("total-char")
    const upperinput=document.getElementById("upper-case");
    const lowerinput=document.getElementById("lower-case")
    const numberinput=document.getElementById("number-case")
    const symbolinput=document.getElementById("symbol-case")

    const getRandom =(dataset) =>{

        return dataset[Math.floor(Math.random() * dataset.length)];
    }
const generatePassword = (password ="")=>{
if(upperinput.checked){
    password += getRandom(upperCase);
}
if(lowerinput.checked){
    password += getRandom(lowerCase);
}
if(numberinput.checked){
    password += getRandom(numberset);
}
if(symbolinput.checked){
    password += getRandom(symbolset);
}
if(password.length <= totalchar.value){
    return generatePassword(password);
}
passbox.innerText= truncateString(password,totalchar.value);
}

generatePassword();

document.getElementById("btn").addEventListener (
    "click",
    function (){
        generatePassword();
    }
)

function truncateString(str,num){
    if(str.length > num){
        let substr =str.substring(0,num);
        return substr;

    }
    else {
        return str;
    }
}
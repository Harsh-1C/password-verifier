

let tick = document.querySelectorAll(".tick");


// pwd.style.color = "red";
// console.log(pwd.innerHTML);

function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

function containsNumeric(str) {
    return /\d/.test(str);
}

function containSpecial(str){
    var format = /[`!@#$%^&*+\-=\;':"\\|,.\/?~]/;
    return format.test(str);
}

tick = document.querySelectorAll('.tick');

setInterval(() => {
    let pwd = document.querySelector("#pwd");
    let res = pwd.value;
    let c1 = document.querySelector("#c1");
    let c2 = document.querySelector("#c2");
    let c3 = document.querySelector("#c3");
    let c4 = document.querySelector("#c4");

    if(res.length>=8){
        c1.style.color = 'green';
        tick[0].innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    else{
        c1.style.color = 'red';
        tick[0].innerHTML = '<i class="fas fa-times-circle"></i>';
    }
    if(containsUppercase(res)){
        c2.style.color = 'green';
        tick[1].innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    else{ c2.style.color = 'red';
    tick[1].innerHTML = '<i class="fas fa-times-circle"></i>';
}

    if(containsNumeric(res)){
        c3.style.color = 'green';
        tick[2].innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    else {c3.style.color = 'red';
    tick[2].innerHTML = '<i class="fas fa-times-circle"></i>';
}
    if(containSpecial(res)) {
        c4.style.color = 'green';
        tick[3].innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    else {c4.style.color = 'red';
    tick[3].innerHTML = '<i class="fas fa-times-circle"></i>';
}

}, 5);

// console.log("Hello");

let chkbox = document.querySelector("#chkbox");
chkbox.addEventListener("click",()=>{
    let pwd = document.querySelector("#pwd");
    // console.log(pwd);
    if(pwd.type == "password"){
        pwd.type = "text";
        pwd.style.padding = "10px 10px";
        pwd.style.fontSize = "15px";
        pwd.style.borderRadius = "4px";
        pwd.style.border = "none";
    }
    else{
        pwd.type = "password";
        
    }
})



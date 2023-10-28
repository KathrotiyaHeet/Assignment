function sum() {
    let a = parseInt(document.getElementById("input1").value);
    
    let b = parseInt(document.getElementById("input2").value);
    
    sum = a + b;

    document.getElementById("result").innerText = sum;
}

function sub() {
    let a = parseInt(document.getElementById("input1").value);
    
    let b = parseInt(document.getElementById("input2").value);
    
    sum = a - b;

    document.getElementById("result").innerText = sum;
}

function mul() {
    let a = parseInt(document.getElementById("input1").value);
    
    let b = parseInt(document.getElementById("input2").value);
    
    sum = a * b;

    document.getElementById("result").innerText = sum;
}

function div() {
    let a = parseInt(document.getElementById("input1").value);
    
    let b = parseInt(document.getElementById("input2").value);
    
    sum = a / b;

    document.getElementById("result").innerText = sum;
}
function result() {
    let a = parseInt(document.getElementById("input1").value);
    
    let b = parseInt(document.getElementById("input2").value);

    let c = parseInt(document.getElementById("input3").value);

    let d = parseInt(document.getElementById("input4").value);

    let e = parseInt(document.getElementById("input5").value);

    let f = parseInt(document.getElementById("input6").value);

    let g = parseInt(document.getElementById("input7").value);
    
    sum = a + b + c + d + e + f + g;

    per = (sum/350)*100


    document.getElementById("result").innerText = sum;
    document.getElementById("result1").innerText = per;
}
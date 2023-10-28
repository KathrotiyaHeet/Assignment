function show() {
    var x = document.getElementById("input1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function check() {
    let a = document.getElementById("a").value;

    if (a % 2 == 0) {
        document.getElementById("checked").innerHTML = a + " is Even";
    }
    else {
        document.getElementById("checked").innerHTML = a + " is Odd";
    }
}
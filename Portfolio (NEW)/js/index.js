function getName(){
    let n = document.getElementById("fname").value;
    document.getElementById("fname").innerHTML = n;
}
document.getElementById("btn").addEventListener("click", getName);

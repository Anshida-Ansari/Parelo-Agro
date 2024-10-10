let elememt = document.getElementById("rotateImage");
window.addEventListener('scroll', function () {
    let variable = window.scrollY * 0.35;
    elememt.style.transform = `rotate(${variable}deg)`
});
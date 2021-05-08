var slider_img = document.querySelector('.slider-img');
var images = ['ktm1.jpg','ktm2.jpg','ktm3.1.jpg','ktm4.1.jpg','ktm5.1.jpg'];
var i = 0;


function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}


function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src','images/' + images[i]);
}


function mode(){
    var e = document.body;
    e.classList.toggle("dark");
}
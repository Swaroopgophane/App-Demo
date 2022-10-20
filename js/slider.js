
var Slider = document.getElementById('slider');
var sliderBtn = document.getElementById('sliderbtn');
var sliderClose = document.getElementById('sliderclosebtn');



sliderBtn.onclick = function()
{
    Slider.style.left = "-350px";

    if(Slider.style.left == "-350px")
    {
        Slider.style.left = "0px"
        sliderBtn.style.display = "none"
        sliderClose.style.display ="block"
    }
}

sliderClose.onclick = function()
{

    if(Slider.style.left == "0px")
    {
        Slider.style.left = "-350px"
        sliderBtn.style.display = "block"
        sliderClose.style.display ="none"
    }
}


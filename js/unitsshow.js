var Slider = document.getElementById('slider');
var sliderBtn = document.getElementById('sliderbtn');
var sliderClose = document.getElementById('sliderclosebtn');



var lGroup1 = document.getElementById('lgroup1');
var lGroup2 = document.getElementById('lgroup2');
var lGroup3 = document.getElementById('lgroup3');
var lGroup4 = document.getElementById('lgroup4');


var radioBtn1 = document.getElementById('radio1');
var radioBtn2 = document.getElementById('radio2');
var radioBtn3 = document.getElementById('radio3');
var radioBtn4 = document.getElementById('radio4');
var radioBtn5 = document.getElementById('radio5');
var radioBtn6 = document.getElementById('radio6');
var radioBtn7 = document.getElementById('radio7');
var radioBtn8 = document.getElementById('radio8');
var radioBtn9 = document.getElementById('radio9');
var radioBtn10 = document.getElementById('radio10');
var radioBtn11 = document.getElementById('radio11');
var radioBtn12 = document.getElementById('radio12');
var radioBtn13 = document.getElementById('radio13');
var radioBtn14 = document.getElementById('radio14');
var radioBtn15 = document.getElementById('radio15');
var radioBtn16 = document.getElementById('radio16');
var radioBtn17 = document.getElementById('radio17');
var radioBtn18 = document.getElementById('radio18');
var radioBtn19 = document.getElementById('radio19');
var radioBtn20 = document.getElementById('radio20');
var radioBtn21 = document.getElementById('radio21');
var radioBtn22 = document.getElementById('radio22');
var radioBtn23 = document.getElementById('radio23');
var radioBtn24 = document.getElementById('radio24');



var showBtn = document.getElementById('submitBtn');



showBtn.addEventListener('click',()=>{

    if(radioBtn1.checked == true && radioBtn13.checked == true)
    {
        lGroup1.style.display = 'none';
        lGroup2.style.display = 'none';
        lGroup3.style.display = 'block';
        lGroup4.style.display = 'block';

        if(radioBtn1.checked == true || radioBtn13.checked == true)
        {
            radioBtn1.checked = false;
            radioBtn13.checked = false;
        }

        autoclose();
    }

});


// <------------++ autoclose finction ++---------------->

function autoclose()
{
    if(Slider.style.left == "0px")
    {
        Slider.style.left = "-350px"
        sliderBtn.style.display = "block"
        sliderClose.style.display ="none"
    }
}


// <------------++ autoclose finction ++---------------->
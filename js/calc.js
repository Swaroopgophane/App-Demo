
var lBtn1 = document.getElementById('lbtn1');
var lBtn2 = document.getElementById('lbtn2');
var lBtn3 = document.getElementById('lbtn3');
var lBtn4 = document.getElementById('lbtn4');
var lBtn5 = document.getElementById('lbtn5');
var lBtn6 = document.getElementById('lbtn6');
var lBtn7 = document.getElementById('lbtn7');
var lBtn8 = document.getElementById('lbtn8');
var lBtn9 = document.getElementById('lbtn9');
var lBtn10 = document.getElementById('lbtn10');

var Length1 = document.getElementById('length1');
var Length2 = document.getElementById('length2');
var Length3 = document.getElementById('length3');
var Length4 = document.getElementById('length4');
var Length5 = document.getElementById('length5');
var Length6 = document.getElementById('length6');
var Length7 = document.getElementById('length7');
var Length8 = document.getElementById('length8');
var Length9 = document.getElementById('length9');
var Length10 = document.getElementById('length10');

var Result1 = document.getElementById('Result1');
var Result2 = document.getElementById('Result2');
var Result3 = document.getElementById('Result3');
var Result4 = document.getElementById('Result4');
var Result5 = document.getElementById('Result5');
var Result6 = document.getElementById('Result6');
var Result7 = document.getElementById('Result7');
var Result8 = document.getElementById('Result8');
var Result9 = document.getElementById('Result9');
var Result10 = document.getElementById('Result10');


var res;

// meter to kilometer
lBtn1.onclick = function()
{
    
    var num = parseFloat(Length1.value);
    res = num / 1000;
    Result1.innerHTML = `${num} meter = ${res} kilometer`;
}

// kilometer to meter
lBtn2.onclick = function()
{
    
    var num = parseFloat(Length2.value);
    res = num * 1000;
    Result2.innerHTML = `${num} kilometer = ${res} meter`;
}

// centimeter to yard
lBtn3.onclick = function()
{
    
    var num = parseFloat(Length3.value);
    res = num * 0.0109361;
    Result3.innerHTML = `${num} centimeter = ${res} yard`;
}

// yard to centimeter
lBtn4.onclick = function()
{
    
    var num = parseFloat(Length4.value);
    res = num * 91.44;
    Result4.innerHTML = `${num} yard = ${res} centimeter`;
}

// centimeter to foot
lBtn5.onclick = function()
{
    
    var num = parseFloat(Length5.value);
    res = num / 30.48;
    Result5.innerHTML = `${num} centimeter = ${res} foot`;
}

// foot to centimeter
lBtn6.onclick = function()
{
    
    var num = parseFloat(Length6.value);
    res = num * 30.48;
    Result6.innerHTML = `${num} foot = ${res} centimeter`;
}

// centimeter to mile
lBtn7.onclick = function()
{
    
    var num = parseFloat(Length7.value);
    res = num / 160900;
    Result7.innerHTML = `${num} centimeter = ${res} mile`;
}

// mile to centimeter
lBtn8.onclick = function()
{
    
    var num = parseFloat(Length8.value);
    res = num * 160900;
    Result8.innerHTML = `${num} mile = ${res} centimeter`;
}

// centimeter to inch
lBtn9.onclick = function()
{
    
    var num = parseFloat(Length9.value);
    res = num / 2.54;
    Result9.innerHTML = `${num} centimeter = ${res} inch`;
}

// inch to centimeter
lBtn10.onclick = function()
{
    
    var num = parseFloat(Length10.value);
    res = num * 2.54;
    Result10.innerHTML = `${num} inch = ${res} centimeter`;
}
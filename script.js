var dizi = [];

function topla(){
   var ilkSayi = document.getElementById("firstNumber").value;
   var ikinciSayi = document.getElementById("secondNumber").value;
   alert(Number(ilkSayi)+Number(ikinciSayi));
}

function mouseOver(){
    var element = document.getElementById("mouseover");
    element.style.backgroundColor="red";
}

function diziyeEkleEkranaBas(){
    var element = document.getElementById("textInput").value;
    var diziDiv = document.getElementById("dizi")
    dizi.push(element)
    diziDiv.innerHTML = dizi
}
function convert(){
    var givenNumber = document.getElementById("givenNumber");
    var transfNumber = givenNumber.value;

    if(document.getElementById("km").checked){
        var convertedNumber = transfNumber /= 1000;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else if (document.getElementById("hm").checked){
        var convertedNumber = transfNumber /= 100;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else if(document.getElementById("dam").checked){
        var convertedNumber = transfNumber /= 10;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else if(document.getElementById("dm").checked){
        var convertedNumber = transfNumber *= 10;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else if(document.getElementById("cm").checked){
        var convertedNumber = transfNumber *= 100;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else if(document.getElementById("mm").checked){
        var convertedNumber = transfNumber *= 1000;
        document.getElementById("convertedNumber").innerHTML = convertedNumber;
    } else{
        alert('Selecione a unidade para que deseja converter!')
    };
};

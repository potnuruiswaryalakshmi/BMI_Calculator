function CheckBMI(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let bmi = weight.value/(height.value*height.value);
    if(bmi<18.5){
        document.getElementById('result').innerHTML = "you're underweight";
    }
    else if(bmi<24.9){
        document.getElementById('result').innerHTML = "you're Normal";
    }
    else if(bmi<29.9){
        document.getElementById('result').innerHTML = "you're Overweight";
    }
    else if(bmi<35){
        document.getElementById('result').innerHTML = "you've Obesity";
    }
    else{
        document.getElementById('result').innerHTML = "you've Severe Obesity";
    }
}
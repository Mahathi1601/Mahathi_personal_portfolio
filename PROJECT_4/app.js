const convertTOcm=()=>{
    let height = document.getElementById("height").value;
    let convertedHeight = document.getElementById("convertedHeight");
    if(!height||height<=0){
        result.innerText = "Invalid value";
        result.className="";
        return;
    }
    height = (height*30.48);
    convertedHeight.innerText=`Height in cm : ${height}`;
};
const calculateBMI=()=>{
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = document.getElementById("result");
    if(!weight || !height || weight<=0 || height<=0){
        result.innerText = "Invalid value";
        result.className="";
        return;
    }
    height=(height*30.48)/100;
    let bmi = (weight / (height*height)).toFixed(2);
    let category="";
    let Name="";
    if(bmi<18.5){
        category = "Underweight";
        Name = "result-underweight";
    }else if(bmi<24.9){
        category = "Normal";
        Name = "result-normal";
    }else if(bmi<29.9){
        category = "Overweight";
        Name = "result-overweight";
    }else{
        category ="Obese";
        Name = "result-obese";
    }
    result.innerText = `Your BMI is ${bmi}(${category})`;
    result.className=Name;
};
const resetForm=()=> {
    let weight = document.getElementById("weight").value;
    document.getElementById("height").value;
    let result = document.getElementById("result");
    let convertedHeight = document.getElementById("convertedHeight");
  weight = "";
  height = "";
  result.innerText = "";
  result.className = "";
  convertedHeight.innerText="";
};

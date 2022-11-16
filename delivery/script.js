let inputName = document.getElementById("first-name");
inputName.onblur = function(){
    if(inputName.value.length<4 || inputName.value.includes(" ") || /\d/.test(inputName.value)){
        inputName.classList.add("error");
        error.innerHTML = 'The field is invalid'
    }
}
inputName.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error.innerHTML = "";
    }
  };

  let inputSurname = document.getElementById("last-name");
  inputSurname.onblur = function(){
    if(inputSurname.value.length<5 || inputSurname.value.includes(" ") || /\d/.test(inputSurname.value)){
        inputSurname.classList.add("error");
        error1.innerHTML = 'The field is invalid'
    }
}
inputSurname.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error1.innerHTML = "";
    }
  };

let today = new Date();
let tommorow = new Date(today);
tommorow.setDate(today.getDate() + 1)

let tomorrowString = tommorow.toString();
tomorrowForDate = Number(tomorrowString.slice(8,10));

let inputDate = document.getElementById("date");
inputDate.setAttribute('min', `2022-11-${tomorrowForDate}`);
inputDate.setAttribute('value', `2022-11-${tomorrowForDate}`);

let dateLimit = document.createElement('p');
dateLimit.innerHTML = `Not earlier then ${tomorrowString.slice(0, 16)}`;
dateLimit.classList.add('date-limit');
document.querySelector(".date-not-earlier").append(dateLimit);



inputDate.onblur = function(){

    if(!inputDate.checkValidity()){
        inputDate.classList.add("error");
        error2.innerHTML = 'Not earlier then tommorow'
    }
}
inputDate.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error2.innerHTML = "";
    }
  };

let inputStreet = document.getElementById("street");
inputStreet.onblur = function(){
  if(inputStreet.value.length<5){
    inputStreet.classList.add("error");
      error3.innerHTML = 'The field is invalid'
  }
}
inputStreet.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error3.innerHTML = "";
  }
};

let inputHouse = document.getElementById("house");
inputHouse.onblur = function(){
  if(inputHouse.value < 0 || inputHouse.value.length < 1){
    inputHouse.classList.add("error");
      error4.innerHTML = 'The field is invalid'
  }
}
inputHouse.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error4.innerHTML = "";
  }
}

let inputFlat = document.getElementById("flat");
inputFlat.onblur = function(){
  if(inputFlat.value < 0 || inputFlat.value.length < 1){
    inputFlat.classList.add("error");
      error5.innerHTML = 'The field is invalid'
  }
}
inputFlat.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error5.innerHTML = "";
  }
}

let resultDiv = document.querySelector(".result");

function createOrderResult(){
  let divResult = document.createElement("div");
  divResult.classList.add("result-info")
  let resultName = document.createElement("div");
  resultName.innerHTML = `Name: ${inputName.value}`;
  let resultSurname = document.createElement("div");
  resultSurname.innerHTML = `Surname: ${inputSurname.value}`;
  let resultAdress = document.createElement("div");
  resultAdress.innerHTML = `Street: ${inputStreet.value}, house: ${inputHouse.value}, flat: ${inputFlat.value}`;


  divResult.append(resultName);
  divResult.append(resultSurname);
  divResult.append(resultAdress);

  resultDiv.append(divResult);
}



let resultDivToShow = document.querySelector(".hide-result");
  let submitBtn = document.querySelector(".submit-btn");
  let orderPage = document.querySelector(".order-show");
  submitBtn.addEventListener("click", showResult)
  function showResult(event){
    event.preventDefault();
    resultDivToShow.setAttribute("style", "display: block!important");
    orderPage.classList.add("order-hidden");
    createOrderResult();
  }

  function enableSubmit(){
    let inputs = document.getElementsByClassName('required');

    let btn = document.querySelector('.submit-btn');
    let isValid = true;
    for (let i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;

    }

//Name
let inputName = document.getElementById("first-name");

inputName.onblur = function(){
    if(inputName.value.length<4 || inputName.value.includes(" ") || /\d/.test(inputName.value)){
      checkNameValue = false;
        inputName.classList.add("error");
        error.innerHTML = 'Please, eneter full name (not less than 4 characters)';
    } else {
      checkNameValue = true;
    }
}
inputName.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error.innerHTML = "";
    }
  };

  //Surname
  let inputSurname = document.getElementById("last-name");

  inputSurname.onblur = function(){
    if(inputSurname.value.length<5 || inputSurname.value.includes(" ") || /\d/.test(inputSurname.value)){
      checkSurnameValue = false;
        inputSurname.classList.add("error");
        error1.innerHTML = 'Please, eneter full last name (not less than 5 characters)'
    } else {
      checkSurnameValue = true;
    }
}
inputSurname.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error1.innerHTML = "";
    }
  };

//Date
let today = new Date();
let tommorow = new Date(today);
tommorow.setDate(today.getDate() + 1);

let tomorrowString = tommorow.toString();
tomorrowForDate = Number(tomorrowString.slice(8,10));
let monthForDate = tomorrowString.slice(4,7);

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

for(let i=0; i<months.length; i++){
  if (monthForDate == months[i]){
   monthForDate = Number(i+1);
}}

let inputDate = document.getElementById("date");
inputDate.setAttribute('min', `2022-${monthForDate}-${tomorrowForDate}`);

let dateLimit = document.createElement('p');
dateLimit.innerHTML = `Not earlier then ${tomorrowString.slice(0, 16)}`;

dateLimit.classList.add('date-limit');
document.querySelector(".date-not-earlier").append(dateLimit);

inputDate.onblur = function(){
    if(!inputDate.checkValidity()){
      checkDateValue = false;
        inputDate.classList.add("error");
        error2.innerHTML = 'Not earlier then tommorow'
       }else {
        checkDateValue = true;
      }
    }
inputDate.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      error2.innerHTML = "";
    }
  };

  //Street
let inputStreet = document.getElementById("street");

inputStreet.onblur = function(){
  if(inputStreet.value.length<5){
    checkStreetValue = false;
      inputStreet.classList.add("error");
      error3.innerHTML = 'Please, eneter full street name (not less than 5 characters)'
  }else {
    checkStreetValue = true;
  }
  }
inputStreet.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error3.innerHTML = "";
  }
};

//House
let inputHouse = document.getElementById("house");

inputHouse.onblur = function(){
  if(inputHouse.value < 0 || inputHouse.value.length < 1 || inputHouse.value.startsWith("e")){
    checkHouseValue = false;
     inputHouse.classList.add("error");
      error4.innerHTML = 'The field is invalid. Please, eneter numbers only'
  }else {
    checkHouseValue = true;
  }
  }
inputHouse.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error4.innerHTML = "";
  }
}
//Flat
let inputFlat = document.getElementById("flat");
if(inputFlat.value.includes(String.fromCharCode(45))
|| inputFlat.value.includes(String.fromCharCode(47))) {
inputFlat.checkValidity();}
else{
  !inputFlat.checkValidity();
}


inputFlat.onblur = function(){
for(let char of inputFlat.value){

     if (char.charCodeAt() != 45  && char.charCodeAt() > 31 && (char.charCodeAt() < 47 || char.charCodeAt() > 57)){
      checkFlatValue = false;
     inputFlat.classList.add("error");
     error5.innerHTML = 'The field is invalid. Please, eneter numbers, "-", "/" signs only, starting from number'}else {
      checkFlatValue = true;
    }}
    if(inputFlat.value.length < 1  || inputFlat.value.startsWith("-") || inputFlat.value.startsWith("/")){
      checkFlatValue = false;
      inputFlat.classList.add("error");
      error5.innerHTML = 'The field is invalid. Please, eneter numbers, "-", "/" signs only, starting from number'
     }else {
      checkFlatValue = true;
    }
     }


inputFlat.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    error5.innerHTML = "";
  }
}

let validPay=false;
let paymentCash = document.getElementById("payment-cash");
let paymentCard = document.getElementById("payment-card");

paymentCard.addEventListener("change", function () {
      if (paymentCard.checked) {
        validPay = true;
        }});

paymentCash.addEventListener("change", function () {
          if (paymentCash.checked) {
            validPay = true;
            }});

            let checks = document.querySelectorAll(".check");
            let max = 2;
            for (let i = 0; i < checks.length; i++) checks[i].onclick = chosenGifts;
            function chosenGifts(event) {
              let checkedChecks = document.querySelectorAll(".check:checked");
              if (checkedChecks.length >= max + 1) {
                return false;
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
  let resultDeliveryDate = document.createElement("div");
  resultDeliveryDate.innerHTML = `Delivery date: ${inputDate.value}`;
  let thanks = document.createElement("div");
  thanks.classList.add("result-title");
  thanks.innerHTML = `Thank You!`;
let closeBtn = document.createElement("button");
closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "Close";
closeBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  resultDivToShow.removeAttribute("class",
  "show-result");
  orderPage.classList.remove("order-hidden");
  document.location.reload();
})

  divResult.append(resultName);
  divResult.append(resultSurname);
  divResult.append(resultAdress);
  divResult.append(resultDeliveryDate);
  divResult.append(thanks);
  divResult.append(closeBtn);

  resultDiv.append(divResult);
}



let resultDivToShow = document.querySelector(".hide-result");
let resultDivShow = document.querySelector(".result");
  let submitBtn = document.querySelector(".submit-btn");
  let orderPage = document.querySelector(".order-show");
  submitBtn.addEventListener("click", showResult)
  function showResult(event){
    event.preventDefault();
    resultDivToShow.classList.toggle("show-result");
    orderPage.classList.add("order-hidden");
    resultDivShow.innerHTML = "";
    createOrderResult();
  }


  let checkNameValue = true;
  let checkSurnameValue = true;
  let checkDateValue = true;
  let checkStreetValue = true;
  let checkHouseValue = true;
  let checkFlatValue = true;


  function enableSubmit(){
    let inputs = document.querySelectorAll('.required');
    let btn = document.querySelector('.submit-btn');

    let isValid = true;

    for (let i of inputs){
    if (!validPay || i.value.trim() === "" || i.value === ""
    || !checkNameValue
    || !checkSurnameValue
    || !checkDateValue
    || !checkStreetValue
    || !checkHouseValue
    || !checkFlatValue
    ){
    isValid = false;
    btn.style.cursor = "not-allowed";
    }
     btn.disabled = !isValid;
     if(isValid){
      btn.style.cursor = "pointer";}
    }
  }


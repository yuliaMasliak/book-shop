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

const today = new Date();
let tommorow = new Date();
tommorow.setDate(today.getDate() + 1)


document.getElementById("date").setAttribute('min', tommorow);

let inputDate = document.getElementById("date");

// inputDate.onblur = function(){
//     if(inputDate.value < (today.getDate() + 1)){
//         inputSurname.classList.add("error");
//         error2.innerHTML = 'Not earlier then tommorow'
//     }
// }
// inputDate.onfocus = function() {
//     if (this.classList.contains('error')) {
//        this.classList.remove('error');
//       error2.innerHTML = "";
//     }
//   };

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
  if(inputHouse.value < 0){
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
  if(inputFlat.value < 0){
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

let resultName = document.querySelector("#result-name")
inputName.oninput = function() {
  resultName.innerHTML = inputName.value;
  };

  let resultSurname = document.querySelector("#result-surname")
inputSurname.oninput = function() {
  resultSurname.innerHTML = inputSurname.value;
  };

  let resultDate = document.querySelector("#result-date")
  inputDate.oninput = function() {
    resultDate.innerHTML = inputDate.value;
    };

    let resultStreet = document.querySelector("#result-street")
    inputStreet.oninput = function() {
      resultStreet.innerHTML = inputStreet.value;
      };
      let resultHouse = document.querySelector("#result-house")
      inputHouse.oninput = function() {
        resultHouse.innerHTML = inputHouse.value;
        };
        let resultFlat = document.querySelector("#result-flat")
      inputFlat.oninput = function() {
        resultFlat.innerHTML = inputFlat.value;
        };
  //   let inputSelect = document.getElementById("gift");
  //  function selectedOptions(){
  //   let resultSelect = document.querySelector("#result-selected")
  //   inputSelect.oninput = function() {
  //     resultSelect.innerHTML = inputSelect.value;
  //   }};
  function showResult(event){
    getElementById("result").classList.add("show-result");
  }
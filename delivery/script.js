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
/*function plus(){
    document.getElementById("num").value ="";

    document.getElementById("num").value = document.getElementById("num").value + 1 ;
}
function minus(){
    document.getElementById("num").value -= 1;
}*/
// Get all the increment buttons and quantity input fields
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const show = document.querySelectorAll('.num');

plus.forEach((button, index) => {
  button.addEventListener('click', () => {
    let currentValue = parseInt(show[index].value);
    
    currentValue += 1;

    show[index].value = currentValue;
  });
});
minus.forEach((button, index) => {
    button.addEventListener('click', () => {
      let currentValue = parseInt(show[index].value);
      
      currentValue -= 1;
  
      show[index].value = currentValue;
    });
  });
function buy(){
    show[index].value ="";
} 
//still to understand
/*window.addEventListener('DOMContentLoaded', function() {
    var myContainer1 = document.getElementById('myContainer1');
    var content = window.getComputedStyle(myContainer1, '::after').getPropertyValue('content');
  
    if (content) {
      var addedContent = document.createElement('p');
      addedContent.textContent = content.replace(/['"]+/g, '');
      myContainer1.appendChild(addedContent);
    }
  });
  window.addEventListener('DOMContentLoaded', function() {
    var myContainer2 = document.getElementById('myContainer2');
    var content = window.getComputedStyle(myContainer2, '::after').getPropertyValue('content');
  
    if (content) {
      var addedContent = document.createElement('p');
      addedContent.textContent = content.replace(/['"]+/g, '');
      myContainer2.appendChild(addedContent);
    }
  });window.addEventListener('DOMContentLoaded', function() {
    var myContainer3 = document.getElementById('myContainer3');
    var content = window.getComputedStyle(myContainer3, '::after').getPropertyValue('content');
  
    if (content) {
      var addedContent = document.createElement('p');
      addedContent.textContent = content.replace(/['"]+/g, '');
      myContainer3.appendChild(addedContent);
    }
  });*/
// Your code goes here:
function renderPerson(name, dateString, eye_color, age, gender){
  let stringa = name + " is a "+ getAge(dateString)+ " years old "+ gender + " born in " + dateString + " with "+ eye_color +" eyes"
  return stringa
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));
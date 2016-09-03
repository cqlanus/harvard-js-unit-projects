/* hw3b.js */

// Behavior 1
var passwordChecker ={
  pwd1: document.getElementById('pwd1'),
  pwd2: document.getElementById('pwd2'),
  // Users must enter passwords of at least 8 characters.
  pwdLengthChecker: function(){
    var pwd1Hint = document.getElementById('pwd1Hint');

    if (passwordChecker.pwd1.value.length < 8){
      pwd1Hint.style.display = 'inline';
      passwordChecker.pwd1.style.background='lightpink';
    }
    else {
      pwd1Hint.style.display = 'none';
      passwordChecker.pwd1.style.background= '#b3ff99';

    }
  },
  // The two fields must match.
  samePasswordCheck: function(){
    var pwd2Hint = document.getElementById('pwd2Hint');

    if (passwordChecker.pwd1.value !== passwordChecker.pwd2.value){
      pwd2Hint.style.display = 'inline';
      passwordChecker.pwd2.style.background='lightpink';
    }
    else {
      pwd2Hint.style.display = 'none';
      passwordChecker.pwd2.style.background= '#b3ff99';
    }
  }
}

pwd1.addEventListener('keyup', passwordChecker.pwdLengthChecker)

pwd2.addEventListener('keyup', passwordChecker.samePasswordCheck)


// Behavior 2
// Provide a countdown near the 140 character limit caption that counts backwards
    // from 140 to zero to show users how many characters they have left
// once the limit is reached, no more characters show in the field
var characterCountdown = {
  bioElement: document.getElementById('bio'),
  charsLeft: document.getElementById('charsLeft'),
  maxChars: 140,
  calculateCharsLeft: function () {
    'use strict';
    var bioChars = characterCountdown.bioElement.value.length;
    var newCharsLeft = characterCountdown.maxChars-bioChars;
    charsLeft.innerHTML = newCharsLeft;
    characterCountdown.bioElement.maxLength = characterCountdown.maxChars;
  }
}

characterCountdown.bioElement.addEventListener('keyup', characterCountdown.calculateCharsLeft);


// Behavior 3
// Make the one SELECT menu populate data based on a complimentary SELECT menu
var baseballPositions = {
  // Will populate the first select menu
  position: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'],
  // These will populate the second select menu based on the first selection
  pitcher: ['Kershaw', 'Scherzer', 'Sale', 'Kluber', 'Price'],
  catcher: ['Posey', 'Martin', 'Molina', 'Lucroy', 'Perez'],
  firstBase: ['Goldschmidt', 'Rizzo', 'Votto', 'Cabrera', 'Davis'],
  secondBase: ['Altuve', 'Carpenter', 'Cano', 'Kinsler', 'Rendon'],
  thirdBase: ['Donaldson', 'Machado', 'Bryant', 'Arenado', 'Seager'],
  shortStop: ['Correa', 'Lindor', 'Seager', 'Simmons', 'Crawford'],
  leftField: ['Harper', 'Martinez', 'Cespedes', 'Marte', 'Upton'],
  centerField: ['Trout', 'McCutchen', 'Betts', 'Kiermaier', 'Pollock'],
  rightField: ['Stanton', 'Heyward', 'Bautista', 'Cain', 'Puig'],

  firstSelect: document.getElementById('firstSelect'),

  // This method populates the first select menu - it is called upon page load
  populateFirstSelect: function (){
    for (var i = 0; i < baseballPositions.position.length; i++){
      var node = document.createElement('OPTION');
      var positionNode = document.createTextNode(baseballPositions.position[i]);
      node.appendChild(positionNode);
      node.setAttribute('value', baseballPositions.position[i]);
      firstSelect.appendChild(node);
    }
  },

  // This method takes a parameter, which comes from the first select menu
    // and populates the second select menu
  populateSecondSelect: function (pos){
    var secondSelect = document.getElementById('secondSelect');
    secondSelect.innerHTML = '';
    for (var i = 0; i < pos.length; i++){
      var node = document.createElement('OPTION');
      var positionNode = document.createTextNode(pos[i]);
      node.appendChild(positionNode);
      node.setAttribute('value', pos[i]);
      secondSelect.appendChild(node);
    }
  }
}

firstSelect.addEventListener('change', function(){
  var pos = baseballPositions.firstSelect.value;
  switch(pos){
    case 'P':
      baseballPositions.populateSecondSelect(baseballPositions.pitcher);
      break;
    case 'C':
      baseballPositions.populateSecondSelect(baseballPositions.catcher);
      break;
    case '1B':
      baseballPositions.populateSecondSelect(baseballPositions.firstBase);
      break;
    case '2B':
      baseballPositions.populateSecondSelect(baseballPositions.secondBase);
      break;
    case '3B':
      baseballPositions.populateSecondSelect(baseballPositions.thirdBase);
      break;
    case 'SS':
      baseballPositions.populateSecondSelect(baseballPositions.shortStop);
      break;
    case 'LF':
      baseballPositions.populateSecondSelect(baseballPositions.leftFrield);
      break;
    case 'CF':
      baseballPositions.populateSecondSelect(baseballPositions.centerField);
      break;
    case 'RF':
      baseballPositions.populateSecondSelect(baseballPositions.rightField);
      break;
    default:
      console.log("this is working?");
  }
});

window.addEventListener('load', baseballPositions.populateFirstSelect);

// Behavior 4
// Have at least one subsection which will appear depending on the value
    // selected in a checkbox, radio button or SELECT
var socialMediaChecker = {
  radios: document.getElementById('radios'),
  socialMedia: function (){
    var yesSocial = document.getElementById('yesSocial');
    var noSocial = document.getElementById('noSocial');
    var socialMedia = document.getElementById('socialMedia');

    if (yesSocial.checked){
      socialMedia.style.display = 'inline-block';
    }
    if (noSocial.checked){
      socialMedia.style.display = 'none';
    }
  }
}

socialMediaChecker.radios.addEventListener('change',socialMediaChecker.socialMedia);



// Behavior 5
// Data validation should confirm that an input a ten-digit phone number,
    // regardless of the punctuation used, and format it in the input field as xxx-xxx-xxxx.
var phoneNumChecker = {
  phone: document.getElementById('phone'),
  normalizeNum: function(){
    var phoneNum = phoneNumChecker.phone.value;
    var onlyDigits =[];
    var phoneHint1 = document.getElementById('phoneHint1');
    var phoneHint2 = document.getElementById('phoneHint2');
      // Iterate through the input (which is of type string)
      for (var i = 0; i<phoneNum.length;i++){
        // coerce each character to number
        // check if any characters do NOT eval to NaN
        var char = phoneNum.charAt(i)
        if (!isNaN(parseInt(char))){
          onlyDigits.push(char);
        }
      }
      // Normalize number as only digits
      onlyDigits.splice(6,0,'-');
      onlyDigits.splice(3,0,'-');
      onlyDigits = onlyDigits.join('');
      console.log(onlyDigits);
      console.log(onlyDigits.length);
      // Check if number is too long
      if (onlyDigits.length > 12){
        phoneHint2.style.display = 'inline';
        phoneNumChecker.phone.style.background= 'lightpink';
      }
      else {
        phoneHint2.style.display = 'none';
        phoneNumChecker.phone.style.background= '#b3ff99';
      }
      // And check if number is too short
      if(onlyDigits.length < 12){
        phoneHint1.style.display = 'inline';
        phoneNumChecker.phone.style.background= 'lightpink';
      }
      else {
        phoneHint1.style.display = 'none';
        phoneNumChecker.phone.style.background= '#b3ff99';
      }
      phoneNumChecker.phone.value = onlyDigits;
    }

}

phone.addEventListener('blur', phoneNumChecker.normalizeNum);

// Behavior 6
// Upon submitting the form, make sure that at least one of the Phone or Email
    // fields are completed
var phoneOrEmail = {
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  phoneEmailHint: document.getElementById('phoneEmailHint'),
  checkPhoneOrEmail: function(e){
    if (!phoneOrEmail.phone.value && !phoneOrEmail.email.value){
      phoneOrEmail.phoneEmailHint.style.display = 'inline';
      e.preventDefault();
    }
    else {
      phoneOrEmail.phoneEmailHint.style.display = 'none';
    }
  }
}
var submitBtn = document.getElementById('submitBtn');
var email = document.getElementById('email');

submitBtn.addEventListener('click', phoneOrEmail.checkPhoneOrEmail);

var emailValidator = {
  email: document.getElementById('email'),
  emailHint: document.getElementById('emailHint'),
  format: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  checkEmail: function(e){
    if (emailValidator.email.value.match(emailValidator.format)){
      emailValidator.email.style.background= '#b3ff99';
      emailValidator.emailHint.style.display = 'none';
    }
    else {
      emailValidator.email.style.background= 'lightpink';

    }
  },
  checkEmailOnBlur: function(e){
    if (!emailValidator.email.value.match(emailValidator.format)){
      emailValidator.emailHint.style.display = 'inline';
    }
  }
}

emailValidator.email.addEventListener('keyup', emailValidator.checkEmail);
emailValidator.email.addEventListener('blur', emailValidator.checkEmailOnBlur);

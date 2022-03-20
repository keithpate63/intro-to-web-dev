// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne(answeroneinput) {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'cat') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'dog') {
    alert('Close, but my favorite animal runs away from dogs.');
  } else {
    alert('Wrong! Hint: My favorite animal meows.')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo(answertwoinput) {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 22) {
    alert("That's right!");
    hide('question-two');
    show('done');
  } else if(answerTwo < 42) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}
  if(answerThree == 'Millersville') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else if(answerOne == 'Etters') {
    alert('I used to live there');
  } else {
      alert('Wrong! Hint: It is a college town')
}
  if(answerFour == 'rabbit') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerOne == 'dog') {
    alert('I wish');
  } else {
    alert('It hops')
}
  if(answerFive == '2') {
    alert("That's right!");
    hide('question-five');
}   else if(answerOne == '3') {
    alert('One too many');
}   else {
    alert('Only allowed three total people in Millersville')

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}

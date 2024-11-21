// JS event listener for when a person clicks 'Submit'


const submitComment = document.getElementsByClassName('active')[0];

submitComment.addEventListener('click', function() {

  // capture input field text
  const inputPost = document.getElementsByClassName('post')[0];
  const inputName = document.getElementsByClassName('name')[0];

  // Get the values of these elements
  const postText = inputPost.value;
  const nameText = inputName.value;

  // create a new <span> with this input under the span class "new-comments"
  const newSpan = document.createElement('span');
  newSpan.textContent = `"${postText}, posted by ${nameText}"`;

  const lineBreak = document.createElement('br');
  
  const commentContainer = document.querySelector('.new-comments');
  commentContainer.appendChild(lineBreak);
  commentContainer.appendChild(newSpan);
  

})




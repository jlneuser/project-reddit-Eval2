const submitButton = document.getElementsByClassName('active')[0];

submitButton.addEventListener('click', function () {

const inputPost = document.getElementsByClassName('post')[0].value;
const inputName = document.getElementsByClassName('name')[0].value;

const newSpan = document.createElement('span');
newSpan.innerHTML = `${inputPost}, posted by ${inputName}`;
const lineBreak = document.createElement('br');

const commentContainer = document.querySelector('.new-comments');
commentContainer.appendChild(newSpan);
commentContainer.appendChild(lineBreak);
});

const rmButton = document.getElementsByClassName('rm-comments-btn')[0];
rmButton.addEventListener('click', function () {
  const commentsContainer = document.querySelector('.new-comments');
  commentsContainer.innerHTML = '';
})

const toggleButtons = document.querySelectorAll('.show-comments-btn');

// Add event listeners to each button
toggleButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Find the corresponding "new-comments" element (next sibling)
    const comments = this.parentElement.nextElementSibling;

    // Toggle the visibility of the comments
    if (comments.style.display === 'none' || comments.style.display === '') {
      comments.style.display = 'block'; // Show comments
    } else {
      comments.style.display = 'none'; // Hide comments
    }
  });
});

// submitButton.addEventListener('click', function () {

//   const inputPost = document.getElementsByClassName('post')[0].value;
//   const inputName = document.getElementsByClassName('name')[0].value;
  
//   const newSpan = document.createElement('span');
//   newSpan.innerHTML = `${inputPost}, posted by ${inputName}`;
//   const lineBreak = document.createElement('br');
  
//   const commentContainer = document.querySelector('.new-comments');
//   commentContainer.appendChild(newSpan);
//   commentContainer.appendChild(lineBreak);
//   });
document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text-input');
  const charCount = document.getElementById('char-count');
  const charRemaining = document.getElementById('char-remaining');
  const MAX_LENGTH = textInput.getAttribute('maxlength');

  textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    charCount.textContent = currentLength;
    charRemaining.textContent = MAX_LENGTH - currentLength;
  });
});

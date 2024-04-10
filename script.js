let inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if(e.key >= 0 && e.key <= 9) {  // Check if it is a number
            if(index !== inputs.length-1) {  // Check if it is not the last input field
                inputs[index + 1].focus();  // Shift the focus to next input field
            }
        } else if(e.key === "Backspace") {  // Check if backspace is pressed
            if(index !== 0) {  // Check if it is not the first input field
                inputs[index - 1].focus();  // Shift the focus to previous input field
            }
        }
    });
});
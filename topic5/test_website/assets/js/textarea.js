const textareaElem = document.querySelector('[name="bioTextArea"]');
const counterElem = document.querySelector('.counter');
const maxLengthCounter = 1500;

console.clear();

textareaElem.addEventListener('input', function (val) {
    let countInput = textareaElem.value.length;
    counterElem.innerHTML = `${countInput}/${maxLengthCounter}`;

    if (countInput > maxLengthCounter) {
        textareaElem.style.color = 'orangered';
        return;
    }

    textareaElem.style.color = 'black';

});
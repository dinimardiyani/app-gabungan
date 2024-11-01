const textElement = document.getElementById('text');
const alignmentOptions = 
document.querySelectorAll('input[name="alignment"]');
alignmentOptions.forEach(option => {
 option.addEventListener('change', () => {
 textElement.style.textAlign = option.value;
 });
});
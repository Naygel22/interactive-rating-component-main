const circlesBar = document.querySelector('.circlesBar');
const submitButton = document.querySelector('.submitButton');
const rateScreen = document.querySelector('.rateScreen');
const endScreen = document.querySelector('.endScreen');
const selectionBar = document.querySelector('.selectionBar');
const circlesNumber = 5;
let selectedText;
endScreen.classList.add('hidden');

function createCircleRating() {
    for (let i = 1; i <= circlesNumber; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle-container');
        circlesBar.appendChild(circle);

        let ratingNumber = document.createElement('span');
        ratingNumber.classList.add('ratingNumber');
        circle.appendChild(ratingNumber);

        ratingNumber.textContent = i;
    }
}

function highlightClickedRating() {
    const circles = document.querySelectorAll('.circle-container');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            circles.forEach(otherCircle => {
                otherCircle.classList.remove('active');
            });
            circle.classList.add('active');
            selectedText = circle.querySelector('.ratingNumber').textContent;

            selectionBar.textContent = `You selected ${selectedText} out of 5`;

            submitButton.addEventListener('click', () => {
                rateScreen.classList.add('hidden');
                endScreen.classList.remove('hidden');
            })
        });
    });
}

createCircleRating();
highlightClickedRating();




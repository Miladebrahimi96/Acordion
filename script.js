const showBtns = document.querySelectorAll('Button');
const cards = document.querySelectorAll('.card');


showBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        closeTabs();
        const caption = e.currentTarget.parentElement.parentElement.lastElementChild;
        if(!caption.classList.contains('active')){
            caption.classList.add('active');
            btn.style.transform = "rotate(90deg)";
        }
        else {
            caption.classList.remove('active');
            btn.style.transform = ""
        }
        
    })
});

function closeTabs () {
    cards.forEach(card => {
        const caption =  card.lastElementChild;
        caption.classList.remove('active');
    })
}

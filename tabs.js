let tabHeader = document.querySelectorAll('.tabHeader');

tabHeader.forEach((button) => {
    button.onclick = changeTabHeader;
});

function changeTabHeader() {
    let tabNumber = parseInt(this.dataset.tab);

    document.querySelector('.active-tab').classList.remove('active-tab');
    this.classList.add('active-tab');

    switch(tabNumber) {
        case 1:
            changeTabSection(tabNumber);
            break;
        case 2:
            changeTabSection(tabNumber);
            break;
        case 3:
            changeTabSection(tabNumber);
            break;
        case 4:
            changeTabSection(tabNumber);
            break;
        default:
            break;
    }

    
}


function changeTabSection(tabNumber) {
    let currentTabSec = document.querySelector('.show-tab');
    currentTabSec.classList.remove('show-tab');
    currentTabSec.classList.add('hide-tab');

    let newTabSec = document.getElementById('tabContent-' + tabNumber)
    newTabSec.classList.add('show-tab');
    newTabSec.classList.remove('hide-tab');
}
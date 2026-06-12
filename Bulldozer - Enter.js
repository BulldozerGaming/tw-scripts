(function () {
'use strict';

if (!location.href.includes('screen=am_farm')) {
UI.ErrorMessage('Csak Farmkezelő oldalon használható!', 5000);
return;
}

if (typeof window.FarmGod === 'undefined') {
UI.ErrorMessage('Futtasd először a FarmGod scriptet!', 5000);
return;
}

if (document.getElementById('crytekEnterButton')) {
return;
}

const btn = document.createElement('input');

btn.type = 'button';
btn.value = 'Enter';
btn.id = 'crytekEnterButton';
btn.className = 'btn';
btn.style.marginTop = '10px';
btn.style.width = '100%';
btn.style.height = '50px';
btn.style.fontSize = '20px';

const progressBar =
document.getElementById(
'FarmGodProgressbar'
);

if (!progressBar) {

UI.ErrorMessage(
'Futtasd először a FarmGod scriptet!',
5000
);

return;

}

btn.style.width = '70px';
btn.style.height = '45px';
btn.style.fontSize = '16px';
btn.style.marginTop = '0';

const container =
document.createElement('div');

container.style.textAlign = 'right';
container.style.margin = '5px 0';

container.appendChild(btn);

progressBar.insertAdjacentElement(
'afterend',
container
);

let timer = null;

let farmGodUsed = false;

let finishedMessageShown = false;

function stopHold() {

clearInterval(timer);

timer = null;

}

function sendFarmGod() {

const farmBtn = document.querySelector('.farmGod_icon');

if (!farmBtn) {

    stopHold();

if (farmGodUsed && !finishedMessageShown) {

finishedMessageShown = true;

UI.SuccessMessage(
    'Minden farm sikeresen kiküldve!',
    5000
);

} else if (!farmGodUsed) {

        UI.ErrorMessage(
            'Futtasd először a FarmGod scriptet!',
            5000
        );

    }

    return;
}

farmGodUsed = true;

farmBtn.click();

}
    

function startHold(e) {

e.preventDefault();

sendFarmGod();

clearInterval(timer);

timer = setInterval(sendFarmGod, 250);

}

btn.addEventListener('mousedown', startHold);
btn.addEventListener('touchstart', startHold, { passive: false });

document.addEventListener('mouseup', stopHold);
document.addEventListener('mouseleave', stopHold);

document.addEventListener('touchend', stopHold);
document.addEventListener('touchcancel', stopHold);

})();

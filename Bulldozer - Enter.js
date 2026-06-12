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

const saveBtn = document.querySelector('input[type="submit"]');

if (!saveBtn) {
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

const br = document.createElement('br');

saveBtn.parentNode.appendChild(br);
saveBtn.parentNode.appendChild(btn);

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

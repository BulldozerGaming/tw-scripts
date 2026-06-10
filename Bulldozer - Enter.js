(function () {
'use strict';

if (!location.href.includes('screen=am_farm')) {
alert('Csak Farmkezelő oldalon használható!');
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

const br = document.createElement('br');

saveBtn.parentNode.appendChild(br);
saveBtn.parentNode.appendChild(btn);

let timer = null;

function sendFarmGod() {

const farmBtn = document.querySelector('.farmGod_icon');

if (farmBtn) {
    farmBtn.click();
}

}

btn.addEventListener('mousedown', function () {

sendFarmGod();

timer = setInterval(sendFarmGod, 250);

});

document.addEventListener('mouseup', function () {

clearInterval(timer);
timer = null;

});

})();

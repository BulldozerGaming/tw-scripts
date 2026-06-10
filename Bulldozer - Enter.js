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

const br = document.createElement('br');

saveBtn.parentNode.appendChild(br);
saveBtn.parentNode.appendChild(btn);

let timer = null;

function sendEnter() {

    const target = document.activeElement || document;

    target.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true
    }));

    target.dispatchEvent(new KeyboardEvent('keyup', {
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
        bubbles: true
    }));
}

btn.addEventListener('mousedown', function () {

    sendEnter();

    timer = setInterval(sendEnter, 100);
});

document.addEventListener('mouseup', function () {

    clearInterval(timer);
    timer = null;
});

})();

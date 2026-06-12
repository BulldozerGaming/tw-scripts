(function () {
'use strict';

if (!location.href.includes('screen=am_farm')) {
    UI.ErrorMessage('Csak Farmkezelő oldalon használható!', 5000);
    return;
}

if (document.getElementById('crytekEnterButton')) {
    return;
}

const farmGodContent =
    document.querySelector('.farmGodContent');

if (!farmGodContent) {

    UI.ErrorMessage(
        'Futtasd először a FarmGod scriptet!',
        5000
    );

    return;
}

const btn = document.createElement('input');

btn.type = 'button';
btn.value = 'Enter';
btn.id = 'crytekEnterButton';
btn.className = 'btn';

btn.style.width = '70px';
btn.style.fontSize = '16px';

const container =
    document.createElement('div');

container.style.textAlign = 'right';
container.style.margin = '5px 0';

const isMobileView =
    !!document.getElementById(
        'mobileContent'
    );

if (isMobileView) {

    btn.style.height = '45px';

    if (window.innerWidth >= 700) {

        btn.style.marginRight =
            '3.5%';

    } else {

        btn.style.marginRight =
            '1.5%';

    }

} else {

    btn.style.height = '30px';

    btn.style.marginRight =
        '28px';

}

    
container.appendChild(btn);

/* FarmGod blokk első táblája */
const farmTable =
    farmGodContent.querySelector('table.vis');

if (farmTable) {

    farmTable.insertAdjacentElement(
        'beforebegin',
        container
    );

} else {

    farmGodContent.appendChild(
        container
    );

}

let timer = null;
let farmGodUsed = false;
let finishedMessageShown = false;

function stopHold() {

    clearInterval(timer);
    timer = null;

}

function sendFarmGod() {

    const farmBtn =
        document.querySelector('.farmGod_icon');

    if (!farmBtn) {

        stopHold();

        if (
            farmGodUsed &&
            !finishedMessageShown
        ) {

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

    timer = setInterval(
        sendFarmGod,
        250
    );

}

btn.addEventListener(
    'mousedown',
    startHold
);

btn.addEventListener(
    'touchstart',
    startHold,
    { passive: false }
);

document.addEventListener(
    'mouseup',
    stopHold
);

document.addEventListener(
    'mouseleave',
    stopHold
);

document.addEventListener(
    'touchend',
    stopHold
);

document.addEventListener(
    'touchcancel',
    stopHold
);

})();

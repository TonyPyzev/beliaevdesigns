document.body.onload = function() {
    setTimeout(function() {
        var splashscreen = document.getElementById("splashscreen");
        if( !splashscreen.classList.contains("done")) {
            splashscreen.classList.add("done");
            setTimeout(() => {
                splashscreen.style = "display: none";
            }, 500);
        }
    }, 2000);
}

function openAppBarMobile() {
    disableScroll();
    document.getElementById("appBarMobileBody").className = "app-bar-mobile-body open";
    document.getElementById("appBarMobile").style.borderRadius = "0em 0em 1em 1em";
    document.getElementById("circleIcon").style.display = "none";
    document.getElementById("xCircleIcon").style.display = "block";
}

function closeAppBarMobile() {
    enableScroll();
    document.getElementById("appBarMobileBody").className = "app-bar-mobile-body closed";
    document.getElementById("appBarMobile").style.borderRadius = "0em";
    document.getElementById("circleIcon").style.display = "block";
    document.getElementById("xCircleIcon").style.display = "none";
}

function showNumbers() {
    document.getElementById("phoneNumbers").className = "phone-numbers";
    document.getElementById("xIcon").style.display = "block";
    document.getElementById("phoneIcon").style.display = "none";
}

function hideNumbers() {
    document.getElementById("phoneNumbers").className = "phone-numbers phone-numbers__hidden";
    document.getElementById("xIcon").style.display = "none";
    document.getElementById("phoneIcon").style.display = "block";
}

function openCloseMsgHint() {
    var hint = document.getElementById("msg-hint");

    if(hint.className == "msg-hint msg-hint_hidden") {
        hint.className = "msg-hint";
    } else {
        hint.className = "msg-hint msg-hint_hidden"
    }
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputTel = document.getElementById('inputTel');
const inputMsg = document.getElementById('inputMsg');
const inputFile = document.getElementById('inputFile');

inputFile.addEventListener('change', e => {
  if(inputFile.value != '') {
    if (inputFile.files[0].size / 1024 / 1024 > 25) {
      inputFile.value = null;
      document.getElementById("inputFileLabel").innerHTML = 'Файл повинен бути до 25МБ';
    } else {
      const words = inputFile.value.split("\\");
      document.getElementById("inputFileLabel").innerHTML = words[words.length - 1];
    }
  }
});

inputTel.addEventListener('click', e => {
  inputTel.value = '+380';
});


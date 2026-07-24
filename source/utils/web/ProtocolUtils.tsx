// Module ID: 12387
// Function ID: 96318
// Name: launchChrome
// Dependencies: [4450, 2]

// Module 12387 (launchChrome)
import { os } from "capitalize";

function launchChrome(href) {
  let closure_0 = arg1;
  function handleBlur() {
    let c1 = true;
  }
  let c1 = false;
  const listener = window.addEventListener("blur", handleBlur);
  location.href = href;
  const timerId = setTimeout(() => {
    const removed = window.removeEventListener("blur", handleBlur);
    callback(c1);
  }, 1000);
}
function launchFirefox(str) {
  let closure_0 = arg1;
  if (str.startsWith("discord:")) {
    const _document = document;
    if (null == body) {
      const _process3 = process;
      return process.nextTick(() => callback(false));
    } else {
      const _document2 = document;
      const element = <iframe />;
      obj.appendChild(element);
      if (null != element.contentWindow) {
        element.contentWindow.location.href = str;
      }
      const _process2 = process;
      process.nextTick(() => callback(true));
      const _window = window;
      const timerId = window.setTimeout(() => {
        let parentElement;
        if (null != element) {
          parentElement = element.parentElement;
        }
        let tmp3 = null;
        if (null != parentElement) {
          tmp3 = parentElement;
        }
        if (null !== tmp3) {
          body.removeChild(element);
        }
      }, 1000);
    }
    obj = body;
  } else {
    const _location = location;
    location.href = str;
    const _process = process;
    return process.nextTick(() => callback(true));
  }
}
function launchSteam(arg0, arg1) {
  arg1(false);
}
function launchMobile(href) {
  let closure_0 = arg1;
  location.href = href;
  process.nextTick(() => callback(true));
}
let obj = {};
let family;
if (null != os) {
  family = os.family;
}
if ("Android" !== family) {
  const os2 = require("capitalize").os;
  let family1;
  if (null != os2) {
    family1 = os2.family;
  }
  if ("iOS" !== family1) {
    if ("Gecko" === require("capitalize").layout) {
      launchChrome = launchFirefox;
    } else if (null != require("capitalize").ua) {
      const ua = require("capitalize").ua;
      if (-1 !== ua.indexOf("Valve Steam GameOverlay")) {
        launchChrome = launchSteam;
      }
    }
  }
  obj.launch = launchChrome;
  const result = require("set").fileFinishedImporting("utils/web/ProtocolUtils.tsx");
  exports.default = obj;
}
launchChrome = launchMobile;

// Module ID: 12241
// Function ID: 93899
// Name: launchChrome
// Dependencies: [5, 664]

// Module 12241 (launchChrome)
import { os } from "asyncGeneratorStep";

function launchChrome(href) {
  function handleBlur() {
    let closure_1 = true;
  }
  let closure_1 = false;
  const listener = window.addEventListener("blur", handleBlur);
  location.href = href;
  const timerId = setTimeout(() => {
    const removed = window.removeEventListener("blur", handleBlur);
    arg1(closure_1);
  }, 1000);
}
function launchFirefox(str) {
  if (str.startsWith("discord:")) {
    const _document = document;
    if (null == body) {
      const _process3 = process;
      return process.nextTick(() => arg1(false));
    } else {
      const _document2 = document;
      const element = <iframe />;
      obj.appendChild(element);
      if (null != element.contentWindow) {
        element.contentWindow.location.href = str;
      }
      const _process2 = process;
      process.nextTick(() => arg1(true));
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
    const obj = body;
  } else {
    const _location = location;
    location.href = str;
    const _process = process;
    return process.nextTick(() => arg1(true));
  }
}
function launchSteam(arg0, arg1) {
  arg1(false);
}
function launchMobile(href) {
  location.href = href;
  process.nextTick(() => arg1(true));
}
const obj = {};
let family;
if (null != os) {
  family = os.family;
}
if ("Android" !== family) {
  const os2 = require("asyncGeneratorStep").os;
  let family1;
  if (null != os2) {
    family1 = os2.family;
  }
  if ("iOS" !== family1) {
    if ("Gecko" === require("asyncGeneratorStep").layout) {
      launchChrome = launchFirefox;
    } else if (null != require("asyncGeneratorStep").ua) {
      const ua = require("asyncGeneratorStep").ua;
      if (-1 !== ua.indexOf("Valve Steam GameOverlay")) {
        launchChrome = launchSteam;
      }
    }
  }
  obj.launch = launchChrome;
  const result = require("module_664").fileFinishedImporting("utils/web/ProtocolUtils.tsx");
  exports.default = obj;
}
launchChrome = launchMobile;

// Module ID: 4441
// Function ID: 38860
// Name: getChromeVersion
// Dependencies: [5, 664]
// Exports: canUseWebp, isFirefox, supportsHEVCAlpha

// Module 4441 (getChromeVersion)
import { name } from "asyncGeneratorStep";
import module_664 from "module_664";

function getChromeVersion() {
  return num2;
}
function getElectronVersion() {
  return parsed;
}
function getFirefoxVersion() {
  return parsed1;
}
function getEdgeVersion() {
  return parsed2;
}
function getSafariVersion() {
  return num;
}
function isSafari(userAgent) {
  let str = userAgent;
  if (userAgent === undefined) {
    const _navigator = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  let tmp2 = -1 !== formatted.indexOf("safari");
  if (tmp2) {
    tmp2 = -1 === formatted.indexOf("chrome");
  }
  if (tmp2) {
    tmp2 = -1 !== formatted.indexOf("version/");
  }
  return tmp2;
}
let str = "unknown";
if (null != name) {
  str = name;
}
const str2 = str.toLowerCase();
let num = -1;
let num2 = -1;
if ("chrome" === str2.toLowerCase()) {
  const version = require("asyncGeneratorStep").version;
  let str3 = "";
  if (null != version) {
    str3 = version;
  }
  num2 = parseInt(str3, 10);
}
let parsed = num;
if ("electron" === str2.toLowerCase()) {
  const version2 = require("asyncGeneratorStep").version;
  let str4 = "";
  if (null != version2) {
    str4 = version2;
  }
  parsed = parseInt(str4, 10);
}
let parsed1 = num;
if ("firefox" === str2.toLowerCase()) {
  const version3 = require("asyncGeneratorStep").version;
  let str5 = "";
  if (null != version3) {
    str5 = version3;
  }
  parsed1 = parseInt(str5, 10);
}
let parsed2 = num;
if ("edge" === str2.toLowerCase()) {
  const version4 = require("asyncGeneratorStep").version;
  let str6 = "";
  if (null != version4) {
    str6 = version4;
  }
  parsed2 = parseInt(str6, 10);
}
if ("safari" === str2.toLowerCase()) {
  const version5 = require("asyncGeneratorStep").version;
  let str7 = "";
  if (null != version5) {
    str7 = version5;
  }
  num = parseInt(str7, 10);
}
const result = module_664.fileFinishedImporting("utils/BrowserUtils.tsx");

export { getChromeVersion };
export { getElectronVersion };
export { getFirefoxVersion };
export { getEdgeVersion };
export { getSafariVersion };
export const canUseWebp = function canUseWebp() {
  let tmp = -1 !== getChromeVersion();
  if (!tmp) {
    tmp = -1 !== getElectronVersion();
  }
  if (!tmp) {
    tmp = -1 !== getFirefoxVersion();
  }
  if (!tmp) {
    tmp = -1 !== getEdgeVersion();
  }
  if (!tmp) {
    tmp = getSafariVersion() >= 14;
  }
  return tmp;
};
export { isSafari };
export const isFirefox = function isFirefox() {
  let str = arg0;
  if (arg0 === undefined) {
    const _navigator = navigator;
    str = navigator.userAgent;
  }
  const formatted = str.toLowerCase();
  return -1 !== formatted.indexOf("firefox");
};
export const supportsHEVCAlpha = function supportsHEVCAlpha() {
  const _navigator = window.navigator;
  const mediaCapabilities = _navigator.mediaCapabilities;
  let decodingInfo;
  if (null != mediaCapabilities) {
    decodingInfo = mediaCapabilities.decodingInfo;
  }
  return isSafari(_navigator.userAgent) && null != decodingInfo;
};

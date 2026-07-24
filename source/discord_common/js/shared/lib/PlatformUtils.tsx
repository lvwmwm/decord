// Module ID: 4368
// Function ID: 38769
// Name: isTablet
// Dependencies: [646, 2]

// Module 4368 (isTablet)
import { product } from "capitalize";
import set from "set";

let set = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]);
let platform;
if (null != window) {
  const _navigator = window.navigator;
  if (null != _navigator) {
    platform = _navigator.platform;
  }
}
let tmp3 = "MacIntel" === platform;
if (tmp3) {
  let standalone;
  if (null != window) {
    const _navigator2 = window.navigator;
    if (null != _navigator2) {
      standalone = _navigator2.standalone;
    }
  }
  tmp3 = undefined !== standalone;
}
if (tmp3) {
  let maxTouchPoints;
  if (null != window) {
    const _navigator3 = window.navigator;
    if (null != _navigator3) {
      maxTouchPoints = _navigator3.maxTouchPoints;
    }
  }
  tmp3 = maxTouchPoints > 1;
}
let str = "";
let str2 = "";
if (null != product) {
  str2 = product;
}
const tmp6 = set.has(str2) || tmp3;
let hasItem = !tmp6;
if (hasItem) {
  let family;
  if (null != require("capitalize")) {
    const os = require("capitalize").os;
    if (null != os) {
      family = os.family;
    }
  }
  if (null != family) {
    str = family;
  }
  hasItem = set1.has(str);
}
let family1;
if (null != require("capitalize")) {
  const os2 = require("capitalize").os;
  if (null != os2) {
    family1 = os2.family;
  }
}
let family2;
if (null != require("capitalize")) {
  const os3 = require("capitalize").os;
  if (null != os3) {
    family2 = os3.family;
  }
}
const result = set.fileFinishedImporting("../discord_common/js/shared/lib/PlatformUtils.tsx");

export const isTablet = tmp6;
export const isMobile = hasItem;
export const isIOSWeb = "iOS" === family1;
export const isAndroidWeb = "Android" === family2;

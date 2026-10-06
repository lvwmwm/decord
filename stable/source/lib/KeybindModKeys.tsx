// Module ID: 13613
// Function ID: 13614
// Name: KeybindModKeys
// Dependencies: [1370, 2]

// Module 13613 (KeybindModKeys)
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let str;
let str2;
let str3;
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isMac()) {
  str = "cmd";
} else {
  const _module1 = PlatformUtils;
  str = "ctrl";
}
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isMac()) {
  str2 = "opt";
} else {
  const _module3 = PlatformUtils;
  str2 = "alt";
}
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isMac()) {
  str3 = "return";
} else {
  const _module5 = PlatformUtils;
  str3 = "enter";
}
const result = size.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;

// Module ID: 14355
// Function ID: 14356
// Name: KeybindModKeys
// Dependencies: [1382, 2]

// Module 14355 (KeybindModKeys)
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
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

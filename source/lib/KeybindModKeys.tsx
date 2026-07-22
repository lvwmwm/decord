// Module ID: 12714
// Function ID: 97613
// Name: modKey
// Dependencies: []

// Module 12714 (modKey)
const _module = require(dependencyMap[0]);
if (_module.isMac()) {
  let str = "cmd";
} else {
  const _module1 = require(dependencyMap[0]);
  str = "ctrl";
}
const _module2 = require(dependencyMap[0]);
if (_module2.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = require(dependencyMap[0]);
  str2 = "alt";
}
const _module4 = require(dependencyMap[0]);
if (_module4.isMac()) {
  let str3 = "return";
} else {
  const _module5 = require(dependencyMap[0]);
  str3 = "enter";
}
const _module6 = require(dependencyMap[1]);
const result = _module6.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;

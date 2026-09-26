// Module ID: 16958
// Function ID: 16959
// Name: getRandomNumberInRange
// Dependencies: [2]
// Exports: default

// Module 16958 (getRandomNumberInRange)
import size from "module_2" /* 2 */;

const fn = function n(arg0, arg1) {
  return Math.random() * (arg1 - arg0) + arg0;
};
fn.__closure = {};
fn.__workletHash = 3489295446061;
fn.__initData = { code: "function getRandomNumberInRange_getRandomNumberInRangeTsx1(min,max){return Math.random()*(max-min)+min;}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/getRandomNumberInRange.tsx");

export default fn;

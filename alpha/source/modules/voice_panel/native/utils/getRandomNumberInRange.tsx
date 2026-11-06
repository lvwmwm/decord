// Module ID: 19559
// Function ID: 19560
// Name: getRandomNumberInRange
// Dependencies: [2]
// Exports: default

// Module 19559 (getRandomNumberInRange)
import size from "module_2" /* 2 */;

let tmp2;
const items = [{ code: "(function getRandomNumberInRange_getRandomNumberInRangeTsx1(min,max){return Math.random()*(max-min)+min;})" }];
[tmp2] = items;
function getRandomNumberInRange(arg0, arg1) {
  return Math.random() * (arg1 - arg0) + arg0;
}
getRandomNumberInRange.__workletHash = 13744554648652;
getRandomNumberInRange.__initData = tmp2;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/getRandomNumberInRange.tsx");

export default getRandomNumberInRange;

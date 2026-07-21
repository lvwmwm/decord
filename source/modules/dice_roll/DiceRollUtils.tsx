// Module ID: 11418
// Function ID: 88803
// Name: sumResults
// Dependencies: []
// Exports: getBarText

// Module 11418 (sumResults)
function sumResults(arr) {
  return arr.reduce((arg0, arg1) => arg0 + arg1, 0);
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(arg0, results) {
  if (arg0) {
    const intl2 = require(dependencyMap[0]).intl;
    let str = intl2.string(require(dependencyMap[0]).t.x/FIRX);
  } else {
    str = "";
    if (null != results) {
      const intl = require(dependencyMap[0]).intl;
      const obj = { total: sumResults(results) };
      str = intl.formatToPlainString(require(dependencyMap[0]).t.xU4pF1, obj);
    }
  }
  return str;
};

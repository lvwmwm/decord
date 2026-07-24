// Module ID: 11457
// Function ID: 89105
// Name: sumResults
// Dependencies: [1212, 2]
// Exports: getBarText

// Module 11457 (sumResults)
function sumResults(arr) {
  return arr.reduce((arg0, arg1) => arg0 + arg1, 0);
}
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(arg0, results) {
  if (arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let str = intl2.string(require(1212) /* getSystemLocale */.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj = { total: sumResults(results) };
      str = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.xU4pF1, obj);
    }
  }
  return str;
};

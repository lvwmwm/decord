// Module ID: 11558
// Function ID: 11559
// Name: getBarText
// Dependencies: [1236, 2]
// Exports: getBarText

// Module 11558 (getBarText)
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  if (flag) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let str = intl2.string(require(1236) /* getSystemLocale */.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = require(1236) /* getSystemLocale */.intl;
      const obj = { total: null };
      obj[0] = results.reduce((arg0, arg1) => arg0 + arg1, 0);
      str = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.xU4pF1, obj);
    }
  }
  return str;
};

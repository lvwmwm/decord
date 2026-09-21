// Module ID: 12533
// Function ID: 12534
// Name: DiceRollUtils
// Dependencies: [1119, 2]
// Exports: getBarText

// Module 12533 (DiceRollUtils)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  if (flag) {
    const intl2 = util.intl;
    let str = intl2.string(util.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = util.intl;
      const obj = { total: results.reduce((acc, item) => acc + item, 0) };
      str = intl.formatToPlainString(util.t.xU4pF1, obj);
    }
  }
  return str;
};

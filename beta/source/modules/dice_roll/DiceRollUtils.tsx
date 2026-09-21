// Module ID: 12638
// Function ID: 12639
// Name: DiceRollUtils
// Dependencies: [1115, 2]
// Exports: getBarText

// Module 12638 (DiceRollUtils)
import util from "util" /* 1115 */;
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

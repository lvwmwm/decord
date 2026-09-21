// Module ID: 17041
// Function ID: 17042
// Name: VibegrationsSubagentMarks
// Dependencies: [3682, 1119, 2]
// Exports: assignSubagentMarkKeys, isVibegrationsSubagentMarkKey, subagentMarkName

// Module 17041 (VibegrationsSubagentMarks)
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import size from "module_2" /* 2 */;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
const dependencyMap = {
  snail() {
    return _modDef3682["2l3AEQ"];
  },
  goat() {
    return _modDef3682["+FPL+I"];
  },
  frog() {
    return _modDef3682.w4GOfR;
  },
  bunny() {
    return _modDef3682.XmZT9M;
  },
  cat() {
    return _modDef3682.NnydwQ;
  },
  caterpillar() {
    return _modDef3682["4iXcNT"];
  },
  butterfly() {
    return _modDef3682.DoTGt5;
  },
  dog() {
    return _modDef3682["9zxqmP"];
  },
  spider() {
    return _modDef3682.HF0T3L;
  },
  bee() {
    return _modDef3682.XTzDga;
  },
  bot() {
    return _modDef3682.abtC2b;
  }
};
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsSubagentMarks.tsx");

export const VIBEGRATIONS_SUBAGENT_MARK_KEYS = items;
export const isVibegrationsSubagentMarkKey = function isVibegrationsSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
};
export const subagentMarkName = function subagentMarkName(helperMark) {
  const intl = util.intl;
  return intl.string(dependencyMap[helperMark]());
};
export const assignSubagentMarkKeys = function assignSubagentMarkKeys(arr) {
  let length = items;
  c1 = 0;
  let str = arr[0];
  if (str == null) {
    str = "";
  }
  let num = 0;
  let num2 = 0;
  if (0 < str.length) {
    do {
      let result = (31 * num2 + str.charCodeAt(num)) % arr.length;
      c1 = result;
      num = num + 1;
      num2 = result;
      length = str.length;
    } while (num < length);
  }
  const map = new Map();
  const item = arr.forEach((item, index) => {
    const result = map.set(item, length[(c1 + index) % length.length]);
  });
  return map;
};

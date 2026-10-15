// Module ID: 12146
// Function ID: 12147
// Name: ConjureSubagentMarks
// Dependencies: [3862, 1126, 2]
// Exports: assignSubagentMarkKeys, isConjureSubagentMarkKey, subagentMarkName

// Module 12146 (ConjureSubagentMarks)
import intl2 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

let map;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
let closure_4 = {
  snail() {
    return _modDef3862.ABeVsS;
  },
  goat() {
    return _modDef3862.dhXay8;
  },
  frog() {
    return _modDef3862.SHeweG;
  },
  bunny() {
    return _modDef3862.FytFE1;
  },
  cat() {
    return _modDef3862["5c+sHs"];
  },
  caterpillar() {
    return _modDef3862["/FYcne"];
  },
  butterfly() {
    return _modDef3862["Ib/AxK"];
  },
  dog() {
    return _modDef3862.zDjBR1;
  },
  spider() {
    return _modDef3862["6sxyrN"];
  },
  bee() {
    return _modDef3862.cVtefg;
  },
  bot() {
    return _modDef3862.MjCw0v;
  }
};
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureSubagentMarks.tsx");

export const CONJURE_SUBAGENT_MARK_KEYS = items;
export const isConjureSubagentMarkKey = function isConjureSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
};
export const subagentMarkName = function subagentMarkName(helperMark) {
  const intl = intl2.intl;
  return intl.string(closure_4[helperMark]());
};
export const assignSubagentMarkKeys = function assignSubagentMarkKeys(arr) {
  let length;
  let closure_0 = items;
  let c1 = 0;
  let str = arr[0];
  arr = items;
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
  map = new Map();
  const item = arr.forEach((item, index) => {
    const result = map.set(item, length[(c1 + index) % length.length]);
  });
  return map;
};

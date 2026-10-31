// Module ID: 12713
// Function ID: 12714
// Name: ConjureSubagentMarks
// Dependencies: [3868, 1113, 2]
// Exports: assignSubagentMarkKeys, isConjureSubagentMarkKey, subagentMarkName

// Module 12713 (ConjureSubagentMarks)
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import size from "module_2" /* 2 */;

let map;

const items = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"];
let closure_4 = {
  snail() {
    return _modDef3868.ABeVsS;
  },
  goat() {
    return _modDef3868.dhXay8;
  },
  frog() {
    return _modDef3868.SHeweG;
  },
  bunny() {
    return _modDef3868.FytFE1;
  },
  cat() {
    return _modDef3868["5c+sHs"];
  },
  caterpillar() {
    return _modDef3868["/FYcne"];
  },
  butterfly() {
    return _modDef3868["Ib/AxK"];
  },
  dog() {
    return _modDef3868.zDjBR1;
  },
  spider() {
    return _modDef3868["6sxyrN"];
  },
  bee() {
    return _modDef3868.cVtefg;
  },
  bot() {
    return _modDef3868.MjCw0v;
  }
};
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureSubagentMarks.tsx");

export const CONJURE_SUBAGENT_MARK_KEYS = items;
export function isConjureSubagentMarkKey(helperMark) {
  return items.includes(helperMark);
}
export function subagentMarkName(helperMark) {
  const intl = intl2.intl;
  return intl.string(closure_4[helperMark]());
}
export function assignSubagentMarkKeys(arr) {
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
}

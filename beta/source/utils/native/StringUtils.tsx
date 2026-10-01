// Module ID: 10364
// Function ID: 10365
// Dependencies: [10363, 2]
// Exports: splitGraphemes

// Module 10364
import _modDef10363 from "module_10363" /* 10363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/StringUtils.tsx");

export const splitGraphemes = function splitGraphemes(memo) {
  const obj = _modDef10363();
  const items = [];
  let match = obj.exec(memo);
  let num = 0;
  let num2 = 0;
  if (null !== match) {
    do {
      if (match.index > num) {
        let push = items.push;
        let _Array = Array;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, Array.from(memo.slice(num, match.index)), 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
      }
      let arr = items.push(match[0]);
      num = obj.lastIndex;
      match = obj.exec(memo);
      num2 = num;
    } while (null !== match);
  }
  if (num2 < memo.length) {
    const push2 = items.push;
    const _Array2 = Array;
    const items2 = [];
    HermesBuiltin.arraySpread(items2, Array.from(memo.slice(num2)), 0);
    HermesBuiltin.apply(push2, items2, items);
  }
  return items;
};

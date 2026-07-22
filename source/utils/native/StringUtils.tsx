// Module ID: 8516
// Function ID: 67920
// Name: splitGraphemes
// Dependencies: []
// Exports: splitGraphemes

// Module 8516 (splitGraphemes)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/native/StringUtils.tsx");

export const splitGraphemes = function splitGraphemes(closure_0) {
  const obj = importDefault(dependencyMap[0])();
  const items = [];
  let match = obj.exec(closure_0);
  let num = 0;
  let num2 = 0;
  if (null !== match) {
    do {
      if (match.index > num) {
        let push = items.push;
        let _Array = Array;
        let items1 = [];
        let tmp2 = items1;
        let num3 = 0;
        let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(closure_0.slice(num, match.index)), 0);
        let tmp4 = push;
        let tmp5 = items1;
        let tmp6 = items;
        let applyResult = HermesBuiltin.apply(items1, items);
      }
      let arr = items.push(match[0]);
      num = obj.lastIndex;
      match = obj.exec(closure_0);
      num2 = num;
    } while (null !== match);
  }
  if (num2 < closure_0.length) {
    const push2 = items.push;
    const _Array2 = Array;
    const items2 = [];
    HermesBuiltin.arraySpread(Array.from(closure_0.slice(num2)), 0);
    HermesBuiltin.apply(items2, items);
  }
  return items;
};

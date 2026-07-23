// Module ID: 13152
// Function ID: 101450
// Name: __exportStarResult12
// Dependencies: []

// Module 13152 (__exportStarResult12)
arg5.CollapseNumberRange = function CollapseNumberRange(arg0, items, getInternalSlots) {
  const internalSlots = getInternalSlots.getInternalSlots(arg0);
  const regExp = new RegExp("s?[".concat(internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, "]s?"));
  const findIndexResult = items.findIndex((type) => {
    let isMatch = "literal" === type.type;
    if (isMatch) {
      isMatch = regExp.test(type.value);
    }
    return isMatch;
  });
  items = [];
  let diff = findIndexResult - 1;
  if (diff >= 0) {
    if (regExp.has(items[diff].type)) {
      let arr = items.unshift(items[diff]);
      diff = diff - 1;
      while (diff >= 0) {
        let tmp7 = regExp;
        if (!regExp.has(items[diff].type)) {
          break;
        }
      }
    }
  }
  const mapped = items.map((value) => value.value);
  if (Array.from(mapped.join("")).length > 1) {
    const _Array3 = Array;
    arr = Array.from(items);
    arr.splice(findIndexResult - items.length, items.length);
    return arr;
  } else {
    const items1 = [];
    let sum = findIndexResult + 1;
    if (sum < items.length) {
      if (regExp.has(items[sum].type)) {
        items1.push(items[sum]);
        sum = sum + 1;
        while (sum < items.length) {
          let tmp11 = regExp;
          if (!regExp.has(items[sum].type)) {
            break;
          }
        }
      }
    }
    const _Array = Array;
    const mapped1 = items1.map((value) => value.value);
    if (Array.from(mapped1.join("")).length > 1) {
      const _Array2 = Array;
      const arr2 = Array.from(items);
      arr2.splice(findIndexResult + 1, items1.length);
      return arr2;
    } else {
      return items;
    }
  }
};
const set = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

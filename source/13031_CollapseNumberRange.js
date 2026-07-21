// Module ID: 13031
// Function ID: 99261
// Name: CollapseNumberRange
// Dependencies: []

// Module 13031 (CollapseNumberRange)
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
    if (set.has(items[diff].type)) {
      let arr = items.unshift(items[diff]);
      diff = diff - 1;
      while (diff >= 0) {
        let tmp7 = set;
        if (!set.has(items[diff].type)) {
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
      if (set.has(items[sum].type)) {
        items1.push(items[sum]);
        sum = sum + 1;
        while (sum < items.length) {
          let tmp11 = set;
          if (!set.has(items[sum].type)) {
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
const set = new Set(["_headers", "def", "GUILD_CHANNEL_RESYNC_REQUESTED", "<string:63984128>", "<string:63984384>", "<string:459164160>", "<string:459210756>", "<string:459276292>", "<string:459341828>", "<string:459407364>"]);

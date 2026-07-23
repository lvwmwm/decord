// Module ID: 5725
// Function ID: 49212
// Name: matchSorter
// Dependencies: [5726, 5727]
// Exports: matchSorter

// Module 5725 (matchSorter)
import regExp from "regExp";

function matchSorter(valueResult, query, arg2) {
  let obj;
  let threshold;
  let tmp = arg2;
  let closure_0 = query;
  obj = arg2;
  if (undefined === arg2) {
    obj = {};
    tmp = obj;
  }
  ({ keys: obj, threshold } = tmp);
  if (undefined === threshold) {
    threshold = obj.MATCHES;
  }
  let baseSort = tmp.baseSort;
  if (undefined === baseSort) {
    baseSort = threshold;
  }
  let fn = tmp.sorter;
  if (undefined === fn) {
    fn = (arr) => arr.sort((arg0, arg1) => {
      let keyIndex;
      let keyIndex2;
      let rank;
      let rank2;
      ({ rank, keyIndex } = arg0);
      ({ rank: rank2, keyIndex: keyIndex2 } = arg1);
      if (rank === rank2) {
        if (keyIndex === keyIndex2) {
          let num2 = tmp(arg0, arg1);
        } else {
          num2 = 1;
          if (keyIndex < keyIndex2) {
            num2 = -1;
          }
        }
      } else {
        let num = 1;
        if (rank > rank2) {
          num = -1;
        }
        return num;
      }
    });
  }
  return fn(valueResult.reduce(function reduceItemsToRanked(arr, item, index) {
    let keyThreshold;
    let rank;
    let tmp = (function getHighestRanking(rankedValue, closure_2, closure_0, threshold) {
      let closure_1 = threshold;
      if (closure_2) {
        const items = [];
        for (let num3 = 0; num3 < length; num3 = num3 + 1) {
          let tmp2 = closure_2[num3];
          let tmp3 = outer2_8;
          let tmp5 = outer2_7;
          let tmp4 = outer2_8(tmp2);
          let arr2 = outer2_7(rankedValue, tmp2);
          let length2 = arr2.length;
          for (let num4 = 0; num4 < length2; num4 = num4 + 1) {
            let obj = { itemValue: arr2[num4], attributes: tmp4 };
            let arr = items.push(obj);
          }
        }
        obj = { rankedValue, rank: outer2_2.NO_MATCH, keyIndex: -1, keyThreshold: threshold.threshold };
        return items.reduce((arg0, arg1, arg2) => {
          let attributes;
          let itemValue;
          let keyIndex;
          let keyThreshold;
          let maxRanking;
          let minRanking;
          let rank;
          let rankedValue;
          let threshold;
          ({ rank, rankedValue, keyIndex, keyThreshold } = arg0);
          ({ itemValue, attributes } = arg1);
          const tmp = outer3_5(itemValue, closure_0, closure_1);
          ({ minRanking, maxRanking, threshold } = attributes);
          if (tmp >= minRanking) {
            minRanking = tmp;
            if (tmp > maxRanking) {
              minRanking = maxRanking;
            }
          }
          if (minRanking > rank) {
            rank = minRanking;
            keyIndex = arg2;
            keyThreshold = threshold;
            rankedValue = itemValue;
          }
          const obj = { rankedValue, rank, keyIndex, keyThreshold };
          return obj;
        }, obj);
      } else {
        obj = { rankedValue, rank: outer2_5(rankedValue, closure_0, threshold), keyIndex: -1, keyThreshold: threshold.threshold };
        return obj;
      }
    })(item, closure_2, query, obj);
    ({ keyThreshold, rank } = tmp);
    if (undefined === keyThreshold) {
      keyThreshold = threshold;
    }
    if (rank >= keyThreshold) {
      obj = { item, index };
      arr.push(query.default({}, tmp, obj));
    }
    return arr;
  }, [])).map((item) => item.item);
}
function getMatchRanking(arg0, arg1, keepDiacritics) {
  const arr = prepareValueForComparison(arg0, keepDiacritics);
  const arr2 = prepareValueForComparison(arg1, keepDiacritics);
  if (arr2.length > arr.length) {
    let ACRONYM = obj.NO_MATCH;
  } else if (arr === arr2) {
    ACRONYM = obj.CASE_SENSITIVE_EQUAL;
  } else {
    const formatted = arr.toLowerCase();
    const formatted1 = arr2.toLowerCase();
    if (formatted === formatted1) {
      ACRONYM = obj.EQUAL;
    } else if (formatted.startsWith(formatted1)) {
      ACRONYM = obj.STARTS_WITH;
    } else if (formatted.includes(` ${arr3}`)) {
      ACRONYM = obj.WORD_STARTS_WITH;
    } else if (formatted.includes(formatted1)) {
      ACRONYM = obj.CONTAINS;
    } else if (1 === formatted1.length) {
      ACRONYM = obj.NO_MATCH;
    } else {
      obj = (function getAcronym(formatted) {
        let c0 = "";
        let parts = formatted.split(" ");
        let item = parts.forEach((str) => {
          const parts = str.split("-");
          const item = parts.forEach((str) => {
            outer1_0 = outer1_0 + str.substr(0, 1);
          });
        });
        return c0;
      })(formatted);
      if (obj.includes(formatted1)) {
        ACRONYM = obj.ACRONYM;
      } else {
        ACRONYM = (function getClosenessRanking(formatted, formatted1) {
          function findMatchingCharacter(arg0, formatted, arg2) {
            let sum = arg2;
            if (arg2 < formatted.length) {
              while (formatted[sum] !== arg0) {
                sum = sum + 1;
              }
              closure_0 = closure_0 + 1;
              return sum + 1;
            }
            return -1;
          }
          let c0 = 0;
          const result = findMatchingCharacter(formatted1[0], formatted, 0);
          if (result < 0) {
            return outer1_2.NO_MATCH;
          } else {
            let tmp2 = result;
            let num3 = 1;
            let tmp3 = result;
            if (1 < formatted1.length) {
              const result1 = findMatchingCharacter(formatted1[num3], formatted, tmp2);
              while (result1 > -1) {
                num3 = num3 + 1;
                tmp2 = result1;
                tmp3 = result1;
              }
              return outer1_2.NO_MATCH;
            }
            return outer1_2.MATCHES + c0 / formatted1.length * (1 / (tmp3 - result));
          }
        })(formatted, formatted1);
      }
    }
  }
  return ACRONYM;
}
function prepareValueForComparison(arg0, keepDiacritics) {
  const text = `${arg0}`;
  let defaultResult = text;
  if (!keepDiacritics.keepDiacritics) {
    defaultResult = regExp.default(`${arg0}`);
  }
  return defaultResult;
}
function getItemValues(arg0, key) {
  let str = key;
  if ("object" === typeof key) {
    str = key.key;
  }
  if ("function" === typeof str) {
    let strResult = str(arg0);
  } else {
    strResult = null;
    if (null != arg0) {
      const _Object = Object;
      if (hasOwnProperty.call(arg0, str)) {
        strResult = arg0[str];
      } else {
        strResult = null;
        if (str.includes(".")) {
          const parts = str.split(".");
          const items = [arg0];
          let arr3 = items;
          let num2 = 0;
          let tmp4 = items;
          if (0 < parts.length) {
            do {
              let tmp5 = parts[num2];
              let items1 = [];
              let length2 = arr3.length;
              let tmp6 = tmp3;
              let num3 = 0;
              let tmp7 = items1;
              if (0 < length2) {
                do {
                  let tmp8 = arr3[num3];
                  let combined = items1;
                  let tmp10 = tmp6;
                  if (null != tmp8) {
                    let _Object2 = Object;
                    if (hasOwnProperty2.call(tmp8, tmp5)) {
                      let tmp11 = tmp8[tmp5];
                      combined = items1;
                      tmp10 = tmp11;
                      if (null != tmp11) {
                        let arr = items1.push(tmp11);
                        combined = items1;
                        tmp10 = tmp11;
                      }
                    } else {
                      combined = items1;
                      tmp10 = tmp6;
                      if ("*" === tmp5) {
                        combined = items1.concat(tmp8);
                        tmp10 = tmp6;
                      }
                    }
                  }
                  num3 = num3 + 1;
                  items1 = combined;
                  tmp6 = tmp10;
                  tmp7 = combined;
                  let tmp13 = tmp8;
                  tmp3 = tmp10;
                } while (num3 < length2);
              }
              num2 = num2 + 1;
              arr3 = tmp7;
              tmp4 = tmp7;
            } while (num2 < length);
          }
          const _Array = Array;
          let applyResult = tmp4;
          if (Array.isArray(tmp4[0])) {
            const items2 = [];
            const concat = items2.concat;
            applyResult = concat.apply(items2, tmp4);
          }
          return applyResult;
        }
      }
    }
  }
  if (null == strResult) {
    let items3 = [];
  } else {
    const _Array2 = Array;
    items3 = strResult;
    if (!Array.isArray(strResult)) {
      const _String = String;
      const items4 = [String(strResult)];
      items3 = items4;
    }
  }
  return items3;
}
function getKeyAttributes(date) {
  if ("string" === typeof date) {
    let defaultResult = closure_4;
  } else {
    defaultResult = _extends.default({}, closure_4, date);
  }
  return defaultResult;
}
_interopDefaultLegacy(require("_extends"));
let obj = { CASE_SENSITIVE_EQUAL: 7, EQUAL: 6, STARTS_WITH: 5, WORD_STARTS_WITH: 4, CONTAINS: 3, ACRONYM: 2, MATCHES: 1, NO_MATCH: 0 };
matchSorter.rankings = obj;
function defaultBaseSortFn(rankedValue, rankedValue2) {
  return String(rankedValue.rankedValue).localeCompare(String(rankedValue2.rankedValue));
}
let closure_4 = { maxRanking: Infinity, minRanking: -Infinity };

export { defaultBaseSortFn };
export { matchSorter };
export const rankings = obj;

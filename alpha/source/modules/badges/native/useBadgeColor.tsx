// Module ID: 15170
// Function ID: 15171
// Name: useBadgeColor
// Dependencies: [5, 32, 19, 575, 1453, 5373, 15171, 2022, 2]
// Exports: useBadgeColor

// Module 15170 (useBadgeColor)
import nativeDefault from "native" /* 575 */;
import LRUCacheDefault from "LRUCache" /* 1453 */;
import utils_FunctionUtils from "utils/FunctionUtils" /* 5373 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5;

const NEUTRAL_35 = nativeDefault.unsafe_rawColors.NEUTRAL_35;
const tmp2 = new LRUCacheDefault({ max: 50 });
let closure_7 = tmp2;
const promiseDeduper = new utils_FunctionUtils.PromiseDeduper();
let result = size.fileFinishedImporting("modules/badges/native/useBadgeColor.tsx");

export const FALLBACK_BADGE_COLOR = NEUTRAL_35;
export function useBadgeColor(rasterUrl) {
  let closure_1;
  let first;
  let value;
  let closure_0 = rasterUrl;
  [first, closure_1] = react.useState(null);
  const items = [rasterUrl];
  const effect = react.useEffect(() => {
    function load(c0) {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            c5 = 2;
            const tmp4 = c4;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                closure_1 = undefined;
                c3 = 1;
                c4 = 2;
                c5 = 1;
                let obj4 = {
                  value: closure_2_8.one(closure_0, closure_2_3(function*(arg0, value) {
                            let obj3;
                            if (c5 === 2) {
                              c5 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
                              if (arg0 === 1) {
                                throw value;
                              } else if (arg0 === 2) {
                                const obj2 = { value, done: true };
                                return obj2;
                              } else {
                                return { value: "HermesInternal", done: null };
                              }
                            } else {
                              try {
                                let pickBadgeColor;
                                c5 = 2;
                                if (0 === c4) {
                                  if (arg0 === 1) {
                                    c5 = 3;
                                    throw value;
                                  } else if (arg0 === 2) {
                                    c5 = 3;
                                    const obj4 = { value, done: true };
                                    return obj4;
                                  } else {
                                    let closure_3 = tmp;
                                    const tmp13 = value(closure_2[6]);
                                    closure_2 = tmp13;
                                    pickBadgeColor = tmp13.pickBadgeColor;
                                    const obj5 = { uri: value };
                                    c4 = 1;
                                    c5 = 1;
                                    const obj6 = { value: obj3.getDominantColors(obj5), done: false };
                                    obj3 = pickBadgeColor(closure_2[7]);
                                    return obj6;
                                  }
                                } else if (arg0 === 1) {
                                  c5 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c5 = 3;
                                  const obj7 = { value, done: true };
                                  return obj7;
                                } else {
                                  const tmp7 = pickBadgeColor(value);
                                  value = tmp7;
                                  if (tmp7 == null) {
                                    value = closure_1_6;
                                  }
                                  c5 = 3;
                                  obj = { value, done: true };
                                  return obj;
                                }
                              } catch (tmp16) {
                                c5 = 3;
                                throw tmp16;
                              }
                            }
                          })),
                  done: false
                };
                return obj4;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = value;
                let tmp7 = set;
                const result = set.set(closure_0, closure_1);
                c3 = 0;
              }
              const tmp12 = closure_130_0;
              if (!tmp12) {
                let tmp13 = closure_1;
                const tmp16 = closure_1(closure_0);
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp20) {
            if (0 === c3) {
              c5 = 3;
              throw tmp20;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = c0;
    if (null != c0) {
      if (!set.has(tmp)) {
        c0 = false;
        const tmp3 = load(tmp);
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  if (null == rasterUrl) {
    value = NEUTRAL_35;
  } else {
    let tmp4 = set;
    value = set.get(rasterUrl);
    if (value == null) {
      let tmp6;
      if (first === rasterUrl) {
        tmp6 = NEUTRAL_35;
      }
      value = tmp6;
    }
  }
  return value;
}

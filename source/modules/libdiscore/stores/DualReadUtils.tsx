// Module ID: 1840
// Function ID: 20177
// Name: _createForOfIteratorHelperLoose
// Dependencies: [653, 1390, 571, 675, 620, 2]
// Exports: runDualReadValidation

// Module 1840 (_createForOfIteratorHelperLoose)
import { AnalyticEvents } from "ME";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function deepEqualImpl(getTime, getTime2, map, arg3) {
  if (getTime === getTime2) {
    return true;
  } else {
    if (arg3) {
      if (undefined === getTime) {
        if (null === getTime2) {
          return true;
        }
      }
    }
    if ("object" === typeof getTime) {
      if ("object" === typeof getTime2) {
        if (null !== getTime) {
          if (null !== getTime2) {
            if (map.has(getTime)) {
              return map.get(getTime) === getTime2;
            } else {
              const result = map.set(getTime, getTime2);
              const _Date = Date;
              if (getTime instanceof Date) {
                const _Date2 = Date;
                if (getTime2 instanceof Date) {
                  const time = getTime.getTime();
                  return time === getTime2.getTime();
                }
              }
              const _Set = Set;
              if (getTime instanceof Set) {
                const _Set2 = Set;
                if (getTime2 instanceof Set) {
                  return require(1390) /* _createForOfIteratorHelperLoose */.areSetsEqual(getTime, getTime2);
                }
              }
              const _Array = Array;
              if (Array.isArray(getTime)) {
                const _Array2 = Array;
                if (Array.isArray(getTime2)) {
                  if (getTime.length !== getTime2.length) {
                    return false;
                  } else {
                    let num2 = 0;
                    if (0 < getTime.length) {
                      while (deepEqualImpl(getTime[num2], getTime2[num2], map, false)) {
                        num2 = num2 + 1;
                      }
                      return false;
                    }
                    return true;
                  }
                }
              }
              const _Array3 = Array;
              if (!Array.isArray(getTime)) {
                const _Array4 = Array;
                if (!Array.isArray(getTime2)) {
                  const _Object = Object;
                  const keys = Object.keys(getTime);
                  const _Object2 = Object;
                  if (keys.length !== Object.keys(getTime2).length) {
                    return false;
                  } else {
                    let num = 0;
                    if (0 < keys.length) {
                      const _Object3 = Object;
                      while (hasOwnProperty.call(getTime2, keys[num])) {
                        let tmp5 = deepEqualImpl;
                        let tmp6 = map;
                        let flag2 = false;
                        if (deepEqualImpl(getTime[tmp4], getTime2[tmp4], map, false)) {
                          num = num + 1;
                        } else {
                          return false;
                        }
                      }
                      return false;
                    }
                    return true;
                  }
                }
              }
              return false;
            }
          }
        }
      }
    }
    return false;
  }
}
function deepEqual(getTime, getTime2) {
  return deepEqualImpl(getTime, getTime2, new Map(), true);
}
function doDualReadValidation(arr, derived, derived2) {
  if (derived.derived.length !== derived2.derived.length) {
    let obj = { type: "length-mismatch", primaryLength: derived.derived.length, shadowLength: derived2.derived.length };
    arr.push(obj);
  }
  const keys = Object.keys(derived.root);
  const keys1 = Object.keys(derived2.root);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp2 = keys[num];
    let _Object = Object;
    if (hasOwnProperty.call(derived2.root, tmp2)) {
      let tmp4 = validateRecord;
      let tmp5 = validateRecord(tmp2, derived.root[tmp2], derived2.root[tmp2]);
      let tmp6 = tmp5;
      if (null != tmp5) {
        arr = arr.push(tmp5);
        let tmp8 = tmp5;
      }
    } else {
      obj = { type: "missing-record", key: tmp2 };
      let arr1 = arr.push(obj);
    }
  }
  for (let num2 = 0; num2 < keys1.length; num2 = num2 + 1) {
    let tmp9 = keys1[num2];
    let _Object2 = Object;
    if (!hasOwnProperty2.call(derived.root, tmp9)) {
      obj = { type: "extra-record", key: tmp9 };
      let arr2 = arr.push(obj);
    }
  }
}
function validateRecord(key, obj, shadowRecord) {
  const items = [];
  for (const key10011 in arg1) {
    let tmp12 = key10011;
    let _Object2 = Object;
    if (!hasOwnProperty2.call(arg1, key10011)) {
      continue;
    } else {
      let tmp = arg1[key10011];
      let _Object = Object;
      if (hasOwnProperty.call(arg2, key10011)) {
        let tmp4 = arg2[key10011];
        let tmp5 = deepEqual;
        let tmp6 = tmp;
        let tmp7 = tmp4;
        if (deepEqual(tmp, tmp4)) {
          continue;
        } else {
          obj = { type: "value-mismatch", field: key10011, primaryValue: tmp, shadowValue: tmp4 };
          let arr = items.push(obj);
          let tmp9 = tmp;
          let tmp10 = tmp4;
          continue;
        }
        continue;
      } else {
        obj = { type: "field-missing", field: key10011 };
        arr = items.push(obj);
        let tmp3 = tmp;
        continue;
      }
      continue;
    }
    continue;
  }
  if (items.length > 0) {
    obj = { type: "record-mismatch", key, primaryRecord: obj, shadowRecord, mismatches: items };
    return obj;
  }
}
function isPlainObject(arg0) {
  let isArray = "object" !== typeof arg0;
  if (!isArray) {
    isArray = null === arg0;
  }
  if (!isArray) {
    const _Array = Array;
    isArray = Array.isArray(arg0);
  }
  if (!isArray) {
    const _Date = Date;
    isArray = arg0 instanceof Date;
  }
  if (!isArray) {
    const _Set = Set;
    isArray = arg0 instanceof Set;
  }
  return !isArray;
}
function logErrorsToAnalytics(store_name, items) {
  if (0 !== items.length) {
    const lastResult = importAll(571).last();
    if (null != lastResult) {
      let value = map.get(store_name);
      if (null == value) {
        let obj = { mismatchesReported: 0 };
        const _Map = Map;
        map = new Map();
        obj.mismatchesByLastAction = map;
        const _WeakSet = WeakSet;
        const weakSet = new WeakSet();
        obj.visitedEntries = weakSet;
        let _Set = Set;
        let set = new Set();
        obj.seenMismatches = set;
        value = obj;
      }
      let result = map.set(store_name, value);
      if (value.mismatchesReported < 15) {
        const mismatchesByLastAction = value.mismatchesByLastAction;
        value = mismatchesByLastAction.get(lastResult);
        let num2 = 0;
        if (null != value) {
          num2 = value;
        }
        if (num2 < 3) {
          let tmp23 = (function generateErrorReport(value, items) {
            let iter6;
            let closure_0 = value;
            function appendMismatch(arg0) {
              let num = 0;
              const items = [...arguments];
              if (0 < items.length) {
                do {
                  let tmp = items[num];
                  let _HermesInternal = HermesInternal;
                  let str = "";
                  let str2 = ":";
                  let str3 = ":";
                  let combined = "" + tmp.fieldName + ":" + tmp.primaryType + ":" + tmp.shadowType;
                  let tmp3 = value;
                  let seenMismatches = value.seenMismatches;
                  if (!seenMismatches.has(combined)) {
                    let tmp4 = value;
                    let seenMismatches2 = value.seenMismatches;
                    let addResult = seenMismatches2.add(combined);
                    let tmp6 = obj;
                    let mismatchedFields = obj.mismatchedFields;
                    let arr = mismatchedFields.push(tmp);
                  }
                  num = num + 1;
                } while (num < items.length);
              }
            }
            function appendDeepMismatches(combined, primaryValue, shadowValue, set) {
              if (set === undefined) {
                const _Set = Set;
                set = new Set();
              }
              const keys = Object.keys(primaryValue);
              for (let num = 0; num < keys.length; num = num + 1) {
                let tmp4 = keys[num];
                let _HermesInternal = HermesInternal;
                combined = "" + combined + "." + tmp4;
                let tmp6 = primaryValue[tmp4];
                let _Object = Object;
                if (hasOwnProperty.call(shadowValue, tmp4)) {
                  let tmp10 = shadowValue[tmp4];
                  let tmp11 = tmp10;
                  if (tmp6 !== tmp10) {
                    if ("object" === typeof tmp6) {
                      if ("object" === typeof tmp10) {
                        let _Array = Array;
                        if (Array.isArray(tmp6)) {
                          let _Array2 = Array;
                          if (Array.isArray(tmp10)) {
                            let tmp27 = appendArrayMismatches;
                            let tmp28 = appendArrayMismatches(combined, tmp6, tmp10);
                            let tmp29 = tmp10;
                          }
                        }
                        let tmp16 = null != tmp6 && null != tmp10;
                        let tmp17 = tmp10;
                        if (tmp16) {
                          let tmp18 = tmp10;
                          if (!set.has(tmp6)) {
                            let addResult = set.add(tmp6);
                            let tmp20 = appendDeepMismatches;
                            let tmp21 = combined;
                            let tmp22 = tmp6;
                            let tmp23 = tmp10;
                            let tmp24 = set;
                            let tmp25 = appendDeepMismatches(combined, tmp6, tmp10, set);
                            let tmp26 = tmp10;
                          }
                        }
                      }
                    }
                    let tmp12 = appendMismatch;
                    let obj = { fieldName: combined };
                    let tmp13 = outer2_14;
                    obj.primaryType = outer2_14(tmp6);
                    obj.shadowType = outer2_14(tmp10);
                    let tmp14 = appendMismatch(obj);
                    let tmp15 = tmp10;
                  }
                } else {
                  let tmp7 = appendMismatch;
                  obj = { fieldName: combined };
                  let tmp8 = outer2_14;
                  obj.primaryType = outer2_14(tmp6);
                  obj.shadowType = "missing";
                  let tmp9 = appendMismatch(obj);
                }
              }
            }
            function appendArrayMismatches(combined, primaryValue, shadowValue) {
              let obj = outer2_0(outer2_3[4]);
              if (!obj.areArraysShallowEqual(primaryValue, shadowValue)) {
                obj = { fieldName: combined, primaryType: "array", shadowType: "array", primaryArrayLength: primaryValue.length, secondaryArrayLength: shadowValue.length };
                appendMismatch(obj);
              }
            }
            let obj = { numExtraKeys: 0, numMissingKeys: 0, mismatchedFields: [] };
            let tmp = outer1_6(items);
            const iter = tmp();
            let iter2 = iter;
            if (!iter.done) {
              do {
                value = iter2.value;
                let type = value.type;
                if ("extra-record" === type) {
                  obj.numExtraKeys = obj.numExtraKeys + 1;
                  let tmp9 = tmp2;
                  let tmp10 = tmp3;
                  let tmp11 = tmp4;
                  let tmp12 = tmp5;
                } else if ("missing-record" === type) {
                  obj.numMissingKeys = obj.numMissingKeys + 1;
                  tmp9 = tmp2;
                  tmp10 = tmp3;
                  tmp11 = tmp4;
                  tmp12 = tmp5;
                } else {
                  tmp9 = tmp2;
                  tmp10 = tmp3;
                  tmp11 = tmp4;
                  tmp12 = tmp5;
                  if ("record-mismatch" === type) {
                    let visitedEntries2 = value.visitedEntries;
                    tmp9 = tmp2;
                    tmp10 = tmp3;
                    tmp11 = tmp4;
                    tmp12 = tmp5;
                    if (!visitedEntries2.has(value.primaryRecord)) {
                      let visitedEntries = value.visitedEntries;
                      let addResult = visitedEntries.add(value.primaryRecord);
                      let tmp7 = outer1_6;
                      let tmp8 = outer1_6(value.mismatches);
                      let iter3 = tmp8();
                      let iter4 = iter3;
                      tmp9 = iter3;
                      tmp10 = tmp8;
                      tmp11 = tmp4;
                      tmp12 = tmp5;
                      if (!iter3.done) {
                        do {
                          value = iter4.value;
                          let str = value.field;
                          str = str.toString();
                          let type2 = value.type;
                          if ("field-missing" === type2) {
                            let mismatchedFields = obj.mismatchedFields;
                            obj = { fieldName: str };
                            let tmp18 = outer1_14;
                            obj.primaryType = outer1_14(value.primaryRecord[value.field]);
                            obj.shadowType = "missing";
                            let arr = mismatchedFields.push(obj);
                          } else if ("value-mismatch" === type2) {
                            if (null !== value.primaryValue) {
                              if (null !== value.shadowValue) {
                                if ("object" === typeof value.primaryValue) {
                                  if ("object" === typeof value.shadowValue) {
                                    let _Array = Array;
                                    if (Array.isArray(value.primaryValue)) {
                                      let _Array2 = Array;
                                      if (Array.isArray(value.shadowValue)) {
                                        let result = appendArrayMismatches(str, value.primaryValue, value.shadowValue);
                                      }
                                    }
                                    let appendDeepMismatchesResult = appendDeepMismatches(str, value.primaryValue, value.shadowValue);
                                  }
                                }
                              }
                            }
                            obj = { fieldName: str };
                            let tmp14 = outer1_14;
                            obj.primaryType = outer1_14(value.primaryValue);
                            obj.shadowType = outer1_14(value.shadowValue);
                            let appendMismatchResult = appendMismatch(obj);
                          }
                          iter5 = tmp8();
                          iter4 = iter5;
                          tmp9 = iter5;
                          tmp10 = tmp8;
                          tmp11 = value;
                          tmp12 = str;
                        } while (!iter5.done);
                      }
                    }
                  }
                }
                iter6 = tmp();
                tmp2 = tmp9;
                tmp3 = tmp10;
                tmp4 = tmp11;
                tmp5 = tmp12;
                iter2 = iter6;
              } while (!iter6.done);
            }
            if (obj.mismatchedFields.length + obj.numExtraKeys + obj.numMissingKeys === 0) {
              return null;
            } else {
              return obj;
            }
          })(value, items);
          if (null != tmp23) {
            const mismatchesByLastAction2 = value.mismatchesByLastAction;
            const result1 = mismatchesByLastAction2.set(lastResult, num2 + 1);
            value.mismatchesReported = value.mismatchesReported + 1;
            obj = { store_name, action_type: lastResult };
            ({ numMissingKeys: obj4.num_missing_keys, numExtraKeys: obj4.num_extra_keys } = tmp23);
            const _JSON = JSON;
            obj.mismatched_fields = JSON.stringify(tmp23.mismatchedFields);
            importDefault(675).track(AnalyticEvents.LIBDISCORE_KV_DUAL_READ_ERROR, obj);
            const obj3 = importDefault(675);
          }
        }
      }
    }
    const obj2 = importAll(571);
  }
}
function getType(arg0) {
  let str = "null";
  if (null !== arg0) {
    let tmp = typeof arg0;
    let str2 = "object";
    if ("object" === tmp) {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        str2 = "array";
      }
      tmp = str2;
    }
    str = tmp;
  }
  return str;
}
let map = new Map();
let result = require("add").fileFinishedImporting("modules/libdiscore/stores/DualReadUtils.tsx");

export const runDualReadValidation = function runDualReadValidation(store_name, Kkv, arg2) {
  let items = [];
  arg2((arg0, arg1) => {
    outer1_10(items, arg0, arg1);
  });
  (function logErrors(arg0, arg1, items) {
    if (0 !== items.length) {
      items = [];
      let items1 = [];
      let c2 = 0;
      let item = items.forEach((type) => {
        if (closure_2 < 5) {
          closure_2 = closure_2 + 1;
          type = type.type;
          if ("length-mismatch" !== type) {
            if ("missing-record" === type) {
              items.push(type.key);
            } else if ("extra-record" === type) {
              items1.push(type.key);
            } else if ("record-mismatch" === type) {
              const mismatches = type.mismatches;
              const item = mismatches.forEach((type) => {
                if ("field-missing" !== type.type) {
                  (function logDiff(primaryValue, shadowValue) {
                    function impl() { ... }
                    const map = new Map();
                    impl(primaryValue, shadowValue);
                  })(type.primaryValue, type.shadowValue);
                }
              });
            }
          }
        }
      });
    }
  })(undefined, undefined, items);
  logErrorsToAnalytics(store_name, items);
};
export { doDualReadValidation };
export { logErrorsToAnalytics };

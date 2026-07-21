// Module ID: 1840
// Function ID: 20175
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: runDualReadValidation

// Module 1840 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      require = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
                  return require(dependencyMap[1]).areSetsEqual(getTime, getTime2);
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
        let tmp5 = closure_9;
        let tmp6 = tmp;
        let tmp7 = tmp4;
        if (closure_9(tmp, tmp4)) {
          continue;
        } else {
          obj = { type: "value-mismatch", field: key10011, primaryValue: tmp, shadowValue: tmp4 };
          let arr = items.push(obj);
          let tmp9 = tmp;
          let tmp10 = tmp4;
          // continue
        }
        continue;
      } else {
        obj = { type: "field-missing", field: key10011 };
        arr = items.push(obj);
        let tmp3 = tmp;
        // continue
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
    const lastResult = importAll(dependencyMap[2]).last();
    if (null != lastResult) {
      let value = map.get(store_name);
      if (null == value) {
        let obj = { mismatchesReported: 0 };
        const _Map = Map;
        const map = new Map();
        obj.mismatchesByLastAction = map;
        const _WeakSet = WeakSet;
        const weakSet = new WeakSet();
        obj.visitedEntries = weakSet;
        const _Set = Set;
        const set = new Set();
        obj.seenMismatches = set;
        value = obj;
      }
      const result = map.set(store_name, value);
      if (value.mismatchesReported < 15) {
        const mismatchesByLastAction = value.mismatchesByLastAction;
        value = mismatchesByLastAction.get(lastResult);
        let num2 = 0;
        if (null != value) {
          num2 = value;
        }
        if (num2 < 3) {
          const tmp23 = function generateErrorReport(value, items) {
            let iter6;
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
                  let tmp3 = closure_0;
                  let seenMismatches = closure_0.seenMismatches;
                  if (!seenMismatches.has(combined)) {
                    let tmp4 = closure_0;
                    let seenMismatches2 = closure_0.seenMismatches;
                    let addResult = seenMismatches2.add(combined);
                    let tmp6 = closure_1;
                    let mismatchedFields = closure_1.mismatchedFields;
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
                    let tmp13 = callback;
                    obj.primaryType = callback(tmp6);
                    obj.shadowType = callback(tmp10);
                    let tmp14 = appendMismatch(obj);
                    let tmp15 = tmp10;
                  }
                } else {
                  let tmp7 = appendMismatch;
                  obj = { fieldName: combined };
                  let tmp8 = callback;
                  obj.primaryType = callback(tmp6);
                  obj.shadowType = "missing";
                  let tmp9 = appendMismatch(obj);
                }
              }
            }
            function appendArrayMismatches(combined, primaryValue, shadowValue) {
              let obj = combined(appendDeepMismatches[4]);
              if (!obj.areArraysShallowEqual(primaryValue, shadowValue)) {
                obj = { fieldName: combined, primaryArrayLength: primaryValue.length, secondaryArrayLength: shadowValue.length };
                appendMismatch(obj);
              }
            }
            let obj = { 9223372036854775807: -536870861, 9223372036854775807: -299892737, mismatchedFields: [] };
            const tmp = callback(items);
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
                      let tmp7 = closure_6;
                      let tmp8 = closure_6(value.mismatches);
                      let iter3 = tmp8();
                      let iter4 = iter3;
                      tmp9 = iter3;
                      tmp10 = tmp8;
                      tmp11 = tmp4;
                      tmp12 = tmp5;
                      if (!iter3.done) {
                        while (true) {
                          value = iter4.value;
                          let str = value.field;
                          str = str.toString();
                          let type2 = value.type;
                          if ("field-missing" === type2) {
                            let mismatchedFields = obj.mismatchedFields;
                            obj = { fieldName: str };
                            let tmp18 = closure_14;
                            obj.primaryType = closure_14(value.primaryRecord[value.field]);
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
                            let tmp14 = closure_14;
                            obj.primaryType = closure_14(value.primaryValue);
                            obj.shadowType = closure_14(value.shadowValue);
                            let appendMismatchResult = appendMismatch(obj);
                          }
                          let iter5 = tmp8();
                          iter4 = iter5;
                          tmp9 = iter5;
                          tmp10 = tmp8;
                          tmp11 = value;
                          tmp12 = str;
                          if (iter5.done) {
                            break;
                          } else {
                            // continue
                          }
                        }
                      }
                    }
                  }
                }
                iter6 = tmp();
                let tmp2 = tmp9;
                let tmp3 = tmp10;
                let tmp4 = tmp11;
                let tmp5 = tmp12;
                iter2 = iter6;
              } while (!iter6.done);
            }
            if (obj.mismatchedFields.length + obj.numExtraKeys + obj.numMissingKeys === 0) {
              return null;
            } else {
              return obj;
            }
          }(value, items);
          if (null != tmp23) {
            const mismatchesByLastAction2 = value.mismatchesByLastAction;
            const result1 = mismatchesByLastAction2.set(lastResult, num2 + 1);
            value.mismatchesReported = value.mismatchesReported + 1;
            obj = { store_name, action_type: lastResult };
            ({ numMissingKeys: obj4.num_missing_keys, numExtraKeys: obj4.num_extra_keys } = tmp23);
            const _JSON = JSON;
            obj.mismatched_fields = JSON.stringify(tmp23.mismatchedFields);
            importDefault(dependencyMap[3]).track(AnalyticEvents.LIBDISCORE_KV_DUAL_READ_ERROR, obj);
            const obj3 = importDefault(dependencyMap[3]);
          }
        }
      }
    }
    const obj2 = importAll(dependencyMap[2]);
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
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const map = new Map();
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/libdiscore/stores/DualReadUtils.tsx");

export const runDualReadValidation = function runDualReadValidation(store_name, Kkv, arg2) {
  const items = [];
  const require = items;
  arg2((arg0, arg1) => {
    callback(items, arg0, arg1);
  });
  function logErrors(arg0, arg1, items) {
    if (0 !== items.length) {
      items = [];
      const items1 = [];
      let closure_2 = 0;
      const item = items.forEach((type) => {
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
                  function logDiff(primaryValue, shadowValue) {
                    function impl() { ... }
                    const map = new Map();
                    impl(primaryValue, shadowValue);
                  }(type.primaryValue, type.shadowValue);
                }
              });
            }
          }
        }
      });
    }
  }(undefined, undefined, items);
  logErrorsToAnalytics(store_name, items);
};
export { doDualReadValidation };
export { logErrorsToAnalytics };

// Module ID: 16440
// Function ID: 127015
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16440 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function isLikelyControl(defaultConfig) {
  if (null == defaultConfig) {
    return true;
  } else {
    let tmp3 = null == tmp2;
    if (!tmp3) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const json = JSON.stringify(tmp2);
      tmp3 = json === JSON.stringify(defaultConfig.defaultConfig);
    }
    return tmp3;
  }
}
function flushFlags(items, set) {
  let iter2;
  const sorted = items.sort();
  const tmp2 = _createForOfIteratorHelperLoose(items);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp3 = closure_0;
      let tmp4 = closure_1;
      let obj = closure_0(closure_1[8]);
      let addFeatureFlagResult = obj.addFeatureFlag(value, true);
      if (null != set) {
        let addResult = set.add(value);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
}
function syncAllExperimentFlags() {
  let done;
  let iter5;
  const tmp3 = _createForOfIteratorHelperLoose(set);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let tmp4 = closure_0;
      let tmp5 = closure_1;
      let obj = closure_0(closure_1[8]);
      let addFeatureFlagResult = obj.addFeatureFlag(iter.value, false);
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  set.clear();
  const items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  const items4 = [];
  const items5 = [];
  const guildId = guildId.getGuildId();
  const allExperimentAssignments = allExperimentAssignments.getAllExperimentAssignments();
  for (const key10040 in allExperimentAssignments) {
    let tmp66 = key10040;
    let tmp67 = allExperimentAssignments[key10040];
    let tmp10 = null == tmp67;
    if (!tmp10) {
      tmp10 = tmp67 <= 0;
    }
    if (tmp10) {
      continue;
    } else {
      if (key10040.includes(":")) {
        let startsWithResult = null != guildId;
        if (startsWithResult) {
          let _HermesInternal2 = HermesInternal;
          startsWithResult = key10040.startsWith("" + guildId + ":");
        }
        if (!startsWithResult) {
          continue;
        } else {
          let _HermesInternal3 = HermesInternal;
          let arr = items1.push("" + key10040.split(":")[1] + ":" + tmp67);
          // continue
        }
        continue;
      } else {
        let _HermesInternal = HermesInternal;
        arr = items.push("" + key10040 + ":" + tmp67);
        // continue
      }
      continue;
    }
    continue;
  }
  const registeredExperiments = store.getRegisteredExperiments();
  const registeredExperiments1 = store.getRegisteredExperiments();
  obj = {};
  for (const key10071 in registeredExperiments1) {
    let tmp68 = key10071;
    let tmp69 = closure_8;
    obj[closure_8.getHash(key10071)] = key10071;
  }
  const evaluatedExperiments = store.getState().evaluatedExperiments;
  const tmp16 = _createForOfIteratorHelperLoose([]);
  const iter3 = tmp16();
  let iter4 = iter3;
  if (!iter3.done) {
    do {
      let value = iter4.value;
      let tmp25;
      if (null != evaluatedExperiments) {
        tmp25 = evaluatedExperiments[value];
      }
      let tmp26 = tmp25;
      let tmp27 = tmp17;
      let tmp28 = tmp18;
      let tmp29 = tmp19;
      let tmp30 = tmp20;
      let tmp31 = tmp21;
      let tmp32 = tmp22;
      let tmp33 = tmp23;
      let tmp34 = tmp24;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp17 = tmp27;
        let tmp18 = tmp28;
        let tmp19 = tmp29;
        let tmp20 = tmp30;
        let tmp36 = tmp31;
        let tmp37 = tmp32;
        let tmp38 = tmp33;
        let tmp39 = tmp34;
        let tmp21 = tmp31;
        let tmp22 = tmp32;
        let tmp23 = tmp33;
        let tmp24 = tmp34;
        let tmp40 = keys[tmp2];
        while (tmp40 !== undefined) {
          let tmp70 = tmp40;
          let tmp71 = evaluatedExperiments[value];
          let tmp41;
          if (null != tmp71) {
            tmp41 = tmp71[tmp40];
          }
          obj = tmp41;
          if (null == tmp41) {
            obj = {};
          }
          let assignments = obj.assignments;
          let tmp42 = assignments;
          tmp27 = tmp40;
          tmp28 = tmp41;
          tmp29 = tmp71;
          tmp30 = assignments;
          let tmp43 = tmp31;
          let tmp44 = tmp32;
          let tmp45 = tmp33;
          let tmp46 = tmp34;
          let keys1 = Object.keys();
          if (keys1 === undefined) {
            continue;
          } else {
            tmp31 = tmp43;
            tmp32 = tmp44;
            tmp27 = tmp40;
            tmp28 = tmp41;
            tmp29 = tmp71;
            tmp30 = assignments;
            tmp33 = tmp45;
            tmp34 = tmp46;
            let tmp49 = keys1[tmp];
            while (tmp49 !== undefined) {
              let tmp72 = tmp49;
              let tmp73 = obj[tmp49];
              tmp43 = tmp49;
              tmp44 = tmp73;
              if (null == tmp73) {
                continue;
              } else {
                let variantId = assignments[tmp49].variantId;
                tmp43 = tmp49;
                tmp44 = tmp73;
                tmp45 = variantId;
                tmp46 = tmp48;
                if (null == variantId) {
                  continue;
                } else {
                  let _HermesInternal4 = HermesInternal;
                  let combined = "" + tmp73 + ":" + variantId;
                  let tmp51 = closure_14;
                  let arr7 = items4;
                  if (closure_14(registeredExperiments[tmp73], variantId)) {
                    arr7 = items2;
                  }
                  let arr1 = arr7.push(combined);
                  tmp43 = tmp49;
                  tmp44 = tmp73;
                  tmp45 = variantId;
                  tmp46 = combined;
                  // continue
                }
                continue;
              }
              continue;
            }
          }
          continue;
        }
      }
      iter5 = tmp16();
      iter4 = iter5;
    } while (!iter5.done);
  }
  if (null != guildId) {
    let tmp53;
    if (null != evaluatedExperiments) {
      const guild = evaluatedExperiments.guild;
      if (null != guild) {
        tmp53 = guild[guildId];
      }
    }
    if (null != tmp53) {
      for (const key10139 in tmp53.assignments) {
        let tmp74 = key10139;
        let tmp75 = obj[key10139];
        if (null == tmp75) {
          continue;
        } else {
          let variantId2 = tmp53.assignments[key10139].variantId;
          let tmp54 = variantId2;
          if (null == variantId2) {
            continue;
          } else {
            let _HermesInternal5 = HermesInternal;
            let combined1 = "" + tmp75 + ":" + variantId2;
            let tmp56 = closure_14;
            let arr8 = items5;
            if (closure_14(registeredExperiments[tmp75], variantId2)) {
              arr8 = items3;
            }
            let arr2 = arr8.push(combined1);
            let tmp58 = variantId2;
            let tmp59 = combined1;
            // continue
          }
          continue;
        }
        continue;
      }
    }
  }
  flushFlags(items);
  flushFlags(items1, set);
  flushFlags(items2);
  flushFlags(items3, set);
  flushFlags(items4);
  flushFlags(items5, set);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const set = new Set();
let tmp3 = (arg0) => {
  class SentryExperimentFeatureFlagManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, SentryExperimentFeatureFlagManager);
      items1 = [...items];
      obj = closure_5(SentryExperimentFeatureFlagManager);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      result = map.set(closure_7, closure_16);
      result1 = result.set(closure_8, closure_16);
      tmp2Result.stores = result1.set(closure_9, closure_16);
      return tmp2Result;
    }
  }
  const importDefault = SentryExperimentFeatureFlagManager;
  callback2(SentryExperimentFeatureFlagManager, arg0);
  return callback(SentryExperimentFeatureFlagManager);
}(importDefault(dependencyMap[9]));
tmp3 = new tmp3();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/sentry/SentryExperimentFeatureFlagManager.tsx");

export default tmp3;

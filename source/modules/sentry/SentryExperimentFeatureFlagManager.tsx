// Module ID: 16627
// Function ID: 129650
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 4044, 1188, 3947, 1184, 5078, 2]

// Module 16627 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import tmp3 from "AutomaticLifecycleManager";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function isLikelyControl(defaultConfig, variantId) {
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
      let tmp3 = importDefault;
      let tmp4 = dependencyMap;
      let obj = importDefault(1184);
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
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let obj = importDefault(1184);
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
  guildId = guildId.getGuildId();
  allExperimentAssignments = allExperimentAssignments.getAllExperimentAssignments();
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
          continue;
        }
        continue;
      } else {
        let _HermesInternal = HermesInternal;
        arr = items.push("" + key10040 + ":" + tmp67);
        continue;
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
    let tmp69 = store;
    obj[store.getHash(key10071)] = key10071;
    continue;
  }
  const evaluatedExperiments = store.getState().evaluatedExperiments;
  const tmp16 = _createForOfIteratorHelperLoose(["user", "installation"]);
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
        tmp17 = tmp27;
        tmp18 = tmp28;
        tmp19 = tmp29;
        tmp20 = tmp30;
        let tmp36 = tmp31;
        let tmp37 = tmp32;
        let tmp38 = tmp33;
        let tmp39 = tmp34;
        tmp21 = tmp31;
        tmp22 = tmp32;
        tmp23 = tmp33;
        tmp24 = tmp34;
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
                  let tmp51 = isLikelyControl;
                  let arr7 = items4;
                  if (isLikelyControl(registeredExperiments[tmp73], variantId)) {
                    arr7 = items2;
                  }
                  let arr1 = arr7.push(combined);
                  tmp43 = tmp49;
                  tmp44 = tmp73;
                  tmp45 = variantId;
                  tmp46 = combined;
                  continue;
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
            let tmp56 = isLikelyControl;
            let arr8 = items5;
            if (isLikelyControl(registeredExperiments[tmp75], variantId2)) {
              arr8 = items3;
            }
            let arr2 = arr8.push(combined1);
            let tmp58 = variantId2;
            let tmp59 = combined1;
            continue;
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
let set = new Set();
tmp3 = new tmp3();
let result = set.fileFinishedImporting("modules/sentry/SentryExperimentFeatureFlagManager.tsx");

export default tmp3;

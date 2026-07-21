// Module ID: 12632
// Function ID: 97216
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12632 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
const _module = require(dependencyMap[0]);
let obj = { -1174339580: "Shooting Lines_03", -1169096700: 1, config: { x: null, messageId: "2635ccff9c48c5e264e397f8e02fcba6", paths: "th.messages.2635ccff9c48c5e264e397f8e02fcba6.compiled.messages" } };
const items = [obj, { config: { x: null, messageId: "38b8bf9dc5e6c6eb975d308971a0dfd6", paths: "tr.messages.38b8bf9dc5e6c6eb975d308971a0dfd6.compiled.messages" } }, , , , ];
obj = { -1174339580: false, -1169096700: false, config: {} };
items[2] = obj;
items[3] = { config: {} };
const obj1 = { -1174339580: false, -1169096700: false, config: {} };
items[4] = obj1;
const obj2 = { -1174339580: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000170814807357726, -1169096700: -0.00000000000000000000000000000002619270617631729, config: { x: true, messageId: true, paths: true } };
items[5] = obj2;
let closure_0 = _module.createExperiment({ defaultConfig: {}, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/BandwidthEstimationExperiment.tsx");

export default {
  getConfig(autoTrackExposure, arr) {
    const currentConfig = currentConfig.getCurrentConfig({ location: "e1c55b_1" }, { autoTrackExposure });
    if (!this.supportsBandwidthEstimationExperimentFullname(currentConfig.fullname, arr)) {
      currentConfig.enabled = false;
    }
    return currentConfig;
  },
  supportsBandwidthEstimationExperimentFullname(fullname, arr) {
    const mediaEngineExperiments = this.getMediaEngineExperiments(fullname);
    if (null === mediaEngineExperiments) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(mediaEngineExperiments);
      let iter = tmp3();
      if (!iter.done) {
        while (arr.includes(iter.value)) {
          let iter2 = tmp3();
          iter = iter2;
        }
        return false;
      }
      return true;
    }
  },
  getMediaEngineExperiments(fullname) {
    const parts = fullname.split("/");
    let found = null;
    if (3 === parts.length) {
      found = null;
      if ("bandwidth_estimation" === parts[0]) {
        const parts1 = parts[1].split(",");
        found = parts1.filter((arg0) => 0 !== arg0.length);
        const str2 = parts[1];
      }
    }
    return found;
  }
};

// Module ID: 16598
// Function ID: 129409
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1188, 1844, 1841, 620, 1428, 5078, 2]

// Module 16598 (_isNativeReflectConstruct)
import isBlockedDomain from "isBlockedDomain";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
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
function experimentStoreUpdateHandler() {
  let done;
  let obj = require(1844) /* isBlockedDomain */;
  if (obj.isLibdiscoreInitialized()) {
    if (!obj2.isExperimentSyncDisabled()) {
      obj = {};
      const tmp6 = _createForOfIteratorHelperLoose(require(1841) /* _callSuper */.ALL_LIBDISCORE_EXPERIMENTS);
      let iter = tmp6();
      if (!iter.done) {
        do {
          let value = iter.value;
          obj[value.id] = value.getCurrentConfig();
          let iter2 = tmp6();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      let tmp9 = null != obj;
      if (tmp9) {
        tmp9 = importDefault(620)(obj, obj);
      }
      if (!tmp9) {
        const experimentCacher = require(1844) /* isBlockedDomain */.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj));
        const obj4 = require(1844) /* isBlockedDomain */;
      }
    }
    obj2 = require(1841) /* _callSuper */;
  }
}
function initializeAllExperiments() {
  const prop = require(1841) /* _callSuper */.ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((setExperiment) => {
    setExperiment.setExperiment((function createApexExperimentWrapper(id) {
      let obj = outer2_0(outer2_2[9]);
      obj = { kind: "user", name: id.id, defaultConfig: { treatmentId: -1 } };
      const treatments = id.getTreatments();
      obj.variations = Object.fromEntries(treatments.map((treatmentId) => {
        treatmentId = treatmentId.treatmentId;
        const items = [treatmentId, { treatmentId }];
        return items;
      }));
      return obj.createApexExperiment(obj);
    })(setExperiment));
  });
}
let c9 = null;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default tmp2;

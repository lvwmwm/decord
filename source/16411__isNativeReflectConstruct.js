// Module ID: 16411
// Function ID: 126774
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16411 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function experimentStoreUpdateHandler() {
  let done;
  let obj = arg1(dependencyMap[6]);
  if (obj.isLibdiscoreInitialized()) {
    if (!obj2.isExperimentSyncDisabled()) {
      obj = {};
      const tmp6 = _createForOfIteratorHelperLoose(arg1(dependencyMap[7]).ALL_LIBDISCORE_EXPERIMENTS);
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
      let tmp9 = null != closure_9;
      if (tmp9) {
        tmp9 = importDefault(dependencyMap[8])(closure_9, obj);
      }
      if (!tmp9) {
        const experimentCacher = arg1(dependencyMap[6]).getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj));
        closure_9 = obj;
        const obj4 = arg1(dependencyMap[6]);
      }
    }
    const obj2 = arg1(dependencyMap[7]);
  }
}
function initializeAllExperiments() {
  const prop = arg1(dependencyMap[7]).ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((setExperiment) => {
    setExperiment.setExperiment(function createApexExperimentWrapper(id) {
      let obj = callback(closure_2[9]);
      obj = { kind: "user", name: id.id, defaultConfig: { treatmentId: -1 } };
      const treatments = id.getTreatments();
      obj.variations = Object.fromEntries(treatments.map((treatmentId) => {
        treatmentId = treatmentId.treatmentId;
        const items = [treatmentId, { treatmentId }];
        return items;
      }));
      return obj.createApexExperiment(obj);
    }(setExperiment));
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = null;
let tmp2 = (arg0) => {
  class LibdiscoreExperimentManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, LibdiscoreExperimentManager);
      items1 = [...items];
      obj = closure_6(LibdiscoreExperimentManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = {};
      map = new Map();
      tmp2Result.stores = map.set(closure_8, closure_13);
      return tmp2Result;
    }
  }
  const arg1 = LibdiscoreExperimentManager;
  callback2(LibdiscoreExperimentManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      callback4();
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {

    }
  };
  items[1] = obj;
  return callback(LibdiscoreExperimentManager, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default tmp2;

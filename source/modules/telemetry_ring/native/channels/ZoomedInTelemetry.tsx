// Module ID: 12994
// Function ID: 98857
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12994 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = {};
let closure_10 = { "Null": "r", "Null": "UpscaleSmallCapturedFramesExperiment" };
let tmp2 = (arg0) => {
  class ZoomedInTelemetryImpl {
    constructor() {
      self = this;
      tmp = closure_4(this, ZoomedInTelemetryImpl);
      items = [, ];
      items[0] = ZoomedInTelemetryImpl(closure_2[7]);
      items1 = [];
      items1[0] = closure_0(closure_2[7]).TelemetryChannel.ZOOMED;
      items[1] = items1;
      obj = closure_7(ZoomedInTelemetryImpl);
      tmp2 = closure_6;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = ZoomedInTelemetryImpl;
  callback3(ZoomedInTelemetryImpl, arg0);
  let obj = {
    key: "shouldRun",
    value() {
      return callback(closure_2[6]).isZoomedExperimentEnabled();
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getBudget",
    value(arg0) {
      return "backlog" === arg0 ? closure_10 : closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAckedEndOffsetStorageKey",
    value() {
      return "telemetry_ring_zoomed_acked_end_offset_v1";
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getExportBatchSize",
    value() {
      return 250;
    }
  };
  const obj2 = { key: "exportEntries" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj2.value = function exportEntries(substr, arg1) {
    return callback(...arguments);
  };
  items[4] = obj2;
  return callback2(ZoomedInTelemetryImpl, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/telemetry_ring/native/channels/ZoomedInTelemetry.tsx");

export default tmp2;

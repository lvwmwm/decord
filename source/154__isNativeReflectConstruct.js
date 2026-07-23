// Module ID: 154
// Function ID: 2400
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 99, 100, 155, 151, 156]

// Module 154 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";
import closure_10 from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getCachedEventCounts() {
  if (map) {
    return map;
  } else {
    if (importDefault(151)) {
      if (null != importDefault(151)) {
        if (importDefault(151).getEventCounts) {
          let _Map = Map;
          let eventCounts;
          if (null != importDefault(151).getEventCounts) {
            eventCounts = importDefault(151).getEventCounts();
            const obj = importDefault(151);
          }
          if (null == eventCounts) {
            eventCounts = [];
          }
          const prototype = _Map.prototype;
          _Map = new _Map(eventCounts);
          map = _Map;
          global.queueMicrotask(() => {

          });
          return _Map;
        }
      }
    }
    const result = require(156) /* warnNoNativePerformance */.warnNoNativePerformance();
    const _Map2 = Map;
    map = new Map();
    return map;
  }
}
let closure_12 = importDefaultResult("processingStart");
let closure_13 = importDefaultResult("processingEnd");
let closure_14 = importDefaultResult("interactionId");

export const PerformanceEventTiming = ((PerformanceEntry) => {
  class PerformanceEventTiming {
    constructor(arg0) {
      self = this;
      tmp = PerformanceEventTiming;
      tmp2 = outer1_4(this, PerformanceEventTiming);
      obj = { name: PerformanceEntry.name, entryType: "event" };
      startTime = PerformanceEntry.startTime;
      num = 0;
      if (null != startTime) {
        num = startTime;
      }
      obj.startTime = num;
      duration = PerformanceEntry.duration;
      num2 = 0;
      if (null != duration) {
        num2 = duration;
      }
      obj.duration = num2;
      items = [];
      items[0] = obj;
      obj2 = outer1_7(tmp);
      tmp3 = outer1_6;
      if (outer1_15()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = outer1_7;
        constructResult = Reflect.construct(obj2, items, outer1_7(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp8 = outer1_12;
      definePropertyResult = Object.defineProperty(tmp3Result, outer1_12, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp3Result, outer1_13, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp3Result, outer1_14, { writable: true, value: undefined });
      processingStart = PerformanceEntry.processingStart;
      num3 = 0;
      tmp12 = outer1_10(tmp3Result, outer1_12);
      if (null != processingStart) {
        num3 = processingStart;
      }
      tmp12[tmp8] = num3;
      tmp13 = outer1_13;
      processingEnd = PerformanceEntry.processingEnd;
      num4 = 0;
      tmp14 = outer1_10(tmp3Result, outer1_13);
      if (null != processingEnd) {
        num4 = processingEnd;
      }
      tmp14[tmp13] = num4;
      tmp15 = outer1_14;
      interactionId = PerformanceEntry.interactionId;
      num5 = 0;
      tmp16 = outer1_10(tmp3Result, outer1_14);
      if (null != interactionId) {
        num5 = interactionId;
      }
      tmp16[tmp15] = num5;
      return tmp3Result;
    }
  }
  callback2(PerformanceEventTiming, PerformanceEntry);
  let obj = {
    key: "processingStart",
    get() {
      return outer1_10(this, outer1_12)[outer1_12];
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "processingEnd",
    get() {
      return outer1_10(this, outer1_13)[outer1_13];
    }
  };
  items[1] = obj;
  obj = {
    key: "interactionId",
    get() {
      return outer1_10(this, outer1_14)[outer1_14];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toJSON",
    value: function toJSON() {
      const obj = { processingStart: outer1_10(this, outer1_12)[outer1_12], processingEnd: outer1_10(this, outer1_13)[outer1_13], interactionId: outer1_10(this, outer1_14)[outer1_14] };
      return Object.assign({}, (function _superPropGet(PerformanceEventTiming, toJSON, arg2, arg3) {
        let closure_0 = arg2;
        let prototype = PerformanceEventTiming;
        if (1) {
          prototype = PerformanceEventTiming.prototype;
        }
        const tmpResult = outer2_8(outer2_7(prototype), "toJSON", arg2);
        let closure_1 = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(closure_0, arg0);
          }
        }
        return fn;
      })(PerformanceEventTiming, "toJSON", this, 3)([]), obj);
    }
  };
  return callback(PerformanceEventTiming, items);
})(require("PerformanceEntry").PerformanceEntry);
export const EventCounts = (() => {
  class EventCounts {
    constructor() {
      tmp = outer1_4(this, EventCounts);
      return;
    }
  }
  let obj = {
    key: "size",
    get() {
      return outer1_16().size;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "entries",
    value: function entries() {
      return outer1_16().entries();
    }
  };
  items[1] = obj;
  obj = {
    key: "forEach",
    value: function forEach(arg0) {
      return outer1_16().forEach(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(arg0) {
      return outer1_16().get(arg0);
    }
  };
  items[4] = {
    key: "has",
    value: function has(arg0) {
      return outer1_16().has(arg0);
    }
  };
  items[5] = {
    key: "keys",
    value: function keys() {
      return outer1_16().keys();
    }
  };
  items[6] = {
    key: "values",
    value: function values() {
      return outer1_16().values();
    }
  };
  return callback(EventCounts, items);
})();

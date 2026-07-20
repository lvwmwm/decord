// Module ID: 154
// Function ID: 2400
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 154 (_isNativeReflectConstruct)
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
    if (importDefault(dependencyMap[9])) {
      if (null != importDefault(dependencyMap[9])) {
        if (importDefault(dependencyMap[9]).getEventCounts) {
          let _Map = Map;
          let eventCounts;
          if (null != importDefault(dependencyMap[9]).getEventCounts) {
            eventCounts = importDefault(dependencyMap[9]).getEventCounts();
            const obj = importDefault(dependencyMap[9]);
          }
          if (null == eventCounts) {
            eventCounts = [];
          }
          const prototype = _Map.prototype;
          _Map = new _Map(eventCounts);
          let map = _Map;
          global.queueMicrotask(() => {
            let closure_11 = null;
          });
          return _Map;
        }
      }
    }
    const result = arg1(dependencyMap[10]).warnNoNativePerformance();
    const _Map2 = Map;
    map = new Map();
    return map;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_12 = importDefaultResult("processingStart");
let closure_13 = importDefaultResult("processingEnd");
let closure_14 = importDefaultResult("interactionId");

export const PerformanceEventTiming = (PerformanceEntry) => {
  class PerformanceEventTiming {
    constructor(arg0) {
      self = this;
      tmp = PerformanceEventTiming;
      tmp2 = closure_4(this, PerformanceEventTiming);
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
      obj2 = closure_7(tmp);
      tmp3 = closure_6;
      if (closure_15()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_7;
        constructResult = Reflect.construct(obj2, items, closure_7(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp8 = closure_12;
      definePropertyResult = Object.defineProperty(tmp3Result, closure_12, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp3Result, closure_13, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(tmp3Result, closure_14, { writable: true, value: undefined });
      processingStart = PerformanceEntry.processingStart;
      num3 = 0;
      tmp12 = closure_10(tmp3Result, closure_12);
      if (null != processingStart) {
        num3 = processingStart;
      }
      tmp12[tmp8] = num3;
      tmp13 = closure_13;
      processingEnd = PerformanceEntry.processingEnd;
      num4 = 0;
      tmp14 = closure_10(tmp3Result, closure_13);
      if (null != processingEnd) {
        num4 = processingEnd;
      }
      tmp14[tmp13] = num4;
      tmp15 = closure_14;
      interactionId = PerformanceEntry.interactionId;
      num5 = 0;
      tmp16 = closure_10(tmp3Result, closure_14);
      if (null != interactionId) {
        num5 = interactionId;
      }
      tmp16[tmp15] = num5;
      return tmp3Result;
    }
  }
  const global = PerformanceEventTiming;
  callback2(PerformanceEventTiming, PerformanceEntry);
  let obj = {
    key: "processingStart",
    get() {
      return callback3(this, closure_12)[closure_12];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "processingEnd",
    get() {
      return callback3(this, closure_13)[closure_13];
    }
  };
  items[1] = obj;
  obj = {
    key: "interactionId",
    get() {
      return callback3(this, closure_14)[closure_14];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "toJSON",
    value: function toJSON() {
      const obj = { processingStart: callback3(this, closure_12)[closure_12], processingEnd: callback3(this, closure_13)[closure_13], interactionId: callback3(this, closure_14)[closure_14] };
      return Object.assign({}, function _superPropGet(PerformanceEventTiming, toJSON, arg2, arg3) {
        let prototype = PerformanceEventTiming;
        if (1) {
          prototype = PerformanceEventTiming.prototype;
        }
        const tmpResult = closure_8(closure_7(prototype), "toJSON", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(PerformanceEventTiming, "toJSON", this, 3)([]), obj);
    }
  };
  return callback(PerformanceEventTiming, items);
}(arg1(dependencyMap[8]).PerformanceEntry);
export const EventCounts = () => {
  class EventCounts {
    constructor() {
      tmp = closure_4(this, EventCounts);
      return;
    }
  }
  const global = EventCounts;
  let obj = {
    key: "size",
    get() {
      return callback2().size;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "entries",
    value: function entries() {
      return callback2().entries();
    }
  };
  items[1] = obj;
  obj = {
    key: "forEach",
    value: function forEach(arg0) {
      return callback2().forEach(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(arg0) {
      return callback2().get(arg0);
    }
  };
  items[4] = {
    key: "has",
    value: function has(arg0) {
      return callback2().has(arg0);
    }
  };
  items[5] = {
    key: "keys",
    value: function keys() {
      return callback2().keys();
    }
  };
  items[6] = {
    key: "values",
    value: function values() {
      return callback2().values();
    }
  };
  return callback(EventCounts, items);
}();

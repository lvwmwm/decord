// Module ID: 13208
// Function ID: 100121
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13208 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resolveFingerprint(arg0) {
  if (null != arg0) {
    let extractIdResult = arg1(dependencyMap[7]).extractId(arg0);
    const obj = arg1(dependencyMap[7]);
  } else {
    extractIdResult = id.getId();
  }
  return extractIdResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = 0;
let closure_10 = [];
let closure_11 = 0;
let closure_12 = [];
let closure_13 = false;
let tmp2 = (Store) => {
  class AnalyticsLogStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AnalyticsLogStore);
      obj = closure_5(AnalyticsLogStore);
      tmp2 = closure_4;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AnalyticsLogStore;
  callback2(AnalyticsLogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "loggedEvents",
    get() {
      return closure_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "loggedEventsVersion",
    get() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "loggedTriggers",
    get() {
      return closure_12;
    }
  };
  items[4] = {
    key: "trackTriggers",
    get() {
      return closure_13;
    }
  };
  return callback(AnalyticsLogStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "AnalyticsLogStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  TRACK: function handleTrack(arg0) {
    if (closure_8.isDeveloper) {
      const obj = {};
      let closure_9 = str + 1;
      obj.key = +closure_9.toString();
      obj.event = tmp;
      obj.properties = tmp2;
      obj.fingerprint = resolveFingerprint(tmp3);
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      let arr = arr.push(obj);
      closure_11 = closure_11 + 1;
      if (arr.length > 500) {
        const _Math = Math;
        arr = arr.slice(-Math.floor(250));
      }
    }
  },
  TRACK_TRIGGER: function handleTrackTrigger(arg0) {
    let _location;
    let descriptor;
    let excluded;
    let experimentId;
    let exposureType;
    let previouslyTracked;
    let isDeveloper = closure_8.isDeveloper;
    ({ experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked } = arg0);
    if (isDeveloper) {
      isDeveloper = closure_13;
    }
    if (isDeveloper) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
      const obj = { key: arg1(dependencyMap[8]).v4(), experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked };
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      items[arraySpreadResult] = obj;
      const sum = arraySpreadResult + 1;
      isDeveloper = items.length > 500;
      const obj2 = arg1(dependencyMap[8]);
    }
    if (isDeveloper) {
      arr2.shift();
    }
  },
  SET_TRACK_TRIGGERS: function handleSetTrackTriggers(enabled) {
    enabled = enabled.enabled;
  },
  ANALYTICS_LOG_CLEAR: function handleAnalyticsLogClear() {
    let closure_10 = [];
    closure_11 = closure_11 + 1;
    let closure_12 = [];
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default tmp2;

// Module ID: 13331
// Function ID: 102332
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 6961, 490, 491, 566, 686, 2]

// Module 13331 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import extractId from "extractId";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

const require = arg1;
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
    let extractIdResult = require(490) /* extractId */.extractId(arg0);
    const obj = require(490) /* extractId */;
  } else {
    extractIdResult = id.getId();
  }
  return extractIdResult;
}
let c9 = 0;
let closure_10 = [];
let c11 = 0;
let closure_12 = [];
let c13 = false;
let tmp2 = ((Store) => {
  class AnalyticsLogStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, AnalyticsLogStore);
      obj = outer1_5(AnalyticsLogStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AnalyticsLogStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "loggedEvents",
    get() {
      return outer1_10;
    }
  };
  items[1] = obj;
  obj = {
    key: "loggedEventsVersion",
    get() {
      return outer1_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "loggedTriggers",
    get() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "trackTriggers",
    get() {
      return outer1_13;
    }
  };
  return callback(AnalyticsLogStore, items);
})(require("initialize").Store);
tmp2.displayName = "AnalyticsLogStore";
tmp2 = new tmp2(require("dispatcher"), {
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
      arr = arr.push(obj);
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
      isDeveloper = c13;
    }
    if (isDeveloper) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      const obj = { key: require(491) /* v1 */.v4(), experimentId, descriptor, exposureType, excluded, location: _location, previouslyTracked };
      const _Date = Date;
      const date = new Date();
      obj.timestamp = date;
      items[arraySpreadResult] = obj;
      const sum = arraySpreadResult + 1;
      isDeveloper = items.length > 500;
      const obj2 = require(491) /* v1 */;
    }
    if (isDeveloper) {
      items.shift();
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/devtools/AnalyticsLogStore.tsx");

export default tmp2;

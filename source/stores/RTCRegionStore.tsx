// Module ID: 4223
// Function ID: 36864
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 22, 566, 686, 2]

// Module 4223 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null };
const HOUR = require("set").Millis.HOUR;
let tmp2 = ((DeviceSettingsStore) => {
  class RTCRegionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, RTCRegionStore);
      obj = outer1_5(RTCRegionStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(RTCRegionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_7;
      }
      const outer1_8 = tmp;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "shouldIncludePreferredRegion",
    value() {
      return null != outer1_8.preferredRegions;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPreferredRegion",
    value() {
      const preferredRegions = outer1_8.preferredRegions;
      let first;
      if (null != preferredRegions) {
        first = preferredRegions[0];
      }
      let tmp2 = null;
      if (null != first) {
        tmp2 = first;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPreferredRegions",
    value() {
      return outer1_8.preferredRegions;
    }
  };
  items[4] = {
    key: "getRegion",
    value(str) {
      if (null != str) {
        return str.substr(0, str.search(/\d/));
      }
    }
  };
  items[5] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_8;
    }
  };
  items[6] = {
    key: "shouldPerformLatencyTest",
    value(arg0) {
      let tmp = null === outer1_8.preferredRegions;
      if (!tmp) {
        let lastGeoRankedOrder = outer1_8.lastGeoRankedOrder;
        if (null == lastGeoRankedOrder) {
          lastGeoRankedOrder = [];
        }
        tmp = !RTCRegionStore(outer1_1[6]).isEqual(arg0, lastGeoRankedOrder);
        const obj = RTCRegionStore(outer1_1[6]);
      }
      if (!tmp) {
        const _Date = Date;
        const lastTestTimestamp = outer1_8.lastTestTimestamp;
        let num2 = 0;
        const timestamp = Date.now();
        if (null != lastTestTimestamp) {
          num2 = lastTestTimestamp;
        }
        tmp = timestamp - num2 >= outer1_9;
      }
      return tmp;
    }
  };
  return callback(RTCRegionStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "RTCRegionStore";
tmp2.persistKey = "RTCRegionStore";
let items = [
  (preferredRegion) => {
    if (preferredRegion.preferredRegion) {
      const items = [preferredRegion.preferredRegion];
      preferredRegion.preferredRegions = items;
    } else {
      preferredRegion.preferredRegions = null;
    }
    delete tmp.preferredRegion;
    return preferredRegion;
  }
];
tmp2.migrations = items;
obj = {
  RTC_LATENCY_TEST_COMPLETE: function handleCompletedRTCLatencyTest(latencyRankedRegions) {
    if (latencyRankedRegions.latencyRankedRegions.length > 0) {
      obj.lastGeoRankedOrder = latencyRankedRegions.geoRankedRegions;
      obj.preferredRegions = latencyRankedRegions.latencyRankedRegions;
    }
    obj.lastTestTimestamp = Date.now();
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/RTCRegionStore.tsx");

export default tmp2;

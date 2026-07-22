// Module ID: 4219
// Function ID: 36831
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4219 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { type: "mn", key: "description", screenId: "Array" };
const HOUR = importDefault(dependencyMap[5]).Millis.HOUR;
let tmp2 = (DeviceSettingsStore) => {
  class RTCRegionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, RTCRegionStore);
      obj = closure_5(RTCRegionStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const importDefault = RTCRegionStore;
  callback2(RTCRegionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_7;
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "shouldIncludePreferredRegion",
    value() {
      return null != closure_8.preferredRegions;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPreferredRegion",
    value() {
      const preferredRegions = closure_8.preferredRegions;
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
      return closure_8.preferredRegions;
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
      return closure_8;
    }
  };
  items[6] = {
    key: "shouldPerformLatencyTest",
    value(arg0) {
      let tmp = null === closure_8.preferredRegions;
      if (!tmp) {
        let lastGeoRankedOrder = closure_8.lastGeoRankedOrder;
        if (null == lastGeoRankedOrder) {
          lastGeoRankedOrder = [];
        }
        tmp = !RTCRegionStore(closure_1[6]).isEqual(arg0, lastGeoRankedOrder);
        const obj = RTCRegionStore(closure_1[6]);
      }
      if (!tmp) {
        const _Date = Date;
        const lastTestTimestamp = closure_8.lastTestTimestamp;
        let num2 = 0;
        const timestamp = Date.now();
        if (null != lastTestTimestamp) {
          num2 = lastTestTimestamp;
        }
        tmp = timestamp - num2 >= closure_9;
      }
      return tmp;
    }
  };
  return callback(RTCRegionStore, items);
}(importDefault(dependencyMap[7]).DeviceSettingsStore);
tmp2.displayName = "RTCRegionStore";
tmp2.persistKey = "RTCRegionStore";
const items = [
  (preferredRegion) => {
    if (preferredRegion.preferredRegion) {
      const items = [preferredRegion.preferredRegion];
      preferredRegion.preferredRegions = items;
    } else {
      preferredRegion.preferredRegions = null;
    }
    delete r0.preferredRegion;
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
tmp2 = new tmp2(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/RTCRegionStore.tsx");

export default tmp2;

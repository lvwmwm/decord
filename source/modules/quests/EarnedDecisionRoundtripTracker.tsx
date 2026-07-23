// Module ID: 9457
// Function ID: 73682
// Name: trackRoundtrip
// Dependencies: [6, 7, 4222, 653, 6695, 675, 6919, 6698, 2]

// Module 9457 (trackRoundtrip)
import getDeviceMetadata from "getDeviceMetadata";
import isForegrounded from "isForegrounded";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function trackRoundtrip(apiResponseTimestamp) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    let obj = require(6695) /* receiveNetworkInfoformation */;
    const signalStrength = obj.getSignalStrength();
    obj = {};
    const merged = Object.assign(importDefault(6919)());
    obj["endpoint"] = apiResponseTimestamp.endpoint;
    obj["was_successful"] = apiResponseTimestamp.wasSuccessful;
    obj["api_latency_ms"] = diff;
    obj["mobile_network_type"] = type.getType();
    let tmp10 = null != signalStrength;
    if (tmp10) {
      obj = { mobile_signal_strength_level: signalStrength };
      tmp10 = obj;
    }
    const merged1 = Object.assign(tmp10);
    obj["caller_source"] = apiResponseTimestamp.callerSource;
    obj["request_id"] = apiResponseTimestamp.requestId;
    obj["fetched_at"] = apiResponseTimestamp.fetchedAt;
    const obj2 = importDefault(675);
    obj["is_foregrounded"] = require(6698) /* isForegrounded */.isForegrounded();
    obj2.track(AnalyticEvents.EARNED_DECISION_ROUNDTRIP, obj);
    const obj5 = require(6698) /* isForegrounded */;
  }
}
let tmp2 = (() => {
  class EarnedDecisionRoundtripTracker {
    constructor() {
      tmp = outer1_3(this, EarnedDecisionRoundtripTracker);
      map = new Map();
      this.pendingRequests = map;
      return;
    }
  }
  let obj = {
    key: "recordEarnedRequestAttempt",
    value(arg0, callerSource) {
      const self = this;
      let closure_1 = arg0;
      const obj = { initialSendTimestamp: Date.now(), endpoint: "/quests/earned-decision", apiResponseTimestamp: null, wasSuccessful: false, callerSource, requestId: null, fetchedAt: null };
      let pendingRequests = this.pendingRequests;
      const result = pendingRequests.set(arg0, obj);
      const timerId = setTimeout(() => {
        const pendingRequests = self.pendingRequests;
        const value = pendingRequests.get(closure_1);
        if (null != value) {
          outer2_7(value);
          const pendingRequests2 = self.pendingRequests;
          pendingRequests2.delete(closure_1);
        }
      }, 30000);
    }
  };
  const items = [obj, ];
  obj = {
    key: "recordEarnedRequestApiResponse",
    value(arg0, requestId) {
      const self = this;
      requestId = requestId.requestId;
      if (requestId === undefined) {
        requestId = null;
      }
      let fetchedAt = requestId.fetchedAt;
      if (fetchedAt === undefined) {
        fetchedAt = null;
      }
      const pendingRequests = self.pendingRequests;
      const value = pendingRequests.get(arg0);
      if (null != value) {
        const obj = {};
        const merged = Object.assign(value);
        const _Date = Date;
        obj["apiResponseTimestamp"] = Date.now();
        obj["wasSuccessful"] = requestId.wasSuccessful;
        obj["requestId"] = requestId;
        obj["fetchedAt"] = fetchedAt;
        outer1_7(obj);
        const pendingRequests2 = self.pendingRequests;
        pendingRequests2.delete(arg0);
      }
    }
  };
  items[1] = obj;
  return callback(EarnedDecisionRoundtripTracker, items);
})();
tmp2 = new tmp2();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default tmp2;

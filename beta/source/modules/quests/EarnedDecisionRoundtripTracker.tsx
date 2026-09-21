// Module ID: 10586
// Function ID: 10587
// Name: EarnedDecisionRoundtripTracker
// Dependencies: [4807, 1078, 7706, 1245, 7918, 7709, 2]

// Module 10586 (EarnedDecisionRoundtripTracker)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import NetStats from "NetStats" /* 7706 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7918 */;
import NetworkStore from "NetworkStore" /* 4807 */;

require = fn;
function trackRoundtrip(apiResponseTimestamp) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    const signalStrength = NetStats.getSignalStrength();
    const tmp2 = require;
    const obj4 = {};
    const merged = Object.assign(getDeviceMetadataDefault());
    ({ endpoint: obj3.endpoint, wasSuccessful: obj3.was_successful } = apiResponseTimestamp);
    obj4.api_latency_ms = diff;
    obj4.mobile_network_type = NetworkStore.getType();
    let tmp10 = null != signalStrength;
    if (tmp10) {
      const obj5 = { mobile_signal_strength_level: signalStrength };
      tmp10 = obj5;
    }
    const merged1 = Object.assign(tmp10);
    ({ callerSource: obj3.caller_source, requestId: obj3.request_id, fetchedAt: obj3.fetched_at } = apiResponseTimestamp);
    const obj2 = AnalyticsUtilsDefault;
    obj4.is_foregrounded = tmp2(7709).isForegrounded();
    obj2.track(AnalyticEvents.EARNED_DECISION_ROUNDTRIP, obj4);
    const tmp2Result = tmp2(7709);
  }
}
const AnalyticEvents = fn(1078).AnalyticEvents;
class EarnedDecisionRoundtripTracker {
  constructor() {
    merged = Object.assign({ pendingRequests: null });
    map = new Map();
    merged[0] = map;
    return merged;
  }
}
const prototype = EarnedDecisionRoundtripTracker.prototype;
prototype["recordEarnedRequestAttempt"] = function recordEarnedRequestAttempt(arg0, callerSource) {
  const self = this;
  closure_0 = arg0;
  let pendingRequests = this.pendingRequests;
  const result = pendingRequests.set(arg0, { initialSendTimestamp: Date.now(), endpoint: "/quests/earned-decision", apiResponseTimestamp: null, wasSuccessful: false, callerSource, requestId: null, fetchedAt: null });
  const timerId = setTimeout(() => {
    const pendingRequests = self.pendingRequests;
    value = pendingRequests.get(closure_0);
    if (null != value) {
      trackRoundtrip(value);
      const pendingRequests2 = self.pendingRequests;
      pendingRequests2.delete(closure_0);
    }
  }, 30000);
};
prototype["recordEarnedRequestApiResponse"] = function recordEarnedRequestApiResponse(arg0, requestId) {
  requestId = requestId.requestId;
  if (requestId === undefined) {
    requestId = null;
  }
  let fetchedAt = requestId.fetchedAt;
  if (fetchedAt === undefined) {
    fetchedAt = null;
  }
  const pendingRequests = this.pendingRequests;
  value = pendingRequests.get(arg0);
  if (null != value) {
    const obj = {};
    const merged = Object.assign(value);
    const _Date = Date;
    obj.apiResponseTimestamp = Date.now();
    obj.wasSuccessful = requestId.wasSuccessful;
    obj.requestId = requestId;
    obj.fetchedAt = fetchedAt;
    trackRoundtrip(obj);
    const pendingRequests2 = this.pendingRequests;
    pendingRequests2.delete(arg0);
  }
};
let merged = Object.assign({ pendingRequests: null });
merged[0] = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default merged;

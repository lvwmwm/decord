// Module ID: 9170
// Function ID: 9171
// Name: EarnedDecisionRoundtripTracker
// Dependencies: [5281, 1085, 7175, 1265, 7358, 7178, 2]

// Module 9170 (EarnedDecisionRoundtripTracker)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import NetStats from "NetStats" /* 7175 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7358 */;
import NetworkStore from "NetworkStore" /* 5281 */;
import size from "module_2" /* 2 */;

function trackRoundtrip(apiResponseTimestamp) {
  let tmp2Result;
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    const obj = NetStats;
    const signalStrength = obj.getSignalStrength();
    const obj3 = { api_latency_ms: diff, mobile_network_type: NetworkStore.getType(), is_foregrounded: tmp2Result.isForegrounded() };
    const track = AnalyticsUtilsDefault.track;
    const EARNED_DECISION_ROUNDTRIP = AnalyticEvents.EARNED_DECISION_ROUNDTRIP;
    AnalyticsUtilsDefault;
    const merged = Object.assign(getDeviceMetadataDefault());
    ({ endpoint: obj2.endpoint, wasSuccessful: obj2.was_successful } = apiResponseTimestamp);
    let tmp11 = null != signalStrength;
    const tmp2 = require;
    if (tmp11) {
      tmp11 = { mobile_signal_strength_level: signalStrength };
      const obj4 = { mobile_signal_strength_level: signalStrength };
    }
    const merged1 = Object.assign(tmp11);
    ({ callerSource: obj2.caller_source, requestId: obj2.request_id, fetchedAt: obj2.fetched_at } = apiResponseTimestamp);
    tmp2Result = tmp2(7178);
    track(EARNED_DECISION_ROUNDTRIP, obj3);
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
class EarnedDecisionRoundtripTracker {
  constructor() {
    const merged = Object.assign({ pendingRequests: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  recordEarnedRequestAttempt(arg0, callerSource) {
    const self = this;
    let closure_0 = arg0;
    let pendingRequests = this.pendingRequests;
    const obj = { initialSendTimestamp: Date.now(), endpoint: "/quests/earned-decision", apiResponseTimestamp: null, wasSuccessful: false, callerSource, requestId: null, fetchedAt: null };
    const result = pendingRequests.set(arg0, obj);
    const timerId = setTimeout(() => {
      const pendingRequests = self.pendingRequests;
      const value = pendingRequests.get(closure_0);
      const tmp = self;
      const tmp2 = closure_0;
      if (null != value) {
        trackRoundtrip(value);
        const pendingRequests2 = tmp.pendingRequests;
        pendingRequests2.delete(tmp2);
      }
    }, 30000);
  }
  recordEarnedRequestApiResponse(get, requestId) {
    requestId = requestId.requestId;
    const wasSuccessful = requestId.wasSuccessful;
    if (requestId === undefined) {
      requestId = null;
    }
    let fetchedAt = requestId.fetchedAt;
    if (fetchedAt === undefined) {
      fetchedAt = null;
    }
    const pendingRequests = this.pendingRequests;
    const value = pendingRequests.get(get);
    if (null != value) {
      const obj = { apiResponseTimestamp: Date.now(), wasSuccessful, requestId, fetchedAt };
      const merged = Object.assign(value);
      const _Date = Date;
      trackRoundtrip(obj);
      const pendingRequests2 = this.pendingRequests;
      pendingRequests2.delete(get);
    }
  }
}
const prototype = EarnedDecisionRoundtripTracker.prototype;
let merged = Object.assign({ pendingRequests: null });
const map = new Map();
merged[0] = map;
let result = size.fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default merged;

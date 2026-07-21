// Module ID: 9449
// Function ID: 73628
// Name: trackRoundtrip
// Dependencies: []

// Module 9449 (trackRoundtrip)
function trackRoundtrip(apiResponseTimestamp) {
  if (Math.random() <= 0.1) {
    let diff = null;
    if (null != apiResponseTimestamp.apiResponseTimestamp) {
      diff = apiResponseTimestamp.apiResponseTimestamp - apiResponseTimestamp.initialSendTimestamp;
    }
    let obj = arg1(dependencyMap[4]);
    const signalStrength = obj.getSignalStrength();
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[6])());
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
    const obj2 = importDefault(dependencyMap[5]);
    obj["is_foregrounded"] = arg1(dependencyMap[7]).isForegrounded();
    obj2.track(AnalyticEvents.EARNED_DECISION_ROUNDTRIP, obj);
    const obj5 = arg1(dependencyMap[7]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
let tmp2 = () => {
  class EarnedDecisionRoundtripTracker {
    constructor() {
      tmp = closure_3(this, EarnedDecisionRoundtripTracker);
      map = new Map();
      this.pendingRequests = map;
      return;
    }
  }
  const arg1 = EarnedDecisionRoundtripTracker;
  let obj = {
    key: "recordEarnedRequestAttempt",
    value(arg0, callerSource) {
      const EarnedDecisionRoundtripTracker = this;
      const obj = { <string:1245880232>: false, <string:1275069486>: false, <string:1526727829>: 49253888, <string:276825862>: 49553152, <string:118818459>: 49253376, <string:123535643>: 49548032, <string:2351468194>: 49250560, initialSendTimestamp: Date.now(), callerSource };
      const pendingRequests = this.pendingRequests;
      const result = pendingRequests.set(arg0, obj);
      const timerId = setTimeout(() => {
        const pendingRequests = self.pendingRequests;
        const value = pendingRequests.get(arg0);
        if (null != value) {
          callback(value);
          const pendingRequests2 = self.pendingRequests;
          pendingRequests2.delete(arg0);
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
        callback2(obj);
        const pendingRequests2 = self.pendingRequests;
        pendingRequests2.delete(arg0);
      }
    }
  };
  items[1] = obj;
  return callback(EarnedDecisionRoundtripTracker, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/EarnedDecisionRoundtripTracker.tsx");

export default tmp2;

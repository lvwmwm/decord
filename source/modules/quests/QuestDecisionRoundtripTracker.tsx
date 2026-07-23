// Module ID: 9453
// Function ID: 73657
// Name: trackRoundtrip
// Dependencies: [6, 7, 4222, 6942, 653, 6695, 675, 6919, 6698, 6957, 2]

// Module 9453 (trackRoundtrip)
import expandLocation from "expandLocation";
import getDeviceMetadata from "getDeviceMetadata";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
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
    obj["ad_request_id"] = apiResponseTimestamp.adRequestId;
    obj["fetched_at"] = arg2;
    const previousAdDecision = apiResponseTimestamp.previousAdDecision;
    let decision_id;
    if (null != previousAdDecision) {
      const adDecisionData = previousAdDecision.adDecisionData;
      if (null != adDecisionData) {
        decision_id = adDecisionData.decision_id;
      }
    }
    let tmp16 = null;
    if (null != decision_id) {
      tmp16 = decision_id;
    }
    obj["previous_ad_request_id"] = tmp16;
    const previousAdDecision2 = apiResponseTimestamp.previousAdDecision;
    let fetchedAt;
    if (null != previousAdDecision2) {
      fetchedAt = previousAdDecision2.fetchedAt;
    }
    let tmp18 = null;
    if (null != fetchedAt) {
      tmp18 = fetchedAt;
    }
    obj["previous_fetched_at"] = tmp18;
    obj["transition_case"] = arg1;
    const obj2 = importDefault(675);
    obj["is_foregrounded"] = require(6698) /* isForegrounded */.isForegrounded();
    obj2.track(AnalyticEvents.QUEST_DECISION_ROUNDTRIP, obj);
    const obj5 = require(6698) /* isForegrounded */;
  }
}
let tmp2 = (() => {
  class QuestDecisionRoundtripTracker {
    constructor() {
      tmp = outer1_3(this, QuestDecisionRoundtripTracker);
      map = new Map();
      this.pendingRequests = map;
      return;
    }
  }
  let obj = {
    key: "recordQuestRequestAttempt",
    value(endpoint, callerSource) {
      let tmp = arg2;
      const self = this;
      let closure_1 = endpoint;
      if (arg2 === undefined) {
        tmp = null;
      }
      let obj = outer1_1(outer1_2[9]);
      let tmp2 = null;
      if (obj.getConfig({ location: "recordQuestRequestAttempt" }).enableNewRequestBehavior) {
        tmp2 = null;
        if (null != tmp) {
          const questAdDecisionByPlacement = outer1_6.questAdDecisionByPlacement;
          let value = questAdDecisionByPlacement.get(tmp);
          tmp2 = null;
          if (null != value) {
            tmp2 = value;
          }
        }
      }
      obj = { initialSendTimestamp: Date.now(), endpoint, apiResponseTimestamp: null, wasSuccessful: false, callerSource, adRequestId: null, previousAdDecision: tmp2, placement: tmp };
      let pendingRequests = this.pendingRequests;
      const result = pendingRequests.set(endpoint, obj);
      const timerId = setTimeout(() => {
        const pendingRequests = self.pendingRequests;
        const value = pendingRequests.get(closure_1);
        if (null != value) {
          outer2_8(value, "timeout", null);
          const pendingRequests2 = self.pendingRequests;
          pendingRequests2.delete(closure_1);
        }
      }, 30000);
    }
  };
  const items = [obj, ];
  obj = {
    key: "recordQuestRequestApiResponse",
    value(arg0, adRequestId) {
      const self = this;
      adRequestId = adRequestId.adRequestId;
      if (adRequestId === undefined) {
        adRequestId = null;
      }
      let currentQuestId = adRequestId.currentQuestId;
      if (currentQuestId === undefined) {
        currentQuestId = null;
      }
      let currentFetchedAt = adRequestId.currentFetchedAt;
      if (currentFetchedAt === undefined) {
        currentFetchedAt = null;
      }
      const pendingRequests = self.pendingRequests;
      const value = pendingRequests.get(arg0);
      if (null != value) {
        let obj = { location: "recordQuestRequestApiResponse" };
        let str = "legacy";
        let tmp7 = null;
        if (obj4.getConfig(obj).enableNewRequestBehavior) {
          let tmp5 = null;
          if (null !== currentFetchedAt) {
            obj = { questId: currentQuestId, adCreativeId: currentQuestId, fetchedAt: currentFetchedAt, ttlMillis: 0 };
            let tmp6;
            if (null != adRequestId) {
              obj = { decision_id: adRequestId };
              tmp6 = obj;
            }
            obj.adDecisionData = tmp6;
            tmp5 = obj;
          }
          str = (function computeTransitionCase(previousAdDecision, questId2) {
            function getState(questId) {
              let str = "null";
              if (null != questId) {
                let str2 = "quest";
                if (null == questId.questId) {
                  str2 = "no_serve";
                }
                str = str2;
              }
              return str;
            }
            const state = getState(previousAdDecision);
            const state1 = getState(questId2);
            if ("quest" === state) {
              if ("quest" === state1) {
                let questId;
                if (null != previousAdDecision) {
                  questId = previousAdDecision.questId;
                }
                let questId1;
                if (null != questId2) {
                  questId1 = questId2.questId;
                }
                let str = "different_quest";
                if (questId === questId1) {
                  str = "same_quest";
                }
                let combined = str;
              }
              return combined;
            }
            combined = "" + state + "_to_" + state1;
          })(value.previousAdDecision, tmp5);
          tmp7 = currentFetchedAt;
        }
        const obj1 = {};
        const merged = Object.assign(value);
        const _Date = Date;
        obj1["apiResponseTimestamp"] = Date.now();
        obj1["wasSuccessful"] = adRequestId.wasSuccessful;
        obj1["adRequestId"] = adRequestId;
        outer1_8(obj1, str, tmp7);
        const pendingRequests2 = self.pendingRequests;
        pendingRequests2.delete(arg0);
        obj4 = outer1_1(outer1_2[9]);
      }
    }
  };
  items[1] = obj;
  return callback(QuestDecisionRoundtripTracker, items);
})();
tmp2 = new tmp2();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/QuestDecisionRoundtripTracker.tsx");

export default tmp2;

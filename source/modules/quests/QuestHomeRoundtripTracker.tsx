// Module ID: 14064
// Function ID: 108152
// Name: QuestHomeRoundtripTracker
// Dependencies: [6, 7, 653, 675, 6837, 6842, 9456, 2]

// Module 14064 (QuestHomeRoundtripTracker)
import canUIRequestGatewaySocket from "canUIRequestGatewaySocket";
import set from "set";
import { AnalyticEvents } from "ME";

const require = arg1;
let tmp2 = (() => {
  class QuestHomeRoundtripTracker {
    constructor() {
      tmp = outer1_3(this, QuestHomeRoundtripTracker);
      this.startTime = null;
      this.timeoutTimer = null;
      return;
    }
  }
  let obj = {
    key: "clearTimeoutTimer",
    value() {
      const self = this;
      if (null != this.timeoutTimer) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.timeoutTimer);
        self.timeoutTimer = null;
      }
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "sendMetric",
    value(timeout, duration) {
      let obj = outer1_1(outer1_2[3]);
      obj = { timeout, duration };
      obj.track(outer1_5.QUEST_HOME_ROUNDTRIP, obj);
      if (Math.random() <= 0.1) {
        obj = { name: QuestHomeRoundtripTracker(outer1_2[5]).MetricEvents.QUEST_HOME_ROUNDTRIP };
        const _HermesInternal = HermesInternal;
        const items = ["includes_bounties:" + arg2, ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "timeout:" + timeout;
        obj.tags = items;
        outer1_1(outer1_2[4]).distribution(obj, duration);
        const obj3 = outer1_1(outer1_2[4]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "startTracking",
    value() {
      let obj = arg0;
      let self = this;
      self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.includesBounties;
      if (flag === undefined) {
        flag = false;
      }
      self.clearTracking();
      self.startTime = performance.now();
      self.timeoutTimer = setTimeout(() => {
        self.stopTracking({ includesBounties: flag, timeout: true });
      }, 30000);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stopTracking",
    value() {
      let obj = arg0;
      const self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.includesBounties;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = obj.timeout;
      if (flag2 === undefined) {
        flag2 = false;
      }
      if (null != self.startTime) {
        if ("active" === obj2.getState()) {
          let num2 = 30000;
          if (!flag2) {
            const _Math = Math;
            const _performance = performance;
            num2 = Math.round(performance.now() - self.startTime);
          }
          const _Math2 = Math;
          self.sendMetric(flag2, Math.min(num2, 30000), flag);
        }
        self.clearTracking();
        obj2 = outer1_1(outer1_2[6]);
      }
    }
  };
  items[4] = {
    key: "clearTracking",
    value() {
      this.clearTimeoutTimer();
      this.startTime = null;
    }
  };
  return callback(QuestHomeRoundtripTracker, items);
})();
tmp2 = new tmp2();
const result = require("ME").fileFinishedImporting("modules/quests/QuestHomeRoundtripTracker.tsx");

export default tmp2;

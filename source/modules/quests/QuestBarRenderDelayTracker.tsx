// Module ID: 9455
// Function ID: 73667
// Name: QuestBarRenderDelayTracker
// Dependencies: [6, 7, 653, 6837, 6842, 675, 9456, 2]

// Module 9455 (QuestBarRenderDelayTracker)
import canUIRequestGatewaySocket from "canUIRequestGatewaySocket";
import set from "set";
import { AnalyticEvents } from "ME";

const require = arg1;
let tmp2 = (() => {
  class QuestBarRenderDelayTracker {
    constructor() {
      tmp = outer1_3(this, QuestBarRenderDelayTracker);
      this.startTime = null;
      this.questId = null;
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
    value(quest_id, timeout, duration) {
      if (Math.random() <= 0.1) {
        let obj = outer1_1(outer1_2[3]);
        obj = { name: QuestBarRenderDelayTracker(outer1_2[4]).MetricEvents.QUEST_BAR_RENDER_DELAY };
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + quest_id, ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "timeout:" + timeout;
        obj.tags = items;
        obj.distribution(obj, duration);
        obj = { quest_id, timeout, duration };
        outer1_1(outer1_2[5]).track(outer1_5.QUEST_BAR_RENDER_DELAY, obj);
        const obj3 = outer1_1(outer1_2[5]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "startTracking",
    value(questId) {
      const self = this;
      let closure_1 = questId;
      this.clearTracking();
      this.startTime = performance.now();
      this.questId = questId;
      this.timeoutTimer = setTimeout(() => {
        self.stopTracking(closure_1, true);
      }, 30000);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stopTracking",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (null !== self.startTime) {
        if (self.questId === arg0) {
          if ("active" === obj.getState()) {
            let num2 = 30000;
            if (!flag) {
              const _Math = Math;
              const _performance = performance;
              num2 = Math.round(performance.now() - self.startTime);
            }
            const _Math2 = Math;
            self.sendMetric(arg0, flag, Math.min(num2, 30000));
          }
          self.clearTracking();
          obj = outer1_1(outer1_2[6]);
        }
      }
    }
  };
  items[4] = {
    key: "clearTracking",
    value() {
      this.clearTimeoutTimer();
      this.startTime = null;
      this.questId = null;
    }
  };
  return callback(QuestBarRenderDelayTracker, items);
})();
tmp2 = new tmp2();
const result = require("ME").fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default tmp2;

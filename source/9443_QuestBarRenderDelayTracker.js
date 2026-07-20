// Module ID: 9443
// Function ID: 73588
// Name: QuestBarRenderDelayTracker
// Dependencies: []

// Module 9443 (QuestBarRenderDelayTracker)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
let tmp2 = () => {
  class QuestBarRenderDelayTracker {
    constructor() {
      tmp = closure_3(this, QuestBarRenderDelayTracker);
      this.startTime = null;
      this.questId = null;
      this.timeoutTimer = null;
      return;
    }
  }
  const arg1 = QuestBarRenderDelayTracker;
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
  const items = [obj, , , , ];
  obj = {
    key: "sendMetric",
    value(quest_id, timeout, duration) {
      if (Math.random() <= 0.1) {
        let obj = callback(closure_2[3]);
        obj = { name: QuestBarRenderDelayTracker(closure_2[4]).MetricEvents.QUEST_BAR_RENDER_DELAY };
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + quest_id, ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "timeout:" + timeout;
        obj.tags = items;
        obj.distribution(obj, duration);
        obj = { quest_id, timeout, duration };
        callback(closure_2[5]).track(constants.QUEST_BAR_RENDER_DELAY, obj);
        const obj3 = callback(closure_2[5]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "startTracking",
    value(questId) {
      const QuestBarRenderDelayTracker = this;
      this.clearTracking();
      this.startTime = performance.now();
      this.questId = questId;
      this.timeoutTimer = setTimeout(() => {
        self.stopTracking(arg0, true);
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
          const obj = callback(closure_2[6]);
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
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default tmp2;

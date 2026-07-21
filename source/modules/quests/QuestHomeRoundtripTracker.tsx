// Module ID: 13940
// Function ID: 105924
// Name: QuestHomeRoundtripTracker
// Dependencies: []

// Module 13940 (QuestHomeRoundtripTracker)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
let tmp2 = () => {
  class QuestHomeRoundtripTracker {
    constructor() {
      tmp = closure_3(this, QuestHomeRoundtripTracker);
      this.startTime = null;
      this.timeoutTimer = null;
      return;
    }
  }
  const arg1 = QuestHomeRoundtripTracker;
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
    value(timeout, duration) {
      let obj = callback(closure_2[3]);
      obj = { timeout, duration };
      obj.track(constants.QUEST_HOME_ROUNDTRIP, obj);
      if (Math.random() <= 0.1) {
        obj = { name: QuestHomeRoundtripTracker(closure_2[5]).MetricEvents.QUEST_HOME_ROUNDTRIP };
        const _HermesInternal = HermesInternal;
        const items = ["includes_bounties:" + arg2, ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "timeout:" + timeout;
        obj.tags = items;
        callback(closure_2[4]).distribution(obj, duration);
        const obj3 = callback(closure_2[4]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "startTracking",
    value() {
      let obj = arg0;
      const self = this;
      const QuestHomeRoundtripTracker = this;
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
        const obj2 = callback(closure_2[6]);
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
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/QuestHomeRoundtripTracker.tsx");

export default tmp2;

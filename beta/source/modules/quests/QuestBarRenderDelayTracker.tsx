// Module ID: 9785
// Function ID: 9786
// Name: QuestBarRenderDelayTracker
// Dependencies: [1086, 5180, 5185, 1253, 9786, 2]

// Module 9785 (QuestBarRenderDelayTracker)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5180 */;
import MetricEvents from "MetricEvents" /* 5185 */;
import DiscordAppStateDefault from "DiscordAppState" /* 9786 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestBarRenderDelayTracker {
  constructor() {
    return Object.assign({ startTime: null, questId: null, timeoutTimer: null });
  }
  clearTimeoutTimer() {
    const self = this;
    if (null != this.timeoutTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.timeoutTimer);
      self.timeoutTimer = null;
    }
  }
  sendMetric(quest_id, timeout, duration) {
    let items;
    if (Math.random() <= 0.1) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_RENDER_DELAY, tags: items };
      const distribution = MonitoringAgentDefault.distribution;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["quest_id:" + quest_id, ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "timeout:" + timeout;
      distribution(obj, duration);
      const obj3 = { quest_id, timeout, duration };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj3);
    }
  }
  startTracking(questId) {
    const self = this;
    let closure_0 = questId;
    this.clearTracking();
    this.startTime = performance.now();
    this.questId = questId;
    this.timeoutTimer = setTimeout(() => {
      self.stopTracking(closure_0, true);
    }, c4);
  }
  stopTracking(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const self = this;
    if (null !== this.startTime) {
      if (self.questId === arg0) {
        const obj = DiscordAppStateDefault;
        if ("active" === obj.getState()) {
          let rounded;
          if (flag) {
            rounded = c4;
          } else {
            const _Math = Math;
            const _performance = performance;
            rounded = Math.round(performance.now() - self.startTime);
          }
          const _Math2 = Math;
          self.sendMetric(arg0, flag, Math.min(rounded, c4));
        }
        self.clearTracking();
      }
    }
  }
  clearTracking() {
    this.clearTimeoutTimer();
    this.startTime = null;
    this.questId = null;
  }
}
const prototype = QuestBarRenderDelayTracker.prototype;
const prototype2 = QuestBarRenderDelayTracker.prototype;
const result = size.fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.assign({ startTime: null, questId: null, timeoutTimer: null });

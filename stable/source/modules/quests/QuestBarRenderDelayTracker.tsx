// Module ID: 9630
// Function ID: 9631
// Name: QuestBarRenderDelayTracker
// Dependencies: [1087, 6500, 6505, 6749, 1267, 6833, 2]

// Module 9630 (QuestBarRenderDelayTracker)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6500 */;
import MetricEvents from "MetricEvents" /* 6505 */;
import AdCreativeType from "AdCreativeType" /* 6749 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6833 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestBarRenderDelayTracker {
  constructor() {
    return Object.assign({ startTime: null, adCreativeId: null, adCreativeType: null, timeoutTimer: null });
  }
  clearTimeoutTimer() {
    const self = this;
    if (null != this.timeoutTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.timeoutTimer);
      self.timeoutTimer = null;
    }
  }
  sendMetric(ad_creative_id, ad_creative_type, timeout, duration) {
    let items;
    if (Math.random() <= 0.1) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_RENDER_DELAY, tags: items };
      const distribution = MonitoringAgentDefault.distribution;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + ad_creative_id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[ad_creative_type];
      const _HermesInternal3 = HermesInternal;
      items[2] = "timeout:" + timeout;
      distribution(obj, duration);
      const obj3 = { ad_creative_id, ad_creative_type, timeout, duration };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj3);
    }
  }
  startTracking(adCreativeId, adCreativeType) {
    const self = this;
    let closure_0 = adCreativeId;
    this.clearTracking();
    this.startTime = performance.now();
    this.adCreativeId = adCreativeId;
    this.adCreativeType = adCreativeType;
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
      if (self.adCreativeId === arg0) {
        if (null !== self.adCreativeType) {
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
            self.sendMetric(arg0, self.adCreativeType, flag, Math.min(rounded, c4));
          }
          self.clearTracking();
        }
      }
    }
  }
  clearTracking() {
    this.clearTimeoutTimer();
    this.startTime = null;
    this.adCreativeId = null;
    this.adCreativeType = null;
  }
}
const prototype = QuestBarRenderDelayTracker.prototype;
const prototype2 = QuestBarRenderDelayTracker.prototype;
const result = size.fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.assign({ startTime: null, adCreativeId: null, adCreativeType: null, timeoutTimer: null });

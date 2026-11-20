// Module ID: 12369
// Function ID: 12370
// Name: CheckpointSessionAnalyticsManager
// Dependencies: [12370, 1268, 6219, 2]

// Module 12369 (CheckpointSessionAnalyticsManager)
import v1 from "v1" /* 1268 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6219 */;
import CheckpointStore from "CheckpointStore" /* 12370 */;
import size from "module_2" /* 2 */;

class CheckpointSessionAnalyticsManager {
  constructor() {
    const merged = Object.assign({ sessionId: null, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
    merged[4] = { completedMs: 0, startedAt: null };
    merged[5] = { completedMs: 0, startedAt: null };
    return merged;
  }
  initialize(isForeground) {
    isForeground = isForeground.isForeground;
    const obj = v1;
    this.sessionId = obj.v4();
    this.stepName = null;
    this.isForeground = isForeground;
    this.isStopped = false;
    this.sessionTimer = { completedMs: 0, startedAt: null };
    this.customizationTimer = { completedMs: 0, startedAt: null };
    this.updateTimers();
  }
  setStepName(stepName) {
    this.stepName = stepName;
    this.updateTimers();
  }
  getStepName() {
    return this.stepName;
  }
  setForeground(stateFromStores) {
    this.isForeground = stateFromStores;
    this.updateTimers();
  }
  stop() {
    this.isStopped = true;
    this.updateTimers();
  }
  getAnalyticsProperties() {
    let completedMs;
    let completedMs2;
    const sessionTimer = this.sessionTimer;
    const obj = { checkpoint_session_id: this.sessionId, has_personalized_data: null != CheckpointStore.stats, checkpoint_availability: CheckpointStore.availability, checkpoint_compact_assets: CheckpointStore.compactAssets, time_spent_ms: completedMs, customization_time_spent_ms: completedMs2 };
    if (null != sessionTimer.startedAt) {
      const _Date = Date;
      completedMs = sessionTimer.completedMs + Date.now() - sessionTimer.startedAt;
    } else {
      completedMs = sessionTimer.completedMs;
    }
    const customizationTimer = this.customizationTimer;
    if (null != customizationTimer.startedAt) {
      const _Date2 = Date;
      completedMs2 = customizationTimer.completedMs + Date.now() - customizationTimer.startedAt;
    } else {
      completedMs2 = customizationTimer.completedMs;
    }
    return obj;
  }
  updateTimers() {
    const self = this;
    let result = !this.isStopped && self.isForeground;
    const sessionTimer = self.sessionTimer;
    if (result) {
      if (null == sessionTimer.startedAt) {
        const _Date2 = Date;
        sessionTimer.startedAt = Date.now();
      }
      const customizationTimer = self.customizationTimer;
      if (result) {
        result = null != self.stepName;
      }
      if (result) {
        const obj = CheckpointNavigation;
        result = obj.isCheckpointCustomizationRoute(self.stepName);
      }
      if (result) {
        if (null == customizationTimer.startedAt) {
          const _Date4 = Date;
          customizationTimer.startedAt = Date.now();
        }
      }
      if (!result) {
        result = null == customizationTimer.startedAt;
      }
      if (!result) {
        const _Date3 = Date;
        customizationTimer.completedMs = customizationTimer.completedMs + (Date.now() - customizationTimer.startedAt);
        customizationTimer.startedAt = null;
      }
    }
    const tmp3 = result || null == sessionTimer.startedAt;
    if (!tmp3) {
      const _Date = Date;
      sessionTimer.completedMs = sessionTimer.completedMs + (Date.now() - sessionTimer.startedAt);
      sessionTimer.startedAt = null;
    }
  }
}
const prototype = CheckpointSessionAnalyticsManager.prototype;
let merged = Object.assign({ sessionId: null, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
merged[4] = { completedMs: 0, startedAt: null };
merged[5] = { completedMs: 0, startedAt: null };
let result = size.fileFinishedImporting("modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx");

export default merged;

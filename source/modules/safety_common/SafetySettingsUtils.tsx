// Module ID: 13651
// Function ID: 104848
// Name: trackSafetySettingsNoticeAnalytics
// Dependencies: [653, 675, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 13651 (trackSafetySettingsNoticeAnalytics)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  let obj = importDefault(675);
  obj = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj);
};

// Module ID: 16243
// Function ID: 16244
// Name: SafetySettingsUtils
// Dependencies: [1084, 1264, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 16243 (SafetySettingsUtils)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj2);
};

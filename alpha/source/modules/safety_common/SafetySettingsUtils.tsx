// Module ID: 14494
// Function ID: 14495
// Name: SafetySettingsUtils
// Dependencies: [1085, 1252, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 14494 (SafetySettingsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj2);
};

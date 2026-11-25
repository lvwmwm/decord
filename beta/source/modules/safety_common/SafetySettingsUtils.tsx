// Module ID: 15992
// Function ID: 15993
// Name: SafetySettingsUtils
// Dependencies: [1071, 1255, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 15992 (SafetySettingsUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj2);
}

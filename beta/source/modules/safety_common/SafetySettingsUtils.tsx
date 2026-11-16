// Module ID: 17212
// Function ID: 17213
// Name: SafetySettingsUtils
// Dependencies: [1072, 1256, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 17212 (SafetySettingsUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj2);
}

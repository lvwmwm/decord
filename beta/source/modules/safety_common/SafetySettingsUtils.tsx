// Module ID: 14952
// Function ID: 14953
// Name: SafetySettingsUtils
// Dependencies: [1078, 1245, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 14952 (SafetySettingsUtils)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  AnalyticsUtilsDefault.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE });
};

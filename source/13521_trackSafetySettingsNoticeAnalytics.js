// Module ID: 13521
// Function ID: 102614
// Name: trackSafetySettingsNoticeAnalytics
// Dependencies: [670, 2, 6]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 13521 (trackSafetySettingsNoticeAnalytics)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  let obj = importDefault(dependencyMap[1]);
  obj = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj);
};

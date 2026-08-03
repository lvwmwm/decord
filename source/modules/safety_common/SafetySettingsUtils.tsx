// Module ID: 13865
// Function ID: 13866
// Name: trackSafetySettingsNoticeAnalytics
// Dependencies: [676, 698, 2]
// Exports: trackSafetySettingsNoticeAnalytics

// Module 13865 (trackSafetySettingsNoticeAnalytics)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/safety_common/SafetySettingsUtils.tsx");

export const trackSafetySettingsNoticeAnalytics = function trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, LEARN_MORE) {
  let obj = importDefault(698);
  obj = { notice_type: AGE_CONFIRMATION_NOTICE, action: LEARN_MORE };
  obj.track(AnalyticEvents.SAFETY_SETTINGS_NOTICE_ACTION, obj);
};

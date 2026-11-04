// Module ID: 9677
// Function ID: 9678
// Name: tracking/Tracking
// Dependencies: [1072, 1252, 2]
// Exports: trackYouTabAvatarPress, trackYouTabCustomStatusPress, trackYouTabEditProfilePress, trackYouTabNitroIconPress, trackYouTabSettingsIconPress

// Module 9677 (tracking/Tracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export function trackYouTabAvatarPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
}
export function trackYouTabCustomStatusPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
}
export function trackYouTabEditProfilePress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
}
export function trackYouTabNitroIconPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
}
export function trackYouTabSettingsIconPress(isBadged) {
  isBadged = isBadged.isBadged;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: isBadged });
}

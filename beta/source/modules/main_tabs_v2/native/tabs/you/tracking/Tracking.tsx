// Module ID: 16607
// Function ID: 16608
// Name: you/tracking/Tracking
// Dependencies: [1074, 1241, 2]
// Exports: trackYouTabAvatarPress, trackYouTabCustomStatusPress, trackYouTabEditProfilePress, trackYouTabNitroIconPress, trackYouTabSettingsIconPress

// Module 16607 (you/tracking/Tracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(isBadged) {
  isBadged = isBadged.isBadged;
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: isBadged });
};

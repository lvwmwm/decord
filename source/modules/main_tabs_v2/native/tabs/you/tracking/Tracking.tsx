// Module ID: 15528
// Function ID: 119503
// Name: trackYouTabAvatarPress
// Dependencies: [653, 675, 2]
// Exports: trackYouTabAvatarPress, trackYouTabCustomStatusPress, trackYouTabEditProfilePress, trackYouTabNitroIconPress, trackYouTabSettingsIconPress

// Module 15528 (trackYouTabAvatarPress)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  importDefault(675).track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  importDefault(675).track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  importDefault(675).track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  importDefault(675).track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(has_badge) {
  importDefault(675).track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: has_badge.isBadged });
};

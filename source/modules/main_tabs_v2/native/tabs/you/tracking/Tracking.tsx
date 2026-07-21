// Module ID: 15353
// Function ID: 116925
// Name: trackYouTabAvatarPress
// Dependencies: [670, 2, 6]
// Exports: trackYouTabAvatarPress, trackYouTabCustomStatusPress, trackYouTabEditProfilePress, trackYouTabNitroIconPress, trackYouTabSettingsIconPress

// Module 15353 (trackYouTabAvatarPress)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/tracking/Tracking.tsx");

export const trackYouTabAvatarPress = function trackYouTabAvatarPress() {
  importDefault(dependencyMap[1]).track(AnalyticEvents.YOU_TAB_AVATAR_PRESS);
};
export const trackYouTabCustomStatusPress = function trackYouTabCustomStatusPress() {
  importDefault(dependencyMap[1]).track(AnalyticEvents.YOU_TAB_CUSTOM_STATUS_PRESS);
};
export const trackYouTabEditProfilePress = function trackYouTabEditProfilePress() {
  importDefault(dependencyMap[1]).track(AnalyticEvents.YOU_TAB_EDIT_PROFILE_PRESS);
};
export const trackYouTabNitroIconPress = function trackYouTabNitroIconPress() {
  importDefault(dependencyMap[1]).track(AnalyticEvents.YOU_TAB_NITRO_ICON_PRESS);
};
export const trackYouTabSettingsIconPress = function trackYouTabSettingsIconPress(has_badge) {
  importDefault(dependencyMap[1]).track(AnalyticEvents.YOU_TAB_SETTINGS_ICON_PRESS, { has_badge: has_badge.isBadged });
};

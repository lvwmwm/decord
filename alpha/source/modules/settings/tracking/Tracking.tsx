// Module ID: 14950
// Function ID: 14951
// Name: settings/tracking/Tracking
// Dependencies: [1085, 1265, 6684, 2]
// Exports: trackSettingSearchInputFocused, trackSettingSearchResultPress

// Module 14950 (settings/tracking/Tracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6684 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj2;
  const obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: obj2.getSearchSessionId() };
  const track = AnalyticsUtilsDefault.track;
  const USER_SETTINGS_SEARCH_RESULT_PRESS = AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS;
  AnalyticsUtilsDefault;
  obj2 = SettingSearchSessionAnalyticsManagerDefault;
  track(USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};

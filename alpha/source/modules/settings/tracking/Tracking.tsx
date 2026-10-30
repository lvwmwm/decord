// Module ID: 16541
// Function ID: 16542
// Name: settings/tracking/Tracking
// Dependencies: [1072, 1253, 7160, 2]
// Exports: trackSettingSearchInputFocused, trackSettingSearchResultPress

// Module 16541 (settings/tracking/Tracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 7160 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export function trackSettingSearchInputFocused() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
}
export function trackSettingSearchResultPress(setting) {
  let obj2;
  const obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: obj2.getSearchSessionId() };
  const track = AnalyticsUtilsDefault.track;
  const USER_SETTINGS_SEARCH_RESULT_PRESS = AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS;
  AnalyticsUtilsDefault;
  obj2 = SettingSearchSessionAnalyticsManagerDefault;
  track(USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
}

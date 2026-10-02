// Module ID: 6418
// Function ID: 6419
// Name: Tracking
// Dependencies: [1086, 1253, 6417, 2]
// Exports: trackSettingSearchClosed, trackSettingSearchInputFocused, trackSettingSearchQueryEntered, trackSettingSearchResultPress

// Module 6418 (Tracking)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6417 */;
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
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj2;
  const obj = { search_session_id: obj2.getSearchSessionId() };
  const track = AnalyticsUtilsDefault.track;
  const USER_SETTINGS_SEARCH_QUERY_ENTERED = AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED;
  AnalyticsUtilsDefault;
  obj2 = SettingSearchSessionAnalyticsManagerDefault;
  track(USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj2;
  searchSessionDuration = searchSessionDuration.searchSessionDuration;
  const obj = { search_session_id: obj2.getSearchSessionId(), search_session_duration_ms: searchSessionDuration };
  const track = AnalyticsUtilsDefault.track;
  const USER_SETTINGS_SEARCH_CLOSED = AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED;
  AnalyticsUtilsDefault;
  obj2 = SettingSearchSessionAnalyticsManagerDefault;
  track(USER_SETTINGS_SEARCH_CLOSED, obj);
};

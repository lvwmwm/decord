// Module ID: 7275
// Function ID: 7276
// Name: Tracking
// Dependencies: [1078, 1245, 7274, 2]
// Exports: trackSettingSearchClosed, trackSettingSearchInputFocused, trackSettingSearchQueryEntered, trackSettingSearchResultPress

// Module 7275 (Tracking)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 7274 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  AnalyticsUtilsDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  const obj2 = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: null };
  const obj = AnalyticsUtilsDefault;
  obj2.search_session_id = SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj2);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  const obj2 = { search_session_id: null };
  const obj = AnalyticsUtilsDefault;
  obj2.search_session_id = SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj2);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  const obj2 = { search_session_id: null, search_session_duration_ms: null };
  const obj = AnalyticsUtilsDefault;
  obj2.search_session_id = SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId();
  obj2.search_session_duration_ms = searchSessionDuration.searchSessionDuration;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj2);
};

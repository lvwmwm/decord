// Module ID: 6487
// Function ID: 58015
// Name: trackSettingSearchInputFocused
// Dependencies: [653, 675, 6486, 2]
// Exports: trackSettingSearchClosed, trackSettingSearchInputFocused, trackSettingSearchQueryEntered, trackSettingSearchResultPress

// Module 6487 (trackSettingSearchInputFocused)
import { AnalyticEvents } from "ME";

const result = require("SettingSearchSessionAnalyticsManager").fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  importDefault(675).track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = importDefault(675);
  obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: importDefault(6486).getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = importDefault(675);
  obj = { search_session_id: importDefault(6486).getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = importDefault(675);
  obj = { search_session_id: importDefault(6486).getSearchSessionId(), search_session_duration_ms: searchSessionDuration.searchSessionDuration };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};

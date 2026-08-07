// Module ID: 5955
// Function ID: 5956
// Name: trackSettingSearchInputFocused
// Dependencies: [676, 698, 5954, 2]
// Exports: trackSettingSearchClosed, trackSettingSearchInputFocused, trackSettingSearchQueryEntered, trackSettingSearchResultPress

// Module 5955 (trackSettingSearchInputFocused)
import { AnalyticEvents } from "ME";

const result = require("getSearchSessionId").fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  importDefault(698).track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = importDefault(698);
  obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: null };
  obj[5] = importDefault(5954).getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = importDefault(698);
  obj = { search_session_id: null };
  obj[0] = importDefault(5954).getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = importDefault(698);
  obj = { search_session_id: null, search_session_duration_ms: null };
  obj[0] = importDefault(5954).getSearchSessionId();
  obj[1] = searchSessionDuration.searchSessionDuration;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};

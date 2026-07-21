// Module ID: 5790
// Function ID: 49481
// Name: trackSettingSearchInputFocused
// Dependencies: []
// Exports: trackSettingSearchClosed, trackSettingSearchInputFocused, trackSettingSearchQueryEntered, trackSettingSearchResultPress

// Module 5790 (trackSettingSearchInputFocused)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  importDefault(dependencyMap[1]).track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = importDefault(dependencyMap[1]);
  obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: importDefault(dependencyMap[2]).getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = importDefault(dependencyMap[1]);
  obj = { search_session_id: importDefault(dependencyMap[2]).getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = importDefault(dependencyMap[1]);
  obj = { search_session_id: importDefault(dependencyMap[2]).getSearchSessionId(), search_session_duration_ms: searchSessionDuration.searchSessionDuration };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};

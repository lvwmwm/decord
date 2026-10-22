// Module ID: 7078
// Function ID: 7079
// Name: SettingSearchSessionAnalyticsManager
// Dependencies: [1087, 1281, 1267, 2]

// Module 7078 (SettingSearchSessionAnalyticsManager)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import v1 from "v1" /* 1281 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
class SettingSearchSessionAnalyticsManager {
  constructor() {
    return Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
  }
  getSearchSessionId() {
    return this.searchSessionId;
  }
  isSessionActive() {
    return null != this.searchSessionId;
  }
  initialize() {
    const obj = v1;
    this.searchSessionId = obj.v4();
    this.searchSessionStartTime = Date.now();
    this.isQueryEnteredTracked = false;
  }
  maybeTrackQueryEntered() {
    const self = this;
    if (!this.isQueryEnteredTracked) {
      self.trackQueryEntered();
      self.isQueryEnteredTracked = true;
    }
  }
  terminate() {
    const self = this;
    const tmp = null != this.searchSessionId && null != self.searchSessionStartTime;
    if (tmp) {
      const _Date = Date;
      self.trackClosed(Date.now() - self.searchSessionStartTime);
      self.searchSessionId = null;
      self.searchSessionStartTime = null;
      self.isQueryEnteredTracked = false;
    }
  }
  trackQueryEntered() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { search_session_id: this.getSearchSessionId() };
    obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj2);
  }
  trackClosed(search_session_duration_ms) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { search_session_id: this.getSearchSessionId(), search_session_duration_ms };
    obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj2);
  }
}
const prototype = SettingSearchSessionAnalyticsManager.prototype;
const prototype2 = SettingSearchSessionAnalyticsManager.prototype;
const result = size.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });

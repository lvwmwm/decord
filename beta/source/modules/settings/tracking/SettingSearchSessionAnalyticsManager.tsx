// Module ID: 7242
// Function ID: 7243
// Name: SettingSearchSessionAnalyticsManager
// Dependencies: [1259, 7243, 2]

// Module 7242 (SettingSearchSessionAnalyticsManager)
import v1 from "v1" /* 1259 */;
import Tracking from "Tracking" /* 7243 */;
import size from "module_2" /* 2 */;

class SettingSearchSessionAnalyticsManager {
  constructor() {
    return Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
  }
}
const prototype = SettingSearchSessionAnalyticsManager.prototype;
prototype["getSearchSessionId"] = function getSearchSessionId() {
  return this.searchSessionId;
};
prototype["isSessionActive"] = function isSessionActive() {
  return null != this.searchSessionId;
};
prototype["initialize"] = function initialize() {
  this.searchSessionId = v1.v4();
  this.searchSessionStartTime = Date.now();
  this.isQueryEnteredTracked = false;
};
prototype["maybeTrackQueryEntered"] = function maybeTrackQueryEntered() {
  if (!this.isQueryEnteredTracked) {
    const result = Tracking.trackSettingSearchQueryEntered();
    tmp.isQueryEnteredTracked = true;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    const obj2 = { searchSessionDuration: null };
    const _Date = Date;
    obj2.searchSessionDuration = Date.now() - self.searchSessionStartTime;
    const result = Tracking.trackSettingSearchClosed(obj2);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
};
let result = size.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });

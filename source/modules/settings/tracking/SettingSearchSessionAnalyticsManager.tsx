// Module ID: 5935
// Function ID: 5936
// Name: getSearchSessionId
// Dependencies: [514, 5936, 2]

// Module 5935 (getSearchSessionId)
class SettingSearchSessionAnalyticsManager {
}
const prototype = SettingSearchSessionAnalyticsManager.prototype;
prototype["getSearchSessionId"] = function getSearchSessionId() {
  return this.searchSessionId;
};
prototype["isSessionActive"] = function isSessionActive() {
  return null != this.searchSessionId;
};
prototype["initialize"] = function initialize() {
  this.searchSessionId = require(514) /* v1 */.v4();
  this.searchSessionStartTime = Date.now();
  this.isQueryEnteredTracked = false;
};
prototype["maybeTrackQueryEntered"] = function maybeTrackQueryEntered() {
  if (!this.isQueryEnteredTracked) {
    const result = require(5936) /* trackSettingSearchInputFocused */.trackSettingSearchQueryEntered();
    tmp.isQueryEnteredTracked = true;
    const obj = require(5936) /* trackSettingSearchInputFocused */;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    let obj = require(5936) /* trackSettingSearchInputFocused */;
    obj = { searchSessionDuration: null };
    const _Date = Date;
    obj[0] = Date.now() - self.searchSessionStartTime;
    const result = obj.trackSettingSearchClosed(obj);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
};
let result = require("set").fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.create(SettingSearchSessionAnalyticsManager.prototype);

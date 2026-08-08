// Module ID: 6014
// Function ID: 6015
// Name: getSearchSessionId
// Dependencies: [514, 6015, 2]

// Module 6014 (getSearchSessionId)
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
    const result = require(6015) /* trackSettingSearchInputFocused */.trackSettingSearchQueryEntered();
    tmp.isQueryEnteredTracked = true;
    const obj = require(6015) /* trackSettingSearchInputFocused */;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    let obj = require(6015) /* trackSettingSearchInputFocused */;
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

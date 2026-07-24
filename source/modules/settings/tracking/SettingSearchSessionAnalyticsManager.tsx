// Module ID: 5794
// Function ID: 49532
// Name: SettingSearchSessionAnalyticsManager
// Dependencies: [6, 7, 491, 5795, 2]

// Module 5794 (SettingSearchSessionAnalyticsManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let tmp2 = (() => {
  class SettingSearchSessionAnalyticsManager {
    constructor() {
      tmp = outer1_2(this, SettingSearchSessionAnalyticsManager);
      this.searchSessionId = null;
      this.searchSessionStartTime = null;
      this.isQueryEnteredTracked = false;
      return;
    }
  }
  let obj = {
    key: "getSearchSessionId",
    value() {
      return this.searchSessionId;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isSessionActive",
    value() {
      return null != this.searchSessionId;
    }
  };
  items[1] = obj;
  obj = {
    key: "initialize",
    value() {
      this.searchSessionId = SettingSearchSessionAnalyticsManager(outer1_1[2]).v4();
      this.searchSessionStartTime = Date.now();
      this.isQueryEnteredTracked = false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "maybeTrackQueryEntered",
    value() {
      if (!this.isQueryEnteredTracked) {
        const result = SettingSearchSessionAnalyticsManager(outer1_1[3]).trackSettingSearchQueryEntered();
        tmp.isQueryEnteredTracked = true;
        const obj = SettingSearchSessionAnalyticsManager(outer1_1[3]);
      }
    }
  };
  items[4] = {
    key: "terminate",
    value() {
      const self = this;
      if (tmp) {
        let obj = SettingSearchSessionAnalyticsManager(outer1_1[3]);
        obj = {};
        const _Date = Date;
        obj.searchSessionDuration = Date.now() - self.searchSessionStartTime;
        const result = obj.trackSettingSearchClosed(obj);
        self.searchSessionId = null;
        self.searchSessionStartTime = null;
        self.isQueryEnteredTracked = false;
      }
    }
  };
  return callback(SettingSearchSessionAnalyticsManager, items);
})();
tmp2 = new tmp2();
let result = require("v1").fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default tmp2;

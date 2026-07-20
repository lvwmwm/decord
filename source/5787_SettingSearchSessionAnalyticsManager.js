// Module ID: 5787
// Function ID: 49430
// Name: SettingSearchSessionAnalyticsManager
// Dependencies: []

// Module 5787 (SettingSearchSessionAnalyticsManager)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class SettingSearchSessionAnalyticsManager {
    constructor() {
      tmp = closure_2(this, SettingSearchSessionAnalyticsManager);
      this.searchSessionId = null;
      this.searchSessionStartTime = null;
      this.isQueryEnteredTracked = false;
      return;
    }
  }
  const arg1 = SettingSearchSessionAnalyticsManager;
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
      this.searchSessionId = SettingSearchSessionAnalyticsManager(closure_1[2]).v4();
      this.searchSessionStartTime = Date.now();
      this.isQueryEnteredTracked = false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "maybeTrackQueryEntered",
    value() {
      if (!this.isQueryEnteredTracked) {
        const result = SettingSearchSessionAnalyticsManager(closure_1[3]).trackSettingSearchQueryEntered();
        tmp.isQueryEnteredTracked = true;
        const obj = SettingSearchSessionAnalyticsManager(closure_1[3]);
      }
    }
  };
  items[4] = {
    key: "terminate",
    value() {
      const self = this;
      if (tmp) {
        let obj = SettingSearchSessionAnalyticsManager(closure_1[3]);
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
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default tmp2;

// Module ID: 1338
// Function ID: 15713
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1338 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasAlreadySeenDCForGuild(dismissibleContent, guildId) {
  const seenForGuildId = obj.seenForGuildId;
  const value = seenForGuildId.get(guildId);
  let hasItem = null != value;
  if (hasItem) {
    hasItem = value.has(dismissibleContent);
  }
  return hasItem;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let obj = { dismissibleContentSeenDuringSession: new Set() };
const set = new Set();
obj.renderedAtTimestamps = new Map();
const map = new Map();
obj.seenForGuildId = new Map();
let tmp5 = (PersistedStore) => {
  class DismissibleContentFrameworkStore {
    constructor() {
      self = this;
      tmp = closure_3(this, DismissibleContentFrameworkStore);
      obj = closure_6(DismissibleContentFrameworkStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = DismissibleContentFrameworkStore;
  callback2(DismissibleContentFrameworkStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(numberOfDCsShownToday) {
      let dailyCapOverridden;
      if (null != numberOfDCsShownToday) {
        numberOfDCsShownToday = numberOfDCsShownToday.numberOfDCsShownToday;
        let num = 0;
        if (null != numberOfDCsShownToday) {
          num = numberOfDCsShownToday;
        }
        closure_9.numberOfDCsShownToday = num;
        ({ dailyCapPeriodStart: closure_9.dailyCapPeriodStart, dailyCapOverridden } = numberOfDCsShownToday);
        let tmp4 = null != dailyCapOverridden;
        if (tmp4) {
          tmp4 = dailyCapOverridden;
        }
        closure_9.dailyCapOverridden = tmp4;
        const newUserMinAgeRequiredOverridden = numberOfDCsShownToday.newUserMinAgeRequiredOverridden;
        let tmp6 = null != newUserMinAgeRequiredOverridden;
        if (tmp6) {
          tmp6 = newUserMinAgeRequiredOverridden;
        }
        closure_9.newUserMinAgeRequiredOverridden = tmp6;
        const tmp = closure_9;
        const tmp3 = closure_9;
        const tmp5 = closure_9;
      }
      closure_9.dismissibleContentSeenDuringSession = new Set();
      const set = new Set();
      closure_9.seenForGuildId = new Map();
      closure_9.lastDismissed = null;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "dailyCapOverridden",
    get() {
      return closure_9.dailyCapOverridden;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "newUserMinAgeRequiredOverridden",
    get() {
      return closure_9.newUserMinAgeRequiredOverridden;
    }
  };
  items[4] = {
    key: "lastDismissed",
    get() {
      return closure_9.lastDismissed;
    }
  };
  items[5] = {
    key: "getRenderedAtTimestamp",
    value(arg0) {
      const renderedAtTimestamps = closure_9.renderedAtTimestamps;
      return renderedAtTimestamps.get(arg0);
    }
  };
  items[6] = {
    key: "hasUserHitDCCap",
    value(closure_0) {
      if (null != closure_0) {
        const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFrameworkStore(closure_2[6]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        return false;
      }
      if (null != closure_0) {
        let result = null != arg1;
        if (result) {
          result = DismissibleContentFrameworkStore(closure_2[7]).isGuildDismissibleContent(closure_0);
          const obj = DismissibleContentFrameworkStore(closure_2[7]);
        }
        if (result) {
          if (null != arg1) {
            if (callback4(closure_0, arg1)) {
              return false;
            }
          }
        }
        if (!result) {
          const dismissibleContentSeenDuringSession = closure_9.dismissibleContentSeenDuringSession;
          if (dismissibleContentSeenDuringSession.has(closure_0)) {
            return false;
          }
        }
      }
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      let tmp10 = null != closure_9.dailyCapPeriodStart;
      if (tmp10) {
        tmp10 = closure_9.dailyCapPeriodStart < date.getTime();
      }
      if (tmp10) {
        closure_9.numberOfDCsShownToday = 0;
        closure_9.dailyCapPeriodStart = null;
      }
      return closure_9.numberOfDCsShownToday >= 3;
    }
  };
  return callback(DismissibleContentFrameworkStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp5.displayName = "DismissibleContentFrameworkStore";
tmp5.persistKey = "DismissibleContentFrameworkStore";
const items = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  }
];
tmp5.migrations = items;
obj = {
  LOGOUT: function handleLogout() {
    const obj = {};
    const merged = Object.assign(obj);
    obj["dismissibleContentSeenDuringSession"] = new Set();
    const set = new Set();
    obj["renderedAtTimestamps"] = new Map();
    const map = new Map();
    obj["seenForGuildId"] = new Map();
  },
  DCF_DAILY_CAP_OVERRIDE: function handleDailyCapOverride(value) {
    obj.dailyCapOverridden = value.value;
  },
  DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function handleNewUserMinAgeRequiredOverride(value) {
    obj.newUserMinAgeRequiredOverridden = value.value;
  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {
    let dismissibleContent;
    let guildId;
    ({ dismissibleContent, guildId } = arg0);
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    const result = renderedAtTimestamps.set(dismissibleContent, new Date().getTime());
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = arg1(dependencyMap[6]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent)) {
      if (!obj.dailyCapOverridden) {
        let result1 = arg1(dependencyMap[7]).isGuildDismissibleContent(dismissibleContent);
        if (result1) {
          result1 = null != guildId;
        }
        if (result1) {
          if (!result1) {
            if (result1) {
              const seenForGuildId = tmp9.seenForGuildId;
              let set = seenForGuildId.get(guildId);
              if (null == set) {
                const _Set = Set;
                set = new Set();
              }
              set.add(dismissibleContent);
              const seenForGuildId2 = obj.seenForGuildId;
              const result2 = seenForGuildId2.set(guildId, set);
            } else {
              const dismissibleContentSeenDuringSession2 = tmp9.dismissibleContentSeenDuringSession;
              dismissibleContentSeenDuringSession2.add(dismissibleContent);
            }
            if (null == obj.dailyCapPeriodStart) {
              const _Date = Date;
              const date1 = new Date();
              date1.setHours(0, 0, 0, 0);
              obj.dailyCapPeriodStart = date1.getTime();
            }
            obj.numberOfDCsShownToday = obj.numberOfDCsShownToday + 1;
            if (obj.numberOfDCsShownToday > 3) {
              const obj = { cap_type: "daily_cap", dismissible_content: dismissibleContent };
              obj.shown_dcs = obj.numberOfDCsShownToday;
              importDefault(dependencyMap[8]).track(AnalyticEvents.DCF_CAP_EXCEEDED, obj);
              const obj5 = importDefault(dependencyMap[8]);
            }
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
        const obj2 = arg1(dependencyMap[7]);
      }
    }
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(dismissibleContent) {
    dismissibleContent = dismissibleContent.dismissibleContent;
    obj.lastDismissed = { content: dismissibleContent, guildId: dismissibleContent.guildId };
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    renderedAtTimestamps.delete(dismissibleContent);
  },
  DCF_OVERRIDE_LAST_DC_DISMISSED: function handleResetLastDCDismissed(dismissibleContent) {
    dismissibleContent = dismissibleContent.dismissibleContent;
    let tmp3 = null;
    if (null != dismissibleContent) {
      const obj = { content: dismissibleContent, guildId: tmp };
      tmp3 = obj;
    }
    obj.lastDismissed = tmp3;
  },
  DCF_RESET: function resetStore() {
    obj.dailyCapPeriodStart = null;
    obj.numberOfDCsShownToday = 0;
    obj.dismissibleContentSeenDuringSession = new Set();
    const set = new Set();
    obj.seenForGuildId = new Map();
    obj.lastDismissed = null;
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[10]), obj);
const map1 = new Map();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default tmp5;

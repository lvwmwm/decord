// Module ID: 1338
// Function ID: 15720
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 1339, 1335, 675, 566, 686, 2]

// Module 1338 (_isNativeReflectConstruct)
import closure_3 from "set";
import isTimeRecurringDismissibleContent from "isTimeRecurringDismissibleContent";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AnalyticEvents } from "ME";
import set from "_possibleConstructorReturn";

const require = arg1;
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
let obj = { numberOfDCsShownToday: 0, dailyCapPeriodStart: null, dismissibleContentSeenDuringSession: null, dailyCapOverridden: false, newUserMinAgeRequiredOverridden: false, renderedAtTimestamps: null, lastDismissed: null };
let set = new Set();
obj.dismissibleContentSeenDuringSession = set;
obj.renderedAtTimestamps = new Map();
let map = new Map();
obj.seenForGuildId = new Map();
let tmp5 = ((PersistedStore) => {
  class DismissibleContentFrameworkStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, DismissibleContentFrameworkStore);
      obj = outer1_6(DismissibleContentFrameworkStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
        outer1_9.numberOfDCsShownToday = num;
        ({ dailyCapPeriodStart: outer1_9.dailyCapPeriodStart, dailyCapOverridden } = numberOfDCsShownToday);
        let tmp4 = null != dailyCapOverridden;
        if (tmp4) {
          tmp4 = dailyCapOverridden;
        }
        outer1_9.dailyCapOverridden = tmp4;
        const newUserMinAgeRequiredOverridden = numberOfDCsShownToday.newUserMinAgeRequiredOverridden;
        let tmp6 = null != newUserMinAgeRequiredOverridden;
        if (tmp6) {
          tmp6 = newUserMinAgeRequiredOverridden;
        }
        outer1_9.newUserMinAgeRequiredOverridden = tmp6;
        const tmp = outer1_9;
        const tmp3 = outer1_9;
        const tmp5 = outer1_9;
      }
      outer1_9.dismissibleContentSeenDuringSession = new Set();
      const set = new Set();
      outer1_9.seenForGuildId = new Map();
      outer1_9.lastDismissed = null;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "dailyCapOverridden",
    get() {
      return outer1_9.dailyCapOverridden;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "newUserMinAgeRequiredOverridden",
    get() {
      return outer1_9.newUserMinAgeRequiredOverridden;
    }
  };
  items[4] = {
    key: "lastDismissed",
    get() {
      return outer1_9.lastDismissed;
    }
  };
  items[5] = {
    key: "getRenderedAtTimestamp",
    value(arg0) {
      const renderedAtTimestamps = outer1_9.renderedAtTimestamps;
      return renderedAtTimestamps.get(arg0);
    }
  };
  items[6] = {
    key: "hasUserHitDCCap",
    value(dismissibleContent) {
      if (null != dismissibleContent) {
        const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFrameworkStore(outer1_2[6]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        return false;
      }
      if (null != dismissibleContent) {
        let result = null != arg1;
        if (result) {
          result = DismissibleContentFrameworkStore(outer1_2[7]).isGuildDismissibleContent(dismissibleContent);
          const obj = DismissibleContentFrameworkStore(outer1_2[7]);
        }
        if (result) {
          if (null != arg1) {
            if (outer1_11(dismissibleContent, arg1)) {
              return false;
            }
          }
        }
        if (!result) {
          const dismissibleContentSeenDuringSession = outer1_9.dismissibleContentSeenDuringSession;
          if (dismissibleContentSeenDuringSession.has(dismissibleContent)) {
            return false;
          }
        }
      }
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      let tmp10 = null != outer1_9.dailyCapPeriodStart;
      if (tmp10) {
        tmp10 = outer1_9.dailyCapPeriodStart < date.getTime();
      }
      if (tmp10) {
        outer1_9.numberOfDCsShownToday = 0;
        outer1_9.dailyCapPeriodStart = null;
      }
      return outer1_9.numberOfDCsShownToday >= 3;
    }
  };
  return callback(DismissibleContentFrameworkStore, items);
})(require("initialize").PersistedStore);
tmp5.displayName = "DismissibleContentFrameworkStore";
tmp5.persistKey = "DismissibleContentFrameworkStore";
let items = [
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
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1339) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent)) {
      if (!obj.dailyCapOverridden) {
        let result1 = require(1335) /* isTimeRecurringDismissibleContent */.isGuildDismissibleContent(dismissibleContent);
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
              obj = { cap_type: "daily_cap", dismissible_content: dismissibleContent };
              obj.shown_dcs = obj.numberOfDCsShownToday;
              importDefault(675).track(AnalyticEvents.DCF_CAP_EXCEEDED, obj);
              const obj5 = importDefault(675);
            }
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
        const obj2 = require(1335) /* isTimeRecurringDismissibleContent */;
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
tmp5 = new tmp5(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default tmp5;

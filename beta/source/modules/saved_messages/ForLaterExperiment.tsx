// Module ID: 7275
// Function ID: 7276
// Name: ForLaterExperiment
// Dependencies: [7272, 1435, 38, 7276, 2]
// Exports: getForLaterLimit, hasForLaterAccess, isForLaterExperimentOn, isForLaterFreemiumExperimentOn, isForLaterLimitUpgradable, useForLaterLimit, useHasForLaterAccess, useIsForLaterExperimentOn, useIsForLaterLimitUpgradable

// Module 7275 (ForLaterExperiment)
import _modDef38 from "module_38" /* 38 */;
import hasForLaterPremiumType2 from "hasForLaterPremiumType" /* 7276 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 7272 */;
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const hasForLaterPremiumTypeDefault = hasForLaterPremiumType2;

let c3;
let closure_4;
let merged;
let obj2;
let obj4;
({ SAVED_BOOKMARKS_MAX: c3, SAVED_REMINDERS_MAX: closure_4 } = SavedMessagesConstants);
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-03-message-bookmarks", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
let closure_5 = ApexExperiment.createApexExperiment(obj);
class ForLaterFreemiumConfig {
  constructor(enabled, arg1) {
    const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
    _modDef38(null != arg1.b, "Config is missing bookmark limit");
    _modDef38(null != arg1.r, "Config is missing reminder limit");
    merged.enabled = enabled;
    ({ b: tmp.bookmarkLimit, r: tmp.reminderLimit } = arg1);
    return merged;
  }
}
ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-07-message-bookmarks-v2", kind: "user", defaultConfig: merged, variations: obj4 };
const createApexExperiment = ApexExperiment.createApexExperiment;
merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
let tmp5 = _modDef38(true, "Config is missing bookmark limit");
_modDef38(true, "Config is missing reminder limit");
merged.enabled = false;
merged.bookmarkLimit = 0;
merged.reminderLimit = 0;
obj4 = {
  1: null,
  2: (arg0) => {
    const parsed = JSON.parse(arg0);
    if (typeof ForLaterFreemiumConfig === "function") {
      const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
      _modDef38(null != parsed.b, "Config is missing bookmark limit");
      _modDef38(null != parsed.r, "Config is missing reminder limit");
      merged.enabled = true;
      ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
obj4[2] = (arg0) => {
  const parsed = JSON.parse(arg0);
  if (typeof ForLaterFreemiumConfig === "function") {
    const merged = Object.assign({ enabled: false, bookmarkLimit: 0, reminderLimit: 0 });
    _modDef38(null != parsed.b, "Config is missing bookmark limit");
    _modDef38(null != parsed.r, "Config is missing reminder limit");
    merged.enabled = true;
    ({ b: tmp3.bookmarkLimit, r: tmp3.reminderLimit } = parsed);
    return merged;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
let closure_7 = createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/saved_messages/ForLaterExperiment.tsx");

export const useIsForLaterExperimentOn = function useIsForLaterExperimentOn(LongPressMessageActionSheet) {
  const obj = { location: LongPressMessageActionSheet };
  let enabled = closure_7.useConfig(obj).enabled;
  const obj2 = { location: LongPressMessageActionSheet };
  if (!enabled) {
    enabled = closure_5.useConfig(obj2).enabled;
  }
  return enabled;
};
export const isForLaterExperimentOn = function isForLaterExperimentOn(MessageRemindersNotificationManager) {
  const obj = { location: MessageRemindersNotificationManager };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    const obj2 = { location: MessageRemindersNotificationManager };
    enabled = closure_5.getConfig(obj2).enabled;
  }
  return enabled;
};
export const isForLaterFreemiumExperimentOn = function isForLaterFreemiumExperimentOn(location) {
  const obj = { location };
  return closure_7.getConfig(obj).enabled;
};
export const useHasForLaterAccess = function useHasForLaterAccess(ForLaterOpenActionButton) {
  const obj = { location: ForLaterOpenActionButton };
  const obj2 = { location: ForLaterOpenActionButton };
  let enabled = closure_7.useConfig(obj).enabled;
  if (!enabled) {
    const enabled1 = closure_5.useConfig(obj2).enabled && hasForLaterPremiumTypeDefault();
    enabled = enabled1;
  }
  return enabled;
};
export const hasForLaterAccess = function hasForLaterAccess(addOrUpdateSavedMessage) {
  const obj = { location: addOrUpdateSavedMessage };
  const obj2 = { location: addOrUpdateSavedMessage };
  let enabled = closure_7.getConfig(obj).enabled;
  if (!enabled) {
    const enabled1 = closure_5.getConfig(obj2).enabled && hasForLaterPremiumTypeDefault();
    enabled = enabled1;
  }
  return enabled;
};
export const getForLaterLimit = function getForLaterLimit(addOrUpdateSavedMessage, arg1) {
  let num;
  const obj = { location: addOrUpdateSavedMessage };
  const config = closure_7.getConfig(obj);
  const obj2 = { location: addOrUpdateSavedMessage };
  const enabled = closure_5.getConfig(obj2).enabled;
  const tmp2 = hasForLaterPremiumTypeDefault();
  if (config.enabled) {
    let tmp3;
    if (tmp2) {
      tmp3 = arg1 ? React3 : _false;
    } else {
      tmp3 = arg1 ? config.reminderLimit : config.bookmarkLimit;
    }
    num = tmp3;
  } else {
    num = 0;
    if (enabled) {
      num = 0;
      if (tmp2) {
        num = arg1 ? React3 : _false;
      }
    }
  }
  return num;
};
export const useForLaterLimit = function useForLaterLimit(ForLaterScreen, arg1) {
  let num;
  const obj = { location: ForLaterScreen };
  const config = closure_7.useConfig(obj);
  const obj2 = { location: ForLaterScreen };
  const config1 = closure_5.useConfig(obj2);
  const obj3 = hasForLaterPremiumType2;
  const hasForLaterPremiumType = obj3.useHasForLaterPremiumType();
  if (config.enabled) {
    let tmp5;
    if (hasForLaterPremiumType) {
      tmp5 = arg1 ? React3 : _false;
    } else {
      tmp5 = arg1 ? config.reminderLimit : config.bookmarkLimit;
    }
    num = tmp5;
  } else {
    num = 0;
    if (tmp4) {
      num = 0;
      if (hasForLaterPremiumType) {
        num = arg1 ? React3 : _false;
      }
    }
  }
  return num;
};
export const isForLaterLimitUpgradable = function isForLaterLimitUpgradable(addOrUpdateSavedMessage) {
  const obj = { location: addOrUpdateSavedMessage };
  const enabled = closure_7.getConfig(obj).enabled && !hasForLaterPremiumTypeDefault();
  return enabled;
};
export const useIsForLaterLimitUpgradable = function useIsForLaterLimitUpgradable(ForLaterScreen) {
  const obj = { location: ForLaterScreen };
  let enabled = closure_7.useConfig(obj).enabled;
  const obj2 = hasForLaterPremiumType2;
  if (enabled) {
    enabled = !obj2.useHasForLaterPremiumType();
  }
  return enabled;
};

// Module ID: 16196
// Function ID: 16197
// Name: notifications/NotificationSettingsUtils
// Dependencies: [32, 19, 16191, 16197, 16198, 558, 576, 1453, 504, 2]
// Exports: getAssignedNotifSettingsAndMappings, useNotifCategoryVisibility

// Module 16196 (notifications/NotificationSettingsUtils)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 16197 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 16198 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function getNamedExperiment(experiment) {
  const tmp = NotificationSettingsExperiments.knownExperimentConfigs[experiment];
  if (tmp.definition.name !== experiment) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Experiment called " + tmp.definition.name + " assigned to name " + experiment);
    throw error;
  } else {
    return tmp;
  }
}
function getExperimentAndConfigBySettingId(arg0) {
  const iter = metroImportDefault[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult.id === arg0) {
      let redesignState = tmp3.redesignState;
      if (null != tmp3.experiment) {
        let obj2 = { redesignState, experiment: getNamedExperiment(nextResult.experiment), variations: nextResult.variations };
        iter.return();
        return obj2;
      } else if (null != redesignState) {
        let obj = { redesignState };
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return {};
}
({ NOTIF_CATEGORIES: closure_4, NOTIF_SETTING_MAPPING: hasOwnProperty, NOTIF_SETTING_REDESIGN_MAPPING: metroRequire, NOTIF_SETTINGS: metroImportDefault } = NotificationSettingsConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting);
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotifSettingVisibility(arg0) {
  let tmp4;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] !== arg0) {
    const tmp6 = getExperimentAndConfigBySettingId(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  const experiment = tmp4.experiment;
  const variations = tmp4.variations;
  const redesignState = tmp4.redesignState;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperiment.ApexExperimentStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== experiment) {
    const fn = function l() {
      let config;
      const obj = experiment;
      if (experiment != null) {
        config = obj.getConfig({ location: "useNotifSettingVisibility" });
      }
      return config;
    };
    const items1 = [experiment];
    cResult[3] = experiment;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8, tmp9);
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    const tmpResult2 = DeclarativeNotificationSettingsRedesignExperiment;
    let isDeclarativeNotificationSettingsRedesignEnabled = tmpResult2.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let tmp12 = false !== redesignState;
      if (tmp12) {
        let tmp14 = null == stateFromStores || null == variations;
        if (!tmp14) {
          if (cResult[6] === stateFromStores.variation) {
            let tmp15;
            if (cResult[7] === variations) {
              tmp15 = cResult[8];
            }
            tmp14 = tmp15;
          }
          const hasItem = variations.includes(stateFromStores.variation);
          cResult[6] = stateFromStores.variation;
          cResult[7] = variations;
          cResult[8] = hasItem;
          tmp15 = hasItem;
        }
        tmp12 = tmp14;
      }
      isDeclarativeNotificationSettingsRedesignEnabled = tmp12;
    }
    return isDeclarativeNotificationSettingsRedesignEnabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useNotifSettingVisibility(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => getExperimentAndConfigBySettingId(closure_0), items);
  const experiment = memo.experiment;
  const variations = memo.variations;
  const redesignState = memo.redesignState;
  const useStateFromStores = require("get initialized").useStateFromStores;
  const items1 = [];
  require("get initialized");
  items1[0] = require("ApexExperiment").ApexExperimentStore;
  const items2 = [experiment];
  const stateFromStores = useStateFromStores(items1, () => {
    let config;
    const obj = experiment;
    if (experiment != null) {
      config = obj.getConfig({ location: "useNotifSettingVisibility" });
    }
    return config;
  }, items2);
  const tmp2 = _require;
  const tmp3 = experiment;
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    const tmp2Result = tmp2(tmp3[4]);
    let isDeclarativeNotificationSettingsRedesignEnabled = tmp2Result.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let tmp8 = false !== redesignState;
      if (tmp8) {
        tmp8 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
        null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
      }
      isDeclarativeNotificationSettingsRedesignEnabled = tmp8;
    }
    return isDeclarativeNotificationSettingsRedesignEnabled;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
function useNotifCategoryVisibility(CATEGORY_CALLS_MESSAGES) {
  if (typeof useIsDeclarativeSettingsUIAvailable === "function") {
    const _HermesInternal = HermesInternal;
    const obj = DeclarativeNotificationSettingsRedesignExperiment;
    return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + CATEGORY_CALLS_MESSAGES);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const result2 = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export function getAssignedNotifSettingsAndMappings() {
  let tmp14;
  const settings = [];
  const mappings = [];
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("getAssignedNotifSettingsAndMappings");
  set = new Set();
  const iter = metroImportDefault[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let redesignState = nextResult.redesignState;
    if (null == redesignState) {
      if (null != tmp4.experiment) {
        let obj3 = getNamedExperiment(tmp4.experiment);
        let variations = tmp4.variations;
        continue;
      }
      let arr = settings.push(tmp4);
      let addResult = set.add(tmp4.id);
    }
    continue;
  }
  if (result) {
    const obj2 = {};
    const merged = Object.assign(tmp13);
    const merged1 = Object.assign(metroRequire);
    tmp14 = obj2;
  } else {
    tmp14 = tmp13;
  }
  const entries = Object.entries(tmp14);
  const tmp22 = entries[Symbol.iterator]();
  while (tmp22 !== undefined) {
    let tmp25 = _slicedToArray(tmp23, 2);
    let tmp26 = tmp25[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp25[0]);
    for (const item10080 of tmp26) {
      let tmp30 = item10080;
      if (set.has(item10080)) {
        let obj4 = { notifType: parsed, notifSetting: tmp30 };
        let arr2 = mappings.push(obj4);
        obj5.return();
        break;
      }
      continue;
    }
    continue;
  }
  const categories = [];
  for (const item10098 of React3) {
    let tmp35 = item10098;
    let tmp36 = null != item10098.redesignState;
    if (tmp36) {
      tmp36 = tmp35.redesignState !== result;
    }
    if (!tmp36) {
      let obj6 = { stringId: tmp35.string_id, title: null };
      if (result) {
        if (null != tmp35.redesignTitle) {
          obj6.title = tmp35.redesignTitle;
          let tmp38Result = tmp38(obj6);
        }
      }
      let title = tmp35.title;
    }
    continue;
  }
  return { categories, settings, mappings };
}
export { useIsDeclarativeSettingsUIAvailable };
export { useNotifCategoryVisibility };
export const useNotifSettingVisibility = tmp5;

// Module ID: 16236
// Function ID: 16237
// Name: notifications/NotificationSettingsUtils
// Dependencies: [32, 19, 16231, 16237, 16238, 504, 1448, 2]
// Exports: getAssignedNotifSettingsAndMappings, useIsDeclarativeSettingsUIAvailable, useNotifCategoryVisibility, useNotifSettingVisibility

// Module 16236 (notifications/NotificationSettingsUtils)
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 16237 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 16238 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 16231 */;
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
({ NOTIF_CATEGORIES: closure_4, NOTIF_SETTING_MAPPING: hasOwnProperty, NOTIF_SETTING_REDESIGN_MAPPING: metroRequire, NOTIF_SETTINGS: metroImportDefault } = NotificationSettingsConstants);
let result = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

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
export function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting);
}
export function useNotifCategoryVisibility(CATEGORY_CALLS_MESSAGES) {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + CATEGORY_CALLS_MESSAGES);
}
export function useNotifSettingVisibility(CALLS) {
  _require = CALLS;
  const items = [CALLS];
  const memo = react.useMemo(() => {
    function getExperimentAndConfigBySettingId(arg0) {
      const iter = closure_1_7[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (nextResult.id === arg0) {
          let redesignState = tmp3.redesignState;
          if (null != tmp3.experiment) {
            let obj2 = { redesignState, experiment: closure_1_8(nextResult.experiment), variations: nextResult.variations };
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
    return getExperimentAndConfigBySettingId(CALLS);
  }, items);
  const experiment = memo.experiment;
  const variations = memo.variations;
  let redesignState = memo.redesignState;
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
  let obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  let isDeclarativeNotificationSettingsRedesignEnabled = obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + "useNotifSettingVisibility");
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    let tmp5 = false !== redesignState;
    if (tmp5) {
      let tmp6 = null;
      let tmp7 = null == stateFromStores || null == variations || variations.includes(stateFromStores.variation);
      tmp5 = tmp7;
    }
    isDeclarativeNotificationSettingsRedesignEnabled = tmp5;
  }
  return isDeclarativeNotificationSettingsRedesignEnabled;
}

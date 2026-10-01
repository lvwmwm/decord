// Module ID: 14011
// Function ID: 14012
// Name: notifications/NotificationSettingsUtils
// Dependencies: [32, 19, 14005, 14012, 14013, 504, 1435, 2]
// Exports: getAssignedNotifSettingsAndMappings, useIsDeclarativeSettingsUIAvailable, useNotifCategoryVisibility, useNotifSettingVisibility

// Module 14011 (notifications/NotificationSettingsUtils)
import NotificationSettingsExperiments from "NotificationSettingsExperiments" /* 14012 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 14013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import NotificationSettingsConstants from "NotificationSettingsConstants" /* 14005 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let closure_4;
let hasOwnProperty;
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
({ NOTIF_SETTING_MAPPING: closure_4, NOTIF_SETTINGS: hasOwnProperty } = NotificationSettingsConstants);
let result = size.fileFinishedImporting("modules/notifications/NotificationSettingsUtils.tsx");

export const getAssignedNotifSettingsAndMappings = function getAssignedNotifSettingsAndMappings() {
  const settings = [];
  const mappings = [];
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  const result = obj.isDeclarativeNotificationSettingsRedesignEnabled("getAssignedNotifSettingsAndMappings");
  set = new Set();
  const iter = hasOwnProperty[Symbol.iterator]();
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
  const entries = Object.entries(React3);
  const tmp14 = entries[Symbol.iterator]();
  while (tmp14 !== undefined) {
    let tmp17 = _slicedToArray(tmp15, 2);
    let tmp18 = tmp17[1];
    let _parseInt = parseInt;
    let parsed = parseInt(tmp17[0]);
    for (const item10071 of tmp18) {
      let tmp22 = item10071;
      if (set.has(item10071)) {
        let obj2 = { notifType: parsed, notifSetting: tmp22 };
        let arr2 = mappings.push(obj2);
        obj4.return();
        break;
      }
      continue;
    }
    continue;
  }
  return { settings, mappings };
};
export const useIsDeclarativeSettingsUIAvailable = function useIsDeclarativeSettingsUIAvailable(AndroidMessageNotificationsSetting) {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + AndroidMessageNotificationsSetting);
};
export const useNotifCategoryVisibility = function useNotifCategoryVisibility(CATEGORY_OTHER) {
  const obj = DeclarativeNotificationSettingsRedesignExperiment;
  return obj.useIsDeclarativeNotificationSettingsRedesignEnabled("useIsDeclarativeSettingsUIAvailable:" + CATEGORY_OTHER);
};
export const useNotifSettingVisibility = function useNotifSettingVisibility(GAMING_DEFAULT) {
  _require = GAMING_DEFAULT;
  const items = [GAMING_DEFAULT];
  const memo = react.useMemo(() => {
    function getExperimentAndConfigBySettingId(arg0) {
      const iter = closure_1_5[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (nextResult.id === arg0) {
          let redesignState = tmp3.redesignState;
          if (null != tmp3.experiment) {
            let obj2 = { redesignState, experiment: closure_1_6(nextResult.experiment), variations: nextResult.variations };
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
    return getExperimentAndConfigBySettingId(GAMING_DEFAULT);
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
};

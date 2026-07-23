// Module ID: 11241
// Function ID: 87493
// Name: useSortApplicationsViaFrecency
// Dependencies: [31, 7921, 662, 1331, 566, 21, 6753, 2]
// Exports: useSortApplicationsViaFrecency

// Module 11241 (useSortApplicationsViaFrecency)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  const _require = found;
  let closure_1 = stateFromStoresArray;
  const effect = memo.useEffect(() => {
    const FrecencyUserSettingsActionCreators = lib(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  let items = [memo1];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
  let items1 = [found, stateFromStoresArray];
  memo = memo.useMemo(() => {
    if (null != stateFromStoresArray) {
      if (0 !== stateFromStoresArray.length) {
        let mapped = lib.map((arg0) => {
          let closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          let someResult;
          if (null != outer1_1) {
            someResult = outer1_1.some((application) => application.application.id === id.id);
          }
          obj["isUserApp"] = null != someResult && someResult;
          return obj;
        });
      }
      return mapped;
    }
    mapped = lib;
  }, items1);
  const items2 = [found, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    let found;
    if (null != stateFromStoresArray) {
      found = stateFromStoresArray.filter((arg0) => {
        let closure_0 = arg0;
        return !outer1_0.some((id) => id.id === application.application.id);
      });
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    if (null != memo1) {
      const item = memo1.forEach((id) => {
        let obj = callback2(stateFromStores[5]);
        if (null == outer1_2.getEntry(id.application.id)) {
          obj = { timestamp: extractTimestampResult };
          outer1_2.track(id.application.id, obj);
        }
      });
    }
    stateFromStores.compute();
    let mapped;
    if (null != memo1) {
      mapped = memo1.map((application) => callback(stateFromStores[6]).getApplicationCommandSection(application.application, true));
    }
    if (null == mapped) {
      mapped = [];
    }
    const items = [...memo];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      const score = outer1_2.getScore(id2.id);
      let num = 0;
      if (null != score) {
        num = score;
      }
      const score1 = outer1_2.getScore(id.id);
      let num2 = 0;
      if (null != score1) {
        num2 = score1;
      }
      let diff = num - num2;
      if (0 === diff) {
        const name = id.name;
        diff = name.localeCompare(id2.name);
      }
      return diff;
    });
    return items;
  }, items3);
  const items4 = [memo2, memo, stateFromStores, stateFromStoresArray];
  return memo.useMemo(() => {
    if (null != stateFromStoresArray) {
      const item = stateFromStoresArray.forEach((id) => {
        const extractTimestampResult = callback(stateFromStores[5]).extractTimestamp(id.id);
        let tmp2 = null == callback;
        if (!tmp2) {
          tmp2 = extractTimestampResult > callback;
        }
        if (tmp2) {
          let closure_0 = id;
          callback = extractTimestampResult;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const entry = str.getEntry(id.id);
      let recentUses;
      if (null != entry) {
        recentUses = entry.recentUses;
      }
      if (null == recentUses) {
        recentUses = [];
      }
      const items = [...recentUses];
      const applyResult = Math.max.apply(items);
      let tmp3 = null == closure_1;
      if (!tmp3) {
        tmp3 = applyResult > closure_1;
      }
      if (tmp3) {
        let closure_0 = id;
        closure_1 = applyResult;
      }
    });
    let id;
    if (null != lib) {
      const application = lib.application;
      if (null != application) {
        id = application.id;
      }
    }
    let str = "";
    if (null != id) {
      str = id;
    }
    let items = [...memo2.filter((id) => id.id === str), ...memo2.filter((id) => id.id !== str)];
    return items;
  }, items4);
};

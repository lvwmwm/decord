// Module ID: 11603
// Function ID: 11604
// Name: ApplicationFrecencyHooks
// Dependencies: [19, 8592, 1084, 2026, 504, 11, 6941, 2]
// Exports: useSortApplicationsViaFrecency

// Module 11603 (ApplicationFrecencyHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import react from "react" /* 19 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 8592 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, applyResult;

const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  let memo;
  let memo1;
  let stateFromStores;
  _require = found;
  const effect = memo.useEffect(() => {
    const FrecencyUserSettingsActionCreators = found(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  let obj = require("get initialized");
  let items = [memo1];
  stateFromStores = obj.useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
  let items1 = [found, stateFromStoresArray];
  memo = memo.useMemo(() => {
    if (null != stateFromStoresArray) {
      let mapped;
      if (0 !== stateFromStoresArray.length) {
        mapped = found.map((item) => {
          let flag;
          let closure_0 = item;
          const obj = { isUserApp: flag };
          const merged = Object.assign(item);
          flag = undefined;
          const obj2 = stateFromStoresArray;
          if (stateFromStoresArray != null) {
            flag = obj2.some((application) => application.application.id === id.id);
          }
          if (flag == null) {
            flag = false;
          }
          return obj;
        });
      }
      return mapped;
    }
    mapped = found;
  }, items1);
  const items2 = [found, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    found = undefined;
    const arr = stateFromStoresArray;
    if (stateFromStoresArray != null) {
      found = arr.filter((item) => {
        let closure_0 = item;
        return !found.some((id) => id.id === application.application.id);
      });
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    let entry;
    if (memo1 != null) {
      const item = arr.forEach((id) => {
        const obj = stateFromStoresArray(stateFromStores[5]);
        const extractTimestampResult = obj.extractTimestamp(id.id);
        const obj2 = entry;
        if (null == entry.getEntry(id.application.id)) {
          const obj3 = { timestamp: extractTimestampResult };
          obj2.track(id.application.id, obj3);
        }
      });
    }
    stateFromStores.compute();
    let mapped;
    if (memo1 != null) {
      mapped = arr.map((application) => {
        const obj = found(stateFromStores[6]);
        return obj.getApplicationCommandSection(application.application, true);
      });
    }
    if (mapped == null) {
      mapped = [];
    }
    const items = [...memo];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      let num = stateFromStores.getScore(id2.id);
      const obj = stateFromStores;
      if (num == null) {
        num = 0;
      }
      let num2 = obj.getScore(id.id);
      if (num2 == null) {
        num2 = 0;
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
    const arr = closure_1;
    if (closure_1 != null) {
      const item = arr.forEach((id) => {
        const obj = SnowflakeUtilsDefault;
        const tmp2 = null == applyResult || obj.extractTimestamp(id.id) > applyResult;
        if (tmp2) {
          let closure_1_0 = id;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const _Math = Math;
      const entry = stateFromStores.getEntry(id.id);
      let recentUses;
      if (entry != null) {
        recentUses = entry.recentUses;
      }
      if (recentUses == null) {
        recentUses = [];
      }
      const items = [...recentUses];
      applyResult = max.apply(items);
      const tmp3 = null == applyResult || applyResult > applyResult;
      if (tmp3) {
        let closure_1_0 = id;
      }
    });
    let str;
    if (found != null) {
      const application = found.application;
      if (application != null) {
        str = application.id;
      }
    }
    if (str == null) {
      str = "";
    }
    let items = [...memo2.filter((id) => id.id === str), ...memo2.filter((id) => id.id !== str)];
    return items;
  }, items4);
};

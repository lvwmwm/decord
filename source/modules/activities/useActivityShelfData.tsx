// Module ID: 11160
// Function ID: 86757
// Name: useActivityShelfData
// Dependencies: [31, 1849, 7372, 1347, 566, 5470, 1327, 8183, 477, 8177, 2]
// Exports: useActivityShelfData

// Module 11160 (useActivityShelfData)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = function useActivityShelfData(guildId) {
  const _require = guildId;
  let items = [getCurrentUser];
  const stateFromStores = _require(stateFromStoresArray[4]).useStateFromStores(items, getCurrentUser.getCurrentUser);
  let obj = _require(stateFromStoresArray[4]);
  const items1 = [memo1];
  stateFromStoresArray = _require(stateFromStoresArray[4]).useStateFromStoresArray(items1, () => memo1.getShelfActivities(closure_0));
  const obj2 = _require(stateFromStoresArray[4]);
  const items2 = [memo];
  const stateFromStores1 = _require(stateFromStoresArray[4]).useStateFromStores(items2, () => memo.testModeEmbeddedApplicationId);
  let mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp4 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped, 1);
    tmp4 = items3;
  }
  const tmp8 = stateFromStores(stateFromStoresArray[5])(tmp4);
  getCurrentUser = tmp8;
  const items4 = [tmp8];
  memo = stateFromStores1.useMemo(() => tmp8.filter(guildId(stateFromStoresArray[6]).isNotNullish), items4);
  const items5 = [memo, stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (memo[0].id === stateFromStores1) {
          if (null != memo[0].embeddedActivityConfig) {
            const obj = { activity: memo[0].embeddedActivityConfig, application: memo[0] };
            const items = [obj];
          }
          return [];
        }
      }
    }
  }, items5);
  const items6 = [stateFromStoresArray, memo];
  const memo2 = stateFromStores1.useMemo(() => {
    const mapped = stateFromStoresArray.map((activity) => {
      let closure_0 = activity;
      const found = outer1_5.find((id) => id.id === activity.application_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { activity, application: found };
        tmp2 = obj;
      }
      return tmp2;
    });
    return mapped.filter(guildId(stateFromStoresArray[6]).isNotNullish);
  }, items6);
  let nsfwAllowed;
  if (null != stateFromStores) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items7 = [nsfwAllowed, memo2, memo1];
  return stateFromStores1.useMemo(() => {
    const items = [...memo2];
    const found = items.filter((activity) => {
      let supported_platforms = activity.activity.supported_platforms;
      if (null == supported_platforms) {
        supported_platforms = [];
      }
      const tmp = stateFromStores(stateFromStoresArray[7]);
      return supported_platforms.includes(tmp(callback(stateFromStoresArray[8]).getOS()));
    });
    const found1 = found.filter((activity) => {
      let tmp = !activity.activity.requires_age_gate;
      if (!tmp) {
        let nsfwAllowed;
        if (null != outer1_1) {
          nsfwAllowed = outer1_1.nsfwAllowed;
        }
        tmp = true === nsfwAllowed;
      }
      if (!tmp) {
        let nsfwAllowed1;
        if (null != outer1_1) {
          nsfwAllowed1 = outer1_1.nsfwAllowed;
        }
        tmp = null == nsfwAllowed1;
      }
      return tmp;
    });
    return found1.filter((application) => {
      let nsfwAllowed;
      if (null != outer1_1) {
        nsfwAllowed = outer1_1.nsfwAllowed;
      }
      let tmp3 = false === nsfwAllowed;
      if (tmp3) {
        tmp3 = stateFromStores(stateFromStoresArray[9])(application.application.id);
      }
      return !tmp3;
    });
  }, items7);
};

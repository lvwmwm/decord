// Module ID: 11522
// Function ID: 11523
// Name: useActivityShelfData
// Dependencies: [19, 1372, 8322, 2044, 504, 6589, 1370, 8713, 1364, 8709, 2]
// Exports: useActivityShelfData

// Module 11522 (useActivityShelfData)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1372 */;
import TestModeStore from "TestModeStore" /* 8322 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application;

let UserStore = UserStore_mod;
const result = size.fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = function useActivityShelfData(guildId) {
  let closure_4;
  let memo;
  let memo1;
  let stateFromStoresArray;
  _require = guildId;
  let tmp2 = stateFromStoresArray;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, UserStore.getCurrentUser);
  const items1 = [memo1];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => EmbeddedActivitiesStore.getShelfActivities(guildId));
  const items2 = [memo];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => memo.testModeEmbeddedApplicationId);
  let mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp6 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(items3, mapped, 1);
    tmp6 = items3;
  }
  const tmp10 = stateFromStores(tmp2[5])(tmp6);
  UserStore = tmp10;
  const items4 = [tmp10];
  memo = stateFromStores1.useMemo(() => closure_4.filter(GlobalUtils.isNotNullish), items4);
  const items5 = [memo, stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (memo[0].id === tmp) {
          if (null != memo[0].embeddedActivityConfig) {
            const items = [{ activity: memo[0].embeddedActivityConfig, application: memo[0] }];
            const obj = { activity: memo[0].embeddedActivityConfig, application: memo[0] };
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
      const found = memo.find((id) => id.id === application_id.application_id);
      let tmp2 = null;
      if (null != found) {
        tmp2 = { activity, application: found };
        const obj = { activity, application: found };
      }
      return tmp2;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items6);
  let nsfwAllowed;
  const useMemo = stateFromStores1.useMemo;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items7 = [nsfwAllowed, memo2, memo1];
  return useMemo(() => {
    const items = [...memo2];
    const found = items.filter((activity) => {
      let supported_platforms = activity.activity.supported_platforms;
      if (supported_platforms == null) {
        supported_platforms = [];
      }
      const includes = supported_platforms.includes;
      const tmp = stateFromStores(stateFromStoresArray[7]);
      const obj = guildId(stateFromStoresArray[8]);
      return includes(tmp(obj.getOS()));
    });
    const found1 = found.filter((activity) => {
      const requires_age_gate = activity.activity.requires_age_gate;
      let tmp = !requires_age_gate;
      if (requires_age_gate) {
        nsfwAllowed = undefined;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        tmp = true === nsfwAllowed;
      }
      if (!tmp) {
        let nsfwAllowed1;
        if (stateFromStores != null) {
          nsfwAllowed1 = stateFromStores.nsfwAllowed;
        }
        tmp = null == nsfwAllowed1;
      }
      return tmp;
    });
    return found1.filter((application) => {
      nsfwAllowed = undefined;
      application = application.application;
      if (nsfwAllowed != null) {
        nsfwAllowed = nsfwAllowed.nsfwAllowed;
      }
      const tmp2 = false === nsfwAllowed && stateFromStores(stateFromStoresArray[9])(application.id);
      return !tmp2;
    });
  }, items7);
};

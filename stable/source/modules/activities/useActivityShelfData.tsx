// Module ID: 11398
// Function ID: 11399
// Name: useActivityShelfData
// Dependencies: [19, 1378, 8319, 2050, 558, 576, 504, 6590, 1376, 8708, 1370, 8704, 2]

// Module 11398 (useActivityShelfData)
import GlobalUtils from "GlobalUtils" /* 1376 */;
import react from "react" /* 19 */;
import UserStore_mod from "UserStore" /* 1378 */;
import TestModeStore from "TestModeStore" /* 8319 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, closure_0;

let UserStore = UserStore_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let args;
  let arr7;
  let first;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp8;
  _require = arg0;
  let tmp2 = _require;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp2Result = tmp2(arr7[6]);
  const stateFromStores = tmp2Result.useStateFromStores(first, UserStore.getCurrentUser);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[1] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const fn = function f() {
      return EmbeddedActivitiesStore.getShelfActivities(closure_0);
    };
    cResult[2] = arg0;
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  const tmp2Result3 = tmp2(arr7[6]);
  const stateFromStoresArray = tmp2Result3.useStateFromStoresArray(tmp8, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [TestModeStore];
    const fn2 = function _() {
      return TestModeStore.testModeEmbeddedApplicationId;
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    tmp12 = fn2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmp2Result4 = tmp2(arr7[6]);
  const stateFromStores1 = tmp2Result4.useStateFromStores(tmp11, tmp12);
  if (cResult[6] === stateFromStoresArray) {
    let tmp15;
    let tmp26;
    if (cResult[7] === stateFromStores1) {
      tmp15 = cResult[8];
    }
    const arr6 = stateFromStores(arr7[7])(tmp15);
    if (cResult[10] !== arr6) {
      let found = arr6.filter(tmp2(tmp3[8]).isNotNullish);
      cResult[10] = arr6;
      cResult[11] = found;
      arr7 = found;
    } else {
      arr7 = cResult[11];
    }
    if (null != stateFromStores1) {
      if (arr7.length > 0) {
        if (arr7[0].id === stateFromStores1) {
          let tmp29;
          if (null != arr7[0].embeddedActivityConfig) {
            let tmp27;
            if (cResult[12] !== arr7[0]) {
              const items3 = [{ activity: arr7[0].embeddedActivityConfig, application: arr7[0] }];
              const obj2 = { activity: arr7[0].embeddedActivityConfig, application: arr7[0] };
              cResult[12] = arr7[0];
              cResult[13] = items3;
              tmp27 = items3;
            } else {
              tmp27 = cResult[13];
            }
            tmp26 = tmp27;
          }
          let closure_3 = tmp26;
          if (cResult[15] === stateFromStoresArray) {
            let tmp28;
            if (cResult[16] === arr7) {
              tmp28 = cResult[17];
            }
            UserStore = tmp28;
            let nsfwAllowed;
            const tmp31 = cResult[20];
            if (stateFromStores != null) {
              nsfwAllowed = stateFromStores.nsfwAllowed;
            }
            if (tmp31 === nsfwAllowed) {
              if (cResult[21] === tmp28) {
                let tmp33;
                let tmp35;
                if (cResult[22] === tmp26) {
                  tmp33 = cResult[23];
                }
                if (cResult[24] !== tmp33) {
                  const tmp33Result = tmp33();
                  cResult[24] = tmp33;
                  cResult[25] = tmp33Result;
                  tmp35 = tmp33Result;
                } else {
                  tmp35 = cResult[25];
                }
                return tmp35;
              }
            }
            let nsfwAllowed1;
            if (stateFromStores != null) {
              nsfwAllowed1 = stateFromStores.nsfwAllowed;
            }
            class U {
              constructor() {
                const items = [...closure_4];
                const found = items.filter((activity) => {
                  let supported_platforms = activity.activity.supported_platforms;
                  if (supported_platforms == null) {
                    supported_platforms = [];
                  }
                  const includes = supported_platforms.includes;
                  const tmp = stateFromStores(arr7[9]);
                  const obj = closure_1_0(arr7[10]);
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
                  const tmp2 = false === nsfwAllowed && stateFromStores(arr7[11])(application.id);
                  return !tmp2;
                });
              }
            }
            cResult[20] = nsfwAllowed1;
            cResult[21] = tmp28;
            cResult[22] = tmp26;
            cResult[23] = U;
            tmp33 = U;
          }
          if (cResult[18] !== arr7) {
            const fn4 = function q(activity) {
              closure_0 = activity;
              const found = arr7.find((id) => id.id === application_id.application_id);
              let tmp2 = null;
              if (null != found) {
                tmp2 = { activity, application: found };
                const obj = { activity, application: found };
              }
              return tmp2;
            };
            cResult[18] = arr7;
            cResult[19] = fn4;
            tmp29 = fn4;
          } else {
            tmp29 = cResult[19];
          }
          const mapped = stateFromStoresArray.map(tmp29);
          let found1 = mapped.filter(tmp2(tmp3[8]).isNotNullish);
          cResult[16] = arr7;
          cResult[17] = found1;
          tmp28 = found1;
        }
      }
    }
    const _Symbol = Symbol;
    if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [];
      cResult[14] = items4;
      tmp26 = items4;
    } else {
      tmp26 = cResult[14];
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function w(application_id) {
      return application_id.application_id;
    };
    cResult[9] = fn3;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[9];
  }
  const mapped1 = stateFromStoresArray.map(tmp16);
  let tmp18 = mapped1;
  if (null != stateFromStores1) {
    const items5 = [stateFromStores1];
    HermesBuiltin.arraySpread(items5, mapped1, 1);
    tmp18 = items5;
  }
  cResult[6] = stateFromStoresArray;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp18;
  tmp15 = tmp18;
}) : ((arg0) => {
  let closure_4;
  let memo;
  let memo1;
  let stateFromStoresArray;
  _require = arg0;
  let tmp2 = stateFromStoresArray;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, UserStore.getCurrentUser);
  const items1 = [memo1];
  const obj2 = require("get initialized");
  stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => EmbeddedActivitiesStore.getShelfActivities(closure_0));
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
  const tmp10 = stateFromStores(tmp2[7])(tmp6);
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
      closure_0 = activity;
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
      const tmp = stateFromStores(stateFromStoresArray[9]);
      const obj = closure_1_0(stateFromStoresArray[10]);
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
      const tmp2 = false === nsfwAllowed && stateFromStores(stateFromStoresArray[11])(application.id);
      return !tmp2;
    });
  }, items7);
});
const result = size.fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = tmp2;

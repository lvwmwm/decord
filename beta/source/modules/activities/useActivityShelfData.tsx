// Module ID: 12206
// Function ID: 12207
// Name: useActivityShelfData
// Dependencies: [19, 1376, 9166, 2044, 558, 568, 504, 7447, 1374, 9552, 1368, 9548, 2]

// Module 12206 (useActivityShelfData)
import GlobalUtils from "GlobalUtils" /* 1374 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import TestModeStore from "TestModeStore" /* 9166 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  let found1 = arr7;
  const cResult = require("c").c(26);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, UserStore.getCurrentUser);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[1] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const fn = function f() {
      return EmbeddedActivitiesStore.getShelfActivities(closure_0);
    };
    cResult[2] = arg0;
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [TestModeStore];
    const fn2 = function _() {
      return TestModeStore.testModeEmbeddedApplicationId;
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    let tmp11 = fn2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult3 = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
  if (cResult[6] === stateFromStoresArray) {
    if (cResult[7] === stateFromStores1) {
      let tmp14 = cResult[8];
    }
    const arr6 = stateFromStores(found1[7])(tmp14);
    if (cResult[10] !== arr6) {
      let found = arr6.filter(tmp(found1[8]).isNotNullish);
      cResult[10] = arr6;
      cResult[11] = found;
      arr7 = found;
    } else {
      arr7 = cResult[11];
    }
    if (null != stateFromStores1) {
      if (arr7.length > 0) {
        if (arr7[0].id === stateFromStores1) {
          if (null != arr7[0].embeddedActivityConfig) {
            if (cResult[12] !== arr7[0]) {
              const obj2 = { activity: arr7[0].embeddedActivityConfig, application: arr7[0] };
              const items3 = [obj2];
              cResult[12] = arr7[0];
              cResult[13] = items3;
            }
          }
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [];
      cResult[14] = items4;
      let tmp24 = items4;
    } else {
      tmp24 = cResult[14];
    }
    closure_3 = tmp24;
    if (cResult[15] === stateFromStoresArray) {
      if (cResult[16] === arr7) {
        UserStore = tmp27;
        let nsfwAllowed;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        if (cResult[20] === nsfwAllowed) {
          if (cResult[21] === tmp27) {
            if (cResult[22] === tmp24) {
              let tmp31 = cResult[23];
            }
            if (cResult[24] !== tmp31) {
              const tmp31Result = tmp31();
              cResult[24] = tmp31;
              cResult[25] = tmp31Result;
              let tmp33 = tmp31Result;
            } else {
              tmp33 = cResult[25];
            }
            return tmp33;
          }
        }
        let nsfwAllowed1;
        if (stateFromStores != null) {
          nsfwAllowed1 = stateFromStores.nsfwAllowed;
        }
        class U {
          constructor() {
            items = [...closure_4];
            found = items.filter((activity) => {
              let supported_platforms = activity.activity.supported_platforms;
              if (supported_platforms == null) {
                supported_platforms = [];
              }
              const tmp = stateFromStores(9552);
              return supported_platforms.includes(tmp(closure_1_0(1368).getOS()));
            });
            found1 = found.filter((activity) => {
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
              if (nsfwAllowed != null) {
                nsfwAllowed = nsfwAllowed.nsfwAllowed;
              }
              let tmp2 = false === nsfwAllowed;
              if (tmp2) {
                tmp2 = stateFromStores(arr7[11])(application.application.id);
              }
              return !tmp2;
            });
          }
        }
        cResult[20] = nsfwAllowed1;
        cResult[21] = cResult[17];
        cResult[22] = tmp24;
        cResult[23] = U;
        tmp31 = U;
      }
    }
    if (cResult[18] !== arr7) {
      const fn4 = function q(activity) {
        const found = arr7.find((id) => id.id === activity.application_id);
        let tmp2 = null;
        if (null != found) {
          const obj = { activity, application: found };
          tmp2 = obj;
        }
        return tmp2;
      };
      cResult[18] = arr7;
      cResult[19] = fn4;
      let tmp28 = fn4;
    } else {
      tmp28 = cResult[19];
    }
    const mapped = stateFromStoresArray.map(tmp28);
    found1 = mapped.filter(tmp(found1[8]).isNotNullish);
    cResult[15] = stateFromStoresArray;
    cResult[16] = arr7;
    cResult[17] = found1;
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function w(application_id) {
      return application_id.application_id;
    };
    cResult[9] = fn3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[9];
  }
  const mapped1 = stateFromStoresArray.map(tmp15);
  let tmp17 = mapped1;
  if (null != stateFromStores1) {
    const items5 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped1, 1);
    tmp17 = items5;
  }
  cResult[6] = stateFromStoresArray;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp17;
  tmp14 = tmp17;
}) : ((arg0) => {
  _require = arg0;
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, UserStore.getCurrentUser);
  let obj = require("initialize");
  let tmp = stateFromStoresArray;
  const items1 = [memo1];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => EmbeddedActivitiesStore.getShelfActivities(closure_0));
  const obj2 = require("initialize");
  const items2 = [memo];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => memo.testModeEmbeddedApplicationId);
  let mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp5 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped, 1);
    tmp5 = items3;
  }
  const tmp9 = stateFromStores(tmp[7])(tmp5);
  UserStore = tmp9;
  const items4 = [tmp9];
  memo = stateFromStores1.useMemo(() => closure_4.filter(GlobalUtils.isNotNullish), items4);
  const items5 = [memo, stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (tmp2[0].id === tmp) {
          if (null != tmp2[0].embeddedActivityConfig) {
            const obj = { activity: tmp2[0].embeddedActivityConfig, application: tmp2[0] };
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
      const found = memo.find((id) => id.id === activity.application_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { activity, application: found };
        tmp2 = obj;
      }
      return tmp2;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items6);
  let nsfwAllowed;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items7 = [nsfwAllowed, memo2, memo1];
  return stateFromStores1.useMemo(() => {
    const items = [...memo2];
    const found = items.filter((activity) => {
      let supported_platforms = activity.activity.supported_platforms;
      if (supported_platforms == null) {
        supported_platforms = [];
      }
      const tmp = stateFromStores(9552);
      return supported_platforms.includes(tmp(closure_1_0(1368).getOS()));
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
      if (nsfwAllowed != null) {
        nsfwAllowed = nsfwAllowed.nsfwAllowed;
      }
      let tmp2 = false === nsfwAllowed;
      if (tmp2) {
        tmp2 = stateFromStores(stateFromStoresArray[11])(application.application.id);
      }
      return !tmp2;
    });
  }, items7);
});

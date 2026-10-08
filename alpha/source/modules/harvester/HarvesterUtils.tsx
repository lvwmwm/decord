// Module ID: 14944
// Function ID: 14945
// Name: HarvesterUtils
// Dependencies: [32, 19, 1389, 13836, 14945, 558, 576, 504, 2]
// Exports: harvestDisabled

// Module 14944 (HarvesterUtils)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import HarvesterConstants from "HarvesterConstants" /* 14945 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import DataHarvestStore from "DataHarvestStore" /* 13836 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const REQUEST_DATA_LIMIT_MS = HarvesterConstants.REQUEST_DATA_LIMIT_MS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestHarvestStatus() {
  let closure_1;
  let currentUser;
  let harvestType;
  let ref;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DataHarvestStore];
    const fn2 = function _() {
      return harvestType.harvestType;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return Date.now();
      }
    }
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return Date.now();
      }
    }
  }
  [tmp14, require] = react.useState(tmp12);
  _slicedToArray(react.useState(tmp12), 2);
  if (cResult[5] === stateFromStores1) {
    let tmp21;
    let tmp20;
    let tmp25;
    class S {
      constructor() {
        return Date.now();
      }
    }
    dependencyMap = tmp15;
    _slicedToArray = obj4.useRef(null);
    if (cResult[8] !== tmp15) {
      class S {
        constructor() {
          return Date.now();
        }
      }
      const items2 = [tmp15];
      cResult[8] = tmp15;
      cResult[9] = tmp22;
      cResult[10] = items2;
      tmp21 = items2;
      tmp20 = tmp22;
    } else {
      class S {
        constructor() {
          return Date.now();
        }
      }
      tmp21 = cResult[10];
    }
    const effect = obj4.useEffect(tmp20, tmp21);
    if (stateFromStores != null) {
      class S {
        constructor() {
          return Date.now();
        }
      }
    }
    if (undefined) {
      class S {
        constructor() {
          return Date.now();
        }
      }
      tmp25 = tmp27;
    } else {
      class S {
        constructor() {
          return Date.now();
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return Date.now();
          }
        }
        cResult[11] = tmp26;
        tmp25 = tmp26;
      } else {
        class S {
          constructor() {
            return Date.now();
          }
        }
      }
    }
    return tmp25;
  }
  let sum = tmp14;
  if (null != stateFromStores1) {
    class S {
      constructor() {
        return Date.now();
      }
    }
    const self = this;
    const self2 = this;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  cResult[5] = stateFromStores1;
  cResult[6] = tmp14;
  cResult[7] = sum;
}) : (function useRequestHarvestStatus() {
  let currentUser;
  let date1;
  let harvestType;
  let obj6;
  let ref;
  let tmp3;
  const f118843 = () => Date.now();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [DataHarvestStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => harvestType.harvestType);
  [tmp3, require] = react.useState(f118843);
  let sum = tmp3;
  _slicedToArray(react.useState(f118843), 2);
  if (null != stateFromStores1) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  dependencyMap = sum;
  _slicedToArray = obj4.useRef(null);
  const items2 = [sum];
  const effect = obj4.useEffect(() => {
    const diff = dependencyMap - Date.now();
    if (diff > 0) {
      const _setTimeout = setTimeout;
      const _clearTimeout = clearTimeout;
      const timerId = setTimeout(() => closure_1_0(Date.now()), diff);
      clearTimeout(ref.current);
      ref.current = timerId;
    }
    return () => clearTimeout(ref.current);
  }, items2);
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  if (verified) {
    let obj2;
    if (stateFromStores.isStaff()) {
      obj2 = { allowed: false, reason: "staff" };
    } else if (null == stateFromStores1) {
      obj2 = { allowed: true };
    } else if (sum > tmp3) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const obj5 = { allowed: false, reason: "rate_limited", nextAllowed: date1 };
      obj2 = obj5;
      date1 = new Date(sum);
    } else {
      obj2 = { allowed: true };
    }
    obj6 = obj2;
  } else {
    obj6 = { allowed: false, reason: "not_verified" };
  }
  return obj6;
});
const result = size.fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

export const harvestDisabled = function harvestDisabled(created_at, stateFromStores) {
  const verified = stateFromStores.verified;
  let tmp = !verified;
  if (verified) {
    let isStaffResult = stateFromStores.isStaff();
    if (!isStaffResult) {
      let tmp5 = null != created_at;
      if (tmp5) {
        const _Date = Date;
        const _Date2 = Date;
        const self = this;
        const self2 = this;
        const timestamp = Date.now();
        const date = new Date(created_at.created_at);
        tmp5 = REQUEST_DATA_LIMIT_MS > timestamp - date.getTime();
      }
      isStaffResult = tmp5;
    }
    tmp = isStaffResult;
  }
  return tmp;
};
export const useRequestHarvestStatus = tmp2;

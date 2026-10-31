// Module ID: 16750
// Function ID: 16751
// Name: HarvesterUtils
// Dependencies: [32, 19, 1383, 15598, 16751, 504, 2]
// Exports: harvestDisabled, useRequestHarvestStatus

// Module 16750 (HarvesterUtils)
import get_initialized from "get initialized" /* 504 */;
import HarvesterConstants from "HarvesterConstants" /* 16751 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import DataHarvestStore from "DataHarvestStore" /* 15598 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const REQUEST_DATA_LIMIT_MS = HarvesterConstants.REQUEST_DATA_LIMIT_MS;
const result = size.fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

export function harvestDisabled(created_at, stateFromStores) {
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
}
export function useRequestHarvestStatus() {
  let currentUser;
  let date1;
  let harvestType;
  let obj6;
  let ref;
  let tmp3;
  const f110547 = () => Date.now();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [DataHarvestStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => harvestType.harvestType);
  [tmp3, require] = react.useState(f110547);
  let sum = tmp3;
  _slicedToArray(react.useState(f110547), 2);
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
}

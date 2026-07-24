// Module ID: 13813
// Function ID: 105884
// Name: harvestDisabled
// Dependencies: [57, 31, 1849, 12684, 13814, 566, 2]
// Exports: harvestDisabled, useRequestHarvestStatus

// Module 13813 (harvestDisabled)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { REQUEST_DATA_LIMIT_MS } from "REQUEST_DATA_LIMIT_DAYS";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

export const harvestDisabled = function harvestDisabled(created_at, stateFromStores) {
  let tmp = !stateFromStores.verified;
  if (!tmp) {
    const tmp2 = !stateFromStores.isStaff();
    let tmp3 = !tmp2;
    if (tmp2) {
      let tmp5 = null != created_at;
      if (tmp5) {
        const _Date = Date;
        const _Date2 = Date;
        const timestamp = Date.now();
        const date = new Date(created_at.created_at);
        tmp5 = REQUEST_DATA_LIMIT_MS > timestamp - date.getTime();
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useRequestHarvestStatus = function useRequestHarvestStatus() {
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const items1 = [closure_5];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_5.harvestType);
  const tmp2 = callback(React.useState(() => Date.now()), 2);
  const first = tmp2[0];
  _require = tmp2[1];
  let sum = first;
  if (null != stateFromStores1) {
    const _Date = Date;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  const dependencyMap = sum;
  callback = React.useRef(null);
  const items2 = [sum];
  const effect = React.useEffect(() => {
    const diff = closure_1 - Date.now();
    if (diff > 0) {
      const _setTimeout = setTimeout;
      const _clearTimeout = clearTimeout;
      const timerId = setTimeout(() => outer1_0(Date.now()), diff);
      clearTimeout(ref.current);
      ref.current = timerId;
    }
    return () => clearTimeout(outer1_2.current);
  }, items2);
  if (null != stateFromStores) {
    if (stateFromStores.verified) {
      if (stateFromStores.isStaff()) {
        obj = { allowed: false, reason: "staff" };
      } else if (null == stateFromStores1) {
        obj = { allowed: true };
      } else if (sum > first) {
        const obj1 = { allowed: false, reason: "rate_limited" };
        const _Date2 = Date;
        const date1 = new Date(sum);
        obj1.nextAllowed = date1;
        obj = obj1;
      } else {
        obj = { allowed: true };
      }
    }
  }
  return { allowed: false, reason: "not_verified" };
};

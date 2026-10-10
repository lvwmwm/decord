// Module ID: 13755
// Function ID: 13756
// Name: usePremiumGroupMembership
// Dependencies: [19, 13756, 558, 576, 504, 584, 2]

// Module 13755 (usePremiumGroupMembership)
import react from "react" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumGroupStore from "PremiumGroupStore" /* 13756 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGroupMembership(arg0) {
  let _fetch;
  let closure_0;
  let isFetchingMembership;
  let premiumGroupMembership;
  let tmp4;
  let tmp7;
  let tmp8;
  let useCachedData;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ useCachedData, fetch: _fetch } = tmp4);
  _require = tmp5;
  let closure_1 = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PremiumGroupStore];
    class M {
      constructor() {
        const obj = { premiumGroupMembership: PremiumGroupStore.getMembership(), isFetchingMembership: PremiumGroupStore.isFetchingMembership() };
        return obj;
      }
    }
    cResult[2] = items;
    cResult[3] = M;
    tmp8 = M;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  if (cResult[4] === (undefined === _fetch || _fetch)) {
    let tmp11;
    let tmp12;
    if (cResult[5] === (undefined !== useCachedData && useCachedData)) {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    useEffect(tmp11, tmp12);
    class M {
      constructor() {
        const obj = { premiumGroupMembership: PremiumGroupStore.getMembership(), isFetchingMembership: PremiumGroupStore.isFetchingMembership() };
        return obj;
      }
    }
    const obj3 = { premiumGroupMembership, isLoading: isFetchingMembership };
    cResult[8] = isFetchingMembership;
    cResult[9] = premiumGroupMembership;
    cResult[10] = obj3;
  }
  const fn = function f() {
    const tmp = closure_1;
    if (tmp) {
      const hasFetchedMembershipResult = closure_0 && PremiumGroupStore.hasFetchedMembership();
      if (!hasFetchedMembershipResult) {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
      }
    }
  };
  const items1 = [undefined === _fetch || _fetch, tmp5];
  cResult[4] = undefined === _fetch || _fetch;
  cResult[5] = undefined !== useCachedData && useCachedData;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : (function usePremiumGroupMembership() {
  let isFetchingMembership;
  let premiumGroupMembership;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [PremiumGroupStore];
  const obj2 = flag(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { premiumGroupMembership: PremiumGroupStore.getMembership(), isFetchingMembership: PremiumGroupStore.isFetchingMembership() };
    return obj;
  });
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    const tmp = flag2;
    if (tmp) {
      const hasFetchedMembershipResult = flag && PremiumGroupStore.hasFetchedMembership();
      if (!hasFetchedMembershipResult) {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
});
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

export default tmp2;

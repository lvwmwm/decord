// Module ID: 7410
// Function ID: 7411
// Name: AdDataUtils
// Dependencies: [32, 19, 7411, 7412, 7413, 558, 576, 2]
// Exports: getAdUser

// Module 7410 (AdDataUtils)
import AdDataUtilsConstants from "AdDataUtilsConstants" /* 7412 */;
import AdUserActionCreators from "AdUserActionCreators" /* 7413 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AdUserStore from "AdUserStore" /* 7411 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const DEFAULT_TIMEOUT_MS = AdDataUtilsConstants.DEFAULT_TIMEOUT_MS;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAdUser(arg0) {
  let closure_0;
  let tmp3;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  let obj2 = react;
  let tmp2 = _slicedToArray(react.useState(AdUserStore.adUser), 2);
  [tmp3, dependencyMap] = tmp2;
  if (cResult[0] !== arg0) {
    const fn = function h() {
      let handleStoreChange;
      let isFetching = null != AdUserStore.adUser;
      const hasFetchFailed = AdUserStore.hasFetchFailed;
      const obj = AdUserStore;
      if (!isFetching) {
        isFetching = AdUserStore.isFetching;
      }
      if (!isFetching) {
        isFetching = hasFetchFailed;
      }
      if (!isFetching) {
        let tmp2 = dependencyMap;
        const obj2 = closure_0(dependencyMap[4]);
        const adUser = obj2.fetchAdUser(handleStoreChange);
      }
      handleStoreChange = function handleStoreChange() {
        const tmp2 = null != AdUserStore.adUser || AdUserStore.hasFetchFailed;
        if (tmp2) {
          closure_1_1(AdUserStore.adUser);
        }
      };
      obj.addChangeListener(handleStoreChange);
      return () => AdUserStore.removeChangeListener(handleStoreChange);
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  return tmp3;
}) : (function useAdUser(arg0) {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(AdUserStore.adUser);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function handleStoreChange() {
      const tmp2 = null != AdUserStore.adUser || AdUserStore.hasFetchFailed;
      if (tmp2) {
        closure_1_1(AdUserStore.adUser);
      }
    }
    let isFetching = null != AdUserStore.adUser;
    const hasFetchFailed = AdUserStore.hasFetchFailed;
    const obj = AdUserStore;
    if (!isFetching) {
      isFetching = AdUserStore.isFetching;
    }
    if (!isFetching) {
      isFetching = hasFetchFailed;
    }
    if (!isFetching) {
      let tmp2 = closure_1;
      const obj2 = closure_0(closure_1[4]);
      const adUser = obj2.fetchAdUser(handleStoreChange);
    }
    obj.addChangeListener(handleStoreChange);
    return () => AdUserStore.removeChangeListener(handleStoreChange);
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  const adUser = AdUserStore.adUser;
  if (null == adUser) {
    let resolved;
    if (!AdUserStore.hasFetchFailed) {
      if (!AdUserStore.isFetching) {
        let tmp = questContentName;
        const tmp2 = require;
        let tmp3 = dependencyMap;
        const obj = AdUserActionCreators;
        const adUser1 = obj.fetchAdUser(questContentName);
      }
      const self = this;
      const self2 = this;
      resolved = new Promise((arg0) => {
        let closure_2;
        let closure_0 = arg0;
        function handleUpdate() {
          const tmp = null != AdUserStore.adUser || AdUserStore.hasFetchFailed;
          if (tmp) {
            const tmp3 = c1;
            if (!tmp3) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              AdUserStore.removeChangeListener(handleUpdate);
              closure_0(tmp2);
            }
          }
        }
        let c1 = false;
        const timeout = setTimeout(() => {
          const tmp = c1;
          if (!tmp) {
            c1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            AdUserStore.removeChangeListener(handleUpdate);
            closure_0(null);
          }
        }, closure_5);
        closure_4.addChangeListener(handleUpdate);
      });
    }
    return resolved;
  }
  resolved = Promise.resolve(adUser);
};
export const useAdUser = tmp2;

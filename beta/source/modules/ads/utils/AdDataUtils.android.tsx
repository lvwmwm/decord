// Module ID: 7147
// Function ID: 7148
// Name: AdDataUtils
// Dependencies: [32, 19, 7148, 7149, 7150, 2]
// Exports: getAdUser, useAdUser

// Module 7147 (AdDataUtils)
import AdDataUtilsConstants from "AdDataUtilsConstants" /* 7149 */;
import AdUserActionCreators from "AdUserActionCreators" /* 7150 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AdUserStore from "AdUserStore" /* 7148 */;
import size from "module_2" /* 2 */;

const DEFAULT_TIMEOUT_MS = AdDataUtilsConstants.DEFAULT_TIMEOUT_MS;
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
export const useAdUser = function useAdUser(profile_badge) {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(AdUserStore.adUser);
  const items = [profile_badge];
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
      const obj2 = profile_badge(closure_1[4]);
      const adUser = obj2.fetchAdUser(handleStoreChange);
    }
    obj.addChangeListener(handleStoreChange);
    return () => AdUserStore.removeChangeListener(handleStoreChange);
  }, items);
  return first;
};

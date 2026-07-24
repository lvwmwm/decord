// Module ID: 6970
// Function ID: 55743
// Name: getAdUser
// Dependencies: [57, 31, 6971, 6972, 6973, 2]
// Exports: getAdUser, useAdUser

// Module 6970 (getAdUser)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_TIMEOUT_MS } from "DEFAULT_TIMEOUT_MS";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  let adUser = _isNativeReflectConstruct.adUser;
  if (null == adUser) {
    if (!_isNativeReflectConstruct.hasFetchFailed) {
      if (!_isNativeReflectConstruct.isFetching) {
        adUser = require(6973) /* _fetchAdUser */.fetchAdUser(questContentName);
        const obj = require(6973) /* _fetchAdUser */;
      }
      let resolved = new Promise((arg0) => {
        let closure_0 = arg0;
        function handleUpdate() {
          let hasFetchFailed = null != outer2_4.adUser;
          if (!hasFetchFailed) {
            hasFetchFailed = outer2_4.hasFetchFailed;
          }
          if (hasFetchFailed) {
            safeResolve(outer2_4.adUser);
          }
        }
        function safeResolve(adUser) {
          if (!c1) {
            c1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(_slicedToArray);
            outer2_4.removeChangeListener(handleUpdate);
            callback(adUser);
          }
        }
        let c1 = false;
        const timeout = setTimeout(() => {
          safeResolve(null);
        }, outer1_5);
        outer1_4.addChangeListener(handleUpdate);
      });
    }
    return resolved;
  }
  resolved = Promise.resolve(adUser);
};
export const useAdUser = function useAdUser(profile_badge) {
  let closure_0 = profile_badge;
  const tmp = callback(React.useState(_isNativeReflectConstruct.adUser), 2);
  let closure_1 = tmp[1];
  const items = [profile_badge];
  const effect = React.useEffect(() => {
    function handleStoreChange() {
      let hasFetchFailed = null != outer2_4.adUser;
      if (!hasFetchFailed) {
        hasFetchFailed = outer2_4.hasFetchFailed;
      }
      if (hasFetchFailed) {
        outer1_1(outer2_4.adUser);
      }
    }
    let hasFetchFailed = null != outer1_4.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = outer1_4.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = outer1_4.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = profile_badge(table[4]).fetchAdUser(handleStoreChange);
      const obj = profile_badge(table[4]);
    }
    outer1_4.addChangeListener(handleStoreChange);
    return () => outer2_4.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
};

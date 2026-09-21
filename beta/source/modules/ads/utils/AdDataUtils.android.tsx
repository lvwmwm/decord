// Module ID: 7976
// Function ID: 7977
// Name: AdDataUtils
// Dependencies: [32, 19, 7977, 7978, 7979, 558, 568, 2]
// Exports: getAdUser

// Module 7976 (AdDataUtils)
import AdUserActionCreators from "AdUserActionCreators" /* 7979 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdUserStore from "AdUserStore" /* 7977 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_TIMEOUT_MS = fn(7978).DEFAULT_TIMEOUT_MS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  const adUser = AdUserStore.adUser;
  if (null == adUser) {
    if (!AdUserStore.hasFetchFailed) {
      if (!AdUserStore.isFetching) {
        const adUser1 = AdUserActionCreators.fetchAdUser(questContentName);
      }
      let resolved = new Promise((arg0) => {
        closure_0 = arg0;
        function handleUpdate() {
          if (tmp) {
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              obj.removeChangeListener(handleUpdate);
              closure_0(tmp2);
            }
          }
        }
        c1 = false;
        const timeout = setTimeout(() => {
          if (!c1) {
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
export const useAdUser = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  const obj = require("c");
  let obj2 = noop;
  [tmp3, dependencyMap] = noop.useState(AdUserStore.adUser);
  if (cResult[0] !== arg0) {
    const fn = function h() {
      let hasFetchFailed = null != AdUserStore.adUser;
      if (!hasFetchFailed) {
        hasFetchFailed = AdUserStore.isFetching;
      }
      if (!hasFetchFailed) {
        hasFetchFailed = AdUserStore.hasFetchFailed;
      }
      if (!hasFetchFailed) {
        const adUser = closure_0(dependencyMap[4]).fetchAdUser(handleStoreChange);
        const obj2 = closure_0(dependencyMap[4]);
      }
      handleStoreChange = function handleStoreChange() {
        if (tmp2) {
          closure_1_1(tmp.adUser);
        }
      };
      AdUserStore.addChangeListener(handleStoreChange);
      return () => AdUserStore.removeChangeListener(handleStoreChange);
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  return tmp3;
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(AdUserStore.adUser), 2);
  dependencyMap = tmp[1];
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function handleStoreChange() {
      if (tmp2) {
        dependencyMap(tmp.adUser);
      }
    }
    let hasFetchFailed = null != AdUserStore.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = AdUserStore.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = AdUserStore.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = closure_0(dependencyMap[4]).fetchAdUser(handleStoreChange);
      const obj2 = closure_0(dependencyMap[4]);
    }
    AdUserStore.addChangeListener(handleStoreChange);
    return () => AdUserStore.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
});

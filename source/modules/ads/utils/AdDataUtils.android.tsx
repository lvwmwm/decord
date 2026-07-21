// Module ID: 6965
// Function ID: 55677
// Name: getAdUser
// Dependencies: []
// Exports: getAdUser, useAdUser

// Module 6965 (getAdUser)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const DEFAULT_TIMEOUT_MS = arg1(dependencyMap[3]).DEFAULT_TIMEOUT_MS;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  let adUser = closure_4.adUser;
  if (null == adUser) {
    if (!closure_4.hasFetchFailed) {
      if (!closure_4.isFetching) {
        adUser = arg1(dependencyMap[4]).fetchAdUser(questContentName);
        const obj = arg1(dependencyMap[4]);
      }
      let resolved = new Promise((arg0) => {
        function handleUpdate() {
          let hasFetchFailed = null != safeResolve.adUser;
          if (!hasFetchFailed) {
            hasFetchFailed = safeResolve.hasFetchFailed;
          }
          if (hasFetchFailed) {
            safeResolve(safeResolve.adUser);
          }
        }
        function safeResolve(adUser) {
          if (!closure_1) {
            closure_1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            safeResolve.removeChangeListener(handleUpdate);
            adUser(adUser);
          }
        }
        let closure_1 = false;
        const timeout = setTimeout(() => {
          safeResolve(null);
        }, closure_5);
        safeResolve.addChangeListener(handleUpdate);
      });
    }
    return resolved;
  }
  resolved = Promise.resolve(adUser);
};
export const useAdUser = function useAdUser(profile_badge) {
  const arg1 = profile_badge;
  const tmp = callback(React.useState(closure_4.adUser), 2);
  let closure_1 = tmp[1];
  const items = [profile_badge];
  const effect = React.useEffect(() => {
    function handleStoreChange() {
      let hasFetchFailed = null != closure_4.adUser;
      if (!hasFetchFailed) {
        hasFetchFailed = closure_4.hasFetchFailed;
      }
      if (hasFetchFailed) {
        callback(closure_4.adUser);
      }
    }
    const arg0 = handleStoreChange;
    let hasFetchFailed = null != closure_4.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = closure_4.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = closure_4.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = arg0(closure_1[4]).fetchAdUser(arg0);
      const obj = arg0(closure_1[4]);
    }
    closure_4.addChangeListener(handleStoreChange);
    return () => closure_4.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
};

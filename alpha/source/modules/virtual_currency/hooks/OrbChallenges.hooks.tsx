// Module ID: 16891
// Function ID: 16892
// Dependencies: [19, 15625, 504, 15627, 2]
// Exports: useFetchOrbChallenges, useOrbChallengeUnreadState

// Module 16891
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 15627 */;
import react from "react" /* 19 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15625 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/OrbChallenges.hooks.tsx");

export function useFetchOrbChallenges(shouldFetch) {
  let fetchChallengesError;
  let hasFetchedChallenges;
  let ref;
  _require = fetchChallengesError(false);
  let tmp = _require;
  let obj = require("get initialized");
  const items = [shouldFetch];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ challengesForOrbWallet: shouldFetch.challengesForOrbWallet, hasFetchedChallenges: shouldFetch.hasFetchedChallenges, isFetchingChallenges: shouldFetch.isFetchingChallenges, fetchChallengesError: shouldFetch.fetchChallengesError }));
  const tmp2 = hasFetchedChallenges;
  hasFetchedChallenges = stateFromStoresObject.hasFetchedChallenges;
  const isFetchingChallenges = stateFromStoresObject.isFetchingChallenges;
  fetchChallengesError = stateFromStoresObject.fetchChallengesError;
  shouldFetch = null != shouldFetch;
  const challengesForOrbWallet = stateFromStoresObject.challengesForOrbWallet;
  if (shouldFetch) {
    shouldFetch = shouldFetch.shouldFetch;
  }
  const items1 = [hasFetchedChallenges, isFetchingChallenges, shouldFetch, fetchChallengesError];
  isFetchingChallenges(() => {
    const tmp = shouldFetch && !ref.current;
    if (tmp) {
      const tmp3 = hasFetchedChallenges || isFetchingChallenges || null != fetchChallengesError;
      if (!tmp3) {
        const obj = OrbChallengeActionCreators;
        const orbChallenges = obj.fetchOrbChallenges(function onSuccess() {
          ref.current = true;
        });
      }
    }
  }, items1);
  const obj2 = { challengesForOrbWallet, hasFetchedChallenges, isFetchingChallenges, refetch: tmp(tmp2[3]).fetchOrbChallenges };
  return obj2;
}
export function useOrbChallengeUnreadState(enabled) {
  let closure_0;
  let hasUnreadUpdate;
  let notificationType;
  let ref;
  let tmp = null == enabled;
  if (!tmp) {
    tmp = false !== enabled.enabled;
  }
  _require = tmp;
  dependencyMap = closure_3(false);
  let obj = require("get initialized");
  const items = [OrbChallengesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ hasUnreadUpdate: OrbChallengesStore.hasUnreadUpdate, notificationType: OrbChallengesStore.clientUnreadNotificationType }));
  const items1 = [tmp];
  ({ hasUnreadUpdate, notificationType } = stateFromStoresObject);
  closure_2(() => {
    let hasFetchedChallenges = !closure_0;
    if (closure_0) {
      hasFetchedChallenges = ref.current;
    }
    if (!hasFetchedChallenges) {
      hasFetchedChallenges = OrbChallengesStore.hasFetchedChallenges;
    }
    if (!hasFetchedChallenges) {
      ref.current = true;
      const obj = OrbChallengeActionCreators;
      const orbChallengesUnread = obj.fetchOrbChallengesUnread();
    }
  }, items1);
  const obj2 = { hasUnreadUpdate, notificationType, ackUnread: require("OrbChallengeActionCreators").ackOrbChallengesUnread };
  return obj2;
}

// Module ID: 17843
// Function ID: 17844
// Name: useWaterwheelsDiscoverFeed
// Dependencies: [19, 1245, 8772, 502, 1386, 8783, 8782, 504, 8779, 17844, 17849, 2]
// Exports: default, useWaterwheelsDiscoverInitialRequest

// Module 17843 (useWaterwheelsDiscoverFeed)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8782 */;
import useWaterwheelsCardEligibilityDefault from "useWaterwheelsCardEligibility" /* 17844 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 17849 */;
import react_mod from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import ICYMIStore from "ICYMIStore" /* 8772 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1386 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8783 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

function requestWaterwheelsDiscover() {
  let isPickerOpenResult = InterestPickerSessionStore.isPickerOpen();
  if (!isPickerOpenResult) {
    const obj = ICYMIActionCreatorsDefault;
    isPickerOpenResult = obj.hasDiscoverRequestInFlight();
  }
  if (!isPickerOpenResult) {
    const obj2 = ICYMIActionCreatorsDefault;
    const dehydrated = obj2.fetchDehydrated();
  }
}
let react = react_mod;
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverFeed.tsx");

export default function useWaterwheelsDiscoverFeed(arg0) {
  let EMPTY_DISCOVER_SNAPSHOT;
  let closure_1;
  let discoverSnapshot;
  let obj = EMPTY_DISCOVER_SNAPSHOT(504);
  const items = [ICYMIStore, ApexExperimentStore, AuthenticationStore, UserStore];
  EMPTY_DISCOVER_SNAPSHOT = obj.useStateFromStores(items, () => discoverSnapshot.getDiscoverSnapshot());
  const tmp3 = arg0;
  if (!tmp3) {
    EMPTY_DISCOVER_SNAPSHOT = tmp(8779).EMPTY_DISCOVER_SNAPSHOT;
  }
  const tmp4 = useWaterwheelsCardEligibilityDefault();
  importDefault = tmp4;
  const items1 = [EMPTY_DISCOVER_SNAPSHOT, tmp4];
  const memo = react.useMemo(() => {
    const obj = WaterwheelsDiscoverFeedState;
    return obj.selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, closure_1);
  }, items1);
  const tmpResult = EMPTY_DISCOVER_SNAPSHOT(17849);
  const obj2 = { snapshot: EMPTY_DISCOVER_SNAPSHOT, entries: memo, status: tmpResult.getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, memo.length), retry: requestWaterwheelsDiscover };
  return obj2;
};
export function useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot) {
  let ref;
  _require = enabled;
  let closure_1 = visible;
  dependencyMap = snapshot;
  let obj = require("get initialized");
  const items = [InterestPickerSessionStore];
  const stateFromStores = obj.useStateFromStores(items, () => InterestPickerSessionStore.isPickerOpen());
  react = react.useRef(false);
  const items1 = [enabled, visible];
  const effect = react.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const tmp3 = enabled;
      if (tmp3) {
        if (!ref.current) {
          tmp4.current = true;
          discoverSnapshot = ICYMIStore.getDiscoverSnapshot();
          const _Date = Date;
          const timestamp = Date.now();
          let hasSnapshot = discoverSnapshot.hasSnapshot && "success" === discoverSnapshot.status;
          if (hasSnapshot) {
            hasSnapshot = null == discoverSnapshot.loadedAt || timestamp - discoverSnapshot.loadedAt >= 1800000;
            const tmp10 = null == discoverSnapshot.loadedAt || timestamp - discoverSnapshot.loadedAt >= 1800000;
          }
          if (hasSnapshot) {
            hasSnapshot = null == discoverSnapshot.retryAfterAt || timestamp >= discoverSnapshot.retryAfterAt;
          }
          if (hasSnapshot) {
            hasSnapshot = !InterestPickerSessionStore.isPickerOpen();
          }
          if (hasSnapshot) {
            const obj = ICYMIActionCreatorsDefault;
            hasSnapshot = !obj.hasDiscoverRequestInFlight();
          }
          if (hasSnapshot) {
            const obj2 = ICYMIActionCreatorsDefault;
            const dehydrated = obj2.fetchDehydrated();
          }
        }
      }
    } else {
      ref.current = false;
    }
  }, items1);
  const items2 = [enabled, visible, snapshot, stateFromStores];
  const effect1 = react.useEffect(() => {
    let obj3;
    let tmp;
    let tmp2;
    if (enabled) {
      if (visible) {
        let tmp3 = snapshot;
        if ("idle" === snapshot.status) {
          const obj5 = InterestPickerSessionStore;
          if (!InterestPickerSessionStore.isPickerOpen()) {
            function requestWhenReady() {
              let obj2;
              const tmp2 = enabled(snapshot[10]);
              const shouldRequestWaterwheelsDiscover = tmp2.shouldRequestWaterwheelsDiscover;
              const obj = { enabled, visible, snapshot: discoverSnapshot.getDiscoverSnapshot(), hasRequestInFlight: obj2.hasDiscoverRequestInFlight(), isPickerOpen: InterestPickerSessionStore.isPickerOpen() };
              obj2 = visible(snapshot[6]);
              const tmp = snapshot;
              const tmp3 = visible;
              if (shouldRequestWaterwheelsDiscover(obj)) {
                const tmp3Result = tmp3(tmp[6]);
                const dehydrated = tmp3Result.fetchDehydrated();
              }
            }
            let obj = ICYMIActionCreatorsDefault;
            const result = obj.subscribeDiscoverRequests(requestWhenReady);
            let obj2 = { enabled: tmp, visible: tmp2, snapshot: ICYMIStore.getDiscoverSnapshot(), hasRequestInFlight: obj3.hasDiscoverRequestInFlight(), isPickerOpen: obj5.isPickerOpen() };
            let shouldRequestWaterwheelsDiscover = WaterwheelsDiscoverFeedState.shouldRequestWaterwheelsDiscover;
            WaterwheelsDiscoverFeedState;
            obj3 = ICYMIActionCreatorsDefault;
            const tmp4 = importDefault;
            if (shouldRequestWaterwheelsDiscover(obj2)) {
              const tmp4Result = tmp4(8782);
              let dehydrated = tmp4Result.fetchDehydrated();
            }
            return result;
          }
        }
      }
    }
  }, items2);
}

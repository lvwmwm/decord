// Module ID: 18876
// Function ID: 18877
// Name: useWaterwheelsDiscoverFeed
// Dependencies: [19, 1246, 10136, 502, 1385, 10149, 10148, 504, 10145, 18877, 18880, 2]
// Exports: default, useWaterwheelsDiscoverInitialRequest

// Module 18876 (useWaterwheelsDiscoverFeed)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10148 */;
import useWaterwheelsCardEligibilityDefault from "useWaterwheelsCardEligibility" /* 18877 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 18880 */;
import react from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ICYMIStore from "ICYMIStore" /* 10136 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10149 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

function requestWaterwheelsDiscover() {
  const obj = ICYMIActionCreatorsDefault;
  if (!obj.hasDiscoverRequestInFlight()) {
    const tmpResult = ICYMIActionCreatorsDefault;
    const dehydrated = tmpResult.fetchDehydrated();
  }
}
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/useWaterwheelsDiscoverFeed.tsx");

export default function useWaterwheelsDiscoverFeed(arg0) {
  let EMPTY_DISCOVER_SNAPSHOT;
  let closure_1;
  let discoverSnapshot;
  let obj = EMPTY_DISCOVER_SNAPSHOT(504);
  const items = [ICYMIStore, ApexExperimentStore, AuthenticationStore, UserStore];
  EMPTY_DISCOVER_SNAPSHOT = obj.useStateFromStores(items, () => discoverSnapshot.getDiscoverSnapshot());
  const tmp3 = arg0;
  if (!tmp3) {
    EMPTY_DISCOVER_SNAPSHOT = tmp(10145).EMPTY_DISCOVER_SNAPSHOT;
  }
  const tmp4 = useWaterwheelsCardEligibilityDefault();
  importDefault = tmp4;
  const items1 = [EMPTY_DISCOVER_SNAPSHOT, tmp4];
  const memo = react.useMemo(() => {
    const obj = WaterwheelsDiscoverFeedState;
    return obj.selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, closure_1);
  }, items1);
  const tmpResult = EMPTY_DISCOVER_SNAPSHOT(18880);
  const obj2 = { snapshot: EMPTY_DISCOVER_SNAPSHOT, entries: memo, status: tmpResult.getWaterwheelsDiscoverFeedStatus(EMPTY_DISCOVER_SNAPSHOT, memo.length), retry: requestWaterwheelsDiscover };
  return obj2;
};
export function useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot) {
  let pickerOpen;
  _require = enabled;
  dependencyMap = snapshot;
  let obj = require("get initialized");
  const items = [InterestPickerSessionStore];
  const stateFromStores = obj.useStateFromStores(items, () => pickerOpen.isPickerOpen());
  const items1 = [enabled, visible, snapshot, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let obj2;
    const obj = { enabled, visible, snapshot, hasRequestInFlight: obj2.hasDiscoverRequestInFlight(), isPickerOpen: stateFromStores };
    const shouldRequestWaterwheelsDiscover = WaterwheelsDiscoverFeedState.shouldRequestWaterwheelsDiscover;
    WaterwheelsDiscoverFeedState;
    obj2 = ICYMIActionCreatorsDefault;
    if (shouldRequestWaterwheelsDiscover(obj)) {
      const tmp3Result = ICYMIActionCreatorsDefault;
      const dehydrated = tmp3Result.fetchDehydrated();
    }
  }, items1);
}

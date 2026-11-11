// Module ID: 18881
// Function ID: 18882
// Name: useWaterwheelsDiscoverFeed
// Dependencies: [19, 1246, 10137, 9280, 502, 1385, 10151, 10150, 504, 10146, 18882, 18885, 2]
// Exports: default, useWaterwheelsDiscoverInitialRequest

// Module 18881 (useWaterwheelsDiscoverFeed)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10150 */;
import useWaterwheelsCardEligibilityDefault from "useWaterwheelsCardEligibility" /* 18882 */;
import WaterwheelsDiscoverFeedState from "WaterwheelsDiscoverFeedState" /* 18885 */;
import react from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ICYMIStore from "ICYMIStore" /* 10137 */;
import LabFeatureStore from "LabFeatureStore" /* 9280 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;
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
  const items = [ICYMIStore, ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  EMPTY_DISCOVER_SNAPSHOT = obj.useStateFromStores(items, () => discoverSnapshot.getDiscoverSnapshot());
  const tmp3 = arg0;
  if (!tmp3) {
    EMPTY_DISCOVER_SNAPSHOT = tmp(10146).EMPTY_DISCOVER_SNAPSHOT;
  }
  const tmp4 = useWaterwheelsCardEligibilityDefault();
  importDefault = tmp4;
  const items1 = [EMPTY_DISCOVER_SNAPSHOT, tmp4];
  const memo = react.useMemo(() => {
    const obj = WaterwheelsDiscoverFeedState;
    return obj.selectWaterwheelsDiscoverEntries(EMPTY_DISCOVER_SNAPSHOT, closure_1);
  }, items1);
  const tmpResult = EMPTY_DISCOVER_SNAPSHOT(18885);
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

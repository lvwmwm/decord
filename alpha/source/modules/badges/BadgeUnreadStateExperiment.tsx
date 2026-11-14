// Module ID: 11819
// Function ID: 11820
// Name: BadgeUnreadStateExperiment
// Dependencies: [32, 19, 1452, 504, 2]
// Exports: useIsBadgeUnreadStateEnabled

// Module 11819 (BadgeUnreadStateExperiment)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_4 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  let config;
  let first;
  let tmp5;
  const _location = location.location;
  const hasUnread = location.hasUnread;
  const useStateFromStores = _location(hasUnread[3]).useStateFromStores;
  const tmp = _location(hasUnread[3]);
  const items = [_location(hasUnread[2]).ApexExperimentStore];
  const items1 = [hasUnread, _location];
  let stateFromStores = useStateFromStores(items, () => {
    let enabled = hasUnread;
    if (enabled) {
      const obj = { location: _location };
      enabled = config.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
  [first, tmp5] = react.useState(false);
  const tmp6 = stateFromStores && !first;
  if (tmp6) {
    tmp5(true);
  }
  if (!stateFromStores) {
    stateFromStores = first;
  }
  return stateFromStores;
}

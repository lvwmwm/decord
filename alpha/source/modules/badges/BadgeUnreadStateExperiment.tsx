// Module ID: 11605
// Function ID: 11606
// Name: BadgeUnreadStateExperiment
// Dependencies: [1449, 504, 2]
// Exports: useIsBadgeUnreadStateEnabled

// Module 11605 (BadgeUnreadStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-badges-unread-state", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/badges/BadgeUnreadStateExperiment.tsx");

export function useIsBadgeUnreadStateEnabled(location) {
  let config;
  const _location = location.location;
  const hasUnread = location.hasUnread;
  const useStateFromStores = _location(hasUnread[1]).useStateFromStores;
  const tmp = _location(hasUnread[1]);
  const items = [_location(hasUnread[0]).ApexExperimentStore];
  const items1 = [hasUnread, _location];
  return useStateFromStores(items, () => {
    let enabled = hasUnread;
    if (enabled) {
      const obj = { location: _location };
      enabled = config.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}

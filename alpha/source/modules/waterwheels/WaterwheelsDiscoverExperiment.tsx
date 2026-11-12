// Module ID: 10146
// Function ID: 10147
// Name: WaterwheelsDiscoverExperiment
// Dependencies: [1246, 502, 1385, 1449, 504, 2]
// Exports: getWaterwheelsDiscoverEnabled, useWaterwheelsDiscoverEnabled

// Module 10146 (WaterwheelsDiscoverExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { name: "2026-11-waterwheels-discover", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsDiscoverExperiment.tsx");

export const WaterwheelsDiscoverExperiment = apexExperiment;
export function getWaterwheelsDiscoverEnabled(fetchDehydrated) {
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  let enabled = flag;
  if (enabled) {
    const obj = { location: fetchDehydrated };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel_str) {
  _require = WaterwheelsDiscoverPanel_str;
  let obj = require("get initialized");
  const items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [WaterwheelsDiscoverPanel_str];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let flag;
    const tmp = WaterwheelsDiscoverPanel_str;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    let enabled = flag;
    if (enabled) {
      const obj = { location: tmp };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}

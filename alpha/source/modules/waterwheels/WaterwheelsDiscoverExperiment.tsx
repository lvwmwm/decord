// Module ID: 9006
// Function ID: 9007
// Name: WaterwheelsDiscoverExperiment
// Dependencies: [1246, 8639, 502, 1385, 1449, 9007, 504, 2]
// Exports: getWaterwheelsDiscoverEnabled, useWaterwheelsDiscoverEnabled

// Module 9006 (WaterwheelsDiscoverExperiment)
import ICYMILabFeature from "ICYMILabFeature" /* 9007 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import LabFeatureStore from "LabFeatureStore" /* 8639 */;
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
  let value = !flag;
  if (flag) {
    value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  }
  let enabled = !value;
  if (enabled) {
    const obj = { location: fetchDehydrated };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export function useWaterwheelsDiscoverEnabled(guilds_bar) {
  _require = guilds_bar;
  let obj = require("get initialized");
  const items = [ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  const items1 = [guilds_bar];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let flag;
    const tmp = guilds_bar;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    let value = !flag;
    if (flag) {
      value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
    }
    let enabled = !value;
    if (enabled) {
      const obj = { location: tmp };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}

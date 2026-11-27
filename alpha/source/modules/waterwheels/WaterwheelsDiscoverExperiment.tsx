// Module ID: 8922
// Function ID: 8923
// Name: WaterwheelsDiscoverExperiment
// Dependencies: [1246, 502, 1387, 1451, 504, 2]
// Exports: getWaterwheelsDiscoverEnabled, useWaterwheelsDiscoverEnabled

// Module 8922 (WaterwheelsDiscoverExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1387 */;
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { name: "2026-11-waterwheels-discover", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/waterwheels/WaterwheelsDiscoverExperiment.tsx");

export const WaterwheelsDiscoverExperiment = apexExperiment;
export function getWaterwheelsDiscoverEnabled(fetchDehydrated) {
  const obj = { location: fetchDehydrated };
  return apexExperiment.getConfig(obj).enabled;
}
export function useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel_str) {
  let _location;
  _require = WaterwheelsDiscoverPanel_str;
  let obj = require("get initialized");
  const items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [WaterwheelsDiscoverPanel_str];
  return obj.useStateFromStores(items, () => {
    const obj = { location: _location };
    return apexExperiment.getConfig(obj).enabled;
  }, items1);
}

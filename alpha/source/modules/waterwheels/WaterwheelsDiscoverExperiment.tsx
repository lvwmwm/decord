// Module ID: 8879
// Function ID: 8880
// Name: WaterwheelsDiscoverExperiment
// Dependencies: [1245, 502, 1386, 1450, 504, 2]
// Exports: getWaterwheelsDiscoverEnabled, useWaterwheelsDiscoverEnabled

// Module 8879 (WaterwheelsDiscoverExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1386 */;
import ApexExperiment from "ApexExperiment" /* 1450 */;
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

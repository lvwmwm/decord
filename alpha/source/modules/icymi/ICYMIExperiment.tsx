// Module ID: 10151
// Function ID: 10152
// Name: ICYMIExperiment
// Dependencies: [1246, 502, 1385, 504, 10146, 2]
// Exports: getICYMIEnabled, icymiEnabled, useICYMIEnabled

// Module 10151 (ICYMIExperiment)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10146 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  let obj = require("get initialized");
  const items = [ApexExperimentStore, AuthenticationStore, UserStore];
  const items1 = [TabsNavigator];
  return obj.useStateFromStores(items, () => {
    const obj = WaterwheelsDiscoverExperiment;
    return obj.getWaterwheelsDiscoverEnabled(TabsNavigator);
  }, items1);
}
export function getICYMIEnabled(ICYMIManager) {
  const obj = WaterwheelsDiscoverExperiment;
  return obj.getWaterwheelsDiscoverEnabled(ICYMIManager);
}
export function icymiEnabled(customScores) {
  const obj = WaterwheelsDiscoverExperiment;
  return obj.getWaterwheelsDiscoverEnabled(customScores);
}

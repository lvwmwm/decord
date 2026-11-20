// Module ID: 9926
// Function ID: 9927
// Name: ICYMIExperiment
// Dependencies: [1245, 502, 1386, 504, 9921, 2]
// Exports: getICYMIEnabled, icymiEnabled, useICYMIEnabled

// Module 9926 (ICYMIExperiment)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9921 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1386 */;
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

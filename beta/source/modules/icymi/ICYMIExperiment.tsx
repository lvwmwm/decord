// Module ID: 9002
// Function ID: 9003
// Name: ICYMIExperiment
// Dependencies: [1246, 8633, 502, 1385, 504, 9001, 9000, 2]
// Exports: getICYMIEnabled, icymiEnabled, useICYMIEnabled

// Module 9002 (ICYMIExperiment)
import ICYMILabFeature from "ICYMILabFeature" /* 9001 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import LabFeatureStore from "LabFeatureStore" /* 8633 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const WaterwheelsDiscoverExperiment = tmp(9000);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = ICYMILabFeature.ICYMI_LAB_FEATURE;
export function useICYMIEnabled(TabsNavigator) {
  _require = TabsNavigator;
  const items = [ApexExperimentStore, AuthenticationStore, LabFeatureStore, UserStore];
  const items1 = [TabsNavigator];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
    let waterwheelsDiscoverEnabled = !value;
    const tmp = TabsNavigator;
    if (waterwheelsDiscoverEnabled) {
      const tmp2Result = WaterwheelsDiscoverExperiment;
      waterwheelsDiscoverEnabled = tmp2Result.getWaterwheelsDiscoverEnabled(tmp);
    }
    return waterwheelsDiscoverEnabled;
  }, items1);
}
export function getICYMIEnabled(ICYMIManager) {
  const value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let waterwheelsDiscoverEnabled = !value;
  if (waterwheelsDiscoverEnabled) {
    const tmpResult = WaterwheelsDiscoverExperiment;
    waterwheelsDiscoverEnabled = tmpResult.getWaterwheelsDiscoverEnabled(ICYMIManager);
  }
  return waterwheelsDiscoverEnabled;
}
export function icymiEnabled(customScores) {
  const value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let waterwheelsDiscoverEnabled = !value;
  if (waterwheelsDiscoverEnabled) {
    const tmpResult = WaterwheelsDiscoverExperiment;
    waterwheelsDiscoverEnabled = tmpResult.getWaterwheelsDiscoverEnabled(customScores);
  }
  return waterwheelsDiscoverEnabled;
}

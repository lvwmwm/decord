// Module ID: 10516
// Function ID: 10517
// Name: ConjureMobileExperiment
// Dependencies: [1452, 504, 2]
// Exports: isConjureMobileEnabled, useIsConjureMobileEnabled

// Module 10516 (ConjureMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let obj = { name: "2026-10-conjure-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true, entryPoint: "you_bar" } };
obj2[3] = { enabled: true, entryPoint: "profile" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMobileExperiment.tsx");

export default apexExperiment;
export function useIsConjureMobileEnabled(canConjureCustomWidget, ConjureAppChannelSheet) {
  let _location;
  _require = canConjureCustomWidget;
  dependencyMap = ConjureAppChannelSheet;
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp = require("get initialized");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [canConjureCustomWidget, ConjureAppChannelSheet];
  return useStateFromStores(items, () => {
    let enabled = canConjureCustomWidget;
    if (enabled) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
}
export function isConjureMobileEnabled(ConjureProjectLinkCard) {
  const obj = { location: ConjureProjectLinkCard };
  return apexExperiment.getConfig(obj).enabled;
}

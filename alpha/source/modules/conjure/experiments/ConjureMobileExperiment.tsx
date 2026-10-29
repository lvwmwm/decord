// Module ID: 9631
// Function ID: 9632
// Name: ConjureMobileExperiment
// Dependencies: [1453, 558, 576, 504, 2]
// Exports: isConjureMobileEnabled

// Module 9631 (ConjureMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
let obj = { name: "2026-10-conjure-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true, entryPoint: "you_bar" } };
obj2[3] = { enabled: true, entryPoint: "profile" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureMobileEnabled(arg0, _location) {
  let closure_0;
  let first;
  _require = arg0;
  dependencyMap = _location;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(1453).ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp5;
    let tmp6;
    if (cResult[2] === _location) {
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    const tmpResult = require("get initialized");
    return tmpResult.useStateFromStores(first, tmp5, tmp6);
  }
  const fn = function u() {
    let enabled = closure_0;
    if (enabled) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  };
  const items1 = [arg0, _location];
  cResult[1] = arg0;
  cResult[2] = _location;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : (function useIsConjureMobileEnabled(arg0, _location) {
  let closure_0;
  _require = arg0;
  dependencyMap = _location;
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp = require("get initialized");
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0, _location];
  return useStateFromStores(items, () => {
    let enabled = closure_0;
    if (enabled) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMobileExperiment.tsx");

export default apexExperiment;
export const useIsConjureMobileEnabled = tmp3;
export function isConjureMobileEnabled(openConjureHomeScreen_str) {
  const obj = { location: openConjureHomeScreen_str };
  return apexExperiment.getConfig(obj).enabled;
}

// Module ID: 12621
// Function ID: 97000
// Name: getBrowserInvertedWantsConfig
// Dependencies: [2365587472, 1778384898, 33554448]
// Exports: getBrowserInvertedWantsConfig

// Module 12621 (getBrowserInvertedWantsConfig)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": true, "Bool(false)": true, defaultConfig: { invertWants: false }, variations: { [1]: { invertWants: true } } };
let closure_2 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(location) {
  let obj = require(dependencyMap[1]);
  obj = {};
  if (obj.isDesktop()) {
    obj.invertWants = false;
    let config = obj;
  } else {
    obj.location = location;
    config = config.getConfig(obj);
  }
  return config;
};

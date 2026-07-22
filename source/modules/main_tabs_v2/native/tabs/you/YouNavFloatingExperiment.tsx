// Module ID: 15356
// Function ID: 116966
// Name: isYouNavFloating
// Dependencies: []
// Exports: isYouNavFloating

// Module 15356 (isYouNavFloating)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const enabled = apexExperiment.getConfig({ location: "you-nav-floating" }).enabled;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx");

export function isYouNavFloating() {
  return enabled;
}

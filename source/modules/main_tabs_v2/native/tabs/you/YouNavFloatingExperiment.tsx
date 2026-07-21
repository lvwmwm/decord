// Module ID: 15345
// Function ID: 116884
// Name: isYouNavFloating
// Dependencies: []
// Exports: isYouNavFloating

// Module 15345 (isYouNavFloating)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: true, 0: "/assets/images/native/empties", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "you-nav-floating" }).enabled;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx");

export function isYouNavFloating() {
  return enabled;
}

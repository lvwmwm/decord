// Module ID: 15338
// Function ID: 116860
// Name: isYouNavFloating
// Dependencies: []
// Exports: isYouNavFloating

// Module 15338 (isYouNavFloating)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: "580ec4f595fa69a80ec70eff21ac3c71", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "you-nav-floating" }).enabled;
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx");

export function isYouNavFloating() {
  return enabled;
}

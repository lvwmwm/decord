// Module ID: 4154
// Function ID: 35100
// Name: getIsValorantSocialSDKEnabled
// Dependencies: []
// Exports: getIsValorantSocialSDKEnabled

// Module 4154 (getIsValorantSocialSDKEnabled)
let obj = { [0]: { enabled: false }, [1]: { enabled: true } };
obj = { enabled: false };
const _module = require(dependencyMap[0]);
obj = { 9223372036854775807: 25300059904.00161, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001746253996867444 };
obj.defaultConfig = obj;
obj.variations = obj;
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
let closure_1 = _module1.createApexExperiment({ defaultConfig: obj, variations: obj });
const _module2 = require(dependencyMap[0]);
const obj1 = { 9223372036854775807: null, 0: null, defaultConfig: obj, variations: obj };
let closure_2 = _module2.createApexExperiment(obj1);
const _module3 = require(dependencyMap[1]);
const result = _module3.fileFinishedImporting("modules/application_account_linking/experiments/valorantSocialSDKExperiment.tsx");

export const getIsValorantSocialSDKEnabled = function getIsValorantSocialSDKEnabled(arg0) {
  const config = config.getConfig(arg0);
  const config1 = config2.getConfig(arg0);
  let enabled = config.enabled;
  const config2 = config3.getConfig(arg0);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};

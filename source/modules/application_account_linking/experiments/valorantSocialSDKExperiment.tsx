// Module ID: 4154
// Function ID: 35108
// Name: getIsValorantSocialSDKEnabled
// Dependencies: []
// Exports: getIsValorantSocialSDKEnabled

// Module 4154 (getIsValorantSocialSDKEnabled)
let obj = { [0]: { enabled: false }, [1]: { enabled: true } };
obj = { enabled: false };
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: obj, variations: obj });
const _module1 = require(dependencyMap[0]);
let closure_1 = _module1.createApexExperiment({ defaultConfig: obj, variations: obj });
const _module2 = require(dependencyMap[0]);
obj = { 844175713: "<string:172097537>", 1387159956: "<string:36143360>" };
obj.defaultConfig = obj;
obj.variations = obj;
let closure_2 = _module2.createApexExperiment(obj);
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

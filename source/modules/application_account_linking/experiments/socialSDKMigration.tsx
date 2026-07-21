// Module ID: 4153
// Function ID: 35105
// Name: useIsRiotSocialSDKMigrationEnabled
// Dependencies: []
// Exports: getIsRiotSocialSDKMigrationEnabled, useIsRiotSocialSDKMigrationEnabled

// Module 4153 (useIsRiotSocialSDKMigrationEnabled)
let obj = { [0]: { enabled: false }, [1]: { enabled: true } };
obj = { enabled: false };
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: obj, variations: obj });
const _module1 = require(dependencyMap[0]);
obj = { 844175713: "keys", 1387159956: "Symbol" };
obj.defaultConfig = obj;
obj.variations = obj;
let closure_1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
let closure_2 = _module2.createApexExperiment({ defaultConfig: obj, variations: obj });
const _module3 = require(dependencyMap[0]);
const obj1 = { 844175713: "placeId", 1387159956: "timeStarted", defaultConfig: obj, variations: obj };
const apexExperiment = _module3.createApexExperiment(obj1);
const _module4 = require(dependencyMap[1]);
const result = _module4.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const useIsRiotSocialSDKMigrationEnabled = function useIsRiotSocialSDKMigrationEnabled(location) {
  const config = closure_0.useConfig(location);
  const config1 = closure_1.useConfig(location);
  let enabled = config.enabled;
  const config2 = closure_2.useConfig(location);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};
export const getIsRiotSocialSDKMigrationEnabled = function getIsRiotSocialSDKMigrationEnabled(arg0) {
  const config = closure_0.getConfig(arg0);
  const config1 = closure_1.getConfig(arg0);
  let enabled = config.enabled;
  const config2 = closure_2.getConfig(arg0);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};
export const battlenetSocialSDKMigrationExperiment = apexExperiment;

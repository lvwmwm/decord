// Module ID: 4158
// Function ID: 35142
// Name: getIsValorantSocialSDKEnabled
// Dependencies: [1428, 2]
// Exports: getIsValorantSocialSDKEnabled

// Module 4158 (getIsValorantSocialSDKEnabled)
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { [0]: { enabled: false }, [1]: { enabled: true } };
obj = { enabled: false };
obj = { name: "2026-04-valorant-social-sdk", kind: "user" };
obj.defaultConfig = obj;
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const obj1 = { name: "2026-05-valorant-social-sdk-us--canada", kind: "user", defaultConfig: obj, variations: obj };
let closure_1 = ApexExperiment.createApexExperiment(obj1);
const obj2 = { name: "2026-05-valorant-social-sdk-all-regions", kind: "user", defaultConfig: obj, variations: obj };
let closure_2 = ApexExperiment.createApexExperiment(obj2);
const result = require("set").fileFinishedImporting("modules/application_account_linking/experiments/valorantSocialSDKExperiment.tsx");

export const getIsValorantSocialSDKEnabled = function getIsValorantSocialSDKEnabled(arg0) {
  config = config.getConfig(arg0);
  const config1 = config2.getConfig(arg0);
  let enabled = config.enabled;
  config2 = config3.getConfig(arg0);
  if (!enabled) {
    enabled = config1.enabled;
  }
  if (!enabled) {
    enabled = config2.enabled;
  }
  return enabled;
};

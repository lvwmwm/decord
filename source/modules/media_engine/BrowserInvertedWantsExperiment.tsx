// Module ID: 13731
// Function ID: 13732
// Name: getBrowserInvertedWantsConfig
// Dependencies: [1468, 1235, 2]
// Exports: getBrowserInvertedWantsConfig

// Module 13731 (getBrowserInvertedWantsConfig)
import set from "set" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

let obj = { 1: null };
obj[1] = { invertWants: true };
let closure_2 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(arg0) {
  let config = PlatformTypes;
  if (config.isDesktop()) {
    config = { invertWants: false };
  } else {
    const obj = { location: null };
    obj[0] = arg0;
    config = config.getConfig(obj);
  }
  return config;
};

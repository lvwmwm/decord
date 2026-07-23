// Module ID: 12735
// Function ID: 99156
// Name: getBrowserInvertedWantsConfig
// Dependencies: [1428, 478, 2]
// Exports: getBrowserInvertedWantsConfig

// Module 12735 (getBrowserInvertedWantsConfig)
import ApexExperiment from "ApexExperiment";

let obj = { kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: { [1]: { invertWants: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(location) {
  let obj = require(478) /* isWindows */;
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

// Module ID: 5656
// Function ID: 5657
// Name: FastImageApngExperiment
// Dependencies: [1455, 1384, 504, 1901, 2]
// Exports: initializeFastImageApngExperiment

// Module 5656 (FastImageApngExperiment)
import get_initializedDefault from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import react_nativeDefault from "react-native" /* 1901 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-10-android-fastimage-apng", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_3 = ApexExperiment.createApexExperiment(obj);
let result = size.fileFinishedImporting("components_native/common/FastImageApngExperiment.tsx");

export const initializeFastImageApngExperiment = function initializeFastImageApngExperiment() {
  let config;
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    const initialized = get_initializedDefault.initialized;
    initialized.then(() => {
      const enabled = config.getConfig({ location: "loaded" }).enabled;
      const obj = react_nativeDefault;
      const result = obj.setFastImageApngEnabled(enabled);
    });
  }
};

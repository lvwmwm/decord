// Module ID: 5129
// Function ID: 5130
// Name: FastImageApngExperiment
// Dependencies: [1455, 1384, 504, 1901, 2]
// Exports: initializeFastImageApngExperiment

// Module 5129 (FastImageApngExperiment)
import get_initializedDefault from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import react_nativeDefault from "react-native" /* 1901 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let config;

let obj = { kind: "user", name: "2026-10-android-fastimage-apng", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_3 = ApexExperiment.createApexExperiment(obj);
let result = size.fileFinishedImporting("components_native/common/FastImageApngExperiment.tsx");

export const initializeFastImageApngExperiment = function initializeFastImageApngExperiment() {
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    const initialized = get_initializedDefault.initialized;
    initialized.then(() => {
      const obj = { location: "loaded" };
      const enabled = config.getConfig(obj, { autoTrackExposure: false }).enabled;
      const obj3 = react_nativeDefault;
      const result = obj3.setFastImageApngEnabled(enabled);
      const obj2 = config;
      const obj4 = react_nativeDefault;
      if (obj4.isFastImageApngEnabled() === enabled) {
        config = obj2.getConfig(obj);
      }
    });
  }
};

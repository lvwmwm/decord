// Module ID: 5713
// Function ID: 5714
// Name: FastImageApngExperiment
// Dependencies: [1448, 1376, 504, 1894, 2]
// Exports: initializeFastImageApngExperiment

// Module 5713 (FastImageApngExperiment)
import get_initializedDefault from "get initialized" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import react_nativeDefault from "react-native" /* 1894 */;
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-10-android-fastimage-apng", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_3 = ApexExperiment.createApexExperiment(obj);
let result = size.fileFinishedImporting("components_native/common/FastImageApngExperiment.tsx");

export function initializeFastImageApngExperiment() {
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
}

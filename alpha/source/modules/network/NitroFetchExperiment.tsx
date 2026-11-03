// Module ID: 20278
// Function ID: 20279
// Name: NitroFetchExperiment
// Dependencies: [1449, 20279, 2]
// Exports: initializeNitroFetchExperiment

// Module 20278 (NitroFetchExperiment)
import _mod20279 from "module_20279" /* 20279 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

function synchronizeNetworkLayer() {
  const tmp = "nitro_fetch" === closure_3.getConfig({ location: "android_network_layer" }).networkLayer;
  if (tmp !== closure_6) {
    if (tmp) {
      global.XMLHttpRequest = _mod20279.XMLHttpRequest;
    } else {
      global.XMLHttpRequest = XMLHttpRequest;
    }
    closure_6 = tmp;
  }
}
const obj = { networkLayer: "react_native", messagePrefetchEnabled: false };
const obj2 = { name: "2026-10-android-nitro-fetch", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { networkLayer: "nitro_fetch", messagePrefetchEnabled: false } } };
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const XMLHttpRequest = global.XMLHttpRequest;
let c5 = false;
let closure_6 = null;
const result = size.fileFinishedImporting("modules/network/NitroFetchExperiment.tsx");

export function initializeNitroFetchExperiment() {
  const tmp = c5;
  if (!tmp) {
    c5 = true;
    const ApexExperimentStore = ApexExperiment.ApexExperimentStore;
    ApexExperimentStore.addChangeListener(synchronizeNetworkLayer);
    const tmp7 = "nitro_fetch" === closure_3.getConfig({ location: "android_network_layer" }).networkLayer;
    const tmp2 = require;
    if (tmp7 !== closure_6) {
      if (tmp7) {
        global.XMLHttpRequest = tmp2(20279).XMLHttpRequest;
      } else {
        global.XMLHttpRequest = XMLHttpRequest;
      }
      closure_6 = tmp7;
    }
  }
}

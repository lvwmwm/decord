// Module ID: 9987
// Function ID: 9988
// Name: NitroFetchExperiment
// Dependencies: [502, 1449, 9988, 2]
// Exports: getMessagePrefetchKey, initializeNitroFetchExperiment

// Module 9987 (NitroFetchExperiment)
import _mod9988 from "module_9988" /* 9988 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

function synchronizeNetworkLayer() {
  const tmp = "nitro_fetch" === closure_4.getConfig({ location: "android_network_layer" }).networkLayer;
  if (tmp !== closure_7) {
    if (tmp) {
      if (null == closure_8) {
        closure_8 = _mod9988;
      }
      global.XMLHttpRequest = closure_8.XMLHttpRequest;
    } else {
      global.XMLHttpRequest = XMLHttpRequest;
    }
    closure_7 = tmp;
  }
}
let obj = { networkLayer: "react_native", messagePrefetchEnabled: false };
const obj2 = { name: "2026-10-android-nitro-fetch", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { networkLayer: "nitro_fetch", messagePrefetchEnabled: false }, 2: { networkLayer: "nitro_fetch", messagePrefetchEnabled: true } } };
let closure_4 = ApexExperiment.createApexExperiment(obj2);
const XMLHttpRequest = global.XMLHttpRequest;
let c6 = false;
let closure_7 = null;
let closure_8 = null;
const result = size.fileFinishedImporting("modules/network/NitroFetchExperiment.tsx");

export function initializeNitroFetchExperiment() {
  const tmp = c6;
  if (!tmp) {
    c6 = true;
    const ApexExperimentStore = ApexExperiment.ApexExperimentStore;
    ApexExperimentStore.addChangeListener(synchronizeNetworkLayer);
    const tmp7 = "nitro_fetch" === closure_4.getConfig({ location: "android_network_layer" }).networkLayer;
    const tmp2 = require;
    if (tmp7 !== closure_7) {
      if (tmp7) {
        if (null == closure_8) {
          closure_8 = tmp2(9988);
        }
        global.XMLHttpRequest = closure_8.XMLHttpRequest;
      } else {
        global.XMLHttpRequest = XMLHttpRequest;
      }
      closure_7 = tmp7;
    }
  }
}
export function getMessagePrefetchKey(channelId) {
  const config = closure_4.getConfig({ location: "android_message_prefetch_join" });
  if ("nitro_fetch" === config.networkLayer) {
    if (config.messagePrefetchEnabled) {
      let id = null;
      const obj = AuthenticationStore;
      if (AuthenticationStore.isAuthenticated()) {
        id = obj.getId();
      }
      if (null != id) {
        const _HermesInternal = HermesInternal;
        return "NativeAppStartup:" + id + ":" + channelId;
      }
    }
  }
}

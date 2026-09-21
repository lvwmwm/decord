// Module ID: 1350
// Function ID: 1351
// Name: js_shim/shim
// Dependencies: [1351, 2, 1354]
// Exports: consumeLogs, getExperimentCacher, getHttpClientAPI, isBlockedDomain, isUnsupportedBrowser, startFetchingBlockedDomains

// Module 1350 (js_shim/shim)
import LIBDISCORE_JSI from "LIBDISCORE_JSI" /* 1351 */;
import initLibdiscore from "initLibdiscore" /* 1354 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = LIBDISCORE_JSI.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(arg0) {
  const BlockedDomainsStore = LIBDISCORE_JSI.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(arg0);
};
export const consumeLogs = function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return LIBDISCORE_JSI.ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return LIBDISCORE_JSI.getHttpClientAPI();
};
export const rustMultiply = LIBDISCORE_JSI.rustMultiply;
export const crash = LIBDISCORE_JSI.crash;
export const generateLaunchSignature = LIBDISCORE_JSI.generateLaunchSignature;
export const getFluxApi = LIBDISCORE_JSI.getFluxApi;
export const isLibdiscoreInitialized = initLibdiscore.isLibdiscoreInitialized;

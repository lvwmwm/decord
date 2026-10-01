// Module ID: 1350
// Function ID: 1351
// Name: shim
// Dependencies: [1351, 2, 1354]
// Exports: consumeLogs, getExperimentCacher, getHttpClientAPI, isBlockedDomain, isUnsupportedBrowser, startFetchingBlockedDomains

// Module 1350 (shim)
import ExperimentCacher from "ExperimentCacher" /* 1351 */;
import initLibdiscore from "initLibdiscore" /* 1354 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(arg0) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(arg0);
};
export const consumeLogs = function consumeLogs() {
  const obj = ExperimentCacher;
  return obj.consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return ExperimentCacher.ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  const obj = ExperimentCacher;
  return obj.getHttpClientAPI();
};
export const rustMultiply = ExperimentCacher.rustMultiply;
export const crash = ExperimentCacher.crash;
export const generateLaunchSignature = ExperimentCacher.generateLaunchSignature;
export const getFluxApi = ExperimentCacher.getFluxApi;
export const isLibdiscoreInitialized = initLibdiscore.isLibdiscoreInitialized;

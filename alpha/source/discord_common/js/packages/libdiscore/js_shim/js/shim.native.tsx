// Module ID: 1362
// Function ID: 1363
// Name: shim
// Dependencies: [1363, 2, 1366]
// Exports: consumeLogs, getExperimentCacher, getHttpClientAPI, isBlockedDomain, isUnsupportedBrowser, startFetchingBlockedDomains

// Module 1362 (shim)
import ExperimentCacher from "ExperimentCacher" /* 1363 */;
import initLibdiscore from "initLibdiscore" /* 1366 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export function isBlockedDomain(arg0) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
}
export function startFetchingBlockedDomains(arg0) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(arg0);
}
export function consumeLogs() {
  const obj = ExperimentCacher;
  return obj.consumeLogs();
}
export function isUnsupportedBrowser() {
  return false;
}
export function getExperimentCacher() {
  return ExperimentCacher.ExperimentCacher;
}
export function getHttpClientAPI() {
  const obj = ExperimentCacher;
  return obj.getHttpClientAPI();
}
export const rustMultiply = ExperimentCacher.rustMultiply;
export const crash = ExperimentCacher.crash;
export const generateLaunchSignature = ExperimentCacher.generateLaunchSignature;
export const getFluxApi = ExperimentCacher.getFluxApi;
export const isLibdiscoreInitialized = initLibdiscore.isLibdiscoreInitialized;

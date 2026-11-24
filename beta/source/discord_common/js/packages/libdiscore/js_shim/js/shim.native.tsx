// Module ID: 1364
// Function ID: 1365
// Name: shim
// Dependencies: [1365, 2, 1368]
// Exports: consumeLogs, getExperimentCacher, getHttpClientAPI, isBlockedDomain, isUnsupportedBrowser, startFetchingBlockedDomains

// Module 1364 (shim)
import ExperimentCacher from "ExperimentCacher" /* 1365 */;
import initLibdiscore from "initLibdiscore" /* 1368 */;
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

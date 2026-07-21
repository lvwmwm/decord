// Module ID: 1844
// Function ID: 20239
// Name: isBlockedDomain
// Dependencies: [6, 7, 15]
// Exports: consumeLogs, getExperimentCacher, getHttpClientAPI, isBlockedDomain, isUnsupportedBrowser, startFetchingBlockedDomains

// Module 1844 (isBlockedDomain)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = require(dependencyMap[0]).BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(combined) {
  const BlockedDomainsStore = require(dependencyMap[0]).BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(combined);
};
export const consumeLogs = function consumeLogs() {
  return require(dependencyMap[0]).consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return require(dependencyMap[0]).ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return require(dependencyMap[0]).getHttpClientAPI();
};
export const rustMultiply = require("_classCallCheck").rustMultiply;
export const crash = require("_classCallCheck").crash;
export const generateLaunchSignature = require("_classCallCheck").generateLaunchSignature;
export const getFluxApi = require("_classCallCheck").getFluxApi;
export const isLibdiscoreInitialized = require("_possibleConstructorReturn").isLibdiscoreInitialized;

// Module ID: 12482
// Function ID: 95365
// Name: getCachedPrivateChannelObfuscation
// Dependencies: []
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12482 (getCachedPrivateChannelObfuscation)
const _module = require(dependencyMap[0]);
const obj = { 844175713: 1698824191, 1387159956: 1912603230, defaultConfig: { 0: null, -9223372036854775808: null }, variations: { [1]: { 0: null, -9223372036854775808: null }, [2]: { 0: null, -9223372036854775808: null }, [3]: { 0: null, -9223372036854775808: null } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = require(dependencyMap[2]).getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = require(dependencyMap[2]).PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  return store.getConfig({ location: GatewaySocket }).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = function useIsChannelMetadataObfuscationEnabled(App) {
  return store.useConfig({ location: App }).enableObfuscation;
};
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  return store.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
};

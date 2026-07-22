// Module ID: 12487
// Function ID: 95393
// Name: getCachedPrivateChannelObfuscation
// Dependencies: []
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12487 (getCachedPrivateChannelObfuscation)
const _module = require(dependencyMap[0]);
const obj = { y: -1002307585, DateToSystemTimezoneSetter: 1912603230, defaultConfig: { 9223372036854775807: true, 0: true }, variations: { [1]: { 9223372036854775807: "<string:1040334421>", 0: "<string:1040334338>" }, [2]: { 9223372036854775807: null, 0: null }, [3]: { 9223372036854775807: true, 0: true } } };
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

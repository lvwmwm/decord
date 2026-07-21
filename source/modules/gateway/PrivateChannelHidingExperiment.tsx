// Module ID: 12480
// Function ID: 95343
// Name: getCachedPrivateChannelObfuscation
// Dependencies: []
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12480 (getCachedPrivateChannelObfuscation)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "r", 0: "UpscaleSmallCapturedFramesExperiment", defaultConfig: {}, variations: { [1]: {}, [2]: {}, [3]: {} } };
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

// Module ID: 12473
// Function ID: 95320
// Name: getCachedPrivateChannelObfuscation
// Dependencies: []
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12473 (getCachedPrivateChannelObfuscation)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: -1824391169, -1845285747: 1912603103, defaultConfig: {}, variations: { [1]: { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { "Bool(true)": null, "Bool(true)": null }, [3]: {} } };
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

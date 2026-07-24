// Module ID: 12652
// Function ID: 97870
// Name: getCachedPrivateChannelObfuscation
// Dependencies: [1428, 2, 12653]
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12652 (getCachedPrivateChannelObfuscation)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: { [1]: { enableObfuscation: true, enableIntegrityCheck: false }, [2]: { enableObfuscation: true, enableIntegrityCheck: true }, [3]: { enableObfuscation: false, enableIntegrityCheck: false } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("PRIVATE_CHANNEL_OBFUSCATION_KEY").fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = require("PRIVATE_CHANNEL_OBFUSCATION_KEY").getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = require("PRIVATE_CHANNEL_OBFUSCATION_KEY").PRIVATE_CHANNEL_OBFUSCATION_KEY;
export const isChannelMetadataObfuscationEnabled = function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  return store.getConfig({ location: GatewaySocket }).enableObfuscation;
};
export const useIsChannelMetadataObfuscationEnabled = function useIsChannelMetadataObfuscationEnabled(App) {
  return store.useConfig({ location: App }).enableObfuscation;
};
export const isChannelMetadataIntegrityCheckEnabled = function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  return store.getConfig({ location: scheduleIntegrityCheck }).enableIntegrityCheck;
};

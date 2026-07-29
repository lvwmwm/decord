// Module ID: 12729
// Function ID: 12730
// Name: getCachedPrivateChannelObfuscation
// Dependencies: [1452, 2, 12730]
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 12729 (getCachedPrivateChannelObfuscation)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { enableObfuscation: true, enableIntegrityCheck: false }, 3: { enableObfuscation: true, enableIntegrityCheck: true } };
obj[3] = { enableObfuscation: false, enableIntegrityCheck: false };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: obj });
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

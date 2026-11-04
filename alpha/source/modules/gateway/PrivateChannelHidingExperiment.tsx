// Module ID: 15792
// Function ID: 15793
// Name: PrivateChannelHidingExperiment
// Dependencies: [1449, 2, 15793]
// Exports: isChannelMetadataIntegrityCheckEnabled, isChannelMetadataObfuscationEnabled, useIsChannelMetadataObfuscationEnabled

// Module 15792 (PrivateChannelHidingExperiment)
import PrivateChannelHidingExperimentCache from "PrivateChannelHidingExperimentCache" /* 15793 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-private-channel-hiding", kind: "user", defaultConfig: { enableObfuscation: false, enableIntegrityCheck: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableObfuscation: true, enableIntegrityCheck: false }, 3: { enableObfuscation: true, enableIntegrityCheck: true } };
obj2[3] = { enableObfuscation: false, enableIntegrityCheck: false };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperiment.tsx");

export const getCachedPrivateChannelObfuscation = PrivateChannelHidingExperimentCache.getCachedPrivateChannelObfuscation;
export const PRIVATE_CHANNEL_OBFUSCATION_KEY = PrivateChannelHidingExperimentCache.PRIVATE_CHANNEL_OBFUSCATION_KEY;
export function isChannelMetadataObfuscationEnabled(GatewaySocket) {
  const obj = { location: GatewaySocket };
  return closure_0.getConfig(obj).enableObfuscation;
}
export function useIsChannelMetadataObfuscationEnabled(App) {
  const obj = { location: App };
  return closure_0.useConfig(obj).enableObfuscation;
}
export function isChannelMetadataIntegrityCheckEnabled(scheduleIntegrityCheck) {
  const obj = { location: scheduleIntegrityCheck };
  return closure_0.getConfig(obj).enableIntegrityCheck;
}

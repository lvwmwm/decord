// Module ID: 12481
// Function ID: 95347
// Name: PRIVATE_CHANNEL_OBFUSCATION_KEY
// Dependencies: []
// Exports: getCachedPrivateChannelObfuscation

// Module 12481 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = require(dependencyMap[0]).Storage;
  return null != Storage.get("private_channel_obfuscation");
};

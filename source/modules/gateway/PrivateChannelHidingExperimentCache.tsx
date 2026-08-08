// Module ID: 12939
// Function ID: 12940
// Name: PRIVATE_CHANNEL_OBFUSCATION_KEY
// Dependencies: [595, 2]
// Exports: getCachedPrivateChannelObfuscation

// Module 12939 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
const private_channel_obfuscation = "private_channel_obfuscation";
const result = require("set").fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = require(595) /* Storage */.Storage;
  return null != Storage.get(private_channel_obfuscation);
};

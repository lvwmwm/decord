// Module ID: 12602
// Function ID: 97553
// Name: PRIVATE_CHANNEL_OBFUSCATION_KEY
// Dependencies: [587, 2]
// Exports: getCachedPrivateChannelObfuscation

// Module 12602 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
const result = require("set").fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = require(587) /* Storage */.Storage;
  return null != Storage.get("private_channel_obfuscation");
};

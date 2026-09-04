// Module ID: 13596
// Function ID: 13597
// Name: PRIVATE_CHANNEL_OBFUSCATION_KEY
// Dependencies: [592, 2]
// Exports: getCachedPrivateChannelObfuscation

// Module 13596 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 592 */;

const private_channel_obfuscation = "private_channel_obfuscation";
const result = set.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};

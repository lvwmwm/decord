// Module ID: 13669
// Function ID: 13670
// Name: PRIVATE_CHANNEL_OBFUSCATION_KEY
// Dependencies: [510, 2]
// Exports: getCachedPrivateChannelObfuscation

// Module 13669 (PRIVATE_CHANNEL_OBFUSCATION_KEY)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 510 */;

const private_channel_obfuscation = "private_channel_obfuscation";
const result = set.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};

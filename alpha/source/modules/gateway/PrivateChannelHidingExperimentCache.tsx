// Module ID: 14036
// Function ID: 14037
// Name: PrivateChannelHidingExperimentCache
// Dependencies: [510, 2]
// Exports: getCachedPrivateChannelObfuscation

// Module 14036 (PrivateChannelHidingExperimentCache)
import Storage2 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const private_channel_obfuscation = "private_channel_obfuscation";
const result = size.fileFinishedImporting("modules/gateway/PrivateChannelHidingExperimentCache.tsx");

export const PRIVATE_CHANNEL_OBFUSCATION_KEY = "private_channel_obfuscation";
export const getCachedPrivateChannelObfuscation = function getCachedPrivateChannelObfuscation() {
  const Storage = Storage2.Storage;
  return null != Storage.get(private_channel_obfuscation);
};

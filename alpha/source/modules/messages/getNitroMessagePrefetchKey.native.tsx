// Module ID: 8925
// Function ID: 8926
// Name: getNitroMessagePrefetchKey
// Dependencies: [1378, 8926, 2]
// Exports: getNitroMessagePrefetchKey

// Module 8925 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(8926);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

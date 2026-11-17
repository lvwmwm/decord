// Module ID: 9081
// Function ID: 9082
// Name: getNitroMessagePrefetchKey
// Dependencies: [1380, 9082, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9081 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9082);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

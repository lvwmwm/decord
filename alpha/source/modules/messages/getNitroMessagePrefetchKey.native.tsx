// Module ID: 9070
// Function ID: 9071
// Name: getNitroMessagePrefetchKey
// Dependencies: [1380, 9071, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9070 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9071);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

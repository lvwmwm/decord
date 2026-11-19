// Module ID: 8461
// Function ID: 8462
// Name: getNitroMessagePrefetchKey
// Dependencies: [1380, 8462, 2]
// Exports: getNitroMessagePrefetchKey

// Module 8461 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(8462);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

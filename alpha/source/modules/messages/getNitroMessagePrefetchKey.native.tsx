// Module ID: 8967
// Function ID: 8968
// Name: getNitroMessagePrefetchKey
// Dependencies: [1379, 8968, 2]
// Exports: getNitroMessagePrefetchKey

// Module 8967 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(8968);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

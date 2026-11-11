// Module ID: 9004
// Function ID: 9005
// Name: getNitroMessagePrefetchKey
// Dependencies: [1377, 9005, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9004 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9005);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

// Module ID: 9954
// Function ID: 9955
// Name: getNitroMessagePrefetchKey
// Dependencies: [1377, 9955, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9954 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9955);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

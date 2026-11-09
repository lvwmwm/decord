// Module ID: 9921
// Function ID: 9922
// Name: getNitroMessagePrefetchKey
// Dependencies: [1377, 9922, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9921 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9922);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

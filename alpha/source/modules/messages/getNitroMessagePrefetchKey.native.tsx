// Module ID: 9986
// Function ID: 9987
// Name: getNitroMessagePrefetchKey
// Dependencies: [1377, 9987, 2]
// Exports: getNitroMessagePrefetchKey

// Module 9986 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(9987);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

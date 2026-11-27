// Module ID: 8968
// Function ID: 8969
// Name: getNitroMessagePrefetchKey
// Dependencies: [1379, 8969, 2]
// Exports: getNitroMessagePrefetchKey

// Module 8968 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(8969);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

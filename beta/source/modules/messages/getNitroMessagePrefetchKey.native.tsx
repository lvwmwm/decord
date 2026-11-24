// Module ID: 8580
// Function ID: 8581
// Name: getNitroMessagePrefetchKey
// Dependencies: [1378, 8581, 2]
// Exports: getNitroMessagePrefetchKey

// Module 8580 (getNitroMessagePrefetchKey)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let tmp;
const NitroFetchExperiment = tmp(8581);
const result = size.fileFinishedImporting("modules/messages/getNitroMessagePrefetchKey.native.tsx");

export function getNitroMessagePrefetchKey(channelId) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const tmpResult = NitroFetchExperiment;
    return tmpResult.getMessagePrefetchKey(channelId);
  }
}

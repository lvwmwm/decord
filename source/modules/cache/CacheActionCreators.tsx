// Module ID: 14400
// Function ID: 110105
// Name: _writeCaches
// Dependencies: [5, 1348, 6708, 686, 2]
// Exports: clearCaches, writeCaches

// Module 14400 (_writeCaches)
import asyncGeneratorStep from "asyncGeneratorStep";
import { ChannelLoader } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _writeCaches() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/cache/CacheActionCreators.tsx");

export const writeCaches = function writeCaches(arg0) {
  return _writeCaches(...arguments);
};
export const clearCaches = function clearCaches() {
  importDefault(686).dispatch({ type: "CLEAR_CACHES", reason: "Requested by user", preventWritingCachesAgainThisSession: true, resetSocket: true });
};

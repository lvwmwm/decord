// Module ID: 10708
// Function ID: 83431
// Name: useIsVoiceChannelFull
// Dependencies: [1838, 3758, 4146, 482, 566, 4312, 2]
// Exports: default, useIsVoiceChannelLocked

// Module 10708 (useIsVoiceChannelFull)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const _require = arg0;
  const items = [closure_4, _createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => callback(outer1_1[5]).isChannelFull(callback, outer1_4, outer1_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  const items1 = [channel];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null == closure_0;
    if (!tmp) {
      tmp = !outer1_3.can(outer1_5.CONNECT, closure_0);
    }
    return tmp;
  }, items1);
};

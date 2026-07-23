// Module ID: 15808
// Function ID: 122036
// Name: useCanConnect
// Dependencies: [1348, 1838, 3758, 4146, 482, 566, 4312, 2]
// Exports: default

// Module 15808 (useCanConnect)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/hooks/useCanConnect.tsx");

export default function useCanConnect(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_4, _createForOfIteratorHelperLoose, closure_5];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => {
    const channel = outer1_2.getChannel(callback);
    const obj = {};
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = outer1_4.can(outer1_6.CONNECT, channel);
      }
      tmp = isPrivateResult;
    }
    obj.canConnect = tmp;
    let isChannelFullResult = null == channel;
    if (!isChannelFullResult) {
      isChannelFullResult = callback(outer1_1[6]).isChannelFull(channel, outer1_5, outer1_3);
      const obj3 = callback(outer1_1[6]);
    }
    obj.isAtMaxCapacity = isChannelFullResult;
    return obj;
  }, items1);
};

// Module ID: 12181
// Function ID: 95414
// Name: usePrivateChannelCall
// Dependencies: [5, 31, 1348, 566, 1212, 8874, 4140, 2]
// Exports: default

// Module 12181 (usePrivateChannelCall)
import getPrivateChannelCall from "getPrivateChannelCall";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default function usePrivateChannelCall(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [arg1, arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = outer1_5.getChannel(outer1_5.getDMFromUserId(callback));
    if (null != channel) {
      if (channel.isPrivate()) {
        let obj = {};
        ({ text: obj2.text, accessibilityHint: obj2.accessibilityHint, inCall: obj2.inCall } = callback2(8874)(channel, callback2));
        return obj;
      }
    }
    obj = {};
    const intl = callback(1212).intl;
    const string = intl.string;
    const t = callback(1212).t;
    if (callback2) {
      let stringResult = string(t["7AWk50"]);
    } else {
      stringResult = string(t["EZgS+9"]);
    }
    obj.text = stringResult;
    const intl2 = callback(1212).intl;
    const string2 = intl2.string;
    const t2 = callback(1212).t;
    if (callback2) {
      let string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
    obj.accessibilityHint = string2Result;
    obj.inCall = false;
    return obj;
  }, items1);
  obj = { text: stateFromStoresObject.text, inCall: stateFromStoresObject.inCall, accessibilityHint: stateFromStoresObject.accessibilityHint, handlePress: React.useCallback(callback(tmp), items2) };
  // CreateGeneratorClosureLongIndex (0x67)
  items2 = [arg0, arg1, arg2];
  return obj;
};

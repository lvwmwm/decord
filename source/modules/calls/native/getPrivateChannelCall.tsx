// Module ID: 8835
// Function ID: 69655
// Name: getPrivateChannelCall
// Dependencies: [4146, 653, 4341, 7668, 1212, 8836, 2]
// Exports: default

// Module 8835 (getPrivateChannelCall)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NOOP_NULL } from "ME";

const require = arg1;
const result = require("getVoiceChannelKeyByChannelId").fileFinishedImporting("modules/calls/native/getPrivateChannelCall.tsx");

export default function getPrivateChannelCall(id) {
  let flag = arg1;
  let handleStartCall = arg2;
  let handleJoinCall = arg3;
  const _require = id;
  if (arg1 === undefined) {
    flag = false;
  }
  if (handleStartCall === undefined) {
    handleStartCall = _require(flag[2]).handleStartCall;
  }
  if (handleJoinCall === undefined) {
    handleJoinCall = _require(flag[2]).handleJoinCall;
  }
  const isInChannelResult = handleStartCall.isInChannel(id.id);
  let obj = _require(flag[3]);
  if (id.isSystemDM()) {
    const C = handleJoinCall;
    let stringResult2 = null;
  } else if (isInChannelResult) {
    let stringResult = null;
    if (!flag) {
      class C {
        constructor() {
          obj = closure_0(c1[5]);
          return obj.handleDisconnect(closure_0);
        }
      }
      const intl4 = _require(flag[4]).intl;
      stringResult = intl4.string(_require(flag[4]).t["4ry6yi"]);
    }
    class C {
      constructor() {
        obj = closure_0(c1[5]);
        return obj.handleDisconnect(closure_0);
      }
    }
    stringResult2 = stringResult;
  } else if (checkIsCallActiveResult) {
    if (flag) {
      class C {
        constructor() {
          return handleJoinCall(closure_0, c1);
        }
      }
    } else {
      class C {
        constructor() {
          return handleJoinCall(closure_0, c1);
        }
      }
      const intl3 = _require(flag[4]).intl;
      intl3.string(_require(flag[4]).t.fdEeb5);
    }
    class C {
      constructor() {
        return handleJoinCall(closure_0, c1);
      }
    }
  } else {
    class C {
      constructor() {
        return handleStartCall(closure_0, c1);
      }
    }
    const intl = _require(flag[4]).intl;
    const string = intl.string;
    const t = _require(flag[4]).t;
    if (flag) {
      stringResult2 = string(t["7AWk50"]);
    } else {
      stringResult2 = string(t["EZgS+9"]);
    }
    const intl2 = _require(flag[4]).intl;
    const string2 = intl2.string;
    const t2 = _require(flag[4]).t;
    if (flag) {
      let string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
  }
  obj = { text: stringResult2 };
  if (null != string2Result) {
    stringResult2 = string2Result;
  }
  obj.accessibilityHint = stringResult2;
  obj.inCall = isInChannelResult;
  obj.onPress = C;
  return obj;
};

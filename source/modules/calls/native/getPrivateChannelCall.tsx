// Module ID: 8827
// Function ID: 69602
// Name: getPrivateChannelCall
// Dependencies: []
// Exports: default

// Module 8827 (getPrivateChannelCall)
let closure_2 = importDefault(dependencyMap[0]);
const NOOP_NULL = arg1(dependencyMap[1]).NOOP_NULL;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/calls/native/getPrivateChannelCall.tsx");

export default function getPrivateChannelCall(id) {
  let flag = arg1;
  let handleStartCall = arg2;
  let handleJoinCall = arg3;
  const arg1 = id;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  if (handleStartCall === undefined) {
    handleStartCall = arg1(dependencyMap[2]).handleStartCall;
  }
  const inChannel = handleStartCall;
  if (handleJoinCall === undefined) {
    handleJoinCall = arg1(dependencyMap[2]).handleJoinCall;
  }
  const NOOP_NULL = handleJoinCall;
  const isInChannelResult = inChannel.isInChannel(id.id);
  let obj = arg1(dependencyMap[3]);
  if (id.isSystemDM()) {
    const C = NOOP_NULL;
    let stringResult2 = null;
  } else if (isInChannelResult) {
    let stringResult = null;
    if (!flag) {
      class C {
        constructor() {
          obj = id(closure_1[5]);
          return obj.handleDisconnect(id);
        }
      }
      const intl4 = arg1(dependencyMap[4]).intl;
      stringResult = intl4.string(arg1(dependencyMap[4]).t.4ry6yi);
    }
    class C {
      constructor() {
        obj = id(closure_1[5]);
        return obj.handleDisconnect(id);
      }
    }
    stringResult2 = stringResult;
  } else if (checkIsCallActiveResult) {
    if (flag) {
      class C {
        constructor() {
          return handleJoinCall(id, closure_1);
        }
      }
    } else {
      class C {
        constructor() {
          return handleJoinCall(id, closure_1);
        }
      }
      const intl3 = arg1(dependencyMap[4]).intl;
      intl3.string(arg1(dependencyMap[4]).t.fdEeb5);
    }
    class C {
      constructor() {
        return handleJoinCall(id, closure_1);
      }
    }
  } else {
    class C {
      constructor() {
        return handleStartCall(id, closure_1);
      }
    }
    const intl = arg1(dependencyMap[4]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[4]).t;
    if (flag) {
      stringResult2 = string(t.7AWk50);
    } else {
      stringResult2 = string(t.EZgS+9);
    }
    const intl2 = arg1(dependencyMap[4]).intl;
    const string2 = intl2.string;
    const t2 = arg1(dependencyMap[4]).t;
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

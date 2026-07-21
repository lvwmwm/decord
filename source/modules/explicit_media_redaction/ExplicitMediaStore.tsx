// Module ID: 5667
// Function ID: 48700
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5667 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_11 = {};
  let closure_12 = {};
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = 14 * importDefault(dependencyMap[5]).Millis.DAY;
let closure_9 = Object.freeze([]);
let closure_10;
let closure_11 = {};
let closure_12 = {};
let tmp2 = (Store) => {
  class ExplicitMediaStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ExplicitMediaStore);
      obj = closure_6(ExplicitMediaStore);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ExplicitMediaStore;
  callback2(ExplicitMediaStore, Store);
  let obj = {
    key: "getFpMessageInfo",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getChannelFpInfo",
    value(arg0) {
      let tmp = closure_12[arg0];
      if (null == tmp) {
        tmp = closure_9;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "canSubmitFpReport",
    value(arg0) {
      let tmp2 = null != tmp;
      if (tmp2) {
        let tmp3 = !tmp.reportSubmit;
        if (tmp3) {
          tmp3 = callback(closure_2[6]).age(tmp.messageId) < closure_8;
          const obj = callback(closure_2[6]);
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "validContentScanVersion",
    get() {
      if (obj.isSensitiveContentSelfHarmEnabled("ExplicitMediaStore.validContentScanVersion")) {
        let num3 = 5;
        if (tmp) {
          num3 = closure_10;
        }
        return num3;
      } else {
        let num2 = 4;
        if (tmp) {
          num2 = closure_10;
        }
        const _Math = Math;
        return Math.min(num2, 4);
      }
      const obj = ExplicitMediaStore(closure_2[7]);
    }
  };
  return callback(ExplicitMediaStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "FalsePositiveStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  LOGOUT: function handleLogout() {
    reset();
  },
  CONNECTION_OPEN: function handleConnectionOpen(explicitContentScanVersion) {
    let closure_10 = explicitContentScanVersion.explicitContentScanVersion;
    reset();
  },
  MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function handleFalsePositiveCreate(attachments) {
    let channelId;
    let messageId;
    ({ messageId, channelId } = attachments);
    const obj = { messageId, channelId, attachments: attachments.attachments, reportSubmit: false };
    let tmp = closure_12[channelId];
    if (null == tmp) {
      tmp = closure_9;
    }
    const items = [...tmp, obj];
    closure_12[channelId] = items;
    closure_11[messageId] = obj;
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function handleFalsePositiveSubmit(messageId) {
    messageId = messageId.messageId;
    const arg1 = messageId;
    const channelId = messageId.channelId;
    if (null != closure_12[channelId]) {
      closure_12[channelId] = arr.map((messageId) => {
        let tmp = messageId;
        if (messageId.messageId === messageId) {
          const obj = {};
          const merged = Object.assign(messageId);
          obj["reportSubmit"] = true;
          tmp = obj;
        }
        return tmp;
      });
      const obj = {};
      const merged = Object.assign(closure_11[messageId]);
      obj["reportSubmit"] = true;
      closure_11[messageId] = obj;
    }
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaStore.tsx");

export default tmp2;

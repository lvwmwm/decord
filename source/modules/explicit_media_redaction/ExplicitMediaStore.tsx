// Module ID: 5671
// Function ID: 48735
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 21, 5672, 566, 686, 2]

// Module 5671 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
import apexExperiment from "apexExperiment";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
let closure_8 = 14 * require("set").Millis.DAY;
let closure_9 = Object.freeze([]);
let c10;
let closure_11 = {};
let closure_12 = {};
let tmp2 = ((Store) => {
  class ExplicitMediaStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ExplicitMediaStore);
      obj = outer1_6(ExplicitMediaStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ExplicitMediaStore, Store);
  let obj = {
    key: "getFpMessageInfo",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getChannelFpInfo",
    value(arg0) {
      let tmp = outer1_12[arg0];
      if (null == tmp) {
        tmp = outer1_9;
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
          tmp3 = outer1_1(outer1_2[6]).age(tmp.messageId) < outer1_8;
          const obj = outer1_1(outer1_2[6]);
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
          num3 = outer1_10;
        }
        return num3;
      } else {
        let num2 = 4;
        if (tmp) {
          num2 = outer1_10;
        }
        const _Math = Math;
        return Math.min(num2, 4);
      }
      obj = ExplicitMediaStore(outer1_2[7]);
    }
  };
  return callback(ExplicitMediaStore, items);
})(require("initialize").Store);
tmp2.displayName = "FalsePositiveStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    let tmp = dependencyMap[channelId];
    if (null == tmp) {
      tmp = closure_9;
    }
    const items = [...tmp, obj];
    dependencyMap[channelId] = items;
    closure_11[messageId] = obj;
  },
  MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function handleFalsePositiveSubmit(messageId) {
    messageId = messageId.messageId;
    const channelId = messageId.channelId;
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((messageId) => {
        let tmp = messageId;
        if (messageId.messageId === messageId) {
          const obj = {};
          const merged = Object.assign(messageId);
          obj["reportSubmit"] = true;
          tmp = obj;
        }
        return tmp;
      });
      let obj = {};
      let merged = Object.assign(table[messageId]);
      obj["reportSubmit"] = true;
      table[messageId] = obj;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaStore.tsx");

export default tmp2;

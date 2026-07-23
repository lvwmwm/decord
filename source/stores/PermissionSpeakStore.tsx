// Module ID: 12676
// Function ID: 98728
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1838, 587, 566, 686, 2]

// Module 12676 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Storage from "Storage";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c11 = false;
let c12 = true;
let c13 = false;
let tmp2 = ((Store) => {
  class PermissionSpeakStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PermissionSpeakStore);
      obj = outer1_5(PermissionSpeakStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PermissionSpeakStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8);
      const Storage = PermissionSpeakStore(outer1_1[7]).Storage;
      outer1_13 = Storage.get("hideSuppressWarning") || outer1_13;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isAFKChannel",
    value() {
      const channel = outer1_7.getChannel(outer1_10);
      if (null == channel) {
        return false;
      } else {
        const guild = outer1_8.getGuild(channel.getGuildId());
        return null != guild && channel.id === guild.afkChannelId;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldShowWarning",
    value() {
      const channel = outer1_7.getChannel(outer1_10);
      return !(null != channel && channel.isGuildStageVoice() || outer1_12);
    }
  };
  items[2] = obj;
  return callback(PermissionSpeakStore, items);
})(require("initialize").Store);
tmp2.displayName = "PermissionSpeakStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let c11 = false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c9 = null;
    let c10 = null;
    let c12 = true;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      let flag = arg0;
      if (outer1_9 === sessionId.sessionId) {
        if (outer1_11 !== sessionId.suppress) {
          const suppress = sessionId.suppress;
          outer1_11 = suppress;
          let outer1_12 = !suppress;
        }
        if (outer1_10 !== sessionId.channelId) {
          outer1_10 = sessionId.channelId;
          outer1_12 = !outer1_11;
        }
        let tmp4 = outer1_13;
        if (!outer1_13) {
          tmp4 = null == sessionId.channelId;
        }
        flag = true;
        if (tmp4) {
          outer1_12 = true;
          flag = true;
        }
      }
      return flag;
    }, false);
  },
  PERMISSION_CLEAR_SUPPRESS_WARNING: function handleClearWarning(forever) {
    let c12 = true;
    if (forever.forever) {
      let c13 = true;
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set("hideSuppressWarning", c13);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PermissionSpeakStore.tsx");

export default tmp2;

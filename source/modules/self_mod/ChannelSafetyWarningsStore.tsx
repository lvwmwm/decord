// Module ID: 9101
// Function ID: 71335
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 664, 566, 686, 2]

// Module 9101 (_isNativeReflectConstruct)
import closure_0 from "set";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function processChannel(safetyWarnings) {
  safetyWarnings = safetyWarnings.safetyWarnings;
  if (null != safetyWarnings) {
    dependencyMap[safetyWarnings.id] = safetyWarnings;
    if (safetyWarnings.some((type) => {
      let tmp = type.type === outer1_7.INAPPROPRIATE_CONVERSATION_TIER_1;
      if (!tmp) {
        tmp = type.type === outer1_7.INAPPROPRIATE_CONVERSATION_TIER_2;
      }
      if (tmp) {
        tmp = null != type.dismiss_timestamp;
      }
      if (tmp) {
        const _Date = Date;
        const date = new Date(type.dismiss_timestamp);
        const _Date2 = Date;
        const time = date.getTime();
        tmp = time <= Date.now() - outer1_6;
      }
      return tmp;
    })) {
      obj.add(safetyWarnings.id);
    } else {
      obj.delete(safetyWarnings.id);
    }
  }
  if (null == safetyWarnings) {
    if (null != dependencyMap[safetyWarnings.id]) {
      const id = safetyWarnings.id;
      delete tmp2[tmp];
    }
    set.delete(safetyWarnings.id);
  }
}
function handleConnectionOpen() {
  let closure_9 = {};
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((arg0) => {
    outer1_12(arg0);
  });
}
let closure_6 = 5 * require("set").Millis.SECOND;
let obj = { STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", INAPPROPRIATE_CONVERSATION_TIER_1: 2, [2]: "INAPPROPRIATE_CONVERSATION_TIER_1", INAPPROPRIATE_CONVERSATION_TIER_2: 3, [3]: "INAPPROPRIATE_CONVERSATION_TIER_2", LIKELY_ATO: 4, [4]: "LIKELY_ATO" };
let closure_8 = [];
let closure_9 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class ChannelSafetyWarningsStore {
    constructor() {
      self = this;
      tmp = ChannelSafetyWarningsStore(this, ChannelSafetyWarningsStore);
      obj = outer1_3(ChannelSafetyWarningsStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelSafetyWarningsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getChannelSafetyWarning",
    value(arg0, arg1) {
      let closure_0 = arg1;
      let found;
      if (null != outer1_9[arg0]) {
        found = arr.find((id) => id.id === closure_0);
      }
      return found;
    }
  };
  items[1] = obj;
  obj = {
    key: "getChannelSafetyWarnings",
    value(arg0) {
      let tmp = outer1_9[arg0];
      if (null == tmp) {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasShownInitialTooltipForChannel",
    value(arg0) {
      return outer1_10.has(arg0);
    }
  };
  return callback(ChannelSafetyWarningsStore, items);
})(require("initialize").Store);
obj = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    processChannel(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap[channel.id]) {
      const id = channel.id;
      delete tmp2[tmp];
    }
    set.delete(channel.id);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((arg0) => {
      outer1_12(arg0);
    });
  },
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function handleChannelSafetyWarningFeedback(arg0) {
    let channelId;
    let closure_0;
    let initialize;
    ({ channelId, warningId: closure_0, feedbackType: initialize } = arg0);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (id.id === closure_0) {
          const obj = {};
          const merged = Object.assign(id);
          obj["feedback_type"] = initialize;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function handleClearChannelSafetyWarnings(channelId) {
    channelId = channelId.channelId;
    set.delete(channelId);
    if (null != dependencyMap[channelId]) {
      dependencyMap[channelId] = arr.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["dismiss_timestamp"] = undefined;
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    let channelId;
    let closure_0;
    ({ channelId, warningIds: closure_0 } = arg0);
    let initialize;
    if (null != dependencyMap[channelId]) {
      const _Date = Date;
      const date = new Date();
      initialize = date.toISOString();
      dependencyMap[channelId] = arr.map((id) => {
        let tmp = id;
        if (closure_0.includes(id.id)) {
          const obj = {};
          const merged = Object.assign(id);
          obj["dismiss_timestamp"] = initialize;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function handleAcknowledgeChannelSafetyWarningTooltip(channelId) {
    set.add(channelId.channelId);
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default tmp3;
export const SafetyWarningTypes = obj;
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };

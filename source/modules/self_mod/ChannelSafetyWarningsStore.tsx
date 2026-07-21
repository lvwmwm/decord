// Module ID: 9093
// Function ID: 71270
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9093 (_isNativeReflectConstruct)
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
    closure_9[safetyWarnings.id] = safetyWarnings;
    if (safetyWarnings.some((type) => {
      let tmp = type.type === closure_7.INAPPROPRIATE_CONVERSATION_TIER_1;
      if (!tmp) {
        tmp = type.type === closure_7.INAPPROPRIATE_CONVERSATION_TIER_2;
      }
      if (tmp) {
        tmp = null != type.dismiss_timestamp;
      }
      if (tmp) {
        const _Date = Date;
        const date = new Date(type.dismiss_timestamp);
        const _Date2 = Date;
        const time = date.getTime();
        tmp = time <= Date.now() - closure_6;
      }
      return tmp;
    })) {
      obj.add(safetyWarnings.id);
    } else {
      obj.delete(safetyWarnings.id);
    }
  }
  if (null == safetyWarnings) {
    if (null != closure_9[safetyWarnings.id]) {
      const id = safetyWarnings.id;
      delete r3[r2];
    }
    set.delete(safetyWarnings.id);
  }
}
function handleConnectionOpen() {
  let closure_9 = {};
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((arg0) => {
    callback(arg0);
  });
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = 5 * importDefault(dependencyMap[6]).Millis.SECOND;
let obj = { STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", INAPPROPRIATE_CONVERSATION_TIER_1: 2, [2]: "INAPPROPRIATE_CONVERSATION_TIER_1", INAPPROPRIATE_CONVERSATION_TIER_2: 3, [3]: "INAPPROPRIATE_CONVERSATION_TIER_2", LIKELY_ATO: 4, [4]: "LIKELY_ATO" };
let closure_8 = [];
let closure_9 = {};
const set = new Set();
let tmp3 = (Store) => {
  class ChannelSafetyWarningsStore {
    constructor() {
      self = this;
      tmp = ChannelSafetyWarningsStore(this, ChannelSafetyWarningsStore);
      obj = closure_3(ChannelSafetyWarningsStore);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ChannelSafetyWarningsStore;
  callback2(ChannelSafetyWarningsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getChannelSafetyWarning",
    value(arg0, arg1) {
      const ChannelSafetyWarningsStore = arg1;
      let found;
      if (null != closure_9[arg0]) {
        found = arr.find((id) => id.id === arg1);
      }
      return found;
    }
  };
  items[1] = obj;
  obj = {
    key: "getChannelSafetyWarnings",
    value(arg0) {
      let tmp = closure_9[arg0];
      if (null == tmp) {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasShownInitialTooltipForChannel",
    value(arg0) {
      return set.has(arg0);
    }
  };
  return callback(ChannelSafetyWarningsStore, items);
}(importDefault(dependencyMap[7]).Store);
obj = {
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    processChannel(channel.channel);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != closure_9[channel.id]) {
      const id = channel.id;
      delete r3[r2];
    }
    set.delete(channel.id);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const item = channels.forEach((arg0) => {
      callback(arg0);
    });
  },
  CONNECTION_OPEN: handleConnectionOpen,
  CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
  CHANNEL_SAFETY_WARNING_FEEDBACK: function handleChannelSafetyWarningFeedback(arg0) {
    let channelId;
    ({ channelId, warningId: closure_0, feedbackType: closure_1 } = arg0);
    if (null != closure_9[channelId]) {
      closure_9[channelId] = arr.map((id) => {
        let tmp = id;
        if (id.id === closure_0) {
          const obj = {};
          const merged = Object.assign(id);
          obj["feedback_type"] = closure_1;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  CLEAR_CHANNEL_SAFETY_WARNINGS: function handleClearChannelSafetyWarnings(channelId) {
    channelId = channelId.channelId;
    set.delete(channelId);
    if (null != closure_9[channelId]) {
      closure_9[channelId] = arr.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["dismiss_timestamp"] = undefined;
        return obj;
      });
    }
  },
  DISMISS_CHANNEL_SAFETY_WARNINGS: function handleDismissChannelSafetyWarnings(arg0) {
    let channelId;
    ({ channelId, warningIds: closure_0 } = arg0);
    let closure_1;
    if (null != closure_9[channelId]) {
      const _Date = Date;
      const date = new Date();
      closure_1 = date.toISOString();
      closure_9[channelId] = arr.map((id) => {
        let tmp = id;
        if (closure_0.includes(id.id)) {
          const obj = {};
          const merged = Object.assign(id);
          obj["dismiss_timestamp"] = closure_1;
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
tmp3 = new tmp3(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/self_mod/ChannelSafetyWarningsStore.tsx");

export default tmp3;
export const SafetyWarningTypes = obj;
export const SafetyWarningFeedbackTypes = { UPVOTE: 0, [0]: "UPVOTE", DOWNVOTE: 1, [1]: "DOWNVOTE" };

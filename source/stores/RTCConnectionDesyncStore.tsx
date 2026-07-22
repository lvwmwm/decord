// Module ID: 12567
// Function ID: 96667
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12567 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function upsert(id, guildId, channelId) {
  let obj = { userId: id.id, channelId };
  const tmp = new closure_8(obj);
  let tmp3 = guildId;
  if (null == guildId) {
    tmp3 = closure_14;
  }
  const result = importDefaultResult.set(id.id, makeSortedVoiceState(tmp, tmp3, id.id));
  obj = { type: ParticipantTypes.USER, user: id, id: id.id, streamId: null, voiceState: tmp, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: importDefault(dependencyMap[14]).getName(guildId, channelId, id) };
  const obj3 = importDefault(dependencyMap[14]);
  const tmp2 = makeSortedVoiceState;
  obj.userAvatarDecoration = guildId(dependencyMap[15]).getAvatarDecoration(id, guildId);
  obj.localVideoDisabled = false;
  obj.isPoppedOut = false;
  const result1 = importDefaultResult1.set(id.id, obj);
}
function deleteUserDesyncData(userId) {
  let deleteResult = importDefaultResult.delete(userId);
  const deleteResult1 = importDefaultResult1.delete(userId);
  if (!deleteResult) {
    deleteResult = deleteResult1;
  }
  if (!deleteResult) {
    deleteResult = deleteResult2;
  }
  return deleteResult;
}
function retryFailedUsers() {
  const channelId = store.getChannelId();
  const arg1 = channelId;
  if (null == channelId) {
    return false;
  } else {
    const channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const importDefault = guildId;
    let closure_2 = false;
    const item = set.forEach((arg0) => {
      if (null == voiceStateForChannel.getVoiceStateForChannel(channelId, arg0)) {
        const user = user.getUser(arg0);
        if (null != user) {
          let closure_2 = true;
          set.delete(arg0);
          callback(user, guildId, channelId);
        }
      } else {
        set.delete(arg0);
      }
    });
    return closure_2;
  }
}
function handleReset() {
  importDefaultResult.clear();
  importDefaultResult1.clear();
  set.clear();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const makeSortedVoiceState = arg1(dependencyMap[10]).makeSortedVoiceState;
({ ME: closure_14, RTCConnectionStates: closure_15 } = arg1(dependencyMap[11]));
const ParticipantTypes = arg1(dependencyMap[12]).ParticipantTypes;
let importDefaultResult = importDefault(dependencyMap[13]);
importDefaultResult = new importDefaultResult();
let importDefaultResult1 = importDefault(dependencyMap[13]);
importDefaultResult1 = new importDefaultResult1();
const set = new Set();
let tmp8 = (Store) => {
  class RTCConnectionDesyncStore {
    constructor() {
      self = this;
      tmp = closure_3(this, RTCConnectionDesyncStore);
      obj = closure_6(RTCConnectionDesyncStore);
      tmp2 = closure_5;
      if (closure_20()) {
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
  const arg1 = RTCConnectionDesyncStore;
  callback2(RTCConnectionDesyncStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_12, closure_11, closure_9, closure_10);
      const items = [closure_11];
      this.syncWith(items, closure_23);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "desyncedVoiceStatesCount",
    get() {
      return closure_17.size();
    }
  };
  items[1] = obj;
  obj = {
    key: "getDesyncedUserIds",
    value() {
      return closure_17.keys();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDesyncedVoiceStates",
    value() {
      return closure_17.values();
    }
  };
  items[4] = {
    key: "getDesyncedParticipants",
    value() {
      return closure_18.values();
    }
  };
  return callback(RTCConnectionDesyncStore, items);
}(importDefault(dependencyMap[17]).Store);
tmp8.displayName = "RTCConnectionDesyncStore";
tmp8 = new tmp8(importDefault(dependencyMap[18]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    handleReset();
  },
  VOICE_CHANNEL_SELECT: handleReset,
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let context;
    let state;
    ({ state, context } = arg0);
    let tmp = context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      if (state === constants.DISCONNECTED) {
        handleReset();
      }
      tmp = tmp3;
    }
    return tmp;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const channelId = store.getChannelId();
    const arg1 = channelId;
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((arg0, channelId) => {
        let tmp2 = channelId.channelId === channelId;
        if (tmp2) {
          tmp2 = callback(tmp);
        }
        if (!tmp2) {
          tmp2 = arg0;
        }
        return tmp2;
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleRTCConnectionClientConnect(context) {
    let userIds;
    ({ userIds, guildId: closure_0, channelId: closure_1 } = context);
    let reduced = context.context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      reduced = userIds.reduce((arg0, arg1) => {
        if (null != voiceStateForChannel.getVoiceStateForChannel(closure_1, arg1)) {
          return arg0;
        } else {
          const user = user.getUser(arg1);
          if (null == user) {
            set.add(arg1);
            let flag = arg0;
          } else {
            callback(user, closure_0, closure_1);
            flag = true;
          }
          return flag;
        }
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(arg0) {
    let context;
    let userId;
    ({ userId, context } = arg0);
    let tmp = context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      tmp = deleteUserDesyncData(userId);
    }
    return tmp;
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    handleReset();
  },
  VOICE_CHANNEL_SELECT: handleReset,
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let context;
    let state;
    ({ state, context } = arg0);
    let tmp = context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      if (state === constants.DISCONNECTED) {
        handleReset();
      }
      tmp = tmp3;
    }
    return tmp;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const channelId = store.getChannelId();
    const arg1 = channelId;
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((arg0, channelId) => {
        let tmp2 = channelId.channelId === channelId;
        if (tmp2) {
          tmp2 = callback(tmp);
        }
        if (!tmp2) {
          tmp2 = arg0;
        }
        return tmp2;
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleRTCConnectionClientConnect(context) {
    let userIds;
    ({ userIds, guildId: closure_0, channelId: closure_1 } = context);
    let reduced = context.context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      reduced = userIds.reduce((arg0, arg1) => {
        if (null != voiceStateForChannel.getVoiceStateForChannel(closure_1, arg1)) {
          return arg0;
        } else {
          const user = user.getUser(arg1);
          if (null == user) {
            set.add(arg1);
            let flag = arg0;
          } else {
            callback(user, closure_0, closure_1);
            flag = true;
          }
          return flag;
        }
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(arg0) {
    let context;
    let userId;
    ({ userId, context } = arg0);
    let tmp = context === arg1(dependencyMap[16]).MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      tmp = deleteUserDesyncData(userId);
    }
    return tmp;
  }
};
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default tmp8;

// Module ID: 12681
// Function ID: 98823
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4147, 1348, 4202, 1849, 4146, 4203, 653, 4148, 4163, 4319, 9088, 4227, 566, 686, 2]

// Module 12681 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import getAvatarDecoration from "getAvatarDecoration";
import initialize from "initialize";
import dispatcher from "dispatcher";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { makeSortedVoiceState } from "_isNativeReflectConstruct";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import importDefaultResult from "CachedEntriesMap";
import importDefaultResult1 from "CachedEntriesMap";
import set from "_possibleConstructorReturn";

let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function upsert(id, closure_2, channelId) {
  let obj = { userId: id.id, channelId };
  const tmp = new closure_8(obj);
  let tmp3 = closure_2;
  if (null == closure_2) {
    tmp3 = closure_14;
  }
  const result = importDefaultResult.set(id.id, makeSortedVoiceState(tmp, tmp3, id.id));
  obj = { type: ParticipantTypes.USER, user: id, id: id.id, streamId: null, voiceState: tmp, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: importDefault(4319).getName(closure_2, channelId, id) };
  const obj3 = importDefault(4319);
  const tmp2 = makeSortedVoiceState;
  obj.userAvatarDecoration = require(9088) /* getAvatarDecoration */.getAvatarDecoration(id, closure_2);
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
  if (null == channelId) {
    return false;
  } else {
    channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let c2 = false;
    const item = set.forEach((arg0) => {
      if (null == outer1_12.getVoiceStateForChannel(channelId, arg0)) {
        const user = outer1_11.getUser(arg0);
        if (null != user) {
          let c2 = true;
          outer1_19.delete(arg0);
          outer1_21(user, guildId, channelId);
        }
      } else {
        outer1_19.delete(arg0);
      }
    });
    return c2;
  }
}
function handleReset() {
  importDefaultResult.clear();
  importDefaultResult1.clear();
  set.clear();
}
({ ME: closure_14, RTCConnectionStates: closure_15 } = ME);
importDefaultResult = new importDefaultResult();
importDefaultResult1 = new importDefaultResult1();
let set = new Set();
let tmp8 = ((Store) => {
  class RTCConnectionDesyncStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, RTCConnectionDesyncStore);
      obj = outer1_6(RTCConnectionDesyncStore);
      tmp2 = outer1_5;
      if (outer1_20()) {
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
  callback2(RTCConnectionDesyncStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_12, outer1_11, outer1_9, outer1_10);
      const items = [outer1_11];
      this.syncWith(items, outer1_23);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "desyncedVoiceStatesCount",
    get() {
      return outer1_17.size();
    }
  };
  items[1] = obj;
  obj = {
    key: "getDesyncedUserIds",
    value() {
      return outer1_17.keys();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDesyncedVoiceStates",
    value() {
      return outer1_17.values();
    }
  };
  items[4] = {
    key: "getDesyncedParticipants",
    value() {
      return outer1_18.values();
    }
  };
  return callback(RTCConnectionDesyncStore, items);
})(require("initialize").Store);
tmp8.displayName = "RTCConnectionDesyncStore";
tmp8 = new tmp8(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    handleReset();
  },
  VOICE_CHANNEL_SELECT: handleReset,
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let context;
    let state;
    ({ state, context } = arg0);
    let tmp = context === require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT;
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
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((arg0, channelId) => {
        let tmp2 = channelId.channelId === channelId;
        if (tmp2) {
          tmp2 = outer1_22(tmp);
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
    let importDefault;
    let require;
    let userIds;
    ({ userIds, guildId: require, channelId: importDefault } = context);
    let reduced = context.context === require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      reduced = userIds.reduce((arg0, arg1) => {
        if (null != outer1_12.getVoiceStateForChannel(closure_1, arg1)) {
          return arg0;
        } else {
          const user = outer1_11.getUser(arg1);
          if (null == user) {
            outer1_19.add(arg1);
            let flag = arg0;
          } else {
            outer1_21(user, closure_0, closure_1);
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
    let tmp = context === require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      tmp = deleteUserDesyncData(userId);
    }
    return tmp;
  }
});
let result = set.fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default tmp8;

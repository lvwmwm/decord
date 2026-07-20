// Module ID: 10516
// Function ID: 82150
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10516 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeTimeoutKey(context, userId) {
  return "" + context + ":" + userId;
}
function clearUser(arg0, arg1) {
  let tmp = arg1;
  let tmp2 = arg2;
  if (arg2 === undefined) {
    tmp2 = null;
  }
  if (null != closure_9[arg0]) {
    let tmp4 = tmp;
    if (null == tmp) {
      tmp4 = NULL_STRING_GUILD_ID;
    }
    if (null != tmp3[tmp4]) {
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      for (let num = 0; num < values.length; num = num + 1) {
        let tmp8 = values[num];
        let tmp9 = tmp2 !== tmp8 && null != tmp2;
        if (!tmp9) {
          delete r2[r11];
          let tmp10 = closure_10;
          let tmp11 = makeTimeoutKey;
          if (null != tmp2) {
            tmp8 = tmp2;
          }
          let tmp11Result = tmp11(tmp8, arg0);
          delete r10[r1];
        }
      }
      if (null == tmp) {
        tmp = NULL_STRING_GUILD_ID;
      }
      closure_9[arg0][tmp] = tmp5;
    }
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const NULL_STRING_GUILD_ID = arg1(dependencyMap[5]).NULL_STRING_GUILD_ID;
const MediaEngineContextTypes = arg1(dependencyMap[6]).MediaEngineContextTypes;
let closure_7 = null;
let closure_8 = null;
let closure_9 = {};
let closure_10 = {};
let tmp2 = (Store) => {
  class VideoStreamStore {
    constructor() {
      self = this;
      tmp = VideoStreamStore(this, VideoStreamStore);
      obj = closure_3(VideoStreamStore);
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
  let closure_0 = VideoStreamStore;
  callback2(VideoStreamStore, Store);
  let obj = {
    key: "getStreamId",
    value(arg0, arg1) {
      let tmp = arg1;
      let DEFAULT = arg2;
      if (arg2 === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      let streamId;
      if (null != closure_9[arg0]) {
        if (null == tmp) {
          tmp = closure_5;
        }
        if (null != tmp3[tmp]) {
          if (null != tmp5[DEFAULT]) {
            streamId = tmp6.streamId;
          }
        }
      }
      return streamId;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getUserStreamData",
    value(arg0, arg1) {
      let tmp = arg1;
      let DEFAULT = arg2;
      if (arg2 === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      let tmp4;
      if (null != closure_9[arg0]) {
        if (null == tmp) {
          tmp = closure_5;
        }
        if (null != tmp3[tmp]) {
          tmp4 = tmp5[DEFAULT];
        }
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTimedoutVideos",
    value() {
      return closure_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTimedoutVideo",
    value(arg0, arg1) {
      return closure_10[closure_12(undefined, arg0, arg1)];
    }
  };
  return callback(VideoStreamStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "VideoStreamStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    const id = user.user.id;
    const sessionId = user.sessionId;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(user) {
    const id = user.user.id;
    const sessionId = user.sessionId;
  },
  RTC_CONNECTION_VIDEO: function handleVideo(arg0) {
    let context;
    let guildId;
    let streamId;
    let userId;
    ({ userId, guildId, streamId, context } = arg0);
    if (null != streamId) {
      if (!(userId in closure_9)) {
        closure_9[userId] = {};
      }
      let tmp6 = guildId;
      if (null == guildId) {
        tmp6 = NULL_STRING_GUILD_ID;
      }
      let obj = closure_9[userId][tmp6];
      if (null == obj) {
        obj = {};
      }
      if (null == guildId) {
        guildId = NULL_STRING_GUILD_ID;
      }
      obj = {};
      const merged = Object.assign(obj);
      obj = { streamId };
      obj[context] = obj;
      closure_9[userId][guildId] = obj;
      makeTimeoutKey(context, userId);
      delete r1[r0];
    } else {
      clearUser(userId, guildId, context);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, arg1) => {
      let channelId;
      let guildId;
      let userId;
      ({ userId, channelId, guildId } = arg1);
      if (null == channelId) {
        if (userId === closure_7) {
          if (tmp !== closure_8) {
            return arg0;
          } else {
            let closure_9 = {};
            let closure_10 = {};
          }
        }
        return true;
      }
      if (null == channelId) {
        let tmp5;
        if (null != closure_9[userId]) {
          let tmp6 = guildId;
          if (null == guildId) {
            tmp6 = closure_5;
          }
          tmp5 = tmp4[tmp6];
        }
        if (null != tmp5) {
          callback(userId, guildId);
        }
      }
      return arg0;
    }, false);
  },
  VIDEO_STREAM_READY_TIMEOUT: function handleVideoStreamReadyTimeout(arg0) {
    let mediaContext;
    let streamKey;
    let userId;
    let videoStreamId;
    ({ userId, mediaContext } = arg0);
    ({ videoStreamId, streamKey } = arg0);
    closure_10[makeTimeoutKey(mediaContext, userId)] = { videoStreamId, userId, streamKey, mediaContext };
  },
  CLEAR_VIDEO_STREAM_READY_TIMEOUT: function handleClearVideoStreamTimeout(arg0) {
    if (null == closure_10[closure_12(undefined, arg0.mediaContext, arg0.userId)]) {
      return false;
    } else {
      delete r1[r2];
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/VideoStreamStore.tsx");

export default tmp2;

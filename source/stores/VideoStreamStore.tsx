// Module ID: 10533
// Function ID: 82247
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 4191, 566, 686, 2]

// Module 10533 (_isNativeReflectConstruct)
import DesktopSources from "DesktopSources";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NULL_STRING_GUILD_ID } from "ME";
import { MediaEngineContextTypes } from "DesktopSources";

function _isNativeReflectConstruct() {
  let DesktopSources = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return DesktopSources;
  }
  const result = _isNativeReflectConstruct();
}
function makeTimeoutKey(mediaContext, userId) {
  return "" + mediaContext + ":" + userId;
}
function clearUser(arg0, arg1) {
  let tmp5 = arg1;
  let tmp6 = arg2;
  if (arg2 === undefined) {
    tmp6 = null;
  }
  if (null != dependencyMap[arg0]) {
    let tmp8 = tmp5;
    if (null == tmp5) {
      tmp8 = NULL_STRING_GUILD_ID;
    }
    if (null != tmp7[tmp8]) {
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      for (let num = 0; num < values.length; num = num + 1) {
        let tmp12 = values[num];
        let tmp13 = tmp6 !== tmp12 && null != tmp6;
        if (!tmp13) {
          delete tmp2[tmp4];
          let tmp14 = closure_10;
          let tmp15 = makeTimeoutKey;
          if (null != tmp6) {
            tmp12 = tmp6;
          }
          let tmp15Result = tmp15(tmp12, arg0);
          delete tmp3[tmp];
        }
      }
      if (null == tmp5) {
        tmp5 = NULL_STRING_GUILD_ID;
      }
      dependencyMap[arg0][tmp5] = tmp9;
    }
  }
}
let c7 = null;
let c8 = null;
let closure_9 = {};
let closure_10 = {};
let tmp2 = ((Store) => {
  class VideoStreamStore {
    constructor() {
      self = this;
      tmp = VideoStreamStore(this, VideoStreamStore);
      obj = outer1_3(VideoStreamStore);
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
  callback2(VideoStreamStore, Store);
  let obj = {
    key: "getStreamId",
    value(arg0, arg1) {
      let tmp = arg1;
      let DEFAULT = arg2;
      if (arg2 === undefined) {
        DEFAULT = outer1_6.DEFAULT;
      }
      let streamId;
      if (null != outer1_9[arg0]) {
        if (null == tmp) {
          tmp = outer1_5;
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
        DEFAULT = outer1_6.DEFAULT;
      }
      let tmp4;
      if (null != outer1_9[arg0]) {
        if (null == tmp) {
          tmp = outer1_5;
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
      return outer1_10;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTimedoutVideo",
    value(arg0, arg1) {
      return outer1_10[outer1_12(undefined, arg0, arg1)];
    }
  };
  return callback(VideoStreamStore, items);
})(require("initialize").Store);
tmp2.displayName = "VideoStreamStore";
tmp2 = new tmp2(require("dispatcher"), {
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
      if (!(userId in dependencyMap)) {
        dependencyMap[userId] = {};
      }
      let tmp8 = guildId;
      if (null == guildId) {
        tmp8 = NULL_STRING_GUILD_ID;
      }
      let obj = dependencyMap[userId][tmp8];
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
      dependencyMap[userId][guildId] = obj;
      makeTimeoutKey(context, userId);
      delete tmp2[tmp];
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
        if (userId === outer1_7) {
          if (tmp !== outer1_8) {
            return arg0;
          } else {
            const outer1_9 = {};
            const outer1_10 = {};
          }
        }
        return true;
      }
      if (null == channelId) {
        let tmp5;
        if (null != outer1_9[userId]) {
          let tmp6 = guildId;
          if (null == guildId) {
            tmp6 = outer1_5;
          }
          tmp5 = tmp4[tmp6];
        }
        if (null != tmp5) {
          outer1_13(userId, guildId);
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
    if (null == table[makeTimeoutKey(undefined, arg0.mediaContext, arg0.userId)]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/VideoStreamStore.tsx");

export default tmp2;

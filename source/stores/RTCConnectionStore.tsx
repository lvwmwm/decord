// Module ID: 4202
// Function ID: 36125
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4144, 1194, 4203, 653, 4191, 3, 4204, 4226, 686, 12805, 4015, 4206, 4944, 12806, 12808, 566, 675, 1934, 2]

// Module 4202 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_4944 from "module_4944";
import useIsSpatialAudioAvailable from "useIsSpatialAudioAvailable";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { MediaEngineContextTypes } from "DesktopSources";
import importDefaultResult from "_getPrototypeOf";
import promise from "expandLocation";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createRTCConnection(guildId, channelId) {
  if (null == closure_16) {
    const _Error = Error;
    const error = new Error("Creating RTCConnection without session.");
    throw error;
  } else {
    const id = store.getId();
    _default = _default(4204).default;
    let obj = { userId: id, sessionId: closure_16, guildId, channelId, joinVoiceId: c28 };
    const prototype2 = _default.prototype;
    _default = new _default(obj);
    _default.on(_default(4226).RTCConnectionEvent.State, (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_STATE", state: closure_0 };
        const merged = Object.assign(closure_1);
        const merged1 = Object.assign(closure_2);
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let _isNativeReflectConstruct = arg3;
      let closure_4 = arg4;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_VIDEO", guildId: mediaEngineConnectionId, channelId: closure_1, userId: closure_2, streamId: _isNativeReflectConstruct, rtcServerId: closure_4, context: outer2_14.DEFAULT, mediaEngineConnectionId: mediaEngineConnectionId.getMediaEngineConnectionId() };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.Ping, (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_PING", pings: closure_0, quality: closure_1 };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.OutboundLossRate, (arg0) => {
      let closure_0 = arg0;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_LOSS_RATE", lossRate: closure_0 };
        return obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.Speaking, (id) => {
      if (null != closure_22) {
        closure_22.setSpeaking(id, arg1);
      }
    });
    _default.on(_default(4226).RTCConnectionEvent.Flags, (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_FLAGS", flags: closure_1, userId: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.UsersMerged, (userIds, context) => {
      let obj = outer1_1(outer1_2[13]);
      obj = { type: "RTC_CONNECTION_USERS_MERGED", userIds, context };
      obj.dispatch(obj);
    });
    _default.on(_default(4226).RTCConnectionEvent.ClientConnect, (arg0) => {
      let closure_0 = arg0;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_CLIENT_CONNECT", userIds: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.ClientDisconnect, (arg0) => {
      let closure_0 = arg0;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_CLIENT_DISCONNECT", userId: closure_0, guildId: closure_0.guildId, channelId: closure_0.channelId, context: closure_0.context };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.Platform, (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_PLATFORM", platform: closure_1, userId: closure_0, channelId: closure_2 };
        obj.dispatch(obj);
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.SecureFramesUpdate, () => {
      outer1_1(outer1_2[13]).wait(() => {
        outer2_1(outer2_2[13]).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
    });
    _default.on(_default(4226).RTCConnectionEvent.RosterMapUpdate, (arg0) => {
      let closure_0 = arg0;
      outer1_1(outer1_2[13]).wait(() => {
        let obj = outer2_1(outer2_2[13]);
        obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: closure_0 };
        obj.dispatch(obj);
      });
    });
    let tmp30 = importDefault(12805);
    const prototype3 = tmp30.prototype;
    tmp30 = new tmp30(store.getId(), channelId);
    let c22 = tmp30;
    let c20 = null;
    let c23 = false;
    let c24 = false;
    return _default;
  }
}
function destroyRTCConnection(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (null == redux) {
    return false;
  } else {
    let obj = { duration: redux.getDuration() };
    const mediaSessionId = redux.getMediaSessionId();
    let tmp = null;
    if (null != mediaSessionId) {
      tmp = mediaSessionId;
    }
    obj.mediaSessionId = tmp;
    obj.rtcConnectionId = redux.getRTCConnectionId();
    obj.wasEverMultiParticipant = c23;
    obj.wasEverRtcConnected = c24;
    obj.voiceStateAnalytics = c22;
    obj.channelId = redux.channelId;
    obj = importDefault(686);
    obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: redux.getMediaEngineConnectionId() };
    obj.dispatch(obj);
    redux.destroy();
    redux = null;
    c22 = null;
    let c27 = false;
    if (flag) {
      let c25 = null;
    }
  }
}
function clearPendingVoiceChannelSelect() {
  if (null != _null) {
    const timeout = _null.timeout;
    timeout.stop();
    _null = null;
  }
}
function handleClearRemoteDisconnectVoiceChannelId() {
  let c19 = null;
}
function handleChannelDelete(arg0) {
  if (null != redux) {
    if (redux.channelId === tmp.id) {
      destroyRTCConnection();
    }
  }
  return false;
}
function handleRtcAction() {
  return true;
}
({ RTCConnectionStates: closure_11, AppStates: closure_12, RTCConnectionQuality: closure_13 } = ME);
importDefaultResult = new importDefaultResult("RTCConnectionStore");
let closure_18 = [];
let c19 = null;
let c20 = null;
let c21 = null;
let c22 = null;
let c23 = false;
let c24 = false;
let c25 = null;
let c26 = null;
let c27 = false;
let c28 = null;
let c29 = null;
let tmp5 = ((Store) => {
  class RTCConnectionStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, RTCConnectionStore);
      obj = outer1_6(RTCConnectionStore);
      tmp2 = outer1_5;
      if (outer1_31()) {
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
  callback2(RTCConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_8, outer1_10);
      const result = RTCConnectionStore(outer1_2[19]).setVideoToggleAnalyticsParams(this.getRTCConnectionId, this.getMediaSessionId);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getRTCConnection",
    value() {
      return outer1_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      if (null != outer1_15) {
        let DISCONNECTED = outer1_15.state;
      } else {
        DISCONNECTED = outer1_11.DISCONNECTED;
      }
      return DISCONNECTED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isConnected",
    value() {
      return this.getState() === outer1_11.RTC_CONNECTED;
    }
  };
  items[4] = {
    key: "isDisconnected",
    value() {
      return this.getState() === outer1_11.DISCONNECTED;
    }
  };
  items[5] = {
    key: "getRemoteDisconnectVoiceChannelId",
    value() {
      return outer1_19;
    }
  };
  items[6] = {
    key: "getLastSessionVoiceChannelId",
    value() {
      return outer1_21;
    }
  };
  items[7] = {
    key: "setLastSessionVoiceChannelId",
    value(arg0) {
      const outer1_21 = arg0;
    }
  };
  items[8] = {
    key: "getGuildId",
    value() {
      let guildId;
      if (null != outer1_15) {
        guildId = outer1_15.guildId;
      }
      return guildId;
    }
  };
  items[9] = {
    key: "getChannelId",
    value() {
      let channelId;
      if (null != outer1_15) {
        channelId = outer1_15.channelId;
      }
      return channelId;
    }
  };
  items[10] = {
    key: "getHostname",
    value() {
      let str = "";
      if (null != outer1_15) {
        str = outer1_15.hostname;
      }
      return str;
    }
  };
  items[11] = {
    key: "getQuality",
    value() {
      if (null != outer1_15) {
        let UNKNOWN = outer1_15.quality;
      } else {
        UNKNOWN = outer1_13.UNKNOWN;
      }
      return UNKNOWN;
    }
  };
  items[12] = {
    key: "getPings",
    value() {
      if (null != outer1_15) {
        let pings = outer1_15.getPings();
      } else {
        pings = outer1_18;
      }
      return pings;
    }
  };
  items[13] = {
    key: "getAveragePing",
    value() {
      let num = 0;
      if (null != outer1_15) {
        let averagePing;
        if (null != outer1_15) {
          averagePing = obj.getAveragePing();
        }
        num = averagePing;
        obj = outer1_15;
      }
      return num;
    }
  };
  items[14] = {
    key: "getLastPing",
    value() {
      let lastPing;
      if (null != outer1_15) {
        lastPing = outer1_15.getLastPing();
      }
      return lastPing;
    }
  };
  items[15] = {
    key: "getOutboundLossRate",
    value() {
      let outboundLossRate;
      if (null != outer1_15) {
        outboundLossRate = outer1_15.getOutboundLossRate();
      }
      return outboundLossRate;
    }
  };
  items[16] = {
    key: "getMediaSessionId",
    value() {
      let mediaSessionId;
      if (null != outer1_15) {
        mediaSessionId = outer1_15.getMediaSessionId();
      }
      return mediaSessionId;
    }
  };
  items[17] = {
    key: "getRTCConnectionId",
    value() {
      let rTCConnectionId;
      if (null != outer1_15) {
        rTCConnectionId = outer1_15.getRTCConnectionId();
      }
      return rTCConnectionId;
    }
  };
  items[18] = {
    key: "getDuration",
    value() {
      let duration;
      if (null != outer1_15) {
        duration = outer1_15.getDuration();
      }
      if (null == duration) {
        let duration1;
        if (null != outer1_20) {
          duration1 = outer1_20.duration;
        }
        duration = duration1;
      }
      return duration;
    }
  };
  items[19] = {
    key: "getLastRTCConnectionState",
    value() {
      return outer1_20;
    }
  };
  items[20] = {
    key: "getPacketStats",
    value() {
      let packetStats;
      if (null != outer1_15) {
        packetStats = outer1_15.getPacketStats();
      }
      return packetStats;
    }
  };
  items[21] = {
    key: "getVoiceStateStats",
    value() {
      let stats;
      if (null != outer1_22) {
        stats = outer1_22.getStats();
      }
      return stats;
    }
  };
  items[22] = {
    key: "getUserVoiceSettingsStats",
    value(arg0) {
      let userVoiceSettingsStats;
      if (null != outer1_22) {
        userVoiceSettingsStats = outer1_22.getUserVoiceSettingsStats(arg0);
      }
      return userVoiceSettingsStats;
    }
  };
  items[23] = {
    key: "getWasEverMultiParticipant",
    value() {
      return outer1_23;
    }
  };
  items[24] = {
    key: "getWasEverRtcConnected",
    value() {
      return outer1_24;
    }
  };
  items[25] = {
    key: "getUserIds",
    value() {
      let userIds;
      if (null != outer1_15) {
        userIds = outer1_15.getUserIds();
      }
      return userIds;
    }
  };
  items[26] = {
    key: "getJoinVoiceId",
    value() {
      return outer1_28;
    }
  };
  items[27] = {
    key: "isUserConnected",
    value(arg0) {
      let isUserConnected;
      if (null != outer1_15) {
        isUserConnected = outer1_15.getIsUserConnected(arg0);
      }
      return isUserConnected;
    }
  };
  items[28] = {
    key: "getSecureFramesState",
    value() {
      let secureFramesState;
      if (null != outer1_15) {
        secureFramesState = outer1_15.getSecureFramesState();
      }
      return secureFramesState;
    }
  };
  items[29] = {
    key: "getSecureFramesRosterMapEntry",
    value(arg0) {
      let secureFramesRosterMap;
      if (null != outer1_15) {
        secureFramesRosterMap = outer1_15.getSecureFramesRosterMap();
      }
      let value;
      if (null != secureFramesRosterMap) {
        value = secureFramesRosterMap.get(arg0);
      }
      return value;
    }
  };
  items[30] = {
    key: "getLastNonZeroRemoteVideoSinkWantsTime",
    value() {
      return outer1_26;
    }
  };
  items[31] = {
    key: "getWasMoved",
    value() {
      return outer1_27;
    }
  };
  return callback(RTCConnectionStore, items);
})(require("initialize").Store);
tmp5.displayName = "RTCConnectionStore";
tmp5 = new tmp5(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let c19 = null;
    let c21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c16 = null;
    let c19 = null;
    let c21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
  },
  LOGOUT: function handleLogout() {
    let c25 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      let c24 = true;
      if (null != closure_15) {
        let closure_25 = require(4206) /* sleep */.now();
        const obj = require(4206) /* sleep */;
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_15) {
      let closure_25 = require(4206) /* sleep */.now();
      const obj = require(4206) /* sleep */;
    }
    return true;
  },
  RTC_CONNECTION_LOSS_RATE: handleRtcAction,
  RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(connection) {
    return connection.connection === closure_15;
  },
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
  RTC_CONNECTION_CLIENT_CONNECT: handleRtcAction,
  RTC_CONNECTION_CLIENT_DISCONNECT: handleRtcAction,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(context) {
    let tmp2 = context.context === MediaEngineContextTypes.DEFAULT;
    if (tmp2) {
      const _Object = Object;
      const entries = Object.entries(tmp);
      const tmp4 = !entries.some((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        let tmp3 = "any" !== tmp;
        if (tmp3) {
          tmp3 = 0 !== tmp2;
        }
        return tmp3;
      });
      if (!tmp4) {
        const _performance = performance;
        let closure_26 = performance.now();
      }
      tmp2 = !tmp4;
      const tmp5 = !tmp4;
    }
    return tmp2;
  },
  VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
    if (null != closure_15) {
      closure_15.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (null != outer1_22) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = outer1_23;
      if (!outer1_23) {
        let prop;
        if (null != outer1_22) {
          prop = obj2.getStats().max_voice_state_count;
        }
        let num = 0;
        if (null != prop) {
          num = prop;
        }
        tmp2 = num > 1;
        obj2 = outer1_22;
      }
      outer1_23 = tmp2;
      if (outer1_9.getId() !== userId.userId) {
        return arg0;
      } else {
        let tmp5 = null != outer1_29;
        if (tmp5) {
          tmp5 = userId.channelId === outer1_29.channelId;
        }
        if (tmp5) {
          outer1_34();
        }
        if (null != outer1_15) {
          if (userId.sessionId === outer1_16) {
            if (null == userId.guildId) {
              if (!tmp28) {
                outer1_33();
              }
              if (null != userId.channelId) {
                let outer1_19 = null;
                let outer1_21 = null;
                let prop1;
                outer1_15 = outer1_32(userId.guildId, userId.channelId);
                if (null != outer1_22) {
                  prop1 = obj6.getStats().max_voice_state_count;
                }
                let num8 = 0;
                if (null != prop1) {
                  num8 = prop1;
                }
                outer1_23 = num8 > 1;
                obj6 = outer1_22;
              }
              tmp28 = userId.guildId !== outer1_15.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              outer1_33();
            } else {
              outer1_15.setNextChannelId(userId.channelId);
              const outer1_27 = true;
              const outer1_28 = null;
              outer1_15.clearJoinVoiceId();
            }
          } else if (userId.guildId === outer1_15.guildId) {
            let tmp21 = null != outer1_8.getAwaitingRemoteSessionInfo();
            if (tmp21) {
              tmp21 = null != outer1_8.getRemoteSessionId();
            }
            if (!tmp21) {
              outer1_19 = outer1_15.channelId;
            }
            outer1_33();
          }
        } else {
          if (userId.sessionId === outer1_16) {
            if (null != userId.channelId) {
              if (!tmp5) {
                if (null != outer1_25) {
                  if (obj3.now() - outer1_25 >= 300000) {
                    outer1_1(outer1_2[13]).wait(() => outer2_0(outer2_2[17]).default.disconnect());
                    return arg0;
                  }
                  obj3 = outer1_0(outer1_2[16]);
                }
              }
              outer1_19 = null;
              outer1_21 = null;
              let prop2;
              outer1_15 = outer1_32(userId.guildId, userId.channelId);
              if (null != outer1_22) {
                prop2 = obj5.getStats().max_voice_state_count;
              }
              let num6 = 0;
              if (null != prop2) {
                num6 = prop2;
              }
              outer1_23 = num6 > 1;
              obj5 = outer1_22;
            }
          }
          return arg0;
        }
        return true;
      }
      obj = outer1_22;
    }, false);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let tmp = null == redux;
    if (!tmp) {
      let tmp2 = null != channelId.channelId;
      if (tmp2) {
        tmp2 = redux.channelId === channelId.channelId;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      destroyRTCConnection();
    }
    const joinVoiceId = channelId.joinVoiceId;
    (function setPendingVoiceChannelSelect(channelId) {
      let closure_0 = channelId;
      outer1_34();
      if (null != channelId.channelId) {
        const Timeout = outer1_0(outer1_2[15]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        timeout.start(30000, () => {
          outer2_17.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId });
          const outer2_29 = null;
        });
        const obj = {};
        ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
        obj.timeout = timeout;
        const outer1_29 = obj;
      }
    })(channelId);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (null != closure_15) {
      const result = closure_15.setNoiseCancellationEnabled(enabled.enabled);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleAudioSetAudioMixerSettings(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const enabled = context.settings.enabled;
      let result = null != enabled && enabled;
      if (result) {
        result = require(12806) /* useIsSpatialAudioAvailable */.isSpatialAudioAvailable("RTCConnectionStore");
        const obj = require(12806) /* useIsSpatialAudioAvailable */;
      }
      if (null != closure_15) {
        const result1 = closure_15.setSpatialAudioEnabled(result);
      }
    }
  },
  VOICE_SERVER_UPDATE: function handleVoiceServerUpdate(guildId) {
    let tmp = null != redux;
    if (tmp) {
      let tmp2 = null == guildId.guildId;
      if (!tmp2) {
        tmp2 = guildId.guildId === redux.guildId;
      }
      if (tmp2) {
        let tmp4 = null == guildId.channelId;
        if (!tmp4) {
          tmp4 = guildId.channelId === redux.getNextChannelId();
        }
        if (tmp4) {
          redux.connect(guildId.endpoint, guildId.token);
        }
        tmp2 = tmp4;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: handleClearRemoteDisconnectVoiceChannelId,
  REMOTE_SESSION_CONNECT: handleClearRemoteDisconnectVoiceChannelId,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function handleClearLastSessionVoiceChannelId() {
    let c21 = null;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    if (null != redux) {
      if (redux.guildId === tmp.id) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_DELETE: function handleCallDelete(arg0) {
    if (null != redux) {
      if (redux.channelId === tmp) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    let tmp = state.state === constants2.ACTIVE;
    if (tmp) {
      tmp = null != redux;
    }
    if (tmp) {
      redux.resetBackoff("App state is active");
    }
    return false;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSimulcastDebugOverrideChanged(arg0) {
    if (null != closure_15) {
      const result = closure_15.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  }
});
let closure_30 = tmp5;
require("expandLocation").then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_rtc_state = outer1_30.getState();
  });
});
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let c19 = null;
    let c21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let c16 = null;
    let c19 = null;
    let c21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
  },
  LOGOUT: function handleLogout() {
    let c25 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      let c24 = true;
      if (null != closure_15) {
        let closure_25 = require(4206) /* sleep */.now();
        const obj = require(4206) /* sleep */;
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_15) {
      let closure_25 = require(4206) /* sleep */.now();
      const obj = require(4206) /* sleep */;
    }
    return true;
  },
  RTC_CONNECTION_LOSS_RATE: handleRtcAction,
  RTC_CONNECTION_UPDATE_ID: function handleRtcConnectionUpdateId(connection) {
    return connection.connection === closure_15;
  },
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: handleRtcAction,
  RTC_CONNECTION_CLIENT_CONNECT: handleRtcAction,
  RTC_CONNECTION_CLIENT_DISCONNECT: handleRtcAction,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function handleRtcConnectionRemoteVideoSinkWants(context) {
    let tmp2 = context.context === MediaEngineContextTypes.DEFAULT;
    if (tmp2) {
      const _Object = Object;
      const entries = Object.entries(tmp);
      const tmp4 = !entries.some((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        let tmp3 = "any" !== tmp;
        if (tmp3) {
          tmp3 = 0 !== tmp2;
        }
        return tmp3;
      });
      if (!tmp4) {
        const _performance = performance;
        let closure_26 = performance.now();
      }
      tmp2 = !tmp4;
      const tmp5 = !tmp4;
    }
    return tmp2;
  },
  VIDEO_SIZE_UPDATE: function handleVideoSizeUpdate(arg0) {
    if (null != closure_15) {
      closure_15.setVideoSize(tmp, tmp2, tmp3);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (null != outer1_22) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = outer1_23;
      if (!outer1_23) {
        let prop;
        if (null != outer1_22) {
          prop = obj2.getStats().max_voice_state_count;
        }
        let num = 0;
        if (null != prop) {
          num = prop;
        }
        tmp2 = num > 1;
        obj2 = outer1_22;
      }
      outer1_23 = tmp2;
      if (outer1_9.getId() !== userId.userId) {
        return arg0;
      } else {
        let tmp5 = null != outer1_29;
        if (tmp5) {
          tmp5 = userId.channelId === outer1_29.channelId;
        }
        if (tmp5) {
          outer1_34();
        }
        if (null != outer1_15) {
          if (userId.sessionId === outer1_16) {
            if (null == userId.guildId) {
              if (!tmp28) {
                outer1_33();
              }
              if (null != userId.channelId) {
                let outer1_19 = null;
                let outer1_21 = null;
                let prop1;
                outer1_15 = outer1_32(userId.guildId, userId.channelId);
                if (null != outer1_22) {
                  prop1 = obj6.getStats().max_voice_state_count;
                }
                let num8 = 0;
                if (null != prop1) {
                  num8 = prop1;
                }
                outer1_23 = num8 > 1;
                obj6 = outer1_22;
              }
              tmp28 = userId.guildId !== outer1_15.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              outer1_33();
            } else {
              outer1_15.setNextChannelId(userId.channelId);
              const outer1_27 = true;
              const outer1_28 = null;
              outer1_15.clearJoinVoiceId();
            }
          } else if (userId.guildId === outer1_15.guildId) {
            let tmp21 = null != outer1_8.getAwaitingRemoteSessionInfo();
            if (tmp21) {
              tmp21 = null != outer1_8.getRemoteSessionId();
            }
            if (!tmp21) {
              outer1_19 = outer1_15.channelId;
            }
            outer1_33();
          }
        } else {
          if (userId.sessionId === outer1_16) {
            if (null != userId.channelId) {
              if (!tmp5) {
                if (null != outer1_25) {
                  if (obj3.now() - outer1_25 >= 300000) {
                    outer1_1(outer1_2[13]).wait(() => outer2_0(outer2_2[17]).default.disconnect());
                    return arg0;
                  }
                  obj3 = outer1_0(outer1_2[16]);
                }
              }
              outer1_19 = null;
              outer1_21 = null;
              let prop2;
              outer1_15 = outer1_32(userId.guildId, userId.channelId);
              if (null != outer1_22) {
                prop2 = obj5.getStats().max_voice_state_count;
              }
              let num6 = 0;
              if (null != prop2) {
                num6 = prop2;
              }
              outer1_23 = num6 > 1;
              obj5 = outer1_22;
            }
          }
          return arg0;
        }
        return true;
      }
      obj = outer1_22;
    }, false);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let tmp = null == redux;
    if (!tmp) {
      let tmp2 = null != channelId.channelId;
      if (tmp2) {
        tmp2 = redux.channelId === channelId.channelId;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      destroyRTCConnection();
    }
    const joinVoiceId = channelId.joinVoiceId;
    (function setPendingVoiceChannelSelect(channelId) {
      let closure_0 = channelId;
      outer1_34();
      if (null != channelId.channelId) {
        const Timeout = outer1_0(outer1_2[15]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        timeout.start(30000, () => {
          outer2_17.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: channelId.joinVoiceId, channelId: channelId.channelId, guildId: channelId.guildId });
          const outer2_29 = null;
        });
        const obj = {};
        ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
        obj.timeout = timeout;
        const outer1_29 = obj;
      }
    })(channelId);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (null != closure_15) {
      const result = closure_15.setNoiseCancellationEnabled(enabled.enabled);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleAudioSetAudioMixerSettings(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else {
      const enabled = context.settings.enabled;
      let result = null != enabled && enabled;
      if (result) {
        result = require(12806) /* useIsSpatialAudioAvailable */.isSpatialAudioAvailable("RTCConnectionStore");
        const obj = require(12806) /* useIsSpatialAudioAvailable */;
      }
      if (null != closure_15) {
        const result1 = closure_15.setSpatialAudioEnabled(result);
      }
    }
  },
  VOICE_SERVER_UPDATE: function handleVoiceServerUpdate(guildId) {
    let tmp = null != redux;
    if (tmp) {
      let tmp2 = null == guildId.guildId;
      if (!tmp2) {
        tmp2 = guildId.guildId === redux.guildId;
      }
      if (tmp2) {
        let tmp4 = null == guildId.channelId;
        if (!tmp4) {
          tmp4 = guildId.channelId === redux.getNextChannelId();
        }
        if (tmp4) {
          redux.connect(guildId.endpoint, guildId.token);
        }
        tmp2 = tmp4;
      }
      tmp = tmp2;
    }
    return tmp;
  },
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: handleClearRemoteDisconnectVoiceChannelId,
  REMOTE_SESSION_CONNECT: handleClearRemoteDisconnectVoiceChannelId,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function handleClearLastSessionVoiceChannelId() {
    let c21 = null;
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    if (null != redux) {
      if (redux.guildId === tmp.id) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  CALL_DELETE: function handleCallDelete(arg0) {
    if (null != redux) {
      if (redux.channelId === tmp) {
        destroyRTCConnection();
      }
    }
    return false;
  },
  APP_STATE_UPDATE: function handleFocus(state) {
    let tmp = state.state === constants2.ACTIVE;
    if (tmp) {
      tmp = null != redux;
    }
    if (tmp) {
      redux.resetBackoff("App state is active");
    }
    return false;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSimulcastDebugOverrideChanged(arg0) {
    if (null != closure_15) {
      const result = closure_15.setSimulcastDebugOverride(tmp, tmp2, tmp3);
    }
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/RTCConnectionStore.tsx");

export default tmp5;

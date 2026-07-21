// Module ID: 4198
// Function ID: 36077
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4198 (_isNativeReflectConstruct)
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
    let _default = channelId(dependencyMap[11]).default;
    const obj = { userId: id, sessionId: closure_16, guildId, channelId, joinVoiceId: closure_28 };
    const prototype2 = _default.prototype;
    _default = new _default(obj);
    channelId = _default;
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.State, (arg0, arg1, arg2) => {
      arg1(arg2[13]).wait(() => {
        let obj = arg1(arg2[13]);
        obj = { type: "RTC_CONNECTION_STATE", state: arg0 };
        const merged = Object.assign(arg1);
        const merged1 = Object.assign(arg2);
        return obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.Video, (arg0, arg1, arg2, arg3, arg4) => {
      arg1(arg2[13]).wait(() => {
        let obj = arg1(arg2[13]);
        obj = { type: "RTC_CONNECTION_VIDEO", guildId: arg0, channelId: arg1, userId: arg2, streamId: arg3, rtcServerId: arg4, context: constants.DEFAULT, mediaEngineConnectionId: arg0.getMediaEngineConnectionId() };
        return obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.Ping, (arg0, arg1) => {
      arg1(closure_2[13]).wait(() => {
        let obj = arg1(closure_2[13]);
        obj = { type: "RTC_CONNECTION_PING", pings: arg0, quality: arg1 };
        return obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.OutboundLossRate, (arg0) => {
      callback(closure_2[13]).wait(() => {
        let obj = callback(closure_2[13]);
        obj = { type: "RTC_CONNECTION_LOSS_RATE", lossRate: arg0 };
        return obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.Speaking, (id) => {
      if (null != tmp30) {
        tmp30.setSpeaking(id, arg1);
      }
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.Flags, (arg0, arg1) => {
      arg1(closure_2[13]).wait((self) => {
        let obj = arg1(closure_2[13]);
        obj = { type: "RTC_CONNECTION_FLAGS", flags: arg1, userId: self, guildId: self.guildId, channelId: self.channelId, context: self.context };
        obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.UsersMerged, (userIds, context) => {
      let obj = callback(closure_2[13]);
      obj = { type: "RTC_CONNECTION_USERS_MERGED", userIds, context };
      obj.dispatch(obj);
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.ClientConnect, (arg0) => {
      callback(closure_2[13]).wait((self) => {
        let obj = callback(closure_2[13]);
        obj = { type: "RTC_CONNECTION_CLIENT_CONNECT", userIds: self, guildId: self.guildId, channelId: self.channelId, context: self.context };
        obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.ClientDisconnect, (arg0) => {
      callback(closure_2[13]).wait((self) => {
        let obj = callback(closure_2[13]);
        obj = { type: "RTC_CONNECTION_CLIENT_DISCONNECT", userId: self, guildId: self.guildId, channelId: self.channelId, context: self.context };
        obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.Platform, (arg0, arg1, arg2) => {
      arg1(arg2[13]).wait(() => {
        let obj = arg1(arg2[13]);
        obj = { type: "RTC_CONNECTION_PLATFORM", platform: arg1, userId: arg0, channelId: arg2 };
        obj.dispatch(obj);
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.SecureFramesUpdate, () => {
      callback(closure_2[13]).wait(() => {
        callback(closure_2[13]).dispatch({ type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE" });
      });
    });
    _default.on(channelId(dependencyMap[12]).RTCConnectionEvent.RosterMapUpdate, (arg0) => {
      callback(closure_2[13]).wait(() => {
        let obj = callback(closure_2[13]);
        obj = { type: "RTC_CONNECTION_ROSTER_MAP_UPDATE", userIds: arg0 };
        obj.dispatch(obj);
      });
    });
    let tmp30 = importDefault(dependencyMap[14]);
    const prototype3 = tmp30.prototype;
    tmp30 = new tmp30(store.getId(), channelId);
    let closure_22 = tmp30;
    let closure_20 = null;
    let closure_23 = false;
    let closure_24 = false;
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
    obj.wasEverMultiParticipant = closure_23;
    obj.wasEverRtcConnected = closure_24;
    obj.voiceStateAnalytics = closure_22;
    obj.channelId = redux.channelId;
    let closure_20 = obj;
    obj = importDefault(dependencyMap[13]);
    obj = { type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET", mediaEngineConnectionId: redux.getMediaEngineConnectionId() };
    obj.dispatch(obj);
    redux.destroy();
    const redux = null;
    closure_22 = null;
    let closure_27 = false;
    if (flag) {
      let closure_25 = null;
    }
  }
}
function clearPendingVoiceChannelSelect() {
  if (null != timeout) {
    let timeout = timeout.timeout;
    timeout.stop();
    timeout = null;
  }
}
function handleClearRemoteDisconnectVoiceChannelId() {
  let closure_19 = null;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ RTCConnectionStates: closure_11, AppStates: closure_12, RTCConnectionQuality: closure_13 } = arg1(dependencyMap[8]));
const MediaEngineContextTypes = arg1(dependencyMap[9]).MediaEngineContextTypes;
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("RTCConnectionStore");
let closure_18 = [];
let closure_19 = null;
let closure_20 = null;
let closure_21 = null;
let closure_22 = null;
let closure_23 = false;
let closure_24 = false;
let closure_25 = null;
let closure_26 = null;
let closure_27 = false;
let closure_28 = null;
let closure_29 = null;
let tmp5 = (Store) => {
  class RTCConnectionStore {
    constructor() {
      self = this;
      tmp = closure_3(this, RTCConnectionStore);
      obj = closure_6(RTCConnectionStore);
      tmp2 = closure_5;
      if (closure_31()) {
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
  const arg1 = RTCConnectionStore;
  callback2(RTCConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_8, closure_10);
      const result = RTCConnectionStore(closure_2[18]).setVideoToggleAnalyticsParams(this.getRTCConnectionId, this.getMediaSessionId);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getRTCConnection",
    value() {
      return closure_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      if (null != pings) {
        let DISCONNECTED = pings.state;
      } else {
        DISCONNECTED = constants.DISCONNECTED;
      }
      return DISCONNECTED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isConnected",
    value() {
      return this.getState() === constants.RTC_CONNECTED;
    }
  };
  items[4] = {
    key: "isDisconnected",
    value() {
      return this.getState() === constants.DISCONNECTED;
    }
  };
  items[5] = {
    key: "getRemoteDisconnectVoiceChannelId",
    value() {
      return closure_19;
    }
  };
  items[6] = {
    key: "getLastSessionVoiceChannelId",
    value() {
      return closure_21;
    }
  };
  items[7] = {
    key: "setLastSessionVoiceChannelId",
    value(arg0) {

    }
  };
  items[8] = {
    key: "getGuildId",
    value() {
      let guildId;
      if (null != pings) {
        guildId = pings.guildId;
      }
      return guildId;
    }
  };
  items[9] = {
    key: "getChannelId",
    value() {
      let channelId;
      if (null != pings) {
        channelId = pings.channelId;
      }
      return channelId;
    }
  };
  items[10] = {
    key: "getHostname",
    value() {
      let str = "";
      if (null != pings) {
        str = pings.hostname;
      }
      return str;
    }
  };
  items[11] = {
    key: "getQuality",
    value() {
      if (null != pings) {
        let UNKNOWN = pings.quality;
      } else {
        UNKNOWN = constants2.UNKNOWN;
      }
      return UNKNOWN;
    }
  };
  items[12] = {
    key: "getPings",
    value() {
      if (null != pings) {
        let pings = pings.getPings();
      } else {
        pings = closure_18;
      }
      return pings;
    }
  };
  items[13] = {
    key: "getAveragePing",
    value() {
      let num = 0;
      if (null != closure_15) {
        let averagePing;
        if (null != closure_15) {
          averagePing = obj.getAveragePing();
        }
        num = averagePing;
        const obj = closure_15;
      }
      return num;
    }
  };
  items[14] = {
    key: "getLastPing",
    value() {
      let lastPing;
      if (null != closure_15) {
        lastPing = closure_15.getLastPing();
      }
      return lastPing;
    }
  };
  items[15] = {
    key: "getOutboundLossRate",
    value() {
      let outboundLossRate;
      if (null != closure_15) {
        outboundLossRate = closure_15.getOutboundLossRate();
      }
      return outboundLossRate;
    }
  };
  items[16] = {
    key: "getMediaSessionId",
    value() {
      let mediaSessionId;
      if (null != closure_15) {
        mediaSessionId = closure_15.getMediaSessionId();
      }
      return mediaSessionId;
    }
  };
  items[17] = {
    key: "getRTCConnectionId",
    value() {
      let rTCConnectionId;
      if (null != closure_15) {
        rTCConnectionId = closure_15.getRTCConnectionId();
      }
      return rTCConnectionId;
    }
  };
  items[18] = {
    key: "getDuration",
    value() {
      let duration;
      if (null != closure_15) {
        duration = closure_15.getDuration();
      }
      if (null == duration) {
        let duration1;
        if (null != duration) {
          duration1 = duration.duration;
        }
        duration = duration1;
      }
      return duration;
    }
  };
  items[19] = {
    key: "getLastRTCConnectionState",
    value() {
      return closure_20;
    }
  };
  items[20] = {
    key: "getPacketStats",
    value() {
      let packetStats;
      if (null != closure_15) {
        packetStats = closure_15.getPacketStats();
      }
      return packetStats;
    }
  };
  items[21] = {
    key: "getVoiceStateStats",
    value() {
      let stats;
      if (null != closure_22) {
        stats = closure_22.getStats();
      }
      return stats;
    }
  };
  items[22] = {
    key: "getUserVoiceSettingsStats",
    value(arg0) {
      let userVoiceSettingsStats;
      if (null != closure_22) {
        userVoiceSettingsStats = closure_22.getUserVoiceSettingsStats(arg0);
      }
      return userVoiceSettingsStats;
    }
  };
  items[23] = {
    key: "getWasEverMultiParticipant",
    value() {
      return closure_23;
    }
  };
  items[24] = {
    key: "getWasEverRtcConnected",
    value() {
      return closure_24;
    }
  };
  items[25] = {
    key: "getUserIds",
    value() {
      let userIds;
      if (null != closure_15) {
        userIds = closure_15.getUserIds();
      }
      return userIds;
    }
  };
  items[26] = {
    key: "getJoinVoiceId",
    value() {
      return closure_28;
    }
  };
  items[27] = {
    key: "isUserConnected",
    value(arg0) {
      let isUserConnected;
      if (null != closure_15) {
        isUserConnected = closure_15.getIsUserConnected(arg0);
      }
      return isUserConnected;
    }
  };
  items[28] = {
    key: "getSecureFramesState",
    value() {
      let secureFramesState;
      if (null != closure_15) {
        secureFramesState = closure_15.getSecureFramesState();
      }
      return secureFramesState;
    }
  };
  items[29] = {
    key: "getSecureFramesRosterMapEntry",
    value(arg0) {
      let secureFramesRosterMap;
      if (null != closure_15) {
        secureFramesRosterMap = closure_15.getSecureFramesRosterMap();
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
      return closure_26;
    }
  };
  items[31] = {
    key: "getWasMoved",
    value() {
      return closure_27;
    }
  };
  return callback(RTCConnectionStore, items);
}(importDefault(dependencyMap[19]).Store);
tmp5.displayName = "RTCConnectionStore";
tmp5 = new tmp5(importDefault(dependencyMap[13]), {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let closure_19 = null;
    let closure_21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_16 = null;
    let closure_19 = null;
    let closure_21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
  },
  LOGOUT: function handleLogout() {
    let closure_25 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      let closure_24 = true;
      if (null != closure_15) {
        let closure_25 = arg1(dependencyMap[16]).now();
        const obj = arg1(dependencyMap[16]);
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_15) {
      let closure_25 = arg1(dependencyMap[16]).now();
      const obj = arg1(dependencyMap[16]);
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
      if (null != closure_22) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_23;
      if (!closure_23) {
        let prop;
        if (null != closure_22) {
          prop = obj2.getStats().max_voice_state_count;
        }
        let num = 0;
        if (null != prop) {
          num = prop;
        }
        tmp2 = num > 1;
        const obj2 = closure_22;
      }
      closure_23 = tmp2;
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        let tmp5 = null != channelId;
        if (tmp5) {
          tmp5 = userId.channelId === channelId.channelId;
        }
        if (tmp5) {
          callback5();
        }
        if (null != closure_15) {
          if (userId.sessionId === closure_16) {
            if (null == userId.guildId) {
              if (!tmp28) {
                callback4();
              }
              if (null != userId.channelId) {
                let channelId2 = null;
                let closure_21 = null;
                let prop1;
                closure_15 = callback3(userId.guildId, userId.channelId);
                if (null != closure_22) {
                  prop1 = obj6.getStats().max_voice_state_count;
                }
                let num8 = 0;
                if (null != prop1) {
                  num8 = prop1;
                }
                closure_23 = num8 > 1;
                const obj6 = closure_22;
              }
              const tmp28 = userId.guildId !== closure_15.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              callback4();
            } else {
              closure_15.setNextChannelId(userId.channelId);
              let closure_27 = true;
              let closure_28 = null;
              closure_15.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_15.guildId) {
            let tmp21 = null != store.getAwaitingRemoteSessionInfo();
            if (tmp21) {
              tmp21 = null != store.getRemoteSessionId();
            }
            if (!tmp21) {
              channelId2 = closure_15.channelId;
            }
            callback4();
          }
        } else {
          if (userId.sessionId === closure_16) {
            if (null != userId.channelId) {
              if (!tmp5) {
                if (null != closure_25) {
                  if (obj3.now() - closure_25 >= 300000) {
                    callback2(closure_2[13]).wait(() => callback(closure_2[17]).default.disconnect());
                    return arg0;
                  }
                  const obj3 = callback(closure_2[16]);
                }
              }
              channelId2 = null;
              closure_21 = null;
              let prop2;
              closure_15 = callback3(userId.guildId, userId.channelId);
              if (null != closure_22) {
                prop2 = obj5.getStats().max_voice_state_count;
              }
              let num6 = 0;
              if (null != prop2) {
                num6 = prop2;
              }
              closure_23 = num6 > 1;
              const obj5 = closure_22;
            }
          }
          return arg0;
        }
        return true;
      }
      const obj = closure_22;
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
    function setPendingVoiceChannelSelect(channelId) {
      callback();
      if (null != channelId.channelId) {
        const Timeout = channelId(closure_2[15]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        timeout.start(30000, (self) => {
          closure_17.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: self.joinVoiceId, channelId: self.channelId, guildId: self.guildId });
          let closure_29 = null;
        });
        const obj = {};
        ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
        obj.timeout = timeout;
      }
    }(channelId);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (null != closure_15) {
      const result = closure_15.setNoiseCancellationEnabled(enabled.enabled);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleAudioSetAudioMixerSettings(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else if (null != closure_15) {
      const result = closure_15.setSpatialAudioEnabled(context.settings.enabled);
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
    let closure_21 = null;
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
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen(sessionId) {
    sessionId = sessionId.sessionId;
    let closure_19 = null;
    let closure_21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
    return false;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_16 = null;
    let closure_19 = null;
    let closure_21 = null;
    destroyRTCConnection(false);
    clearPendingVoiceChannelSelect();
  },
  LOGOUT: function handleLogout() {
    let closure_25 = null;
    return false;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state === constants.RTC_CONNECTED) {
      let closure_24 = true;
      if (null != closure_15) {
        let closure_25 = arg1(dependencyMap[16]).now();
        const obj = arg1(dependencyMap[16]);
      }
    }
    return true;
  },
  RTC_CONNECTION_PING: function handleRtcConnectionPing() {
    if (null != closure_15) {
      let closure_25 = arg1(dependencyMap[16]).now();
      const obj = arg1(dependencyMap[16]);
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
      if (null != closure_22) {
        obj.updateVoiceStates(userId.userId, userId.channelId);
      }
      let tmp2 = closure_23;
      if (!closure_23) {
        let prop;
        if (null != closure_22) {
          prop = obj2.getStats().max_voice_state_count;
        }
        let num = 0;
        if (null != prop) {
          num = prop;
        }
        tmp2 = num > 1;
        const obj2 = closure_22;
      }
      closure_23 = tmp2;
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        let tmp5 = null != channelId;
        if (tmp5) {
          tmp5 = userId.channelId === channelId.channelId;
        }
        if (tmp5) {
          callback5();
        }
        if (null != closure_15) {
          if (userId.sessionId === closure_16) {
            if (null == userId.guildId) {
              if (!tmp28) {
                callback4();
              }
              if (null != userId.channelId) {
                let channelId2 = null;
                let closure_21 = null;
                let prop1;
                closure_15 = callback3(userId.guildId, userId.channelId);
                if (null != closure_22) {
                  prop1 = obj6.getStats().max_voice_state_count;
                }
                let num8 = 0;
                if (null != prop1) {
                  num8 = prop1;
                }
                closure_23 = num8 > 1;
                const obj6 = closure_22;
              }
              const tmp28 = userId.guildId !== closure_15.guildId && null == userId.channelId;
            }
            if (null == userId.channelId) {
              callback4();
            } else {
              closure_15.setNextChannelId(userId.channelId);
              let closure_27 = true;
              let closure_28 = null;
              closure_15.clearJoinVoiceId();
            }
          } else if (userId.guildId === closure_15.guildId) {
            let tmp21 = null != store.getAwaitingRemoteSessionInfo();
            if (tmp21) {
              tmp21 = null != store.getRemoteSessionId();
            }
            if (!tmp21) {
              channelId2 = closure_15.channelId;
            }
            callback4();
          }
        } else {
          if (userId.sessionId === closure_16) {
            if (null != userId.channelId) {
              if (!tmp5) {
                if (null != closure_25) {
                  if (obj3.now() - closure_25 >= 300000) {
                    callback2(closure_2[13]).wait(() => callback(closure_2[17]).default.disconnect());
                    return arg0;
                  }
                  const obj3 = callback(closure_2[16]);
                }
              }
              channelId2 = null;
              closure_21 = null;
              let prop2;
              closure_15 = callback3(userId.guildId, userId.channelId);
              if (null != closure_22) {
                prop2 = obj5.getStats().max_voice_state_count;
              }
              let num6 = 0;
              if (null != prop2) {
                num6 = prop2;
              }
              closure_23 = num6 > 1;
              const obj5 = closure_22;
            }
          }
          return arg0;
        }
        return true;
      }
      const obj = closure_22;
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
    function setPendingVoiceChannelSelect(channelId) {
      callback();
      if (null != channelId.channelId) {
        const Timeout = channelId(closure_2[15]).Timeout;
        const prototype = Timeout.prototype;
        const timeout = new Timeout();
        timeout.start(30000, (self) => {
          closure_17.warn("No VOICE_STATE_UPDATE received within 30000ms of VOICE_CHANNEL_SELECT", { joinVoiceId: self.joinVoiceId, channelId: self.channelId, guildId: self.guildId });
          let closure_29 = null;
        });
        const obj = {};
        ({ joinVoiceId: obj2.joinVoiceId, channelId: obj2.channelId, guildId: obj2.guildId } = channelId);
        obj.timeout = timeout;
      }
    }(channelId);
  },
  AUDIO_SET_NOISE_CANCELLATION: function handleAudioSetNoiseCancellation(enabled) {
    if (null != closure_15) {
      const result = closure_15.setNoiseCancellationEnabled(enabled.enabled);
    }
  },
  AUDIO_SET_AUDIO_MIXER_SETTINGS: function handleAudioSetAudioMixerSettings(context) {
    if (context.context !== MediaEngineContextTypes.DEFAULT) {
      return false;
    } else if (null != closure_15) {
      const result = closure_15.setSpatialAudioEnabled(context.settings.enabled);
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
    let closure_21 = null;
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
const tmp2 = arg1(dependencyMap[8]);
arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_rtc_state = state.getState();
  });
});
const promise = arg1(dependencyMap[21])(dependencyMap[20], dependencyMap.paths);
const result = arg1(dependencyMap[22]).fileFinishedImporting("stores/RTCConnectionStore.tsx");

export default tmp5;

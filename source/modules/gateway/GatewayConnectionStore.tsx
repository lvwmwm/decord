// Module ID: 4805
// Function ID: 41859
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4805 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
async function _handleConnectionOpen(sessionId, arg1) {
  let closure_25 = Date.now();
  sessionId = sessionId.sessionId;
  const localPresenceState = callback(closure_3[18]).localPresenceState;
  localPresenceState.handleConnectionOpen();
  let obj = {};
  const voiceChannelId = voiceChannelId.getVoiceChannelId();
  let tmp3 = obj;
  if (null != voiceChannelId) {
    const Storage2 = callback(closure_3[21]).Storage;
    const value = Storage2.get("discord_watchdog_restart_timestamp");
    let tmp5 = null != value;
    if (tmp5) {
      const _Date = Date;
      const _parseInt = parseInt;
      const timestamp = Date.now();
      tmp5 = timestamp - parseInt(value, 10) < 60000;
    }
    const Storage = callback(closure_3[21]).Storage;
    Storage.remove("discord_watchdog_restart_timestamp");
    let type;
    if (null != window) {
      const _performance = window.performance;
      if (null != _performance) {
        if (null != _performance.getEntriesByType) {
          const entriesByType = _performance.getEntriesByType("navigation");
          if (null != entriesByType) {
            const first = entriesByType[0];
            if (null != first) {
              type = first.type;
            }
          }
        }
      }
    }
    if ("reload" !== type) {
      if (!tmp5) {
        if (null != processUtils) {
          const processUtils = processUtils.processUtils;
          if (null != processUtils) {
            if (null != processUtils.getLastCrash) {
              const lastCrash = processUtils.getLastCrash();
            }
          }
        }
        const tmp15 = yield lastCrash;
        let rendererCrashReason;
        if (null != tmp15) {
          rendererCrashReason = tmp15.rendererCrashReason;
        }
        if (null == rendererCrashReason) {
          if (closure_27) {
            let tmp19 = null;
            if (null != voiceChannelId) {
              tmp19 = voiceChannelId;
            }
            const result = lastSessionVoiceChannelId.setLastSessionVoiceChannelId(tmp19);
            const voiceChannel = callback2(closure_3[23]).selectVoiceChannel(null);
            tmp3 = obj;
            const obj2 = callback2(closure_3[23]);
          }
        }
      }
    }
    const channel = channel.getChannel(voiceChannelId);
    tmp3 = obj;
    if (null != channel) {
      obj = { guildId: channel.getGuildId(), channelId: voiceChannelId };
      callback(closure_3[22]).muteCustomJoinSound(voiceChannelId);
      tmp3 = obj;
      const obj5 = callback(closure_3[22]);
    }
  }
  const localVoiceState = callback(closure_3[18]).localVoiceState;
  localVoiceState.update(tmp3, true);
  closure_27 = false;
  let closure_29 = null;
}
function handleClipsFlags() {
  const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
  localVoiceState.update();
}
function handleMediaEngineChange() {
  const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
  localVoiceState.update();
  return false;
}
function handleLocalPresenceChange() {
  const localPresenceState = arg1(dependencyMap[18]).localPresenceState;
  localPresenceState.update();
  return false;
}
function deleteStream(streamKey) {
  const socket = arg1(dependencyMap[18]).socket;
  if (socket.isSessionEstablished()) {
    const socket2 = arg1(dependencyMap[18]).socket;
    socket2.streamDelete(streamKey);
  }
}
function cleanupAllStreamsExceptSelf() {
  let closure_0 = function getSelfStreamKey() {
    const allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    return allActiveStreamKeys.find((streamKey) => callback(closure_3[27]).decodeStreamKey(streamKey).ownerId === id.getId());
  }();
  const allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
  const found = allActiveStreamKeys.filter((arg0) => arg0 !== closure_0);
  const item = found.forEach((arg0) => {
    callback(arg0);
  });
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let closure_15 = importDefault(dependencyMap[11]);
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
({ RTCConnectionStates: closure_20, AppStates: closure_21 } = arg1(dependencyMap[16]));
const UserSettingsTypes = arg1(dependencyMap[17]).UserSettingsTypes;
arg1(dependencyMap[18]).socket.dispatcher.getDispatchHandler = importDefault(dependencyMap[19]);
let importDefaultResult = importDefault(dependencyMap[20]);
importDefaultResult = new importDefaultResult("ConnectionStore");
let closure_25 = 0;
let closure_26 = null;
let closure_27 = true;
let closure_28 = null;
let closure_29 = null;
let tmp5 = (Store) => {
  class GatewayConnectionStore {
    constructor() {
      self = this;
      tmp = closure_4(this, GatewayConnectionStore);
      obj = closure_7(GatewayConnectionStore);
      tmp2 = closure_6;
      if (closure_30()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GatewayConnectionStore;
  callback2(GatewayConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_12, closure_13, closure_14, closure_15, closure_16, closure_17, closure_18, closure_19, closure_10);
      const items = [closure_14];
      this.syncWith(items, closure_33);
      const items1 = [closure_18];
      this.syncWith(items1, closure_34);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getSocket",
    value() {
      return GatewayConnectionStore(closure_3[18]).socket;
    }
  };
  items[1] = obj;
  obj = {
    key: "isTryingToConnect",
    value() {
      const socket = GatewayConnectionStore(closure_3[18]).socket;
      return !socket.isClosed();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isConnected",
    value() {
      const socket = GatewayConnectionStore(closure_3[18]).socket;
      return socket.isSessionEstablished();
    }
  };
  items[4] = {
    key: "isConnectedOrOverlay",
    value() {
      const socket = GatewayConnectionStore(closure_3[18]).socket;
      return socket.isSessionEstablished() || false;
    }
  };
  items[5] = {
    key: "lastTimeConnectedChanged",
    value() {
      return closure_25;
    }
  };
  return callback(GatewayConnectionStore, items);
}(importDefault(dependencyMap[29]).Store);
tmp5.displayName = "GatewayConnectionStore";
tmp5 = new tmp5(importDefault(dependencyMap[30]), {
  START_SESSION: function handleSessionStart() {
    const socket = arg1(dependencyMap[18]).socket;
    const verbose = importDefaultResult.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = arg1(dependencyMap[18]).socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = {};
    const socket = arg1(dependencyMap[18]).socket;
    obj.isEstablished = socket.isSessionEstablished();
    importDefaultResult.verbose("session refresh dispatched", obj);
    const socket2 = arg1(dependencyMap[18]).socket;
    const tmp2 = !socket2.isSessionEstablished();
    let connectResult = !tmp2;
    if (!tmp2) {
      const socket3 = arg1(dependencyMap[18]).socket;
      socket3.close();
      const socket4 = arg1(dependencyMap[18]).socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = arg1(dependencyMap[18]).localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    importDefaultResult.verbose("Closing socket because of logout");
    const socket = arg1(dependencyMap[18]).socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = arg1(dependencyMap[18]).socket;
      socket.close();
      const dispatcher = arg1(dependencyMap[18]).socket.dispatcher;
      dispatcher.clear();
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !function handleConnectionOpen(arg0) {
      return callback(...arguments);
    }(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let closure_29 = null;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    importDefaultResult.verbose("connection closed dispatched");
    let closure_25 = Date.now();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state !== constants.DISCONNECTED) {
      return false;
    } else if (state.willReconnect) {
      if (null != state.streamKey) {
        const socket2 = arg1(dependencyMap[18]).socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = arg1(dependencyMap[18]).socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    let channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let closure_29 = channelId;
    let isIOSResult = arg1(dependencyMap[24]).isIOS();
    if (isIOSResult) {
      isIOSResult = closure_28 === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = arg1(dependencyMap[18]).socket;
        socket3.close(true);
      } else {
        const socket = arg1(dependencyMap[18]).socket;
        if (socket.isClosed()) {
          importAll(dependencyMap[25]).setIsPaused(false);
          const socket2 = arg1(dependencyMap[18]).socket;
          socket2.connect();
          const obj3 = importAll(dependencyMap[25]);
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        if (userId.sessionId === closure_26) {
          if (null != closure_29) {
            closure_24.verbose("Ignoring voice state for own session due to VSU lock on channel:", closure_29);
            return arg0;
          } else {
            const localVoiceState2 = callback(closure_3[18]).localVoiceState;
            const obj = {};
            ({ guildId: obj.guildId, channelId: obj.channelId } = userId);
            localVoiceState2.setState(obj);
          }
        } else if (userId.guildId !== callback(closure_3[18]).localVoiceState.guildId) {
          return arg0;
        } else {
          const localVoiceState = callback(closure_3[18]).localVoiceState;
          localVoiceState.setState({ "Null": "o", "Null": "o" });
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === arg1(dependencyMap[18]).localVoiceState.guildId) {
      const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
      localVoiceState.setState({ "Null": "o", "Null": "o" });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === arg1(dependencyMap[18]).localVoiceState.channelId) {
      const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
      localVoiceState.setState({ "Null": "o", "Null": "o" });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === arg1(dependencyMap[18]).localVoiceState.channelId) {
      if (closure_29 === channelId) {
        return false;
      } else {
        const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
        localVoiceState.setState({ "Null": "o", "Null": "o" });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    let state = arg0;
    if (obj.isIOS()) {
      if (!closure_11.isAuthenticated()) {
        state = state.state;
        let closure_28 = state;
      } else {
        let isClosedResult = closure_28 === constants2.BACKGROUND;
        if (isClosedResult) {
          isClosedResult = state.state === constants2.ACTIVE;
        }
        if (isClosedResult) {
          const socket3 = arg1(dependencyMap[18]).socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          importAll(dependencyMap[25]).setIsPaused(false);
          const socket4 = arg1(dependencyMap[18]).socket;
          socket4.connect();
          const obj2 = importAll(dependencyMap[25]);
        }
      }
      const socket = arg1(dependencyMap[18]).socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        importAll(dependencyMap[25]).setIsPaused(false);
        if (closure_11.isAuthenticated()) {
          const socket2 = arg1(dependencyMap[18]).socket;
          socket2.resetBackoff("App state is active");
        }
        const obj3 = importAll(dependencyMap[25]);
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    const arg1 = userIds;
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = importDefault(dependencyMap[26])(userIds.userIds);
        const item = importDefault(dependencyMap[26])(userIds.userIds).chunk(100).forEach((self) => {
          const socket = self(closure_3[18]).socket;
          const guildMembers = socket.requestGuildMembers(self.guildIds, { userIds: self, presences: self.presences });
        });
        const chunkResult = importDefault(dependencyMap[26])(userIds.userIds).chunk(100);
      } else {
        const socket2 = arg1(dependencyMap[18]).socket;
        const obj = {};
        ({ query: obj.query, limit: obj.limit } = userIds);
        obj.presences = userIds.presences;
        const guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    let continuationToken;
    let guildId;
    let query;
    ({ guildId, query, continuationToken } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      const obj = { query, continuationToken };
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((channelId) => {
        const socket = callback(closure_3[18]).socket;
        socket.callConnect(channelId);
      });
    }
    return false;
  },
  STREAM_CREATE: handleClipsFlags,
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        const channel = channel.getChannel(channelId);
        let rtcRegion;
        if (null != channel) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        const call = call.getCall(channelId);
        if (null != call) {
          region = call.region;
        }
      }
      const socket2 = arg1(dependencyMap[18]).socket;
      if (null == region) {
        region = preferredRegion.getPreferredRegion();
      }
      socket2.streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    let allowMultiple;
    let streamKey;
    ({ streamKey, allowMultiple } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        cleanupAllStreamsExceptSelf();
      }
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    deleteStream(streamKey.streamKey);
    handleClipsFlags();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    let paused;
    let streamKey;
    ({ streamKey, paused } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = arg1(dependencyMap[18]).socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    let channelId;
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = arg1(dependencyMap[18]).socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
    ({ sessionId, payload } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (arg1(dependencyMap[18]).socket.connectionState !== importDefault(dependencyMap[28]).WILL_RECONNECT) {
      const socket = arg1(dependencyMap[18]).socket;
      const result = socket.resetSocketAndClearCacheOnError(args.args);
    }
  },
  CLIPS_SETTINGS_UPDATE: handleClipsFlags,
  RUNNING_GAMES_CHANGE: handleClipsFlags,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let tmp = settings.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS;
    if (tmp) {
      const clips = settings.settings.proto.clips;
      let allowVoiceRecording;
      if (null != clips) {
        allowVoiceRecording = clips.allowVoiceRecording;
      }
      tmp = null != allowVoiceRecording;
    }
    if (tmp) {
      handleClipsFlags();
    }
  }
});
const obj = {
  START_SESSION: function handleSessionStart() {
    const socket = arg1(dependencyMap[18]).socket;
    const verbose = importDefaultResult.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = arg1(dependencyMap[18]).socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = {};
    const socket = arg1(dependencyMap[18]).socket;
    obj.isEstablished = socket.isSessionEstablished();
    importDefaultResult.verbose("session refresh dispatched", obj);
    const socket2 = arg1(dependencyMap[18]).socket;
    const tmp2 = !socket2.isSessionEstablished();
    let connectResult = !tmp2;
    if (!tmp2) {
      const socket3 = arg1(dependencyMap[18]).socket;
      socket3.close();
      const socket4 = arg1(dependencyMap[18]).socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = arg1(dependencyMap[18]).localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    importDefaultResult.verbose("Closing socket because of logout");
    const socket = arg1(dependencyMap[18]).socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = arg1(dependencyMap[18]).socket;
      socket.close();
      const dispatcher = arg1(dependencyMap[18]).socket.dispatcher;
      dispatcher.clear();
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !function handleConnectionOpen(arg0) {
      return callback(...arguments);
    }(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let closure_29 = null;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    importDefaultResult.verbose("connection closed dispatched");
    let closure_25 = Date.now();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(state) {
    if (state.state !== constants.DISCONNECTED) {
      return false;
    } else if (state.willReconnect) {
      if (null != state.streamKey) {
        const socket2 = arg1(dependencyMap[18]).socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = arg1(dependencyMap[18]).socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    let channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let closure_29 = channelId;
    let isIOSResult = arg1(dependencyMap[24]).isIOS();
    if (isIOSResult) {
      isIOSResult = closure_28 === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = arg1(dependencyMap[18]).socket;
        socket3.close(true);
      } else {
        const socket = arg1(dependencyMap[18]).socket;
        if (socket.isClosed()) {
          importAll(dependencyMap[25]).setIsPaused(false);
          const socket2 = arg1(dependencyMap[18]).socket;
          socket2.connect();
          const obj3 = importAll(dependencyMap[25]);
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (id.getId() !== userId.userId) {
        return arg0;
      } else {
        if (userId.sessionId === closure_26) {
          if (null != closure_29) {
            closure_24.verbose("Ignoring voice state for own session due to VSU lock on channel:", closure_29);
            return arg0;
          } else {
            const localVoiceState2 = callback(closure_3[18]).localVoiceState;
            const obj = {};
            ({ guildId: obj.guildId, channelId: obj.channelId } = userId);
            localVoiceState2.setState(obj);
          }
        } else if (userId.guildId !== callback(closure_3[18]).localVoiceState.guildId) {
          return arg0;
        } else {
          const localVoiceState = callback(closure_3[18]).localVoiceState;
          localVoiceState.setState({ "Null": "o", "Null": "o" });
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === arg1(dependencyMap[18]).localVoiceState.guildId) {
      const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
      localVoiceState.setState({ "Null": "o", "Null": "o" });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === arg1(dependencyMap[18]).localVoiceState.channelId) {
      const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
      localVoiceState.setState({ "Null": "o", "Null": "o" });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === arg1(dependencyMap[18]).localVoiceState.channelId) {
      if (closure_29 === channelId) {
        return false;
      } else {
        const localVoiceState = arg1(dependencyMap[18]).localVoiceState;
        localVoiceState.setState({ "Null": "o", "Null": "o" });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    let state = arg0;
    if (obj.isIOS()) {
      if (!closure_11.isAuthenticated()) {
        state = state.state;
        let closure_28 = state;
      } else {
        let isClosedResult = closure_28 === constants2.BACKGROUND;
        if (isClosedResult) {
          isClosedResult = state.state === constants2.ACTIVE;
        }
        if (isClosedResult) {
          const socket3 = arg1(dependencyMap[18]).socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          importAll(dependencyMap[25]).setIsPaused(false);
          const socket4 = arg1(dependencyMap[18]).socket;
          socket4.connect();
          const obj2 = importAll(dependencyMap[25]);
        }
      }
      const socket = arg1(dependencyMap[18]).socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        importAll(dependencyMap[25]).setIsPaused(false);
        if (closure_11.isAuthenticated()) {
          const socket2 = arg1(dependencyMap[18]).socket;
          socket2.resetBackoff("App state is active");
        }
        const obj3 = importAll(dependencyMap[25]);
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    const arg1 = userIds;
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = importDefault(dependencyMap[26])(userIds.userIds);
        const item = importDefault(dependencyMap[26])(userIds.userIds).chunk(100).forEach((self) => {
          const socket = self(closure_3[18]).socket;
          const guildMembers = socket.requestGuildMembers(self.guildIds, { userIds: self, presences: self.presences });
        });
        const chunkResult = importDefault(dependencyMap[26])(userIds.userIds).chunk(100);
      } else {
        const socket2 = arg1(dependencyMap[18]).socket;
        const obj = {};
        ({ query: obj.query, limit: obj.limit } = userIds);
        obj.presences = userIds.presences;
        const guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    let continuationToken;
    let guildId;
    let query;
    ({ guildId, query, continuationToken } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      const obj = { query, continuationToken };
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((channelId) => {
        const socket = callback(closure_3[18]).socket;
        socket.callConnect(channelId);
      });
    }
    return false;
  },
  STREAM_CREATE: handleClipsFlags,
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        const channel = channel.getChannel(channelId);
        let rtcRegion;
        if (null != channel) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        const call = call.getCall(channelId);
        if (null != call) {
          region = call.region;
        }
      }
      const socket2 = arg1(dependencyMap[18]).socket;
      if (null == region) {
        region = preferredRegion.getPreferredRegion();
      }
      socket2.streamCreate(streamType, guildId, channelId, region);
    }
    return false;
  },
  STREAM_WATCH: function handleStreamWatch(arg0) {
    let allowMultiple;
    let streamKey;
    ({ streamKey, allowMultiple } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        cleanupAllStreamsExceptSelf();
      }
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.streamWatch(streamKey);
    }
    return false;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    deleteStream(streamKey.streamKey);
    handleClipsFlags();
    return false;
  },
  STREAM_SET_PAUSED: function handleStreamSetPaused(arg0) {
    let paused;
    let streamKey;
    ({ streamKey, paused } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = arg1(dependencyMap[18]).socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    let channelId;
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = arg1(dependencyMap[18]).socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
    ({ sessionId, payload } = arg0);
    const socket = arg1(dependencyMap[18]).socket;
    if (socket.isSessionEstablished()) {
      const socket2 = arg1(dependencyMap[18]).socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (arg1(dependencyMap[18]).socket.connectionState !== importDefault(dependencyMap[28]).WILL_RECONNECT) {
      const socket = arg1(dependencyMap[18]).socket;
      const result = socket.resetSocketAndClearCacheOnError(args.args);
    }
  },
  CLIPS_SETTINGS_UPDATE: handleClipsFlags,
  RUNNING_GAMES_CHANGE: handleClipsFlags,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let tmp = settings.settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS;
    if (tmp) {
      const clips = settings.settings.proto.clips;
      let allowVoiceRecording;
      if (null != clips) {
        allowVoiceRecording = clips.allowVoiceRecording;
      }
      tmp = null != allowVoiceRecording;
    }
    if (tmp) {
      handleClipsFlags();
    }
  }
};
const tmp2 = arg1(dependencyMap[16]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/gateway/GatewayConnectionStore.tsx");

export default tmp5;

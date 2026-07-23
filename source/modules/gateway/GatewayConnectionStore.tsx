// Module ID: 4808
// Function ID: 41877
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 1316, 1194, 4809, 1348, 4177, 4202, 4223, 1906, 4810, 4216, 653, 662, 12563, 12607, 3, 587, 5733, 4944, 477, 12599, 22, 4194, 12578, 566, 686, 2]

// Module 4808 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import MAX_FAVORITES from "MAX_FAVORITES";
import importDefaultResult1 from "importDefaultResult1";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import ME from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "_getPrototypeOf";

let closure_20;
let closure_21;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
async function _handleConnectionOpen(arg0, arg1) {
  const outer2_25 = Date.now();
  const outer2_26 = arg0.sessionId;
  const localPresenceState = outer2_0(outer2_3[18]).localPresenceState;
  localPresenceState.handleConnectionOpen();
  let obj = {};
  const voiceChannelId = outer2_17.getVoiceChannelId();
  let tmp3 = obj;
  if (null != voiceChannelId) {
    const Storage2 = outer2_0(outer2_3[21]).Storage;
    const value = Storage2.get("discord_watchdog_restart_timestamp");
    let tmp5 = null != value;
    if (tmp5) {
      const _Date = Date;
      const _parseInt = parseInt;
      const timestamp = Date.now();
      tmp5 = timestamp - parseInt(value, 10) < 60000;
    }
    const Storage = outer2_0(outer2_3[21]).Storage;
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
        if (null != outer2_23) {
          const processUtils = outer2_23.processUtils;
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
          if (outer2_27) {
            let tmp19 = null;
            if (null != voiceChannelId) {
              tmp19 = voiceChannelId;
            }
            const result = outer2_15.setLastSessionVoiceChannelId(tmp19);
            const voiceChannel = outer2_1(outer2_3[23]).selectVoiceChannel(null);
            tmp3 = obj;
            const obj2 = outer2_1(outer2_3[23]);
          }
        }
      }
    }
    const channel = outer2_13.getChannel(voiceChannelId);
    tmp3 = obj;
    if (null != channel) {
      obj = { guildId: channel.getGuildId(), channelId: voiceChannelId };
      outer2_0(outer2_3[22]).muteCustomJoinSound(voiceChannelId);
      tmp3 = obj;
      const obj5 = outer2_0(outer2_3[22]);
    }
  }
  const localVoiceState = outer2_0(outer2_3[18]).localVoiceState;
  localVoiceState.update(tmp3, true);
  outer2_27 = false;
  const outer2_29 = null;
}
function handleClipsFlags() {
  const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
  localVoiceState.update();
}
function handleMediaEngineChange() {
  const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
  localVoiceState.update();
  return false;
}
function handleLocalPresenceChange() {
  const localPresenceState = require(12563) /* importDefaultResult1 */.localPresenceState;
  localPresenceState.update();
  return false;
}
function deleteStream(streamKey) {
  const socket = require(12563) /* importDefaultResult1 */.socket;
  if (socket.isSessionEstablished()) {
    const socket2 = require(12563) /* importDefaultResult1 */.socket;
    socket2.streamDelete(streamKey);
  }
}
function cleanupAllStreamsExceptSelf() {
  let closure_0 = (function getSelfStreamKey() {
    const allActiveStreamKeys = outer1_19.getAllActiveStreamKeys();
    return allActiveStreamKeys.find((streamKey) => callback(outer2_3[27]).decodeStreamKey(streamKey).ownerId === outer2_11.getId());
  })();
  allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
  const found = allActiveStreamKeys.filter((arg0) => arg0 !== closure_0);
  const item = found.forEach((arg0) => {
    outer1_35(arg0);
  });
}
({ RTCConnectionStates: closure_20, AppStates: closure_21 } = ME);
require("importDefaultResult1").socket.dispatcher.getDispatchHandler = require("_createForOfIteratorHelperLoose");
importDefaultResult = new importDefaultResult("ConnectionStore");
let c25 = 0;
let c26 = null;
let c27 = true;
let c28 = null;
let c29 = null;
let tmp5 = ((Store) => {
  class GatewayConnectionStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, GatewayConnectionStore);
      obj = outer1_7(GatewayConnectionStore);
      tmp2 = outer1_6;
      if (outer1_30()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GatewayConnectionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_12, outer1_13, outer1_14, outer1_15, outer1_16, outer1_17, outer1_18, outer1_19, outer1_10);
      const items = [outer1_14];
      this.syncWith(items, outer1_33);
      const items1 = [outer1_18];
      this.syncWith(items1, outer1_34);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "getSocket",
    value() {
      return GatewayConnectionStore(outer1_3[18]).socket;
    }
  };
  items[1] = obj;
  obj = {
    key: "isTryingToConnect",
    value() {
      const socket = GatewayConnectionStore(outer1_3[18]).socket;
      return !socket.isClosed();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isConnected",
    value() {
      const socket = GatewayConnectionStore(outer1_3[18]).socket;
      return socket.isSessionEstablished();
    }
  };
  items[4] = {
    key: "isConnectedOrOverlay",
    value() {
      const socket = GatewayConnectionStore(outer1_3[18]).socket;
      return socket.isSessionEstablished() || false;
    }
  };
  items[5] = {
    key: "lastTimeConnectedChanged",
    value() {
      return outer1_25;
    }
  };
  return callback(GatewayConnectionStore, items);
})(require("initialize").Store);
tmp5.displayName = "GatewayConnectionStore";
tmp5 = new tmp5(require("dispatcher"), {
  START_SESSION: function handleSessionStart() {
    const socket = require(12563) /* importDefaultResult1 */.socket;
    const verbose = importDefaultResult.verbose;
    if (socket.isClosed()) {
      verbose("Socket is reconnecting because of starting new session");
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      let flag = socket2.connect();
    } else {
      verbose("Socket is not reconnecting during a new session because it is not closed");
      flag = false;
    }
    return flag;
  },
  LOGIN_SUCCESS: function handleSessionRefresh() {
    const obj = {};
    const socket = require(12563) /* importDefaultResult1 */.socket;
    obj.isEstablished = socket.isSessionEstablished();
    importDefaultResult.verbose("session refresh dispatched", obj);
    const socket2 = require(12563) /* importDefaultResult1 */.socket;
    const tmp2 = !socket2.isSessionEstablished();
    let connectResult = !tmp2;
    if (!tmp2) {
      const socket3 = require(12563) /* importDefaultResult1 */.socket;
      socket3.close();
      const socket4 = require(12563) /* importDefaultResult1 */.socket;
      connectResult = socket4.connect();
    }
    return connectResult;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const localPresenceState = require(12563) /* importDefaultResult1 */.localPresenceState;
      localPresenceState.handleAccountSwitch();
    }
    importDefaultResult.verbose("Closing socket because of logout");
    const socket = require(12563) /* importDefaultResult1 */.socket;
    socket.close();
  },
  CLEAR_CACHES: function handleClearCaches(resetSocket) {
    if (resetSocket.resetSocket) {
      const socket = require(12563) /* importDefaultResult1 */.socket;
      socket.close();
      const dispatcher = require(12563) /* importDefaultResult1 */.socket.dispatcher;
      dispatcher.clear();
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      socket2.connect();
    }
    return false;
  },
  CONNECTION_OPEN(arg0) {
    !(function handleConnectionOpen(arg0) {
      return outer1_31(...arguments);
    })(arg0);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    let c29 = null;
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
        const socket2 = require(12563) /* importDefaultResult1 */.socket;
        socket2.streamPing(state.streamKey);
      } else {
        const socket = require(12563) /* importDefaultResult1 */.socket;
        socket.voiceServerPing();
      }
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
    localVoiceState.update({ guildId: guildId.guildId, channelId: guildId.channelId });
    let channelId = null;
    if (guildId.lockVoiceStateForResume) {
      channelId = null;
      if (null != guildId.channelId) {
        channelId = guildId.channelId;
      }
    }
    let isIOSResult = require(477) /* set */.isIOS();
    if (isIOSResult) {
      isIOSResult = c28 === constants2.BACKGROUND;
    }
    if (isIOSResult) {
      if (null == guildId.channelId) {
        const socket3 = require(12563) /* importDefaultResult1 */.socket;
        socket3.close(true);
      } else {
        const socket = require(12563) /* importDefaultResult1 */.socket;
        if (socket.isClosed()) {
          importAll(12599).setIsPaused(false);
          const socket2 = require(12563) /* importDefaultResult1 */.socket;
          socket2.connect();
          const obj3 = importAll(12599);
        }
      }
    }
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      if (outer1_11.getId() !== userId.userId) {
        return arg0;
      } else {
        if (userId.sessionId === outer1_26) {
          if (null != outer1_29) {
            outer1_24.verbose("Ignoring voice state for own session due to VSU lock on channel:", outer1_29);
            return arg0;
          } else {
            const localVoiceState2 = outer1_0(outer1_3[18]).localVoiceState;
            const obj = {};
            ({ guildId: obj.guildId, channelId: obj.channelId } = userId);
            localVoiceState2.setState(obj);
          }
        } else if (userId.guildId !== outer1_0(outer1_3[18]).localVoiceState.guildId) {
          return arg0;
        } else {
          const localVoiceState = outer1_0(outer1_3[18]).localVoiceState;
          localVoiceState.setState({ guildId: null, channelId: null });
        }
        return true;
      }
    }, false);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (guild.guild.id === require(12563) /* importDefaultResult1 */.localVoiceState.guildId) {
      const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (channel.channel.id === require(12563) /* importDefaultResult1 */.localVoiceState.channelId) {
      const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
      localVoiceState.setState({ guildId: null, channelId: null });
    }
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    channelId = channelId.channelId;
    if (channelId === require(12563) /* importDefaultResult1 */.localVoiceState.channelId) {
      if (c29 === channelId) {
        return false;
      } else {
        const localVoiceState = require(12563) /* importDefaultResult1 */.localVoiceState;
        localVoiceState.setState({ guildId: null, channelId: null });
      }
    }
  },
  APP_STATE_UPDATE: function handleFocus(arg0) {
    let state = arg0;
    if (obj.isIOS()) {
      if (!closure_11.isAuthenticated()) {
        state = state.state;
      } else {
        let isClosedResult = state === constants2.BACKGROUND;
        if (isClosedResult) {
          isClosedResult = state.state === constants2.ACTIVE;
        }
        if (isClosedResult) {
          const socket3 = require(12563) /* importDefaultResult1 */.socket;
          isClosedResult = socket3.isClosed();
        }
        if (isClosedResult) {
          importAll(12599).setIsPaused(false);
          const socket4 = require(12563) /* importDefaultResult1 */.socket;
          socket4.connect();
          const obj2 = importAll(12599);
        }
      }
      const socket = require(12563) /* importDefaultResult1 */.socket;
      socket.close(true);
    } else {
      if (state.state === constants2.ACTIVE) {
        importAll(12599).setIsPaused(false);
        if (closure_11.isAuthenticated()) {
          const socket2 = require(12563) /* importDefaultResult1 */.socket;
          socket2.resetBackoff("App state is active");
        }
        const obj3 = importAll(12599);
      }
      return false;
    }
  },
  GUILD_MEMBERS_REQUEST: function handleGuildMembersRequest(userIds) {
    const _require = userIds;
    let socket = _require(12563).socket;
    if (socket.isSessionEstablished()) {
      if ("userIds" in userIds) {
        const obj2 = importDefault(22)(userIds.userIds);
        const item = importDefault(22)(userIds.userIds).chunk(100).forEach((userIds) => {
          const socket = userIds(outer1_3[18]).socket;
          const guildMembers = socket.requestGuildMembers(userIds.guildIds, { userIds, presences: userIds.presences });
        });
        const chunkResult = importDefault(22)(userIds.userIds).chunk(100);
      } else {
        const socket2 = _require(12563).socket;
        const obj = {};
        ({ query: obj.query, limit: obj.limit } = userIds);
        obj.presences = userIds.presences;
        let guildMembers = socket2.requestGuildMembers(userIds.guildIds, obj);
      }
    }
    return false;
  },
  GUILD_SEARCH_RECENT_MEMBERS: function handleGuildSearchRecentMembers(arg0) {
    let continuationToken;
    let guildId;
    let query;
    ({ guildId, query, continuationToken } = arg0);
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      const obj = { query, continuationToken };
      socket2.searchRecentMembers(guildId, obj);
    }
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function handleGuildSubscriptionsFlush(subscriptions) {
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      const result = socket2.updateGuildSubscriptions(subscriptions.subscriptions);
    }
    return false;
  },
  CALL_CONNECT: function handleCallConnect(channelId) {
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      socket2.callConnect(channelId.channelId);
    }
    return false;
  },
  CALL_CONNECT_MULTIPLE: function handleCallConnectMultiple(channelIds) {
    channelIds = channelIds.channelIds;
    let socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const item = channelIds.forEach((channelId) => {
        const socket = outer1_0(outer1_3[18]).socket;
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
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      if (null != guildId) {
        channel = channel.getChannel(channelId);
        let rtcRegion;
        if (null != channel) {
          rtcRegion = channel.rtcRegion;
        }
        let region = rtcRegion;
      } else {
        call = call.getCall(channelId);
        if (null != call) {
          region = call.region;
        }
      }
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
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
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      if (!allowMultiple) {
        cleanupAllStreamsExceptSelf();
      }
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
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
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      socket2.streamSetPaused(streamKey, paused);
    }
  },
  PUSH_NOTIFICATION_CLICK: function handlePushNotificationClick() {
    const socket = require(12563) /* importDefaultResult1 */.socket;
    socket.expeditedHeartbeat(5000, "user clicked on notification", true);
    return false;
  },
  REQUEST_FORUM_UNREADS: function handleRequestForumUnreads(arg0) {
    let channelId;
    let guildId;
    let threads;
    ({ guildId, channelId, threads } = arg0);
    const socket = require(12563) /* importDefaultResult1 */.socket;
    const forumUnreads = socket.requestForumUnreads(guildId, channelId, threads);
  },
  REQUEST_SOUNDBOARD_SOUNDS: function handleRequestSoundboardSounds(guildIds) {
    const socket = require(12563) /* importDefaultResult1 */.socket;
    const soundboardSounds = socket.requestSoundboardSounds(guildIds.guildIds);
  },
  REMOTE_COMMAND: function handleRemoteCommand(arg0) {
    let payload;
    let sessionId;
    ({ sessionId, payload } = arg0);
    const socket = require(12563) /* importDefaultResult1 */.socket;
    if (socket.isSessionEstablished()) {
      const socket2 = require(12563) /* importDefaultResult1 */.socket;
      socket2.remoteCommand(sessionId, payload);
    }
    return false;
  },
  RESET_SOCKET: function handleResetSocket(args) {
    if (require(12563) /* importDefaultResult1 */.socket.connectionState !== importDefault(12578).WILL_RECONNECT) {
      const socket = require(12563) /* importDefaultResult1 */.socket;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/gateway/GatewayConnectionStore.tsx");

export default tmp5;

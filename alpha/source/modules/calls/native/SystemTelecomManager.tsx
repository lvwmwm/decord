// Module ID: 16528
// Function ID: 16529
// Name: SystemTelecomManager
// Dependencies: [5, 32, 17, 6648, 5023, 502, 5019, 2130, 5920, 5112, 5073, 1385, 5833, 5923, 1072, 5924, 3, 16529, 572, 16530, 1252, 5916, 7435, 6786, 11, 7574, 6073, 10348, 1266, 16531, 5806, 7572, 1377, 2120, 2]

// Module 16528 (SystemTelecomManager)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import useChannelName from "useChannelName" /* 5806 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5916 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6073 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6786 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7572 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7574 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 10348 */;
import SystemTelecomPlatform from "SystemTelecomPlatform" /* 16530 */;
import SystemTelecomUtils from "SystemTelecomUtils" /* 16531 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6648 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5920 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import UserStore from "UserStore" /* 1385 */;
import VoiceStateStore from "VoiceStateStore" /* 5833 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5923 */;
import Constants_mod from "Constants" /* 1072 */;
import Constants_mod2 from "Constants" /* 5924 */;
import react_native2 from "react-native" /* 16529 */;
import LifecycleManager from "LifecycleManager" /* 2120 */;
import size from "module_2" /* 2 */;

let c3, c5;

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
function toHandle(getGuildId) {
  let combined;
  let id;
  let recipients;
  let type;
  ({ type, id, recipients } = getGuildId);
  if (recipients == null) {
    recipients = [];
  }
  let num = recipients[0];
  const guildId = getGuildId.getGuildId();
  if (type === constants2.DM) {
    if (num == null) {
      num = 0;
    }
    const _HermesInternal2 = HermesInternal;
    combined = "" + tmp9 + id + "." + type + "." + num;
  } else {
    let num2 = guildId;
    if (guildId == null) {
      num2 = 0;
    }
    const _HermesInternal = HermesInternal;
    combined = "" + tmp2 + id + "." + type + "." + num2;
  }
  return combined;
}
const AppState = react_native.AppState;
const isMultiUserDM = ChannelRecord.isMultiUserDM;
let Constants = Constants_mod2;
({ AnalyticEvents: closure_18, ChannelTypes: closure_19, AppStates: closure_20, ME: closure_21, RTCConnectionStates: closure_22 } = Constants);
Constants = Constants_mod2;
({ Features: closure_23, MediaEngineContextTypes: closure_24 } = Constants);
let obj = new LoggerDefault("SystemTelecomManager");
obj.enableNativeLogger(true);
let closure_26 = react_native2.getConstants().isWaitingUntilRTCConnected;
let c27 = "discord:";
class SystemTelecomManager {
  constructor() {
    let logger;
    let selfMute;
    obj = Object.create(new.target.prototype);
    obj.currentUserId = null;
    obj.currentSessionId = null;
    obj.calls = {};
    obj.incomingCalls = {};
    obj.reportCallEndedTimeouts = {};
    obj.isDeleteable = {};
    obj.emitterSubscriptions = [];
    obj.handleSystemAnswerCall = function handleSystemAnswerCall(callId) {
      callId = callId.callId;
      const result = obj.clearReportCallEndedTimeout(callId);
      const findCallResult = obj.findCall(callId);
      if (null != findCallResult) {
        obj.reportRTCConnected(findCallResult);
        if (!findCallResult.connected) {
          findCallResult.ringing = false;
          findCallResult.connected = true;
          const channel = findCallResult.channel;
          const obj2 = { action_type: "join" };
          const track = AnalyticsUtilsDefault.track;
          const CALLKIT_CLICKED = constants.CALLKIT_CLICKED;
          AnalyticsUtilsDefault;
          const obj3 = AppAnalyticsUtils;
          const merged = Object.assign(obj3.collectChannelAnalyticsMetadata(channel));
          track(CALLKIT_CLICKED, obj2);
          const obj4 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: channel.guild_id, ringer_user_id: findCallResult.ringer_user_id };
          const track2 = AnalyticsUtilsDefault.track;
          const RING_CALL_ACCEPTED = constants.RING_CALL_ACCEPTED;
          AnalyticsUtilsDefault;
          const obj5 = AppAnalyticsUtils;
          const merged1 = Object.assign(obj5.collectChannelAnalyticsMetadata(findCallResult.channel));
          track2(RING_CALL_ACCEPTED, obj4);
          const tmp15 = SelectedChannelActionCreatorsDefault;
          const selectVoiceChannel = tmp15.selectVoiceChannel;
          const id = channel.id;
          const video = findCallResult.video;
          const obj6 = { lockVoiceStateForResume: !GatewayConnectionStore.isConnected() };
          const voiceChannel = selectVoiceChannel(id, video, undefined, obj6);
          const obj7 = DispatcherDefault;
          obj7.dispatch({ type: "FORCE_INVISIBLE", invisible: false });
        }
      }
    };
    obj.handleSystemEndCall = function handleSystemEndCall(callId) {
      callId = callId.callId;
      const result = obj.clearReportCallEndedTimeout(callId);
      const popCallResult = obj.popCall(callId);
      if (null != popCallResult) {
        if ("incoming" === popCallResult.direction) {
          if (popCallResult.ringing) {
            const obj2 = CallActionCreatorsDefault;
            obj2.stopRinging(popCallResult.channel.id);
            obj.reportCallEnded(callId, popCallResult.channel.id);
            const obj3 = { action_type: "decline" };
            const track = AnalyticsUtilsDefault.track;
            const CALLKIT_CLICKED = constants.CALLKIT_CLICKED;
            AnalyticsUtilsDefault;
            const obj4 = AppAnalyticsUtils;
            const merged = Object.assign(obj4.collectChannelAnalyticsMetadata(popCallResult.channel));
            track(CALLKIT_CLICKED, obj3);
            const obj5 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: popCallResult.channel.guild_id, ringer_user_id: popCallResult.ringer_user_id };
            const track2 = AnalyticsUtilsDefault.track;
            const RING_CALL_DECLINED = constants.RING_CALL_DECLINED;
            AnalyticsUtilsDefault;
            const obj6 = AppAnalyticsUtils;
            const merged1 = Object.assign(obj6.collectChannelAnalyticsMetadata(popCallResult.channel));
            track2(RING_CALL_DECLINED, obj5);
          }
        }
        if (popCallResult.channel.id === SelectedChannelStore.getVoiceChannelId()) {
          const obj9 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj9.selectVoiceChannel(null);
        }
      } else {
        const obj7 = SnowflakeUtilsDefault;
        const entries = obj7.entries(obj.incomingCalls);
        const obj8 = entries[Symbol.iterator]();
        while (obj8 !== undefined) {
          let tmp8 = _slicedToArray(tmp5, 2);
          if (tmp8[1] === callId) {
            delete obj.incomingCalls[tmp9];
            let result1 = obj.updateActiveCallStatus();
            obj8.return();
            break;
          }
          break;
        }
      }
    };
    obj.handleSystemSetMuted = function handleSystemSetMuted(muted) {
      muted = muted.muted;
      if (selfMute.isSelfMute() !== muted) {
        logger.info("Updating system -> JS muted state", muted);
        obj = AudioActionCreatorsDefault;
        obj.setSelfMute(constants.DEFAULT, muted, false);
      }
    };
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let channelId;
      let closure_2;
      let selectChannel;
      let v0;
      function fromHandle(c0) {
        let first;
        let tmp6;
        let tmp7;
        let str = c0;
        if (c0.startsWith(closure_1_27)) {
          str = c0.slice(8);
        }
        const tmp = closure_1_5(str.split(/\.|:/), 3);
        obj = { type: +tmp[1], recipientId: tmp6, guildId: tmp7, channelId: first };
        tmp6 = null;
        first = tmp[0];
        const tmp5 = constants;
        if (+tmp[1] === constants.DM) {
          tmp6 = tmp3;
        }
        tmp7 = null;
        if (+tmp[1] === tmp5.GUILD_VOICE) {
          tmp7 = tmp3;
        }
        return obj;
      }
      closure_0 = arg0;
      if (1 === tmp3) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const supportsResult = v0 && selfMute.supports(constants2.VIDEO);
          c2 = supportsResult;
          let closure_3 = fromHandle(c0);
          const type = closure_3.type;
          const recipientId = closure_3.recipientId;
          channelId = closure_3.channelId;
          if (null == closure_130_1.calls[channelId]) {
            if (type === constants.DM) {
              if (null != recipientId) {
                const obj5 = v0(c3[31]);
                c3 = 2;
                c4 = 1;
                const obj8 = { value: obj5.ensurePrivateChannel(recipientId), done: false };
                return obj8;
              }
            }
            const hasChannelResult = closure_1_8(type) && closure_1_10.hasChannel(channelId);
            if (hasChannelResult) {
              const obj4 = v0(c3[25]);
              obj4.call(channelId, c2, true);
              selectChannel();
            }
          } else {
            const obj3 = v0(c3[26]);
            obj3.setVideoEnabled(c2);
            selectChannel();
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        let tmp6 = v0;
        let tmp7 = c3;
        obj = v0(c3[25]);
        obj.call(channelId, c2, true);
        selectChannel();
      }
      await "HermesInternal";
      v0 = 0;
      ({ handle: c0, video: c1 } = closure_0);
      selectChannel = function selectChannel() {
        channel = channel.getChannel(channelId);
        if (null != channel) {
          obj = v0(closure_2_3[23]);
          const privateChannel = obj.selectPrivateChannel(channel.id);
        }
      };
      return "flexDirection";
    });
    obj.handleSystemStartCall = function() {
      return closure_0(...arguments);
    };
    obj.handleIncomingCall = function handleIncomingCall(channelId) {
      const result = obj.forceInvisibleWhileInactive();
      obj.handleCallRing(channelId);
    };
    obj.handleIncomingCallEnded = function handleIncomingCallEnded(channelId) {
      channelId = channelId.channelId;
      const result = obj.forceInvisibleWhileInactive();
      if (null != obj.calls[channelId]) {
        obj.reportCallEnded(obj.calls[channelId].uuid, obj.calls[channelId].channel.id);
      }
    };
    obj.handleSessionStart = function handleSessionStart() {
      obj = obj(dependencyMap[19]);
      obj.flushCallPushToken();
    };
    obj.handleConnectionOpen = function handleConnectionOpen(user) {
      obj.currentUserId = user.user.id;
      obj.currentSessionId = user.sessionId;
      obj = react_native;
      obj.flushPendingEvents();
    };
    obj.handleConnectionClosed = function handleConnectionClosed() {
      obj.currentUserId = null;
      obj.currentSessionId = null;
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      const values = Object.values(obj.calls);
      for (const item10015 of values) {
        let tmp3 = item10015;
        if (item10015.channel.id !== voiceChannelId) {
          let reportCallEndedResult = obj.reportCallEnded(tmp3.uuid, tmp3.channel.id);
        }
        continue;
      }
    };
    obj.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      if (null != obj.calls[channelId]) {
        obj.calls[channelId].deletable = true;
      } else {
        tmp.isDeleteable[channelId] = true;
      }
    };
    obj.handleCallUpdate = function handleCallUpdate(arg0) {
      if (null != obj.calls[arg0.channelId]) {
        const _Object = Object;
        const keys = Object.keys(tmp);
        const ringing = tmp2.ringing;
        const hasItem = keys.includes(AuthenticationStore.getId());
        obj.calls[arg0.channelId].ringing = hasItem;
        const tmp3 = !ringing && hasItem;
        if (!tmp3) {
          const tmp4 = "incoming" === obj.calls[arg0.channelId].direction && obj.calls[arg0.channelId].deletable && !obj.calls[arg0.channelId].connected && ringing && !hasItem;
          if (tmp4) {
            obj.reportCallEnded(obj.calls[arg0.channelId].uuid, obj.calls[arg0.channelId].channel.id);
          }
        }
      }
    };
    obj.handleCallDelete = function handleCallDelete(arg0) {
      let deletable;
      if (obj.calls[arg0.channelId] != null) {
        deletable = tmp.deletable;
      }
      if (deletable) {
        obj.reportCallEnded(obj.calls[arg0.channelId].uuid, obj.calls[arg0.channelId].channel.id);
      }
    };
    obj.handleChannelDelete = function handleChannelDelete(arg0) {
      if (null != obj.calls[arg0.channel.id]) {
        obj.reportCallEnded(obj.calls[arg0.channel.id].uuid, obj.calls[arg0.channel.id].channel.id);
      }
    };
    obj.handleVoiceChannelSelect = function handleVoiceChannelSelect(channelId) {
      channelId = channelId.channelId;
      if (null == channelId) {
        if (null != channelId) {
          const obj2 = obj;
          if (!obj.answerCall(channelId)) {
            obj2.startCall(channelId, tmp2);
          }
        } else {
          const _Object = Object;
          const values = Object.values(obj.calls);
          for (const item10023 of values) {
            if (!item10023.ringing) {
              let endCallResult = obj.endCall(tmp11.channel.id);
            }
            continue;
          }
        }
      } else {
        obj = SystemTelecomUtils;
      }
    };
    obj.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      let currentUserId;
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        let guildId;
        let selfVideo;
        let sessionId;
        let userId;
        channelId = channelId.channelId;
        ({ guildId, userId, sessionId, selfVideo } = channelId);
        obj = obj(dependencyMap[29]);
        if (obj.isSystemTelecomEnabledForChannel(guildId, channelId)) {
          if (null != channelId) {
            if (userId === currentUserId.currentUserId) {
              if (sessionId === currentUserId.currentSessionId) {
                if (null == currentUserId.calls[channelId]) {
                  if (!currentUserId.answerCall(channelId)) {
                    currentUserId.startCall(channelId, selfVideo);
                  }
                } else {
                  currentUserId.reportCall(channelId);
                }
              } else if (null != currentUserId.calls[channelId]) {
                currentUserId.reportCallEnded(currentUserId.calls[channelId].uuid, currentUserId.calls[channelId].channel.id);
              }
            } else {
              currentUserId.reportCall(channelId);
            }
          }
        }
      });
    };
    obj.handleRTCConnectionState = function handleRTCConnectionState(context) {
      if (context.context === constants4.DEFAULT) {
        if (tmp === constants3.RTC_CONNECTED) {
          if (null != obj.calls[tmp2]) {
            obj.reportRTCConnected(obj.calls[tmp2]);
          }
        }
      }
    };
    obj.handleAudioToggleSelfMute = function handleAudioToggleSelfMute() {
      if (AppState.currentState === constants2.ACTIVE) {
        const isSelfMuteResult = MediaEngineStore.isSelfMute();
        const _Object = Object;
        const values = Object.values(obj.calls);
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = nextResult;
          if (nextResult.muted !== isSelfMuteResult) {
            tmp4.muted = isSelfMuteResult;
            obj = react_native;
            let setCallMutedResult = obj.setCallMuted(tmp4.uuid, isSelfMuteResult);
            let infoResult = obj.info("Updating JS -> system muted state", isSelfMuteResult);
          }
          continue;
        }
      }
    };
    return obj;
  }
  initialize() {
    obj = DispatcherDefault;
    const subscription = obj.subscribe("START_SESSION", this.handleSessionStart);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("CONNECTION_CLOSED", this.handleConnectionClosed);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("CALL_CREATE", this.handleCallCreate);
    const obj5 = DispatcherDefault;
    const subscription4 = obj5.subscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj6 = DispatcherDefault;
    const subscription5 = obj6.subscribe("CALL_DELETE", this.handleCallDelete);
    const obj7 = DispatcherDefault;
    const subscription6 = obj7.subscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj8 = DispatcherDefault;
    const subscription7 = obj8.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj9 = DispatcherDefault;
    const subscription8 = obj9.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    const obj10 = DispatcherDefault;
    const subscription9 = obj10.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleAudioToggleSelfMute);
    const obj11 = DispatcherDefault;
    const subscription10 = obj11.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const emitterSubscriptions = this.emitterSubscriptions;
    const push = emitterSubscriptions.push;
    const items = [...SystemTelecomPlatform.subscribeToCallPushToken()];
    SystemTelecomPlatform;
    const obj13 = react_native;
    items[tmp12] = obj13.onIncomingCall(this.handleIncomingCall);
    const sum = tmp12 + 1;
    const obj14 = react_native;
    items[sum] = obj14.onIncomingCallEnded(this.handleIncomingCallEnded);
    const sum1 = sum + 1;
    const obj15 = react_native;
    items[sum1] = obj15.onSystemStartCall(this.handleSystemStartCall);
    const sum2 = sum1 + 1;
    const obj16 = react_native;
    items[sum2] = obj16.onSystemAnswerCall(this.handleSystemAnswerCall);
    const sum3 = sum2 + 1;
    const obj17 = react_native;
    items[sum3] = obj17.onSystemEndCall(this.handleSystemEndCall);
    const obj18 = react_native;
    items[sum3 + 1] = obj18.onSystemSetMuted(this.handleSystemSetMuted);
    push.apply(items);
  }
  terminate() {
    obj = DispatcherDefault;
    obj.unsubscribe("START_SESSION", this.handleSessionStart);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("CONNECTION_CLOSED", this.handleConnectionClosed);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("CALL_CREATE", this.handleCallCreate);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj6 = DispatcherDefault;
    obj6.unsubscribe("CALL_DELETE", this.handleCallDelete);
    const obj7 = DispatcherDefault;
    obj7.unsubscribe("CHANNEL_DELETE", this.handleChannelDelete);
    const obj8 = DispatcherDefault;
    obj8.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj9 = DispatcherDefault;
    obj9.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    const obj10 = DispatcherDefault;
    obj10.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleAudioToggleSelfMute);
    const obj11 = DispatcherDefault;
    obj11.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState);
    const emitterSubscriptions = this.emitterSubscriptions;
    const item = emitterSubscriptions.forEach((remove) => remove.remove());
    this.emitterSubscriptions = [];
  }
  clearReportCallEndedTimeout(callId) {
    clearTimeout(this.reportCallEndedTimeouts[callId]);
    delete this.reportCallEndedTimeouts[callId];
  }
  findCall(callId) {
    const values = Object.values(this.calls);
    for (const item10012 of values) {
      if (item10012.uuid === callId) {
        obj.return();
        return item10012;
      }
    }
    return null;
  }
  popCall(callId) {
    const self = this;
    const findCallResult = this.findCall(callId);
    if (null != findCallResult) {
      const _HermesInternal = HermesInternal;
      obj = RequestGatewaySocketAll;
      obj.stopRequest("call:" + findCallResult.uuid);
      delete self.calls[tmp.channel.id];
      const result = self.updateActiveCallStatus();
    }
    return findCallResult;
  }
  startCall(arg0) {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const self = this;
    return (async (arg0, value) => {
      let channel;
      let closure_1;
      let closure_2;
      let handle;
      let obj8;
      let result1;
      let tmp;
      let uuid;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              obj5 = undefined;
              channel = channel.getChannel(closure_0);
              if (null != channel) {
                if (null == self.calls[closure_0]) {
                  obj5 = { uuid: obj8.v4(), channel, handle: toHandle(channel), direction: "outgoing", connected: false, ringing: false, video: flag, muted: selfMute.isSelfMute(), deletable: true, ringer_user_id: self.currentUserId };
                  obj8 = result1(c3[28]);
                  self.calls[closure_0] = obj5;
                  const result = self.updateActiveCallStatus();
                  const _HermesInternal = HermesInternal;
                  const obj9 = tmp26(c3[27]);
                  obj9.setRequestedBy("call:" + obj5.uuid);
                  const obj10 = result1(c3[29]);
                  const tmp38 = result1;
                  result1 = obj10.isSystemTelecomEnabled();
                  if (result1) {
                    const tmp19 = tmp(c3[17]);
                    ({ uuid, handle } = obj5);
                    const startOutgoingCall = tmp19.startOutgoingCall;
                    const tmp38Result = tmp38(c3[30]);
                    result1 = startOutgoingCall(uuid, handle, tmp38Result.computeChannelName(obj5.channel, UserStore, RelationshipStore), obj5.video);
                    const obj3 = tmp(c3[17]);
                    obj3.setCallMuted(obj5.uuid, obj5.muted);
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: result1, done: false };
                    return obj6;
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            tmp = tmp26;
            logger.warn("Failed to start outgoing call:", tmp);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const result2 = closure_129_2.handleOutgoingCallStarted(obj5.uuid);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp26) {
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  handleOutgoingCallStarted(uuid) {
    const self = this;
    const findCallResult = this.findCall(uuid);
    if (null != findCallResult) {
      obj = react_native;
      const result = obj.reportOutgoingCallConnecting(findCallResult.uuid);
      self.reportCall(findCallResult.channel.id);
    }
  }
  answerCall(channelId) {
    const self = this;
    if (null == this.calls[channelId]) {
      return false;
    } else {
      let ringing = tmp.ringing;
      this.calls[channelId].connected = true;
      this.calls[channelId].ringing = false;
      if (ringing) {
        ringing = "incoming" === tmp.direction;
      }
      if (ringing) {
        obj = SystemTelecomUtils;
        if (obj.isSystemTelecomEnabled()) {
          const obj2 = react_native;
          obj2.answerCall(this.calls[channelId].uuid);
          const result = self.clearReportCallEndedTimeout(tmp.uuid);
          self.reportRTCConnected(this.calls[channelId]);
        } else {
          self.reportCallEnded(this.calls[channelId].uuid);
        }
      }
      return true;
    }
  }
  endCall(arg0) {
    const self = this;
    if (null != this.calls[arg0]) {
      delete self.calls[tmp];
      const result = self.updateActiveCallStatus();
      const result1 = self.clearReportCallEndedTimeout(tmp2.uuid);
      obj = SystemTelecomUtils;
      const result2 = obj.isSystemTelecomEnabled();
      const obj2 = react_native;
      if (result2) {
        obj2.endCall(this.calls[arg0].uuid);
      } else {
        obj2.reportCallEnded(this.calls[arg0].uuid);
      }
    }
  }
  reportCall(channelId, callerName) {
    let handle;
    let uuid;
    if (null != this.calls[channelId]) {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      const isSystemTelecomEnabledForChannel = SystemTelecomUtils.isSystemTelecomEnabledForChannel;
      SystemTelecomUtils;
      const obj6 = ChannelStore;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (isSystemTelecomEnabledForChannel(guild_id, channelId)) {
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp5 = type !== constants2.GUILD_VOICE;
        const tmp4 = constants2;
        if (tmp5) {
          tmp5 = VoiceStateStore.hasVideo(channelId) && MediaEngineStore.supports(constants5.VIDEO);
          const hasVideoResult = VoiceStateStore.hasVideo(channelId) && MediaEngineStore.supports(constants5.VIDEO);
        }
        this.calls[channelId].video = tmp5;
        const tmp31Result = SystemTelecomUtils;
        if (tmp31Result.isSystemTelecomEnabled()) {
          let channelName = callerName;
          ({ uuid, handle } = this.calls[channelId]);
          const updateCall = react_native.updateCall;
          if (callerName == null) {
            const tmp31Result3 = useChannelName;
            channelName = tmp31Result3.computeChannelName(tmp.channel, UserStore, RelationshipStore);
          }
          updateCall(uuid, handle, channelName, this.calls[channelId].video);
        }
        let tmp20 = "outgoing" !== tmp.direction || tmp.connected;
        if (!tmp20) {
          let flag = false;
          if (VoiceStateStore.isInChannel(channelId)) {
            const channel1 = obj6.getChannel(channelId);
            let type1;
            if (channel1 != null) {
              type1 = channel1.type;
            }
            flag = type1 === tmp4.GUILD_VOICE || SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
            const tmp24 = type1 === tmp4.GUILD_VOICE || SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
          }
          tmp20 = !flag;
        }
        if (!tmp20) {
          let tmp26 = closure_26;
          if (tmp26) {
            tmp26 = !(RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === channelId);
            RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === channelId;
          }
          tmp20 = tmp26;
        }
        if (!tmp20) {
          this.calls[channelId].connected = true;
          const tmp31Result4 = SystemTelecomUtils;
          if (tmp31Result4.isSystemTelecomEnabled()) {
            const obj5 = react_native;
            const result = obj5.reportOutgoingCallConnected(tmp.uuid);
          }
        }
      } else {
        return null;
      }
    }
  }
  reportCallEnded(callId, arg1) {
    const self = this;
    const result = this.clearReportCallEndedTimeout(callId);
    obj = react_native;
    obj.reportCallEnded(callId);
    if (null != arg1) {
      delete self.calls[arg1];
      if (self.incomingCalls[arg1] === callId) {
        delete self.incomingCalls[arg1];
      }
      const result1 = self.updateActiveCallStatus();
    }
  }
  createIncomingCall(channelId, callId, ringerUserId) {
    let combined;
    let flag;
    let id;
    let recipients;
    let tmp26;
    let type;
    let v4Result = callId;
    if (callId === undefined) {
      obj = v1;
      v4Result = obj.v4();
    }
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    const isSystemTelecomEnabledForChannel = SystemTelecomUtils.isSystemTelecomEnabledForChannel;
    SystemTelecomUtils;
    const obj2 = ChannelStore;
    const tmp4 = channelId;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (isSystemTelecomEnabledForChannel(guild_id, channelId)) {
      const self = this;
      if (null == channel) {
        self.incomingCalls[channelId] = v4Result;
        const result = self.updateActiveCallStatus();
        return null;
      } else {
        ({ type, id, recipients } = channel);
        const obj3 = { uuid: v4Result, handle: combined, channel, direction: "incoming", ringing: true, connected: flag, muted: MediaEngineStore.isSelfMute(), video: tmp26, deletable: true === self.isDeleteable[channelId], ringer_user_id: ringerUserId };
        if (recipients == null) {
          recipients = [];
        }
        let num = recipients[0];
        const guildId = channel.getGuildId();
        if (type === constants2.DM) {
          if (num == null) {
            num = 0;
          }
          const _HermesInternal2 = HermesInternal;
          combined = "" + tmp16 + id + "." + type + "." + num;
        } else {
          let num2 = guildId;
          if (guildId == null) {
            num2 = 0;
          }
          const _HermesInternal = HermesInternal;
          combined = "" + tmp9 + id + "." + type + "." + num2;
        }
        flag = false;
        const obj4 = VoiceStateStore;
        if (VoiceStateStore.isInChannel(channelId)) {
          const channel1 = obj2.getChannel(channelId);
          let type1;
          if (channel1 != null) {
            type1 = channel1.type;
          }
          flag = type1 === tmp8.GUILD_VOICE || SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
          const tmp24 = type1 === tmp8.GUILD_VOICE || SortedVoiceStateStore.countVoiceStatesForChannel(channelId) >= 2;
        }
        tmp26 = channel.type !== tmp8.GUILD_VOICE;
        const obj5 = MediaEngineStore;
        if (tmp26) {
          tmp26 = obj4.hasVideo(channelId) && obj5.supports(constants5.VIDEO);
          const hasVideoResult = obj4.hasVideo(channelId) && obj5.supports(constants5.VIDEO);
        }
        delete self.isDeleteable[tmp4];
        return obj3;
      }
    } else {
      return null;
    }
  }
  handleCallRing(channelId) {
    const self = this;
    channelId = channelId.channelId;
    const callId = channelId.callId;
    this.reportCallEndedTimeouts[callId] = setTimeout(() => {
      self.reportCallEnded(callId, channelId);
    }, 30000);
    let tmp3 = tmp;
    const tmp2 = null != this.calls[channelId] && this.calls[channelId].uuid !== callId;
    if (tmp2) {
      self.reportCallEnded(tmp.uuid, tmp.channel.id);
      tmp3 = null;
    }
    let tmp5 = null == tmp3;
    if (tmp5) {
      const incomingCall = self.createIncomingCall(channelId, callId, channelId.ringerUserId);
      tmp5 = null != incomingCall;
      tmp3 = incomingCall;
    }
    if (tmp5) {
      self.calls[channelId] = tmp3;
      const result = self.updateActiveCallStatus();
      self.reportCall(channelId, channelId.callerName);
    }
    const result1 = self.preloadRingingChannel(channelId);
  }
  preloadRingingChannel(channelId) {
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    let guild_id;
    const preload = ChannelActionCreatorsDefault.preload;
    ChannelActionCreatorsDefault;
    if (basicChannel != null) {
      guild_id = basicChannel.guild_id;
    }
    if (guild_id == null) {
      guild_id = closure_21;
    }
    preload(guild_id, channelId);
  }
  forceInvisibleWhileInactive() {
    if (AppState.currentState !== constants3.ACTIVE) {
      obj = DispatcherDefault;
      obj.dispatch({ type: "FORCE_INVISIBLE", invisible: true });
    }
  }
  reportRTCConnected(findCallResult) {
    let result = closure_26;
    if (result) {
      result = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === findCallResult.channel.id;
      RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === findCallResult.channel.id;
    }
    if (result) {
      const obj2 = SystemTelecomUtils;
      result = obj2.isSystemTelecomEnabled();
    }
    if (result) {
      if ("incoming" === findCallResult.direction) {
        const obj3 = react_native;
        obj3.reportCallConnected(findCallResult.uuid);
      } else if (!findCallResult.connected) {
        const self = this;
        this.reportCall(findCallResult.channel.id);
      }
    }
  }
  updateActiveCallStatus() {
    obj = PlatformUtils;
    if (obj.isIOS()) {
      const _Object = Object;
      const self = this;
      let tmp2 = Object.keys(this.calls).length > 0;
      if (!tmp2) {
        const _Object2 = Object;
        tmp2 = Object.keys(self.incomingCalls).length > 0;
      }
      const result = MediaEngineStore.setHasActiveSystemTelecomCall(tmp2);
    }
  }
}
const prototype = SystemTelecomManager.prototype;
const mostRecentSelectedTextChannelIds = new SystemTelecomManager();
class SystemTelecomLifecycleManager extends LifecycleManager {
  _initialize() {
    closure_29.initialize();
  }
  _terminate() {
    closure_29.terminate();
  }
}
const prototype2 = SystemTelecomLifecycleManager.prototype;
const systemTelecomLifecycleManager = new SystemTelecomLifecycleManager();
let result = size.fileFinishedImporting("modules/calls/native/SystemTelecomManager.tsx");

export default systemTelecomLifecycleManager;

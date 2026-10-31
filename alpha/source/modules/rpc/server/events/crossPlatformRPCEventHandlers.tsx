// Module ID: 16364
// Function ID: 16365
// Name: crossPlatformRPCEventHandlers
// Dependencies: [2038, 2013, 4881, 6714, 4863, 4926, 4885, 2006, 5764, 4917, 1383, 5679, 6450, 1072, 11809, 11812, 9333, 6734, 16293, 16287, 8910, 12, 16297, 16288, 9326, 7508, 16296, 1084, 558, 9331, 16365, 2]

// Module 16364 (crossPlatformRPCEventHandlers)
import _modDef12 from "module_12" /* 12 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildRecord from "GuildRecord" /* 4881 */;
import frameDeepLinks from "frameDeepLinks" /* 7508 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8910 */;
import getSocketFrameDefault from "getSocketFrame" /* 9326 */;
import transformUserDefault from "transformUser" /* 9331 */;
import RPCErrorDefault from "RPCError" /* 9333 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11809 */;
import RPCHelpers from "RPCHelpers" /* 11812 */;
import ConjureVoiceSessionCoordinatorDefault from "ConjureVoiceSessionCoordinator" /* 16287 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16288 */;
import guildVoice from "guildVoice" /* 16293 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 16296 */;
import transformApplicationDefault from "transformApplication" /* 16365 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import RunningGameStore from "RunningGameStore" /* 2013 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import UserStore from "UserStore" /* 1383 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import Constants_mod from "Constants" /* 6450 */;
import Constants_mod2 from "Constants" /* 1072 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16297 */;
import size from "module_2" /* 2 */;

let application, gameForPID, streamerActiveStreamMetadata;

let RPCEvents;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_16;
let closure_17;
let closure_18;
let items;
let items13;
let items14;
let items15;
let items20;
let items21;
let obj11;
let obj16;
let obj18;
let obj22;
let obj24;
let obj26;
let obj28;
let obj30;
let obj32;
let obj38;
let obj40;
let obj43;
let obj45;
let obj49;
let obj5;
let obj51;
let obj7;
let obj9;
function handler() {

}
const handler2 = function handler() {

};
function messageEventsValidation(string) {
  let stringResult;
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: stringResult.required() };
  const keys = obj.required().keys;
  obj.required();
  stringResult = string.string();
  return keys(obj2);
}
function messageEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    const obj4 = RPCHelpers;
    const tmp11 = require;
    if (obj4.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes)) {
      const tmp11Result = tmp11(6734);
      if (tmp11Result.userCannotSeeNSFWContent(channel)) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj = { errorCode: constants3.INVALID_CHANNEL };
        const tmp3 = RPCErrorDefault;
        const tmp32 = new tmp3(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp32;
      }
    }
  }
  const obj2 = { errorCode: constants3.INVALID_CHANNEL };
  const tmp9 = RPCErrorDefault;
  const tmp92 = new tmp9(obj2, "Invalid channel id: " + channel_id);
  throw tmp92;
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const obj = guildVoice;
  if (obj.isGuildVoiceSocket(socket)) {
    const tmpResult = guildVoice;
    const guildVoiceChannel = tmpResult.getGuildVoiceChannel(channel_id);
  } else if (null != channel_id) {
    if (null == ChannelStore.getChannel(channel_id)) {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants3.INVALID_CHANNEL };
      const tmp6 = RPCErrorDefault;
      const tmp62 = new tmp6(obj2, "Invalid channel id: " + channel_id);
      throw tmp62;
    }
  }
}
function voiceSessionEventValidation(string) {
  let stringResult;
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { session_id: stringResult.required() };
  const keys = obj.required().keys;
  obj.required();
  stringResult = string.string();
  return keys(obj2);
}
function voiceSessionEvent(args) {
  const session_id = args.args.session_id;
  const socket = args.socket;
  const obj = ConjureVoiceSessionCoordinatorDefault;
  const result = obj.validateEventSubscription(socket, session_id);
}
const getGuildIconURL = GuildRecord.getGuildIconURL;
let Constants = Constants_mod2;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ ApplicationFlags: closure_16, ChannelTypes: closure_17, RPCErrors: closure_18, RPCEvents } = Constants);
let obj = { [RPC_SCOPE_CONFIG.ANY]: items };
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
let obj2 = {};
let obj3 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { guild_id: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      let obj = { errorCode: constants3.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      let tmp3 = RPCErrorDefault;
      const self = this;
      const self2 = this;
      const tmp32 = new tmp3(obj, "Invalid guild id: " + guild_id);
      throw tmp32;
    } else {
      return (prevState) => {
        let tmp3;
        prevState = prevState.prevState;
        const dispatch = prevState.dispatch;
        const guild = GuildStore.getGuild(guild_id);
        if (null != guild) {
          if (null != prevState) {
            return prevState;
          }
          const obj = { id: null, name: null, icon_url: tmp3 };
          ({ id: obj.id, name: obj.name } = guild);
          tmp3 = getGuildIconURL(guild, 128);
          if (tmp3 == null) {
            tmp3 = null;
          }
          const obj2 = { guild: obj, online: 0 };
          dispatch(obj2);
          const obj5 = { name: null, icon: null };
          ({ name: obj3.name, icon: obj3.icon } = guild);
          prevState = obj5;
        }
      };
    }
  }
};
obj2[RPCEvents.GUILD_STATUS] = obj3;
let obj4 = {
  scope: obj5,
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { channel_id: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(args) {
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    let obj = channel_id(16293);
    const tmp = channel_id;
    if (obj.isGuildVoiceSocket(socket)) {
      const tmpResult = tmp(16293);
      const guildVoiceChannel = tmpResult.getGuildVoiceChannel(channel_id);
    }
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj2 = { errorCode: constants3.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp5 = RPCErrorDefault;
      const tmp52 = new tmp5(obj2, "Invalid channel id: " + channel_id);
      throw tmp52;
    } else {
      return (arg0) => {
        let closure_129_0;
        let prevState;
        ({ prevState, dispatch: closure_129_0 } = arg0);
        let guildId;
        const channel = ChannelStore.getChannel(channel_id);
        if (null != channel) {
          guildId = channel.getGuildId();
          const _Object = Object;
          const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
          if (prevState) {
            let obj2 = _modDef12;
            const differenceByResult = obj2.differenceBy(values, prevState, (userId) => userId.userId);
            const item = differenceByResult.forEach((item) => {
              const obj = { channel_id: channel.id };
              const obj2 = channel_id(closure_2_3[15]);
              const merged = Object.assign(obj2.transformVoiceState(closure_2, channel.id, item));
              return closure_1_0(obj);
            });
          }
          return values;
        }
      };
    }
  }
};
obj5 = {};
const VOICE_STATE_CREATE = RPCEvents.VOICE_STATE_CREATE;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj5[ANY] = items1;
obj2[VOICE_STATE_CREATE] = obj4;
const obj6 = {
  scope: obj7,
  validation(string) {
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { channel_id: stringResult.required() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    return keys(obj2);
  },
  handler(args) {
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    let obj = channel_id(16293);
    const tmp = channel_id;
    if (obj.isGuildVoiceSocket(socket)) {
      const tmpResult = tmp(16293);
      const guildVoiceChannel = tmpResult.getGuildVoiceChannel(channel_id);
    }
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj2 = { errorCode: constants3.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp5 = RPCErrorDefault;
      const tmp52 = new tmp5(obj2, "Invalid channel id: " + channel_id);
      throw tmp52;
    } else {
      return (dispatch) => {
        dispatch = dispatch.dispatch;
        let guildId;
        const prevState = dispatch.prevState;
        const channel = ChannelStore.getChannel(channel_id);
        if (null != channel) {
          guildId = channel.getGuildId();
          const _Object = Object;
          const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
          let obj2 = _modDef12;
          const differenceByResult = obj2.differenceBy(prevState, values, (userId) => userId.userId);
          const item = differenceByResult.forEach((item) => {
            const obj = { channel_id: channel.id };
            const obj2 = channel_id(closure_2_3[15]);
            const merged = Object.assign(obj2.transformVoiceState(closure_2, channel.id, item));
            return dispatch(obj);
          });
          return values;
        }
      };
    }
  }
};
obj7 = {};
const VOICE_STATE_DELETE = RPCEvents.VOICE_STATE_DELETE;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items2 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj7[ANY2] = items2;
obj2[VOICE_STATE_DELETE] = obj6;
const VOICE_STATE_UPDATE = RPCEvents.VOICE_STATE_UPDATE;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj8 = {
  scope: obj9,
  handler(args) {
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    let obj = channel_id(16293);
    const tmp = channel_id;
    if (obj.isGuildVoiceSocket(socket)) {
      const tmpResult = tmp(16293);
      const guildVoiceChannel = tmpResult.getGuildVoiceChannel(channel_id);
    }
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj2 = { errorCode: constants3.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp5 = RPCErrorDefault;
      const tmp52 = new tmp5(obj2, "Invalid channel id: " + channel_id);
      throw tmp52;
    } else {
      return (dispatch) => {
        dispatch = dispatch.dispatch;
        let guildId;
        const prevState = dispatch.prevState;
        const channel = ChannelStore.getChannel(channel_id);
        if (null != channel) {
          guildId = channel.getGuildId();
          const _Object = Object;
          const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(channel.id));
          const mapped = values.map((item) => {
            const obj = channel_id(closure_2_3[15]);
            return obj.transformVoiceState(closure_2, channel.id, item);
          });
          const obj2 = _modDef12;
          const differenceWithResult = obj2.differenceWith(mapped, prevState, _modDef12.isEqual);
          const item = differenceWithResult.forEach((item) => {
            const obj = { channel_id: channel.id };
            const merged = Object.assign(item);
            return dispatch(obj);
          });
          return mapped;
        }
      };
    }
  }
};
obj9 = {};
const createRPCEvent = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const VOICE_STATE_UPDATE2 = RPCEvents.VOICE_STATE_UPDATE;
const ANY3 = RPC_SCOPE_CONFIG.ANY;
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj9[ANY3] = items3;
obj2[VOICE_STATE_UPDATE] = createRPCEvent(VOICE_STATE_UPDATE2, obj8);
const obj10 = {
  scope: obj11,
  handler(socket) {
    socket = socket.socket;
    return (arg0) => {
      let dispatch;
      let prevState;
      let tmpResult;
      ({ prevState, dispatch } = arg0);
      const obj = guildVoice;
      if (obj.isGuildVoiceSocket(socket)) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (type !== constants.GUILD_VOICE) {
          if (null != prevState) {
            const obj2 = { state: "DISCONNECTED", hostname: null, pings: [], average_ping: 0, last_ping: 0 };
            dispatch(obj2);
          }
        }
      }
      const obj3 = { state: tmpResult.getVoiceConnectionState(RTCConnectionStore.getState()), hostname: RTCConnectionStore.getHostname(), pings: RTCConnectionStore.getPings(), average_ping: RTCConnectionStore.getAveragePing(), last_ping: RTCConnectionStore.getLastPing() };
      tmpResult = RPCHelpers;
      const obj5 = _modDef12;
      if (!obj5.isEqual(obj3, prevState)) {
        dispatch(obj3);
      }
      return obj3;
    };
  }
};
obj11 = {};
const VOICE_CONNECTION_STATUS = RPCEvents.VOICE_CONNECTION_STATUS;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items4 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj11[ANY4] = items4;
obj2[VOICE_CONNECTION_STATUS] = obj10;
obj2[RPCEvents.MESSAGE_CREATE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents });
obj2[RPCEvents.MESSAGE_UPDATE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents });
obj2[RPCEvents.MESSAGE_DELETE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const SPEAKING_START = RPCEvents.SPEAKING_START;
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents });
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj15 = { scope: obj16, handler: speakingEvents };
obj16 = {};
const createRPCEvent2 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const SPEAKING_START2 = RPCEvents.SPEAKING_START;
const ANY5 = RPC_SCOPE_CONFIG.ANY;
const items5 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj16[ANY5] = items5;
obj2[SPEAKING_START] = createRPCEvent2(SPEAKING_START2, obj15);
const SPEAKING_STOP = RPCEvents.SPEAKING_STOP;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj17 = { scope: obj18, handler: speakingEvents };
obj18 = {};
const createRPCEvent3 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const SPEAKING_STOP2 = RPCEvents.SPEAKING_STOP;
const ANY6 = RPC_SCOPE_CONFIG.ANY;
const items6 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj18[ANY6] = items6;
obj2[SPEAKING_STOP] = createRPCEvent3(SPEAKING_STOP2, obj17);
obj2[RPCEvents.VOICE_SESSION_PARTICIPANTS_UPDATE] = {
  scope: obj,
  validation: voiceSessionEventValidation,
  handler(args) {
    const session_id = args.args.session_id;
    const socket = args.socket;
    let obj = socket(16287);
    const result = obj.validateEventSubscription(socket, session_id);
    return (prevState) => {
      prevState = prevState.prevState;
      const dispatch = prevState.dispatch;
      const obj = ConjureVoiceSessionCoordinatorDefault;
      const participantsForEventSubscription = obj.getParticipantsForEventSubscription(socket, session_id);
      let tmp5 = prevState;
      const tmp3 = session_id;
      if (null != participantsForEventSubscription) {
        let isEqualResult = null == prevState;
        if (!isEqualResult) {
          const tmpResult = _modDef12;
          isEqualResult = tmpResult.isEqual(participantsForEventSubscription, prevState);
        }
        tmp5 = participantsForEventSubscription;
        if (!isEqualResult) {
          const obj2 = { session_id: tmp3, participants: participantsForEventSubscription };
          dispatch(obj2);
          tmp5 = participantsForEventSubscription;
        }
      }
      return tmp5;
    };
  }
};
obj2[RPCEvents.VOICE_SESSION_SPEAKING_START] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
obj2[RPCEvents.VOICE_SESSION_SPEAKING_STOP] = { scope: obj, validation: voiceSessionEventValidation, handler: voiceSessionEvent };
obj2[RPCEvents.GUILD_CREATE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler });
obj2[RPCEvents.CHANNEL_CREATE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 };
const obj21 = {
  scope: obj22,
  handler() {

  }
};
obj22 = {};
const GAME_JOIN = RPCEvents.GAME_JOIN;
const ANY7 = RPC_SCOPE_CONFIG.ANY;
const items7 = [, ];
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 });
items7[0] = OAuth2Scopes.OAuth2Scopes.RPC;
items7[1] = RPC_LOCAL_SCOPE;
obj22[ANY7] = items7;
obj2[GAME_JOIN] = obj21;
const obj23 = {
  scope: obj24,
  handler() {

  }
};
obj24 = {};
const GAME_SPECTATE = RPCEvents.GAME_SPECTATE;
const ANY8 = RPC_SCOPE_CONFIG.ANY;
const items8 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj24[ANY8] = items8;
obj2[GAME_SPECTATE] = obj23;
const ACTIVITY_JOIN = RPCEvents.ACTIVITY_JOIN;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj25 = {
  scope: obj26,
  handler() {

  }
};
obj26 = {};
const createRPCEvent4 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const ACTIVITY_JOIN2 = RPCEvents.ACTIVITY_JOIN;
const ANY9 = RPC_SCOPE_CONFIG.ANY;
const items9 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj26[ANY9] = items9;
obj2[ACTIVITY_JOIN] = createRPCEvent4(ACTIVITY_JOIN2, obj25);
const obj27 = {
  scope: obj28,
  handler() {

  }
};
obj28 = {};
const ACTIVITY_JOIN_REQUEST = RPCEvents.ACTIVITY_JOIN_REQUEST;
const ANY10 = RPC_SCOPE_CONFIG.ANY;
const items10 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj28[ANY10] = items10;
obj2[ACTIVITY_JOIN_REQUEST] = obj27;
const obj29 = {
  scope: obj30,
  handler() {

  }
};
obj30 = {};
const ACTIVITY_SPECTATE = RPCEvents.ACTIVITY_SPECTATE;
const ANY11 = RPC_SCOPE_CONFIG.ANY;
const items11 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj30[ANY11] = items11;
obj2[ACTIVITY_SPECTATE] = obj29;
const obj31 = {
  scope: obj32,
  handler() {

  }
};
obj32 = {};
const ACTIVITY_INVITE = RPCEvents.ACTIVITY_INVITE;
const ANY12 = RPC_SCOPE_CONFIG.ANY;
const items12 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj32[ANY12] = items12;
obj2[ACTIVITY_INVITE] = obj31;
obj2[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = {
  scope: "Array",
  handler() {

  }
};
const ACTIVITY_LAYOUT_MODE_UPDATE = RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj33 = {
  scope: "Array",
  handler() {

  }
};
obj2[ACTIVITY_LAYOUT_MODE_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, obj33);
obj2[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = {
  scope: "Array",
  handler() {

  }
};
const obj34 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler(socket) {
    socket = socket.socket;
    const tmp = validateConjureAppFrameDefault(socket);
    return (prevState) => {
      prevState = prevState.prevState;
      if (null != prevState) {
        return prevState;
      } else {
        const tmp7 = getSocketFrameDefault(socket);
        const obj3 = frameDeepLinks;
        const frameDeepLinkChannelId = obj3.getFrameDeepLinkChannelId(tmp7);
        let takeFrameDeepLinkResult = null;
        const tmp8 = require;
        if (null != tmp7) {
          takeFrameDeepLinkResult = null;
          if (null != frameDeepLinkChannelId) {
            const tmp8Result = tmp8(7508);
            takeFrameDeepLinkResult = tmp8Result.takeFrameDeepLink(frameDeepLinkChannelId, tmp7.applicationId);
          }
        }
        if (null != takeFrameDeepLinkResult) {
          const obj = { hash: takeFrameDeepLinkResult };
          tmp(obj);
        }
        return true;
      }
    };
  }
};
items13 = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPCEvents.FRAME_DEEP_LINK] = obj34;
obj2[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsUpdateEvent;
const THERMAL_STATE_UPDATE = RPCEvents.THERMAL_STATE_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj35 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items14 },
  handler() {

  }
};
items14 = [RPC_AUTHENTICATED_SCOPE];
obj2[THERMAL_STATE_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.THERMAL_STATE_UPDATE, obj35);
const obj36 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items15 },
  handler() {

  }
};
items15 = [RPC_AUTHENTICATED_SCOPE];
obj2[RPCEvents.ORIENTATION_UPDATE] = obj36;
const obj37 = {
  scope: obj38,
  handler() {

  }
};
obj38 = {};
const VOICE_CHANNEL_SELECT = RPCEvents.VOICE_CHANNEL_SELECT;
const ANY13 = RPC_SCOPE_CONFIG.ANY;
const items16 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj38[ANY13] = items16;
obj2[VOICE_CHANNEL_SELECT] = obj37;
const obj39 = {
  scope: obj40,
  handler() {

  }
};
obj40 = {};
const NOTIFICATION_CREATE = RPCEvents.NOTIFICATION_CREATE;
const ALL = RPC_SCOPE_CONFIG.ALL;
const items17 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj40[ALL] = items17;
obj2[NOTIFICATION_CREATE] = obj39;
const RELATIONSHIP_UPDATE = RPCEvents.RELATIONSHIP_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj41 = {
  scope: OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    socket = socket.socket;
    const has = BigFlagUtilsAll.has;
    BigFlagUtilsAll;
    let num = socket.application.flags;
    const deserialize = BigFlagUtilsAll.deserialize;
    BigFlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    const deserializeResult = deserialize(num);
    const deserializer = BigFlagUtilsAll;
    if (has(deserializeResult, deserializer.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: constants3.INVALID_PERMISSIONS };
      const tmp9 = new RPCErrorDefault(obj, "Missing Permissions");
      throw tmp9;
    }
  }
};
obj2[RELATIONSHIP_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.RELATIONSHIP_UPDATE, obj41);
const CURRENT_USER_UPDATE = RPCEvents.CURRENT_USER_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj42 = {
  scope: obj43,
  handler() {
    let currentUser;
    return (prevState) => {
      prevState = prevState.prevState;
      const obj = { currentUser: currentUser.getCurrentUser() };
      const dispatch = prevState.dispatch;
      let tmp = null == obj.currentUser;
      if (!tmp) {
        tmp = null != prevState && shallowEqualDefault(obj, prevState);
        const tmp2 = null != prevState && shallowEqualDefault(obj, prevState);
      }
      if (!tmp) {
        dispatch(transformUserDefault(obj.currentUser));
      }
      return obj;
    };
  }
};
obj43 = {};
const items18 = [RPC_LOCAL_SCOPE, ];
const createRPCEvent5 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const CURRENT_USER_UPDATE2 = RPCEvents.CURRENT_USER_UPDATE;
const ANY14 = RPC_SCOPE_CONFIG.ANY;
items18[1] = OAuth2Scopes.OAuth2Scopes.IDENTIFY;
obj43[ANY14] = items18;
obj2[CURRENT_USER_UPDATE] = createRPCEvent5(CURRENT_USER_UPDATE2, obj42);
const CURRENT_GUILD_MEMBER_UPDATE = RPCEvents.CURRENT_GUILD_MEMBER_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj44 = {
  scope: obj45,
  handler(args) {
    const guild_id = args.args.guild_id;
    return (prevState) => {
      prevState = prevState.prevState;
      const obj = { currentGuildMember: GuildMemberStore.getSelfMember(guild_id) };
      const dispatch = prevState.dispatch;
      let tmp = null == obj.currentGuildMember;
      if (!tmp) {
        tmp = null != prevState && shallowEqualDefault(obj, prevState);
        const tmp2 = null != prevState && shallowEqualDefault(obj, prevState);
      }
      if (!tmp) {
        const obj2 = RPCHelpers;
        dispatch(obj2.transformGuildMember(obj.currentGuildMember));
      }
      return obj;
    };
  }
};
obj45 = {};
const createRPCEvent6 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const CURRENT_GUILD_MEMBER_UPDATE2 = RPCEvents.CURRENT_GUILD_MEMBER_UPDATE;
const ALL2 = RPC_SCOPE_CONFIG.ALL;
const items19 = [OAuth2Scopes.OAuth2Scopes.IDENTIFY, OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ];
obj45[ALL2] = items19;
obj2[CURRENT_GUILD_MEMBER_UPDATE] = createRPCEvent6(CURRENT_GUILD_MEMBER_UPDATE2, obj44);
const ENTITLEMENT_CREATE = RPCEvents.ENTITLEMENT_CREATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj46 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items20 },
  handler() {

  }
};
items20 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[ENTITLEMENT_CREATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.ENTITLEMENT_CREATE, obj46);
const obj47 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items21 },
  handler() {

  }
};
items21 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPCEvents.ENTITLEMENT_DELETE] = obj47;
const obj48 = {
  scope: obj49,
  handler() {
    return (arg0) => {
      let dispatch;
      let pid1;
      let prevState;
      let sourceName;
      let tmp12;
      ({ prevState, dispatch } = arg0);
      streamerActiveStreamMetadata = streamerActiveStreamMetadata.getStreamerActiveStreamMetadata();
      let pid;
      if (streamerActiveStreamMetadata != null) {
        pid = streamerActiveStreamMetadata.pid;
      }
      gameForPID = null;
      if (null != pid) {
        gameForPID = gameForPID.getGameForPID(streamerActiveStreamMetadata.pid);
      }
      let id;
      if (gameForPID != null) {
        id = gameForPID.id;
      }
      application = null;
      if (null != id) {
        application = application.getApplication(gameForPID.id);
      }
      let tmp8 = null;
      if (null != application) {
        tmp8 = transformApplicationDefault(application);
      }
      if (streamerActiveStreamMetadata != null) {
        sourceName = streamerActiveStreamMetadata.sourceName;
      }
      const obj = { active: null != streamerActiveStreamMetadata, pid: pid1, application: tmp12 };
      pid1 = undefined;
      if (streamerActiveStreamMetadata != null) {
        pid1 = streamerActiveStreamMetadata.pid;
      }
      if (pid1 == null) {
        pid1 = null;
      }
      tmp12 = null;
      if (null != tmp8) {
        tmp12 = { name: sourceName };
        const obj2 = { name: sourceName };
      }
      const obj3 = _modDef12;
      if (!obj3.isEqual(obj, prevState)) {
        dispatch(obj);
      }
      return obj;
    };
  }
};
obj49 = {};
const items22 = [RPC_LOCAL_SCOPE, ];
const SCREENSHARE_STATE_UPDATE = RPCEvents.SCREENSHARE_STATE_UPDATE;
const ALL3 = RPC_SCOPE_CONFIG.ALL;
items22[1] = OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ;
obj49[ALL3] = items22;
obj2[SCREENSHARE_STATE_UPDATE] = obj48;
const obj50 = {
  scope: obj51,
  handler() {
    let videoEnabled;
    return (arg0) => {
      let dispatch;
      let prevState;
      const obj = { active: videoEnabled.isVideoEnabled() };
      ({ prevState, dispatch } = arg0);
      const obj2 = _modDef12;
      if (!obj2.isEqual(obj, prevState)) {
        dispatch(obj);
      }
      return obj;
    };
  }
};
obj51 = {};
const items23 = [RPC_LOCAL_SCOPE, ];
const VIDEO_STATE_UPDATE = RPCEvents.VIDEO_STATE_UPDATE;
const ALL4 = RPC_SCOPE_CONFIG.ALL;
items23[1] = OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ;
obj51[ALL4] = items23;
obj2[VIDEO_STATE_UPDATE] = obj50;
obj2[RPCEvents.AUTHORIZE_REQUEST] = {
  scope: "Array",
  handler() {

  }
};
let result = size.fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj2;

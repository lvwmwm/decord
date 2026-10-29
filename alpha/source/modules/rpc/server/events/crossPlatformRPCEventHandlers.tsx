// Module ID: 16282
// Function ID: 16283
// Name: crossPlatformRPCEventHandlers
// Dependencies: [2043, 2019, 4875, 6701, 4857, 4917, 4879, 2012, 5752, 1389, 5668, 6437, 1084, 11571, 11574, 9300, 6721, 16206, 8867, 12, 16215, 16207, 9293, 7494, 16214, 1096, 568, 9298, 16283, 2]

// Module 16282 (crossPlatformRPCEventHandlers)
import _modDef12 from "module_12" /* 12 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1096 */;
import GuildRecord from "GuildRecord" /* 4875 */;
import frameDeepLinks from "frameDeepLinks" /* 7494 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8867 */;
import getSocketFrameDefault from "getSocketFrame" /* 9293 */;
import transformUserDefault from "transformUser" /* 9298 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 11571 */;
import RPCHelpers from "RPCHelpers" /* 11574 */;
import ConjureVoiceSessionCoordinatorDefault from "ConjureVoiceSessionCoordinator" /* 16206 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16207 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 16214 */;
import transformApplicationDefault from "transformApplication" /* 16283 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import RunningGameStore from "RunningGameStore" /* 2019 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6701 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import GuildStore from "GuildStore" /* 4879 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
import UserStore from "UserStore" /* 1389 */;
import VoiceStateStore from "VoiceStateStore" /* 5668 */;
import Constants_mod from "Constants" /* 6437 */;
import Constants_mod2 from "Constants" /* 1084 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16215 */;
import size from "module_2" /* 2 */;

let application, gameForPID, streamerActiveStreamMetadata;

let RPCEvents;
let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_15;
let closure_16;
let items;
let items13;
let items14;
let items15;
let items19;
let items20;
let obj11;
let obj16;
let obj18;
let obj22;
let obj24;
let obj26;
let obj28;
let obj30;
let obj32;
let obj41;
let obj44;
let obj46;
let obj5;
let obj50;
let obj52;
let obj7;
let obj9;
function handler() {

}
const handler2 = function handler() {

};
const handler3 = function handler() {

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
      const tmp11Result = tmp11(6721);
      if (tmp11Result.userCannotSeeNSFWContent(channel)) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj = { errorCode: constants2.INVALID_CHANNEL };
        const tmp3 = RPCErrorDefault;
        const tmp32 = new tmp3(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp32;
      }
    }
  }
  const obj2 = { errorCode: constants2.INVALID_CHANNEL };
  const tmp9 = RPCErrorDefault;
  const tmp92 = new tmp9(obj2, "Invalid channel id: " + channel_id);
  throw tmp92;
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == ChannelStore.getChannel(channel_id)) {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const tmp4 = RPCErrorDefault;
      const tmp42 = new tmp4(obj, "Invalid channel id: " + channel_id);
      throw tmp42;
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
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = Constants);
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
      let obj = { errorCode: constants2.INVALID_GUILD };
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
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp3 = RPCErrorDefault;
      const tmp32 = new tmp3(obj, "Invalid channel id: " + channel_id);
      throw tmp32;
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
            const obj2 = _modDef12;
            const differenceByResult = obj2.differenceBy(values, prevState, (userId) => userId.userId);
            const item = differenceByResult.forEach((item) => {
              const obj = channel_id(closure_2_3[14]);
              return closure_1_0(obj.transformVoiceState(closure_2, channel.id, item));
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
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
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
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp3 = RPCErrorDefault;
      const tmp32 = new tmp3(obj, "Invalid channel id: " + channel_id);
      throw tmp32;
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
          const obj2 = _modDef12;
          const differenceByResult = obj2.differenceBy(prevState, values, (userId) => userId.userId);
          const item = differenceByResult.forEach((item) => {
            const obj = channel_id(closure_2_3[14]);
            return dispatch(obj.transformVoiceState(closure_2, channel.id, item));
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
const items2 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj7[ANY2] = items2;
obj2[VOICE_STATE_DELETE] = obj6;
const VOICE_STATE_UPDATE = RPCEvents.VOICE_STATE_UPDATE;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj8 = {
  scope: obj9,
  handler(args) {
    const channel_id = args.args.channel_id;
    if (null == ChannelStore.getChannel(channel_id)) {
      let obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const tmp3 = RPCErrorDefault;
      const tmp32 = new tmp3(obj, "Invalid channel id: " + channel_id);
      throw tmp32;
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
            const obj = channel_id(closure_2_3[14]);
            return obj.transformVoiceState(closure_2, channel.id, item);
          });
          const obj2 = _modDef12;
          const differenceWithResult = obj2.differenceWith(mapped, prevState, _modDef12.isEqual);
          const item = differenceWithResult.forEach((item) => dispatch(item));
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
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj9[ANY3] = items3;
obj2[VOICE_STATE_UPDATE] = createRPCEvent(VOICE_STATE_UPDATE2, obj8);
const obj10 = {
  scope: obj11,
  handler() {
    return (arg0) => {
      let dispatch;
      let obj2;
      let prevState;
      const obj = { state: obj2.getVoiceConnectionState(RTCConnectionStore.getState()), hostname: RTCConnectionStore.getHostname(), pings: RTCConnectionStore.getPings(), average_ping: RTCConnectionStore.getAveragePing(), last_ping: RTCConnectionStore.getLastPing() };
      ({ prevState, dispatch } = arg0);
      obj2 = RPCHelpers;
      const obj3 = _modDef12;
      if (!obj3.isEqual(obj, prevState)) {
        dispatch(obj);
      }
      return obj;
    };
  }
};
obj11 = {};
const VOICE_CONNECTION_STATUS = RPCEvents.VOICE_CONNECTION_STATUS;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items4 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
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
    let obj = socket(16206);
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
const obj33 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = obj33;
const ACTIVITY_LAYOUT_MODE_UPDATE = RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj34 = {
  scope: "Array",
  handler() {

  }
};
obj2[ACTIVITY_LAYOUT_MODE_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE, obj34);
const obj35 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = obj35;
const obj36 = {
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
            const tmp8Result = tmp8(7494);
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
obj2[RPCEvents.FRAME_DEEP_LINK] = obj36;
obj2[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsUpdateEvent;
const THERMAL_STATE_UPDATE = RPCEvents.THERMAL_STATE_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj37 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items14 },
  handler() {

  }
};
items14 = [RPC_AUTHENTICATED_SCOPE];
obj2[THERMAL_STATE_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.THERMAL_STATE_UPDATE, obj37);
const obj38 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items15 },
  handler() {

  }
};
items15 = [RPC_AUTHENTICATED_SCOPE];
obj2[RPCEvents.ORIENTATION_UPDATE] = obj38;
obj2[RPCEvents.VOICE_CHANNEL_SELECT] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler3 };
const obj40 = {
  scope: obj41,
  handler() {

  }
};
obj41 = {};
const NOTIFICATION_CREATE = RPCEvents.NOTIFICATION_CREATE;
const ALL = RPC_SCOPE_CONFIG.ALL;
const items16 = [, ];
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler3 });
items16[0] = OAuth2Scopes.OAuth2Scopes.RPC;
items16[1] = OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ;
obj41[ALL] = items16;
obj2[NOTIFICATION_CREATE] = obj40;
const RELATIONSHIP_UPDATE = RPCEvents.RELATIONSHIP_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj42 = {
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
      const obj = { errorCode: constants2.INVALID_PERMISSIONS };
      const tmp9 = new RPCErrorDefault(obj, "Missing Permissions");
      throw tmp9;
    }
  }
};
obj2[RELATIONSHIP_UPDATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.RELATIONSHIP_UPDATE, obj42);
const CURRENT_USER_UPDATE = RPCEvents.CURRENT_USER_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj43 = {
  scope: obj44,
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
obj44 = {};
const items17 = [RPC_LOCAL_SCOPE, ];
const createRPCEvent5 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const CURRENT_USER_UPDATE2 = RPCEvents.CURRENT_USER_UPDATE;
const ANY13 = RPC_SCOPE_CONFIG.ANY;
items17[1] = OAuth2Scopes.OAuth2Scopes.IDENTIFY;
obj44[ANY13] = items17;
obj2[CURRENT_USER_UPDATE] = createRPCEvent5(CURRENT_USER_UPDATE2, obj43);
const CURRENT_GUILD_MEMBER_UPDATE = RPCEvents.CURRENT_GUILD_MEMBER_UPDATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj45 = {
  scope: obj46,
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
obj46 = {};
const createRPCEvent6 = CONTEXT_MENU_ICON_NAMES.createRPCEvent;
const CURRENT_GUILD_MEMBER_UPDATE2 = RPCEvents.CURRENT_GUILD_MEMBER_UPDATE;
const ALL2 = RPC_SCOPE_CONFIG.ALL;
const items18 = [OAuth2Scopes.OAuth2Scopes.IDENTIFY, OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ];
obj46[ALL2] = items18;
obj2[CURRENT_GUILD_MEMBER_UPDATE] = createRPCEvent6(CURRENT_GUILD_MEMBER_UPDATE2, obj45);
const ENTITLEMENT_CREATE = RPCEvents.ENTITLEMENT_CREATE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj47 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items19 },
  handler() {

  }
};
items19 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[ENTITLEMENT_CREATE] = CONTEXT_MENU_ICON_NAMES.createRPCEvent(RPCEvents.ENTITLEMENT_CREATE, obj47);
const obj48 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items20 },
  handler() {

  }
};
items20 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj2[RPCEvents.ENTITLEMENT_DELETE] = obj48;
const obj49 = {
  scope: obj50,
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
obj50 = {};
const items21 = [RPC_LOCAL_SCOPE, ];
const SCREENSHARE_STATE_UPDATE = RPCEvents.SCREENSHARE_STATE_UPDATE;
const ALL3 = RPC_SCOPE_CONFIG.ALL;
items21[1] = OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ;
obj50[ALL3] = items21;
obj2[SCREENSHARE_STATE_UPDATE] = obj49;
const obj51 = {
  scope: obj52,
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
obj52 = {};
const items22 = [RPC_LOCAL_SCOPE, ];
const VIDEO_STATE_UPDATE = RPCEvents.VIDEO_STATE_UPDATE;
const ALL4 = RPC_SCOPE_CONFIG.ALL;
items22[1] = OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ;
obj52[ALL4] = items22;
obj2[VIDEO_STATE_UPDATE] = obj51;
const obj53 = {
  scope: "Array",
  handler() {

  }
};
obj2[RPCEvents.AUTHORIZE_REQUEST] = obj53;
let result = size.fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj2;

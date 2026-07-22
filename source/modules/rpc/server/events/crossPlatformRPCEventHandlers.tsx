// Module ID: 13329
// Function ID: 101225
// Name: messageEventsValidation
// Dependencies: []

// Module 13329 (messageEventsValidation)
let RPCEvents;
let RPC_AUTHENTICATED_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
function messageEventsValidation(string) {
  let obj = importDefault(dependencyMap[13])(string);
  obj = {};
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
}
function messageEvents(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (obj4.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes)) {
      let obj = arg1(dependencyMap[16]);
      if (obj.userCannotSeeNSFWContent(channel)) {
        let tmp6 = importDefault(dependencyMap[15]);
        obj = { errorCode: constants2.INVALID_CHANNEL };
        const _HermesInternal = HermesInternal;
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "Invalid nsfw channel id: " + channel.id);
        throw tmp6;
      }
    }
    const obj4 = arg1(dependencyMap[14]);
  }
  let tmp14 = importDefault(dependencyMap[15]);
  obj = { errorCode: constants2.INVALID_CHANNEL };
  tmp14 = new tmp14(obj, "Invalid channel id: " + channel_id);
  throw tmp14;
}
function speakingEventsValidation(string) {
  let obj = importDefault(dependencyMap[13])(string);
  obj = { channel_id: string.string().allow(null) };
  return obj.keys(obj);
}
function speakingEvents(args) {
  const channel_id = args.args.channel_id;
  if (null != channel_id) {
    if (null == store.getChannel(channel_id)) {
      let tmp4 = importDefault(dependencyMap[15]);
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const _HermesInternal = HermesInternal;
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Invalid channel id: " + channel_id);
      throw tmp4;
    }
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const getGuildIconURL = arg1(dependencyMap[2]).getGuildIconURL;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
({ RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = arg1(dependencyMap[11]));
const tmp2 = arg1(dependencyMap[11]);
({ ApplicationFlags: closure_15, RPCErrors: closure_16, RPCEvents } = arg1(dependencyMap[12]));
let obj = {};
obj = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[13])(string);
    obj = {};
    const requiredResult = obj.required();
    obj.guild_id = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    const arg1 = guild_id;
    if (null == guild.getGuild(guild_id)) {
      let tmp3 = importDefault(dependencyMap[15]);
      const obj = { errorCode: constants2.INVALID_GUILD };
      const _HermesInternal = HermesInternal;
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(obj, "Invalid guild id: " + guild_id);
      throw tmp3;
    } else {
      return (arg0) => {
        let dispatch;
        let prevState;
        ({ prevState, dispatch } = arg0);
        const guild = guild.getGuild(guild_id);
        if (null != guild) {
          let obj = {};
          obj = {};
          ({ id: obj2.id, name: obj2.name } = guild);
          const tmp3 = callback2(guild, 128);
          let tmp4 = null;
          if (null != tmp3) {
            tmp4 = tmp3;
          }
          obj.icon_url = tmp4;
          obj.guild = obj;
          obj.online = 0;
          if (!obj3.isEqual(prevState, obj)) {
            dispatch(obj);
          }
          return obj;
        }
      };
    }
  }
};
obj[RPCEvents.GUILD_STATUS] = obj;
obj = {};
const obj1 = {};
const items = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ];
obj1[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj1;
obj.validation = function validation(string) {
  let obj = importDefault(dependencyMap[13])(string);
  obj = {};
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const arg1 = channel_id;
  if (null == store.getChannel(channel_id)) {
    let tmp3 = importDefault(dependencyMap[15]);
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (arg0) => {
      let prevState;
      ({ prevState, dispatch: closure_0 } = arg0);
      let guildId;
      const channel = channel.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channel.id));
        if (prevState) {
          const obj2 = channel(closure_3[18]);
          const item = channel(closure_3[18]).differenceBy(values, prevState, (userId) => userId.userId).forEach((userId) => callback(callback(closure_3[14]).transformVoiceState(closure_2, channel.id, userId)));
          const differenceByResult = channel(closure_3[18]).differenceBy(values, prevState, (userId) => userId.userId);
        }
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_CREATE] = obj;
const obj2 = {};
const obj3 = {};
const items1 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2.scope = obj3;
obj2.validation = function validation(string) {
  let obj = importDefault(dependencyMap[13])(string);
  obj = {};
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj2.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const arg1 = channel_id;
  if (null == store.getChannel(channel_id)) {
    let tmp3 = importDefault(dependencyMap[15]);
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      const channel_id = dispatch.dispatch;
      let guildId;
      const channel = channel.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channel.id));
        const obj2 = channel(closure_3[18]);
        const item = channel(closure_3[18]).differenceBy(dispatch.prevState, values, (userId) => userId.userId).forEach((userId) => dispatch(dispatch(closure_3[14]).transformVoiceState(closure_2, channel.id, userId)));
        return values;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_DELETE] = obj2;
const obj4 = {};
const obj5 = {};
const items2 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ];
obj5[RPC_SCOPE_CONFIG.ANY] = items2;
obj4.scope = obj5;
obj4.validation = function validation(string) {
  let obj = importDefault(dependencyMap[13])(string);
  obj = {};
  const requiredResult = obj.required();
  obj.channel_id = string.string().required();
  return requiredResult.keys(obj);
};
obj4.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const arg1 = channel_id;
  if (null == store.getChannel(channel_id)) {
    let tmp3 = importDefault(dependencyMap[15]);
    const obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const prototype = tmp3.prototype;
    tmp3 = new tmp3(obj, "Invalid channel id: " + channel_id);
    throw tmp3;
  } else {
    return (dispatch) => {
      const channel_id = dispatch.dispatch;
      let guildId;
      const channel = channel.getChannel(channel_id);
      if (null != channel) {
        guildId = channel.getGuildId();
        const _Object = Object;
        const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(channel.id));
        const mapped = values.map((userId) => dispatch(closure_3[14]).transformVoiceState(closure_2, channel.id, userId));
        const obj2 = channel(closure_3[18]);
        const item = channel(closure_3[18]).differenceWith(mapped, dispatch.prevState, channel(closure_3[18]).isEqual).forEach((arg0) => dispatch(arg0));
        return mapped;
      }
    };
  }
};
obj[RPCEvents.VOICE_STATE_UPDATE] = obj4;
const obj6 = {};
const obj7 = {};
const items3 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ];
obj7[RPC_SCOPE_CONFIG.ANY] = items3;
obj6.scope = obj7;
obj6.handler = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    const obj = {};
    ({ prevState, dispatch } = arg0);
    obj.state = callback(closure_3[14]).getVoiceConnectionState(store.getState());
    obj.hostname = store.getHostname();
    obj.pings = store.getPings();
    obj.average_ping = store.getAveragePing();
    obj.last_ping = store.getLastPing();
    const obj2 = callback(closure_3[14]);
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VOICE_CONNECTION_STATUS] = obj6;
const tmp3 = arg1(dependencyMap[12]);
obj[RPCEvents.MESSAGE_CREATE] = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj8 = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_UPDATE] = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj9 = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.MESSAGE_DELETE] = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
const obj11 = {};
const obj12 = {};
const items4 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj12[RPC_SCOPE_CONFIG.ANY] = items4;
obj11.scope = obj12;
obj11.validation = speakingEventsValidation;
obj11.handler = speakingEvents;
obj[RPCEvents.SPEAKING_START] = obj11;
const obj13 = {};
const obj14 = {};
const items5 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VOICE_READ, RPC_LOCAL_SCOPE];
obj14[RPC_SCOPE_CONFIG.ANY] = items5;
obj13.scope = obj14;
obj13.validation = speakingEventsValidation;
obj13.handler = speakingEvents;
obj[RPCEvents.SPEAKING_STOP] = obj13;
const obj10 = { scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC, validation: messageEventsValidation, handler: messageEvents };
obj[RPCEvents.GUILD_CREATE] = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj15 = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.CHANNEL_CREATE] = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj17 = {};
const obj18 = {};
const items6 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj18[RPC_SCOPE_CONFIG.ANY] = items6;
obj17.scope = obj18;
obj17.handler = function handler() {

};
obj[RPCEvents.GAME_JOIN] = obj17;
const obj19 = {};
const obj20 = {};
const items7 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj20[RPC_SCOPE_CONFIG.ANY] = items7;
obj19.scope = obj20;
obj19.handler = function handler() {

};
obj[RPCEvents.GAME_SPECTATE] = obj19;
const obj21 = {};
const obj22 = {};
const items8 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj22[RPC_SCOPE_CONFIG.ANY] = items8;
obj21.scope = obj22;
obj21.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN] = obj21;
const obj23 = {};
const obj24 = {};
const items9 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj24[RPC_SCOPE_CONFIG.ANY] = items9;
obj23.scope = obj24;
obj23.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_JOIN_REQUEST] = obj23;
const obj25 = {};
const obj26 = {};
const items10 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_AUTHENTICATED_SCOPE, RPC_LOCAL_SCOPE];
obj26[RPC_SCOPE_CONFIG.ANY] = items10;
obj25.scope = obj26;
obj25.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_SPECTATE] = obj25;
const obj27 = {};
const obj28 = {};
const items11 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj28[RPC_SCOPE_CONFIG.ANY] = items11;
obj27.scope = obj28;
obj27.handler = function handler() {

};
obj[RPCEvents.ACTIVITY_INVITE] = obj27;
obj[RPCEvents.ACTIVITY_PIP_MODE_UPDATE] = {
  scope: undefined,
  handler() {

  }
};
obj[RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE] = {
  scope: undefined,
  handler() {

  }
};
obj[RPCEvents.FRAME_LAYOUT_MODE_UPDATE] = {
  scope: undefined,
  handler() {

  }
};
obj[RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE] = arg1(dependencyMap[19]).activityInstanceConnectedParticipantsUpdateEvent;
const items12 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.THERMAL_STATE_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items12 },
  handler() {

  }
};
const items13 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ORIENTATION_UPDATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
const obj16 = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj29 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items12 },
  handler() {

  }
};
const obj30 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items13 },
  handler() {

  }
};
obj[RPCEvents.VOICE_CHANNEL_SELECT] = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
const obj32 = {};
const obj33 = {};
const items14 = [arg1(dependencyMap[17]).OAuth2Scopes.RPC, arg1(dependencyMap[17]).OAuth2Scopes.RPC_NOTIFICATIONS_READ];
obj33[RPC_SCOPE_CONFIG.ALL] = items14;
obj32.scope = obj33;
obj32.handler = function handler() {

};
obj[RPCEvents.NOTIFICATION_CREATE] = obj32;
const obj31 = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RPC,
  handler() {

  }
};
obj[RPCEvents.RELATIONSHIP_UPDATE] = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = importAll(dependencyMap[20]);
    const flags = socket.socket.application.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    const obj2 = importAll(dependencyMap[20]);
    const deserializeResult = importAll(dependencyMap[20]).deserialize(num);
    if (obj.has(deserializeResult, obj3.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      let tmp4 = importDefault(dependencyMap[15]);
      obj = { errorCode: constants2.INVALID_PERMISSIONS };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Missing Permissions");
      throw tmp4;
    }
    const obj3 = importAll(dependencyMap[20]);
  }
};
const obj35 = {};
const obj36 = {};
const items15 = [RPC_LOCAL_SCOPE, arg1(dependencyMap[17]).OAuth2Scopes.IDENTIFY];
obj36[RPC_SCOPE_CONFIG.ANY] = items15;
obj35.scope = obj36;
obj35.handler = function handler() {
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentUser: currentUser.getCurrentUser() };
    let tmp = null == obj.currentUser;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = callback(closure_3[21])(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(callback(closure_3[22])(obj.currentUser));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_USER_UPDATE] = obj35;
const obj37 = {};
const obj38 = {};
const items16 = [arg1(dependencyMap[17]).OAuth2Scopes.IDENTIFY, arg1(dependencyMap[17]).OAuth2Scopes.GUILDS_MEMBERS_READ];
obj38[RPC_SCOPE_CONFIG.ALL] = items16;
obj37.scope = obj38;
obj37.handler = function handler(args) {
  const arg1 = args.args.guild_id;
  return (prevState) => {
    prevState = prevState.prevState;
    const obj = { currentGuildMember: selfMember.getSelfMember(guild_id) };
    let tmp = null == obj.currentGuildMember;
    if (!tmp) {
      let tmp2 = null != prevState;
      if (tmp2) {
        tmp2 = callback(closure_3[21])(obj, prevState);
      }
      tmp = tmp2;
    }
    if (!tmp) {
      prevState.dispatch(callback(closure_3[23])(obj.currentGuildMember));
    }
    return obj;
  };
};
obj[RPCEvents.CURRENT_GUILD_MEMBER_UPDATE] = obj37;
const items17 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_CREATE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items17 },
  handler() {

  }
};
const items18 = [RPC_LOCAL_SCOPE, RPC_AUTHENTICATED_SCOPE];
obj[RPCEvents.ENTITLEMENT_DELETE] = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const obj41 = {};
const obj42 = {};
const items19 = [RPC_LOCAL_SCOPE, arg1(dependencyMap[17]).OAuth2Scopes.RPC_SCREENSHARE_READ];
obj42[RPC_SCOPE_CONFIG.ALL] = items19;
obj41.scope = obj42;
obj41.handler = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    ({ prevState, dispatch } = arg0);
    const streamerActiveStreamMetadata = streamerActiveStreamMetadata.getStreamerActiveStreamMetadata();
    let pid;
    if (null != streamerActiveStreamMetadata) {
      pid = streamerActiveStreamMetadata.pid;
    }
    let gameForPID = null;
    if (null != pid) {
      gameForPID = gameForPID.getGameForPID(streamerActiveStreamMetadata.pid);
    }
    let id;
    if (null != gameForPID) {
      id = gameForPID.id;
    }
    let application = null;
    if (null != id) {
      application = application.getApplication(gameForPID.id);
    }
    let tmp8 = null;
    if (null != application) {
      tmp8 = callback(closure_3[24])(application);
    }
    if (null != streamerActiveStreamMetadata) {
      const sourceName = streamerActiveStreamMetadata.sourceName;
    }
    let obj = { active: null != streamerActiveStreamMetadata };
    let pid1;
    if (null != streamerActiveStreamMetadata) {
      pid1 = streamerActiveStreamMetadata.pid;
    }
    let tmp12 = null;
    if (null != pid1) {
      tmp12 = pid1;
    }
    obj.pid = tmp12;
    let tmp13 = null != tmp8;
    if (null == tmp13) {
      tmp13 = null != sourceName;
    }
    let tmp14 = null;
    if (tmp13) {
      obj = { name: sourceName };
      tmp14 = obj;
    }
    obj.application = tmp14;
    if (!obj3.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.SCREENSHARE_STATE_UPDATE] = obj41;
const obj43 = {};
const obj44 = {};
const items20 = [RPC_LOCAL_SCOPE, arg1(dependencyMap[17]).OAuth2Scopes.RPC_VIDEO_READ];
obj44[RPC_SCOPE_CONFIG.ALL] = items20;
obj43.scope = obj44;
obj43.handler = function handler() {
  return (arg0) => {
    let dispatch;
    let prevState;
    const obj = { active: videoEnabled.isVideoEnabled() };
    ({ prevState, dispatch } = arg0);
    if (!obj2.isEqual(obj, prevState)) {
      dispatch(obj);
    }
    return obj;
  };
};
obj[RPCEvents.VIDEO_STATE_UPDATE] = obj43;
obj[RPCEvents.AUTHORIZE_REQUEST] = {
  scope: undefined,
  handler() {

  }
};
const obj34 = {
  scope: arg1(dependencyMap[17]).OAuth2Scopes.RELATIONSHIPS_READ,
  handler(socket) {
    let obj = importAll(dependencyMap[20]);
    const flags = socket.socket.application.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    const obj2 = importAll(dependencyMap[20]);
    const deserializeResult = importAll(dependencyMap[20]).deserialize(num);
    if (obj.has(deserializeResult, obj3.deserialize(constants.DISABLE_RELATIONSHIPS_ACCESS))) {
      let tmp4 = importDefault(dependencyMap[15]);
      obj = { errorCode: constants2.INVALID_PERMISSIONS };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Missing Permissions");
      throw tmp4;
    }
    const obj3 = importAll(dependencyMap[20]);
  }
};
const obj39 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items17 },
  handler() {

  }
};
const obj40 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items18 },
  handler() {

  }
};
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/rpc/server/events/crossPlatformRPCEventHandlers.tsx");

export default obj;

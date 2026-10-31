// Module ID: 16310
// Function ID: 16311
// Name: channels
// Dependencies: [32, 5, 4867, 4863, 4885, 4946, 5764, 4917, 6756, 5679, 6450, 1072, 16288, 5675, 9333, 10951, 16293, 11812, 16297, 8910, 9336, 12, 9327, 6849, 6706, 6046, 1099, 8946, 2]

// Module 16310 (channels)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6849 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8910 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8946 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9327 */;
import RPCErrorDefault from "RPCError" /* 9333 */;
import botScopedAccess from "botScopedAccess" /* 9336 */;
import RPCHelpers from "RPCHelpers" /* 11812 */;
import guildVoice from "guildVoice" /* 16293 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SpeakingStore from "SpeakingStore" /* 6756 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import Constants_mod from "Constants" /* 6450 */;
import Constants_mod2 from "Constants" /* 1072 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16297 */;
import size from "module_2" /* 2 */;

let c5, c6, speaking_available, state;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let metroRequire;
let obj11;
let obj3;
let obj5;
let obj7;
let obj9;
let obj = function _validateUserAllowsJoiningVoice() {
  obj = _asyncToGenerator(async (arg0) => {
    let iframeId;
    const applicationId = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async function(arg0) {
      let c0;
      let c1;
      const obj5 = { applicationId: applicationId.applicationId, iframeId, permissions: ["connect_user_to_voice"] };
      closure_2 = await closure_130_1(closure_130_2[15])(obj5);
      state = closure_130_3(closure_2, 1)[0];
      if (state != null) {
        state = state.state;
      }
      if ("granted" !== state) {
        const self = this;
        const self2 = this;
        obj = { errorCode: closure_130_16.UNAUTHORIZED_FOR_APPLICATION };
        const tmp11 = new closure_130_1(closure_130_2[14])(obj, "The user has not allowed this app to join voice channels");
        throw tmp11;
      }
      await "HermesInternal";
      closure_2 = tmp4;
      ({ frame: c0, iframeId: c1 } = closure_0);
      return "flexDirection";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _getGuildVoiceSnapshot() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let speaking;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let voice_states;
        let selected;
        c4 = 2;
        if (0 === speaking_available) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            voice_states = undefined;
            selected = undefined;
            const obj4 = guildVoice;
            const guildVoiceChannel = obj4.getGuildVoiceChannel(closure_0);
            speaking_available = 1;
            c4 = 1;
            const obj6 = { value: obj5.transformChannel(guildVoiceChannel, false), done: false };
            obj5 = RPCHelpers;
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          voice_states = value;
          selected = closure_130_11.getVoiceChannelId() === closure_0;
          const isConnectedResult = selected && closure_130_10.isConnected();
          speaking_available = isConnectedResult;
          obj = {
            selected,
            speaking_available,
            voice_states: voice_states.map((user) => {
                    let isSpeakingResult;
                    obj = { speaking: isSpeakingResult };
                    const merged = Object.assign(user);
                    isSpeakingResult = null;
                    if (speaking_available) {
                      isSpeakingResult = speaking.isSpeaking(user.user.id);
                    }
                    return obj;
                  })
          };
          let merged = Object.assign(voice_states);
          voice_states = voice_states.voice_states;
          c4 = 3;
          const obj8 = { value: obj, done: true };
          return obj8;
        }
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
({ isVoiceChannel: hasOwnProperty, isTextChannel: metroRequire } = ChannelRecord);
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ Routes: closure_14, Permissions: closure_15, RPCCommands, RPCErrors: closure_16, ChannelTypes: closure_17 } = Constants);
obj = {};
const GET_CHANNEL = RPCCommands.GET_CHANNEL;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: obj3,
  validateAccess(botScopeOnly) {
    if (botScopeOnly.botScopeOnly) {
      obj = botScopedAccess;
      return obj.validateBotScopeHasChannelAccess(tmp2, tmp);
    }
  },
  handler(args) {
    function getGuildVoiceSnapshot() {
      return obj(...arguments);
    }
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    const botScopeOnly = args.botScopeOnly;
    const channel = ChannelStore.getChannel(channel_id);
    const obj2 = guildVoice;
    if (obj2.isGuildVoiceSocket(socket)) {
      if (null != channel) {
        if (null != channel.getGuildId()) {
          if (null != GuildStore.getGuild(channel.guild_id)) {
            if (PermissionStore.can(constants2.VIEW_CHANNEL, channel)) {
              let transformChannelResult;
              if (channel.type === constants4.GUILD_VOICE) {
                transformChannelResult = getGuildVoiceSnapshot(channel_id);
              } else {
                const tmpResult = RPCHelpers;
                transformChannelResult = tmpResult.transformChannel(channel, false, false);
              }
              return transformChannelResult;
            }
          }
        }
      }
      obj = { errorCode: constants3.INVALID_CHANNEL };
      const self5 = this;
      const self6 = this;
      const tmp25 = new RPCErrorDefault(obj, "Guild channel is unavailable");
      throw tmp25;
    } else if (null == channel) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj3 = { errorCode: constants3.INVALID_CHANNEL };
      const tmp11 = RPCErrorDefault;
      const tmp112 = new tmp11(obj3, "Invalid channel id: " + channel_id);
      throw tmp112;
    } else {
      let result;
      if (channel.isPrivate()) {
        const scopes = socket.authorization.scopes;
        if (!scopes.has(OAuth2Scopes.OAuth2Scopes.RPC)) {
          if (!scopes.has(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ)) {
            const self = this;
            const self2 = this;
            const obj4 = { errorCode: constants3.INVALID_PERMISSIONS };
            const tmp6 = new RPCErrorDefault(obj4, "Invalid scope");
            throw tmp6;
          }
        }
      }
      const transformChannel = RPCHelpers.transformChannel;
      RPCHelpers;
      if (botScopeOnly) {
        const tmpResult5 = botScopedAccess;
        result = tmpResult5.canBotScopeReadMessages(socket, channel);
      } else {
        const tmpResult6 = RPCHelpers;
        result = tmpResult6.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes);
      }
      return transformChannel(channel, result);
    }
  }
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CHANNEL2 = RPCCommands.GET_CHANNEL;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj3[ANY] = items;
obj[GET_CHANNEL] = createRPCCommand(GET_CHANNEL2, obj2);
const GET_CHANNELS = RPCCommands.GET_CHANNELS;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj4 = {
  scope: obj5,
  validateAccess(args) {
    const guild_id = args.args.guild_id;
    if (args.botScopeOnly) {
      if (null != guild_id) {
        if ("" !== guild_id) {
          obj = botScopedAccess;
          return obj.validateBotScopeHasGuildAccess(tmp, guild_id);
        }
      }
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants3.INVALID_PERMISSIONS };
      const tmp9 = new RPCErrorDefault(obj2, "Access to channel data via BotScope is only available for a guild in embedded apps");
      throw tmp9;
    }
  },
  handler(args) {
    let found2;
    const guild_id = args.args.guild_id;
    const socket = args.socket;
    let guild;
    const botScopeOnly = args.botScopeOnly;
    obj = socket(16293);
    if (obj.isGuildVoiceSocket(socket)) {
      const self3 = this;
      const self4 = this;
      const obj3 = { errorCode: constants3.INVALID_GUILD };
      const tmp15 = new guild(9333)(obj3, "Invalid guild");
      throw tmp15;
    }
    const obj2 = guild(12);
    const values = obj2.values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    const tmp3 = guild;
    if (null != guild_id) {
      found = values;
      if ("" !== guild_id) {
        guild = GuildStore.getGuild(guild_id);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const obj4 = { errorCode: constants3.INVALID_GUILD };
          const tmp3Result = tmp3(9333);
          const tmp3Result1 = new tmp3Result(obj4, "Invalid guild id: " + guild_id);
          throw tmp3Result1;
        } else {
          found = values.filter((guild_id) => guild_id.guild_id === guild.id);
        }
      }
    }
    let found1 = found;
    if (botScopeOnly) {
      found1 = found.filter((item) => {
        obj = botScopedAccess;
        return obj.botCanViewChannel(socket, item);
      });
    }
    const obj5 = { channels: found2.map((id) => ({ id: id.id, name: id.name, type: id.type })) };
    found2 = found1.filter((type) => {
      let canResult = PermissionStore.can(constants.VIEW_CHANNEL, type);
      if (canResult) {
        obj = guildVoice;
        const isGuildVoiceSocketResult = obj.isGuildVoiceSocket(socket);
        let tmp6 = !isGuildVoiceSocketResult;
        if (isGuildVoiceSocketResult) {
          tmp6 = type.type === constants2.GUILD_VOICE;
        }
        canResult = tmp6;
      }
      return canResult;
    });
    return obj5;
  }
};
obj5 = {};
const createRPCCommand2 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CHANNELS2 = RPCCommands.GET_CHANNELS;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj5[ANY2] = items1;
obj[GET_CHANNELS] = createRPCCommand2(GET_CHANNELS2, obj4);
const GET_CHANNEL_PERMISSIONS = RPCCommands.GET_CHANNEL_PERMISSIONS;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj6 = {
  scope: obj7,
  validateAccess(socket) {
    socket = socket.socket;
    const botScopeOnly = socket.botScopeOnly;
    if (isPostMessageSocketDefault(socket)) {
      const tmp7 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
      if (null == tmp7) {
        const self3 = this;
        const self4 = this;
        const obj3 = { errorCode: constants3.INVALID_COMMAND };
        const tmp13 = new RPCErrorDefault(obj3, "Current embedded context not associated to a channel");
        throw tmp13;
      } else if (botScopeOnly) {
        const obj2 = botScopedAccess;
        const result = obj2.validateBotScopeHasChannelAccess(socket, tmp7);
      }
    } else {
      const self = this;
      const self2 = this;
      obj = { errorCode: constants3.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps");
      throw tmp5;
    }
  },
  handler(socket) {
    let obj2;
    socket = socket.socket;
    let tmp3;
    if (isPostMessageSocketDefault(socket)) {
      tmp3 = tmp(6849)(socket.context.surface);
    }
    const channel = ChannelStore.getChannel(tmp3);
    if (null == channel) {
      const self = this;
      const self2 = this;
      const obj3 = { errorCode: constants3.INVALID_CHANNEL };
      const tmp9 = new RPCErrorDefault(obj3, "Invalid channel");
      throw tmp9;
    } else {
      obj = { permissions: obj2.transformBigFlag(PermissionStore.computePermissions(channel)) };
      obj2 = RPCHelpers;
      return obj;
    }
  }
};
obj7 = {};
const createRPCCommand3 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CHANNEL_PERMISSIONS2 = RPCCommands.GET_CHANNEL_PERMISSIONS;
const ANY3 = RPC_SCOPE_CONFIG.ANY;
const items2 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj7[ANY3] = items2;
obj[GET_CHANNEL_PERMISSIONS] = createRPCCommand3(GET_CHANNEL_PERMISSIONS2, obj6);
const SELECT_VOICE_CHANNEL = RPCCommands.SELECT_VOICE_CHANNEL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj8 = {
  scope: obj9,
  handler(args) {
    let server;
    let socket;
    const f109644 = function(type) {
      if (null == type) {
        const _HermesInternal = HermesInternal;
        const self5 = this;
        const self6 = this;
        const obj3 = { errorCode: constants.INVALID_CHANNEL };
        const tmp23 = RPCErrorDefault;
        const tmp232 = new tmp23(obj3, "Invalid channel id: " + channel_id);
        throw tmp232;
      } else if (hasOwnProperty(type.type)) {
        const tmp7 = obj9;
        if ("guild" === obj9.kind) {
          if (tmp8 !== tmp7.guildId) {
            const self3 = this;
            const self4 = this;
            const obj4 = { errorCode: constants.INVALID_CHANNEL };
            const tmp19 = new RPCErrorDefault(obj4, "This app can only select a voice channel in the server it is installed in");
            throw tmp19;
          }
        }
        const items = [Promise.resolve(type), ];
        const transformChannel = RPCHelpers.transformChannel;
        RPCHelpers;
        const obj2 = RPCHelpers;
        items[1] = transformChannel(type, obj2.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
        return all(items);
      } else {
        const self = this;
        const self2 = this;
        obj = { errorCode: constants.INVALID_CHANNEL };
        const tmp5 = new RPCErrorDefault(obj, "Channel is not a voice channel");
        throw tmp5;
      }
    };
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    const expected_channel_id = args.expected_channel_id;
    if (num === undefined) {
      num = 0;
    }
    let flag = args.force;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = args.navigate;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let closure_3;
    let obj9;
    let tmp = socket;
    obj = socket(flag2[16]);
    if (obj.isGuildVoiceSocket(socket)) {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null == channel_id) {
        if (null == voiceChannelId) {
          return null;
        } else if (expected_channel_id !== voiceChannelId) {
          let obj2 = { errorCode: constants3.INVALID_PERMISSIONS };
          const self17 = this;
          const self18 = this;
          const tmp75 = new channel_id(flag2[14])(obj2, "Cannot leave an unrelated call");
          throw tmp75;
        } else {
          const tmpResult = tmp(flag2[16]);
          const guildVoiceChannel = tmpResult.getGuildVoiceChannel(voiceChannelId);
          const obj19 = channel_id(flag2[24]);
          let voiceChannel = obj19.selectVoiceChannel(null);
          return null;
        }
      } else {
        const tmpResult4 = tmp(flag2[16]);
        const guildVoiceChannel1 = tmpResult4.getGuildVoiceChannel(channel_id);
        if (null != voiceChannelId) {
          const channel = ChannelStore.getChannel(voiceChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          if (type !== constants4.GUILD_VOICE) {
            let obj3 = { errorCode: constants3.INVALID_PERMISSIONS };
            const self15 = this;
            const self16 = this;
            const tmp67 = new channel_id(tmp2[14])(obj3, "Cannot leave an unrelated call");
            throw tmp67;
          }
        }
        if (null != voiceChannelId) {
          if (voiceChannelId !== guildVoiceChannel1.id) {
            if (!flag) {
              let tmp43 = channel_id;
              let obj4 = { errorCode: constants3.SELECT_VOICE_FORCE_REQUIRED };
              const self9 = this;
              const self10 = this;
              const tmp46 = new channel_id(flag2[14])(obj4, "User is already joined to a voice channel");
              throw tmp46;
            }
          }
        }
        const tmp48 = PermissionStore;
        let tmp49 = constants2;
        if (PermissionStore.can(constants2.CONNECT, guildVoiceChannel1)) {
          if (voiceChannelId !== guildVoiceChannel1.id) {
            const tmpResult5 = tmp(flag2[25]);
            if (tmpResult5.isChannelFull(guildVoiceChannel1, VoiceStateStore, GuildStore)) {
              let obj5 = { errorCode: constants3.INVALID_CHANNEL };
              const self13 = this;
              const self14 = this;
              const tmp62 = new channel_id(flag2[14])(obj5, "Channel is full");
              throw tmp62;
            }
          }
          const obj15 = channel_id(flag2[24]);
          const voiceChannel1 = obj15.selectVoiceChannel(guildVoiceChannel1.id);
          return null;
        } else {
          let obj6 = { errorCode: constants3.INVALID_PERMISSIONS };
          const tmp51 = constants3;
          const self11 = this;
          const self12 = this;
          const tmp53 = new channel_id(flag2[14])(obj6, "Connect permission required to join channel");
          throw tmp53;
        }
      }
    } else {
      const scopes = socket.authorization.scopes;
      const tmp3 = null;
      let tmp4 = null;
      if (!scopes.has(tmp(flag2[19]).OAuth2Scopes.RPC)) {
        let tmp5 = channel_id;
        tmp4 = channel_id(tmp2[12])(socket);
      }
      closure_3 = tmp4;
      if (null != tmp4) {
        let obj7;
        const frame = tmp4.frame;
        const tmpResult6 = tmp(flag2[12]);
        if (tmpResult6.isUserScopedConjureApplication(frame.applicationId)) {
          obj7 = { kind: "any" };
        } else {
          let guildId;
          if (frame.surface.type !== tmp(flag2[13]).EmbeddedSurfaceType.OVERLAY) {
            guildId = frame.surface.guildId;
          }
          if (null == guildId) {
            let tmp7 = channel_id;
            let obj8 = { errorCode: constants3.UNAUTHORIZED_FOR_APPLICATION };
            const tmp8 = constants3;
            let self = this;
            let self2 = this;
            const tmp10 = new channel_id(flag2[14])(obj8, "This app can only select a voice channel in the server it is installed in");
            throw tmp10;
          } else {
            obj7 = { kind: "guild", guildId };
          }
        }
        obj9 = obj7;
      } else {
        obj9 = { kind: "any" };
      }
      const voiceChannelId1 = SelectedChannelStore.getVoiceChannelId();
      if (null == channel_id) {
        if (null != voiceChannelId1) {
          let guildId1;
          const channel1 = ChannelStore.getChannel(voiceChannelId1);
          if (channel1 != null) {
            guildId1 = channel1.getGuildId();
          }
          if ("guild" === obj9.kind) {
            if (guildId1 !== obj9.guildId) {
              let obj11 = { errorCode: constants3.INVALID_CHANNEL };
              const self7 = this;
              const self8 = this;
              const tmp34 = new channel_id(flag2[14])(obj11, "This app can only select a voice channel in the server it is installed in");
              throw tmp34;
            }
          }
        }
        let obj10 = channel_id(tmp2[24]);
        const voiceChannel2 = obj10.selectVoiceChannel(null);
        return null;
      } else {
        if (null != voiceChannelId1) {
          if (voiceChannelId1 !== channel_id) {
            if (false === flag) {
              let obj12 = { errorCode: constants3.SELECT_VOICE_FORCE_REQUIRED };
              let tmp23 = constants3;
              let self5 = this;
              let self6 = this;
              let tmp25 = new channel_id(tmp2[14])(obj12, "User is already joined to a voice channel.");
              throw tmp25;
            } else if (null != voiceChannelId1) {
              let guildId2;
              const channel2 = ChannelStore.getChannel(voiceChannelId1);
              if (channel2 != null) {
                guildId2 = channel2.getGuildId();
              }
              if ("guild" === obj9.kind) {
                if (guildId2 !== obj9.guildId) {
                  const obj13 = { errorCode: constants3.INVALID_CHANNEL };
                  let self3 = this;
                  let self4 = this;
                  let tmp19 = obj13;
                  const tmp20 = new channel_id(flag2[14])(obj13, "This app can only select a voice channel in the server it is installed in");
                  throw tmp20;
                }
              }
            }
          }
        }
        const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
        const catchPromise = storeWaitResult.catch(() => {
          obj = { errorCode: constants.SELECT_CHANNEL_TIMED_OUT };
          const tmp = new channel_id(flag2[14])(obj, "Request to select voice channel timed out.");
          throw tmp;
        });
        const then = catchPromise.then(f109644).then;
        catchPromise.then(f109644);
        let closure_0 = obj9(function*(arg0, value) {
          function validateUserAllowsJoiningVoice() {
            return closure_1_18(...arguments);
          }
          closure_0 = arg0;
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              let closure_2;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  let closure_4 = tmp4;
                  closure_3 = tmp;
                  closure_0 = undefined;
                  const iter = closure_0[Symbol.iterator]();
                  value = closure_0;
                  closure_2 = undefined;
                  let tmp49 = iter === undefined;
                  if (!tmp49) {
                    closure_2 = iter.next();
                  }
                  closure_0 = closure_2;
                  closure_2 = undefined;
                  obj9 = tmp67;
                  if (!tmp49) {
                    tmp49 = tmp48;
                    obj9 = iter2;
                    if (iter !== undefined) {
                      closure_2 = iter2.next();
                      tmp49 = tmp48;
                      obj9 = iter2;
                    }
                  }
                  value = closure_2;
                  if (!tmp49) {
                    obj9.return();
                  }
                  c5 = 1;
                  c6 = 1;
                  return { value: "flexDirection", done: true };
                }
              } else {
                if (1 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    if (null != value.guild_id) {
                      const obj12 = closure_0(flag2[25]);
                      if (obj12.isChannelFull(closure_0, VoiceStateStore, GuildStore)) {
                        const obj7 = { errorCode: constants2.INVALID_CHANNEL };
                        const self3 = this;
                        const self4 = this;
                        const tmp43 = new channel_id(flag2[14])(obj7, "Channel is full");
                        throw tmp43;
                      } else if (!PermissionStore.can(constants.CONNECT, closure_0)) {
                        const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                        const self = this;
                        const self2 = this;
                        const tmp15 = new channel_id(flag2[14])(obj8, "Connect permission required to join channel");
                        throw tmp15;
                      }
                    }
                    if (null != closure_3) {
                      c5 = 2;
                      c6 = 1;
                      const obj10 = { value: validateUserAllowsJoiningVoice(closure_3), done: false };
                      return obj10;
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                const obj3 = channel_id(flag2[24]);
                const voiceChannel = obj3.selectVoiceChannel(closure_0.id);
                const tmp25 = closure_2;
                if (tmp25) {
                  const obj4 = closure_0(flag2[26]);
                  obj4.replaceWith(closure_2_14.CHANNEL(closure_0.guild_id, closure_0.id));
                }
                c6 = 3;
                const obj11 = { value, done: true };
                return obj11;
              }
            } catch (tmp51) {
              c6 = 3;
              throw tmp51;
            }
          }
        });
        return then(function() {
          return closure_0(...arguments);
        });
      }
    }
  }
};
obj9 = {};
const createRPCCommand4 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const SELECT_VOICE_CHANNEL2 = RPCCommands.SELECT_VOICE_CHANNEL;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE, OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER];
obj9[ANY4] = items3;
obj[SELECT_VOICE_CHANNEL] = createRPCCommand4(SELECT_VOICE_CHANNEL2, obj8);
const GET_SELECTED_VOICE_CHANNEL = RPCCommands.GET_SELECTED_VOICE_CHANNEL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj10 = {
  scope: obj11,
  handler(socket) {
    socket = socket.socket;
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = ChannelStore.getChannel(voiceChannelId);
    }
    let transformChannelResult = null;
    if (null != channel) {
      const transformChannel = RPCHelpers.transformChannel;
      RPCHelpers;
      obj = RPCHelpers;
      transformChannelResult = transformChannel(channel, obj.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    }
    return transformChannelResult;
  }
};
obj11 = {};
const createRPCCommand5 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_SELECTED_VOICE_CHANNEL2 = RPCCommands.GET_SELECTED_VOICE_CHANNEL;
const ANY5 = RPC_SCOPE_CONFIG.ANY;
const items4 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj11[ANY5] = items4;
obj[GET_SELECTED_VOICE_CHANNEL] = createRPCCommand5(GET_SELECTED_VOICE_CHANNEL2, obj10);
const SELECT_TEXT_CHANNEL = RPCCommands.SELECT_TEXT_CHANNEL;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj12 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    let nextPromise1;
    let server;
    let socket;
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (null == channel_id) {
      const tmp2 = socket;
      obj = socket(1099);
      obj.transitionTo(constants.ME);
      nextPromise1 = null;
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = storeWaitResult.catch(() => {
        obj = { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT };
        const tmp = new channel_id(dependencyMap[14])(obj, "Request to select text channel timed out.");
        throw tmp;
      });
      const nextPromise = catchPromise.then(function(type) {
        if (null == type) {
          const _HermesInternal = HermesInternal;
          const self3 = this;
          const self4 = this;
          const obj3 = { errorCode: constants2.INVALID_CHANNEL };
          const tmp15 = RPCErrorDefault;
          const tmp152 = new tmp15(obj3, "Invalid channel id: " + channel_id);
          throw tmp152;
        } else if (metroRequire(type.type)) {
          const items = [Promise.resolve(type), ];
          const transformChannel = RPCHelpers.transformChannel;
          RPCHelpers;
          const obj2 = RPCHelpers;
          items[1] = transformChannel(type, obj2.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return all(items);
        } else {
          const self = this;
          const self2 = this;
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp5 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp5;
        }
      });
      nextPromise1 = nextPromise.then(function(result) {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        if (null == tmp2.guild_id) {
          const obj3 = channel_id(dependencyMap[24]);
          const privateChannel = obj3.selectPrivateChannel(tmp.id);
        } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          const obj2 = socket(dependencyMap[26]);
          obj2.replaceWith(closure_1_14.CHANNEL(tmp2.guild_id, tmp.id));
        } else {
          const self = this;
          const self2 = this;
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new channel_id(dependencyMap[14])(obj, "No permission to see channel");
          throw tmp7;
        }
        return tmp2;
      });
    }
    return nextPromise1;
  }
};
obj[SELECT_TEXT_CHANNEL] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SELECT_TEXT_CHANNEL, obj12);
const CREATE_CHANNEL_INVITE = RPCCommands.CREATE_CHANNEL_INVITE;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj13 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const merged = Object.assign(args, Object.assign({ channel_id: 0 }));
    obj = InstantInviteActionCreatorsDefault;
    const invite = obj.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      obj = { errorCode: constants.INVALID_PERMISSIONS };
      const tmp = RPCErrorDefault;
      const tmp2 = new tmp(obj, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp2;
    });
  }
};
obj[CREATE_CHANNEL_INVITE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CREATE_CHANNEL_INVITE, obj13);
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;

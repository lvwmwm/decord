// Module ID: 15758
// Function ID: 15759
// Name: channels
// Dependencies: [32, 5, 4859, 4855, 4877, 4935, 4906, 5662, 6410, 1087, 15743, 5658, 9296, 10829, 15759, 8859, 9299, 11510, 12, 9290, 6810, 6666, 6026, 1114, 8898, 2]

// Module 15758 (channels)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6810 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8859 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8898 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9290 */;
import RPCErrorDefault from "RPCError" /* 9296 */;
import botScopedAccess from "botScopedAccess" /* 9299 */;
import RPCHelpers from "RPCHelpers" /* 11510 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelRecord from "ChannelRecord" /* 4859 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import GuildStore from "GuildStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4935 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
import VoiceStateStore from "VoiceStateStore" /* 5662 */;
import Constants_mod from "Constants" /* 6410 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15759 */;
import size from "module_2" /* 2 */;

let c5, c6, state;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
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
      closure_2 = await closure_130_1(closure_130_2[13])(obj5);
      state = closure_130_3(closure_2, 1)[0];
      if (state != null) {
        state = state.state;
      }
      if ("granted" !== state) {
        const self = this;
        const self2 = this;
        obj = { errorCode: closure_130_14.UNAUTHORIZED_FOR_APPLICATION };
        const tmp11 = new closure_130_1(closure_130_2[12])(obj, "The user has not allowed this app to join voice channels");
        throw tmp11;
      }
      await "IconComponent";
      closure_2 = tmp4;
      ({ frame: c0, iframeId: c1 } = closure_0);
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ isVoiceChannel: hasOwnProperty, isTextChannel: metroRequire } = ChannelRecord);
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ Routes: closure_12, Permissions: map1, RPCCommands, RPCErrors: closure_14 } = Constants);
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
    const channel_id = args.args.channel_id;
    const socket = args.socket;
    const botScopeOnly = args.botScopeOnly;
    const channel = ChannelStore.getChannel(channel_id);
    if (null == channel) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      obj = { errorCode: constants2.INVALID_CHANNEL };
      const tmp14 = RPCErrorDefault;
      const tmp142 = new tmp14(obj, "Invalid channel id: " + channel_id);
      throw tmp142;
    } else {
      let result;
      if (channel.isPrivate()) {
        const scopes = socket.authorization.scopes;
        const tmp = require;
        if (!scopes.has(OAuth2Scopes.OAuth2Scopes.RPC)) {
          if (!scopes.has(tmp(8859).OAuth2Scopes.DM_CHANNELS_READ)) {
            const self = this;
            const self2 = this;
            const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
            const tmp6 = new RPCErrorDefault(obj2, "Invalid scope");
            throw tmp6;
          }
        }
      }
      const transformChannel = RPCHelpers.transformChannel;
      RPCHelpers;
      if (botScopeOnly) {
        const tmp8Result = botScopedAccess;
        result = tmp8Result.canBotScopeReadMessages(socket, channel);
      } else {
        const tmp8Result2 = RPCHelpers;
        result = tmp8Result2.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes);
      }
      return transformChannel(channel, result);
    }
  }
};
obj3 = {};
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CHANNEL2 = RPCCommands.GET_CHANNEL;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
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
      const obj2 = { errorCode: constants2.INVALID_PERMISSIONS };
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
    obj = guild(12);
    const values = obj.values(ChannelStore.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    const tmp = guild;
    if (null != guild_id) {
      found = values;
      if ("" !== guild_id) {
        guild = GuildStore.getGuild(guild_id);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const obj2 = { errorCode: constants2.INVALID_GUILD };
          const tmpResult = tmp(9296);
          const tmpResult1 = new tmpResult(obj2, "Invalid guild id: " + guild_id);
          throw tmpResult1;
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
    const obj3 = { channels: found2.map((id) => ({ id: id.id, name: id.name, type: id.type })) };
    found2 = found1.filter((item) => PermissionStore.can(constants.VIEW_CHANNEL, item));
    return obj3;
  }
};
obj5 = {};
const createRPCCommand2 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CHANNELS2 = RPCCommands.GET_CHANNELS;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
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
        const obj3 = { errorCode: constants2.INVALID_COMMAND };
        const tmp13 = new RPCErrorDefault(obj3, "Current embedded context not associated to a channel");
        throw tmp13;
      } else if (botScopeOnly) {
        const obj2 = botScopedAccess;
        const result = obj2.validateBotScopeHasChannelAccess(socket, tmp7);
      }
    } else {
      const self = this;
      const self2 = this;
      obj = { errorCode: constants2.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps");
      throw tmp5;
    }
  },
  handler(socket) {
    let obj2;
    socket = socket.socket;
    let tmp3;
    if (isPostMessageSocketDefault(socket)) {
      tmp3 = tmp(6810)(socket.context.surface);
    }
    const channel = ChannelStore.getChannel(tmp3);
    if (null == channel) {
      const self = this;
      const self2 = this;
      const obj3 = { errorCode: constants2.INVALID_CHANNEL };
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
    const f124508 = function(type) {
      if (null == type) {
        const _HermesInternal = HermesInternal;
        const self5 = this;
        const self6 = this;
        const obj3 = { errorCode: constants.INVALID_CHANNEL };
        const tmp23 = RPCErrorDefault;
        const tmp232 = new tmp23(obj3, "Invalid channel id: " + channel_id);
        throw tmp232;
      } else if (hasOwnProperty(type.type)) {
        const tmp7 = obj;
        if ("guild" === obj.kind) {
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
        obj = { errorCode: constants.INVALID_CHANNEL };
        const self = this;
        const self2 = this;
        const tmp5 = new RPCErrorDefault(obj, "Channel is not a voice channel");
        throw tmp5;
      }
    };
    ({ server, socket } = args);
    args = args.args;
    const channel_id = args.channel_id;
    let num = args.timeout;
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
    obj = undefined;
    const scopes = socket.authorization.scopes;
    let tmp = socket;
    let tmp3 = null;
    if (!scopes.has(socket(flag2[15]).OAuth2Scopes.RPC)) {
      const tmp4 = channel_id;
      tmp3 = channel_id(tmp2[10])(socket);
    }
    closure_3 = tmp3;
    if (null != tmp3) {
      let obj2;
      const frame = tmp3.frame;
      const tmpResult = tmp(flag2[10]);
      if (tmpResult.isUserScopedConjureApplication(frame.applicationId)) {
        obj2 = { kind: "any" };
      } else {
        let guildId;
        if (frame.surface.type !== tmp(flag2[11]).EmbeddedSurfaceType.OVERLAY) {
          guildId = frame.surface.guildId;
        }
        if (null == guildId) {
          let obj3 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
          let tmp7 = constants2;
          let self = this;
          let self2 = this;
          const tmp8 = obj3;
          const tmp9 = new channel_id(flag2[12])(obj3, "This app can only select a voice channel in the server it is installed in");
          throw tmp9;
        } else {
          obj2 = { kind: "guild", guildId };
        }
      }
      obj = obj2;
    } else {
      obj = { kind: "any" };
    }
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null == channel_id) {
      if (null != voiceChannelId) {
        let guildId1;
        let tmp25 = ChannelStore;
        const channel = ChannelStore.getChannel(voiceChannelId);
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if ("guild" === obj.kind) {
          if (guildId1 !== obj.guildId) {
            let obj4 = { errorCode: constants2.INVALID_CHANNEL };
            const self7 = this;
            const self8 = this;
            const tmp32 = new channel_id(flag2[12])(obj4, "This app can only select a voice channel in the server it is installed in");
            throw tmp32;
          }
        }
      }
      let obj9 = channel_id(tmp2[21]);
      let voiceChannel = obj9.selectVoiceChannel(null);
      return null;
    } else {
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj5 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            let self5 = this;
            let self6 = this;
            let tmp23 = new channel_id(tmp2[12])(obj5, "User is already joined to a voice channel.");
            throw tmp23;
          } else if (null != voiceChannelId) {
            let guildId2;
            const channel1 = ChannelStore.getChannel(voiceChannelId);
            if (channel1 != null) {
              guildId2 = channel1.getGuildId();
            }
            if ("guild" === obj.kind) {
              if (guildId2 !== obj.guildId) {
                let tmp15 = channel_id;
                let obj6 = { errorCode: constants2.INVALID_CHANNEL };
                let self3 = this;
                let self4 = this;
                const tmp18 = new channel_id(flag2[12])(obj6, "This app can only select a voice channel in the server it is installed in");
                let tmp19 = tmp18;
                throw tmp18;
              }
            }
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = storeWaitResult.catch(() => {
        obj = { errorCode: constants.SELECT_CHANNEL_TIMED_OUT };
        const tmp = new channel_id(flag2[12])(obj, "Request to select voice channel timed out.");
        throw tmp;
      });
      const then = catchPromise.then(f124508).then;
      catchPromise.then(f124508);
      let closure_0 = obj(function*(arg0, value) {
        function validateUserAllowsJoiningVoice() {
          return closure_1_15(...arguments);
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
            return { value: "IconComponent", done: null };
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
                let obj9 = tmp67;
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
                return { value: "Reflect", done: true };
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
                    const obj12 = closure_0(flag2[22]);
                    if (obj12.isChannelFull(closure_0, VoiceStateStore, GuildStore)) {
                      const obj7 = { errorCode: constants2.INVALID_CHANNEL };
                      const self3 = this;
                      const self4 = this;
                      const tmp43 = new channel_id(flag2[12])(obj7, "Channel is full");
                      throw tmp43;
                    } else if (!PermissionStore.can(constants.CONNECT, closure_0)) {
                      const obj8 = { errorCode: constants2.INVALID_PERMISSIONS };
                      const self = this;
                      const self2 = this;
                      const tmp15 = new channel_id(flag2[12])(obj8, "Connect permission required to join channel");
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
              const obj3 = channel_id(flag2[21]);
              const voiceChannel = obj3.selectVoiceChannel(closure_0.id);
              const tmp25 = closure_2;
              if (tmp25) {
                const obj4 = closure_0(flag2[23]);
                obj4.replaceWith(closure_2_12.CHANNEL(closure_0.guild_id, closure_0.id));
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
};
obj9 = {};
const createRPCCommand4 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const SELECT_VOICE_CHANNEL2 = RPCCommands.SELECT_VOICE_CHANNEL;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
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
      obj = socket(1114);
      obj.transitionTo(constants.ME);
      nextPromise1 = null;
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = storeWaitResult.catch(() => {
        obj = { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT };
        const tmp = new channel_id(dependencyMap[12])(obj, "Request to select text channel timed out.");
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
          const obj3 = channel_id(dependencyMap[21]);
          const privateChannel = obj3.selectPrivateChannel(tmp.id);
        } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          const obj2 = socket(dependencyMap[23]);
          obj2.replaceWith(closure_1_12.CHANNEL(tmp2.guild_id, tmp.id));
        } else {
          const self = this;
          const self2 = this;
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new channel_id(dependencyMap[12])(obj, "No permission to see channel");
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
const obj13 = {
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

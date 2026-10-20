// Module ID: 15548
// Function ID: 15549
// Name: channels
// Dependencies: [4804, 4800, 4822, 4880, 4851, 5591, 6335, 1087, 15533, 5587, 9197, 15549, 8759, 9200, 11363, 12, 9191, 6729, 6585, 5952, 1114, 8798, 2]

// Module 15548 (channels)
import router_utils from "router_utils" /* 1114 */;
import ChannelUtils from "ChannelUtils" /* 5952 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6585 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6729 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8759 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8798 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9191 */;
import RPCErrorDefault from "RPCError" /* 9197 */;
import botScopedAccess from "botScopedAccess" /* 9200 */;
import RPCHelpers from "RPCHelpers" /* 11363 */;
import ChannelRecord from "ChannelRecord" /* 4804 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildStore from "GuildStore" /* 4822 */;
import PermissionStore from "PermissionStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4851 */;
import VoiceStateStore from "VoiceStateStore" /* 5591 */;
import Constants_mod from "Constants" /* 6335 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15549 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let c3;
let closure_12;
let closure_4;
let obj11;
let obj3;
let obj5;
let obj7;
let obj9;
let unpackModuleId;
({ isVoiceChannel: c3, isTextChannel: closure_4 } = ChannelRecord);
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ Routes: c10, Permissions: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = Constants);
let obj = {};
const GET_CHANNEL = RPCCommands.GET_CHANNEL;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: obj3,
  validateAccess(botScopeOnly) {
    if (botScopeOnly.botScopeOnly) {
      const obj = botScopedAccess;
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
      const obj = { errorCode: constants2.INVALID_CHANNEL };
      const tmp14 = RPCErrorDefault;
      const tmp142 = new tmp14(obj, "Invalid channel id: " + channel_id);
      throw tmp142;
    } else {
      let result;
      if (channel.isPrivate()) {
        const scopes = socket.authorization.scopes;
        const tmp = require;
        if (!scopes.has(OAuth2Scopes.OAuth2Scopes.RPC)) {
          if (!scopes.has(tmp(8759).OAuth2Scopes.DM_CHANNELS_READ)) {
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
          const obj = botScopedAccess;
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
    let obj = guild(12);
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
          const tmpResult = tmp(9197);
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
        const obj = botScopedAccess;
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
const obj6 = {
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
      const obj = { errorCode: constants2.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps");
      throw tmp5;
    }
  },
  handler(socket) {
    socket = socket.socket;
    let tmp3;
    if (isPostMessageSocketDefault(socket)) {
      tmp3 = tmp(6729)(socket.context.surface);
    }
    const channel = ChannelStore.getChannel(tmp3);
    if (null == channel) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants2.INVALID_CHANNEL };
      const tmp9 = new RPCErrorDefault(obj2, "Invalid channel");
      throw tmp9;
    } else {
      const str = PermissionStore.computePermissions(channel);
      let str1 = str;
      if (typeof str !== "bigint") {
        str1 = str.toString();
      }
      return { permissions: str1 };
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
    let obj;
    const scopes = socket.authorization.scopes;
    let tmp = socket;
    const tmp2 = flag2;
    if (scopes.has(socket(flag2[12]).OAuth2Scopes.RPC)) {
      obj = { kind: "any" };
    } else {
      const frame = channel_id(tmp2[8])(socket).frame;
      const tmp3 = channel_id;
      const tmpResult = tmp(tmp2[8]);
      if (tmpResult.isUserScopedConjureApplication(frame.applicationId)) {
        obj = { kind: "any" };
      } else {
        let guildId;
        if (frame.surface.type !== tmp(tmp2[9]).EmbeddedSurfaceType.OVERLAY) {
          guildId = frame.surface.guildId;
        }
        let tmp5 = null;
        if (null == guildId) {
          let obj2 = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
          let self = this;
          let self2 = this;
          let tmp7 = obj2;
          const tmp8 = new tmp3(tmp2[10])(obj2, "This app can only select a voice channel in the server it is installed in");
          let tmp9 = tmp8;
          throw tmp8;
        } else {
          obj = { kind: "guild", guildId };
        }
      }
    }
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null == channel_id) {
      if (null != voiceChannelId) {
        let guildId1;
        let tmp23 = ChannelStore;
        const channel = ChannelStore.getChannel(voiceChannelId);
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        if ("guild" === obj.kind) {
          if (guildId1 !== obj.guildId) {
            let obj3 = { errorCode: constants2.INVALID_CHANNEL };
            const self7 = this;
            const self8 = this;
            const tmp30 = new channel_id(tmp2[10])(obj3, "This app can only select a voice channel in the server it is installed in");
            throw tmp30;
          }
        }
      }
      const obj8 = channel_id(tmp2[18]);
      let voiceChannel = obj8.selectVoiceChannel(null);
      return null;
    } else {
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj4 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            let tmp19 = constants2;
            let self5 = this;
            let self6 = this;
            let tmp21 = new channel_id(tmp2[10])(obj4, "User is already joined to a voice channel.");
            throw tmp21;
          } else if (null != voiceChannelId) {
            let guildId2;
            const channel1 = ChannelStore.getChannel(voiceChannelId);
            if (channel1 != null) {
              guildId2 = channel1.getGuildId();
            }
            if ("guild" === obj.kind) {
              if (guildId2 !== obj.guildId) {
                let obj5 = { errorCode: constants2.INVALID_CHANNEL };
                let self3 = this;
                let self4 = this;
                const tmp16 = new channel_id(tmp2[10])(obj5, "This app can only select a voice channel in the server it is installed in");
                throw tmp16;
              }
            }
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = storeWaitResult.catch(() => {
        obj = { errorCode: constants.SELECT_CHANNEL_TIMED_OUT };
        const tmp = new channel_id(flag2[10])(obj, "Request to select voice channel timed out.");
        throw tmp;
      });
      const nextPromise = catchPromise.then(function(type) {
        if (null == type) {
          const _HermesInternal = HermesInternal;
          const self5 = this;
          const self6 = this;
          const obj3 = { errorCode: constants.INVALID_CHANNEL };
          const tmp23 = RPCErrorDefault;
          const tmp232 = new tmp23(obj3, "Invalid channel id: " + channel_id);
          throw tmp232;
        } else if (_false(type.type)) {
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
      });
      return nextPromise.then(function(result) {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        if (null != tmp2.guild_id) {
          const obj5 = ChannelUtils;
          if (obj5.isChannelFull(tmp, VoiceStateStore, GuildStore)) {
            const self3 = this;
            const self4 = this;
            const obj4 = { errorCode: constants.INVALID_CHANNEL };
            const tmp21 = new RPCErrorDefault(obj4, "Channel is full");
            throw tmp21;
          } else if (!PermissionStore.can(unpackModuleId.CONNECT, tmp)) {
            const self = this;
            const self2 = this;
            obj = { errorCode: constants.INVALID_PERMISSIONS };
            const tmp9 = new RPCErrorDefault(obj, "Connect permission required to join channel");
            throw tmp9;
          }
        }
        const obj2 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj2.selectVoiceChannel(tmp.id);
        const tmp12 = flag2;
        if (tmp12) {
          const obj3 = router_utils;
          obj3.replaceWith(authStore.CHANNEL(tmp.guild_id, tmp.id));
        }
        return tmp2;
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
const obj10 = {
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
      const obj = RPCHelpers;
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
const obj12 = {
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
      let obj = socket(1114);
      obj.transitionTo(constants.ME);
      nextPromise1 = null;
    } else {
      const storeWaitResult = server.storeWait(socket, () => ChannelStore.getChannel(channel_id), num);
      const catchPromise = storeWaitResult.catch(() => {
        const obj = { errorCode: constants2.SELECT_CHANNEL_TIMED_OUT };
        const tmp = new channel_id(dependencyMap[10])(obj, "Request to select text channel timed out.");
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
        } else if (React3(type.type)) {
          const items = [Promise.resolve(type), ];
          const transformChannel = RPCHelpers.transformChannel;
          RPCHelpers;
          const obj2 = RPCHelpers;
          items[1] = transformChannel(type, obj2.hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return all(items);
        } else {
          const self = this;
          const self2 = this;
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp5 = new RPCErrorDefault(obj, "Channel is not a text channel");
          throw tmp5;
        }
      });
      nextPromise1 = nextPromise.then(function(result) {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        if (null == tmp2.guild_id) {
          const obj3 = channel_id(dependencyMap[18]);
          const privateChannel = obj3.selectPrivateChannel(tmp.id);
        } else if (PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          const obj2 = socket(dependencyMap[20]);
          obj2.replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
        } else {
          const self = this;
          const self2 = this;
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp7 = new channel_id(dependencyMap[10])(obj, "No permission to see channel");
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
    let obj = InstantInviteActionCreatorsDefault;
    const invite = obj.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      const obj = { errorCode: constants.INVALID_PERMISSIONS };
      const tmp = RPCErrorDefault;
      const tmp2 = new tmp(obj, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp2;
    });
  }
};
obj[CREATE_CHANNEL_INVITE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.CREATE_CHANNEL_INVITE, obj13);
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;

// Module ID: 14654
// Function ID: 14655
// Name: channels
// Dependencies: [2068, 2064, 2086, 4709, 2115, 5112, 5636, 1085, 14639, 8594, 10896, 8441, 14655, 10905, 12, 14642, 10775, 10899, 5886, 5411, 1112, 8480, 2]

// Module 14654 (channels)
import router_utils from "router_utils" /* 1112 */;
import ChannelUtils from "ChannelUtils" /* 5411 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8441 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8480 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10775 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 10899 */;
import RPCHelpers from "RPCHelpers" /* 10905 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14642 */;
import botScopedAccess from "botScopedAccess" /* 14655 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import Constants_mod from "Constants" /* 5636 */;
import Constants_mod2 from "Constants" /* 1085 */;
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
function validation(string) {
  let minResult;
  let stringResult;
  const obj = createRpcJoiSchemaObjectDefault(string);
  const obj2 = { channel_id: stringResult.allow(null), timeout: minResult.max(60) };
  const keys = obj.required().keys;
  obj.required();
  stringResult = string.string();
  const numberResult = string.number();
  minResult = numberResult.min(0);
  return keys(obj2);
}
function handler(args) {
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
  if (channel_id) {
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
      if (tmp2.guild_id) {
        if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp)) {
          const self = this;
          const self2 = this;
          const obj = { errorCode: constants2.INVALID_CHANNEL };
          const tmp9 = new channel_id(dependencyMap[10])(obj, "No permission to see channel");
          throw tmp9;
        }
      }
      if (tmp2.guild_id) {
        const obj3 = socket(dependencyMap[20]);
        obj3.replaceWith(closure_1_10.CHANNEL(tmp2.guild_id, tmp.id));
      } else {
        const obj2 = channel_id(dependencyMap[18]);
        const privateChannel = obj2.selectPrivateChannel(tmp.id);
      }
      return tmp2;
    });
  } else {
    let tmp = socket;
    const tmp2 = dependencyMap;
    let obj = socket(1112);
    obj.transitionTo(constants.ME);
    nextPromise1 = null;
  }
  return nextPromise1;
}
const handler2 = function handler(args) {
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
};
({ isVoiceChannel: c3, isTextChannel: closure_4 } = ChannelRecord);
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ Routes: c10, Permissions: unpackModuleId, RPCCommands, RPCErrors: closure_12 } = Constants);
let obj = {};
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
          if (!scopes.has(tmp(8441).OAuth2Scopes.DM_CHANNELS_READ)) {
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
const GET_CHANNEL = RPCCommands.GET_CHANNEL;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.GUILDS, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[ANY] = items;
obj[GET_CHANNEL] = obj2;
let obj4 = {
  scope: obj5,
  validateAccess(botScopeOnly) {
    if (botScopeOnly.botScopeOnly) {
      const obj = botScopedAccess;
      return obj.validateBotScopeHasGuildAccess(tmp2, tmp);
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
    if (guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj2 = { errorCode: constants2.INVALID_GUILD };
        const tmpResult = tmp(10896);
        const tmpResult1 = new tmpResult(obj2, "Invalid guild id: " + guild_id);
        throw tmpResult1;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
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
const GET_CHANNELS = RPCCommands.GET_CHANNELS;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj5[ANY2] = items1;
obj[GET_CHANNELS] = obj4;
let obj6 = {
  scope: obj7,
  validateAccess(args) {
    if (args.args == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    } else {
      const socket = args.socket;
      const botScopeOnly = args.botScopeOnly;
      if (isPostMessageSocketDefault(socket)) {
        const tmp5 = getChannelIdForEmbeddedSurfaceDefault(socket.context.surface);
        if (null == tmp5) {
          const self3 = this;
          const self4 = this;
          const obj3 = { errorCode: constants2.INVALID_COMMAND };
          const tmp10 = new RPCErrorDefault(obj3, "Current embedded context not associated to a channel");
          throw tmp10;
        } else if (botScopeOnly) {
          const obj2 = botScopedAccess;
          const result = obj2.validateBotScopeHasChannelAccess(socket, tmp5);
        }
      } else {
        const self = this;
        const self2 = this;
        const obj = { errorCode: constants2.INVALID_COMMAND };
        const tmp3 = new RPCErrorDefault(obj, "Access to the current user's permissions within the embedded context's associated channel is only available for embedded apps");
        throw tmp3;
      }
    }
  },
  handler(socket) {
    socket = socket.socket;
    let tmp3;
    if (isPostMessageSocketDefault(socket)) {
      tmp3 = tmp(10775)(socket.context.surface);
    }
    const channel = ChannelStore.getChannel(tmp3);
    if (null == channel) {
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: constants2.INVALID_CHANNEL };
      const tmp8 = new RPCErrorDefault(obj2, "Invalid channel");
      throw tmp8;
    } else {
      const obj = { permissions: PermissionStore.computePermissions(channel) };
      return obj;
    }
  }
};
obj7 = {};
const GET_CHANNEL_PERMISSIONS = RPCCommands.GET_CHANNEL_PERMISSIONS;
const ANY3 = RPC_SCOPE_CONFIG.ANY;
const items2 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj7[ANY3] = items2;
obj[GET_CHANNEL_PERMISSIONS] = obj6;
const obj8 = {
  scope: obj9,
  validation(string) {
    let minResult;
    let stringResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const obj2 = { channel_id: stringResult.allow(null), timeout: minResult.max(60), force: string.boolean(), navigate: string.boolean() };
    const keys = obj.required().keys;
    obj.required();
    stringResult = string.string();
    const numberResult = string.number();
    minResult = numberResult.min(0);
    return keys(obj2);
  },
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
    if (scopes.has(socket(flag2[11]).OAuth2Scopes.RPC)) {
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
          throw tmp8;
        } else {
          obj = { kind: "guild", guildId };
        }
      }
    }
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (channel_id) {
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let obj3 = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            const self7 = this;
            const self8 = this;
            const tmp30 = new channel_id(tmp2[10])(obj3, "User is already joined to a voice channel.");
            throw tmp30;
          } else if (null != voiceChannelId) {
            let guildId1;
            const channel = ChannelStore.getChannel(voiceChannelId);
            if (channel != null) {
              guildId1 = channel.getGuildId();
            }
            if ("guild" === obj.kind) {
              if (guildId1 !== obj.guildId) {
                let obj4 = { errorCode: constants2.INVALID_CHANNEL };
                let tmp23 = constants2;
                let self5 = this;
                let self6 = this;
                let tmp25 = new channel_id(tmp2[10])(obj4, "This app can only select a voice channel in the server it is installed in");
                throw tmp25;
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
        if (tmp2.guild_id) {
          obj = ChannelUtils;
          if (obj.isChannelFull(tmp, VoiceStateStore, GuildStore)) {
            const self3 = this;
            const self4 = this;
            const obj2 = { errorCode: constants.INVALID_CHANNEL };
            const tmp25 = new RPCErrorDefault(obj2, "Channel is full");
            throw tmp25;
          } else if (!PermissionStore.can(unpackModuleId.CONNECT, tmp)) {
            const self = this;
            const self2 = this;
            const obj5 = { errorCode: constants.INVALID_PERMISSIONS };
            const tmp13 = new RPCErrorDefault(obj5, "Connect permission required to join channel");
            throw tmp13;
          }
        }
        const obj3 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj3.selectVoiceChannel(tmp.id);
        const tmp16 = flag2;
        if (tmp16) {
          const obj4 = router_utils;
          obj4.replaceWith(authStore.CHANNEL(tmp.guild_id, tmp.id));
        }
        return tmp2;
      });
    } else {
      if (null != voiceChannelId) {
        let guildId2;
        const channel1 = ChannelStore.getChannel(voiceChannelId);
        if (channel1 != null) {
          guildId2 = channel1.getGuildId();
        }
        if ("guild" === obj.kind) {
          if (guildId2 !== obj.guildId) {
            const obj6 = { errorCode: constants2.INVALID_CHANNEL };
            let tmp16 = constants2;
            let self3 = this;
            let self4 = this;
            const tmp18 = new channel_id(tmp2[10])(obj6, "This app can only select a voice channel in the server it is installed in");
            let tmp19 = tmp18;
            throw tmp18;
          }
        }
      }
      let tmp13 = channel_id;
      let obj5 = channel_id(tmp2[18]);
      let voiceChannel = obj5.selectVoiceChannel(null);
      return null;
    }
  }
};
obj9 = {};
const SELECT_VOICE_CHANNEL = RPCCommands.SELECT_VOICE_CHANNEL;
const ANY4 = RPC_SCOPE_CONFIG.ANY;
const items3 = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_EMBEDDED_APP_SCOPE];
obj9[ANY4] = items3;
obj[SELECT_VOICE_CHANNEL] = obj8;
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
const GET_SELECTED_VOICE_CHANNEL = RPCCommands.GET_SELECTED_VOICE_CHANNEL;
const ANY5 = RPC_SCOPE_CONFIG.ANY;
const items4 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj11[ANY5] = items4;
obj[GET_SELECTED_VOICE_CHANNEL] = obj10;
obj[RPCCommands.SELECT_TEXT_CHANNEL] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, validation, handler };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, validation, handler });
obj[RPCCommands.CREATE_CHANNEL_INVITE] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler: handler2 });
let result = size.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;

// Module ID: 13398
// Function ID: 103029
// Name: items
// Dependencies: [1352, 1348, 1838, 3758, 1906, 4146, 4033, 653, 8310, 10496, 10501, 22, 13395, 10499, 4944, 4312, 1198, 7460, 2]

// Module 13398 (items)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { RPC_SCOPE_CONFIG } from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPCCommands;
let closure_10;
let closure_11;
let closure_12;
let closure_3;
let closure_4;
({ isVoiceChannel: closure_3, isTextChannel: closure_4 } = _callSuper);
({ Routes: closure_10, Permissions: closure_11, RPCCommands, RPCErrors: closure_12 } = ME);
let obj = {};
obj = {};
obj = {};
let items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.GUILDS, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = store.getChannel(channel_id);
  if (null == channel) {
    let tmp18 = importDefault(10496);
    let obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const prototype2 = tmp18.prototype;
    tmp18 = new tmp18(obj, "Invalid channel id: " + channel_id);
    throw tmp18;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.RPC)) {
        if (!scopes.includes(require(8310) /* set */.OAuth2Scopes.DM_CHANNELS_READ)) {
          let tmp7 = importDefault(10496);
          obj = { errorCode: constants2.INVALID_PERMISSIONS };
          const prototype = tmp7.prototype;
          tmp7 = new tmp7(obj, "Invalid scope");
          throw tmp7;
        }
      }
    }
    const obj3 = require(10501) /* recurseReplaceContentTree */;
    return obj3.transformChannel(channel, require(10501) /* recurseReplaceContentTree */.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
  }
};
obj[RPCCommands.GET_CHANNEL] = obj;
obj[RPCCommands.GET_CHANNELS] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = importDefault(22);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        let tmp6 = importDefault(10496);
        obj = { errorCode: constants2.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "Invalid guild id: " + guild_id);
        throw tmp6;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = {};
    const found1 = found.filter((channel) => outer1_7.can(outer1_11.VIEW_CHANNEL, channel));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
let obj2 = {};
let obj3 = {};
const items1 = [require("set").OAuth2Scopes.GUILDS_MEMBERS_READ, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2.scope = obj3;
obj2.handler = function handler() {
  const tmp = importDefault(13395)();
  if (null == tmp) {
    let tmp5 = importDefault(10496);
    let obj = { errorCode: constants2.INVALID_CHANNEL };
    const prototype = tmp5.prototype;
    tmp5 = new tmp5(obj, "Invalid channel");
    throw tmp5;
  } else {
    obj = { permissions: closure_7.computePermissions(tmp) };
    return obj;
  }
};
obj[RPCCommands.GET_CHANNEL_PERMISSIONS] = obj2;
const obj1 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let guild;
    let obj = importDefault(22);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      guild = guild.getGuild(guild_id);
      if (null == guild) {
        let tmp6 = importDefault(10496);
        obj = { errorCode: constants2.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "Invalid guild id: " + guild_id);
        throw tmp6;
      } else {
        found = values.filter((guild_id) => guild_id.guild_id === guild.id);
      }
    }
    obj = {};
    const found1 = found.filter((channel) => outer1_7.can(outer1_11.VIEW_CHANNEL, channel));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10499)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    obj.force = string.boolean();
    obj.navigate = string.boolean();
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let tmp10 = channel_id(flag2[9]);
            let obj = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            let prototype = tmp10.prototype;
            tmp10 = new tmp10(obj, "User is already joined to a voice channel.");
            throw tmp10;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      });
      return server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(flag2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_3(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(flag2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a voice channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          let obj = socket(flag2[15]);
          if (obj.isChannelFull(tmp, outer1_9, outer1_6)) {
            let tmp25 = channel_id(flag2[9]);
            obj = { errorCode: outer1_12.INVALID_CHANNEL };
            const prototype2 = tmp25.prototype;
            tmp25 = new tmp25(obj, "Channel is full");
            throw tmp25;
          } else if (!outer1_7.can(outer1_11.CONNECT, tmp)) {
            let tmp11 = channel_id(flag2[9]);
            obj = { errorCode: outer1_12.INVALID_PERMISSIONS };
            const prototype = tmp11.prototype;
            tmp11 = new tmp11(obj, "Connect permission required to join channel");
            throw tmp11;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(outer1_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = channel_id(flag2[14]);
      let voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
const obj5 = {};
const obj6 = {};
const items2 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_READ];
obj6[RPC_SCOPE_CONFIG.ANY] = items2;
obj5.scope = obj6;
obj5.handler = function handler(socket) {
  socket = socket.socket;
  const voiceChannelId = store2.getVoiceChannelId();
  let channel = null;
  if (null != voiceChannelId) {
    channel = store.getChannel(voiceChannelId);
  }
  let transformChannelResult = null;
  if (null != channel) {
    const obj = require(10501) /* recurseReplaceContentTree */;
    transformChannelResult = obj.transformChannel(channel, require(10501) /* recurseReplaceContentTree */.hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    const obj2 = require(10501) /* recurseReplaceContentTree */;
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = obj5;
let obj4 = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10499)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    obj.force = string.boolean();
    obj.navigate = string.boolean();
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let tmp10 = channel_id(flag2[9]);
            let obj = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            let prototype = tmp10.prototype;
            tmp10 = new tmp10(obj, "User is already joined to a voice channel.");
            throw tmp10;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      });
      return server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(flag2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_3(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(flag2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a voice channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          let obj = socket(flag2[15]);
          if (obj.isChannelFull(tmp, outer1_9, outer1_6)) {
            let tmp25 = channel_id(flag2[9]);
            obj = { errorCode: outer1_12.INVALID_CHANNEL };
            const prototype2 = tmp25.prototype;
            tmp25 = new tmp25(obj, "Channel is full");
            throw tmp25;
          } else if (!outer1_7.can(outer1_11.CONNECT, tmp)) {
            let tmp11 = channel_id(flag2[9]);
            obj = { errorCode: outer1_12.INVALID_PERMISSIONS };
            const prototype = tmp11.prototype;
            tmp11 = new tmp11(obj, "Connect permission required to join channel");
            throw tmp11;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(outer1_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = channel_id(flag2[14]);
      let voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
obj[RPCCommands.SELECT_TEXT_CHANNEL] = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10499)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      });
      let nextPromise1 = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(outer1_2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(outer1_2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!outer1_7.can(outer1_11.VIEW_CHANNEL, tmp)) {
            let tmp7 = channel_id(outer1_2[9]);
            const obj = { errorCode: outer1_12.INVALID_CHANNEL };
            const prototype = tmp7.prototype;
            tmp7 = new tmp7(obj, "No permission to see channel");
            throw tmp7;
          }
        }
        if (tmp2.guild_id) {
          socket(outer1_2[16]).replaceWith(outer1_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(outer1_2[16]);
        } else {
          const privateChannel = channel_id(outer1_2[14]).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(outer1_2[14]);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(outer1_2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(outer1_2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      });
    } else {
      socket(1198).transitionTo(constants.ME);
      nextPromise1 = null;
      let obj = socket(1198);
    }
    return nextPromise1;
  }
};
const obj7 = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10499)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.channel_id = string.string().allow(null);
    const stringResult = string.string();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
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
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      });
      let nextPromise1 = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(outer1_2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(outer1_2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!outer1_7.can(outer1_11.VIEW_CHANNEL, tmp)) {
            let tmp7 = channel_id(outer1_2[9]);
            const obj = { errorCode: outer1_12.INVALID_CHANNEL };
            const prototype = tmp7.prototype;
            tmp7 = new tmp7(obj, "No permission to see channel");
            throw tmp7;
          }
        }
        if (tmp2.guild_id) {
          socket(outer1_2[16]).replaceWith(outer1_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(outer1_2[16]);
        } else {
          const privateChannel = channel_id(outer1_2[14]).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(outer1_2[14]);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => outer1_5.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(outer1_2[9]);
        tmp = new tmp({ errorCode: outer1_12.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(outer1_2[9]);
          let obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (outer1_4(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(outer1_2[10]);
          items[1] = obj2.transformChannel(type, socket(outer1_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(outer1_2[9]);
          obj = { errorCode: outer1_12.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      });
    } else {
      socket(1198).transitionTo(constants.ME);
      nextPromise1 = null;
      let obj = socket(1198);
    }
    return nextPromise1;
  }
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    let obj = Object.create(null);
    obj.channel_id = 0;
    const merged = Object.assign(args, obj);
    obj = importDefault(7460);
    const invite = obj.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = outer1_1(outer1_2[9]);
      tmp = new tmp({ errorCode: outer1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const obj8 = {
  scope: require("set").OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    let obj = Object.create(null);
    obj.channel_id = 0;
    const merged = Object.assign(args, obj);
    obj = importDefault(7460);
    const invite = obj.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = outer1_1(outer1_2[9]);
      tmp = new tmp({ errorCode: outer1_12.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;

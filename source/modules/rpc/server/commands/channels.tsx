// Module ID: 13277
// Function ID: 100840
// Name: items
// Dependencies: []

// Module 13277 (items)
let RPCCommands;
const _module = require(dependencyMap[0]);
({ isVoiceChannel: closure_3, isTextChannel: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const RPC_SCOPE_CONFIG = require(dependencyMap[6]).RPC_SCOPE_CONFIG;
const _module1 = require(dependencyMap[7]);
({ Routes: closure_10, Permissions: closure_11, RPCCommands, RPCErrors: closure_12 } = _module1);
let obj = {};
obj = {};
obj = {};
const items = [require(dependencyMap[8]).OAuth2Scopes.RPC, require(dependencyMap[8]).OAuth2Scopes.GUILDS, require(dependencyMap[8]).OAuth2Scopes.GUILDS_CHANNELS_READ];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(args) {
  const channel_id = args.args.channel_id;
  const socket = args.socket;
  const channel = store.getChannel(channel_id);
  if (null == channel) {
    let tmp18 = importDefault(dependencyMap[9]);
    let obj = { errorCode: constants2.INVALID_CHANNEL };
    const _HermesInternal = HermesInternal;
    const prototype2 = tmp18.prototype;
    tmp18 = new tmp18(obj, "Invalid channel id: " + channel_id);
    throw tmp18;
  } else {
    if (channel.isPrivate()) {
      const scopes = socket.authorization.scopes;
      if (!scopes.includes(require(dependencyMap[8]).OAuth2Scopes.RPC)) {
        if (!scopes.includes(require(dependencyMap[8]).OAuth2Scopes.DM_CHANNELS_READ)) {
          let tmp7 = importDefault(dependencyMap[9]);
          obj = { errorCode: constants2.INVALID_PERMISSIONS };
          const prototype = tmp7.prototype;
          tmp7 = new tmp7(obj, "Invalid scope");
          throw tmp7;
        }
      }
    }
    const obj3 = require(dependencyMap[10]);
    return obj3.transformChannel(channel, require(dependencyMap[10]).hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
  }
};
obj[RPCCommands.GET_CHANNEL] = obj;
obj[RPCCommands.GET_CHANNELS] = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let require;
    let obj = importDefault(dependencyMap[11]);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      const guild = guild.getGuild(guild_id);
      require = guild;
      if (null == guild) {
        let tmp6 = importDefault(dependencyMap[9]);
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
    const found1 = found.filter((channel) => closure_7.can(constants.VIEW_CHANNEL, channel));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
const obj2 = {};
const obj3 = {};
const items1 = [require(dependencyMap[8]).OAuth2Scopes.GUILDS_MEMBERS_READ, require(dependencyMap[8]).OAuth2Scopes.GUILDS_CHANNELS_READ];
obj3[RPC_SCOPE_CONFIG.ANY] = items1;
obj2.scope = obj3;
obj2.handler = function handler() {
  const tmp = importDefault(dependencyMap[12])();
  if (null == tmp) {
    let tmp5 = importDefault(dependencyMap[9]);
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
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  handler(args) {
    const guild_id = args.args.guild_id;
    let require;
    let obj = importDefault(dependencyMap[11]);
    const values = obj.values(store.loadAllGuildAndPrivateChannelsFromDisk());
    let found = values;
    if (guild_id) {
      const guild = guild.getGuild(guild_id);
      require = guild;
      if (null == guild) {
        let tmp6 = importDefault(dependencyMap[9]);
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
    const found1 = found.filter((channel) => closure_7.can(constants.VIEW_CHANNEL, channel));
    obj.channels = found1.map((id) => ({ id: id.id, name: id.name, type: id.type }));
    return obj;
  }
};
obj[RPCCommands.SELECT_VOICE_CHANNEL] = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[13])(string);
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
    const require = socket;
    args = args.args;
    const channel_id = args.channel_id;
    const importDefault = channel_id;
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
    const dependencyMap = flag2;
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let tmp10 = importDefault(dependencyMap[9]);
            let obj = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            const prototype = tmp10.prototype;
            tmp10 = new tmp10(obj, "User is already joined to a voice channel.");
            throw tmp10;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => channel.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      });
      return server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(flag2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(flag2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
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
          if (obj.isChannelFull(tmp, closure_9, closure_6)) {
            let tmp25 = channel_id(flag2[9]);
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const prototype2 = tmp25.prototype;
            tmp25 = new tmp25(obj, "Channel is full");
            throw tmp25;
          } else if (!closure_7.can(constants.CONNECT, tmp)) {
            let tmp11 = channel_id(flag2[9]);
            obj = { errorCode: constants2.INVALID_PERMISSIONS };
            const prototype = tmp11.prototype;
            tmp11 = new tmp11(obj, "Connect permission required to join channel");
            throw tmp11;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(closure_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = importDefault(dependencyMap[14]);
      const voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
const obj5 = {};
const obj6 = {};
const items2 = [require(dependencyMap[8]).OAuth2Scopes.RPC, require(dependencyMap[8]).OAuth2Scopes.RPC_VOICE_READ];
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
    const obj = require(dependencyMap[10]);
    transformChannelResult = obj.transformChannel(channel, require(dependencyMap[10]).hasMessageReadPermission(channel, socket.application.id, socket.authorization.scopes));
    const obj2 = require(dependencyMap[10]);
  }
  return transformChannelResult;
};
obj[RPCCommands.GET_SELECTED_VOICE_CHANNEL] = obj5;
const obj4 = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[13])(string);
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
    const require = socket;
    args = args.args;
    const channel_id = args.channel_id;
    const importDefault = channel_id;
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
    const dependencyMap = flag2;
    if (channel_id) {
      const voiceChannelId = store2.getVoiceChannelId();
      if (null != voiceChannelId) {
        if (voiceChannelId !== channel_id) {
          if (false === flag) {
            let tmp10 = importDefault(dependencyMap[9]);
            let obj = { errorCode: constants2.SELECT_VOICE_FORCE_REQUIRED };
            const prototype = tmp10.prototype;
            tmp10 = new tmp10(obj, "User is already joined to a voice channel.");
            throw tmp10;
          }
        }
      }
      const storeWaitResult = server.storeWait(socket, () => channel.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      });
      return server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(flag2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select voice channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(flag2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(flag2[10]);
          items[1] = obj2.transformChannel(type, socket(flag2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(flag2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
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
          if (obj.isChannelFull(tmp, closure_9, closure_6)) {
            let tmp25 = channel_id(flag2[9]);
            obj = { errorCode: constants2.INVALID_CHANNEL };
            const prototype2 = tmp25.prototype;
            tmp25 = new tmp25(obj, "Channel is full");
            throw tmp25;
          } else if (!closure_7.can(constants.CONNECT, tmp)) {
            let tmp11 = channel_id(flag2[9]);
            obj = { errorCode: constants2.INVALID_PERMISSIONS };
            const prototype = tmp11.prototype;
            tmp11 = new tmp11(obj, "Connect permission required to join channel");
            throw tmp11;
          }
        }
        const voiceChannel = channel_id(flag2[14]).selectVoiceChannel(tmp.id);
        if (flag2) {
          socket(flag2[16]).replaceWith(closure_10.CHANNEL(tmp.guild_id, tmp.id));
          const obj4 = socket(flag2[16]);
        }
        return tmp2;
      });
    } else {
      obj = importDefault(dependencyMap[14]);
      const voiceChannel = obj.selectVoiceChannel(null);
      return null;
    }
  }
};
obj[RPCCommands.SELECT_TEXT_CHANNEL] = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[13])(string);
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
    const require = socket;
    args = args.args;
    const channel_id = args.channel_id;
    const importDefault = channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => channel.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      });
      let nextPromise1 = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(closure_2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(closure_2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!closure_7.can(constants.VIEW_CHANNEL, tmp)) {
            let tmp7 = channel_id(closure_2[9]);
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const prototype = tmp7.prototype;
            tmp7 = new tmp7(obj, "No permission to see channel");
            throw tmp7;
          }
        }
        if (tmp2.guild_id) {
          socket(closure_2[16]).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(closure_2[16]);
        } else {
          const privateChannel = channel_id(closure_2[14]).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(closure_2[14]);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(closure_2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(closure_2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      });
    } else {
      require(dependencyMap[16]).transitionTo(constants.ME);
      nextPromise1 = null;
      const obj = require(dependencyMap[16]);
    }
    return nextPromise1;
  }
};
const obj7 = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[13])(string);
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
    const require = socket;
    args = args.args;
    const channel_id = args.channel_id;
    const importDefault = channel_id;
    let num = args.timeout;
    if (num === undefined) {
      num = 0;
    }
    if (channel_id) {
      const storeWaitResult = server.storeWait(socket, () => channel.getChannel(channel_id), num);
      const catchPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      });
      let nextPromise1 = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(closure_2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(closure_2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (tmp2.guild_id) {
          if (!closure_7.can(constants.VIEW_CHANNEL, tmp)) {
            let tmp7 = channel_id(closure_2[9]);
            const obj = { errorCode: constants2.INVALID_CHANNEL };
            const prototype = tmp7.prototype;
            tmp7 = new tmp7(obj, "No permission to see channel");
            throw tmp7;
          }
        }
        if (tmp2.guild_id) {
          socket(closure_2[16]).replaceWith(closure_10.CHANNEL(tmp2.guild_id, tmp.id));
          const obj3 = socket(closure_2[16]);
        } else {
          const privateChannel = channel_id(closure_2[14]).selectPrivateChannel(tmp.id);
          const obj2 = channel_id(closure_2[14]);
        }
        return tmp2;
      });
      const nextPromise = server.storeWait(socket, () => channel.getChannel(channel_id), num).catch(() => {
        let tmp = channel_id(closure_2[9]);
        tmp = new tmp({ errorCode: constants2.SELECT_CHANNEL_TIMED_OUT }, "Request to select text channel timed out.");
        throw tmp;
      }).then((type) => {
        if (null == type) {
          let tmp16 = channel_id(closure_2[9]);
          let obj = { errorCode: constants2.INVALID_CHANNEL };
          const _HermesInternal = HermesInternal;
          const prototype2 = tmp16.prototype;
          tmp16 = new tmp16(obj, "Invalid channel id: " + channel_id);
          throw tmp16;
        } else if (callback(type.type)) {
          const items = [Promise.resolve(type), ];
          const obj2 = socket(closure_2[10]);
          items[1] = obj2.transformChannel(type, socket(closure_2[10]).hasMessageReadPermission(type, socket.application.id, socket.authorization.scopes));
          return Promise.all(items);
        } else {
          let tmp3 = channel_id(closure_2[9]);
          obj = { errorCode: constants2.INVALID_CHANNEL };
          const prototype = tmp3.prototype;
          tmp3 = new tmp3(obj, "Channel is not a text channel");
          throw tmp3;
        }
      });
    } else {
      require(dependencyMap[16]).transitionTo(constants.ME);
      nextPromise1 = null;
      const obj = require(dependencyMap[16]);
    }
    return nextPromise1;
  }
};
obj[RPCCommands.CREATE_CHANNEL_INVITE] = {
  scope: require(dependencyMap[8]).OAuth2Scopes.RPC,
  handler(args) {
    args = args.args;
    const channel_id = args.channel_id;
    const require = channel_id;
    let obj = Object.create(null);
    obj.channel_id = 0;
    const merged = Object.assign(args, obj);
    obj = importDefault(dependencyMap[17]);
    const invite = obj.createInvite(channel_id, merged, "RPC");
    return invite.catch(() => {
      let tmp = callback(closure_2[9]);
      tmp = new tmp({ errorCode: constants.INVALID_PERMISSIONS }, "Unable to generate an invite for " + channel_id + ". Does this user have permissions?");
      throw tmp;
    });
  }
};
const _module2 = require(dependencyMap[18]);
const result = _module2.fileFinishedImporting("modules/rpc/server/commands/channels.tsx");

export default obj;

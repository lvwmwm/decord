// Module ID: 11490
// Function ID: 89533
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11490 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function completeStep(guildId, AVATAR) {
  let tmp = null != obj;
  if (tmp) {
    let flag = !obj.has(AVATAR);
    if (flag) {
      const _Set = Set;
      const set = new Set(obj.add(AVATAR));
      closure_11[guildId] = set;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const Steps = arg1(dependencyMap[8]).Steps;
let closure_11 = {};
let tmp2 = (PersistedStore) => {
  class GuildProgressStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildProgressStore);
      obj = closure_5(GuildProgressStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildProgressStore;
  callback2(GuildProgressStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const GuildProgressStore = arg0;
      this.waitFor(closure_7, closure_8, closure_9);
      let closure_11 = {};
      if (null != arg0) {
        const keys = GuildProgressStore(closure_1[9]).keys(arg0);
        const item = keys.forEach((arg0) => {
          let tmp2 = null != tmp;
          if (tmp2) {
            const _Symbol = Symbol;
            tmp2 = "function" === typeof tmp[Symbol.iterator];
          }
          if (tmp2) {
            const _Set = Set;
            const set = new Set(tmp);
            closure_11[arg0] = set;
          }
        });
        const obj = GuildProgressStore(closure_1[9]);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getProgress",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasProgress",
    value(arg0) {
      let tmp = null != obj;
      if (tmp) {
        tmp = !obj.has(constants.DISMISSED);
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getState",
    value() {
      return closure_11;
    }
  };
  return callback(GuildProgressStore, items);
}(importDefault(dependencyMap[10]).PersistedStore);
tmp2.displayName = "GuildProgressStore";
tmp2.persistKey = "GuildProgressStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const items = [];
    const importDefault = items;
    const keys = importDefault(dependencyMap[9]).keys(closure_11);
    const item = keys.forEach((arg0) => {
      if (obj.has(constants.COMPLETED)) {
        items.push(arg0);
      }
    });
    const item1 = items.forEach((arg0) => callback(arg0, constants.DISMISSED));
  },
  GUILD_PROGRESS_INITIALIZE: function handleInitialize(guildId) {
    guildId = guildId.guildId;
    if (null == closure_11[guildId]) {
      const _Set = Set;
      const set = new Set();
      closure_11[guildId] = set;
    }
    if (!obj.has(Steps.COMPLETED)) {
      closure_11[guildId].delete(Steps.DISMISSED);
      const obj2 = closure_11[guildId];
    }
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function handleCompletedSeen(guildId) {
    guildId = guildId.guildId;
    if (null == closure_11[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(closure_11[guildId].add(Steps.COMPLETED));
      closure_11[guildId] = set;
    }
  },
  GUILD_PROGRESS_DISMISS: function handleGuildProgressDismiss(guildId) {
    return completeStep(guildId.guildId, Steps.DISMISSED);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    guild = guild.getGuild(guild.id);
    if (null == guild) {
      return false;
    } else {
      let tmp3 = guild.ownerId === store.getId();
      if (tmp3) {
        tmp3 = null != closure_11[guild.id];
      }
      if (tmp3) {
        if (null != guild.icon) {
          closure_11[guild.id].add(Steps.AVATAR);
          const obj = closure_11[guild.id];
        }
        if (guild.member_count > 1) {
          closure_11[guild.id].add(Steps.INVITE);
          const obj2 = closure_11[guild.id];
        }
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel && null != channel.guild_id;
    if (tmp) {
      tmp = null != closure_11[channel.guild_id];
    }
    if (tmp) {
      tmp = completeStep(channel.guild_id, Steps.CHANNEL);
    }
    return tmp;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = null != value && null != value.guild_id;
        if (tmp2) {
          let tmp3 = closure_11;
          tmp2 = null != closure_11[value.guild_id];
        }
        if (tmp2) {
          let tmp4 = closure_15;
          let tmp5 = closure_10;
          tmp2 = false !== closure_15(value.guild_id, closure_10.CHANNEL);
        }
        if (tmp2) {
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleGuildSettings(guild) {
    guild = guild.guild;
    let tmp = null != guild;
    if (tmp) {
      let tmp2 = null != guild.id;
      if (tmp2) {
        tmp2 = null != closure_11[guild.id];
      }
      if (tmp2) {
        tmp2 = null != guild.icon;
      }
      if (tmp2) {
        tmp2 = completeStep(guild.id, Steps.AVATAR);
      }
      tmp = tmp2;
    }
    return tmp;
  },
  MESSAGE_CREATE: function handleMessage(channelId) {
    const channel = channel.getChannel(channelId.channelId);
    const author = channelId.message.author;
    let id;
    if (null != author) {
      id = author.id;
    }
    let tmp3 = id === store.getId() && null != channel;
    if (tmp3) {
      tmp3 = null != closure_11[channel.guild_id];
    }
    if (tmp3) {
      tmp3 = completeStep(channel.guild_id, Steps.MESSAGE);
    }
    return tmp3;
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMember(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null != closure_11[guildId];
    if (tmp2) {
      tmp2 = tmp > 1;
    }
    if (tmp2) {
      tmp2 = completeStep(guildId, Steps.INVITE);
    }
    return tmp2;
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_progress/GuildProgressStore.tsx");

export default tmp2;

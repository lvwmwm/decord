// Module ID: 11508
// Function ID: 89632
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 1838, 11502, 21, 566, 686, 2]

// Module 11508 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import { Steps } from "Steps";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
function completeStep(guild_id, CHANNEL) {
  let tmp = null != obj;
  if (tmp) {
    let flag = !obj.has(CHANNEL);
    if (flag) {
      const _Set = Set;
      const set = new Set(obj.add(CHANNEL));
      dependencyMap[guild_id] = set;
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
let closure_11 = {};
let tmp2 = ((PersistedStore) => {
  class GuildProgressStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildProgressStore);
      obj = outer1_5(GuildProgressStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildProgressStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let closure_0 = arg0;
      this.waitFor(outer1_7, outer1_8, outer1_9);
      const outer1_11 = {};
      if (null != arg0) {
        const keys = GuildProgressStore(outer1_1[9]).keys(arg0);
        const item = keys.forEach((arg0) => {
          let tmp2 = null != tmp;
          if (tmp2) {
            const _Symbol = Symbol;
            tmp2 = "function" === typeof tmp[Symbol.iterator];
          }
          if (tmp2) {
            const _Set = Set;
            const set = new Set(tmp);
            outer2_11[arg0] = set;
          }
        });
        const obj = GuildProgressStore(outer1_1[9]);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getProgress",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasProgress",
    value(arg0) {
      let tmp = null != obj;
      if (tmp) {
        tmp = !obj.has(outer1_10.DISMISSED);
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getState",
    value() {
      return outer1_11;
    }
  };
  return callback(GuildProgressStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GuildProgressStore";
tmp2.persistKey = "GuildProgressStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    const items = [];
    const keys = items(21).keys(closure_11);
    const item = keys.forEach((arg0) => {
      if (obj.has(outer1_10.COMPLETED)) {
        items.push(arg0);
      }
    });
    const item1 = items.forEach((arg0) => outer1_15(arg0, outer1_10.DISMISSED));
  },
  GUILD_PROGRESS_INITIALIZE: function handleInitialize(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap[guildId] = set;
    }
    if (!obj.has(Steps.COMPLETED)) {
      dependencyMap[guildId].delete(Steps.DISMISSED);
      const obj2 = dependencyMap[guildId];
    }
  },
  GUILD_PROGRESS_COMPLETED_SEEN: function handleCompletedSeen(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(dependencyMap[guildId].add(Steps.COMPLETED));
      dependencyMap[guildId] = set;
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
        tmp3 = null != dependencyMap[guild.id];
      }
      if (tmp3) {
        if (null != guild.icon) {
          dependencyMap[guild.id].add(Steps.AVATAR);
          const obj = dependencyMap[guild.id];
        }
        if (guild.member_count > 1) {
          dependencyMap[guild.id].add(Steps.INVITE);
          const obj2 = dependencyMap[guild.id];
        }
      }
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel && null != channel.guild_id;
    if (tmp) {
      tmp = null != dependencyMap[channel.guild_id];
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
          let tmp3 = dependencyMap;
          tmp2 = null != dependencyMap[value.guild_id];
        }
        if (tmp2) {
          let tmp4 = completeStep;
          let tmp5 = Steps;
          tmp2 = false !== completeStep(value.guild_id, Steps.CHANNEL);
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
        tmp2 = null != dependencyMap[guild.id];
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
    channel = channel.getChannel(channelId.channelId);
    const author = channelId.message.author;
    let id;
    if (null != author) {
      id = author.id;
    }
    let tmp3 = id === store.getId() && null != channel;
    if (tmp3) {
      tmp3 = null != dependencyMap[channel.guild_id];
    }
    if (tmp3) {
      tmp3 = completeStep(channel.guild_id, Steps.MESSAGE);
    }
    return tmp3;
  },
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMember(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null != dependencyMap[guildId];
    if (tmp2) {
      tmp2 = tmp > 1;
    }
    if (tmp2) {
      tmp2 = completeStep(guildId, Steps.INVITE);
    }
    return tmp2;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_progress/GuildProgressStore.tsx");

export default tmp2;

// Module ID: 4203
// Function ID: 36216
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 1857, 1194, 1348, 1917, 1849, 4146, 653, 3969, 3754, 22, 21, 566, 686, 2]

// Module 4203 (_isNativeReflectConstruct)
import DISCORD_EPOCH from "DISCORD_EPOCH";
import dispatcher from "dispatcher";
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { ME } from "ME";

const require = arg1;
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
function getVoiceStatesForGuild(guildId) {
  let tmp = dependencyMap[guildId];
  if (null == tmp) {
    const prototype = ctor2.prototype;
    const tmp6 = new ctor2(guildId);
    dependencyMap[guildId] = tmp6;
    tmp = tmp6;
  }
  return tmp;
}
function getMember(guildId, id) {
  return member.getMember(guildId, id.id);
}
function makeMemberAndComparator(voiceState, member, arg2) {
  const obj = { member };
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  if (null == nick) {
    nick = importDefault(3969).getName(arg2);
    const obj2 = importDefault(3969);
  }
  obj.comparator = getComparator(voiceState, nick);
  return obj;
}
function getComparator(selfStream, str) {
  str = "\u0001";
  if (selfStream.selfStream) {
    str = "\0";
  }
  return "" + str + str.toLowerCase() + "\0" + selfStream.userId;
}
function makeSortedVoiceState(voiceState, guildId, id, connectedOn) {
  user = user.getUser(id);
  let tmp3 = user;
  if (null == user) {
    let obj = { id, username: "...", discriminator: id.slice(-5, -1) };
    const prototype = ctor.prototype;
    tmp3 = new ctor(obj);
  }
  const tmp8 = makeMemberAndComparator(voiceState, getMember(guildId, tmp3), tmp3);
  const member = tmp8.member;
  obj = { voiceState, user: tmp3, member, comparator: tmp8.comparator };
  let nick;
  if (null != member) {
    nick = member.nick;
  }
  obj.nick = nick;
  connectedOn = undefined;
  if (null != connectedOn) {
    connectedOn = connectedOn.connectedOn;
  }
  if (null == connectedOn) {
    const _Date = Date;
    connectedOn = Date.now();
  }
  obj.connectedOn = connectedOn;
  if (tmp2) {
    obj._isPlaceholder = true;
  }
  return obj;
}
function handleUpdateUsers() {
  return importDefault(22).reduce(closure_16, (arg0, updateUsers) => updateUsers.updateUsers() || arg0, false);
}
function init() {
  let closure_16 = {};
  allVoiceStates = allVoiceStates.getAllVoiceStates();
  let keys = importDefault(21).keys(allVoiceStates);
  let item = keys.forEach((arg0) => {
    const allVoiceStates = arg0;
    const keys = Object.keys(allVoiceStates[arg0]);
    const item = keys.forEach((guildId) => {
      outer2_21(null != closure_0 ? closure_0 : outer2_14).updateVoiceState(guildId);
    });
  });
}
const frozen = Object.freeze([]);
let closure_16 = {};
let closure_17 = (() => {
  class SortedVoiceStates {
    constructor(arg0) {
      tmp = outer1_6(this, SortedVoiceStates);
      set = new Set();
      this._pending = set;
      secondaryIndexMap = new SortedVoiceStates(outer1_2[13]).SecondaryIndexMap((voiceState) => {
        const channelId = voiceState.voiceState.channelId;
        if (null != channelId) {
          const items = [channelId];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }, (comparator) => comparator.comparator);
      this._voiceStates = secondaryIndexMap;
      this.guildId = arg0;
      return;
    }
  }
  let obj = {
    key: "updateVoiceState",
    value(arg0) {
      const self = this;
      if (null != this._pending) {
        const _pending = self._pending;
        _pending.add(arg0);
        return false;
      } else {
        const voiceState = outer1_13.getVoiceState(self.guildId, arg0);
        const _voiceStates4 = self._voiceStates;
        const value = _voiceStates4.get(arg0);
        const user = outer1_12.getUser(arg0);
        if (null != voiceState) {
          if (null != user) {
            if (null == value) {
              const _voiceStates3 = self._voiceStates;
              const result = _voiceStates3.set(arg0, outer1_25(voiceState, self.guildId, arg0));
              return true;
            } else if (value.voiceState !== voiceState) {
              const tmp3 = outer1_22(self.guildId, user);
              let nick;
              if (null != tmp3) {
                nick = tmp3.nick;
              }
              if (null == nick) {
                let obj = outer1_1(outer1_2[12]);
                nick = obj.getName(user);
              }
              const _voiceStates2 = self._voiceStates;
              obj = {};
              const merged = Object.assign(value);
              obj["member"] = tmp3;
              obj["comparator"] = outer1_24(voiceState, nick);
              obj["nick"] = nick;
              obj["voiceState"] = voiceState;
              const result1 = _voiceStates2.set(arg0, obj);
              return true;
            }
          }
          return false;
        }
        if (null != value) {
          const _voiceStates = self._voiceStates;
          _voiceStates.delete(arg0);
          return true;
        }
      }
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "updateMember",
    value(arg0) {
      const self = this;
      if (null != this._pending) {
        const _pending = self._pending;
        _pending.add(arg0);
        return false;
      } else {
        const _voiceStates2 = self._voiceStates;
        const value = _voiceStates2.get(arg0);
        const user = outer1_12.getUser(arg0);
        if (null != value) {
          if (null != user) {
            const tmp2 = outer1_22(self.guildId, user);
            let nick;
            if (null != tmp2) {
              nick = tmp2.nick;
            }
            const member = value.member;
            let nick1;
            if (null != member) {
              nick1 = member.nick;
            }
            if (nick === nick1) {
              let avatar;
              if (null != tmp2) {
                avatar = tmp2.avatar;
              }
              const member2 = value.member;
              let avatar1;
              if (null != member2) {
                avatar1 = member2.avatar;
              }
            }
            const _voiceStates = self._voiceStates;
            const obj = {};
            const merged = Object.assign(value);
            obj["member"] = tmp2;
            obj["comparator"] = outer1_23(value.voiceState, tmp2, user).comparator;
            let nick2;
            if (null != tmp2) {
              nick2 = tmp2.nick;
            }
            obj["nick"] = nick2;
            const result = _voiceStates.set(arg0, obj);
            return true;
          }
        }
        return false;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "updateUsers",
    value() {
      const self = this;
      let reduced = null == this._pending;
      if (reduced) {
        let _voiceStates = this._voiceStates;
        const values = _voiceStates.values();
        reduced = values.reduce((arg0, user) => {
          user = outer2_12.getUser(user.user.id);
          let flag = arg0;
          if (null != user) {
            flag = arg0;
            if (user.user !== user) {
              const _voiceStates = self._voiceStates;
              const result = _voiceStates.set(user.id, outer2_25(user.voiceState, self.guildId, user.id, user));
              flag = true;
            }
          }
          return flag;
        }, false);
      }
      return reduced;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserIds",
    value() {
      this.processPending();
      const _voiceStates = this._voiceStates;
      return _voiceStates.keys();
    }
  };
  items[4] = {
    key: "getVoiceStates",
    value() {
      this.processPending();
      const _voiceStates = this._voiceStates;
      return _voiceStates.indexes();
    }
  };
  items[5] = {
    key: "getVoiceStatesForChannel",
    value(arg0) {
      this.processPending();
      const _voiceStates = this._voiceStates;
      let values = _voiceStates.values(arg0);
      if (0 === values.length) {
        values = outer1_15;
      }
      return values;
    }
  };
  items[6] = {
    key: "countVoiceStatesForChannel",
    value(arg0) {
      this.processPending();
      const _voiceStates = this._voiceStates;
      return _voiceStates.size(arg0);
    }
  };
  items[7] = {
    key: "getVersion",
    value() {
      this.processPending();
      return this._voiceStates.version;
    }
  };
  items[8] = {
    key: "processPending",
    value() {
      let self = this;
      self = this;
      if (null != this._pending) {
        const _pending = self._pending;
        self._pending = undefined;
        const item = _pending.forEach((guildId) => self.updateVoiceState(guildId));
      }
    }
  };
  return callback2(SortedVoiceStates, items);
})();
let tmp3 = ((Store) => {
  class SortedVoiceStateStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, SortedVoiceStateStore);
      obj = outer1_4(SortedVoiceStateStore);
      tmp2 = outer1_3;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(SortedVoiceStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      outer1_27();
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12, outer1_13);
      const items = [outer1_12];
      this.syncWith(items, outer1_26);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getVoiceStates",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_14;
      }
      return outer1_21(tmp).getVoiceStates();
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllVoiceStates",
    value() {
      return outer1_16;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVoiceStatesForChannel",
    value(getGuildId) {
      let guildId = getGuildId.getGuildId();
      if (null == guildId) {
        guildId = outer1_14;
      }
      return outer1_21(guildId).getVoiceStatesForChannel(getGuildId.id);
    }
  };
  items[4] = {
    key: "getVoiceStatesForChannelAlt",
    value(arg0, arg1) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = outer1_14;
      }
      return outer1_21(tmp).getVoiceStatesForChannel(arg0);
    }
  };
  items[5] = {
    key: "countVoiceStatesForChannel",
    value(channelId) {
      const channel = outer1_10.getChannel(channelId);
      if (null == channel) {
        return 0;
      } else {
        let guildId = channel.getGuildId();
        if (null == guildId) {
          guildId = outer1_14;
        }
        return outer1_21(guildId).countVoiceStatesForChannel(channelId);
      }
    }
  };
  items[6] = {
    key: "getVoiceStateVersion",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_14;
      }
      return outer1_21(tmp).getVersion();
    }
  };
  return callback2(SortedVoiceStateStore, items);
})(require("initialize").Store);
tmp3.displayName = "SortedVoiceStateStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    id = id.getId();
    let updateVoiceStateResult = null != id;
    if (updateVoiceStateResult) {
      if (null == guildId) {
        guildId = ME;
      }
      updateVoiceStateResult = getVoiceStatesForGuild(guildId).updateVoiceState(id);
      const tmp3 = getVoiceStatesForGuild;
      const tmp3Result = getVoiceStatesForGuild(guildId);
    }
    return updateVoiceStateResult;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, guildId) => {
      guildId = guildId.guildId;
      if (null == guildId) {
        guildId = outer1_14;
      }
      const tmp = outer1_21;
      const tmpResult = outer1_21(guildId);
      return outer1_21(guildId).updateVoiceState(guildId.userId) || arg0;
    }, false);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    return getVoiceStatesForGuild(guildId.guildId).updateMember(guildId.user.id);
  },
  GUILD_CREATE: function handleGuildCreate(arg0) {
    delete tmp2[tmp];
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp2[tmp];
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(voiceStates) {
    let iter3;
    let iter5;
    let userIds;
    if (null != dependencyMap[voiceStates.guildId]) {
      userIds = obj.getUserIds();
    }
    voiceStates = voiceStates.voiceStates;
    let mapped;
    if (null != voiceStates) {
      mapped = voiceStates.map((userId) => userId.userId);
    }
    const set = new Set(userIds);
    const set1 = new Set(mapped);
    const items = [...set1];
    const set2 = new Set(voiceStates.removedVoiceStateUsers);
    const tmp6 = _createForOfIteratorHelperLoose(new Set(items));
    const iter = tmp6();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp7 = getVoiceStatesForGuild;
        let obj3 = getVoiceStatesForGuild(voiceStates.guildId);
        let tmp8 = obj3.updateVoiceState(iter2.value) || flag;
        iter3 = tmp6();
        flag = tmp8;
        iter2 = iter3;
        flag2 = tmp8;
      } while (!iter3.done);
    }
    const tmp9 = _createForOfIteratorHelperLoose(set);
    let iter4 = tmp9();
    let tmp10 = flag2;
    let tmp11 = flag2;
    if (!iter4.done) {
      do {
        let value = iter4.value;
        let tmp12 = tmp10;
        if (!set2.has(value)) {
          let tmp13 = getVoiceStatesForGuild;
          let obj4 = getVoiceStatesForGuild(voiceStates.guildId);
          let tmp14 = obj4.updateMember(value) || tmp10;
          tmp12 = tmp14;
        }
        iter5 = tmp9();
        tmp10 = tmp12;
        iter4 = iter5;
        tmp11 = tmp12;
      } while (!iter5.done);
    }
    return tmp11;
  }
});
let result = require("_inherits").fileFinishedImporting("stores/views/SortedVoiceStateStore.tsx");

export default tmp3;
export const NO_VOICE_STATES = frozen;
export { makeMemberAndComparator };
export { getComparator };
export { makeSortedVoiceState };

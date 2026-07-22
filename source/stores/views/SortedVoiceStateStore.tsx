// Module ID: 4199
// Function ID: 36183
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4199 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function getVoiceStatesForGuild(guildId) {
  let tmp = closure_16[guildId];
  if (null == tmp) {
    const prototype = ctor2.prototype;
    const tmp6 = new ctor2(guildId);
    closure_16[guildId] = tmp6;
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
    nick = importDefault(dependencyMap[12]).getName(arg2);
    const obj2 = importDefault(dependencyMap[12]);
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
  const user = user.getUser(id);
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
  return importDefault(dependencyMap[14]).reduce(closure_16, (arg0, updateUsers) => updateUsers.updateUsers() || arg0, false);
}
function init() {
  let closure_16 = {};
  const allVoiceStates = allVoiceStates.getAllVoiceStates();
  const arg1 = allVoiceStates;
  const keys = importDefault(dependencyMap[15]).keys(allVoiceStates);
  const item = keys.forEach((arg0) => {
    const allVoiceStates = arg0;
    const keys = Object.keys(allVoiceStates[arg0]);
    const item = keys.forEach((guildId) => {
      callback(null != guildId ? guildId : closure_14).updateVoiceState(guildId);
    });
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const ME = arg1(dependencyMap[11]).ME;
const frozen = Object.freeze([]);
let closure_16 = {};
let closure_17 = () => {
  class SortedVoiceStates {
    constructor(arg0) {
      tmp = closure_6(this, SortedVoiceStates);
      set = new Set();
      this._pending = set;
      secondaryIndexMap = new SortedVoiceStates(closure_2[13]).SecondaryIndexMap((voiceState) => {
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
  const arg1 = SortedVoiceStates;
  let obj = {
    key: "updateVoiceState",
    value(arg0) {
      const self = this;
      if (null != this._pending) {
        const _pending = self._pending;
        _pending.add(arg0);
        return false;
      } else {
        const voiceState = voiceState.getVoiceState(self.guildId, arg0);
        const _voiceStates4 = self._voiceStates;
        const value = _voiceStates4.get(arg0);
        const user = authStore.getUser(arg0);
        if (null != voiceState) {
          if (null != user) {
            if (null == value) {
              const _voiceStates3 = self._voiceStates;
              const result = _voiceStates3.set(arg0, callback6(voiceState, self.guildId, arg0));
              return true;
            } else if (value.voiceState !== voiceState) {
              const tmp3 = callback3(self.guildId, user);
              let nick;
              if (null != tmp3) {
                nick = tmp3.nick;
              }
              if (null == nick) {
                let obj = callback(closure_2[12]);
                nick = obj.getName(user);
              }
              const _voiceStates2 = self._voiceStates;
              obj = {};
              const merged = Object.assign(value);
              obj["member"] = tmp3;
              obj["comparator"] = callback5(voiceState, nick);
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
  const items = [obj, , , , , , , , ];
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
        const user = authStore.getUser(arg0);
        if (null != value) {
          if (null != user) {
            const tmp2 = callback3(self.guildId, user);
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
            obj["comparator"] = callback4(value.voiceState, tmp2, user).comparator;
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
      const SortedVoiceStates = this;
      let reduced = null == this._pending;
      if (reduced) {
        const _voiceStates = this._voiceStates;
        const values = _voiceStates.values();
        reduced = values.reduce((arg0, user) => {
          user = user.getUser(user.user.id);
          let flag = arg0;
          if (null != user) {
            flag = arg0;
            if (user.user !== user) {
              const _voiceStates = self._voiceStates;
              const result = _voiceStates.set(user.id, callback(user.voiceState, self.guildId, user.id, user));
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
        values = closure_15;
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
      const self = this;
      const SortedVoiceStates = this;
      if (null != this._pending) {
        const _pending = self._pending;
        self._pending = undefined;
        const item = _pending.forEach((guildId) => self.updateVoiceState(guildId));
      }
    }
  };
  return callback2(SortedVoiceStates, items);
}();
let tmp3 = (Store) => {
  class SortedVoiceStateStore {
    constructor() {
      self = this;
      tmp = closure_6(this, SortedVoiceStateStore);
      obj = closure_4(SortedVoiceStateStore);
      tmp2 = closure_3;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SortedVoiceStateStore;
  callback(SortedVoiceStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      callback4();
      this.waitFor(closure_9, closure_10, closure_11, closure_12, closure_13);
      const items = [closure_12];
      this.syncWith(items, closure_26);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getVoiceStates",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_14;
      }
      return closure_21(tmp).getVoiceStates();
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllVoiceStates",
    value() {
      return closure_16;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVoiceStatesForChannel",
    value(getGuildId) {
      let guildId = getGuildId.getGuildId();
      if (null == guildId) {
        guildId = closure_14;
      }
      return closure_21(guildId).getVoiceStatesForChannel(getGuildId.id);
    }
  };
  items[4] = {
    key: "getVoiceStatesForChannelAlt",
    value(arg0, arg1) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = closure_14;
      }
      return closure_21(tmp).getVoiceStatesForChannel(arg0);
    }
  };
  items[5] = {
    key: "countVoiceStatesForChannel",
    value(channelId) {
      const channel = channel.getChannel(channelId);
      if (null == channel) {
        return 0;
      } else {
        let guildId = channel.getGuildId();
        if (null == guildId) {
          guildId = closure_14;
        }
        return closure_21(guildId).countVoiceStatesForChannel(channelId);
      }
    }
  };
  items[6] = {
    key: "getVoiceStateVersion",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_14;
      }
      return closure_21(tmp).getVersion();
    }
  };
  return callback2(SortedVoiceStateStore, items);
}(importDefault(dependencyMap[16]).Store);
tmp3.displayName = "SortedVoiceStateStore";
tmp3 = new tmp3(importDefault(dependencyMap[17]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize() {
    init();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    const id = id.getId();
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
        guildId = closure_14;
      }
      const tmp = closure_21;
      const tmpResult = closure_21(guildId);
      return closure_21(guildId).updateVoiceState(guildId.userId) || arg0;
    }, false);
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    return getVoiceStatesForGuild(guildId.guildId).updateMember(guildId.user.id);
  },
  GUILD_CREATE: function handleGuildCreate(arg0) {
    delete r1[r0];
  },
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete r1[r0];
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(voiceStates) {
    let iter3;
    let iter5;
    let userIds;
    if (null != closure_16[voiceStates.guildId]) {
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
        let tmp7 = closure_21;
        let obj3 = closure_21(voiceStates.guildId);
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
          let tmp13 = closure_21;
          let obj4 = closure_21(voiceStates.guildId);
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
const result = arg1(dependencyMap[18]).fileFinishedImporting("stores/views/SortedVoiceStateStore.tsx");

export default tmp3;
export const NO_VOICE_STATES = frozen;
export { makeMemberAndComparator };
export { getComparator };
export { makeSortedVoiceState };

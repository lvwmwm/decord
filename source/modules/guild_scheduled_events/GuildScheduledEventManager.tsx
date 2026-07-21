// Module ID: 8350
// Function ID: 66479
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 8350 (_createForOfIteratorHelperLoose)
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getGuildEventsForCurrentUser2() {
  return _getGuildEventsForCurrentUser(...arguments);
}
function _getGuildEventsForCurrentUser() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _getGuildEventsForCurrentUser = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
const set = new Set();
const set1 = new Set();
let tmp4 = (arg0) => {
  class GuildScheduledEventManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, GuildScheduledEventManager);
      items1 = [...items];
      obj = closure_5(GuildScheduledEventManager);
      tmp2 = closure_4;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            },
        GUILD_DELETE(arg0) {
              return tmp2Result.handleGuildDelete(arg0);
            },
        GUILD_UNAVAILABLE(guildId) {
              return tmp2Result.handleGuildUnavailable(guildId);
            },
        INVITE_RESOLVE_SUCCESS(arg0) {
              return tmp2Result.handleInviteResolveSuccess(arg0);
            },
        CHANNEL_SELECT(arg0) {
              return tmp2Result.handleChannelSelect(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const callback = GuildScheduledEventManager;
  callback2(GuildScheduledEventManager, arg0);
  let obj = { key: "getGuildEventUserCounts" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_2 = callback3("getGuildEventUserCounts");
  obj.value = function getGuildEventUserCounts(guild_id, id, items1) {
    return callback3(...arguments);
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getGuildEventUsers",
    value(arg0, arg1, arg2) {
      return callback(closure_1[8]).fetchUsersForGuildEvent(arg0, arg1, arg2);
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildEventsForCurrentUser",
    value(arg0) {
      return callback6(arg0);
    }
  };
  items[2] = obj;
  const obj1 = { key: "handleConnectionOpen" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback3("handleConnectionOpen");
  obj1.value = function handleConnectionOpen() {
    return callback2(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "handleGuildUnavailable",
    value(guildId) {
      guildId = guildId.guildId;
      set.delete(guildId);
      set2.delete(guildId);
      delete r0[r1];
    }
  };
  items[5] = {
    key: "handleGuildDelete",
    value(guild) {
      const id = guild.guild.id;
      set.delete(id);
      set2.delete(id);
      delete r0[r1];
    }
  };
  items[6] = {
    key: "handleInviteResolveSuccess",
    value(invite) {
      invite = invite.invite;
      const guild = invite.guild;
      let id;
      if (null != guild) {
        id = guild.id;
      }
      if (tmp2) {
        callback6(id);
      }
    }
  };
  const obj5 = { key: "handleChannelSelect" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback3(tmp);
  obj5.value = function handleChannelSelect() {
    return callback(...arguments);
  };
  items[7] = obj5;
  return callback(GuildScheduledEventManager, items);
}(importDefault(dependencyMap[9]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventManager.tsx");

export default tmp4;

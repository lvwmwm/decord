// Module ID: 7097
// Function ID: 56997
// Name: _createForOfIteratorHelperLoose
// Dependencies: [15, 17, 18, 6, 7, 1352, 1857, 1348, 1917, 3767, 1849, 653, 3969, 1360, 491, 22, 21, 7098, 1327, 1184, 5078, 2]

// Module 7097 (_createForOfIteratorHelperLoose)
import apply from "apply";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { isPrivate } from "_callSuper";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { UserFlags } from "ME";
import tmp3 from "AutomaticLifecycleManager";

const require = arg1;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getTransformedUser(author) {
  if (null != author) {
    if (!closure_13.isBlockedOrIgnored(author.id)) {
      const obj = { id: author.id };
      if ("0" !== author.discriminator) {
        const _HermesInternal = HermesInternal;
        let username = "" + author.username + "#" + author.discriminator;
      } else {
        username = author.username;
      }
      obj.username = username;
      obj.nicknames = {};
      if (null != obj2.getGlobalName(author)) {
        obj.globalName = author.globalName;
      }
      if (author.bot) {
        obj.isBot = true;
      }
      if (author instanceof closure_10) {
        obj.isProvisional = author.isProvisional;
      } else if ("flags" in author) {
        const flags = author.flags;
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        obj.isProvisional = importAll(1360).hasFlag(num3, UserFlags.PROVISIONAL_ACCOUNT);
        const obj3 = importAll(1360);
      } else {
        obj.isProvisional = false;
      }
      if (closure_13.isFriend(author.id)) {
        obj.isFriend = true;
        obj.friendNickname = closure_13.getNickname(author.id);
      }
      if (author instanceof closure_10) {
        obj.isStaff = author.isStaff();
      } else if ("flags" in author) {
        const flags2 = author.flags;
        let num5 = 0;
        if (null != flags2) {
          num5 = flags2;
        }
        obj.isStaff = importAll(1360).hasFlag(num5, UserFlags.STAFF);
        const obj4 = importAll(1360);
      } else {
        obj.isStaff = false;
      }
      return obj;
    }
  }
  return null;
}
function setNick(nicknames, nicknameContextId) {
  if (null != nicknames) {
    let tmp = null;
    if (null != arg2) {
      tmp = null;
      if ("" !== arg2) {
        tmp = arg2;
      }
    }
    nicknames.nicknames[nicknameContextId] = tmp;
  }
}
function getDMUpdates(type) {
  let closure_0 = type;
  const items = [];
  if (null != type) {
    if (isPrivate(type.type)) {
      let recipients = type.recipients;
      if (undefined === recipients) {
        recipients = [];
      }
      const item = recipients.forEach((arg0) => {
        const tmp = outer1_21(outer1_14.getUser(arg0));
        if (null != type) {
          outer1_22(tmp, type.id);
        }
        items.push(tmp);
      });
      return items;
    }
  }
  return items;
}
function updateMembersList(arr) {
  let closure_0 = arg1;
  const items = [];
  const item = arr.forEach((user) => {
    const tmp = outer1_21(user.user);
    if (null != tmp) {
      outer1_22(tmp, closure_0, user.nick);
      items.push(tmp);
    }
  });
  return items;
}
function getUsersFromMessage(arg0) {
  let message;
  let nicknameContextId;
  ({ message, nicknameContextId } = arg0);
  nicknameContextId = undefined;
  let items;
  channel = channel.getChannel(message.channel_id);
  if (null != nicknameContextId) {
    items = [];
    if (null != message.author) {
      const tmp6 = getTransformedUser(message.author);
      if (null != tmp6) {
        items.push(tmp6);
        if (null != nicknameContextId) {
          setNick(tmp6, nicknameContextId);
        }
      }
    }
    const mentions = message.mentions;
    if (null != mentions) {
      const item = mentions.forEach((arg0) => {
        const tmp = outer1_21(arg0);
        if (null != tmp) {
          items.push(tmp);
          if (null != nicknameContextId) {
            outer1_22(tmp, nicknameContextId);
          }
        }
      });
    }
    return items;
  } else {
    let isPrivateResult;
    if (null != channel) {
      isPrivateResult = channel.isPrivate();
    }
    if (true === isPrivateResult) {
      let id;
      if (null != channel) {
        id = channel.id;
      }
      let guildId = id;
    } else if (null != channel) {
      guildId = channel.getGuildId();
    }
  }
}
let closure_16 = { UPDATE_USERS: "UPDATE_USERS", USER_RESULTS: "USER_RESULTS", QUERY_SET: "QUERY_SET", QUERY_CLEAR: "QUERY_CLEAR", REQUEST_DEBUG_STATE: "REQUEST_DEBUG_STATE", DEBUG_STATE: "DEBUG_STATE" };
let tmp2 = (() => {
  class UserSearchContext {
    constructor(arg0, arg1) {
      num = arg2;
      self = this;
      self = this;
      if (arg2 === undefined) {
        num = 10;
      }
      tmp = outer1_7(self, self);
      self.handleMessages = (data) => {
        data = data.data;
        let tmp = null != data;
        if (tmp) {
          tmp = data.type === outer2_16.USER_RESULTS;
        }
        if (tmp) {
          tmp = data.uuid === self._uuid;
        }
        if (tmp) {
          if (false !== self._currentQuery) {
            self._callback(data.payload);
          }
          if (null != self._currentQuery) {
            self._currentQuery = null;
          }
          self._setNextQuery();
        }
      };
      self._worker = arg0;
      obj = UserSearchContext(outer1_3[14]);
      self._uuid = obj.v4();
      self._callback = arg1;
      self._limit = num;
      self._currentQuery = null;
      self._nextQuery = null;
      self._subscribed = false;
      subscription = self.subscribe();
      return;
    }
  }
  let obj = {
    key: "setLimit",
    value(_limit) {
      this._limit = _limit;
      if (null != this._nextQuery) {
        this._nextQuery.limit = _limit;
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "subscribe",
    value() {
      const self = this;
      if (!tmp) {
        const _worker = self._worker;
        const listener = _worker.addEventListener("message", self.handleMessages, false);
        self._subscribed = true;
        self._setNextQuery();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "unsubscribe",
    value() {
      const self = this;
      if (tmp) {
        const _worker = self._worker;
        const removed = _worker.removeEventListener("message", self.handleMessages, false);
        self._subscribed = false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "destroy",
    value() {
      this.clearQuery();
      this.unsubscribe();
    }
  };
  items[4] = {
    key: "clearQuery",
    value() {
      const self = this;
      this._currentQuery = false;
      this._nextQuery = null;
      if (tmp) {
        const _worker = self._worker;
        const obj = { uuid: self._uuid, type: outer1_16.QUERY_CLEAR };
        _worker.postMessage(obj);
      }
    }
  };
  items[5] = {
    key: "setQuery",
    value(query) {
      let boosterFallback;
      let boosters;
      const self = this;
      ({ boosters, boosterFallback } = query);
      const obj = { query: query.query, filters: query.filters, blacklist: query.blacklist };
      if (null == boosters) {
        boosters = {};
      }
      obj.boosters = boosters;
      let num = 1;
      if (null != boosterFallback) {
        num = boosterFallback;
      }
      obj.boosterFallback = num;
      obj.limit = self._limit;
      self._nextQuery = obj;
      self._setNextQuery();
    }
  };
  items[6] = {
    key: "_setNextQuery",
    value() {
      const self = this;
      let tmp = null != this._currentQuery;
      if (tmp) {
        tmp = false !== self._currentQuery;
      }
      if (!tmp) {
        tmp = null == self._nextQuery;
      }
      if (!tmp) {
        if (null != self._worker) {
          if (self._subscribed) {
            self._currentQuery = self._nextQuery;
            self._nextQuery = null;
            const _worker = self._worker;
            const obj = { uuid: self._uuid, type: outer1_16.QUERY_SET, payload: self._currentQuery };
            _worker.postMessage(obj);
          }
        }
        if (!self._subscribed) {
          const subscription = self.subscribe();
        }
      }
    }
  };
  return callback2(UserSearchContext, items);
})();
let closure_17 = tmp2;
tmp3 = new tmp3();
let result = require("_inherits").fileFinishedImporting("modules/autocompleter/UserSearchManager.tsx");

export default tmp3;
export const UserSearchContext = tmp2;

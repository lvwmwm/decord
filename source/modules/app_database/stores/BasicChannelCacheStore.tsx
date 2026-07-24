// Module ID: 1349
// Function ID: 16048
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 1350, 3, 686, 566, 2]

// Module 1349 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import timestamp from "timestamp";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_possibleConstructorReturn";

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
importDefaultResult = new importDefaultResult("BasicChannelCacheStore");
let tmp4 = ((Store) => {
  class BasicChannelCacheStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, apply);
      items = [, ];
      items[0] = BasicChannelCacheStore(outer1_1[8]);
      items[1] = {
        CACHE_LOADED_LAZY_NO_CACHE(arg0) {
              return tmp2Result.handleCacheLoadedLazyNoCache(arg0);
            },
        CACHE_LOADED_LAZY(arg0) {
              return tmp2Result.handleCacheLoadedLazy(arg0);
            },
        CONNECTION_OPEN(arg0) {
              return tmp2Result.handleConnectionOpen(arg0);
            },
        LOGOUT(arg0) {
              return tmp2Result.handleLogout(arg0);
            }
      };
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      map = new Map();
      tmp2Result.channels = map;
      map1 = new Map();
      tmp2Result.guilds = map1;
      return tmp2Result;
    }
  }
  callback2(BasicChannelCacheStore, Store);
  let obj = {
    key: "hasChannel",
    value(arg0) {
      const channels = this.channels;
      return channels.has(arg0);
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "hasGuild",
    value(arg0) {
      const guilds = this.guilds;
      return guilds.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getBasicChannel",
    value(arg0) {
      const channels = this.channels;
      const value = channels.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildBasicChannels",
    value(arg0) {
      const guilds = this.guilds;
      const value = guilds.get(arg0);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "invalidate",
    value(arg0) {
      this.delete(arg0);
    }
  };
  items[5] = {
    key: "restored",
    value(arg0) {
      this.delete(arg0);
    }
  };
  items[6] = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  items[7] = {
    key: "handleCacheLoadedLazy",
    value(basicGuildChannels) {
      let iter4;
      const self = this;
      this.guilds = new Map();
      const map = new Map();
      this.channels = new Map();
      const tmp3 = outer1_9(basicGuildChannels.basicGuildChannels);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let tmp4 = outer1_2;
          let tmp5 = outer1_2(iter.value, 2);
          let arr = tmp5[1];
          let guilds = self.guilds;
          let _Object = Object;
          let result = guilds.set(tmp5[0], Object.fromEntries(arr.map((id) => {
            const items = [id.id, id];
            return items;
          })));
          let tmp7 = outer1_9;
          let tmp8 = outer1_9(arr);
          let iter2 = tmp8();
          if (!iter2.done) {
            do {
              let value = iter2.value;
              let channels = self.channels;
              let result1 = channels.set(value.id, value);
              let iter3 = tmp8();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          iter4 = tmp3();
          iter = iter4;
        } while (!iter4.done);
      }
    }
  };
  items[8] = {
    key: "handleCacheLoadedLazyNoCache",
    value() {
      const guilds = this.guilds;
      guilds.clear();
      const channels = this.channels;
      channels.clear();
    }
  };
  items[9] = {
    key: "handleConnectionOpen",
    value() {
      let iter2;
      const self = this;
      const guilds = this.guilds;
      const tmp = outer1_9(guilds.keys());
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          if (!allGuildIdsResult.has(value)) {
            let deleteResult = self.delete(value);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[10] = {
    key: "handleLogout",
    value() {
      const guilds = this.guilds;
      guilds.clear();
      const channels = this.channels;
      channels.clear();
    }
  };
  items[11] = {
    key: "delete",
    value(arg0) {
      const self = this;
      const guilds = this.guilds;
      let obj = guilds.get(arg0);
      if (null == obj) {
        obj = {};
      }
      for (const key10008 in obj) {
        let tmp2 = key10008;
        let channels = self.channels;
        let deleteResult = channels.delete(key10008);
        continue;
      }
      const guilds2 = self.guilds;
      guilds2.delete(arg0);
    }
  };
  return callback(BasicChannelCacheStore, items);
})(require("initialize").Store);
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/stores/BasicChannelCacheStore.tsx");

export default tmp4;

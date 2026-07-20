// Module ID: 1349
// Function ID: 16041
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1349 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("BasicChannelCacheStore");
let tmp4 = (Store) => {
  class BasicChannelCacheStore {
    constructor() {
      self = this;
      tmp = closure_3(this, BasicChannelCacheStore);
      items = [, ];
      items[0] = BasicChannelCacheStore(closure_1[8]);
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
      obj = closure_6(BasicChannelCacheStore);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      BasicChannelCacheStore = tmp2Result;
      map = new Map();
      tmp2Result.channels = map;
      map1 = new Map();
      tmp2Result.guilds = map1;
      return tmp2Result;
    }
  }
  const importDefault = BasicChannelCacheStore;
  callback2(BasicChannelCacheStore, Store);
  let obj = {
    key: "hasChannel",
    value(arg0) {
      const channels = this.channels;
      return channels.has(arg0);
    }
  };
  const items = [obj, , , , , , , , , , , ];
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
      this.waitFor(closure_8);
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
      const tmp3 = callback3(basicGuildChannels.basicGuildChannels);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let tmp4 = closure_2;
          let tmp5 = closure_2(iter.value, 2);
          let arr = tmp5[1];
          let guilds = self.guilds;
          let _Object = Object;
          let result = guilds.set(tmp5[0], Object.fromEntries(arr.map((id) => {
            const items = [id.id, id];
            return items;
          })));
          let tmp7 = closure_9;
          let tmp8 = closure_9(arr);
          let iter2 = tmp8();
          if (!iter2.done) {
            do {
              let value = iter2.value;
              let channels = self.channels;
              let result1 = channels.set(value.id, value);
              let iter3 = tmp8();
              iter2 = iter3;
              let done = iter3.done;
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
      const tmp = callback3(guilds.keys());
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
      }
      const guilds2 = self.guilds;
      guilds2.delete(arg0);
    }
  };
  return callback(BasicChannelCacheStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp4 = new tmp4();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_database/stores/BasicChannelCacheStore.tsx");

export default tmp4;

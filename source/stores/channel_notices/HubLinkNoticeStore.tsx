// Module ID: 12563
// Function ID: 96663
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12563 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function checkGuildIsHub(id) {
  const guild = guild.getGuild(id);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    const tmp4 = !features.has(GuildFeatures.HUB);
    let flag = !tmp4;
    if (!tmp4) {
      let closure_8 = true;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleHotspotUpdates() {
  return true;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
const GuildFeatures = arg1(dependencyMap[7]).GuildFeatures;
let closure_8 = false;
let tmp2 = (Store) => {
  class HubLinkNoticeStore {
    constructor() {
      self = this;
      tmp = HubLinkNoticeStore(this, HubLinkNoticeStore);
      obj = closure_3(HubLinkNoticeStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = HubLinkNoticeStore;
  callback2(HubLinkNoticeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6, closure_5);
      const items = [closure_5];
      this.syncWith(items, closure_13);
    }
  };
  const items = [obj, ];
  obj = {
    key: "channelNoticePredicate",
    value(features) {
      features = features.features;
      const tmp = !features.has(constants.LINKED_TO_HUB);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !closure_8;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  return callback(HubLinkNoticeStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "HubLinkNoticeStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    const tmp = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp();
    if (!iter.done) {
      while (!checkGuildIsHub(iter.value.id)) {
        let iter2 = tmp();
        iter = iter2;
      }
      return true;
    }
    return false;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return checkGuildIsHub(guild.guild.id);
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default tmp2;

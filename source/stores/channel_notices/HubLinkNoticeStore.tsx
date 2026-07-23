// Module ID: 12684
// Function ID: 98869
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5599, 1838, 653, 566, 686, 2]

// Module 12684 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

function _isNativeReflectConstruct() {
  let _createForOfIteratorHelperLoose = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _createForOfIteratorHelperLoose;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _createForOfIteratorHelperLoose = iterable;
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
      _createForOfIteratorHelperLoose = tmp;
    }
    let c1 = 0;
    return () => {
      if (ME >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        ME = tmp3 + 1;
        obj.value = length[+ME];
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
  guild = guild.getGuild(id);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    const tmp4 = !features.has(GuildFeatures.HUB);
    let flag = !tmp4;
    if (!tmp4) {
      let c8 = true;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleHotspotUpdates() {
  return true;
}
let c8 = false;
let tmp2 = ((Store) => {
  class HubLinkNoticeStore {
    constructor() {
      self = this;
      tmp = HubLinkNoticeStore(this, HubLinkNoticeStore);
      obj = outer1_3(HubLinkNoticeStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(HubLinkNoticeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6, outer1_5);
      const items = [outer1_5];
      this.syncWith(items, outer1_13);
    }
  };
  let items = [obj, ];
  obj = {
    key: "channelNoticePredicate",
    value(features) {
      features = features.features;
      const tmp = !features.has(outer1_7.LINKED_TO_HUB);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !outer1_8;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  return callback(HubLinkNoticeStore, items);
})(require("initialize").Store);
tmp2.displayName = "HubLinkNoticeStore";
tmp2 = new tmp2(require("dispatcher"), {
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default tmp2;

// Module ID: 5068
// Function ID: 44007
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1348, 22, 1327, 566, 2]
// Exports: useFlattenedChannels

// Module 5068 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
function getFlattenedChannels(guildId, set, found, arg3) {
  let done;
  let flag = arg3;
  const _require = set;
  const importDefault = found;
  if (arg3 === undefined) {
    flag = false;
  }
  let mutableGuildChannelsForGuild;
  set = undefined;
  let found2;
  const tmp = importDefault(flag[1]);
  const values = importDefault(flag[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId)).values();
  const tmpResult = importDefault(flag[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId));
  mutableGuildChannelsForGuild = values.groupBy("parent_id").value();
  const iter = values.groupBy("parent_id");
  const mapped = importDefault(flag[1])(found).map((isCategory) => isCategory.isCategory() ? isCategory.id : isCategory.parent_id);
  found = mapped.filter(_require(flag[2]).isNotNullish);
  const arr = importDefault(flag[1])(found);
  const mapped1 = found.uniq().map((channelId) => channel.getChannel(channelId));
  const found1 = mapped1.filter(_require(flag[2]).isNotNullish);
  const uniqResult = found.uniq();
  const valueResult = found1.sortBy("position").value();
  set = new Set(valueResult.map((id) => id.id));
  found2 = found.filter((isCategory) => {
    let isCategoryResult = isCategory.isCategory();
    if (!isCategoryResult) {
      let hasItem = null != isCategory.parent_id;
      if (hasItem) {
        hasItem = set.has(isCategory.parent_id);
      }
      isCategoryResult = hasItem;
    }
    return !isCategoryResult;
  });
  const iter2 = found1.sortBy("position");
  const sortByResult = importDefault(flag[1]).sortBy(found2, (position) => {
    position = position.position;
    if (position.isGuildVocal()) {
      let sum = position + 10000;
    } else {
      sum = position;
    }
    return sum;
  });
  found2 = sortByResult;
  function _loop(value) {
    if (!flag) {
      found2.push(value);
    }
    if (value.has(value.id)) {
      let found = channel[value.id];
    } else {
      found = lib.filter((parent_id) => parent_id.parent_id === value.id);
    }
    if (null == found) {
      found = [];
    }
    const items = [
      ...lib(flag[1]).sortBy(found, (position) => {
        position = position.position;
        if (position.isGuildVocal()) {
          let sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
    ];
    found2.push.apply(items);
  }
  const tmp5 = set(valueResult);
  let iter3 = tmp5();
  if (!iter3.done) {
    do {
      let _loopResult = _loop(iter3.value);
      let iter4 = tmp5();
      iter3 = iter4;
      done = iter4.done;
    } while (!done);
  }
  return sortByResult;
}
const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_onboarding/useFlattenedChannels.tsx");

export { getFlattenedChannels };
export const useFlattenedChannels = function useFlattenedChannels(arg0, arg1) {
  let flag = arg2;
  const _require = arg0;
  let closure_1 = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  const items = [_isNativeReflectConstruct];
  return _require(flag[3]).useStateFromStoresArray(items, () => {
    const mapped = Array.from(closure_1).map((channelId) => outer2_3.getChannel(channelId));
    return outer1_6(callback, closure_1, mapped.filter(callback(flag[2]).isNotNullish), flag);
  });
};

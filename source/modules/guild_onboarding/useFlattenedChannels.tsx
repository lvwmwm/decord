// Module ID: 5065
// Function ID: 43983
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useFlattenedChannels

// Module 5065 (_createForOfIteratorHelperLoose)
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
function getFlattenedChannels(guildId, set, found, arg3) {
  let done;
  let flag = arg3;
  const importDefault = found;
  if (arg3 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let mutableGuildChannelsForGuild;
  let _createForOfIteratorHelperLoose;
  let _arrayLikeToArray;
  const tmp = importDefault(dependencyMap[1]);
  const values = importDefault(dependencyMap[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId)).values();
  const tmpResult = importDefault(dependencyMap[1])(mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId));
  mutableGuildChannelsForGuild = values.groupBy("parent_id").value();
  const iter = values.groupBy("parent_id");
  const mapped = importDefault(dependencyMap[1])(found).map((isCategory) => isCategory.isCategory() ? isCategory.id : isCategory.parent_id);
  found = mapped.filter(set(dependencyMap[2]).isNotNullish);
  const arr = importDefault(dependencyMap[1])(found);
  const mapped1 = found.uniq().map((channelId) => channel.getChannel(channelId));
  const found1 = mapped1.filter(set(dependencyMap[2]).isNotNullish);
  const uniqResult = found.uniq();
  const valueResult = found1.sortBy("position").value();
  const iter2 = found1.sortBy("position");
  _createForOfIteratorHelperLoose = new Set(valueResult.map((id) => id.id));
  const found2 = found.filter((isCategory) => {
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
  _arrayLikeToArray = found2;
  set = new Set(valueResult.map((id) => id.id));
  const sortByResult = importDefault(dependencyMap[1]).sortBy(found2, (position) => {
    position = position.position;
    if (position.isGuildVocal()) {
      let sum = position + 10000;
    } else {
      sum = position;
    }
    return sum;
  });
  _arrayLikeToArray = sortByResult;
  function _loop(value) {
    const arg1 = value;
    if (!flag) {
      sortByResult.push(value);
    }
    if (arg1.has(value.id)) {
      let found = closure_3[value.id];
    } else {
      found = arg2.filter((parent_id) => parent_id.parent_id === parent_id.id);
    }
    if (null == found) {
      found = [];
    }
    const items = [
      ...arg2(flag[1]).sortBy(found, (position) => {
        position = position.position;
        if (position.isGuildVocal()) {
          let sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
    ];
    sortByResult.push.apply(items);
  }
  const tmp5 = _createForOfIteratorHelperLoose(valueResult);
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
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_onboarding/useFlattenedChannels.tsx");

export { getFlattenedChannels };
export const useFlattenedChannels = function useFlattenedChannels(arg0, arg1) {
  let flag = arg2;
  arg1 = arg0;
  const importDefault = arg1;
  if (arg2 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStoresArray(items, () => {
    const mapped = Array.from(arg1).map((channelId) => channel.getChannel(channelId));
    return callback(arg0, arg1, mapped.filter(arg0(flag[2]).isNotNullish), flag);
  });
};

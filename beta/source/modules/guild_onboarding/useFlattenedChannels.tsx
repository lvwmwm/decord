// Module ID: 6530
// Function ID: 6531
// Name: useFlattenedChannels
// Dependencies: [2045, 12, 1370, 504, 2]
// Exports: useFlattenedChannels

// Module 6530 (useFlattenedChannels)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ChannelStore_mod from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, position;

function getFlattenedChannels(guildId, set, found, flag) {
  let channel;
  _require = set;
  importDefault = found;
  if (flag === undefined) {
    flag = false;
  }
  ChannelStore = undefined;
  let tmp = require("module_12");
  const tmpResult = tmp(ChannelStore.getMutableGuildChannelsForGuild(guildId));
  const values = tmpResult.values();
  const iter = values.groupBy("parent_id");
  ChannelStore = iter.value();
  const arr = require("module_12")(found);
  const mapped = arr.map((isCategory) => isCategory.isCategory() ? isCategory.id : isCategory.parent_id);
  found = mapped.filter(require("GlobalUtils").isNotNullish);
  const uniqResult = found.uniq();
  const mapped1 = uniqResult.map((item) => channel.getChannel(item));
  const found1 = mapped1.filter(require("GlobalUtils").isNotNullish);
  const iter2 = found1.sortBy("position");
  const valueResult = iter2.value();
  set = new Set(valueResult.map((id) => id.id));
  let found2 = found.filter((isCategory) => {
    let isCategoryResult = isCategory.isCategory();
    if (!isCategoryResult) {
      const hasItem = null != isCategory.parent_id && set.has(isCategory.parent_id);
      isCategoryResult = hasItem;
    }
    return !isCategoryResult;
  });
  const obj5 = require("module_12");
  const sortByResult = obj5.sortBy(found2, (position) => {
    let sum;
    position = position.position;
    if (position.isGuildVocal()) {
      sum = position + 10000;
    } else {
      sum = position;
    }
    return sum;
  });
  found2 = sortByResult;
  function _loop(iter3) {
    set = iter3;
    const tmp = flag;
    if (!tmp) {
      found2.push(iter3);
    }
    if (set.has(iter3.id)) {
      found = channel[iter3.id];
    } else {
      found = found.filter((parent_id) => parent_id.parent_id === id.id);
    }
    const sortBy = _modDef12.sortBy;
    _modDef12;
    if (found == null) {
      found = [];
    }
    const items = [
      ...sortBy(found, (position) => {
        let sum;
        position = position.position;
        if (position.isGuildVocal()) {
          sum = position + 10000;
        } else {
          sum = position;
        }
        return sum;
      })
    ];
    found2.push.apply(items);
  }
  const iter3 = valueResult[Symbol.iterator]();
  while (iter3 !== undefined) {
    let _loopResult = _loop(iter3.next());
    continue;
  }
  return sortByResult;
}
let ChannelStore = ChannelStore_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding/useFlattenedChannels.tsx");

export { getFlattenedChannels };
export const useFlattenedChannels = function useFlattenedChannels(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const items = [ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let channel;
    const arr = Array.from(closure_1);
    const mapped = arr.map((item) => channel.getChannel(item));
    return getFlattenedChannels(closure_0, closure_1, mapped.filter(GlobalUtils.isNotNullish), flag);
  });
};

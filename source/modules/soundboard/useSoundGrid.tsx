// Module ID: 15795
// Function ID: 121829
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1838, 3758, 1849, 4578, 4579, 1851, 4585, 4022, 15796, 566, 3776, 15797, 8446, 15798, 2]
// Exports: default, useSearchCategories

// Module 15795 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import MAX_LENGTH_SOUND_NAME from "MAX_LENGTH_SOUND_NAME";
import { PremiumTypes } from "GuildFeatures";

let closure_10;
let closure_9;
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
function createSoundItems(items1, sortSoundsFn) {
  let arr = items1;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items1);
  }
  return arr.map((sound, index) => ({ type: outer1_0(outer1_2[8]).SoundboardSoundItemType.SOUND, sound, index }));
}
function _addSectionForPotentialSoundIds(sectionType) {
  let allSounds;
  let iter4;
  let potentialSoundIdsForSection;
  let sections;
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  sectionType = sectionType.sectionType;
  let obj = {};
  let items = [...sectionType.guildIds, closure_9];
  for (let num = 0; num < items.length; num = num + 1) {
    function _loop(soundId) {
      const potentialSoundIdsForSection = soundId;
      if (null != potentialSoundIdsForSection.find((arg0) => arg0 === soundId.soundId)) {
        obj[soundId.soundId] = soundId;
      }
    }
    let tmp = _createForOfIteratorHelperLoose;
    items = allSounds.get(items[num]);
    if (null == items) {
      items = [];
    }
    let tmpResult = tmp(items);
    let iter = tmpResult();
    if (!iter.done) {
      do {
        let _loopResult = _loop(iter.value);
        let iter2 = tmpResult();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  }
  const items1 = [];
  const tmp4 = _createForOfIteratorHelperLoose(potentialSoundIdsForSection);
  let iter3 = tmp4();
  if (!iter3.done) {
    do {
      let tmp5 = obj[iter3.value];
      if (null != tmp5) {
        let arr = items1.push(tmp5);
      }
      iter4 = tmp4();
      iter3 = iter4;
    } while (!iter4.done);
  }
  const arr4 = createSoundItems(items1, sectionType.sortSoundsFn);
  if (arr4.length > 0) {
    obj = { key: sectionType };
    obj = { type: sectionType };
    obj.categoryInfo = obj;
    obj.items = arr4;
    sections.push(obj);
  }
}
function addDefaultSection(arr, get) {
  let value = get.get(closure_9);
  if (null == value) {
    value = closure_10;
  }
  let obj = { key: require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.DEFAULTS };
  obj = { type: require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.DEFAULTS };
  obj.categoryInfo = obj;
  obj.items = createSoundItems(value, require(15796) /* sortSoundsOldestToNewestCreationDate */.sortSoundsOldestToNewestCreationDate);
  arr.push(obj);
}
({ DEFAULT_SOUND_GUILD_ID: closure_9, EMPTY_SOUND_LIST: closure_10 } = MAX_LENGTH_SOUND_NAME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default function useSoundGrid(guild_id, location) {
  let obj = location;
  let flag = arg2;
  const _require = guild_id;
  if (location === undefined) {
    obj = {};
  }
  let flag2 = obj.filterOutEmptyCurrentGuild;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let first;
  let c5;
  let c6;
  let c7;
  let soundOrganizer;
  let sortedGuildIdsForSoundboard;
  let stateFromStoresArray;
  let PremiumTypes;
  let stateFromStores1;
  let stateFromStores2;
  let memo;
  let enabled;
  let items = [c7];
  const stateFromStores = _require(flag[11]).useStateFromStores(items, () => _undefined3.getCurrentUser());
  let obj2 = _require(flag[11]);
  const isPremiumResult = flag2(flag[12]).isPremium(stateFromStores, PremiumTypes.TIER_2);
  callback = isPremiumResult;
  let obj3 = flag2(flag[12]);
  let items1 = [soundOrganizer];
  const tmp3 = callback(_require(flag[11]).useStateFromStoresArray(items1, () => {
    const items = [soundOrganizer.getSounds(), soundOrganizer.getFavorites(), soundOrganizer.getFrequentlyUsedSoundIds(), soundOrganizer.isFetching()];
    return items;
  }), 4);
  first = tmp3[0];
  c5 = tmp5;
  c6 = tmp6;
  c7 = tmp7;
  let obj4 = _require(flag[11]);
  soundOrganizer = _require(flag[10]).useSoundOrganizer();
  let obj5 = _require(flag[10]);
  sortedGuildIdsForSoundboard = _require(flag[13]).useSortedGuildIdsForSoundboard(guild_id, false);
  let obj6 = _require(flag[13]);
  const items2 = [c5];
  stateFromStoresArray = _require(flag[11]).useStateFromStoresArray(items2, () => {
    const items = [];
    const item = sortedGuildIdsForSoundboard.forEach((guildId) => {
      guild = guild.getGuild(guildId);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let obj7 = _require(flag[11]);
  const result = flag2(flag[12]).canUseSoundboardEverywhere(stateFromStores);
  PremiumTypes = result;
  let obj8 = flag2(flag[12]);
  const items3 = [c5];
  stateFromStores1 = _require(flag[11]).useStateFromStores(items3, () => {
    let guild_id;
    if (null != guild_id) {
      guild_id = guild_id.guild_id;
    }
    return _undefined.getGuild(guild_id);
  });
  let obj9 = _require(flag[11]);
  const items4 = [c6];
  const items5 = [stateFromStores1];
  stateFromStores2 = _require(flag[11]).useStateFromStores(items4, () => guild_id(flag[14]).getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
  const items6 = [tmp3[2], tmp3[1]];
  memo = first.useMemo(() => {
    const found = _undefined2.filter((arg0) => !outer1_5.has(arg0));
    return found.slice(0, 3);
  }, items6);
  const obj10 = _require(flag[11]);
  obj = {};
  let str = "useSoundGridNoFrequentlyUsed";
  if (memo.length > 0) {
    str = "useSoundGrid";
  }
  obj.location = str;
  enabled = flag2(flag[15]).useConfig(obj).enabled;
  const items7 = [sortedGuildIdsForSoundboard, first, tmp3[1], enabled, stateFromStores1, stateFromStores2, flag2, result, stateFromStoresArray, flag, tmp3[3], isPremiumResult, soundOrganizer, memo];
  return first.useMemo(() => {
    let allSounds;
    let allSounds2;
    let currentGuildHasAddPermissions;
    let currentGuildId;
    let filterOutEmptyCurrentGuild;
    let hasNitro;
    let iter3;
    let sections;
    let sortSoundsFn;
    let sortSoundsFn2;
    let c0 = 0;
    let c1 = 0;
    const items = [];
    if (flag) {
      outer1_16(items, first);
      let obj = { categories: items };
      let value = first.get(sortedGuildIdsForSoundboard);
      if (null == value) {
        value = stateFromStoresArray;
      }
      obj.availableSounds = value;
      obj.isFetching = c7;
      obj.soundCounts = { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 };
      let obj8 = obj;
    } else {
      obj = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds: first };
      const _Array = Array;
      obj.potentialSoundIdsForSection = Array.from(_undefined);
      obj.sectionType = guild_id(flag[8]).SoundboardSoundGridSectionType.FAVORITES;
      obj.sortSoundsFn = guild_id(flag[10]).sortSoundsOldestToNewestCreationDate;
      enabled(obj);
      let tmp9 = enabled;
      if (enabled) {
        tmp9 = memo.length > 0;
      }
      if (tmp9) {
        obj = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds: first, potentialSoundIdsForSection: memo, sectionType: guild_id(flag[8]).SoundboardSoundGridSectionType.FREQUENTLY_USED };
        enabled(obj);
      }
      if (undefined !== stateFromStores1) {
        const obj1 = { currentGuildHasAddPermissions: stateFromStores2, allSounds: first, filterOutEmptyCurrentGuild: c1, sortSoundsFn: soundOrganizer };
        ({ allSounds: allSounds2, filterOutEmptyCurrentGuild, currentGuildHasAddPermissions, sortSoundsFn: sortSoundsFn2 } = obj1);
        value = allSounds2.get(stateFromStores1.id);
        if (null == value) {
          value = [];
        }
        let arr2 = memo(value, sortSoundsFn2);
        let obj2 = guild_id(flag[9]);
        const tmp22 = value.length < obj2.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions;
        if (!tmp24) {
          obj2 = { type: guild_id(flag[8]).SoundboardSoundItemType.ADD_SOUND, guild: tmp70 };
          arr2.push(obj2);
        }
        if (filterOutEmptyCurrentGuild) {
          filterOutEmptyCurrentGuild = tmp23;
        }
        if (!filterOutEmptyCurrentGuild) {
          const obj3 = {};
          const obj4 = { type: guild_id(flag[8]).SoundboardSoundGridSectionType.GUILD, guild: tmp70, isNitroLocked: false };
          obj3.categoryInfo = obj4;
          obj3.key = tmp70.id;
          obj3.items = arr2;
          items.push(obj3);
        }
        tmp24 = !(value.length < obj2.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions) && 0 !== arr2.length || filterOutEmptyCurrentGuild;
      }
      if (!c11) {
        outer1_16(items, first);
      }
      const obj5 = { sections: items, guilds: stateFromStoresArray };
      let id;
      if (null != stateFromStores1) {
        id = stateFromStores1.id;
      }
      obj5.currentGuildId = id;
      obj5.allSounds = first;
      obj5.hasNitro = c3;
      obj5.sortSoundsFn = soundOrganizer;
      ({ sections, allSounds } = obj5);
      ({ currentGuildId, hasNitro, sortSoundsFn } = obj5);
      const tmp44 = stateFromStores1(obj5.guilds);
      const iter = tmp44();
      let iter2 = iter;
      if (!iter.done) {
        do {
          value = iter2.value;
          if (value.id !== currentGuildId) {
            let tmp76 = memo;
            let value1 = allSounds.get(value.id);
            let items1 = value1;
            if (null == value1) {
              items1 = [];
            }
            let tmp76Result = tmp76(items1, sortSoundsFn);
            let tmp45 = value1;
            let tmp46 = tmp76Result;
            if (tmp76Result.length > 0) {
              let obj6 = {};
              let obj7 = {};
              let tmp47 = guild_id;
              let tmp48 = flag;
              obj7.type = guild_id(flag[8]).SoundboardSoundGridSectionType.GUILD;
              obj7.guild = value;
              obj7.isNitroLocked = !hasNitro;
              obj6.categoryInfo = obj7;
              obj6.key = value.id;
              obj6.items = tmp76Result;
              let arr1 = sections.push(obj6);
              let tmp50 = value1;
              let tmp51 = tmp76Result;
            }
          }
          iter3 = tmp44();
          iter2 = iter3;
        } while (!iter3.done);
      }
      if (c11) {
        outer1_16(items, first);
      }
      const item = items.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === v0(flag[8]).SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + categoryInfo.items.length;
          } else {
            v0 = v0 + categoryInfo.items.length;
          }
        }
      });
      obj8 = { categories: items };
      const _Array2 = Array;
      arr2 = Array.from(first.values());
      obj8.availableSounds = arr2.flat();
      obj8.isFetching = c7;
      const obj9 = { favoriteSoundCount: _undefined.size, unlockedCustomSoundCount: c0, lockedCustomSoundCount: c1 };
      obj8.soundCounts = obj9;
    }
    return obj8;
  }, items7);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  let closure_0 = categories;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let items = [categories, arg2.length, arg1];
  return React.useMemo(() => {
    if (length.length > 0) {
      let obj = { key: categories(length[8]).SoundboardSoundGridSectionType.SEARCH };
      obj = { type: categories(length[8]).SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj;
      obj.items = outer1_14(closure_1);
      const items = [obj];
      let tmp = items;
    } else {
      tmp = categories;
    }
    return tmp;
  }, items);
};

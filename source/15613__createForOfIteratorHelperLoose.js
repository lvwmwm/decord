// Module ID: 15613
// Function ID: 119228
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useSearchCategories

// Module 15613 (_createForOfIteratorHelperLoose)
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
function createSoundItems(items1, sortSoundsFn) {
  let arr = items1;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items1);
  }
  return arr.map((sound, index) => ({ type: callback(closure_2[8]).SoundboardSoundItemType.SOUND, sound, index }));
}
function _addSectionForPotentialSoundIds(sectionType) {
  let allSounds;
  let iter4;
  let potentialSoundIdsForSection;
  let sections;
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  const arg1 = potentialSoundIdsForSection;
  sectionType = sectionType.sectionType;
  let obj = {};
  const importDefault = obj;
  let items = [...sectionType.guildIds, closure_9];
  for (let num = 0; num < items.length; num = num + 1) {
    function _loop(soundId) {
      const potentialSoundIdsForSection = soundId;
      if (null != potentialSoundIdsForSection.find((arg0) => arg0 === arg0.soundId)) {
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
        let done = iter2.done;
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
  let obj = { key: get(dependencyMap[8]).SoundboardSoundGridSectionType.DEFAULTS };
  obj = { type: get(dependencyMap[8]).SoundboardSoundGridSectionType.DEFAULTS };
  obj.categoryInfo = obj;
  obj.items = createSoundItems(value, get(dependencyMap[10]).sortSoundsOldestToNewestCreationDate);
  arr.push(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ DEFAULT_SOUND_GUILD_ID: closure_9, EMPTY_SOUND_LIST: closure_10 } = arg1(dependencyMap[6]));
const PremiumTypes = arg1(dependencyMap[7]).PremiumTypes;
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default function useSoundGrid(guild_id, location) {
  let obj = location;
  let flag = arg2;
  location = guild_id;
  if (location === undefined) {
    obj = {};
  }
  let flag2 = obj.filterOutEmptyCurrentGuild;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let sortedGuildIdsForSoundboard;
  let stateFromStoresArray;
  let PremiumTypes;
  let _createForOfIteratorHelperLoose;
  let _arrayLikeToArray;
  let createSoundItems;
  let _addSectionForPotentialSoundIds;
  const items = [closure_7];
  const stateFromStores = location(dependencyMap[11]).useStateFromStores(items, () => tmp7.getCurrentUser());
  const obj2 = location(dependencyMap[11]);
  const isPremiumResult = importDefault(dependencyMap[12]).isPremium(stateFromStores, PremiumTypes.TIER_2);
  callback = isPremiumResult;
  const obj3 = importDefault(dependencyMap[12]);
  const items1 = [closure_8];
  const tmp3 = callback(location(dependencyMap[11]).useStateFromStoresArray(items1, () => {
    const items = [soundOrganizer.getSounds(), soundOrganizer.getFavorites(), soundOrganizer.getFrequentlyUsedSoundIds(), soundOrganizer.isFetching()];
    return items;
  }), 4);
  const first = tmp3[0];
  React = first;
  closure_5 = tmp5;
  closure_6 = tmp6;
  closure_7 = tmp7;
  const obj4 = location(dependencyMap[11]);
  const soundOrganizer = location(dependencyMap[10]).useSoundOrganizer();
  closure_8 = soundOrganizer;
  const obj5 = location(dependencyMap[10]);
  sortedGuildIdsForSoundboard = location(dependencyMap[13]).useSortedGuildIdsForSoundboard(guild_id, false);
  const obj6 = location(dependencyMap[13]);
  const items2 = [closure_5];
  stateFromStoresArray = location(dependencyMap[11]).useStateFromStoresArray(items2, () => {
    const items = [];
    const arg0 = items;
    const item = sortedGuildIdsForSoundboard.forEach((guildId) => {
      const guild = guild.getGuild(guildId);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  const obj7 = location(dependencyMap[11]);
  const result = importDefault(dependencyMap[12]).canUseSoundboardEverywhere(stateFromStores);
  PremiumTypes = result;
  const obj8 = importDefault(dependencyMap[12]);
  const items3 = [closure_5];
  const stateFromStores1 = location(dependencyMap[11]).useStateFromStores(items3, () => {
    let guild_id;
    if (null != arg0) {
      guild_id = arg0.guild_id;
    }
    return tmp5.getGuild(guild_id);
  });
  _createForOfIteratorHelperLoose = stateFromStores1;
  const obj9 = location(dependencyMap[11]);
  const items4 = [closure_6];
  const items5 = [stateFromStores1];
  const stateFromStores2 = location(dependencyMap[11]).useStateFromStores(items4, () => arg0(flag[14]).getManageResourcePermissions(stateFromStores1).canCreateExpressions, items5);
  _arrayLikeToArray = stateFromStores2;
  const items6 = [tmp3[2], tmp3[1]];
  const memo = React.useMemo(() => {
    const found = tmp6.filter((arg0) => !set.has(arg0));
    return found.slice(0, 3);
  }, items6);
  createSoundItems = memo;
  const obj10 = location(dependencyMap[11]);
  obj = {};
  let str = "useSoundGridNoFrequentlyUsed";
  if (memo.length > 0) {
    str = "useSoundGrid";
  }
  obj.location = str;
  const enabled = importDefault(dependencyMap[15]).useConfig(obj).enabled;
  _addSectionForPotentialSoundIds = enabled;
  const items7 = [sortedGuildIdsForSoundboard, first, tmp3[1], enabled, stateFromStores1, stateFromStores2, flag2, result, stateFromStoresArray, flag, tmp3[3], isPremiumResult, soundOrganizer, memo];
  return React.useMemo(() => {
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
    const guild_id = 0;
    let closure_1 = 0;
    const items = [];
    if (flag) {
      callback(items, first);
      let obj = { categories: items };
      let value = first.get(sortedGuildIdsForSoundboard);
      if (null == value) {
        value = stateFromStoresArray;
      }
      obj.availableSounds = value;
      obj.isFetching = tmp7;
      obj.soundCounts = {};
      let obj8 = obj;
    } else {
      obj = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds: first };
      const _Array = Array;
      obj.potentialSoundIdsForSection = Array.from(tmp5);
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
        const obj1 = { currentGuildHasAddPermissions: stateFromStores2, allSounds: first, filterOutEmptyCurrentGuild: closure_1, sortSoundsFn: soundOrganizer };
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
        const tmp24 = !(value.length < obj2.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions) && 0 !== arr2.length || filterOutEmptyCurrentGuild;
      }
      if (!result) {
        callback(items, first);
      }
      const obj5 = { sections: items, guilds: stateFromStoresArray };
      let id;
      if (null != stateFromStores1) {
        id = stateFromStores1.id;
      }
      obj5.currentGuildId = id;
      obj5.allSounds = first;
      obj5.hasNitro = isPremiumResult;
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
            let tmp76 = closure_14;
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
              let tmp47 = closure_0;
              let tmp48 = closure_2;
              obj7.type = closure_0(closure_2[8]).SoundboardSoundGridSectionType.GUILD;
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
      if (result) {
        callback(items, first);
      }
      const item = items.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === v0(closure_2[8]).SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + categoryInfo.items.length;
          } else {
            const v0 = v0 + categoryInfo.items.length;
          }
        }
      });
      obj8 = { categories: items };
      const _Array2 = Array;
      arr2 = Array.from(first.values());
      obj8.availableSounds = arr2.flat();
      obj8.isFetching = flag;
      const obj9 = { favoriteSoundCount: tmp5.size, unlockedCustomSoundCount: guild_id, lockedCustomSoundCount: closure_1 };
      obj8.soundCounts = obj9;
    }
    return obj8;
  }, items7);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
  arg1 = categories;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [categories, arg2.length, arg1];
  return React.useMemo(() => {
    if (arg2.length > 0) {
      let obj = { key: arg0(arg2[8]).SoundboardSoundGridSectionType.SEARCH };
      obj = { type: arg0(arg2[8]).SoundboardSoundGridSectionType.SEARCH };
      obj.categoryInfo = obj;
      obj.items = callback(arg1);
      const items = [obj];
      let tmp = items;
    } else {
      tmp = arg0;
    }
    return tmp;
  }, items);
};

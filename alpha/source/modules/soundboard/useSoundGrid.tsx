// Module ID: 19119
// Function ID: 19120
// Name: useSoundGrid
// Dependencies: [32, 19, 4858, 4880, 4941, 4912, 1384, 6053, 6055, 1386, 7512, 8455, 19120, 504, 2048, 19121, 9011, 5588, 19122, 2]
// Exports: default, useSearchCategories

// Module 19119 (useSoundGrid)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import SoundboardTypes from "SoundboardTypes" /* 7512 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9011 */;
import useSoundOrganizer from "useSoundOrganizer" /* 19120 */;
import TopSoundboardSoundsActionCreators from "TopSoundboardSoundsActionCreators" /* 19122 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserStore from "UserStore" /* 1384 */;
import SoundboardStore from "SoundboardStore" /* 6053 */;
import SoundboardConstants from "SoundboardConstants" /* 6055 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, lockedCustomSoundCount, unlockedCustomSoundCount;

let closure_12;
let unpackModuleId;
function createSoundItems(arg0, fn) {
  let arr = arg0;
  if (null != fn) {
    arr = fn(arg0);
  }
  return arr.map((sound, index) => {
    const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
}
let _slicedToArray = _slicedToArray_mod;
({ DEFAULT_SOUND_GUILD_ID: unpackModuleId, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default function useSoundGrid(guild_id) {
  let allSounds;
  let hasNitro;
  let tmp5;
  let tmp6;
  let tmp7;
  _require = guild_id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.filterOutEmptyCurrentGuild;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  allSounds = undefined;
  let sortedGuildIdsForSoundboard;
  let stateFromStoresArray;
  let stateFromStores2;
  let obj2 = require("get initialized");
  let items = [sortedGuildIdsForSoundboard];
  const stateFromStores = obj2.useStateFromStores(items, () => sortedGuildIdsForSoundboard.getCurrentUser());
  let obj3 = flag(flag2[14]);
  const isPremiumResult = obj3.isPremium(stateFromStores, stateFromStores2.TIER_2);
  _slicedToArray = isPremiumResult;
  let obj4 = require("get initialized");
  let items1 = [stateFromStoresArray];
  [allSounds, tmp5, tmp6, tmp7] = obj4.useStateFromStoresArray(items1, () => {
    const items = [stateFromStoresArray.getSounds(), stateFromStoresArray.getFavorites(), stateFromStoresArray.getFrequentlyUsedSoundIds(), stateFromStoresArray.isFetching()];
    return items;
  });
  let channel = tmp5;
  let closure_6 = tmp6;
  const isFetching = tmp7;
  let obj5 = require("useSoundOrganizer");
  const soundOrganizer = obj5.useSoundOrganizer();
  let obj6 = require("useSortedGuildIdsForSoundboard");
  sortedGuildIdsForSoundboard = obj6.useSortedGuildIdsForSoundboard(guild_id, false);
  let obj7 = require("get initialized");
  let items2 = [closure_6];
  stateFromStoresArray = obj7.useStateFromStoresArray(items2, () => {
    const items = [];
    const item = sortedGuildIdsForSoundboard.forEach((item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let obj8 = flag(flag2[14]);
  let result = obj8.canUseSoundboardEverywhere(stateFromStores);
  let c11 = result;
  let obj9 = require("get initialized");
  const items3 = [closure_6];
  const stateFromStores1 = obj9.useStateFromStores(items3, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (unlockedCustomSoundCount != null) {
      guild_id = unlockedCustomSoundCount.guild_id;
    }
    return getGuild(guild_id);
  });
  let obj10 = require("get initialized");
  const items4 = [isFetching];
  const items5 = [stateFromStores1];
  stateFromStores2 = obj10.useStateFromStores(items4, () => {
    const obj = useManageResourcePermissions;
    return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
  }, items5);
  const items6 = [tmp6, tmp5];
  const memo = allSounds.useMemo(() => {
    const found = closure_6.filter((item) => !set.has(item));
    return found.slice(0, 3);
  }, items6);
  let obj11 = require("get initialized");
  const items7 = [soundOrganizer, channel, closure_6];
  const stateFromStores3 = obj11.useStateFromStores(items7, () => {
    const voiceChannelId = soundOrganizer.getVoiceChannelId();
    channel = null;
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
    }
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let guild;
    if (null != guild_id) {
      guild = closure_6.getGuild(channel.guild_id);
    }
    return guild;
  });
  let tmp16 = flag(flag2[17])(() => {
    let id;
    const maybeFetchTopSoundboardSoundsByGuild = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild;
    TopSoundboardSoundsActionCreators;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    const result = maybeFetchTopSoundboardSoundsByGuild(id);
  });
  let obj12 = require("get initialized");
  const items8 = [stateFromStoresArray];
  const stateFromStoresArray1 = obj12.useStateFromStoresArray(items8, () => {
    let id;
    const getTopSoundboardSoundIds = SoundboardStore.getTopSoundboardSoundIds;
    if (stateFromStores3 != null) {
      id = stateFromStores3.id;
    }
    return getTopSoundboardSoundIds(id);
  });
  const items9 = [stateFromStoresArray1];
  const memo1 = allSounds.useMemo(() => stateFromStoresArray1.slice(0, 3), items9);
  const items10 = [sortedGuildIdsForSoundboard, allSounds, tmp5, false, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp7, isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1];
  return allSounds.useMemo(() => {
    let arr2;
    let id;
    let obj11;
    let obj14;
    let obj15;
    let obj17;
    let obj4;
    let obj9;
    let result;
    let result1;
    let result2;
    let tmp2;
    let value5;
    function addTopSoundsSection(items, id, arg2) {
      let obj3;
      let topSoundIds;
      ({ allSounds, topSoundIds } = arg2);
      const obj = {};
      let items1 = allSounds.get(id.id);
      if (items1 == null) {
        items1 = [];
      }
      for (const item10014 of items1) {
        obj[item10014.soundId] = item10014;
        continue;
      }
      items = [];
      for (const item10022 of topSoundIds) {
        let tmp = obj[item10022];
        if (null != tmp) {
          let arr = items.push(tmp2);
        }
        continue;
      }
      if (0 !== items.length) {
        const push = items.push;
        const obj2 = { key: unlockedCustomSoundCount(flag2[10]).SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: obj3, items: stateFromStores3(items) };
        obj3 = { type: unlockedCustomSoundCount(flag2[10]).SoundboardSoundGridSectionType.TOP_SOUNDS, guild: id };
        push(obj2);
      }
    }
    function _addSectionForPotentialSoundIds(sectionType) {
      let obj3;
      let potentialSoundIdsForSection;
      let sections;
      ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
      sectionType = sectionType.sectionType;
      const obj = {};
      const items = [];
      const sortSoundsFn = sectionType.sortSoundsFn;
      items[HermesBuiltin.arraySpread(items, sectionType.guildIds, 0)] = closure_1_11;
      const tmp2 = items[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let items2 = allSounds.get(tmp3);
        if (items2 == null) {
          items2 = [];
        }
        function _loop(item10029) {
          let closure_0 = item10029;
          if (null != potentialSoundIdsForSection.find((item) => item === soundId.soundId)) {
            obj[item10029.soundId] = item10029;
          }
        }
        for (const item10029 of items2) {
          let _loopResult = _loop(item10029);
          continue;
        }
        continue;
      }
      const items1 = [];
      for (const item10039 of potentialSoundIdsForSection) {
        let tmp8 = obj[item10039];
        if (null != tmp8) {
          let arr = items1.push(tmp9);
        }
        continue;
      }
      const arr4 = stateFromStores3(items1, sortSoundsFn);
      if (arr4.length > 0) {
        const obj2 = { key: sectionType, categoryInfo: obj3, items: arr4 };
        obj3 = { type: sectionType };
        sections.push(obj2);
      }
    }
    function addGuildsSections(arg0) {
      let currentGuildId;
      let guilds;
      let obj2;
      let sections;
      let sortSoundsFn;
      ({ sections, guilds, allSounds } = arg0);
      ({ currentGuildId, hasNitro, sortSoundsFn } = arg0);
      const iter = guilds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if (nextResult.id !== currentGuildId) {
          let tmp9 = stateFromStores3;
          let items = allSounds.get(tmp2.id);
          if (items == null) {
            items = [];
          }
          let tmp9Result = tmp9(items, sortSoundsFn);
          if (tmp9Result.length > 0) {
            let obj = { categoryInfo: obj2, key: tmp2.id, items: tmp3 };
            obj2 = { type: unlockedCustomSoundCount(flag2[10]).SoundboardSoundGridSectionType.GUILD, guild: tmp2, isNitroLocked: !hasNitro };
            let push = sections.push;
            let arr = push(obj);
          }
        }
        continue;
      }
    }
    unlockedCustomSoundCount = 0;
    lockedCustomSoundCount = 0;
    let items = [];
    let tmp = flag2;
    if (tmp) {
      let value = allSounds.get(unpackModuleId);
      const obj16 = allSounds;
      const tmp36 = unpackModuleId;
      if (value == null) {
        value = authStore2;
      }
      let obj2 = {
        key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS,
        categoryInfo: obj4,
        items: result.map((sound, index) => {
            const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          })
      };
      const push5 = items.push;
      obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      const sortSoundsOldestToNewestCreationDate3 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      push5(obj2);
      const obj5 = { categories: items, availableSounds: value5, isFetching, soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 } };
      value5 = obj16.get(tmp36);
      if (value5 == null) {
        value5 = authStore2;
      }
      obj15 = obj5;
    } else {
      let tmp3 = null;
      if (null != stateFromStores3) {
        let obj = { allSounds, topSoundIds: memo1 };
        let tmp4 = allSounds;
        let tmp5 = memo1;
        let tmp6 = addTopSoundsSection(items, tmp2, obj);
      }
      let tmp7 = sortedGuildIdsForSoundboard;
      let obj3 = allSounds;
      let tmp8 = globalThis;
      const _Array = Array;
      let tmp9 = channel;
      let tmp10 = require;
      const obj6 = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds, potentialSoundIdsForSection: Array.from(channel), sectionType: SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES, sortSoundsFn: useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate };
      _addSectionForPotentialSoundIds(obj6);
      if (undefined !== stateFromStores1) {
        let tmp18 = flag;
        let value6 = obj3.get(tmp13.id);
        const tmp44 = stateFromStores2;
        if (value6 == null) {
          value6 = [];
        }
        let tmp45Result = value6;
        if (null != soundOrganizer) {
          tmp45Result = tmp45(value6);
        }
        const mapped = tmp45Result.map((sound, index) => {
          const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
          return obj;
        });
        const length = value6.length;
        const tmp10Result = tmp10(8455);
        const tmp16 = !(length < tmp10Result.getMaxSoundboardSlots(stateFromStores1) && tmp44) && 0 !== mapped.length || tmp18;
        if (!tmp16) {
          let push = mapped.push;
          const obj7 = { type: tmp10(7512).SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
          let arr = push(obj7);
        }
        if (tmp18) {
          tmp18 = tmp15;
        }
        if (!tmp18) {
          const obj8 = { categoryInfo: obj9, key: stateFromStores1.id, items: mapped };
          const push2 = items.push;
          obj9 = { type: tmp10(7512).SoundboardSoundGridSectionType.GUILD, guild: stateFromStores1, isNitroLocked: false };
          push2(obj8);
        }
      }
      if (!c11) {
        let value7 = obj3.get(unpackModuleId);
        if (value7 == null) {
          value7 = authStore2;
        }
        const push3 = items.push;
        const obj10 = {
          key: tmp10(7512).SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj11,
          items: result1.map((sound, index) => {
                const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj11 = { type: tmp10(7512).SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate = tmp10(19120).sortSoundsOldestToNewestCreationDate;
        result1 = value7;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value7);
        }
        push3(obj10);
      }
      const obj12 = { sections: items, guilds: stateFromStoresArray, currentGuildId: id, allSounds: obj3, hasNitro, sortSoundsFn: soundOrganizer };
      id = undefined;
      if (stateFromStores1 != null) {
        id = tmp13.id;
      }
      addGuildsSections(obj12);
      if (c11) {
        let value8 = obj3.get(unpackModuleId);
        if (value8 == null) {
          value8 = authStore2;
        }
        const push4 = items.push;
        const obj13 = {
          key: tmp10(7512).SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj14,
          items: result2.map((sound, index) => {
                const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj14 = { type: tmp10(7512).SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate2 = tmp10(19120).sortSoundsOldestToNewestCreationDate;
        result2 = value8;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value8);
        }
        push4(obj13);
      }
      const item = items.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === unlockedCustomSoundCount(flag2[10]).SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_1 = closure_1 + categoryInfo.items.length;
          } else {
            closure_0 = closure_0 + categoryInfo.items.length;
          }
        }
      });
      obj15 = { categories: items, availableSounds: arr2.flat(), isFetching, soundCounts: obj17 };
      const _Array2 = Array;
      arr2 = Array.from(obj3.values());
      obj17 = { favoriteSoundCount: tmp9.size, unlockedCustomSoundCount, lockedCustomSoundCount };
    }
    return obj15;
  }, items10);
};
export function useSearchCategories(categories, arg1, arg2) {
  let closure_0 = categories;
  let closure_1 = arg1;
  const length = arg2;
  let items = [categories, arg2.length, arg1];
  return react.useMemo(() => {
    let obj2;
    let tmp;
    if (length.length > 0) {
      let obj = {
        key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH,
        categoryInfo: obj2,
        items: closure_1.map((sound, index) => {
            const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          })
      };
      const items = [obj];
      tmp = items;
      obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
    } else {
      tmp = categories;
    }
    return tmp;
  }, items);
}

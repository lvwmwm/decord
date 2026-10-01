// Module ID: 16886
// Function ID: 16887
// Name: useSoundGrid
// Dependencies: [32, 19, 2045, 2067, 4469, 2099, 1372, 5319, 5321, 1374, 5328, 4728, 16887, 504, 4488, 5324, 16888, 8952, 16889, 5298, 16890, 2]
// Exports: default, useSearchCategories

// Module 16886 (useSoundGrid)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import SoundboardTypes from "SoundboardTypes" /* 5328 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 8952 */;
import useSoundOrganizer from "useSoundOrganizer" /* 16887 */;
import TopSoundboardSoundsActionCreators from "TopSoundboardSoundsActionCreators" /* 16890 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import SoundboardConstants from "SoundboardConstants" /* 5321 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, lockedCustomSoundCount, unlockedCustomSoundCount;

let closure_12;
let unpackModuleId;
function createSoundItems(items, fn) {
  let arr = items;
  if (null != fn) {
    arr = fn(items);
  }
  return arr.map((sound, index) => {
    const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
}
function addTopSoundsSection(items, stateFromStores3, arg2) {
  let allSounds;
  let obj3;
  let topSoundIds;
  ({ allSounds, topSoundIds } = arg2);
  const obj = {};
  let items1 = allSounds.get(stateFromStores3.id);
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
    const obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: obj3, items: createSoundItems(items) };
    obj3 = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: stateFromStores3 };
    push(obj2);
  }
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
  let sortOrder;
  let sortedGuildIdsForSoundboard;
  let stateFromStores1;
  let obj2 = require("get initialized");
  let items = [sortOrder];
  const stateFromStores = obj2.useStateFromStores(items, () => sortOrder.getCurrentUser());
  let obj3 = flag(flag2[14]);
  const isPremiumResult = obj3.isPremium(stateFromStores, stateFromStores1.TIER_2);
  _slicedToArray = isPremiumResult;
  let obj4 = require("get initialized");
  let items1 = [sortedGuildIdsForSoundboard];
  [allSounds, tmp5, tmp6, tmp7] = obj4.useStateFromStoresArray(items1, () => {
    const items = [sortedGuildIdsForSoundboard.getSounds(), sortedGuildIdsForSoundboard.getFavorites(), sortedGuildIdsForSoundboard.getFrequentlyUsedSoundIds(), sortedGuildIdsForSoundboard.isFetching()];
    return items;
  });
  let channel = tmp5;
  let closure_6 = tmp6;
  const isFetching = tmp7;
  let obj5 = require("useSoundOrganizer");
  const soundOrganizer = obj5.useSoundOrganizer();
  const SoundboardFavoritesExperiment = require("SoundboardFavoritesExperiment").SoundboardFavoritesExperiment;
  sortOrder = SoundboardFavoritesExperiment.useConfig({ location: "useSoundGrid" }).sortOrder;
  let obj6 = require("useSortedGuildIdsForSoundboard");
  sortedGuildIdsForSoundboard = obj6.useSortedGuildIdsForSoundboard(guild_id, false);
  let obj7 = require("get initialized");
  let items2 = [closure_6];
  const stateFromStoresArray = obj7.useStateFromStoresArray(items2, () => {
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
  let c12 = result;
  let obj9 = require("get initialized");
  const items3 = [closure_6];
  stateFromStores1 = obj9.useStateFromStores(items3, () => {
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
  const stateFromStores2 = obj10.useStateFromStores(items4, () => {
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
  const TopSoundboardSoundsMobileExperiment = require("TopSoundboardSoundsExperiment").TopSoundboardSoundsMobileExperiment;
  const config = TopSoundboardSoundsMobileExperiment.getConfig({ location: "useSoundGrid" });
  const enabled = config.enabled;
  const topSoundsFirst = config.topSoundsFirst;
  flag(flag2[19])(() => {
    const tmp = enabled;
    if (tmp) {
      let id;
      const maybeFetchTopSoundboardSoundsByGuild = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild;
      TopSoundboardSoundsActionCreators;
      if (stateFromStores3 != null) {
        id = stateFromStores3.id;
      }
      const result = maybeFetchTopSoundboardSoundsByGuild(id);
    }
  });
  let obj12 = require("get initialized");
  const items8 = [sortedGuildIdsForSoundboard];
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
  const items10 = [sortedGuildIdsForSoundboard, allSounds, tmp5, false, stateFromStores1, stateFromStores2, flag, result, stateFromStoresArray, flag2, tmp7, isPremiumResult, soundOrganizer, memo, stateFromStores3, memo1, enabled, topSoundsFirst, sortOrder];
  return allSounds.useMemo(() => {
    let arr2;
    let id;
    let obj10;
    let obj12;
    let obj15;
    let obj4;
    let result;
    let result1;
    let result2;
    let value5;
    function _addSectionForPotentialSoundIds(sectionType) {
      let obj3;
      let potentialSoundIdsForSection;
      let sections;
      ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
      sectionType = sectionType.sectionType;
      const obj = {};
      const items = [];
      const sortSoundsFn = sectionType.sortSoundsFn;
      items[HermesBuiltin.arraySpread(items, sectionType.guildIds, 0)] = stateFromStoresArray;
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
      const arr4 = stateFromStores2(items1, sortSoundsFn);
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
          let tmp9 = stateFromStores2;
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
    const tmp = flag2;
    if (tmp) {
      let value = allSounds.get(unpackModuleId);
      const obj17 = allSounds;
      const tmp54 = unpackModuleId;
      if (value == null) {
        value = closure_12;
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
      const sortSoundsOldestToNewestCreationDate4 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      result = value;
      if (null != sortSoundsOldestToNewestCreationDate4) {
        result = sortSoundsOldestToNewestCreationDate4(value);
      }
      push5(obj2);
      const obj5 = { categories: items, availableSounds: value5, isFetching, soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 } };
      value5 = obj17.get(tmp54);
      if (value5 == null) {
        value5 = closure_12;
      }
      return obj5;
    } else {
      let sortSoundsOldestToNewestCreationDate;
      let tmp14;
      let tmp2 = enabled;
      let tmp3 = enabled;
      if (tmp3) {
        let tmp4 = stateFromStores3;
        let tmp5 = null;
        tmp3 = null != stateFromStores3;
      }
      if (tmp3) {
        tmp3 = topSoundsFirst;
      }
      if (tmp3) {
        let tmp6 = addTopSoundsSection;
        let tmp7 = stateFromStores3;
        let obj = { allSounds, topSoundIds: memo1 };
        let tmp8 = allSounds;
        let tmp9 = memo1;
        let tmp10 = addTopSoundsSection(items, stateFromStores3, obj);
      }
      if ("favorite-date" === sortOrder) {
        sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate;
        tmp14 = require;
      } else {
        sortSoundsOldestToNewestCreationDate = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
        tmp14 = require;
      }
      let obj3 = allSounds;
      const _Array = Array;
      const obj6 = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds, potentialSoundIdsForSection: Array.from(channel), sectionType: tmp14(5328).SoundboardSoundGridSectionType.FAVORITES, sortSoundsFn: sortSoundsOldestToNewestCreationDate };
      _addSectionForPotentialSoundIds(obj6);
      if (tmp2) {
        tmp2 = null != stateFromStores3;
      }
      if (tmp2) {
        tmp2 = !topSoundsFirst;
      }
      if (tmp2) {
        const obj7 = { allSounds: obj3, topSoundIds: memo1 };
        addTopSoundsSection(items, stateFromStores3, obj7);
      }
      if (undefined !== stateFromStores1) {
        let tmp34 = flag;
        let value6 = obj3.get(tmp29.id);
        const tmp62 = stateFromStores2;
        if (value6 == null) {
          value6 = [];
        }
        let tmp63Result = value6;
        if (null != soundOrganizer) {
          tmp63Result = tmp63(value6);
        }
        const mapped = tmp63Result.map((sound, index) => {
          const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
          return obj;
        });
        const length = value6.length;
        const tmp14Result = tmp14(4728);
        const tmp32 = !(length < tmp14Result.getMaxSoundboardSlots(stateFromStores1) && tmp62) && 0 !== mapped.length || tmp34;
        if (!tmp32) {
          let push = mapped.push;
          const obj8 = { type: tmp14(5328).SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
          let arr = push(obj8);
        }
        if (tmp34) {
          tmp34 = tmp31;
        }
        if (!tmp34) {
          const obj9 = { categoryInfo: obj10, key: stateFromStores1.id, items: mapped };
          const push2 = items.push;
          obj10 = { type: tmp14(5328).SoundboardSoundGridSectionType.GUILD, guild: stateFromStores1, isNitroLocked: false };
          push2(obj9);
        }
      }
      if (!c12) {
        let value7 = obj3.get(unpackModuleId);
        if (value7 == null) {
          value7 = closure_12;
        }
        const push3 = items.push;
        const obj11 = {
          key: tmp14(5328).SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj12,
          items: result1.map((sound, index) => {
                const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj12 = { type: tmp14(5328).SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate2 = tmp14(16887).sortSoundsOldestToNewestCreationDate;
        result1 = value7;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result1 = sortSoundsOldestToNewestCreationDate2(value7);
        }
        push3(obj11);
      }
      const obj13 = { sections: items, guilds: stateFromStoresArray, currentGuildId: id, allSounds: obj3, hasNitro, sortSoundsFn: soundOrganizer };
      id = undefined;
      if (stateFromStores1 != null) {
        id = tmp29.id;
      }
      addGuildsSections(obj13);
      if (c12) {
        let value8 = obj3.get(unpackModuleId);
        if (value8 == null) {
          value8 = closure_12;
        }
        const push4 = items.push;
        const obj14 = {
          key: tmp14(5328).SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj15,
          items: result2.map((sound, index) => {
                const obj = { type: categories(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj15 = { type: tmp14(5328).SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate3 = tmp14(16887).sortSoundsOldestToNewestCreationDate;
        result2 = value8;
        if (null != sortSoundsOldestToNewestCreationDate3) {
          result2 = sortSoundsOldestToNewestCreationDate3(value8);
        }
        push4(obj14);
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
      const _Array2 = Array;
      const obj16 = { categories: items, availableSounds: arr2.flat(), isFetching, soundCounts: obj18 };
      arr2 = Array.from(obj3.values());
      return obj16;
    }
  }, items10);
};
export const useSearchCategories = function useSearchCategories(categories, arg1, arg2) {
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
};

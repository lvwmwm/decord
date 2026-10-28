// Module ID: 18806
// Function ID: 18807
// Name: useSoundGrid
// Dependencies: [32, 19, 4856, 4878, 4936, 4907, 1389, 6042, 6044, 1391, 7481, 8399, 18807, 558, 576, 504, 2050, 18808, 8978, 18809, 5299, 2]

// Module 18806 (useSoundGrid)
import react2 from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import SoundboardTypes from "SoundboardTypes" /* 7481 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8399 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 8978 */;
import useSoundOrganizer from "useSoundOrganizer" /* 18807 */;
import TopSoundboardSoundsActionCreators from "TopSoundboardSoundsActionCreators" /* 18809 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import UserStore from "UserStore" /* 1389 */;
import SoundboardStore from "SoundboardStore" /* 6042 */;
import SoundboardConstants from "SoundboardConstants" /* 6044 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, importDefault, lockedCustomSoundCount;

let closure_12;
let unpackModuleId;
function createSoundItems(items, sortSoundsFn) {
  let arr = items;
  if (null != sortSoundsFn) {
    arr = sortSoundsFn(items);
  }
  return arr.map((sound, index) => {
    const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
}
function _addSectionForPotentialSoundIds(sectionType) {
  let allSounds;
  let obj3;
  let potentialSoundIdsForSection;
  let sections;
  ({ sections, allSounds, potentialSoundIdsForSection } = sectionType);
  sectionType = sectionType.sectionType;
  const obj = {};
  const items = [];
  const sortSoundsFn = sectionType.sortSoundsFn;
  items[HermesBuiltin.arraySpread(items, sectionType.guildIds, 0)] = unpackModuleId;
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
  const arr4 = createSoundItems(items1, sortSoundsFn);
  if (arr4.length > 0) {
    const obj2 = { key: sectionType, categoryInfo: obj3, items: arr4 };
    obj3 = { type: sectionType };
    sections.push(obj2);
  }
}
function addTopSoundsSection(items, id, arg2) {
  let allSounds;
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
    const obj2 = { key: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, categoryInfo: obj3, items: createSoundItems(items) };
    obj3 = { type: SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS, guild: id };
    push(obj2);
  }
}
function addGuildsSections(arg0) {
  let allSounds;
  let currentGuildId;
  let guilds;
  let hasNitro;
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
      let tmp9 = createSoundItems;
      let items = allSounds.get(tmp2.id);
      if (items == null) {
        items = [];
      }
      let tmp9Result = tmp9(items, sortSoundsFn);
      if (tmp9Result.length > 0) {
        let obj = { categoryInfo: obj2, key: tmp2.id, items: tmp3 };
        obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: tmp2, isNitroLocked: !hasNitro };
        let push = sections.push;
        let arr = push(obj);
      }
    }
    continue;
  }
}
function addCurrentGuildSection(items, stateFromStores1, arg2) {
  let allSounds;
  let currentGuildHasAddPermissions;
  let filterOutEmptyCurrentGuild;
  let obj4;
  let sortSoundsFn;
  ({ allSounds, filterOutEmptyCurrentGuild, sortSoundsFn, currentGuildHasAddPermissions } = arg2);
  items = allSounds.get(stateFromStores1.id);
  if (items == null) {
    items = [];
  }
  let sortSoundsFnResult = items;
  if (null != sortSoundsFn) {
    sortSoundsFnResult = sortSoundsFn(items);
  }
  const mapped = sortSoundsFnResult.map((sound, index) => {
    const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
    return obj;
  });
  const length = items.length;
  const obj = GuildBoostingUtils;
  const tmp5 = !(length < obj.getMaxSoundboardSlots(stateFromStores1) && currentGuildHasAddPermissions) && 0 !== mapped.length || filterOutEmptyCurrentGuild;
  if (!tmp5) {
    const push = mapped.push;
    const obj2 = { type: SoundboardTypes.SoundboardSoundItemType.ADD_SOUND, guild: stateFromStores1 };
    push(obj2);
  }
  if (filterOutEmptyCurrentGuild) {
    filterOutEmptyCurrentGuild = tmp4;
  }
  if (!filterOutEmptyCurrentGuild) {
    const obj3 = { categoryInfo: obj4, key: stateFromStores1.id, items: mapped };
    const push2 = items.push;
    obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.GUILD, guild: stateFromStores1, isNitroLocked: false };
    push2(obj3);
  }
}
let _slicedToArray = _slicedToArray_mod;
({ DEFAULT_SOUND_GUILD_ID: unpackModuleId, EMPTY_SOUND_LIST: closure_12 } = SoundboardConstants);
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSoundGrid(arg0, arg1, arg2) {
  let currentUser;
  let guild;
  let obj5;
  let sortedGuildIdsForSoundboard;
  let stateFromStores1;
  let substr1;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp24;
  let tmp26;
  let tmp30;
  let tmp32;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp39;
  let tmp4;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(61);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const filterOutEmptyCurrentGuild = tmp4.filterOutEmptyCurrentGuild;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = items;
    cResult[3] = G;
    tmp8 = G;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(sortedGuildIdsForSoundboard[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[4] !== stateFromStores) {
    require("PremiumUtils");
    class G {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp15;
    tmp11 = tmp15;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SoundboardStore];
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[6] = items1;
    cResult[7] = O;
    tmp17 = O;
    tmp16 = items1;
  } else {
    tmp16 = cResult[6];
    tmp17 = cResult[7];
  }
  const tmpResult9 = tmp(sortedGuildIdsForSoundboard[15]);
  const tmp19 = stateFromStores1(tmpResult9.useStateFromStoresArray(tmp16, tmp17), 4);
  [obj5, tmp20] = tmp19;
  importDefault = tmp20;
  const tmpResult10 = tmp(sortedGuildIdsForSoundboard[12]);
  const soundOrganizer = tmpResult10.useSoundOrganizer();
  const tmpResult11 = tmp(sortedGuildIdsForSoundboard[17]);
  sortedGuildIdsForSoundboard = tmpResult11.useSortedGuildIdsForSoundboard(arg0, false);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [guild];
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[8] = items2;
    tmp24 = items2;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] !== sortedGuildIdsForSoundboard) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
    cResult[9] = sortedGuildIdsForSoundboard;
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[10] = N;
    tmp26 = N;
  } else {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  const tmpResult12 = tmp(sortedGuildIdsForSoundboard[15]);
  const stateFromStoresArray = tmpResult12.useStateFromStoresArray(tmp24, tmp26);
  if (cResult[11] !== stateFromStores) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
    const obj9 = require("PremiumUtils");
    let result = obj9.canUseSoundboardEverywhere(stateFromStores);
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[11] = stateFromStores;
    cResult[12] = result;
  } else {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
    const items3 = [guild];
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[13] = items3;
    tmp30 = items3;
  } else {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  const tmp31 = cResult[14];
  if (arg0 != null) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  if (tmp31 !== undefined) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
    if (arg0 != null) {
      class N {
        constructor() {
          items = [];
          closure_0 = items;
          item = closure_2.forEach((item) => {
            guild = guild.getGuild(item);
            if (null != guild) {
              items.push(guild);
            }
          });
          return items;
        }
      }
    }
    const fn = function j() {
      guild_id = undefined;
      const getGuild = GuildStore.getGuild;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      return getGuild(guild_id);
    };
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[14] = tmp33;
    cResult[15] = fn;
    tmp32 = fn;
  } else {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  const tmpResult13 = tmp(sortedGuildIdsForSoundboard[15]);
  stateFromStores1 = tmpResult13.useStateFromStores(tmp30, tmp32);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
    const items4 = [PermissionStore];
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[16] = items4;
    tmp35 = items4;
  } else {
    class N {
      constructor() {
        items = [];
        closure_0 = items;
        item = closure_2.forEach((item) => {
          guild = guild.getGuild(item);
          if (null != guild) {
            items.push(guild);
          }
        });
        return items;
      }
    }
  }
  if (cResult[17] !== stateFromStores1) {
    class K {
      constructor() {
        const obj = useManageResourcePermissions;
        return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
      }
    }
    const items5 = [stateFromStores1];
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[17] = stateFromStores1;
    cResult[18] = K;
    cResult[19] = items5;
    tmp37 = items5;
    tmp36 = K;
  } else {
    class K {
      constructor() {
        const obj = useManageResourcePermissions;
        return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
      }
    }
    tmp37 = cResult[19];
  }
  const tmpResult14 = tmp(sortedGuildIdsForSoundboard[15]);
  const stateFromStores2 = tmpResult14.useStateFromStores(tmp35, tmp36, tmp37);
  if (cResult[20] === tmp20) {
    let tmp47;
    let tmp51;
    let tmp54;
    let tmp56;
    class K {
      constructor() {
        const obj = useManageResourcePermissions;
        return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
      }
    }
    const _Symbol = Symbol;
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    const tmpResult15 = tmp(sortedGuildIdsForSoundboard[15]);
    const stateFromStores3 = tmpResult15.useStateFromStores(tmp42, tmp43);
    const tmp45 = cResult[27];
    if (stateFromStores3 != null) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    if (tmp45 !== undefined) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      if (stateFromStores3 != null) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      function ne() {
        let id;
        const maybeFetchTopSoundboardSoundsByGuild = TopSoundboardSoundsActionCreators.maybeFetchTopSoundboardSoundsByGuild;
        TopSoundboardSoundsActionCreators;
        if (stateFromStores3 != null) {
          id = stateFromStores3.id;
        }
        const result = maybeFetchTopSoundboardSoundsByGuild(id);
      }
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      cResult[27] = tmp48;
      cResult[28] = ne;
      tmp47 = ne;
    } else {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    require("useMountEffect")(tmp47);
    const _Symbol2 = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      const items6 = [SoundboardStore];
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      cResult[29] = items6;
      tmp51 = items6;
    } else {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    const tmp52 = cResult[30];
    if (stateFromStores3 != null) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    if (tmp52 !== undefined) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      if (stateFromStores3 != null) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      function re() {
        let id;
        const getTopSoundboardSoundIds = SoundboardStore.getTopSoundboardSoundIds;
        if (stateFromStores3 != null) {
          id = stateFromStores3.id;
        }
        return getTopSoundboardSoundIds(id);
      }
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      cResult[30] = tmp55;
      cResult[31] = re;
      tmp54 = re;
    } else {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    const tmpResult16 = tmp(sortedGuildIdsForSoundboard[15]);
    const stateFromStoresArray1 = tmpResult16.useStateFromStoresArray(tmp51, tmp54);
    if (cResult[32] !== stateFromStoresArray1) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      const substr = stateFromStoresArray1.slice(0, 3);
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      cResult[32] = stateFromStoresArray1;
      cResult[33] = substr;
      tmp56 = substr;
    } else {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    if (cResult[34] === obj5) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
    }
    let channel = 0;
    guild = 0;
    const items7 = [];
    if (undefined !== arg2 && arg2) {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      const value = obj5.get(closure_11);
      if (value == null) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      const push3 = items7.push;
      tmp81[0] = tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS;
      tmp81[1] = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
      const arr14 = value;
      const obj3 = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
      if (null != tmp(sortedGuildIdsForSoundboard[12]).sortSoundsOldestToNewestCreationDate) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      tmp81[2] = arr14.map((sound, index) => {
        const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
        return obj;
      });
      push3(tmp81);
      const value4 = obj5.get(tmp79);
      if (value4 == null) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
    } else {
      class K {
        constructor() {
          const obj = useManageResourcePermissions;
          return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
        }
      }
      const obj6 = { sections: null, guildIds: sortedGuildIdsForSoundboard, allSounds: obj5, potentialSoundIdsForSection: Array.from(tmp20), sectionType: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.FAVORITES, sortSoundsFn: tmp(sortedGuildIdsForSoundboard[12]).sortSoundsOldestToNewestFavoriteDate };
      class O {
        constructor() {
          const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
          return items;
        }
      }
      const _Array = Array;
      _addSectionForPotentialSoundIds(obj6);
      if (undefined !== stateFromStores1) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        const obj7 = { currentGuildHasAddPermissions: stateFromStores2, allSounds: null, filterOutEmptyCurrentGuild: undefined !== filterOutEmptyCurrentGuild && filterOutEmptyCurrentGuild, sortSoundsFn: soundOrganizer };
        class O {
          constructor() {
            const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
            return items;
          }
        }
        addCurrentGuildSection(items7, stateFromStores1, obj7);
      }
      if (!tmp28) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        const value5 = obj5.get(closure_11);
        if (value5 == null) {
          class K {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        class O {
          constructor() {
            const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
            return items;
          }
        }
        const push = items7.push;
        tmp63[0] = tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS;
        tmp63[1] = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
        const arr12 = value5;
        const obj8 = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
        if (null != tmp(sortedGuildIdsForSoundboard[12]).sortSoundsOldestToNewestCreationDate) {
          class K {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        tmp63[2] = arr12.map((sound, index) => {
          const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
          return obj;
        });
        push(tmp63);
      }
      const obj10 = { sections: items7, guilds: stateFromStoresArray, currentGuildId: undefined, allSounds: obj5, hasNitro: tmp11, sortSoundsFn: soundOrganizer };
      const tmp65 = addGuildsSections;
      if (stateFromStores1 != null) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      tmp65(obj10);
      if (tmp28) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        const value6 = obj5.get(closure_11);
        if (value6 == null) {
          class K {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        class O {
          constructor() {
            const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
            return items;
          }
        }
        const push2 = items7.push;
        tmp69[0] = tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS;
        tmp69[1] = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
        const arr13 = value6;
        const obj11 = { type: tmp(sortedGuildIdsForSoundboard[10]).SoundboardSoundGridSectionType.DEFAULTS };
        if (null != tmp(sortedGuildIdsForSoundboard[12]).sortSoundsOldestToNewestCreationDate) {
          class K {
            constructor() {
              const obj = useManageResourcePermissions;
              return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
            }
          }
        }
        tmp69[2] = arr13.map((sound, index) => {
          const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
          return obj;
        });
        push2(tmp69);
      }
      let item = items7.forEach((categoryInfo) => {
        if (categoryInfo.categoryInfo.type === SoundboardTypes.SoundboardSoundGridSectionType.GUILD) {
          if (categoryInfo.categoryInfo.isNitroLocked) {
            closure_6 = closure_6 + categoryInfo.items.length;
          } else {
            closure_5 = closure_5 + categoryInfo.items.length;
          }
        }
      });
      if (cResult[50] !== obj5) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
        Array.from(obj5.values());
        class O {
          constructor() {
            const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
            return items;
          }
        }
        cResult[50] = obj5;
        cResult[51] = tmp74;
      } else {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      if (cResult[52] === tmp20.size) {
        class K {
          constructor() {
            const obj = useManageResourcePermissions;
            return obj.getManageResourcePermissions(stateFromStores1).canCreateExpressions;
          }
        }
      }
      const obj12 = { favoriteSoundCount: tmp20.size, unlockedCustomSoundCount: channel, lockedCustomSoundCount: guild };
      cResult[52] = tmp20.size;
      cResult[53] = channel;
      cResult[54] = guild;
      cResult[55] = obj12;
    }
    cResult[34] = obj5;
    cResult[35] = tmp28;
    cResult[36] = stateFromStores1;
    cResult[37] = stateFromStores2;
    cResult[38] = undefined !== arg2 && arg2;
    cResult[39] = tmp20;
    cResult[40] = undefined !== filterOutEmptyCurrentGuild && filterOutEmptyCurrentGuild;
    cResult[41] = substr1;
    cResult[42] = sortedGuildIdsForSoundboard;
    cResult[43] = stateFromStoresArray;
    cResult[44] = tmp11;
    cResult[45] = tmp19[3];
    cResult[46] = soundOrganizer;
    cResult[47] = tmp56;
    cResult[48] = stateFromStores3;
    cResult[49] = tmp78;
  }
  if (cResult[23] !== tmp20) {
    class Z {
      constructor(arg0) {
        return !importDefault.has(arg0);
      }
    }
    cResult[23] = tmp20;
    class O {
      constructor() {
        const items = [SoundboardStore.getSounds(), SoundboardStore.getFavorites(), SoundboardStore.getFrequentlyUsedSoundIds(), SoundboardStore.isFetching()];
        return items;
      }
    }
    cResult[24] = Z;
    tmp39 = Z;
  } else {
    class Z {
      constructor(arg0) {
        return !importDefault.has(arg0);
      }
    }
  }
  const found = arr3.filter(tmp39);
  substr1 = found.slice(0, 3);
  cResult[20] = tmp20;
  cResult[21] = tmp19[2];
  cResult[22] = substr1;
}) : (function useSoundGrid(unlockedCustomSoundCount) {
  let allSounds;
  let hasNitro;
  let tmp5;
  let tmp6;
  let tmp7;
  _require = unlockedCustomSoundCount;
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
  const obj3 = flag(flag2[16]);
  const isPremiumResult = obj3.isPremium(stateFromStores, stateFromStores2.TIER_2);
  _slicedToArray = isPremiumResult;
  let obj4 = require("get initialized");
  const items1 = [stateFromStoresArray];
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
  sortedGuildIdsForSoundboard = obj6.useSortedGuildIdsForSoundboard(unlockedCustomSoundCount, false);
  let obj7 = require("get initialized");
  const items2 = [closure_6];
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
  let obj8 = flag(flag2[16]);
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
  flag(flag2[20])(() => {
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
    let obj12;
    let obj14;
    let obj15;
    let obj4;
    let obj9;
    let result;
    let result1;
    let result2;
    let value4;
    unlockedCustomSoundCount = 0;
    lockedCustomSoundCount = 0;
    const items = [];
    const tmp = flag2;
    if (tmp) {
      let value = allSounds.get(unpackModuleId);
      const obj13 = allSounds;
      const tmp38 = unpackModuleId;
      if (value == null) {
        value = authStore2;
      }
      const push3 = items.push;
      const obj2 = {
        key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS,
        categoryInfo: obj4,
        items: result.map((sound, index) => {
            const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          })
      };
      obj4 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
      const sortSoundsOldestToNewestCreationDate3 = useSoundOrganizer.sortSoundsOldestToNewestCreationDate;
      result = value;
      if (null != sortSoundsOldestToNewestCreationDate3) {
        result = sortSoundsOldestToNewestCreationDate3(value);
      }
      push3(obj2);
      const obj5 = { categories: items, availableSounds: value4, isFetching, soundCounts: { favoriteSoundCount: 0, unlockedCustomSoundCount: 0, lockedCustomSoundCount: 0 } };
      value4 = obj13.get(tmp38);
      if (value4 == null) {
        value4 = authStore2;
      }
      obj14 = obj5;
    } else {
      if (null != stateFromStores3) {
        const obj = { allSounds, topSoundIds: memo1 };
        addTopSoundsSection(items, tmp2, obj);
      }
      const _Array = Array;
      const obj6 = { sections: items, guildIds: sortedGuildIdsForSoundboard, allSounds, potentialSoundIdsForSection: Array.from(channel), sectionType: SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES, sortSoundsFn: useSoundOrganizer.sortSoundsOldestToNewestFavoriteDate };
      _addSectionForPotentialSoundIds(obj6);
      const tmp11 = channel;
      if (undefined !== stateFromStores1) {
        const obj7 = { currentGuildHasAddPermissions: stateFromStores2, allSounds, filterOutEmptyCurrentGuild: flag, sortSoundsFn: soundOrganizer };
        addCurrentGuildSection(items, stateFromStores1, obj7);
      }
      if (!c11) {
        let value5 = obj3.get(unpackModuleId);
        if (value5 == null) {
          value5 = authStore2;
        }
        const push = items.push;
        const obj8 = {
          key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj9,
          items: result1.map((sound, index) => {
                const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj9 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate = tmp12(18807).sortSoundsOldestToNewestCreationDate;
        result1 = value5;
        if (null != sortSoundsOldestToNewestCreationDate) {
          result1 = sortSoundsOldestToNewestCreationDate(value5);
        }
        push(obj8);
      }
      const obj10 = { sections: items, guilds: stateFromStoresArray, currentGuildId: id, allSounds, hasNitro, sortSoundsFn: soundOrganizer };
      id = undefined;
      const tmp25 = addGuildsSections;
      if (stateFromStores1 != null) {
        id = tmp15.id;
      }
      tmp25(obj10);
      if (c11) {
        let value6 = obj3.get(unpackModuleId);
        if (value6 == null) {
          value6 = authStore2;
        }
        const push2 = items.push;
        const obj11 = {
          key: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS,
          categoryInfo: obj12,
          items: result2.map((sound, index) => {
                const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
                return obj;
              })
        };
        obj12 = { type: SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS };
        const sortSoundsOldestToNewestCreationDate2 = tmp12(18807).sortSoundsOldestToNewestCreationDate;
        result2 = value6;
        if (null != sortSoundsOldestToNewestCreationDate2) {
          result2 = sortSoundsOldestToNewestCreationDate2(value6);
        }
        push2(obj11);
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
      obj14 = { categories: items, availableSounds: arr2.flat(), isFetching, soundCounts: obj15 };
      const _Array2 = Array;
      arr2 = Array.from(allSounds.values());
      obj15 = { favoriteSoundCount: tmp11.size, unlockedCustomSoundCount, lockedCustomSoundCount };
    }
    return obj14;
  }, items10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSearchCategories(arg0, arr, arg2) {
  let tmp = arg0;
  const obj = react2;
  const cResult = obj.c(5);
  if (arg2.length > 0) {
    let first;
    let tmp7;
    let tmp9;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
      cResult[0] = obj2;
      first = obj2;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== arr) {
      const mapped = arr.map((sound, index) => {
        const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
        return obj;
      });
      cResult[1] = arr;
      cResult[2] = mapped;
      tmp7 = mapped;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp7) {
      const items = [{ key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: first, items: tmp7 }];
      cResult[3] = tmp7;
      cResult[4] = items;
      tmp9 = items;
      const obj3 = { key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH, categoryInfo: first, items: tmp7 };
    } else {
      tmp9 = cResult[4];
    }
    tmp = tmp9;
  }
  return tmp;
}) : (function useSearchCategories(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const length = arg2;
  let items = [arg0, arg2.length, arg1];
  return react.useMemo(() => {
    let obj2;
    let tmp;
    if (length.length > 0) {
      let obj = {
        key: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH,
        categoryInfo: obj2,
        items: closure_1.map((sound, index) => {
            const obj = { type: closure_1_0(length[10]).SoundboardSoundItemType.SOUND, sound, index };
            return obj;
          })
      };
      const items = [obj];
      tmp = items;
      obj2 = { type: SoundboardTypes.SoundboardSoundGridSectionType.SEARCH };
    } else {
      tmp = closure_0;
    }
    return tmp;
  }, items);
});
let result = size.fileFinishedImporting("modules/soundboard/useSoundGrid.tsx");

export default tmp3;
export const useSearchCategories = tmp4;

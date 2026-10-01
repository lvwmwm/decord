// Module ID: 9848
// Function ID: 9849
// Name: StickersHooks
// Dependencies: [5, 32, 19, 2067, 4655, 5750, 1372, 5813, 5814, 1074, 504, 9849, 2021, 5198, 8952, 5581, 4728, 1115, 4474, 9832, 6755, 2]
// Exports: useFavoriteStickerIds, useFavoriteStickers, useFetchStickerPack, useFetchStickerPacks, useFilteredStickerPackCategories, useHasSendableSticker, useLatestFrecentStickerIds, useLatestFrecentStickers, useShouldAnimateSticker, useStickerForRenderableSticker, useStickersGrid

// Module 9848 (StickersHooks)
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import StickersTypes from "StickersTypes" /* 5581 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 9832 */;
import StickersActionCreators from "StickersActionCreators" /* 9849 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;
import StickersPersistedStore from "StickersPersistedStore" /* 5813 */;
import StickersStore from "StickersStore" /* 5814 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, dependencyMap, flattenedGuildIds, rowCount, rowIndex, visibleRowIndex;

const f89515 = () => {
  const obj = pack_id(dependencyMap[11]);
  const stickerPacks = obj.fetchStickerPacks();
};
function useStickerPackCategories(channel) {
  let memo;
  let packs;
  _require = channel;
  let tmp = _require;
  let tmp2 = packs;
  let obj = require("FrecencyUserSettingsHooks");
  const favoriteStickers = obj.useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  let tmpResult = tmp(tmp2[10]);
  let items = [StickersStore];
  const items1 = [stickerIds];
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = stickerIds.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        const obj = stickerIds(closure_1_2[13]);
        const isGuildStickerResult = obj.isGuildSticker(item);
        let result = !isGuildStickerResult;
        const tmp2 = stickerIds;
        const tmp3 = closure_1_2;
        if (isGuildStickerResult) {
          const tmp2Result = tmp2(tmp3[13]);
          result = tmp2Result.isAvailableGuildSticker(item);
        }
        tmp = result;
      }
      return tmp;
    });
  }, items1);
  const items2 = [StickersStore, StickersPersistedStore];
  const tmpResult6 = tmp(tmp2[10]);
  const stateFromStoresObject = tmpResult6.useStateFromStoresObject(items2, () => {
    const obj = { packs: StickersStore.getPremiumPacks(), frequentlyUsedStickers: StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently };
    return obj;
  }, []);
  packs = stateFromStoresObject.packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  const items3 = [UserStore];
  const tmpResult7 = tmp(tmp2[10]);
  const stateFromStores = tmpResult7.useStateFromStores(items3, () => authStore.getCurrentUser());
  _require = channel;
  const items4 = [StickersStore];
  const tmpResult8 = tmp(tmp2[10]);
  const stateFromStores1 = tmpResult8.useStateFromStores(items4, () => StickersStore.getAllGuildStickers());
  const items5 = [SortedGuildStore, GuildStore];
  const tmpResult9 = tmp(tmp2[10]);
  const stateFromStoresArray1 = tmpResult9.useStateFromStoresArray(items5, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      const guild = GuildStore.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  }, []);
  const items6 = [UserStore];
  const tmpResult10 = tmp(tmp2[10]);
  const stateFromStores2 = tmpResult10.useStateFromStores(items6, () => authStore.getCurrentUser());
  const items7 = [stateFromStores1, stateFromStoresArray1, stateFromStores2, channel];
  memo = memo.useMemo(() => {
    let guildId;
    let id;
    let name;
    const items = [];
    const iter = stateFromStoresArray1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ name, id } = nextResult);
      let tmp3 = id;
      let value = stateFromStores1.get(id);
      let arr2 = value;
      let tmp6 = null != value;
      if (tmp6) {
        tmp6 = 0 !== arr2.length;
      }
      if (tmp6) {
        let obj = { type: guildId(packs[15]).StickerCategoryTypes.GUILD, id: tmp3, name, stickers: arr2 };
        let push = items.push;
        let arr = push(obj);
      }
      continue;
    }
    guildId = undefined;
    if (guildId != null) {
      guildId = obj2.getGuildId();
    }
    if (null != guildId) {
      const guild = GuildStore.getGuild(obj2.getGuildId());
      const obj6 = guildId(packs[14]);
      const canManageAllExpressions = obj6.getManageResourcePermissions(guild).canManageAllExpressions;
      const findIndexResult = items.findIndex((id) => id.id === guildId.getGuildId());
      if (findIndexResult >= 1) {
        items.unshift(items.splice(findIndexResult, 1)[0]);
      } else {
        const tmp15 = -1 === findIndexResult && null != guild && canManageAllExpressions;
        if (tmp15) {
          const unshift = items.unshift;
          ({ id: obj3.id, name: obj3.name } = guild);
          const obj5 = { type: guildId(packs[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL, id: null, name: null, stickers: [] };
          unshift(obj5);
        }
      }
      if (null != stateFromStores2) {
        const obj8 = { permission: constants.USE_EXTERNAL_EMOJIS, user: tmp20, context: guildId };
        const obj4 = stateFromStoresArray(packs[18]);
        obj4.can(obj8);
      }
    }
    return items;
  }, items7);
  const items8 = [packs, stateFromStoresArray, frequentlyUsedStickers, memo, stateFromStores, channel];
  return memo.useMemo(() => {
    let found;
    let intl;
    let intl2;
    const mapped = packs.map(StickersUtils.createStickerPackCategory);
    let obj = { type: StickersTypes.StickerCategoryTypes.FAVORITE, id: StickersTypes.StickerCategoryTypes.FAVORITE, name: intl.string(intl3.t.y3LQCG), stickers: stateFromStoresArray };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { type: StickersTypes.StickerCategoryTypes.RECENT, id: StickersTypes.StickerCategoryTypes.RECENT, name: intl2.string(intl3.t["6hjpXW"]), stickers: found };
    intl2 = intl3.intl;
    found = undefined;
    const arr2 = frequentlyUsedStickers;
    if (frequentlyUsedStickers != null) {
      found = arr2.filter((guild_id) => {
        let someResult;
        let closure_0 = guild_id;
        const obj = closure_0(packs[13]);
        if (obj.isGuildSticker(guild_id)) {
          const stickersByGuildId = StickersStore.getStickersByGuildId(guild_id.guild_id);
          let flag;
          if (stickersByGuildId != null) {
            flag = stickersByGuildId.some((id) => id.id === closure_0.id);
          }
          if (flag == null) {
            flag = false;
          }
          if (flag) {
            const tmpResult = closure_0(packs[20]);
            const stickerSendability = tmpResult.getStickerSendability(guild_id, stateFromStores, channel);
            flag = stickerSendability !== tmp(tmp2[20]).StickerSendability.NONSENDABLE;
          }
          someResult = flag;
        } else {
          const tmpResult2 = closure_0(packs[13]);
          if (tmpResult2.isStandardSticker(guild_id)) {
            someResult = closure_1_2.some((id) => id.id === closure_0.pack_id);
          }
        }
        return someResult;
      });
    }
    if (found == null) {
      found = [];
    }
    items[1] = obj2;
    HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, memo, 2));
    return items;
  }, items8);
}
let react = react_mod;
const Permissions = Constants.Permissions;
let closure_13 = [];
let result = size.fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = function useFetchStickerPack(pack_id) {
  _require = pack_id;
  const effect = react.useEffect(f89515, []);
  let obj = require("get initialized");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const items1 = [pack_id, stateFromStores];
  const effect1 = react.useEffect(() => {
    const tmp = stateFromStores && null == StickersStore.getStickerPack(pack_id);
    if (tmp) {
      const obj = StickersActionCreators;
      const stickerPack = obj.fetchStickerPack(pack_id);
    }
  }, items1);
};
export const useShouldAnimateSticker = function useShouldAnimateSticker(isFocused) {
  const AnimateStickers = UserSettings.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  const obj = StickersUtils;
  return obj.shouldAnimateSticker(setting, isFocused);
};
export const useStickersGrid = function useStickersGrid(collapsedStickersCategories) {
  collapsedStickersCategories = collapsedStickersCategories.collapsedStickersCategories;
  const filteredStickers = collapsedStickersCategories.filteredStickers;
  let num = collapsedStickersCategories.listPaddingRight;
  if (num === undefined) {
    num = 0;
  }
  let num2 = collapsedStickersCategories.listWidth;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = collapsedStickersCategories.stickerNodeMargin;
  if (num3 === undefined) {
    num3 = 0;
  }
  const stickerNodeWidth = collapsedStickersCategories.stickerNodeWidth;
  let stickersCategories = collapsedStickersCategories.stickersCategories;
  let items = [collapsedStickersCategories, filteredStickers, num, num2, num3, stickerNodeWidth, stickersCategories];
  return stickerNodeWidth.useMemo(() => {
    let gridSectionIndex;
    let items1;
    let items2;
    let stickers;
    let type;
    let rounded = Math.floor((items2 - items1 + rowCount) / (gridSectionIndex + rowCount));
    const items = [];
    items1 = [];
    items2 = [];
    rowCount = 0;
    gridSectionIndex = 0;
    stickersCategories = 0;
    const rounded1 = Math.floor(Math.max(rowCount, (items2 - items1 - gridSectionIndex * rounded) / (rounded - 1)));
    if (0 !== items2) {
      function addGridSection(sendable, SEARCH_RESULTS, arg2) {
        let intl;
        const category = SEARCH_RESULTS;
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        let obj = collapsedStickersCategories(num[13]);
        let guild;
        if (obj.isGuildSticker(sendable[0])) {
          guild = stickersCategories.getGuild(sendable[0].guild_id);
        }
        const tmpResult = collapsedStickersCategories(num[14]);
        const canCreateExpressions = tmpResult.getManageResourcePermissions(guild).canCreateExpressions;
        guildId = guildId.getGuildId();
        let tmp8 = null != guild;
        const findIndexResult = visibleRowIndex.findIndex((type) => type.type === category(items1[15]).StickerCategoryTypes.FAVORITE);
        const findIndexResult1 = visibleRowIndex.findIndex((type) => type.type === category(items1[15]).StickerCategoryTypes.RECENT);
        if (tmp8) {
          tmp8 = guildId === guild.id;
        }
        if (tmp8) {
          tmp8 = canCreateExpressions;
        }
        if (tmp8) {
          const length2 = sendable.length;
          const tmpResult2 = collapsedStickersCategories(num[16]);
          tmp8 = length2 < tmpResult2.getTotalStickerCountForTier(guild.premiumTier);
        }
        let sum = length;
        if (tmp8) {
          sum = length + 1;
        }
        rounded = Math.ceil(sum / category);
        num = 0;
        const tmp11 = items1;
        const tmp12 = gridSectionIndex;
        if (!flag) {
          num = rounded;
        }
        tmp11[tmp12] = num;
        for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
          let result = num2 * category;
          let substr = sendable.slice(result, result + category);
          let mapped = substr.map((sticker, columnIndex) => {
            let str;
            const obj = { type: StickersTypes.StickerGridItemTypes.STICKER, sticker, packId: str, gridSectionIndex, rowIndex, columnIndex, visibleRowIndex, category };
            str = "TODO - fix";
            const obj2 = StickersUtils;
            if (obj2.isStandardSticker(sticker)) {
              str = sticker.pack_id;
            }
            return obj;
          });
          let tmp16 = gridSectionIndex > findIndexResult1;
          if (tmp16) {
            tmp16 = gridSectionIndex > findIndexResult;
          }
          if (tmp16) {
            tmp16 = null != guild;
          }
          if (tmp16) {
            tmp16 = sum > sendable.length;
          }
          if (tmp16) {
            let obj2 = { type: collapsedStickersCategories(num[15]).StickerGridItemTypes.CREATE_STICKER, guild_id: guild.id, name: intl.string(collapsedStickersCategories(num[17]).t["UwF+Cw"]), gridSectionIndex, rowIndex, columnIndex: mapped.length, visibleRowIndex };
            let push = mapped.push;
            intl = collapsedStickersCategories(num[17]).intl;
            let arr = push(obj2);
          }
          if (!flag) {
            visibleRowIndex = visibleRowIndex + 1;
            let arr2 = items2.push(mapped);
            let arr5 = items.push(mapped.length);
          }
          rowIndex = rowIndex + 1;
        }
        gridSectionIndex = gridSectionIndex + 1;
      }
      let tmp22 = items;
      let tmp23 = null;
      if (null == items) {
        const iter = stickersCategories[Symbol.iterator]();
        let flag = true;
        let tmp8 = stickersCategories;
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp11 = nextResult;
          if (nextResult.stickers.length > 0) {
            let tmp17 = rowCount;
            rowCount = rowCount + 1;
            let tmp18 = nextResult;
            let obj = rounded;
            let hasItem;
            ({ stickers, type } = tmp11);
            if (rounded != null) {
              let tmp20 = nextResult;
              hasItem = obj.has(tmp11.id);
            }
            let addGridSectionResult = addGridSection(stickers, type, true === hasItem);
          } else {
            let tmp12 = nextResult;
            let tmp13 = collapsedStickersCategories;
            if (tmp11.type === collapsedStickersCategories(num[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
              let tmp15 = gridSectionIndex;
              items1[gridSectionIndex] = 0;
              let tmp16 = gridSectionIndex;
              gridSectionIndex = gridSectionIndex + 1;
            }
          }
          continue;
        }
      } else {
        if (tmp22.sendable.length > 0) {
          addGridSection(tmp22.sendable, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (tmp22.sendableWithPremium.length > 0) {
          let tmp25 = num;
          addGridSection(tmp22.sendableWithPremium, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
      }
    }
    let obj2 = { rowCount, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
    return obj2;
  }, items);
};
export function useHasSendableSticker() {
  return true;
}
export const useFetchStickerPacks = function useFetchStickerPacks() {
  const effect = react.useEffect(f89515, []);
};
export const useFavoriteStickerIds = function useFavoriteStickerIds() {
  const obj = FrecencyUserSettingsHooks;
  const favoriteStickers = obj.useFrecencySettings().favoriteStickers;
  let stickerIds;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  return stickerIds;
};
export const useFavoriteStickers = function useFavoriteStickers() {
  let stickerIds;
  const obj = stickerIds(9832);
  const favoriteStickers = obj.useFrecencySettings().favoriteStickers;
  const tmp = stickerIds;
  stickerIds = undefined;
  if (favoriteStickers != null) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (stickerIds == null) {
    stickerIds = closure_13;
  }
  const items = [StickersStore];
  const items1 = [stickerIds];
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = stickerIds.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => {
      let tmp = null != item;
      if (tmp) {
        const obj = stickerIds(closure_1_2[13]);
        const isGuildStickerResult = obj.isGuildSticker(item);
        let result = !isGuildStickerResult;
        const tmp2 = stickerIds;
        const tmp3 = closure_1_2;
        if (isGuildStickerResult) {
          const tmp2Result = tmp2(tmp3[13]);
          result = tmp2Result.isAvailableGuildSticker(item);
        }
        tmp = result;
      }
      return tmp;
    });
  }, items1);
};
export const useLatestFrecentStickerIds = function useLatestFrecentStickerIds() {
  const obj = FrecencyUserSettingsHooks;
  const frecencySettings = obj.useFrecencySettings();
  let keys1 = closure_13;
  let stickers;
  if (frecencySettings != null) {
    const stickerFrecency = frecencySettings.stickerFrecency;
    if (stickerFrecency != null) {
      stickers = stickerFrecency.stickers;
    }
  }
  if (null != stickers) {
    let stickers1;
    const _Object = Object;
    if (frecencySettings != null) {
      const stickerFrecency2 = frecencySettings.stickerFrecency;
      if (stickerFrecency2 != null) {
        stickers1 = stickerFrecency2.stickers;
      }
    }
    keys1 = keys(stickers1);
  }
  return keys1;
};
export const useLatestFrecentStickers = function useLatestFrecentStickers() {
  let keys1;
  const obj = keys1(9832);
  const frecencySettings = obj.useFrecencySettings();
  const tmp = keys1;
  keys1 = closure_13;
  let stickers;
  if (frecencySettings != null) {
    const stickerFrecency = frecencySettings.stickerFrecency;
    if (stickerFrecency != null) {
      stickers = stickerFrecency.stickers;
    }
  }
  if (null != stickers) {
    let stickers1;
    const _Object = Object;
    if (frecencySettings != null) {
      const stickerFrecency2 = frecencySettings.stickerFrecency;
      if (stickerFrecency2 != null) {
        stickers1 = stickerFrecency2.stickers;
      }
    }
    keys1 = keys(stickers1);
  }
  const items = [StickersStore];
  const items1 = [keys1];
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(items, () => {
    let stickerById;
    const mapped = keys1.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => undefined !== item);
  }, items1);
};
export { useStickerPackCategories };
export const useStickerForRenderableSticker = function useStickerForRenderableSticker(renderableSticker, arg1) {
  let c3;
  let closure_2;
  let closure_5;
  let items3;
  let tmp7;
  _require = renderableSticker;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  c3 = undefined;
  let obj4;
  react = undefined;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerById(renderableSticker.id));
  let obj2 = react;
  const tmp4 = obj4(react.useState(true), 2);
  dependencyMap = tmp4[1];
  const first = tmp4[0];
  [tmp7, c3] = obj4(react.useState(false), 2);
  const tmp6 = obj4(react.useState(false), 2);
  let obj3 = require("StickersUtils");
  let isGuildStickerResult = obj3.isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    const tmpResult = tmp(5198);
    isGuildStickerResult = tmpResult.isStandardSticker(renderableSticker);
  }
  obj4 = { hasFetched: tmp7, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: first, stickersStoreDefinition: stateFromStores };
  react = obj2.useRef(obj4);
  const effect = obj2.useEffect(() => {
    closure_5.current = obj4;
  });
  const items1 = [flag];
  const effect1 = obj2.useEffect(() => {
    let ref;
    const tmp = (async (arg0, value) => {
      let closure_0;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj4 = { value, done: true };
              return obj4;
            } else {
              const current = ref.current;
              if (false) {
                if (!current.isReturnable) {
                  if (null == current.stickersStoreDefinition) {
                    if (current.shouldFetch) {
                      if (!current.hasFetched) {
                        closure_2_2(false);
                        c2 = 1;
                        c1 = 2;
                        c3 = 1;
                        const obj5 = { value: obj2.fetchSticker(tmp19.id), done: false };
                        obj2 = tmp(c2[11]);
                        return obj5;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
            }
            closure_128_3(true);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp12) {
          if (0 === c2) {
            c3 = 3;
            throw tmp12;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }, items1);
  if (isGuildStickerResult) {
    const items2 = [renderableSticker, tmp7];
    items3 = items2;
  } else {
    let tmp12 = stateFromStores;
    if (stateFromStores == null) {
      tmp12 = null;
    }
    items3 = [tmp12, tmp7];
  }
  return items3;
};
export const useFilteredStickerPackCategories = function useFilteredStickerPackCategories(channel) {
  let tmp = useStickerPackCategories(channel);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useMemo(() => closure_0.filter((type) => {
    const tmp = type.type === closure_1_0(closure_1_2[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL || type.stickers.length > 0;
    return tmp;
  }, []), items);
};

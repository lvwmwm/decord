// Module ID: 9587
// Function ID: 74665
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useFetchStickerPack, useFilteredStickerPackCategories, useHasSendableSticker, useLatestFrecentStickers, useShouldAnimateSticker, useStickerForRenderableSticker, useStickersGrid

// Module 9587 (_createForOfIteratorHelperLoose)
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
function useFetchStickerPacks() {
  const effect = React.useEffect(() => {
    const stickerPacks = callback(closure_2[11]).fetchStickerPacks();
  }, []);
}
function useFavoriteStickerIds() {
  let stickerIds;
  const favoriteStickers = arg1(dependencyMap[19]).useFrecencySettings().favoriteStickers;
  if (null != favoriteStickers) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (null == stickerIds) {
    stickerIds = closure_13;
  }
  return stickerIds;
}
function useFavoriteStickers() {
  const tmp = useFavoriteStickerIds();
  const arg1 = tmp;
  const items = [closure_11];
  const items1 = [tmp];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const mapped = tmp.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((body) => {
      let tmp = null != body;
      if (tmp) {
        let result = !callback(closure_2[13]).isGuildSticker(body);
        if (!result) {
          result = callback(closure_2[13]).isAvailableGuildSticker(body);
          const obj2 = callback(closure_2[13]);
        }
        tmp = result;
        const obj = callback(closure_2[13]);
      }
      return tmp;
    });
  }, items1);
}
function useLatestFrecentStickerIds() {
  const frecencySettings = arg1(dependencyMap[19]).useFrecencySettings();
  let keys = closure_13;
  let stickers;
  if (null != frecencySettings) {
    const stickerFrecency = frecencySettings.stickerFrecency;
    if (null != stickerFrecency) {
      stickers = stickerFrecency.stickers;
    }
  }
  if (null != stickers) {
    let stickers1;
    if (null != frecencySettings) {
      const stickerFrecency2 = frecencySettings.stickerFrecency;
      if (null != stickerFrecency2) {
        stickers1 = stickerFrecency2.stickers;
      }
    }
    keys = Object.keys(stickers1);
  }
  return keys;
}
function useStickerPackCategories(channel) {
  const arg1 = channel;
  const tmp = useFavoriteStickers();
  const importAll = tmp;
  const items = [closure_11, closure_10];
  const stateFromStoresObject = arg1(dependencyMap[10]).useStateFromStoresObject(items, () => {
    const obj = { packs: premiumPacks.getPremiumPacks(), frequentlyUsedStickers: obj.stickerFrecencyWithoutFetchingLatest.frequently };
    return obj;
  }, []);
  const packs = stateFromStoresObject.packs;
  const dependencyMap = packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  let closure_3 = frequentlyUsedStickers;
  const obj = arg1(dependencyMap[10]);
  const items1 = [closure_9];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let closure_4 = stateFromStores;
  const tmp4 = function useGuildStickerCategories(channel) {
    const items = [closure_11];
    const stateFromStores = channel(packs[10]).useStateFromStores(items, () => allGuildStickers.getAllGuildStickers());
    const obj = channel(packs[10]);
    const items1 = [closure_8, closure_6];
    const stateFromStoresArray = channel(packs[10]).useStateFromStoresArray(items1, () => {
      const flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const items = [];
      const arg0 = items;
      const item = flattenedGuildIds.forEach((guildId) => {
        const guild = guild.getGuild(guildId);
        if (null != guild) {
          items.push(guild);
        }
      });
      return items;
    }, []);
    const packs = stateFromStoresArray;
    const obj2 = channel(packs[10]);
    const items2 = [closure_9];
    const stateFromStores1 = channel(packs[10]).useStateFromStores(items2, () => currentUser.getCurrentUser());
    const frequentlyUsedStickers = stateFromStores1;
    const items3 = [stateFromStores, stateFromStoresArray, stateFromStores1, channel];
    return tmp4.useMemo(() => {
      let iter2;
      const items = [];
      const tmp = callback(stateFromStoresArray);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let id = value.id;
          let tmp2 = closure_1;
          value = closure_1.get(id);
          let tmp3 = null != value && 0 !== value.length;
          if (tmp3) {
            let obj = {};
            let tmp4 = closure_0;
            let tmp5 = closure_2;
            obj.type = closure_0(closure_2[15]).StickerCategoryTypes.GUILD;
            obj.id = id;
            obj.name = value.name;
            obj.stickers = value;
            let arr = items.push(obj);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      let guildId;
      if (null != arg0) {
        guildId = arg0.getGuildId();
      }
      if (null != guildId) {
        const guild = guild.getGuild(arg0.getGuildId());
        const findIndexResult = items.findIndex((id) => id.id === guildId.getGuildId());
        if (findIndexResult >= 1) {
          items.unshift(items.splice(findIndexResult, 1)[0]);
        } else {
          if (tmp9) {
            obj = { type: arg0(stateFromStoresArray[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL };
            ({ id: obj2.id, name: obj2.name } = guild);
            obj.stickers = [];
            items.unshift(obj);
          }
          const tmp9 = -1 === findIndexResult && null != guild && obj5.getManageResourcePermissions(guild).canManageAllExpressions;
        }
        if (null != stateFromStores1) {
          obj = { permission: constants.USE_EXTERNAL_EMOJIS, user: stateFromStores1, context: arg0 };
          stateFromStores(stateFromStoresArray[18]).can(obj);
          const obj3 = stateFromStores(stateFromStoresArray[18]);
        }
        const obj5 = arg0(stateFromStoresArray[14]);
      }
      return items;
    }, items3);
  }(channel);
  const React = tmp4;
  const items2 = [packs, tmp, frequentlyUsedStickers, tmp4, stateFromStores, channel];
  return React.useMemo(() => {
    let found;
    const mapped = packs.map(arg0(packs[13]).createStickerPackCategory);
    let obj = { type: arg0(packs[15]).StickerCategoryTypes.FAVORITE, id: arg0(packs[15]).StickerCategoryTypes.FAVORITE };
    const intl = arg0(packs[17]).intl;
    obj.name = intl.string(arg0(packs[17]).t.y3LQCG);
    obj.stickers = tmp;
    const items = [obj, ];
    obj = { type: arg0(packs[15]).StickerCategoryTypes.RECENT, id: arg0(packs[15]).StickerCategoryTypes.RECENT };
    const intl2 = arg0(packs[17]).intl;
    obj.name = intl2.string(arg0(packs[17]).t.6hjpXW);
    if (null != frequentlyUsedStickers) {
      found = frequentlyUsedStickers.filter((guild_id) => {
        if (obj.isGuildSticker(guild_id)) {
          const stickersByGuildId = stickersByGuildId.getStickersByGuildId(guild_id.guild_id);
          let someResult;
          if (null != stickersByGuildId) {
            someResult = stickersByGuildId.some((id) => id.id === id.id);
          }
          let tmp8 = null != someResult && someResult;
          if (tmp8) {
            const stickerSendability = guild_id(closure_2[20]).getStickerSendability(guild_id, closure_4, guild_id);
            tmp8 = stickerSendability !== guild_id(closure_2[20]).StickerSendability.NONSENDABLE;
            const obj4 = guild_id(closure_2[20]);
          }
          let someResult1 = tmp8;
        } else {
          if (obj2.isStandardSticker(guild_id)) {
            someResult1 = closure_2.some((id) => id.id === id.pack_id);
          }
          const obj2 = guild_id(closure_2[13]);
        }
        return someResult1;
      });
    }
    if (null == found) {
      found = [];
    }
    obj.stickers = found;
    items[1] = obj;
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(tmp4, 2));
    return items;
  }, items2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const Permissions = arg1(dependencyMap[9]).Permissions;
let closure_13 = [];
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = function useFetchStickerPack(pack_id) {
  const arg1 = pack_id;
  useFetchStickerPacks();
  const items = [closure_11];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => stickerPack.hasLoadedStickerPacks);
  const importAll = stateFromStores;
  const items1 = [pack_id, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = null == stickerPack.getStickerPack(arg0);
    }
    if (tmp) {
      const stickerPack = arg0(closure_2[11]).fetchStickerPack(arg0);
      const obj = arg0(closure_2[11]);
    }
  }, items1);
};
export const useShouldAnimateSticker = function useShouldAnimateSticker(isFocused) {
  const AnimateStickers = arg1(dependencyMap[12]).AnimateStickers;
  const setting = AnimateStickers.useSetting();
  return arg1(dependencyMap[13]).shouldAnimateSticker(setting, isFocused);
};
export const useStickersGrid = function useStickersGrid(collapsedStickersCategories) {
  collapsedStickersCategories = collapsedStickersCategories.collapsedStickersCategories;
  const arg1 = collapsedStickersCategories;
  const filteredStickers = collapsedStickersCategories.filteredStickers;
  const importAll = filteredStickers;
  let num = collapsedStickersCategories.listPaddingRight;
  if (num === undefined) {
    num = 0;
  }
  const dependencyMap = num;
  let num2 = collapsedStickersCategories.listWidth;
  if (num2 === undefined) {
    num2 = 0;
  }
  let closure_3 = num2;
  let num3 = collapsedStickersCategories.stickerNodeMargin;
  if (num3 === undefined) {
    num3 = 0;
  }
  let closure_4 = num3;
  const stickerNodeWidth = collapsedStickersCategories.stickerNodeWidth;
  const React = stickerNodeWidth;
  const stickersCategories = collapsedStickersCategories.stickersCategories;
  let closure_6 = stickersCategories;
  const items = [collapsedStickersCategories, filteredStickers, num, num2, num3, stickerNodeWidth, stickersCategories];
  return React.useMemo(() => {
    let iter2;
    let stickers;
    let type;
    function addGridSection(sendable, SEARCH_RESULTS, arg2) {
      let closure_6;
      let flag = arg2;
      let rounded = SEARCH_RESULTS;
      if (arg2 === undefined) {
        flag = false;
      }
      let obj = rounded(items1[13]);
      let guild;
      if (obj.isGuildSticker(sendable[0])) {
        guild = closure_6.getGuild(sendable[0].guild_id);
      }
      const guildId = guildId.getGuildId();
      const obj2 = rounded(items1[14]);
      let canCreateExpressions = null != guild;
      const findIndexResult = closure_6.findIndex((type) => type.type === arg1(closure_2[15]).StickerCategoryTypes.FAVORITE);
      if (canCreateExpressions) {
        canCreateExpressions = guildId === guild.id;
      }
      if (canCreateExpressions) {
        canCreateExpressions = obj2.getManageResourcePermissions(guild).canCreateExpressions;
      }
      if (canCreateExpressions) {
        canCreateExpressions = sendable.length < rounded(items1[16]).getTotalStickerCountForTier(guild.premiumTier);
        const obj3 = rounded(items1[16]);
      }
      let sum = length;
      if (canCreateExpressions) {
        sum = length + 1;
      }
      rounded = Math.ceil(sum / rounded);
      let num2 = 0;
      if (!flag) {
        num2 = rounded;
      }
      items1[closure_5] = num2;
      for (let num3 = 0; num3 < rounded; num3 = num3 + 1) {
        let tmp12 = rounded;
        let result = num3 * rounded;
        let tmp14 = rounded;
        let substr = sendable.slice(result, result + rounded);
        let mapped = substr.map((pack_id, columnIndex) => {
          const obj = { type: columnIndex(closure_2[15]).StickerGridItemTypes.STICKER, sticker: pack_id };
          let str = "TODO - fix";
          if (obj2.isStandardSticker(pack_id)) {
            str = pack_id.pack_id;
          }
          obj.packId = str;
          obj.gridSectionIndex = closure_5;
          obj.rowIndex = closure_4;
          obj.columnIndex = columnIndex;
          obj.visibleRowIndex = closure_6;
          obj.category = columnIndex;
          return obj;
        });
        let tmp15 = closure_5;
        let tmp16 = closure_5 > findIndexResult1;
        if (tmp16) {
          let tmp17 = closure_5;
          tmp16 = closure_5 > findIndexResult;
        }
        if (tmp16) {
          tmp16 = null != guild;
        }
        if (tmp16) {
          tmp16 = sum > sendable.length;
        }
        if (tmp16) {
          obj = {};
          let tmp18 = rounded;
          let tmp19 = items1;
          obj.type = rounded(items1[15]).StickerGridItemTypes.CREATE_STICKER;
          obj.guild_id = guild.id;
          let intl = rounded(items1[17]).intl;
          obj.name = intl.string(rounded(items1[17]).t.UwF+Cw);
          let tmp20 = closure_5;
          obj.gridSectionIndex = closure_5;
          let tmp21 = closure_4;
          obj.rowIndex = closure_4;
          obj.columnIndex = mapped.length;
          let tmp22 = closure_6;
          obj.visibleRowIndex = closure_6;
          let arr = mapped.push(obj);
        }
        if (!flag) {
          let tmp24 = closure_6;
          closure_6 = closure_6 + 1;
          let tmp25 = items2;
          arr = items2.push(mapped);
          let tmp27 = items;
          let arr1 = items.push(mapped.length);
        }
        let tmp29 = closure_4;
        closure_4 = closure_4 + 1;
      }
      closure_5 = closure_5 + 1;
    }
    const rounded = Math.floor((num2 - num + closure_4) / (closure_5 + closure_4));
    const collapsedStickersCategories = rounded;
    const items = [];
    const filteredStickers = items;
    const items1 = [];
    let num = items1;
    const items2 = [];
    let num2 = items2;
    closure_4 = 0;
    closure_5 = 0;
    let closure_6 = 0;
    const rounded1 = Math.floor(Math.max(closure_4, (num2 - num - closure_5 * rounded) / (rounded - 1)));
    if (0 !== num2) {
      if (null == filteredStickers) {
        const tmp10 = callback(closure_6);
        let iter = tmp10();
        num2 = 15;
        if (!iter.done) {
          do {
            let value = iter.value;
            if (value.stickers.length > 0) {
              let tmp15 = closure_4;
              closure_4 = closure_4 + 1;
              let tmp16 = closure_0;
              let hasItem;
              ({ stickers, type } = value);
              if (null != closure_0) {
                let tmp18 = closure_0;
                hasItem = closure_0.has(value.id);
              }
              let addGridSectionResult = addGridSection(stickers, type, true === hasItem);
            } else {
              let tmp11 = closure_0;
              let tmp12 = closure_2;
              if (value.type === closure_0(closure_2[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                let tmp13 = closure_5;
                items1[closure_5] = 0;
                let tmp14 = closure_5;
                closure_5 = closure_5 + 1;
              }
            }
            iter2 = tmp10();
            iter = iter2;
          } while (!iter2.done);
        }
      } else {
        if (filteredStickers.sendable.length > 0) {
          num = 15;
          addGridSection(filteredStickers.sendable, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (filteredStickers.sendableWithPremium.length > 0) {
          addGridSection(filteredStickers.sendableWithPremium, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
      }
    }
    return { rowCount: closure_4, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
  }, items);
};
export function useHasSendableSticker() {
  return true;
}
export { useFetchStickerPacks };
export { useFavoriteStickerIds };
export { useFavoriteStickers };
export { useLatestFrecentStickerIds };
export const useLatestFrecentStickers = function useLatestFrecentStickers() {
  const tmp = useLatestFrecentStickerIds();
  const arg1 = tmp;
  const items = [closure_11];
  const items1 = [tmp];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const mapped = tmp.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((arg0) => undefined !== arg0);
  }, items1);
};
export { useStickerPackCategories };
export const useStickerForRenderableSticker = function useStickerForRenderableSticker(renderableSticker, arg1) {
  let tmp4;
  let flag = arg1;
  arg1 = renderableSticker;
  if (arg1 === undefined) {
    flag = false;
  }
  const importAll = flag;
  let closure_2;
  let closure_3;
  let callback;
  let React;
  let obj = arg1(closure_2[10]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => stickerById.getStickerById(arg0.id));
  const tmp2 = callback(React.useState(true), 2);
  closure_2 = tmp2[1];
  [tmp4, closure_3] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  let isGuildStickerResult = arg1(closure_2[13]).isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    isGuildStickerResult = arg1(closure_2[13]).isStandardSticker(renderableSticker);
    const obj3 = arg1(closure_2[13]);
  }
  obj = { hasFetched: tmp4, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: tmp2[0], stickersStoreDefinition: stateFromStores };
  callback = obj;
  React = React.useRef(obj);
  const effect = React.useEffect(() => {
    closure_5.current = obj;
  });
  const items1 = [flag];
  const effect1 = React.useEffect(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    _undefined(tmp)();
  }, items1);
  if (isGuildStickerResult) {
    const items2 = [renderableSticker, tmp4];
    let items3 = items2;
  } else {
    let tmp10 = null;
    if (null != stateFromStores) {
      tmp10 = stateFromStores;
    }
    items3 = [tmp10, tmp4];
  }
  return items3;
};
export const useFilteredStickerPackCategories = function useFilteredStickerPackCategories(channel) {
  const tmp = useStickerPackCategories(channel);
  const arg1 = tmp;
  const items = [tmp];
  return React.useMemo(() => tmp.filter((type) => {
    let tmp = type.type === callback(closure_2[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
    if (!tmp) {
      tmp = type.stickers.length > 0;
    }
    return tmp;
  }, []), items);
};

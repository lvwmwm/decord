// Module ID: 9636
// Function ID: 74958
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 1838, 3947, 4970, 1849, 5034, 5035, 653, 566, 9637, 3803, 4466, 8446, 4799, 4022, 1212, 3763, 9620, 5732, 2]
// Exports: useFetchStickerPack, useFilteredStickerPackCategories, useHasSendableSticker, useLatestFrecentStickers, useShouldAnimateSticker, useStickerForRenderableSticker, useStickersGrid

// Module 9636 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

let require = arg1;
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
function useFetchStickerPacks() {
  const effect = React.useEffect(() => {
    const stickerPacks = outer1_0(outer1_2[11]).fetchStickerPacks();
  }, []);
}
function useFavoriteStickerIds() {
  let stickerIds;
  const favoriteStickers = require(9620) /* useFrecencySettings */.useFrecencySettings().favoriteStickers;
  if (null != favoriteStickers) {
    stickerIds = favoriteStickers.stickerIds;
  }
  if (null == stickerIds) {
    stickerIds = closure_13;
  }
  return stickerIds;
}
function useFavoriteStickers() {
  let tmp = useFavoriteStickerIds();
  const require = tmp;
  const items = [closure_11];
  const items1 = [tmp];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const mapped = tmp.map((arg0) => outer2_11.getStickerById(arg0));
    return mapped.filter((body) => {
      let tmp = null != body;
      if (tmp) {
        let result = !callback(outer2_2[13]).isGuildSticker(body);
        if (!result) {
          result = callback(outer2_2[13]).isAvailableGuildSticker(body);
          const obj2 = callback(outer2_2[13]);
        }
        tmp = result;
        const obj = callback(outer2_2[13]);
      }
      return tmp;
    });
  }, items1);
}
function useLatestFrecentStickerIds() {
  const frecencySettings = require(9620) /* useFrecencySettings */.useFrecencySettings();
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
  const _require = channel;
  let tmp = useFavoriteStickers();
  const importAll = tmp;
  let items = [closure_11, closure_10];
  const stateFromStoresObject = _require(packs[10]).useStateFromStoresObject(items, () => ({ packs: outer1_11.getPremiumPacks(), frequentlyUsedStickers: outer1_10.stickerFrecencyWithoutFetchingLatest.frequently }), []);
  packs = stateFromStoresObject.packs;
  const frequentlyUsedStickers = stateFromStoresObject.frequentlyUsedStickers;
  let obj = _require(packs[10]);
  let items1 = [closure_9];
  let stateFromStores = _require(packs[10]).useStateFromStores(items1, () => outer1_9.getCurrentUser());
  let tmp4 = (function useGuildStickerCategories(channel) {
    let items = [outer1_11];
    const stateFromStores = channel(packs[10]).useStateFromStores(items, () => outer2_11.getAllGuildStickers());
    let obj = channel(packs[10]);
    const items1 = [outer1_8, outer1_6];
    const stateFromStoresArray = channel(packs[10]).useStateFromStoresArray(items1, () => {
      const flattenedGuildIds = outer2_8.getFlattenedGuildIds();
      const items = [];
      const item = flattenedGuildIds.forEach((guildId) => {
        const guild = outer3_6.getGuild(guildId);
        if (null != guild) {
          items.push(guild);
        }
      });
      return items;
    }, []);
    const obj2 = channel(packs[10]);
    const items2 = [outer1_9];
    const stateFromStores1 = channel(packs[10]).useStateFromStores(items2, () => outer2_9.getCurrentUser());
    const items3 = [stateFromStores, stateFromStoresArray, stateFromStores1, channel];
    return tmp4.useMemo(() => {
      let iter2;
      const items = [];
      const tmp = outer2_14(stateFromStoresArray);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let id = value.id;
          let tmp2 = stateFromStores;
          value = stateFromStores.get(id);
          let tmp3 = null != value && 0 !== value.length;
          if (tmp3) {
            let obj = {};
            let tmp4 = store;
            let tmp5 = packs;
            obj.type = store(packs[15]).StickerCategoryTypes.GUILD;
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
      if (null != store) {
        guildId = store.getGuildId();
      }
      if (null != guildId) {
        const guild = outer2_6.getGuild(store.getGuildId());
        const findIndexResult = items.findIndex((id) => id.id === outer1_0.getGuildId());
        if (findIndexResult >= 1) {
          items.unshift(items.splice(findIndexResult, 1)[0]);
        } else {
          if (tmp9) {
            obj = { type: store(packs[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL };
            ({ id: obj2.id, name: obj2.name } = guild);
            obj.stickers = [];
            items.unshift(obj);
          }
          tmp9 = -1 === findIndexResult && null != guild && obj5.getManageResourcePermissions(guild).canManageAllExpressions;
        }
        if (null != stateFromStores1) {
          obj = { permission: outer2_12.USE_EXTERNAL_EMOJIS, user: stateFromStores1, context: store };
          stateFromStores(packs[18]).can(obj);
          const obj3 = stateFromStores(packs[18]);
        }
        obj5 = store(packs[14]);
      }
      return items;
    }, items3);
  })(channel);
  const React = tmp4;
  let items2 = [packs, tmp, frequentlyUsedStickers, tmp4, stateFromStores, channel];
  return React.useMemo(() => {
    let found;
    const mapped = packs.map(channel(packs[13]).createStickerPackCategory);
    let obj = { type: channel(packs[15]).StickerCategoryTypes.FAVORITE, id: channel(packs[15]).StickerCategoryTypes.FAVORITE };
    const intl = channel(packs[17]).intl;
    obj.name = intl.string(channel(packs[17]).t.y3LQCG);
    obj.stickers = closure_1;
    const items = [obj, ];
    obj = { type: channel(packs[15]).StickerCategoryTypes.RECENT, id: channel(packs[15]).StickerCategoryTypes.RECENT };
    const intl2 = channel(packs[17]).intl;
    obj.name = intl2.string(channel(packs[17]).t["6hjpXW"]);
    if (null != frequentlyUsedStickers) {
      found = frequentlyUsedStickers.filter((guild_id) => {
        const callback = guild_id;
        if (obj.isGuildSticker(guild_id)) {
          const stickersByGuildId = outer2_11.getStickersByGuildId(guild_id.guild_id);
          let someResult;
          if (null != stickersByGuildId) {
            someResult = stickersByGuildId.some((id) => id.id === guild_id.id);
          }
          let tmp8 = null != someResult && someResult;
          if (tmp8) {
            const stickerSendability = callback(packs[20]).getStickerSendability(guild_id, outer1_4, outer1_0);
            tmp8 = stickerSendability !== callback(packs[20]).StickerSendability.NONSENDABLE;
            const obj4 = callback(packs[20]);
          }
          let someResult1 = tmp8;
        } else {
          if (obj2.isStandardSticker(guild_id)) {
            someResult1 = outer1_2.some((id) => id.id === guild_id.pack_id);
          }
          obj2 = callback(packs[13]);
        }
        return someResult1;
      });
    }
    if (null == found) {
      found = [];
    }
    obj.stickers = found;
    items[1] = obj;
    HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(result, 2));
    return items;
  }, items2);
}
let closure_13 = [];
let result = require("result").fileFinishedImporting("modules/stickers/StickersHooks.tsx");

export const useFetchStickerPack = function useFetchStickerPack(pack_id) {
  const _require = pack_id;
  useFetchStickerPacks();
  const items = [closure_11];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_11.hasLoadedStickerPacks);
  const items1 = [pack_id, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = null == outer1_11.getStickerPack(pack_id);
    }
    if (tmp) {
      const stickerPack = pack_id(outer1_2[11]).fetchStickerPack(pack_id);
      const obj = pack_id(outer1_2[11]);
    }
  }, items1);
};
export const useShouldAnimateSticker = function useShouldAnimateSticker(isFocused) {
  const AnimateStickers = require(3803) /* explicitContentFromProto */.AnimateStickers;
  const setting = AnimateStickers.useSetting();
  return require(4466) /* getStickerPackPreviewSticker */.shouldAnimateSticker(setting, isFocused);
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
  const stickersCategories = collapsedStickersCategories.stickersCategories;
  let items = [collapsedStickersCategories, filteredStickers, num, num2, num3, stickerNodeWidth, stickersCategories];
  return stickerNodeWidth.useMemo(() => {
    let iter2;
    let stickers;
    let type;
    function addGridSection(sendable, SEARCH_RESULTS, arg2) {
      let flag = arg2;
      let closure_0 = SEARCH_RESULTS;
      if (arg2 === undefined) {
        flag = false;
      }
      let obj = collapsedStickersCategories(num[13]);
      let guild;
      if (obj.isGuildSticker(sendable[0])) {
        guild = stickersCategories.getGuild(sendable[0].guild_id);
      }
      const guildId = outer2_7.getGuildId();
      const obj2 = collapsedStickersCategories(num[14]);
      let canCreateExpressions = null != guild;
      const findIndexResult = c6.findIndex((type) => type.type === collapsedStickersCategories(num[15]).StickerCategoryTypes.FAVORITE);
      if (canCreateExpressions) {
        canCreateExpressions = guildId === guild.id;
      }
      if (canCreateExpressions) {
        canCreateExpressions = obj2.getManageResourcePermissions(guild).canCreateExpressions;
      }
      if (canCreateExpressions) {
        canCreateExpressions = sendable.length < collapsedStickersCategories(16[16]).getTotalStickerCountForTier(guild.premiumTier);
        const obj3 = collapsedStickersCategories(16[16]);
      }
      let sum = length;
      if (canCreateExpressions) {
        sum = length + 1;
      }
      const rounded = Math.ceil(sum / closure_0);
      let num2 = 0;
      if (!flag) {
        num2 = rounded;
      }
      items1[result] = num2;
      for (let num3 = 0; num3 < rounded; num3 = num3 + 1) {
        let tmp12 = closure_0;
        let result = num3 * closure_0;
        let tmp14 = closure_0;
        let substr = sendable.slice(result, result + closure_0);
        let mapped = substr.map((pack_id, columnIndex) => {
          const obj = { type: collapsedStickersCategories(num[15]).StickerGridItemTypes.STICKER, sticker: pack_id };
          let str = "TODO - fix";
          if (obj2.isStandardSticker(pack_id)) {
            str = pack_id.pack_id;
          }
          obj.packId = str;
          obj.gridSectionIndex = result;
          obj.rowIndex = _slicedToArray;
          obj.columnIndex = columnIndex;
          obj.visibleRowIndex = _createForOfIteratorHelperLoose;
          obj.category = closure_0;
          return obj;
        });
        let tmp15 = result;
        let tmp16 = result > findIndexResult1;
        if (tmp16) {
          let tmp17 = result;
          tmp16 = result > findIndexResult;
        }
        if (tmp16) {
          tmp16 = null != guild;
        }
        if (tmp16) {
          tmp16 = sum > sendable.length;
        }
        if (tmp16) {
          obj = {};
          let tmp18 = collapsedStickersCategories;
          let tmp19 = num;
          obj.type = collapsedStickersCategories(num[15]).StickerGridItemTypes.CREATE_STICKER;
          obj.guild_id = guild.id;
          let intl = collapsedStickersCategories(num[17]).intl;
          obj.name = intl.string(collapsedStickersCategories(num[17]).t["UwF+Cw"]);
          let tmp20 = result;
          obj.gridSectionIndex = result;
          let tmp21 = _slicedToArray;
          obj.rowIndex = _slicedToArray;
          obj.columnIndex = mapped.length;
          let tmp22 = _createForOfIteratorHelperLoose;
          obj.visibleRowIndex = _createForOfIteratorHelperLoose;
          let arr = mapped.push(obj);
        }
        if (!flag) {
          let tmp24 = _createForOfIteratorHelperLoose;
          _createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose + 1;
          let tmp25 = items2;
          arr = items2.push(mapped);
          let tmp27 = items;
          let arr1 = items.push(mapped.length);
        }
        let tmp29 = _slicedToArray;
        _slicedToArray = _slicedToArray + 1;
      }
      result = result + 1;
    }
    let rounded = Math.floor((items2 - items1 + c4) / (c5 + c4));
    const items = [];
    items1 = [];
    items2 = [];
    c4 = 0;
    c5 = 0;
    let c6 = 0;
    const rounded1 = Math.floor(Math.max(c4, (items2 - items1 - c5 * rounded) / (rounded - 1)));
    if (0 !== items2) {
      if (null == items) {
        const tmp10 = outer1_14(c6);
        let iter = tmp10();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (value.stickers.length > 0) {
              let tmp15 = c4;
              c4 = c4 + 1;
              let tmp16 = rounded;
              let hasItem;
              ({ stickers, type } = value);
              if (null != rounded) {
                let tmp18 = rounded;
                hasItem = rounded.has(value.id);
              }
              let addGridSectionResult = addGridSection(stickers, type, true === hasItem);
            } else {
              let tmp11 = collapsedStickersCategories;
              let tmp12 = num;
              if (value.type === collapsedStickersCategories(num[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                let tmp13 = c5;
                items1[c5] = 0;
                let tmp14 = c5;
                c5 = c5 + 1;
              }
            }
            iter2 = tmp10();
            iter = iter2;
          } while (!iter2.done);
        }
      } else {
        if (items.sendable.length > 0) {
          addGridSection(items.sendable, collapsedStickersCategories(15[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
        if (items.sendableWithPremium.length > 0) {
          addGridSection(items.sendableWithPremium, collapsedStickersCategories(num[15]).StickerCategoryTypes.SEARCH_RESULTS);
        }
      }
    }
    return { rowCount: c4, rowCountBySection: items1, stickersGrid: items2, gutterWidth: rounded1, columnCounts: items };
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
  const require = tmp;
  const items = [closure_11];
  const items1 = [tmp];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const mapped = tmp.map((arg0) => outer2_11.getStickerById(arg0));
    return mapped.filter((arg0) => undefined !== arg0);
  }, items1);
};
export { useStickerPackCategories };
export const useStickerForRenderableSticker = function useStickerForRenderableSticker(renderableSticker, arg1) {
  let c3;
  let tmp4;
  let flag = arg1;
  const _require = renderableSticker;
  if (arg1 === undefined) {
    flag = false;
  }
  let dependencyMap;
  c3 = undefined;
  let obj;
  let React;
  obj = _require(566);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getStickerById(id.id));
  const tmp2 = obj(React.useState(true), 2);
  dependencyMap = tmp2[1];
  [tmp4, c3] = obj(React.useState(false), 2);
  const tmp3 = obj(React.useState(false), 2);
  let isGuildStickerResult = _require(4466).isGuildSticker(renderableSticker);
  if (!isGuildStickerResult) {
    isGuildStickerResult = _require(4466).isStandardSticker(renderableSticker);
    const obj3 = _require(4466);
  }
  obj = { hasFetched: tmp4, isReturnable: isGuildStickerResult, renderableSticker, shouldFetch: tmp2[0], stickersStoreDefinition: stateFromStores };
  React = React.useRef(obj);
  const effect = React.useEffect(() => {
    result.current = obj;
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
  let tmp = useStickerPackCategories(channel);
  const require = tmp;
  const items = [tmp];
  return React.useMemo(() => tmp.filter((type) => {
    let tmp = type.type === callback(outer2_2[15]).StickerCategoryTypes.EMPTY_GUILD_UPSELL;
    if (!tmp) {
      tmp = type.stickers.length > 0;
    }
    return tmp;
  }, []), items);
};

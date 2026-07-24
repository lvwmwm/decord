// Module ID: 11578
// Function ID: 90151
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4017, 4018, 4021, 566, 2]
// Exports: useBuildGuildPowerupsSections

// Module 11578 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";

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
function orderPowerupListings(items) {
  return (function moveBadgePacksAfterServerTags(arr) {
    const findIndexResult = arr.findIndex((type) => {
      let tmp = "singlePerk" === type.type;
      if (tmp) {
        tmp = type.powerup.skuId === outer2_0(outer2_1[4]).GUILD_POWERUP_TAG_SKU_ID;
      }
      return tmp;
    });
    const findIndexResult1 = arr.findIndex((type) => {
      let tmp = "multiPerk" === type.type;
      if (tmp) {
        let flag = "guildTagsBadgePacks" === type.group;
        if (!flag) {
          const group = type.group;
          flag = false;
        }
        tmp = flag;
      }
      return tmp;
    });
    if (-1 !== findIndexResult) {
      if (-1 !== findIndexResult1) {
        if (findIndexResult1 !== findIndexResult + 1) {
          const items = [];
          HermesBuiltin.arraySpread(arr, 0);
          items.splice(items.findIndex((type) => {
            let tmp = "singlePerk" === type.type;
            if (tmp) {
              tmp = type.powerup.skuId === outer2_0(outer2_1[4]).GUILD_POWERUP_TAG_SKU_ID;
            }
            return tmp;
          }) + 1, 0, outer1_2(items.splice(findIndexResult1, 1), 1)[0]);
          return items;
        }
      }
    }
    return arr;
  })((function moveServerThemeToFront(arr) {
    const findIndexResult = arr.findIndex((type) => {
      let tmp = "singlePerk" === type.type;
      if (tmp) {
        tmp = type.powerup.skuId === outer2_0(outer2_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID;
      }
      return tmp;
    });
    if (findIndexResult <= 0) {
      return arr;
    } else {
      const items = [];
      HermesBuiltin.arraySpread(arr, 0);
      items.unshift(outer1_2(items.splice(findIndexResult, 1), 1)[0]);
      return items;
    }
  })(items));
}
function buildPowerupListings(arg0, arr) {
  let done;
  let tmp = arg2;
  let items = [];
  let closure_1 = arr.reduce((arg0, type) => {
    if (type.type !== outer1_5.PERK) {
      return arg0;
    } else {
      if (null != outer1_8[type.skuId]) {
        if (arg0[tmp2] == null) {
          arg0[tmp2] = [];
        }
        let arr = arg0[tmp2];
        arr = arr.push(type);
      }
      return arg0;
    }
  }, {});
  function _loop() {
    if (_slicedToArray.type === outer1_5.LEVEL) {
      let obj = { type: "singleLevel", powerup: _slicedToArray };
      items.push(obj);
      return 0;
    } else if (null != outer1_8[_slicedToArray.skuId]) {
      if (undefined !== table[tmp17]) {
        items = outer1_7[tmp17];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        obj = { type: "multiPerk", group: tmp17, powerups: obj2 };
        items.push(obj);
        table[tmp17] = undefined;
      }
      return 0;
    } else {
      obj = { type: "singlePerk", powerup: _slicedToArray, badge: outer1_6[_slicedToArray.skuId] };
      items.push(obj);
    }
  }
  const tmp2 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let _loopResult = _loop();
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  if (tmp) {
    tmp = arg0 === GuildPowerupType.PERK;
  }
  if (tmp) {
    let obj = { type: "gameServer" };
    items.push(obj);
  }
  return orderPowerupListings(items);
}
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
const PERK_SKU_BADGES = BoostedGuildTiers.PERK_SKU_BADGES;
let obj = {};
let items = [require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID];
obj.guildTagsBadgePacks = items;
const entries = Object.entries(obj);
let closure_8 = entries.reduce((arg0, arg1) => {
  let done;
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg1;
  const tmp3 = _createForOfIteratorHelperLoose(tmp2);
  let iter = tmp3();
  if (!iter.done) {
    do {
      arg0[iter.value] = tmp;
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return arg0;
}, {});
let items1 = [, ];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export const POWERUP_GROUP_TO_SKU_IDS = obj;
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = function useBuildGuildPowerupsSections(guildId, gameServerEnabled) {
  const _require = guildId;
  const dependencyMap = gameServerEnabled;
  let powerupCatalog;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.getStateForGuild(closure_0));
  if (null != stateFromStores) {
    powerupCatalog = stateFromStores.powerupCatalog;
  }
  const items1 = [powerupCatalog, gameServerEnabled];
  return React.useMemo(() => outer1_9.reduce((arr, type) => {
    let tmp;
    if (null != outer1_2) {
      tmp = outer1_2.powerupCatalog[type];
    }
    if (null == tmp) {
      return arr;
    } else {
      const obj = { type, listings: outer2_13(type, tmp, outer1_1) };
      arr.push(obj);
      return arr;
    }
  }, []), items1);
};

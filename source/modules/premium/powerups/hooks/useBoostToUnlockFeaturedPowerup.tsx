// Module ID: 11536
// Function ID: 89855
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1838, 4017, 4018, 653, 4021, 566, 4037, 2]
// Exports: default

// Module 11536 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS as closure_7 } from "BoostedGuildTiers";
import { GuildFeatures } from "ME";

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
let obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
let items = [obj, , , , , , ];
obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj;
obj = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
items[2] = obj;
items[3] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
const obj1 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
items[4] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
const obj2 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
items[5] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
const obj3 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
items[6] = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const obj4 = { skuId: require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default function useBoostToUnlockFeaturedPowerup(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = _require(available[7]).useStateFromStores(items, () => outer1_6.getStateForGuild(closure_0));
  available = stateFromStores(available[8])(arg0).available;
  const obj = _require(available[7]);
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = _require(available[7]).useStateFromStores(items1, () => {
    const guild = outer1_5.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_8.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  });
  first = stateFromStores1(first.useState(() => Math.random()), 1)[0];
  const items2 = [stateFromStores, available, stateFromStores1, first];
  return first.useMemo(() => {
    let iter;
    if (null != stateFromStores) {
      const unlockedPowerups = stateFromStores.unlockedPowerups;
      const items = [];
      const tmp17 = outer1_10(outer1_9);
      const iter3 = tmp17();
      let iter2 = iter3;
      if (!iter3.done) {
        do {
          let skuId = iter2.value.skuId;
          let tmp2 = tmp14[skuId];
          let tmp3 = tmp10;
          if (null != tmp2) {
            let tmp4 = stateFromStores1;
            if (!stateFromStores1) {
              tmp3 = tmp10;
              if (null == unlockedPowerups[skuId]) {
                let dependencies = tmp2.dependencies;
                tmp3 = tmp10;
                if (dependencies.every((arg0) => null != unlockedPowerups[arg0])) {
                  let tmp6 = available;
                  let diff = tmp2.cost - available;
                  let tmp8 = diff > 0 && diff <= tmp;
                  tmp3 = diff;
                  if (tmp8) {
                    let arr = items.push(tmp2);
                    tmp3 = diff;
                  }
                }
              }
            } else {
              let tmp5 = outer1_7;
              tmp3 = tmp10;
            }
          }
          iter = tmp17();
          tmp10 = tmp3;
          iter2 = iter;
        } while (!iter.done);
      }
      if (items.length > 0) {
        const _Math = Math;
        return items[Math.floor(Math, first * items.length)];
      }
    }
  }, items2);
};

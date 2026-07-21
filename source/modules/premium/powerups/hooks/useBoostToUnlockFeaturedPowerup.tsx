// Module ID: 11525
// Function ID: 89780
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11525 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
let obj = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
const items = [obj, , , , , , ];
obj = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj;
obj = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
items[2] = obj;
items[3] = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
const obj1 = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
items[4] = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
const obj2 = { skuId: arg1(dependencyMap[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
items[5] = { skuId: arg1(dependencyMap[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
const obj3 = { skuId: arg1(dependencyMap[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
items[6] = { skuId: arg1(dependencyMap[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const obj4 = { skuId: arg1(dependencyMap[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default function useBoostToUnlockFeaturedPowerup(arg0) {
  const arg1 = arg0;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  const importDefault = stateFromStores;
  const available = importDefault(dependencyMap[8])(arg0).available;
  const dependencyMap = available;
  const obj = arg1(dependencyMap[7]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  });
  const callback = stateFromStores1;
  const first = callback(React.useState(() => Math.random()), 1)[0];
  const React = first;
  const items2 = [stateFromStores, available, stateFromStores1, first];
  return React.useMemo(() => {
    let iter;
    if (null != stateFromStores) {
      const unlockedPowerups = stateFromStores.unlockedPowerups;
      const arg0 = unlockedPowerups;
      const items = [];
      const tmp17 = callback(closure_9);
      const iter3 = tmp17();
      let iter2 = iter3;
      if (!iter3.done) {
        do {
          let skuId = iter2.value.skuId;
          let tmp2 = tmp14[skuId];
          let tmp3 = tmp10;
          if (null != tmp2) {
            let tmp4 = closure_3;
            if (!closure_3) {
              tmp3 = tmp10;
              if (null == unlockedPowerups[skuId]) {
                let dependencies = tmp2.dependencies;
                tmp3 = tmp10;
                if (dependencies.every((arg0) => null != unlockedPowerups[arg0])) {
                  let tmp6 = closure_2;
                  let diff = tmp2.cost - closure_2;
                  let tmp8 = diff > 0 && diff <= tmp;
                  tmp3 = diff;
                  if (tmp8) {
                    let arr = items.push(tmp2);
                    tmp3 = diff;
                  }
                }
              }
            } else {
              let tmp5 = closure_7;
              tmp3 = tmp10;
            }
          }
          iter = tmp17();
          let tmp10 = tmp3;
          iter2 = iter;
        } while (!iter.done);
      }
      if (items.length > 0) {
        const _Math = Math;
        return items[Math.floor(Math, closure_4 * items.length)];
      }
    }
  }, items2);
};

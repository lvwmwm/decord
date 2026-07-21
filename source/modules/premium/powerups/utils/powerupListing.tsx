// Module ID: 11538
// Function ID: 89836
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useBuildGuildPowerupsSections

// Module 11538 (_createForOfIteratorHelperLoose)
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
function orderPowerupListings(items) {
  return function moveBadgePacksAfterServerTags(arr) {
    const findIndexResult = arr.findIndex((type) => {
      let tmp = "singlePerk" === type.type;
      if (tmp) {
        tmp = type.powerup.skuId === callback(closure_1[4]).GUILD_POWERUP_TAG_SKU_ID;
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
              tmp = type.powerup.skuId === callback(closure_1[4]).GUILD_POWERUP_TAG_SKU_ID;
            }
            return tmp;
          }) + 1, 0, callback(items.splice(findIndexResult1, 1), 1)[0]);
          return items;
        }
      }
    }
    return arr;
  }(function moveServerThemeToFront(arr) {
    const findIndexResult = arr.findIndex((type) => {
      let tmp = "singlePerk" === type.type;
      if (tmp) {
        tmp = type.powerup.skuId === callback(closure_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID;
      }
      return tmp;
    });
    if (findIndexResult <= 0) {
      return arr;
    } else {
      const items = [];
      HermesBuiltin.arraySpread(arr, 0);
      items.unshift(callback(items.splice(findIndexResult, 1), 1)[0]);
      return items;
    }
  }(items));
}
function buildPowerupListings(arg0, arr) {
  let done;
  let tmp = arg2;
  const items = [];
  arr = items;
  let closure_1 = arr.reduce((arg0, type) => {
    if (type.type !== constants.PERK) {
      return arg0;
    } else {
      if (null != closure_8[type.skuId]) {
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
    if (type.type === constants.LEVEL) {
      let obj = { type: "singleLevel", powerup: type };
      let arr = arr.push(obj);
      return 0;
    } else if (null != closure_8[closure_2.skuId]) {
      if (undefined !== closure_1[tmp17]) {
        arr = closure_7[tmp17];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        obj = { type: "multiPerk", group: tmp17, powerups: obj2 };
        arr = arr.push(obj);
        closure_1[tmp17] = undefined;
      }
      return 0;
    } else {
      obj = { type: "singlePerk", powerup: type, badge: closure_6[closure_2.skuId] };
      arr.push(obj);
    }
  }
  const tmp2 = _createForOfIteratorHelperLoose(arr);
  let iter = tmp2();
  if (!iter.done) {
    do {
      closure_2 = iter.value;
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
    const obj = { type: "gameServer" };
    items.push(obj);
  }
  return orderPowerupListings(items);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const GuildPowerupType = tmp2.GuildPowerupType;
const PERK_SKU_BADGES = tmp2.PERK_SKU_BADGES;
const obj = {};
const items = [arg1(dependencyMap[4]).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID, arg1(dependencyMap[4]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, arg1(dependencyMap[4]).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, arg1(dependencyMap[4]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID];
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
const items1 = [, ];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export const POWERUP_GROUP_TO_SKU_IDS = obj;
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = function useBuildGuildPowerupsSections(guildId, gameServerEnabled) {
  gameServerEnabled = guildId;
  const dependencyMap = gameServerEnabled;
  let powerupCatalog;
  const items = [closure_4];
  const stateFromStores = gameServerEnabled(dependencyMap[5]).useStateFromStores(items, () => stateForGuild.getStateForGuild(arg0));
  let closure_2 = stateFromStores;
  if (null != stateFromStores) {
    powerupCatalog = stateFromStores.powerupCatalog;
  }
  const items1 = [powerupCatalog, gameServerEnabled];
  return React.useMemo(() => closure_9.reduce((arr, type) => {
    let tmp;
    if (null != powerupCatalog) {
      tmp = powerupCatalog.powerupCatalog[type];
    }
    if (null == tmp) {
      return arr;
    } else {
      const obj = { type, listings: callback(type, tmp, closure_1) };
      arr.push(obj);
      return arr;
    }
  }, []), items1);
};

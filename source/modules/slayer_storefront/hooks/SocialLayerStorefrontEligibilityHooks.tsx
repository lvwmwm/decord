// Module ID: 8730
// Function ID: 69053
// Name: _createForOfIteratorHelperLoose
// Dependencies: [8731, 4150, 6855, 1838, 4217, 5611, 566, 8356, 8732, 2]
// Exports: useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds, useAreUsersPlayingStorefrontEnabledGames, useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds, useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds, useIsCurrentUserPlayingSocialLayerStorefrontGames, useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds

// Module 8730 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

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
function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [closure_6, closure_7];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(566).useStateFromStoresArray(items, () => {
    let iter6;
    const items = [];
    const tmp = outer1_8(userIds);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp3 = outer1_8;
        let tmp4 = outer1_6;
        let tmp5 = outer1_8(outer1_6.getActivities(iter2.value));
        let iter3 = tmp5();
        let iter4 = iter3;
        let tmp6 = tmp2;
        if (!iter3.done) {
          do {
            let value = iter4.value;
            if (null != value.application_id) {
              let tmp7 = outer1_7;
              let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(value.application_id);
              tmp6 = applicationIdFromDetectableId;
              if (null != applicationIdFromDetectableId) {
                let arr = items.push(applicationIdFromDetectableId);
                tmp6 = applicationIdFromDetectableId;
              }
            }
            iter5 = tmp5();
            iter4 = iter5;
            let tmp10 = value;
            tmp2 = tmp6;
          } while (!iter5.done);
        }
        iter6 = tmp();
        iter2 = iter6;
      } while (!iter6.done);
    }
    return items;
  }, items1);
  const obj = userIds(566);
  const slayerStorefrontDevApplicationIdOverride = userIds(8732).useSlayerStorefrontDevApplicationIdOverride();
  let tmp3 = stateFromStoresArray;
  if (null != slayerStorefrontDevApplicationIdOverride) {
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(stateFromStoresArray, 0);
    items2[arraySpreadResult] = slayerStorefrontDevApplicationIdOverride;
    const sum = arraySpreadResult + 1;
    tmp3 = items2;
  }
  return tmp3;
}
function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  let items = [closure_3, closure_7];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    let iter3;
    const items = [];
    const tmp = outer1_8(outer1_3.getRunningGames());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.id) {
          let tmp4 = outer1_3;
          tmp3 = tmp2;
          if (outer1_3.isDetectionEnabled(value)) {
            let tmp5 = outer1_7;
            let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(value.id);
            tmp3 = applicationIdFromDetectableId;
            if (null != applicationIdFromDetectableId) {
              let arr = items.push(applicationIdFromDetectableId);
              tmp3 = applicationIdFromDetectableId;
            }
          }
        }
        iter3 = tmp();
        tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return items;
  }, []);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [_isNativeReflectConstruct, closure_7];
  const items1 = [userIds];
  return userIds(566).useStateFromStoresArray(items, () => {
    let iter6;
    const items = [];
    const tmp = outer1_8(userIds);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp4 = outer1_2;
        let tmp3 = outer1_8;
        let userOutbox = outer1_2.getUserOutbox(iter2.value);
        let entries;
        if (null != userOutbox) {
          entries = userOutbox.entries;
        }
        if (null == entries) {
          entries = [];
        }
        let tmp3Result = tmp3(entries);
        let iter3 = tmp3Result();
        let iter4 = iter3;
        let tmp7 = tmp2;
        if (!iter3.done) {
          do {
            let value = iter4.value;
            let tmp8 = tmp7;
            if (null != value) {
              let tmp9 = userIds;
              let tmp10 = outer1_1;
              let obj = userIds(outer1_1[7]);
              tmp8 = tmp7;
              if (obj.isGamingLikeEntry(value)) {
                let tmp11 = outer1_7;
                let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(value.extra.application_id);
                tmp8 = applicationIdFromDetectableId;
                if (null != applicationIdFromDetectableId) {
                  let arr = items.push(applicationIdFromDetectableId);
                  tmp8 = applicationIdFromDetectableId;
                }
              }
            }
            iter5 = tmp3Result();
            tmp7 = tmp8;
            iter4 = iter5;
            let tmp14 = value;
            tmp2 = tmp8;
          } while (!iter5.done);
        }
        iter6 = tmp();
        iter2 = iter6;
      } while (!iter6.done);
    }
    return items;
  }, items1);
};
export const useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds = function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo) {
  const _require = memo;
  let items = [closure_4, closure_7];
  const items1 = [memo];
  return _require(566).useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    const tmp = outer1_8(closure_0);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp4 = outer1_4;
        let mutualGuilds = outer1_4.getMutualGuilds(iter2.value);
        let tmp6 = tmp2;
        let tmp7 = tmp3;
        if (null != mutualGuilds) {
          let tmp15 = outer1_8;
          let tmp16 = outer1_8(mutualGuilds);
          let iter6 = tmp16();
          let iter4 = iter6;
          let tmp11 = tmp3;
          let tmp17 = iter6;
          let tmp18 = tmp16;
          tmp6 = tmp2;
          tmp7 = tmp3;
          if (!iter6.done) {
            do {
              let value = iter4.value;
              let tmp8 = outer1_7;
              let storefrontGuildIds = outer1_7.getStorefrontGuildIds();
              if (storefrontGuildIds.has(value.guild.id)) {
                let tmp9 = outer1_7;
                let applicationIdFromGuildId = outer1_7.getApplicationIdFromGuildId(value.guild.id);
                tmp11 = applicationIdFromGuildId;
                if (null != applicationIdFromGuildId) {
                  let arr = items.push(applicationIdFromGuildId);
                  tmp11 = applicationIdFromGuildId;
                }
              }
              iter3 = tmp16();
              iter4 = iter3;
              let tmp13 = iter3;
              let tmp14 = tmp16;
              tmp6 = value;
              tmp7 = tmp11;
            } while (!iter3.done);
          }
        }
        iter5 = tmp();
        tmp2 = tmp6;
        tmp3 = tmp7;
        iter2 = iter5;
      } while (!iter5.done);
    }
    return items;
  }, items1);
};
export { useUsersPlayingStorefrontEnabledGamesApplicationIds };
export const useAreUsersPlayingStorefrontEnabledGames = function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  return useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: userIds.userIds }).length > 0;
};
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let items = [closure_3, closure_7];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    let iter3;
    const items = [];
    const tmp = outer1_8(outer1_3.getGamesSeen(false, false));
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (null != value.id) {
          let tmp2 = outer1_7;
          let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(value.id);
          let tmp4 = applicationIdFromDetectableId;
          if (null != applicationIdFromDetectableId) {
            let arr = items.push(applicationIdFromDetectableId);
            let tmp6 = applicationIdFromDetectableId;
          }
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
    return items;
  });
};
export { useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds };
export const useIsCurrentUserPlayingSocialLayerStorefrontGames = function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  return useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds().length > 0;
};
export const useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds = function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  let items = [_createForOfIteratorHelperLoose];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_5.getGuildIds());
  const obj = stateFromStores(566);
  const items1 = [closure_7];
  const items2 = [stateFromStores];
  return stateFromStores(566).useStateFromStoresArray(items1, () => {
    let iter2;
    const items = [];
    const tmp = outer1_8(stateFromStores);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = outer1_7;
        let applicationIdFromGuildId = outer1_7.getApplicationIdFromGuildId(iter.value);
        if (null != applicationIdFromGuildId) {
          let arr = items.push(applicationIdFromGuildId);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    return items;
  }, items2);
};

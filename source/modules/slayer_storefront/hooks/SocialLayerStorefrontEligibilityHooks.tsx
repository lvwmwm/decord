// Module ID: 8682
// Function ID: 68795
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds, useAreUsersPlayingStorefrontEnabledGames, useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds, useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds, useIsCurrentUserPlayingSocialLayerStorefrontGames, useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds

// Module 8682 (_createForOfIteratorHelperLoose)
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
function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  const arg1 = userIds;
  const items = [closure_6, closure_7];
  const items1 = [userIds];
  const stateFromStoresArray = arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    let iter6;
    const items = [];
    const tmp = callback(userIds);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp3 = closure_8;
        let tmp4 = closure_6;
        let tmp5 = closure_8(closure_6.getActivities(iter2.value));
        let iter3 = tmp5();
        let iter4 = iter3;
        let tmp6 = tmp2;
        if (!iter3.done) {
          do {
            let value = iter4.value;
            if (null != value.application_id) {
              let tmp7 = closure_7;
              let applicationIdFromDetectableId = closure_7.getApplicationIdFromDetectableId(value.application_id);
              tmp6 = applicationIdFromDetectableId;
              if (null != applicationIdFromDetectableId) {
                let arr = items.push(applicationIdFromDetectableId);
                tmp6 = applicationIdFromDetectableId;
              }
            }
            let iter5 = tmp5();
            iter4 = iter5;
            let tmp10 = value;
            let tmp2 = tmp6;
          } while (!iter5.done);
        }
        iter6 = tmp();
        iter2 = iter6;
      } while (!iter6.done);
    }
    return items;
  }, items1);
  const obj = arg1(dependencyMap[6]);
  const slayerStorefrontDevApplicationIdOverride = arg1(dependencyMap[8]).useSlayerStorefrontDevApplicationIdOverride();
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
  const items = [closure_3, closure_7];
  return arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    let iter3;
    const items = [];
    const tmp = callback(runningGames.getRunningGames());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp2;
        if (null != value.id) {
          let tmp4 = closure_3;
          tmp3 = tmp2;
          if (closure_3.isDetectionEnabled(value)) {
            let tmp5 = closure_7;
            let applicationIdFromDetectableId = closure_7.getApplicationIdFromDetectableId(value.id);
            tmp3 = applicationIdFromDetectableId;
            if (null != applicationIdFromDetectableId) {
              let arr = items.push(applicationIdFromDetectableId);
              tmp3 = applicationIdFromDetectableId;
            }
          }
        }
        iter3 = tmp();
        let tmp2 = tmp3;
        iter2 = iter3;
      } while (!iter3.done);
    }
    return items;
  }, []);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  const arg1 = userIds;
  const items = [closure_2, closure_7];
  const items1 = [userIds];
  return arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    let iter6;
    const items = [];
    const tmp = callback(userIds);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp4 = closure_2;
        let tmp3 = closure_8;
        let userOutbox = closure_2.getUserOutbox(iter2.value);
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
              let tmp9 = closure_0;
              let tmp10 = closure_1;
              let obj = closure_0(closure_1[7]);
              tmp8 = tmp7;
              if (obj.isGamingLikeEntry(value)) {
                let tmp11 = closure_7;
                let applicationIdFromDetectableId = closure_7.getApplicationIdFromDetectableId(value.extra.application_id);
                tmp8 = applicationIdFromDetectableId;
                if (null != applicationIdFromDetectableId) {
                  let arr = items.push(applicationIdFromDetectableId);
                  tmp8 = applicationIdFromDetectableId;
                }
              }
            }
            let iter5 = tmp3Result();
            tmp7 = tmp8;
            iter4 = iter5;
            let tmp14 = value;
            let tmp2 = tmp8;
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
  const arg1 = memo;
  const items = [closure_4, closure_7];
  const items1 = [memo];
  return arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    const tmp = callback(arg0);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp4 = closure_4;
        let mutualGuilds = closure_4.getMutualGuilds(iter2.value);
        let tmp6 = tmp2;
        let tmp7 = tmp3;
        if (null != mutualGuilds) {
          let tmp15 = closure_8;
          let tmp16 = closure_8(mutualGuilds);
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
              let tmp8 = closure_7;
              let storefrontGuildIds = closure_7.getStorefrontGuildIds();
              if (storefrontGuildIds.has(value.guild.id)) {
                let tmp9 = closure_7;
                let applicationIdFromGuildId = closure_7.getApplicationIdFromGuildId(value.guild.id);
                tmp11 = applicationIdFromGuildId;
                if (null != applicationIdFromGuildId) {
                  let arr = items.push(applicationIdFromGuildId);
                  tmp11 = applicationIdFromGuildId;
                }
              }
              let iter3 = tmp16();
              iter4 = iter3;
              let tmp13 = iter3;
              let tmp14 = tmp16;
              tmp6 = value;
              tmp7 = tmp11;
            } while (!iter3.done);
          }
        }
        iter5 = tmp();
        let tmp2 = tmp6;
        let tmp3 = tmp7;
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
  const items = [closure_3, closure_7];
  return arg1(dependencyMap[6]).useStateFromStoresArray(items, () => {
    let iter3;
    const items = [];
    const tmp = callback(gamesSeen.getGamesSeen(false, false));
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (null != value.id) {
          let tmp2 = closure_7;
          let applicationIdFromDetectableId = closure_7.getApplicationIdFromDetectableId(value.id);
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
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => guildIds.getGuildIds());
  const arg1 = stateFromStores;
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_7];
  const items2 = [stateFromStores];
  return arg1(dependencyMap[6]).useStateFromStoresArray(items1, () => {
    let iter2;
    const items = [];
    const tmp = callback(stateFromStores);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_7;
        let applicationIdFromGuildId = closure_7.getApplicationIdFromGuildId(iter.value);
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

// Module ID: 8729
// Function ID: 69044
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 5611, 7974, 8730, 566, 6857, 6875, 22, 2]
// Exports: default

// Module 8729 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
const result = require("useDisplayProfile").fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let application;
  const tmp2 = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2])(userId.userId);
  const require = tmp2;
  let items = [tmp2];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let userId;
    if (null != tmp2) {
      userId = tmp2.userId;
    }
    if (null != userId) {
      const items = [tmp2.userId];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  usersPlayingStorefrontEnabledGamesApplicationIds = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  let obj = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const obj2 = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  const obj3 = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  let items1 = [stateFromStoresArray];
  const items2 = [tmp2];
  stateFromStoresArray = require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4]).useStateFromStoresArray(items1, () => {
    let iter3;
    let widgets;
    if (null != set) {
      widgets = set.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      set = new Set();
      let widgets1;
      if (null != set) {
        widgets1 = set.widgets;
      }
      if (null == widgets1) {
        widgets1 = [];
      }
      const tmp19Result = outer1_5(widgets1);
      const iter = tmp19Result();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp6 = tmp2;
          let tmp7 = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
          if (value instanceof tmp2(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[5]).BaseGameWidget) {
            let games = value.games;
            let item = games.forEach((applicationId) => {
              const applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(applicationId.applicationId);
              if (null != applicationIdFromDetectableId) {
                set.add(applicationIdFromDetectableId);
              }
            });
            let tmp10 = tmp5;
          } else {
            let tmp8 = tmp2;
            let tmp9 = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
            tmp10 = tmp5;
            if (value instanceof tmp2(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[6]).ApplicationWidget) {
              let tmp11 = stateFromStoresArray;
              let applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(value.applicationId);
              tmp10 = applicationIdFromDetectableId;
              if (null != applicationIdFromDetectableId) {
                let addResult = set.add(applicationIdFromDetectableId);
                tmp10 = applicationIdFromDetectableId;
              }
            }
          }
          iter3 = tmp19Result();
          tmp5 = tmp10;
          iter2 = iter3;
        } while (!iter3.done);
      }
      const _Array = Array;
      return Array.from(set).sort();
    }
  }, items2);
  if (null != tmp2) {
    application = tmp2.application;
  }
  const items3 = [application, usersPlayingStorefrontEnabledGamesApplicationIds, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, stateFromStoresArray];
  return areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let application;
    if (null != tmp2) {
      application = tmp2.application;
    }
    if (null != application) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(stateFromStoresArray, HermesBuiltin.arraySpread(areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = tmp2(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[7]).uniq(items1);
      const obj = tmp2(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[7]);
    }
    return items;
  }, items3);
};

// Module ID: 8676
// Function ID: 68751
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 8676 (_createForOfIteratorHelperLoose)
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let application;
  const tmp2 = importDefault(dependencyMap[2])(userId.userId);
  const arg1 = tmp2;
  const items = [tmp2];
  const memo = React.useMemo(() => {
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
  const usersPlayingStorefrontEnabledGamesApplicationIds = arg1(dependencyMap[3]).useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  const importDefault = usersPlayingStorefrontEnabledGamesApplicationIds;
  const obj = arg1(dependencyMap[3]);
  const usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = arg1(dependencyMap[3]).useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const dependencyMap = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  const obj2 = arg1(dependencyMap[3]);
  const areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = arg1(dependencyMap[3]).useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  const React = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  const obj3 = arg1(dependencyMap[3]);
  const items1 = [closure_4];
  const items2 = [tmp2];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => {
    let iter3;
    let widgets;
    if (null != tmp2) {
      widgets = tmp2.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      const set = new Set();
      const tmp2 = set;
      let widgets1;
      if (null != tmp2) {
        widgets1 = tmp2.widgets;
      }
      if (null == widgets1) {
        widgets1 = [];
      }
      const tmp19Result = closure_5(widgets1);
      const iter = tmp19Result();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp6 = closure_0;
          let tmp7 = closure_2;
          if (value instanceof closure_0(closure_2[5]).BaseGameWidget) {
            let games = value.games;
            let item = games.forEach((applicationId) => {
              const applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(applicationId.applicationId);
              if (null != applicationIdFromDetectableId) {
                set.add(applicationIdFromDetectableId);
              }
            });
            let tmp10 = tmp5;
          } else {
            let tmp8 = closure_0;
            let tmp9 = closure_2;
            tmp10 = tmp5;
            if (value instanceof closure_0(closure_2[6]).ApplicationWidget) {
              let tmp11 = closure_4;
              let applicationIdFromDetectableId = closure_4.getApplicationIdFromDetectableId(value.applicationId);
              tmp10 = applicationIdFromDetectableId;
              if (null != applicationIdFromDetectableId) {
                let addResult = set.add(applicationIdFromDetectableId);
                tmp10 = applicationIdFromDetectableId;
              }
            }
          }
          iter3 = tmp19Result();
          let tmp5 = tmp10;
          iter2 = iter3;
        } while (!iter3.done);
      }
      const _Array = Array;
      return Array.from(set).sort();
    }
  }, items2);
  closure_4 = stateFromStoresArray;
  if (null != tmp2) {
    application = tmp2.application;
  }
  const items3 = [application, usersPlayingStorefrontEnabledGamesApplicationIds, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, stateFromStoresArray];
  return React.useMemo(() => {
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

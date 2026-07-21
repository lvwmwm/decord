// Module ID: 9721
// Function ID: 75574
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useRecommendationsForApplicationIds, useRecommendationsForSingleUser, useWishlistRecommendationsForSingleUser

// Module 9721 (_createForOfIteratorHelperLoose)
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
function useWishlistRecommendationsWithWishlists(numItems) {
  let applicationIds;
  let source;
  const userIdsAndWishlistIds = numItems.userIdsAndWishlistIds;
  const arg1 = userIdsAndWishlistIds;
  ({ applicationIds, source } = numItems);
  if (source === undefined) {
    source = arg1(dependencyMap[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = numItems.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let closure_3;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let obj = { userIds: React.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items), numItems: numItems.numItems, applicationIds };
  const items = [userIdsAndWishlistIds];
  const tmp3 = function useFetchWishlistRecommendations(userIds) {
    userIds = userIds.userIds;
    const userIdsAndWishlistIds = userIds;
    const numItems = userIds.numItems;
    const applicationIds = userIds.applicationIds;
    const sortedWishlistSkus = applicationIds;
    const items = [recommendations];
    let stateFromStores = userIdsAndWishlistIds(sortedWishlistSkus[7]).useStateFromStores(items, () => store.getRecommendations(userIds, applicationIds));
    const items1 = [userIds, applicationIds, numItems];
    const effect = wishlistSkusToUserAndReasonMap.useEffect(() => {
      if (0 !== userIds.length) {
        if (0 !== applicationIds.length) {
          const recommendations = store.getRecommendations(userIds, applicationIds);
          if (null != recommendations) {
            if ("loading" !== recommendations.state) {
              const _Date = Date;
              let tmp2 = "success" === recommendations.state;
              if (tmp2) {
                tmp2 = recommendations.data.skus.length >= numItems;
              }
              const tmp17 = recommendations.fetchedAt < Date.now() - closure_9;
            }
          }
          const wishlistRecommendations = numItems(applicationIds[10]).fetchWishlistRecommendations(applicationIds, userIds, numItems);
          const obj = numItems(applicationIds[10]);
        }
      }
    }, items1);
    if (0 === userIds.length) {
      stateFromStores = closure_10;
    }
    return stateFromStores;
  }(obj);
  importDefault = tmp3;
  obj = { userIdsAndWishlistIds, source };
  let tmp4;
  if (flag) {
    tmp4 = applicationIds;
  }
  obj.applicationIdsFilter = tmp4;
  const tmp5 = function useSortedWishlistUnownedSkus(applicationIdsFilter) {
    let errors;
    let isFetching;
    let source;
    let userIdsAndWishlistIds;
    applicationIdsFilter = applicationIdsFilter.applicationIdsFilter;
    userIdsAndWishlistIds = applicationIdsFilter;
    ({ userIdsAndWishlistIds, source } = applicationIdsFilter);
    let obj = userIdsAndWishlistIds(sortedWishlistSkus[7]);
    const items = [wishlistErrors];
    const stateFromStores = obj.useStateFromStores(items, () => id.getId());
    const fetchWishlists = userIdsAndWishlistIds(sortedWishlistSkus[8]).useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
    const wishlists = fetchWishlists.wishlists;
    const sortedWishlistSkus = wishlists;
    const items1 = [wishlists, applicationIdsFilter];
    ({ isFetching, errors } = fetchWishlists);
    const memo = wishlistSkusToUserAndReasonMap.useMemo(() => {
      let obj = {};
      const tmp = callback(wishlists.filter(applicationIdsFilter(wishlists[9]).isNotNullish));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          let tmp2 = callback;
          let tmp3 = callback(value.items);
          let iter3 = tmp3();
          if (!iter3.done) {
            while (true) {
              value = iter3.value;
              let tmp4 = null == value.sku || value.isOwned;
              if (!tmp4) {
                let tmp5 = applicationIdsFilter;
                let tmp6 = null != applicationIdsFilter;
                if (tmp6) {
                  let tmp7 = applicationIdsFilter;
                  tmp6 = !applicationIdsFilter.includes(value.sku.applicationId);
                }
                tmp4 = tmp6;
              }
              if (!tmp4) {
                break;
              } else {
                let iter4 = tmp3();
                iter3 = iter4;
                let tmp12 = value;
                continue;
              }
            }
            obj = {};
            if (null != obj[value.skuId]) {
              obj = obj[value.skuId];
            } else {
              obj = {};
            }
            let tmp8 = obj;
            let tmp9 = obj;
            let merged = Object.assign(obj);
            let tmp11 = constants;
            obj[value.userId] = constants.WISHLIST;
            obj[value.skuId] = obj;
          }
          let iter5 = tmp();
          iter2 = iter5;
        }
      }
      return obj;
    }, items1);
    const wishlistSkuIdToSku = memo;
    const items2 = [wishlists, applicationIdsFilter];
    const memo1 = wishlistSkusToUserAndReasonMap.useMemo(() => {
      const found = wishlists.filter(applicationIdsFilter(wishlists[9]).isNotNullish);
      const found1 = found.flatMap((items) => items.items).filter((sku) => {
        let tmp = null != sku && null != sku.sku && !sku.isOwned;
        if (tmp) {
          let hasItem = null == closure_0;
          if (!hasItem) {
            hasItem = closure_0.includes(sku.sku.applicationId);
          }
          tmp = hasItem;
        }
        return tmp;
      });
      return Object.fromEntries(found1.map((arg0) => {
        const items = [, ];
        ({ skuId: arr[0], sku: arr[1] } = arg0);
        return items;
      }));
    }, items2);
    const wishlistSkusToUserAndReasonMap = memo1;
    obj = {
      sortedWishlistSkus: wishlistSkusToUserAndReasonMap.useMemo(() => {
        const keys = Object.keys(memo1);
        const sorted = keys.sort((arg0, arg1) => {
          let obj = closure_3[arg1];
          if (null == obj) {
            obj = {};
          }
          obj = closure_3[arg0];
          if (null == obj) {
            obj = {};
          }
          const diff = Object.keys(obj).length - Object.keys(obj).length;
          if (0 !== diff) {
            return diff;
          } else {
            const _Boolean = Boolean;
            const _Boolean2 = Boolean;
            const _Number = Number;
            const _Number2 = Number;
            const BooleanResult = Boolean(obj[closure_1]);
            return Number(Boolean(obj[closure_1])) - Number(BooleanResult);
          }
        });
        return sorted.map((arg0) => closure_4[arg0]);
      }, items3),
      wishlistSkuIdToSku: memo1,
      wishlistSkusToUserAndReasonMap: memo,
      wishlistsAreFetching: isFetching,
      wishlistErrors: errors
    };
    const items3 = [stateFromStores, memo1, memo];
    return obj;
  }(obj);
  const sortedWishlistSkus = tmp5.sortedWishlistSkus;
  dependencyMap = sortedWishlistSkus;
  const wishlistSkuIdToSku = tmp5.wishlistSkuIdToSku;
  closure_3 = wishlistSkuIdToSku;
  const wishlistSkusToUserAndReasonMap = tmp5.wishlistSkusToUserAndReasonMap;
  React = wishlistSkusToUserAndReasonMap;
  const wishlistsAreFetching = tmp5.wishlistsAreFetching;
  closure_5 = wishlistsAreFetching;
  const wishlistErrors = tmp5.wishlistErrors;
  closure_6 = wishlistErrors;
  const items1 = [tmp3, wishlistSkuIdToSku];
  const memo = React.useMemo(() => {
    if (null != tmp3) {
      if ("success" === tmp3.state) {
        let obj = {};
        const skus = tmp3.data.skus;
        obj.filteredRecommendations = skus.filter((id) => !(id.id in closure_3));
        obj.skusToUserAndReasonRecommendations = tmp3.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items1);
  const recommendations = memo.filteredRecommendations;
  closure_7 = recommendations;
  const skusToUserAndReasonRecommendations = memo.skusToUserAndReasonRecommendations;
  closure_8 = skusToUserAndReasonRecommendations;
  const items2 = [sortedWishlistSkus, recommendations, wishlistSkusToUserAndReasonMap, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = React.useMemo(() => {
    let length;
    let obj = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(wishlistSkusToUserAndReasonMap);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp2 = closure_3;
        let tmp3 = closure_3(entries[num], 2);
        let first = tmp3[0];
        let tmp5 = tmp3[1];
        obj = {};
        let tmp6 = obj;
        let merged1 = Object.assign(obj[first]);
        let tmp8 = obj;
        let tmp9 = tmp5;
        let merged2 = Object.assign(tmp5);
        obj[first] = obj;
        num = num + 1;
        length = entries.length;
      } while (num < length);
    }
    obj = {};
    const items = [...closure_7];
    obj.combinedSkus = items;
    obj.combinedSkusToUserAndReason = obj;
    return obj;
  }, items2);
  const wishlistAndRecommendations = skusToUserAndReason.combinedSkus;
  closure_9 = wishlistAndRecommendations;
  const items3 = [wishlistsAreFetching, tmp3, wishlistErrors];
  const items4 = [recommendations, wishlistAndRecommendations];
  const status = React.useMemo(() => {
    let str = "loading";
    if (!wishlistsAreFetching) {
      str = "loading";
      if (null != tmp3) {
        if (null == tmp3) {
          if (wishlistErrors.filter(userIdsAndWishlistIds(sortedWishlistSkus[9]).isNotNullish).length > 0) {
            let str2 = "error";
          } else {
            str2 = "success";
          }
          str = str2;
        } else {
          str = "loading";
        }
      }
    }
    return str;
  }, items3);
  const memo3 = React.useMemo(() => {
    const items = [...closure_7.map((id) => id.id), ...closure_9.map((id) => id.id)];
    return userIdsAndWishlistIds(sortedWishlistSkus[11]).uniq(items);
  }, items4);
  const getOrFetchStorefrontPricesForSkuIds = arg1(dependencyMap[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo3 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
}
function useMemoizedUserIdAndWishlistId(userId) {
  const arg1 = userId;
  const items = [userId];
  const effect = React.useEffect(() => {
    defaultWishlistId(closure_2[13])(arg0);
  }, items);
  let obj = arg1(dependencyMap[7]);
  const items1 = [closure_5];
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => ({ defaultWishlistId: firstWishlistId.getFirstWishlistId(arg0) })).defaultWishlistId;
  const importDefault = defaultWishlistId;
  obj = {
    userIdsAndWishlistIds: React.useMemo(() => {
      const items = [{ userId: arg0, wishlistId: defaultWishlistId }];
      return items;
    }, items2),
    defaultWishlistId
  };
  const items2 = [userId, defaultWishlistId];
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
let closure_8 = arg1(dependencyMap[5]).WishlistRecommendationReason;
let closure_9 = 30 * importDefault(dependencyMap[6]).Millis.MINUTE;
let obj = {};
obj = { skus: [], skus_to_user_and_reason: {}, applications: [] };
importDefaultResult = new importDefaultResult(obj);
obj.data = importDefaultResult;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  let numItems;
  let source;
  let status;
  let userId;
  let wishlistAndRecommendations;
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = arg1(dependencyMap[8]).WishlistFetchSource.USER_PROFILE;
  }
  const tmp3 = useMemoizedUserIdAndWishlistId(userId);
  let obj = { userIdsAndWishlistIds: tmp3.userIdsAndWishlistIds, applicationIds: arg1(dependencyMap[14]).useWishlistApplicationIds(userId), numItems, source };
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const skusToUserAndReason = tmp4.skusToUserAndReason;
  ({ wishlistAndRecommendations, status } = tmp4);
  const obj2 = arg1(dependencyMap[14]);
  const wishlistSkuFilter = arg1(dependencyMap[15]).useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  obj = { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId: tmp3.defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
  return obj;
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(applicationIds) {
  let skusToUserAndReason;
  let status;
  const userIds = applicationIds.userIds;
  const arg1 = userIds;
  const numItems = applicationIds.numItems;
  const importDefault = numItems;
  let USER_PROFILE = applicationIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = arg1(dependencyMap[8]).WishlistFetchSource.USER_PROFILE;
  }
  let dependencyMap;
  let obj = {
    userIdsAndWishlistIds: function useMemoizedUserIdsAndWishlistIds(closure_4) {
      const userIds = closure_4;
      const items = [closure_4];
      const effect = React.useEffect(() => {
        const item = arg0.forEach((arg0) => {
          callback(closure_2[13])(arg0);
        });
      }, items);
      const items1 = [closure_5];
      const stateFromStoresArray = userIds(wishlistAndRecommendations[7]).useStateFromStoresArray(items1, () => arg0.map((arg0) => {
        const firstWishlistId = firstWishlistId.getFirstWishlistId(arg0);
        let tmp2 = null;
        if (null != firstWishlistId) {
          tmp2 = firstWishlistId;
        }
        return tmp2;
      }));
      const numItems = stateFromStoresArray;
      const items2 = [closure_4, stateFromStoresArray];
      return React.useMemo(() => arg0.map((userId) => ({ userId, wishlistId: closure_1[arg1] })), items2);
    }(React.useMemo(() => {
      let substr;
      if (null != userIds) {
        substr = userIds.slice(0, 5);
      }
      return substr;
    }, items)),
    applicationIds: applicationIds.applicationIds,
    numItems
  };
  const items = [userIds];
  obj.source = USER_PROFILE;
  obj.filterByApplicationIds = true;
  const tmp3 = useWishlistRecommendationsWithWishlists(obj);
  const wishlistAndRecommendations = tmp3.wishlistAndRecommendations;
  dependencyMap = wishlistAndRecommendations;
  obj = { recommendations: React.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items1), skusToUserAndReason, status };
  const items1 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  return obj;
};
export const useRecommendationsForSingleUser = function useRecommendationsForSingleUser(source) {
  let numItems;
  let skusToUserAndReason;
  let status;
  let userId;
  ({ userId, numItems } = source);
  const arg1 = numItems;
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = arg1(dependencyMap[8]).WishlistFetchSource.USER_PROFILE;
  }
  let importDefault;
  let obj = { userIdsAndWishlistIds: useMemoizedUserIdAndWishlistId(userId).userIdsAndWishlistIds, applicationIds: arg1(dependencyMap[14]).useWishlistApplicationIds(userId), numItems, source: USER_PROFILE };
  const tmp3 = useWishlistRecommendationsWithWishlists(obj);
  const recommendations = tmp3.recommendations;
  importDefault = recommendations;
  obj = { recommendations: React.useMemo(() => recommendations.slice(0, numItems), items), skusToUserAndReason, status };
  const items = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  return obj;
};

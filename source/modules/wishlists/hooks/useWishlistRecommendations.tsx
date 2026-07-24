// Module ID: 9763
// Function ID: 75840
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 6855, 1194, 9764, 5610, 664, 566, 8717, 1327, 8724, 22, 8725, 7975, 9765, 9766, 2]
// Exports: useRecommendationsForApplicationIds, useRecommendationsForSingleUser, useWishlistRecommendationsForSingleUser

// Module 9763 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import { WishlistRecommendationReason as closure_8 } from "_isNativeReflectConstruct";

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
function useWishlistRecommendationsWithWishlists(numItems) {
  let applicationIds;
  let source;
  const userIdsAndWishlistIds = numItems.userIdsAndWishlistIds;
  ({ applicationIds, source } = numItems);
  if (source === undefined) {
    source = userIdsAndWishlistIds(sortedWishlistSkus[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = numItems.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  let c1;
  sortedWishlistSkus = undefined;
  let wishlistSkuIdToSku;
  let wishlistSkusToUserAndReasonMap;
  let wishlistsAreFetching;
  let wishlistErrors;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let obj = { userIds: wishlistSkusToUserAndReasonMap.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items), numItems: numItems.numItems, applicationIds };
  items = [userIdsAndWishlistIds];
  let tmp3 = (function useFetchWishlistRecommendations(userIds) {
    userIds = userIds.userIds;
    const numItems = userIds.numItems;
    const applicationIds = userIds.applicationIds;
    const items = [recommendations];
    let stateFromStores = userIdsAndWishlistIds(sortedWishlistSkus[7]).useStateFromStores(items, () => recommendations.getRecommendations(userIds, applicationIds));
    const items1 = [userIds, applicationIds, numItems];
    const effect = wishlistSkusToUserAndReasonMap.useEffect(() => {
      if (0 !== userIds.length) {
        if (0 !== applicationIds.length) {
          recommendations = recommendations.getRecommendations(userIds, applicationIds);
          if (null != recommendations) {
            if ("loading" !== recommendations.state) {
              const _Date = Date;
              let tmp2 = "success" === recommendations.state;
              if (tmp2) {
                tmp2 = recommendations.data.skus.length >= numItems;
              }
              const tmp17 = recommendations.fetchedAt < Date.now() - wishlistAndRecommendations;
            }
          }
          const wishlistRecommendations = numItems(sortedWishlistSkus[10]).fetchWishlistRecommendations(applicationIds, userIds, numItems);
          const obj = numItems(sortedWishlistSkus[10]);
        }
      }
    }, items1);
    if (0 === userIds.length) {
      stateFromStores = outer1_10;
    }
    return stateFromStores;
  })(obj);
  c1 = tmp3;
  obj = { userIdsAndWishlistIds, source };
  let tmp4;
  if (flag) {
    tmp4 = applicationIds;
  }
  obj.applicationIdsFilter = tmp4;
  let tmp5 = (function useSortedWishlistUnownedSkus(applicationIdsFilter) {
    let errors;
    let isFetching;
    let source;
    let userIdsAndWishlistIds;
    applicationIdsFilter = applicationIdsFilter.applicationIdsFilter;
    ({ userIdsAndWishlistIds, source } = applicationIdsFilter);
    let obj = userIdsAndWishlistIds(sortedWishlistSkus[7]);
    let items = [wishlistErrors];
    const stateFromStores = obj.useStateFromStores(items, () => wishlistErrors.getId());
    const fetchWishlists = userIdsAndWishlistIds(sortedWishlistSkus[8]).useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
    const wishlists = fetchWishlists.wishlists;
    const items1 = [wishlists, applicationIdsFilter];
    ({ isFetching, errors } = fetchWishlists);
    const memo = wishlistSkusToUserAndReasonMap.useMemo(() => {
      let obj = {};
      const tmp = outer2_11(wishlists.filter(userIdsAndWishlistIds(sortedWishlistSkus[9]).isNotNullish));
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let value = iter2.value;
          let tmp2 = outer2_11;
          let tmp3 = outer2_11(value.items);
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
            let tmp11 = skusToUserAndReasonRecommendations;
            obj[value.userId] = skusToUserAndReasonRecommendations.WISHLIST;
            obj[value.skuId] = obj;
          }
          let iter5 = tmp();
          iter2 = iter5;
        }
      }
      return obj;
    }, items1);
    const items2 = [wishlists, applicationIdsFilter];
    const memo1 = wishlistSkusToUserAndReasonMap.useMemo(() => {
      const found = wishlists.filter(userIdsAndWishlistIds(sortedWishlistSkus[9]).isNotNullish);
      const found1 = found.flatMap((items) => items.items).filter((sku) => {
        let tmp = null != sku && null != sku.sku && !sku.isOwned;
        if (tmp) {
          let hasItem = null == outer1_0;
          if (!hasItem) {
            hasItem = outer1_0.includes(sku.sku.applicationId);
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
    obj = {
      sortedWishlistSkus: wishlistSkusToUserAndReasonMap.useMemo(() => {
        const keys = Object.keys(memo1);
        const sorted = keys.sort((arg0, arg1) => {
          let obj = outer1_3[arg1];
          if (null == obj) {
            obj = {};
          }
          obj = outer1_3[arg0];
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
            const BooleanResult = Boolean(obj[outer1_1]);
            return Number(Boolean(obj[outer1_1])) - Number(BooleanResult);
          }
        });
        return sorted.map((arg0) => outer1_4[arg0]);
      }, items3),
      wishlistSkuIdToSku: memo1,
      wishlistSkusToUserAndReasonMap: memo,
      wishlistsAreFetching: isFetching,
      wishlistErrors: errors
    };
    items3 = [stateFromStores, memo1, memo];
    return obj;
  })(obj);
  sortedWishlistSkus = tmp5.sortedWishlistSkus;
  wishlistSkuIdToSku = tmp5.wishlistSkuIdToSku;
  wishlistSkusToUserAndReasonMap = tmp5.wishlistSkusToUserAndReasonMap;
  wishlistsAreFetching = tmp5.wishlistsAreFetching;
  wishlistErrors = tmp5.wishlistErrors;
  let items1 = [tmp3, wishlistSkuIdToSku];
  let memo = wishlistSkusToUserAndReasonMap.useMemo(() => {
    if (null != _undefined) {
      if ("success" === _undefined.state) {
        let obj = {};
        const skus = _undefined.data.skus;
        obj.filteredRecommendations = skus.filter((id) => !(id.id in outer1_3));
        obj.skusToUserAndReasonRecommendations = _undefined.data.skusToUserAndReason;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items1);
  recommendations = memo.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo.skusToUserAndReasonRecommendations;
  let items2 = [sortedWishlistSkus, recommendations, wishlistSkusToUserAndReasonMap, skusToUserAndReasonRecommendations];
  const skusToUserAndReason = wishlistSkusToUserAndReasonMap.useMemo(() => {
    let length;
    let obj = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(wishlistSkusToUserAndReasonMap);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp2 = wishlistSkuIdToSku;
        let tmp3 = wishlistSkuIdToSku(entries[num], 2);
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
    const items = [...recommendations];
    obj.combinedSkus = items;
    obj.combinedSkusToUserAndReason = obj;
    return obj;
  }, items2);
  wishlistAndRecommendations = skusToUserAndReason.combinedSkus;
  let items3 = [wishlistsAreFetching, tmp3, wishlistErrors];
  const items4 = [recommendations, wishlistAndRecommendations];
  const status = wishlistSkusToUserAndReasonMap.useMemo(() => {
    let str = "loading";
    if (!wishlistsAreFetching) {
      str = "loading";
      if (null != _undefined) {
        if (null == _undefined) {
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
  const memo3 = wishlistSkusToUserAndReasonMap.useMemo(() => {
    const items = [...recommendations.map((id) => id.id), ...wishlistAndRecommendations.map((id) => id.id)];
    return userIdsAndWishlistIds(sortedWishlistSkus[11]).uniq(items);
  }, items4);
  const getOrFetchStorefrontPricesForSkuIds = userIdsAndWishlistIds(sortedWishlistSkus[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo3 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason: skusToUserAndReason.combinedSkusToUserAndReason, status };
}
function useMemoizedUserIdAndWishlistId(userId) {
  const _require = userId;
  let items = [userId];
  const effect = React.useEffect(() => {
    defaultWishlistId(outer1_2[13])(closure_0);
  }, items);
  let obj = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => ({ defaultWishlistId: outer1_5.getFirstWishlistId(closure_0) })).defaultWishlistId;
  obj = {
    userIdsAndWishlistIds: React.useMemo(() => {
      const items = [{ userId: closure_0, wishlistId: defaultWishlistId }];
      return items;
    }, items2),
    defaultWishlistId
  };
  items2 = [userId, defaultWishlistId];
  return obj;
}
let closure_9 = 30 * require("set").Millis.MINUTE;
let obj = { state: "success", data: null, fetchedAt: 0 };
obj = { skus: [], skus_to_user_and_reason: {}, applications: [] };
importDefaultResult = new importDefaultResult(obj);
obj.data = importDefaultResult;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  let numItems;
  let source;
  let status;
  let userId;
  let wishlistAndRecommendations;
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = require(8717) /* _createForOfIteratorHelperLoose */.WishlistFetchSource.USER_PROFILE;
  }
  const tmp3 = useMemoizedUserIdAndWishlistId(userId);
  let obj = { userIdsAndWishlistIds: tmp3.userIdsAndWishlistIds, applicationIds: require(9765) /* useWishlistApplicationIds */.useWishlistApplicationIds(userId), numItems, source };
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const skusToUserAndReason = tmp4.skusToUserAndReason;
  ({ wishlistAndRecommendations, status } = tmp4);
  const obj2 = require(9765) /* useWishlistApplicationIds */;
  const wishlistSkuFilter = require(9766) /* useWishlistSkuFilter */.useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  obj = { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId: tmp3.defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
  return obj;
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(applicationIds) {
  let skusToUserAndReason;
  let status;
  const userIds = applicationIds.userIds;
  const numItems = applicationIds.numItems;
  let USER_PROFILE = applicationIds.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userIds(wishlistAndRecommendations[8]).WishlistFetchSource.USER_PROFILE;
  }
  wishlistAndRecommendations = undefined;
  let obj = {
    userIdsAndWishlistIds: (function useMemoizedUserIdsAndWishlistIds(result) {
      let closure_0 = result;
      const items = [result];
      const effect = outer1_4.useEffect(() => {
        const item = closure_0.forEach((arg0) => {
          numItems(wishlistAndRecommendations[13])(arg0);
        });
      }, items);
      const items1 = [outer1_5];
      const stateFromStoresArray = userIds(wishlistAndRecommendations[7]).useStateFromStoresArray(items1, () => closure_0.map((arg0) => {
        const firstWishlistId = outer3_5.getFirstWishlistId(arg0);
        let tmp2 = null;
        if (null != firstWishlistId) {
          tmp2 = firstWishlistId;
        }
        return tmp2;
      }));
      const items2 = [result, stateFromStoresArray];
      return outer1_4.useMemo(() => closure_0.map((userId) => ({ userId, wishlistId: outer1_1[arg1] })), items2);
    })(React.useMemo(() => {
      let substr;
      if (null != userIds) {
        substr = userIds.slice(0, 5);
      }
      return substr;
    }, items)),
    applicationIds: applicationIds.applicationIds,
    numItems
  };
  items = [userIds];
  obj.source = USER_PROFILE;
  obj.filterByApplicationIds = true;
  const tmp3 = useWishlistRecommendationsWithWishlists(obj);
  wishlistAndRecommendations = tmp3.wishlistAndRecommendations;
  obj = { recommendations: React.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items1), skusToUserAndReason, status };
  items1 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  return obj;
};
export const useRecommendationsForSingleUser = function useRecommendationsForSingleUser(source) {
  let numItems;
  let skusToUserAndReason;
  let status;
  let userId;
  ({ userId, numItems } = source);
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = numItems(8717).WishlistFetchSource.USER_PROFILE;
  }
  let recommendations;
  let obj = { userIdsAndWishlistIds: useMemoizedUserIdAndWishlistId(userId).userIdsAndWishlistIds, applicationIds: numItems(9765).useWishlistApplicationIds(userId), numItems, source: USER_PROFILE };
  const tmp3 = useWishlistRecommendationsWithWishlists(obj);
  recommendations = tmp3.recommendations;
  obj = { recommendations: React.useMemo(() => recommendations.slice(0, numItems), items), skusToUserAndReason, status };
  items = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp3);
  return obj;
};

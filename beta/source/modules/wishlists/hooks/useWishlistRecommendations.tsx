// Module ID: 10257
// Function ID: 10258
// Name: useWishlistRecommendations
// Dependencies: [32, 19, 7035, 502, 10258, 6648, 1091, 504, 8238, 1370, 8245, 12, 8246, 7632, 10259, 10260, 2]
// Exports: useRecommendationsForApplicationIds, useRecommendationsForSingleUser, useWishlistRecommendationsForSingleUser

// Module 10257 (useWishlistRecommendations)
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1091 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import WishlistRecommendationRecord2 from "WishlistRecommendationRecord" /* 6648 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WishlistRecommendationsStore from "WishlistRecommendationsStore" /* 10258 */;
import size from "module_2" /* 2 */;

const WishlistRecommendationRecord = WishlistRecommendationRecord2;
let firstWishlistId;

let obj2;
function useWishlistRecommendationsWithWishlists(userIdsAndWishlistIds) {
  let applicationIds;
  let errors;
  let isFetching;
  let memo3;
  let numItems;
  let source;
  let tmp7;
  userIdsAndWishlistIds = userIdsAndWishlistIds.userIdsAndWishlistIds;
  ({ numItems, applicationIds, source } = userIdsAndWishlistIds);
  if (source === undefined) {
    let tmp = userIdsAndWishlistIds;
    source = userIdsAndWishlistIds(memo3[8]).WishlistFetchSource.USER_PROFILE;
  }
  let flag = userIdsAndWishlistIds.filterByApplicationIds;
  if (flag === undefined) {
    flag = false;
  }
  memo3 = undefined;
  let memo2;
  let memo1;
  isFetching = undefined;
  errors = undefined;
  let recommendations;
  let skusToUserAndReasonRecommendations;
  let wishlistAndRecommendations;
  let obj = memo1;
  let items = [userIdsAndWishlistIds];
  const memo = memo1.useMemo(() => userIdsAndWishlistIds.map((userId) => userId.userId), items);
  let tmp3 = userIdsAndWishlistIds;
  let tmp4 = memo3;
  let obj2 = userIdsAndWishlistIds(memo3[7]);
  const items1 = [recommendations];
  const items2 = [memo, applicationIds, numItems];
  let stateFromStores = obj2.useStateFromStores(items1, () => recommendations.getRecommendations(memo, applicationIds));
  const effect = memo1.useEffect(() => {
    if (0 !== memo.length) {
      if (0 !== applicationIds.length) {
        recommendations = recommendations.getRecommendations(tmp, tmp8);
        if (null != recommendations) {
          if ("loading" !== recommendations.state) {
            const _Date = Date;
            let tmp3 = "success" === recommendations.state;
            recommendations.fetchedAt < Date.now() - wishlistAndRecommendations;
            if (tmp3) {
              tmp3 = recommendations.data.skus.length >= numItems;
            }
          }
        }
        const obj = stateFromStores(memo3[10]);
        const wishlistRecommendations = obj.fetchWishlistRecommendations(tmp8, tmp, numItems);
      }
    }
  }, items2);
  if (0 === memo.length) {
    tmp7 = obj;
  } else {
    tmp7 = stateFromStores;
  }
  stateFromStores = tmp7;
  let tmp8;
  if (flag) {
    tmp8 = applicationIds;
  }
  applicationIds = tmp8;
  const items3 = [errors];
  const tmp3Result = tmp3(tmp4[7]);
  const stateFromStores1 = tmp3Result.useStateFromStores(items3, () => errors.getId());
  const tmp3Result3 = tmp3(tmp4[8]);
  const fetchWishlists = tmp3Result3.useFetchWishlists({ wishlistIdsAndUsers: userIdsAndWishlistIds, source });
  const wishlists = fetchWishlists.wishlists;
  ({ isFetching, errors } = fetchWishlists);
  const items4 = [wishlists, tmp8];
  memo1 = obj.useMemo(() => {
    const found = wishlists.filter(userIdsAndWishlistIds(memo3[9]).isNotNullish);
    const obj = {};
    const iter = found[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let items = nextResult.items;
      for (const item10023 of items) {
        let tmp6 = item10023;
        let isOwned = null == item10023.sku;
        if (!isOwned) {
          isOwned = tmp6.isOwned;
        }
        if (!isOwned) {
          let obj2 = applicationIds;
          let tmp8 = null != applicationIds;
          if (tmp8) {
            tmp8 = !obj2.includes(tmp6.sku.applicationId);
          }
          isOwned = tmp8;
        }
        if (!isOwned) {
          let obj3;
          let skuId = tmp6.skuId;
          if (null != obj[tmp6.skuId]) {
            obj3 = obj[tmp6.skuId];
          } else {
            obj3 = {};
          }
          let obj4 = {};
          let merged = Object.assign(obj3);
          obj4[tmp3.userId] = skusToUserAndReasonRecommendations.WISHLIST;
          obj[skuId] = obj4;
        }
        continue;
      }
      continue;
    }
    return obj;
  }, items4);
  const items5 = [wishlists, tmp8];
  memo2 = obj.useMemo(() => {
    const found = wishlists.filter(userIdsAndWishlistIds(memo3[9]).isNotNullish);
    const flatMapResult = found.flatMap((items) => items.items);
    const found1 = flatMapResult.filter((sku) => {
      let tmp = null != sku && null != sku.sku && !sku.isOwned;
      if (tmp) {
        tmp = null == applicationIds || applicationIds.includes(sku.sku.applicationId);
        null == applicationIds || applicationIds.includes(sku.sku.applicationId);
      }
      return tmp;
    });
    return fromEntries(found1.map((item) => {
      const items = [, ];
      ({ skuId: arr[0], sku: arr[1] } = item);
      return items;
    }));
  }, items5);
  const items6 = [stateFromStores1, memo2, memo1];
  memo3 = obj.useMemo(() => {
    const keys = Object.keys(memo2);
    const sorted = keys.sort((arg0, arg1) => {
      let obj = memo1[arg1];
      const tmp = memo1;
      if (obj == null) {
        obj = {};
      }
      let obj2 = tmp[arg0];
      if (obj2 == null) {
        obj2 = {};
      }
      const diff = Object.keys(obj).length - Object.keys(obj2).length;
      if (0 !== diff) {
        return diff;
      } else {
        const _Boolean = Boolean;
        const _Boolean2 = Boolean;
        const _Number = Number;
        const _Number2 = Number;
        const BooleanResult = Boolean(obj[stateFromStores1]);
        const NumberResult = Number(Boolean(obj2[stateFromStores1]));
        return NumberResult - Number(BooleanResult);
      }
    });
    return sorted.map((item) => memo2[item]);
  }, items6);
  const items7 = [tmp7, memo2];
  const memo4 = obj.useMemo(() => {
    let skus;
    if (null != stateFromStores) {
      let obj;
      if ("success" === stateFromStores.state) {
        obj = { filteredRecommendations: skus.filter((id) => !(id.id in memo2)), skusToUserAndReasonRecommendations: stateFromStores.data.skusToUserAndReason };
        skus = tmp.data.skus;
      }
      return obj;
    }
    obj = { filteredRecommendations: [], skusToUserAndReasonRecommendations: {} };
  }, items7);
  recommendations = memo4.filteredRecommendations;
  skusToUserAndReasonRecommendations = memo4.skusToUserAndReasonRecommendations;
  const items8 = [memo3, recommendations, memo1, skusToUserAndReasonRecommendations];
  const memo5 = obj.useMemo(() => {
    let items;
    let tmp7;
    let tmp8;
    combinedSkusToUserAndReason = {};
    const merged = Object.assign(skusToUserAndReasonRecommendations);
    const entries = Object.entries(memo1);
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp8] = tmp6;
      let obj2 = {};
      let merged1 = Object.assign(combinedSkusToUserAndReason[tmp7]);
      let merged2 = Object.assign(tmp8);
      combinedSkusToUserAndReason[tmp7] = obj2;
      continue;
    }
    const obj3 = { combinedSkus: items, combinedSkusToUserAndReason };
    items = [...recommendations];
    return obj3;
  }, items8);
  wishlistAndRecommendations = memo5.combinedSkus;
  const items9 = [isFetching, tmp7, errors];
  const skusToUserAndReason = memo5.combinedSkusToUserAndReason;
  const items10 = [recommendations, wishlistAndRecommendations];
  const status = obj.useMemo(() => {
    let str = "loading";
    if (!isFetching) {
      str = "loading";
      if (null != stateFromStores) {
        if (null == stateFromStores) {
          let str2;
          if (errors.filter(GlobalUtils.isNotNullish).length > 0) {
            str2 = "error";
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
  }, items9);
  const memo7 = obj.useMemo(() => {
    const items = [...recommendations.map((id) => id.id), ...wishlistAndRecommendations.map((id) => id.id)];
    const obj = _mod12;
    return obj.uniq(items);
  }, items10);
  const tmp3Result4 = tmp3(tmp4[12]);
  const getOrFetchStorefrontPricesForSkuIds = tmp3Result4.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo7 });
  return { recommendations, wishlistAndRecommendations, skusToUserAndReason, status };
}
let closure_8 = WishlistRecommendationRecord2.WishlistRecommendationReason;
let closure_9 = 30 * DurationsDefault.Millis.MINUTE;
let combinedSkusToUserAndReason = { state: "success", data: new WishlistRecommendationRecord(obj2), fetchedAt: 0 };
obj2 = { skus: [], skus_to_user_and_reason: {}, applications: [] };
new WishlistRecommendationRecord(obj2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistRecommendations.tsx");

export const useWishlistRecommendationsForSingleUser = function useWishlistRecommendationsForSingleUser(arg0) {
  let numItems;
  let obj3;
  let skusToUserAndReason;
  let source;
  let status;
  let userId;
  let wishlistAndRecommendations;
  ({ userId, numItems, source } = arg0);
  if (source === undefined) {
    source = userId(8238).WishlistFetchSource.USER_PROFILE;
  }
  const items = [userId];
  const effect = react.useEffect(() => {
    maybeFetchUserProfileDefault(userId);
  }, items);
  const items1 = [UserProfileStore];
  const obj = userId(504);
  const defaultWishlistId = obj.useStateFromStoresObject(items1, () => {
    const obj = { defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) };
    return obj;
  }).defaultWishlistId;
  const items2 = [userId, defaultWishlistId];
  const obj2 = {
    userIdsAndWishlistIds: react.useMemo(() => {
      const items = [];
      const obj = { userId, wishlistId: defaultWishlistId };
      items[0] = obj;
      return items;
    }, items2),
    applicationIds: obj3.useWishlistApplicationIds(userId),
    numItems,
    source
  };
  obj3 = userId(10259);
  ({ skusToUserAndReason, wishlistAndRecommendations, status } = useWishlistRecommendationsWithWishlists(obj2));
  useWishlistRecommendationsWithWishlists(obj2);
  const obj4 = userId(10260);
  const wishlistSkuFilter = obj4.useWishlistSkuFilter({ wishlistAndRecommendations, skusToUserAndReason, userId, numItems });
  return { wishlistAndRecommendations: wishlistSkuFilter.slicedWishlistAndRecommendations, skusToUserAndReason, status, defaultWishlistId, totalUnownedWishlistItemCount: wishlistSkuFilter.totalUnownedWishlistItemCount };
};
export const useRecommendationsForApplicationIds = function useRecommendationsForApplicationIds(userIds) {
  let items3;
  let items4;
  let skusToUserAndReason;
  let status;
  let wishlistAndRecommendations;
  userIds = userIds.userIds;
  const numItems = userIds.numItems;
  let USER_PROFILE = userIds.source;
  const applicationIds = userIds.applicationIds;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userIds(wishlistAndRecommendations[8]).WishlistFetchSource.USER_PROFILE;
  }
  wishlistAndRecommendations = undefined;
  const items = [userIds];
  const obj = { userIdsAndWishlistIds: react.useMemo(() => memo.map((userId, index) => ({ userId, wishlistId: stateFromStoresArray[index] })), items3), applicationIds, numItems, source: USER_PROFILE, filterByApplicationIds: true };
  const memo = react.useMemo(() => {
    let substr;
    const arr = userIds;
    if (userIds != null) {
      substr = arr.slice(0, 5);
    }
    return substr;
  }, items);
  const items1 = [memo];
  const effect = react.useEffect(() => {
    const item = memo.forEach((item) => {
      stateFromStoresArray(closure_1_2[13])(item);
    });
  }, items1);
  const items2 = [UserProfileStore];
  const obj2 = userIds(wishlistAndRecommendations[7]);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => memo.map((item) => {
    firstWishlistId = firstWishlistId.getFirstWishlistId(item);
    if (firstWishlistId == null) {
      firstWishlistId = null;
    }
    return firstWishlistId;
  }));
  items3 = [memo, stateFromStoresArray];
  const tmp6 = useWishlistRecommendationsWithWishlists(obj);
  wishlistAndRecommendations = tmp6.wishlistAndRecommendations;
  const obj3 = { recommendations: react.useMemo(() => wishlistAndRecommendations.slice(0, numItems), items4), skusToUserAndReason, status };
  items4 = [wishlistAndRecommendations, numItems];
  ({ skusToUserAndReason, status } = tmp6);
  return obj3;
};
export const useRecommendationsForSingleUser = function useRecommendationsForSingleUser(source) {
  let items2;
  let items3;
  let numItems;
  let obj3;
  let skusToUserAndReason;
  let status;
  let userId;
  ({ userId, numItems } = source);
  let USER_PROFILE = source.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = userId(8238).WishlistFetchSource.USER_PROFILE;
  }
  let obj = {
    userIdsAndWishlistIds: react.useMemo(() => {
      const items = [];
      const obj = { userId, wishlistId: defaultWishlistId };
      items[0] = obj;
      return items;
    }, items2),
    applicationIds: obj3.useWishlistApplicationIds(userId),
    numItems,
    source: USER_PROFILE
  };
  let items = [userId];
  const effect = react.useEffect(() => {
    maybeFetchUserProfileDefault(userId);
  }, items);
  const items1 = [UserProfileStore];
  const obj2 = userId(504);
  const defaultWishlistId = obj2.useStateFromStoresObject(items1, () => {
    const obj = { defaultWishlistId: UserProfileStore.getFirstWishlistId(userId) };
    return obj;
  }).defaultWishlistId;
  items2 = [userId, defaultWishlistId];
  obj3 = userId(10259);
  const tmp4 = useWishlistRecommendationsWithWishlists(obj);
  const recommendations = tmp4.recommendations;
  const obj4 = { recommendations: react.useMemo(() => recommendations.slice(0, numItems), items3), skusToUserAndReason, status };
  items3 = [recommendations, numItems];
  ({ skusToUserAndReason, status } = tmp4);
  return obj4;
};

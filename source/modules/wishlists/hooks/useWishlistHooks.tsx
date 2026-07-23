// Module ID: 8676
// Function ID: 68630
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 6856, 1194, 1849, 8677, 8678, 566, 8683, 22, 8684, 7888, 8688, 8693, 2]
// Exports: useCurrentUserWishlist, useFetchWishlists, useIsSkuInWishlist, useShouldShowWishlistInDMGifting

// Module 8676 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { getWishlistSkuIds } from "_isNativeReflectConstruct";

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
function getUserWishlistKey(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + ":" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + ":default";
  }
  return combined;
}
function useFetchWishlist(wishlistId) {
  let importDefault;
  let source;
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    source = obj.USER_PROFILE;
  }
  let first;
  let React;
  let useEffect;
  let stateFromStores;
  obj = wishlistId(source[7]);
  let items = [closure_9];
  const tmp2 = first(obj.useStateFromStoresArray(items, () => {
    if (null == wishlistId) {
      const items = [null, "success", undefined, undefined];
      let items1 = items;
    } else {
      items1 = [outer1_9.getWishlist(wishlistId), outer1_9.getStatus(wishlistId), outer1_9.getError(wishlistId), outer1_9.getUpdatedAt(wishlistId)];
    }
    return items1;
  }), 4);
  first = tmp2[0];
  React = tmp5;
  useEffect = tmp6;
  let items1 = [first];
  const memo = React.useMemo(() => {
    if (null == first) {
      let items = [];
    } else {
      items = wishlistId(source[9]).uniq(outer1_10(first));
      const obj = wishlistId(source[9]);
    }
    return items;
  }, items1);
  const getOrFetchStorefrontPricesForSkuIds = wishlistId(source[10]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const obj2 = wishlistId(source[10]);
  const items2 = [stateFromStores];
  stateFromStores = wishlistId(source[7]).useStateFromStores(items2, () => {
    if (null != wishlistId) {
      if (null != closure_1) {
        const wishlistSettings = stateFromStores.getWishlistSettings(closure_1, wishlistId);
        let updated_at;
        if (null != wishlistSettings) {
          updated_at = wishlistSettings.updated_at;
        }
        return updated_at;
      }
    }
  });
  const items3 = [wishlistId, source, first, stateFromStores, tmp2[3], tmp2[2]];
  useEffect(() => {
    let isFetchingResult = null == wishlistId;
    if (!isFetchingResult) {
      isFetchingResult = outer1_9.isFetching(wishlistId);
    }
    if (!isFetchingResult) {
      isFetchingResult = null != c4;
    }
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        let tmp8 = null != stateFromStores;
        if (tmp8) {
          tmp8 = c5 !== stateFromStores;
        }
        tmp6 = tmp8;
      }
      if (tmp6) {
        const wishlist = outer1_1(source[8]).fetchWishlist(wishlistId, stateFromStores, source);
        const obj = outer1_1(source[8]);
      }
    }
  }, items3);
  obj = { wishlist: first, isFetching: "fetching" === tmp4 };
  let tmp11 = "success" === tmp4;
  if (!tmp11) {
    tmp11 = "error" === tmp4;
  }
  obj.wasFetched = tmp11;
  obj.error = tmp2[2];
  return obj;
}
function useFetchWishlistAndProfileInfoForUser(userId) {
  const _require = userId;
  let obj = _require(userProfile[7]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(closure_0));
  const items1 = [_isNativeReflectConstruct];
  const items2 = [userId];
  const stateFromStoresObject = _require(userProfile[7]).useStateFromStoresObject(items1, () => {
    const obj = {};
    let userProfile = null;
    if (null != closure_0) {
      userProfile = outer1_6.getUserProfile(closure_0);
    }
    obj.userProfile = userProfile;
    let firstWishlistId = null;
    if (null != closure_0) {
      firstWishlistId = outer1_6.getFirstWishlistId(closure_0);
    }
    obj.wishlistId = firstWishlistId;
    return obj;
  }, items2);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, userId, userProfile];
  const effect = React.useEffect(() => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == userProfile;
    }
    if (tmp) {
      stateFromStores(userProfile[11])(stateFromStores.id, stateFromStores.getAvatarURL(null, 80));
      const tmp7 = stateFromStores(userProfile[11]);
    }
  }, items3);
  obj = {};
  obj = { wishlistId, userId };
  const merged = Object.assign(useFetchWishlist(obj));
  obj["wishlistId"] = wishlistId;
  obj["userProfile"] = userProfile;
  return obj;
}
let obj = { USER_PROFILE: "user_profile" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export const WishlistFetchSource = obj;
export const useFetchWishlists = function useFetchWishlists(wishlistIdsAndUsers) {
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  let stateFromStoresArray2;
  let memo;
  obj = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items = [closure_9];
  const items1 = [wishlistIdsAndUsers];
  const wishlists = obj.useStateFromStoresArray(items, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = outer2_9.getWishlist(wishlistId);
    }
    return wishlist;
  }), items1);
  const items2 = [closure_9];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStores(items2, () => wishlistIdsAndUsers.some((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let isFetchingResult = null != wishlistId;
    if (isFetchingResult) {
      isFetchingResult = outer2_9.isFetching(wishlistId);
    }
    return isFetchingResult;
  }), items3);
  const obj2 = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items4 = [closure_9];
  const items5 = [wishlistIdsAndUsers];
  const errors = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let error;
    if (null != wishlistId) {
      error = outer2_9.getError(wishlistId);
    }
    return error;
  }), items5);
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[7]);
  const items6 = [_isNativeReflectConstruct];
  stateFromStoresArray2 = wishlistIdsAndUsers(stateFromStoresArray2[7]).useStateFromStoresArray(items6, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let tmp2;
    if (null != wishlistId) {
      const wishlistSettings = outer2_6.getWishlistSettings(tmp, wishlistId);
      let updated_at;
      if (null != wishlistSettings) {
        updated_at = wishlistSettings.updated_at;
      }
      tmp2 = updated_at;
    }
    return tmp2;
  }));
  const items7 = [wishlistIdsAndUsers, stateFromStoresArray2];
  memo = React.useMemo(() => {
    const obj = {};
    const item = obj.forEach((arg0, arg1) => {
      if (arg1 < outer1_2.length) {
        obj[outer2_14(tmp, tmp2)] = outer1_2[arg1];
      }
    });
    return obj;
  }, items7);
  const items8 = [wishlistIdsAndUsers, USER_PROFILE, memo];
  useEffect(() => {
    let iter3;
    const tmp = outer1_12(wishlistIdsAndUsers);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let wishlistId = iter2.value.wishlistId;
        let tmp5 = tmp2;
        let tmp6 = tmp3;
        if (null != wishlistId) {
          let tmp21 = outer1_9;
          tmp5 = tmp2;
          tmp6 = tmp3;
          if (!outer1_9.isFetching(wishlistId)) {
            let tmp7 = outer1_9;
            tmp5 = tmp2;
            tmp6 = tmp3;
            if (null == outer1_9.getError(wishlistId)) {
              let tmp8 = outer1_9;
              let tmp10 = outer1_9;
              let wishlist = outer1_9.getWishlist(wishlistId);
              let updatedAt = outer1_9.getUpdatedAt(wishlistId);
              let tmp12 = memo;
              let tmp13 = outer1_14;
              let tmp14 = memo[outer1_14(undefined, tmp4, wishlistId)];
              let tmp15 = null == wishlist;
              if (!tmp15) {
                let tmp16 = null != tmp14 && updatedAt !== tmp14;
                tmp15 = tmp16;
              }
              tmp5 = updatedAt;
              tmp6 = tmp14;
              if (tmp15) {
                let tmp17 = USER_PROFILE;
                let tmp18 = stateFromStoresArray2;
                let obj = USER_PROFILE(stateFromStoresArray2[8]);
                let tmp19 = USER_PROFILE;
                let wishlist1 = obj.fetchWishlist(wishlistId, tmp14, USER_PROFILE);
                tmp5 = updatedAt;
                tmp6 = tmp14;
              }
            }
          }
        }
        iter3 = tmp();
        tmp2 = tmp5;
        tmp3 = tmp6;
        iter2 = iter3;
      } while (!iter3.done);
    }
  }, items8);
  return { wishlists, isFetching, errors };
};
export { useFetchWishlist };
export const useIsSkuInWishlist = function useIsSkuInWishlist(stateFromStores, skuId) {
  const _require = stateFromStores;
  let closure_1 = skuId;
  const items = [closure_9];
  return _require(566).useStateFromStores(items, () => {
    let hasSkuIdResult = null != closure_0;
    if (hasSkuIdResult) {
      hasSkuIdResult = outer1_9.hasSkuId(closure_0, closure_1);
    }
    return hasSkuIdResult;
  });
};
export const useShouldShowWishlistInDMGifting = function useShouldShowWishlistInDMGifting(isGift) {
  isGift = isGift.isGift;
  const giftRecipient = isGift.giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  let c3;
  let wishlistGiftableItems;
  let id;
  if (null != giftRecipient) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = wishlistGiftableItems.useEffect(() => {
    let id;
    if (null != giftRecipient) {
      id = giftRecipient.id;
    }
    if (null != id) {
      giftRecipient(flag[11])(giftRecipient.id);
    }
  }, items);
  let obj = {};
  let id1;
  if (null != giftRecipient) {
    id1 = giftRecipient.id;
  }
  obj.userId = id1;
  const tmp4Result = giftRecipient(flag[12])(obj);
  c3 = tmp4Result;
  const tmp4 = giftRecipient(flag[12]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = isGift(flag[7]).useStateFromStores(items1, () => {
    let id;
    if (null != giftRecipient) {
      id = giftRecipient.id;
    }
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = outer1_6.getFirstWishlistId(giftRecipient.id);
    }
    return firstWishlistId;
  });
  obj = {};
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (isGift) {
      tmp9 = null;
      if (null != giftRecipient) {
        tmp9 = stateFromStores;
      }
    }
  }
  obj.wishlistId = tmp9;
  let id2;
  if (null != giftRecipient) {
    id2 = giftRecipient.id;
  }
  obj.userId = id2;
  const obj2 = isGift(flag[7]);
  const tmp8 = useFetchWishlist;
  wishlistGiftableItems = isGift(flag[13]).useWishlistGiftableItems(tmp8(obj).wishlist);
  const items2 = [isGift, giftRecipient, wishlistGiftableItems, tmp4Result, flag];
  return wishlistGiftableItems.useMemo(() => {
    let tmp = true === isGift;
    if (tmp) {
      tmp = null != giftRecipient;
    }
    if (tmp) {
      let tmp5 = wishlistGiftableItems.length > 0;
      if (!tmp5) {
        let tmp6 = flag;
        if (flag) {
          tmp6 = _undefined.length > 0;
        }
        tmp5 = tmp6;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items2);
};
export const useCurrentUserWishlist = function useCurrentUserWishlist() {
  const items = [closure_7];
  return useFetchWishlistAndProfileInfoForUser(require(566) /* initialize */.useStateFromStores(items, () => outer1_7.getId()));
};
export { useFetchWishlistAndProfileInfoForUser };

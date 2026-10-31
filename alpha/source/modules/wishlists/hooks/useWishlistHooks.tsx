// Module ID: 9470
// Function ID: 9471
// Name: useWishlistHooks
// Dependencies: [32, 19, 7772, 502, 1383, 9471, 9472, 9477, 504, 9478, 12, 9479, 8758, 9485, 9490, 2]
// Exports: useCurrentUserWishlist, useFetchWishlistAndProfileInfoForUser, useFetchWishlists, useIsSkuInWishlist, useShouldShowWishlistInDMGifting

// Module 9470 (useWishlistHooks)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 19 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8758 */;
import WishlistRecord from "WishlistRecord" /* 9472 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 9478 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1383 */;
import WishlistStore from "WishlistStore" /* 9471 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react_mod = react2;
let _require, error;

function getUserWishlistKey(userId, arg1) {
  let combined;
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + userId + ":" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + userId + ":default";
  }
  return combined;
}
function useFetchWishlist(wishlistId) {
  let closure_4;
  let closure_5;
  let source;
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    const tmp = wishlistId;
    const tmp2 = source;
    source = wishlistId(source[7]).WishlistFetchSource.USER_PROFILE;
  }
  let wishlist;
  let stateFromStores;
  let obj = wishlistId(source[8]);
  let items = [WishlistStore];
  const tmp3 = wishlist(obj.useStateFromStoresArray(items, () => {
    let items1;
    if (null == wishlistId) {
      const items = [null, "success", undefined, undefined];
      items1 = items;
    } else {
      items1 = [WishlistStore.getWishlist(wishlistId), WishlistStore.getStatus(wishlistId), WishlistStore.getError(wishlistId), WishlistStore.getUpdatedAt(wishlistId)];
    }
    return items1;
  }), 4);
  wishlist = tmp3[0];
  let tmp6 = tmp3[2];
  react = tmp6;
  const tmp7 = tmp3[3];
  useEffect = tmp7;
  let items1 = [wishlist];
  const memo = react.useMemo(() => {
    let items;
    if (null == first) {
      items = [];
    } else {
      const obj = _mod12;
      items = obj.uniq(getWishlistSkuIds(tmp));
    }
    return items;
  }, items1);
  const obj2 = wishlistId(source[11]);
  const getOrFetchStorefrontPricesForSkuIds = obj2.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const items2 = [stateFromStores];
  const obj3 = wishlistId(source[8]);
  stateFromStores = obj3.useStateFromStores(items2, () => {
    if (null != wishlistId) {
      if (null != importDefault) {
        const wishlistSettings = UserProfileStore.getWishlistSettings(tmp2, tmp);
        let updated_at;
        if (wishlistSettings != null) {
          updated_at = wishlistSettings.updated_at;
        }
        return updated_at;
      }
    }
  });
  const items3 = [wishlistId, source, wishlist, stateFromStores, tmp7, tmp6];
  useEffect(() => {
    const isFetchingResult = null == wishlistId || WishlistStore.isFetching(tmp) || null != closure_4;
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        tmp6 = null != stateFromStores && closure_5 !== tmp7;
        const tmp8 = null != stateFromStores && closure_5 !== tmp7;
      }
      if (tmp6) {
        const obj = WishlistActionCreatorsDefault;
        wishlist = obj.fetchWishlist(tmp, stateFromStores, source);
      }
    }
  }, items3);
  const obj4 = { wishlist, isFetching: "fetching" === tmp3[1], wasFetched: tmp12, error: tmp6 };
  return obj4;
}
let react = react_mod;
let useEffect = react2.useEffect;
const getWishlistSkuIds = WishlistRecord.getWishlistSkuIds;
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export function useFetchWishlists(wishlistIdsAndUsers) {
  let stateFromStoresArray2;
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    const tmp = wishlistIdsAndUsers;
    let tmp2 = stateFromStoresArray2;
    USER_PROFILE = wishlistIdsAndUsers(stateFromStoresArray2[7]).WishlistFetchSource.USER_PROFILE;
  }
  stateFromStoresArray2 = undefined;
  let obj = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const items = [WishlistStore];
  const items1 = [wishlistIdsAndUsers];
  const wishlists = obj.useStateFromStoresArray(items, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    wishlist = null;
    if (null != wishlistId) {
      wishlist = wishlist.getWishlist(wishlistId);
    }
    return wishlist;
  }), items1);
  let obj2 = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const items2 = [WishlistStore];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = obj2.useStateFromStores(items2, () => {
    let fetching;
    return wishlistIdsAndUsers.some((wishlistId) => {
      wishlistId = wishlistId.wishlistId;
      const isFetchingResult = null != wishlistId && fetching.isFetching(wishlistId);
      return isFetchingResult;
    });
  }, items3);
  const items4 = [WishlistStore];
  const items5 = [wishlistIdsAndUsers];
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  const errors = obj3.useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    error = undefined;
    if (null != wishlistId) {
      error = error.getError(wishlistId);
    }
    return error;
  }), items5);
  const items6 = [UserProfileStore];
  const obj4 = wishlistIdsAndUsers(stateFromStoresArray2[8]);
  stateFromStoresArray2 = obj4.useStateFromStoresArray(items6, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let tmp2;
    if (null != wishlistId) {
      wishlistSettings = wishlistSettings.getWishlistSettings(tmp, wishlistId);
      let updated_at;
      if (wishlistSettings != null) {
        updated_at = wishlistSettings.updated_at;
      }
      tmp2 = updated_at;
    }
    return tmp2;
  }));
  const items7 = [wishlistIdsAndUsers, stateFromStoresArray2];
  const memo = react.useMemo(() => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      let userId;
      let wishlistId;
      ({ userId, wishlistId } = item);
      if (index < stateFromStoresArray2.length) {
        let combined;
        const tmp2 = obj;
        if (null != wishlistId) {
          const _HermesInternal2 = HermesInternal;
          combined = "" + userId + ":" + wishlistId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + userId + ":default";
        }
        tmp2[combined] = tmp[index];
      }
    });
    return obj;
  }, items7);
  const items8 = [wishlistIdsAndUsers, USER_PROFILE, memo];
  let tmp8 = useEffect(() => {
    const iter = wishlistIdsAndUsers[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let wishlistId = nextResult.wishlistId;
      let tmp3 = wishlistId;
      let userId = nextResult.userId;
      if (null != wishlistId) {
        let obj2 = WishlistStore;
        if (!WishlistStore.isFetching(tmp3)) {
          if (null == obj2.getError(tmp3)) {
            let wishlist = obj2.getWishlist(tmp3);
            let updatedAt = obj2.getUpdatedAt(tmp3);
            let tmp11 = memo[getUserWishlistKey(0, userId, tmp3)];
            let tmp12 = null == wishlist;
            if (!tmp12) {
              let tmp14 = null != tmp11;
              if (tmp14) {
                tmp14 = updatedAt !== tmp11;
              }
              tmp12 = tmp14;
            }
            if (tmp12) {
              let obj = WishlistActionCreatorsDefault;
              let wishlist1 = obj.fetchWishlist(tmp3, tmp11, USER_PROFILE);
            }
          }
        }
      }
      continue;
    }
  }, items8);
  return { wishlists, isFetching, errors };
}
export { useFetchWishlist };
export function useIsSkuInWishlist(stateFromStores, skuId) {
  _require = stateFromStores;
  let closure_1 = skuId;
  const items = [WishlistStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const hasSkuIdResult = null != stateFromStores && WishlistStore.hasSkuId(tmp, skuId);
    return hasSkuIdResult;
  });
}
export function useShouldShowWishlistInDMGifting(isGift) {
  let id2;
  isGift = isGift.isGift;
  const giftRecipient = isGift.giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  let length;
  let wishlistGiftableItems;
  let id;
  useEffect = wishlistGiftableItems.useEffect;
  const obj = wishlistGiftableItems;
  if (giftRecipient != null) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = useEffect(() => {
    let id;
    if (giftRecipient != null) {
      id = tmp.id;
    }
    if (null != id) {
      maybeFetchUserProfileDefault(giftRecipient.id);
    }
  }, items);
  let id1;
  const tmp4 = giftRecipient(flag[13]);
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  const tmp4Result = tmp4({ userId: id1 });
  length = tmp4Result;
  const items1 = [UserProfileStore];
  const obj2 = isGift(flag[8]);
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let id;
    if (giftRecipient != null) {
      id = tmp.id;
    }
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp.id);
    }
    return firstWishlistId;
  });
  let tmp10 = null;
  const tmp7 = isGift;
  const tmp9 = useFetchWishlist;
  if (null != stateFromStores) {
    tmp10 = null;
    if (isGift) {
      tmp10 = null;
      if (null != giftRecipient) {
        tmp10 = stateFromStores;
      }
    }
  }
  const obj3 = { wishlistId: tmp10, userId: id2 };
  id2 = undefined;
  if (giftRecipient != null) {
    id2 = giftRecipient.id;
  }
  const wishlist = tmp9(obj3).wishlist;
  const tmp7Result = tmp7(flag[14]);
  wishlistGiftableItems = tmp7Result.useWishlistGiftableItems(wishlist);
  const items2 = [isGift, giftRecipient, wishlistGiftableItems, tmp4Result, flag];
  return obj.useMemo(() => {
    let tmp = true === isGift && null != giftRecipient;
    if (tmp) {
      let tmp5 = wishlistGiftableItems.length > 0;
      if (!tmp5) {
        tmp5 = flag && length.length > 0;
        const tmp6 = flag && length.length > 0;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items2);
}
export function useCurrentUserWishlist() {
  let id;
  let stateFromStores;
  let userProfile;
  let obj = stateFromStores(userProfile[8]);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  userProfile = undefined;
  const items1 = [UserStore];
  const obj2 = stateFromStores(userProfile[8]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserStore.getUser(stateFromStores));
  const items2 = [UserProfileStore];
  const items3 = [stateFromStores];
  const obj3 = stateFromStores(userProfile[8]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    let firstWishlistId;
    userProfile = null;
    if (null != stateFromStores) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: firstWishlistId };
    firstWishlistId = null;
    if (null != stateFromStores) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return obj;
  }, items3);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items4 = [stateFromStores1, stateFromStores, userProfile];
  const effect = react.useEffect(() => {
    const tmp = null != stateFromStores && null == userProfile && null != stateFromStores1 && null == userProfile;
    if (tmp) {
      const tmp7 = maybeFetchUserProfileDefault;
      tmp7(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
    }
  }, items4);
  const obj4 = { wishlistId, userProfile };
  const merged = Object.assign(useFetchWishlist({ wishlistId, userId: stateFromStores }));
  return obj4;
}
export function useFetchWishlistAndProfileInfoForUser(recipientUserId) {
  let userProfile;
  _require = recipientUserId;
  const items = [UserStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(stateFromStores));
  const items1 = [UserProfileStore];
  const items2 = [recipientUserId];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let firstWishlistId;
    userProfile = null;
    if (null != stateFromStores) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: firstWishlistId };
    firstWishlistId = null;
    if (null != stateFromStores) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return obj;
  }, items2);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, recipientUserId, userProfile];
  const effect = react.useEffect(() => {
    const tmp = null != stateFromStores && null == userProfile && null != stateFromStores1 && null == userProfile;
    if (tmp) {
      const tmp7 = maybeFetchUserProfileDefault;
      tmp7(stateFromStores1.id, stateFromStores1.getAvatarURL(null, 80));
    }
  }, items3);
  const obj3 = { wishlistId, userProfile };
  const obj4 = { wishlistId, userId: recipientUserId };
  const merged = Object.assign(useFetchWishlist(obj4));
  return obj3;
}

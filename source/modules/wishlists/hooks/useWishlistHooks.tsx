// Module ID: 8668
// Function ID: 68567
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useCurrentUserWishlist, useFetchWishlists, useIsSkuInWishlist, useShouldShowWishlistInDMGifting

// Module 8668 (_createForOfIteratorHelperLoose)
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
  let source;
  wishlistId = wishlistId.wishlistId;
  const arg1 = wishlistId;
  ({ userId: closure_1, source } = wishlistId);
  if (source === undefined) {
    source = obj.USER_PROFILE;
  }
  const dependencyMap = source;
  let callback;
  let React;
  let useEffect;
  let closure_6;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_9];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    if (null == wishlistId) {
      const items = [, , undefined, undefined];
      let items1 = items;
    } else {
      items1 = [store.getWishlist(wishlistId), store.getStatus(wishlistId), store.getError(wishlistId), store.getUpdatedAt(wishlistId)];
    }
    return items1;
  }), 4);
  const first = tmp2[0];
  callback = first;
  React = tmp5;
  useEffect = tmp6;
  const items1 = [first];
  const memo = React.useMemo(() => {
    if (null == first) {
      let items = [];
    } else {
      items = wishlistId(source[9]).uniq(callback2(first));
      const obj = wishlistId(source[9]);
    }
    return items;
  }, items1);
  const getOrFetchStorefrontPricesForSkuIds = arg1(dependencyMap[10]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_6];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items2, () => {
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
  closure_6 = stateFromStores;
  const items3 = [wishlistId, source, first, stateFromStores, tmp2[3], tmp2[2]];
  useEffect(() => {
    let isFetchingResult = null == wishlistId;
    if (!isFetchingResult) {
      isFetchingResult = store.isFetching(wishlistId);
    }
    if (!isFetchingResult) {
      isFetchingResult = null != tmp5;
    }
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        let tmp8 = null != stateFromStores;
        if (tmp8) {
          tmp8 = tmp6 !== stateFromStores;
        }
        tmp6 = tmp8;
      }
      if (tmp6) {
        const wishlist = callback(source[8]).fetchWishlist(wishlistId, stateFromStores, source);
        const obj = callback(source[8]);
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
  const arg1 = userId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(arg0));
  const importDefault = stateFromStores;
  const items1 = [closure_6];
  const items2 = [userId];
  const stateFromStoresObject = arg1(dependencyMap[7]).useStateFromStoresObject(items1, () => {
    const obj = {};
    let userProfile = null;
    if (null != arg0) {
      userProfile = authStore.getUserProfile(arg0);
    }
    obj.userProfile = userProfile;
    let firstWishlistId = null;
    if (null != arg0) {
      firstWishlistId = authStore.getFirstWishlistId(arg0);
    }
    obj.wishlistId = firstWishlistId;
    return obj;
  }, items2);
  const userProfile = stateFromStoresObject.userProfile;
  const dependencyMap = userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, userId, userProfile];
  const effect = React.useEffect(() => {
    let tmp = null != arg0;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const useEffect = arg1(dependencyMap[1]).useEffect;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const getWishlistSkuIds = arg1(dependencyMap[6]).getWishlistSkuIds;
const obj = { USER_PROFILE: "user_profile" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export const WishlistFetchSource = obj;
export const useFetchWishlists = function useFetchWishlists(wishlistIdsAndUsers) {
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  const arg1 = wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  const importDefault = USER_PROFILE;
  let dependencyMap;
  let closure_3;
  const obj = arg1(dependencyMap[7]);
  const items = [closure_9];
  const items1 = [wishlistIdsAndUsers];
  const wishlists = obj.useStateFromStoresArray(items, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = wishlist.getWishlist(wishlistId);
    }
    return wishlist;
  }), items1);
  const items2 = [closure_9];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = arg1(dependencyMap[7]).useStateFromStores(items2, () => wishlistIdsAndUsers.some((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let isFetchingResult = null != wishlistId;
    if (isFetchingResult) {
      isFetchingResult = fetching.isFetching(wishlistId);
    }
    return isFetchingResult;
  }), items3);
  const obj2 = arg1(dependencyMap[7]);
  const items4 = [closure_9];
  const items5 = [wishlistIdsAndUsers];
  const errors = arg1(dependencyMap[7]).useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let error;
    if (null != wishlistId) {
      error = error.getError(wishlistId);
    }
    return error;
  }), items5);
  const obj3 = arg1(dependencyMap[7]);
  const items6 = [closure_6];
  const stateFromStoresArray2 = arg1(dependencyMap[7]).useStateFromStoresArray(items6, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let tmp2;
    if (null != wishlistId) {
      const wishlistSettings = wishlistSettings.getWishlistSettings(tmp, wishlistId);
      let updated_at;
      if (null != wishlistSettings) {
        updated_at = wishlistSettings.updated_at;
      }
      tmp2 = updated_at;
    }
    return tmp2;
  }));
  dependencyMap = stateFromStoresArray2;
  const items7 = [wishlistIdsAndUsers, stateFromStoresArray2];
  const memo = React.useMemo(() => {
    const obj = {};
    const wishlistIdsAndUsers = obj;
    const item = wishlistIdsAndUsers.forEach((arg0, arg1) => {
      if (arg1 < length.length) {
        obj[callback(tmp, tmp2)] = length[arg1];
      }
    });
    return obj;
  }, items7);
  closure_3 = memo;
  const items8 = [wishlistIdsAndUsers, USER_PROFILE, memo];
  useEffect(() => {
    let iter3;
    const tmp = callback(wishlistIdsAndUsers);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let wishlistId = iter2.value.wishlistId;
        let tmp5 = tmp2;
        let tmp6 = tmp3;
        if (null != wishlistId) {
          let tmp21 = closure_9;
          tmp5 = tmp2;
          tmp6 = tmp3;
          if (!closure_9.isFetching(wishlistId)) {
            let tmp7 = closure_9;
            tmp5 = tmp2;
            tmp6 = tmp3;
            if (null == closure_9.getError(wishlistId)) {
              let tmp8 = closure_9;
              let tmp10 = closure_9;
              let wishlist = closure_9.getWishlist(wishlistId);
              let updatedAt = closure_9.getUpdatedAt(wishlistId);
              let tmp12 = closure_3;
              let tmp13 = closure_14;
              let tmp14 = closure_3[closure_14(undefined, tmp4, wishlistId)];
              let tmp15 = null == wishlist;
              if (!tmp15) {
                let tmp16 = null != tmp14 && updatedAt !== tmp14;
                tmp15 = tmp16;
              }
              tmp5 = updatedAt;
              tmp6 = tmp14;
              if (tmp15) {
                let tmp17 = closure_1;
                let tmp18 = closure_2;
                let obj = closure_1(closure_2[8]);
                let tmp19 = closure_1;
                let wishlist1 = obj.fetchWishlist(wishlistId, tmp14, closure_1);
                tmp5 = updatedAt;
                tmp6 = tmp14;
              }
            }
          }
        }
        iter3 = tmp();
        let tmp2 = tmp5;
        let tmp3 = tmp6;
        iter2 = iter3;
      } while (!iter3.done);
    }
  }, items8);
  return { wishlists, isFetching, errors };
};
export { useFetchWishlist };
export const useIsSkuInWishlist = function useIsSkuInWishlist(stateFromStores, skuId) {
  skuId = stateFromStores;
  const importDefault = skuId;
  const items = [closure_9];
  return skuId(dependencyMap[7]).useStateFromStores(items, () => {
    let hasSkuIdResult = null != arg0;
    if (hasSkuIdResult) {
      hasSkuIdResult = closure_9.hasSkuId(arg0, arg1);
    }
    return hasSkuIdResult;
  });
};
export const useShouldShowWishlistInDMGifting = function useShouldShowWishlistInDMGifting(isGift) {
  isGift = isGift.isGift;
  const arg1 = isGift;
  const giftRecipient = isGift.giftRecipient;
  const importDefault = giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  const dependencyMap = flag;
  let closure_3;
  let React;
  let id;
  if (null != giftRecipient) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = React.useEffect(() => {
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
  const tmp4Result = importDefault(dependencyMap[12])(obj);
  closure_3 = tmp4Result;
  const tmp4 = importDefault(dependencyMap[12]);
  const items1 = [closure_6];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items1, () => {
    let id;
    if (null != giftRecipient) {
      id = giftRecipient.id;
    }
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = firstWishlistId.getFirstWishlistId(giftRecipient.id);
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
  const obj2 = arg1(dependencyMap[7]);
  const tmp8 = useFetchWishlist;
  const wishlistGiftableItems = arg1(dependencyMap[13]).useWishlistGiftableItems(tmp8(obj).wishlist);
  React = wishlistGiftableItems;
  const items2 = [isGift, giftRecipient, wishlistGiftableItems, tmp4Result, flag];
  return React.useMemo(() => {
    let tmp = true === isGift;
    if (tmp) {
      tmp = null != giftRecipient;
    }
    if (tmp) {
      let tmp5 = wishlistGiftableItems.length > 0;
      if (!tmp5) {
        let tmp6 = flag;
        if (flag) {
          tmp6 = tmp4Result.length > 0;
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
  return useFetchWishlistAndProfileInfoForUser(arg1(dependencyMap[7]).useStateFromStores(items, () => id.getId()));
};
export { useFetchWishlistAndProfileInfoForUser };

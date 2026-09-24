// Module ID: 9086
// Function ID: 9087
// Name: useWishlistHooks
// Dependencies: [32, 19, 7894, 502, 1376, 9087, 9088, 558, 568, 504, 9093, 12, 9094, 8493, 9100, 9105, 2]

// Module 9086 (useWishlistHooks)
import _mod12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8493 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 9093 */;
import useDisplayProfileSocialLayerStorefrontApplicationIdsDefault from "useDisplayProfileSocialLayerStorefrontApplicationIds" /* 9100 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7894 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1376 */;
import WishlistStore from "WishlistStore" /* 9087 */;

require = fn;
function getUserWishlistKey(userId, arg1) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + userId + ":" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + userId + ":default";
  }
  return combined;
}
let useEffect = fn(19).useEffect;
const getWishlistSkuIds = fn(9088).getWishlistSkuIds;
const WishlistFetchSource = { USER_PROFILE: "user_profile" };
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistId) => {
  let obj = wishlistId(USER_PROFILE[8]);
  const cResult = obj.c(25);
  wishlistId = wishlistId.wishlistId;
  const userId = wishlistId.userId;
  USER_PROFILE = wishlistId.source;
  if (undefined === USER_PROFILE) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [WishlistStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== wishlistId) {
    const fn = function o() {
      if (null == wishlistId) {
        const items = [null, "success", undefined, undefined];
        let items1 = items;
      } else {
        items1 = [WishlistStore.getWishlist(tmp), WishlistStore.getStatus(tmp), WishlistStore.getError(tmp), WishlistStore.getUpdatedAt(tmp)];
      }
      return items1;
    };
    cResult[1] = wishlistId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let num4 = 4;
  let tmp8 = first1(wishlistId(USER_PROFILE[9]).useStateFromStoresArray(first, tmp7), 4);
  first1 = tmp8[0];
  closure_4 = tmp11;
  useEffect = tmp12;
  let tmp13 = "success" === tmp10;
  if (!tmp13) {
    tmp13 = "error" === tmp10;
  }
  if (null != first1) {
    if (cResult[4] !== first1) {
      const uniqResult = tmp(tmp2[11]).uniq(getWishlistSkuIds(first1));
      cResult[num4] = first1;
      num4 = 5;
      cResult[5] = uniqResult;
      const tmpResult4 = tmp(tmp2[11]);
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [];
      cResult[3] = items1;
      let tmp14 = items1;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[6] !== tmp14) {
      const obj2 = { skuIds: tmp14 };
      cResult[6] = tmp14;
      cResult[7] = obj2;
      let tmp19 = obj2;
    } else {
      tmp19 = cResult[7];
    }
    const getOrFetchStorefrontPricesForSkuIds = tmp(tmp2[12]).useGetOrFetchStorefrontPricesForSkuIds(tmp19);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStores];
      cResult[8] = items2;
      let tmp21 = items2;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] === userId) {
      if (cResult[10] === wishlistId) {
        let tmp23 = cResult[11];
      }
      stateFromStores = tmp(tmp2[9]).useStateFromStores(tmp21, tmp23);
      if (cResult[12] === tmp11) {
        if (cResult[13] === USER_PROFILE) {
          if (cResult[14] === tmp12) {
            if (cResult[15] === first1) {
              if (cResult[16] === wishlistId) {
                if (cResult[17] === stateFromStores) {
                  let tmp25 = cResult[18];
                  let tmp26 = cResult[19];
                }
                useEffect(tmp25, tmp26);
                class T {
                  constructor() {
                    tmp = wishlistId;
                    isFetchingResult = null == wishlistId;
                    if (!isFetchingResult) {
                      tmp3 = closure_9;
                      isFetchingResult = closure_9.isFetching(tmp);
                    }
                    if (!isFetchingResult) {
                      tmp4 = closure_4;
                      isFetchingResult = null != closure_4;
                    }
                    if (!isFetchingResult) {
                      tmp5 = closure_3;
                      tmp6 = null == closure_3;
                      if (!tmp6) {
                        tmp8 = null != closure_6;
                        if (tmp8) {
                          tmp9 = closure_5;
                          tmp8 = closure_5 !== tmp7;
                        }
                        tmp6 = tmp8;
                      }
                      if (tmp6) {
                        tmp10 = closure_1;
                        tmp11 = closure_2;
                        obj = closure_1(closure_2[10]);
                        tmp12 = closure_6;
                        tmp13 = USER_PROFILE;
                        wishlist = obj.fetchWishlist(tmp, closure_6, USER_PROFILE);
                      }
                    }
                    return;
                  }
                }
                const obj3 = { wishlist: first1, isFetching: "fetching" === tmp10, wasFetched: tmp13, error: null };
                class G {
                  constructor() {
                    if (null != wishlistId) {
                      if (null != userId) {
                        tmp3 = closure_6;
                        wishlistSettings = closure_6.getWishlistSettings(tmp2, tmp);
                        updated_at = undefined;
                        if (wishlistSettings != null) {
                          updated_at = wishlistSettings.updated_at;
                        }
                        return updated_at;
                      }
                    }
                    return;
                  }
                }
                cResult[20] = tmp11;
                cResult[21] = "fetching" === tmp10;
                cResult[22] = tmp13;
                cResult[23] = first1;
                cResult[24] = obj3;
              }
            }
          }
        }
      }
      class T {
        constructor() {
          tmp = wishlistId;
          isFetchingResult = null == wishlistId;
          if (!isFetchingResult) {
            tmp3 = closure_9;
            isFetchingResult = closure_9.isFetching(tmp);
          }
          if (!isFetchingResult) {
            tmp4 = closure_4;
            isFetchingResult = null != closure_4;
          }
          if (!isFetchingResult) {
            tmp5 = closure_3;
            tmp6 = null == closure_3;
            if (!tmp6) {
              tmp8 = null != closure_6;
              if (tmp8) {
                tmp9 = closure_5;
                tmp8 = closure_5 !== tmp7;
              }
              tmp6 = tmp8;
            }
            if (tmp6) {
              tmp10 = closure_1;
              tmp11 = closure_2;
              obj = closure_1(closure_2[10]);
              tmp12 = closure_6;
              tmp13 = USER_PROFILE;
              wishlist = obj.fetchWishlist(tmp, closure_6, USER_PROFILE);
            }
          }
          return;
        }
      }
      const items3 = [wishlistId, USER_PROFILE, first1, , , ];
      class G {
        constructor() {
          if (null != wishlistId) {
            if (null != userId) {
              tmp3 = closure_6;
              wishlistSettings = closure_6.getWishlistSettings(tmp2, tmp);
              updated_at = undefined;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              return updated_at;
            }
          }
          return;
        }
      }
      items3[4] = tmp12;
      items3[5] = tmp11;
      cResult[12] = tmp11;
      cResult[13] = USER_PROFILE;
      cResult[14] = tmp12;
      cResult[15] = first1;
      cResult[16] = wishlistId;
      cResult[17] = stateFromStores;
      cResult[18] = T;
      cResult[19] = items3;
      tmp26 = items3;
      tmp25 = T;
      const tmpResult6 = tmp(tmp2[9]);
    }
    class G {
      constructor() {
        if (null != wishlistId) {
          if (null != userId) {
            tmp3 = closure_6;
            wishlistSettings = closure_6.getWishlistSettings(tmp2, tmp);
            updated_at = undefined;
            if (wishlistSettings != null) {
              updated_at = wishlistSettings.updated_at;
            }
            return updated_at;
          }
        }
        return;
      }
    }
    cResult[9] = userId;
    cResult[10] = wishlistId;
    cResult[11] = G;
    tmp23 = G;
    const tmpResult5 = tmp(tmp2[12]);
  }
}) : ((wishlistId) => {
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    source = obj.USER_PROFILE;
  }
  let wishlist;
  let stateFromStores;
  obj = wishlistId(source[9]);
  let items = [WishlistStore];
  const tmp2 = wishlist(obj.useStateFromStoresArray(items, () => {
    if (null == wishlistId) {
      const items = [null, "success", undefined, undefined];
      let items1 = items;
    } else {
      items1 = [WishlistStore.getWishlist(tmp), WishlistStore.getStatus(tmp), WishlistStore.getError(tmp), WishlistStore.getUpdatedAt(tmp)];
    }
    return items1;
  }), 4);
  wishlist = tmp2[0];
  noop = tmp5;
  useEffect = tmp6;
  let items1 = [wishlist];
  const memo = noop.useMemo(() => {
    if (null == first) {
      let items = [];
    } else {
      items = _mod12.uniq(getWishlistSkuIds(tmp));
    }
    return items;
  }, items1);
  const getOrFetchStorefrontPricesForSkuIds = wishlistId(source[12]).useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const obj2 = wishlistId(source[12]);
  const items2 = [stateFromStores];
  stateFromStores = wishlistId(source[9]).useStateFromStores(items2, () => {
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
  const items3 = [wishlistId, source, wishlist, stateFromStores, tmp2[3], tmp2[2]];
  useEffect(() => {
    let isFetchingResult = null == wishlistId;
    if (!isFetchingResult) {
      isFetchingResult = WishlistStore.isFetching(tmp);
    }
    if (!isFetchingResult) {
      isFetchingResult = null != closure_4;
    }
    if (!isFetchingResult) {
      let tmp6 = null == first;
      if (!tmp6) {
        let tmp8 = null != stateFromStores;
        if (tmp8) {
          tmp8 = closure_5 !== tmp7;
        }
        tmp6 = tmp8;
      }
      if (tmp6) {
        wishlist = WishlistActionCreatorsDefault.fetchWishlist(tmp, stateFromStores, source);
      }
    }
  }, items3);
  const obj4 = { wishlist, isFetching: "fetching" === tmp2[1], wasFetched: null, error: null };
  let tmp11 = "success" === tmp4;
  if (!tmp11) {
    tmp11 = "error" === tmp4;
  }
  obj4.wasFetched = tmp11;
  obj4.error = tmp2[2];
  return obj4;
});
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistIdsAndUsers) => {
  let obj = wishlistIdsAndUsers(obj2[8]);
  const cResult = obj.c(27);
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (undefined === USER_PROFILE) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== wishlistIdsAndUsers) {
    const fn = function n() {
      return wishlistIdsAndUsers.map((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        wishlist = null;
        if (null != wishlistId) {
          wishlist = wishlist.getWishlist(wishlistId);
        }
        return wishlist;
      });
    };
    const items1 = [wishlistIdsAndUsers];
    cResult[1] = wishlistIdsAndUsers;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const stateFromStoresArray = wishlistIdsAndUsers(obj2[9]).useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [WishlistStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== wishlistIdsAndUsers) {
    const fn2 = function _() {
      return wishlistIdsAndUsers.some((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        let isFetchingResult = null != wishlistId;
        if (isFetchingResult) {
          isFetchingResult = fetching.isFetching(wishlistId);
        }
        return isFetchingResult;
      });
    };
    const items3 = [wishlistIdsAndUsers];
    cResult[5] = wishlistIdsAndUsers;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = wishlistIdsAndUsers(obj2[9]);
  const stateFromStores = wishlistIdsAndUsers(obj2[9]).useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [WishlistStore];
    cResult[8] = items4;
    let tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== wishlistIdsAndUsers) {
    const fn3 = function p() {
      return wishlistIdsAndUsers.map((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        error = undefined;
        if (null != wishlistId) {
          error = error.getError(wishlistId);
        }
        return error;
      });
    };
    const items5 = [wishlistIdsAndUsers];
    cResult[9] = wishlistIdsAndUsers;
    cResult[10] = items5;
    cResult[11] = fn3;
    let tmp18 = fn3;
    let tmp17 = items5;
  } else {
    tmp17 = cResult[10];
    tmp18 = cResult[11];
  }
  const tmpResult4 = wishlistIdsAndUsers(obj2[9]);
  const stateFromStoresArray1 = wishlistIdsAndUsers(obj2[9]).useStateFromStoresArray(tmp15, tmp18, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [UserProfileStore];
    cResult[12] = items6;
    let tmp20 = items6;
  } else {
    tmp20 = cResult[12];
  }
  if (cResult[13] !== wishlistIdsAndUsers) {
    class R {
      constructor() {
        return wishlistIdsAndUsers.map((wishlistId) => {
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
        });
      }
    }
    cResult[13] = wishlistIdsAndUsers;
    cResult[14] = R;
    const tmp22 = R;
  } else {
    class R {
      constructor() {
        return wishlistIdsAndUsers.map((wishlistId) => {
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
        });
      }
    }
  }
  const tmpResult5 = wishlistIdsAndUsers(obj2[9]);
  const stateFromStoresArray2 = wishlistIdsAndUsers(obj2[9]).useStateFromStoresArray(tmp20, tmp22);
  if (cResult[15] === wishlistIdsAndUsers) {
    class R {
      constructor() {
        return wishlistIdsAndUsers.map((wishlistId) => {
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
        });
      }
    }
    noop = tmp24;
    if (cResult[18] === USER_PROFILE) {
      class R {
        constructor() {
          return wishlistIdsAndUsers.map((wishlistId) => {
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
          });
        }
      }
    }
    class O {
      constructor() {
        tmp = wishlistIdsAndUsers;
        iter = wishlistIdsAndUsers[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          wishlistId = nextResult.wishlistId;
          tmp3 = wishlistId;
          userId = nextResult.userId;
          if (null != wishlistId) {
            obj2 = closure_9;
            tmp23 = wishlistId;
            if (!closure_9.isFetching(tmp3)) {
              tmp4 = wishlistId;
              if (null == obj2.getError(tmp3)) {
                tmp5 = wishlistId;
                wishlist = obj2.getWishlist(tmp3);
                updatedAt = obj2.getUpdatedAt(tmp3);
                tmp8 = closure_4;
                tmp9 = getUserWishlistKey;
                tmp10 = userId;
                tmp11 = closure_4[getUserWishlistKey(0, userId, tmp3)];
                tmp12 = null == wishlist;
                if (!tmp12) {
                  tmp13 = tmp11;
                  tmp14 = null != tmp11;
                  if (tmp14) {
                    tmp15 = updatedAt;
                    tmp16 = tmp11;
                    tmp14 = updatedAt !== tmp11;
                  }
                  tmp12 = tmp14;
                }
                if (tmp12) {
                  tmp17 = closure_1;
                  tmp18 = closure_2;
                  obj = closure_1(closure_2[10]);
                  tmp19 = wishlistId;
                  tmp20 = tmp11;
                  tmp21 = USER_PROFILE;
                  wishlist1 = obj.fetchWishlist(tmp3, tmp11, USER_PROFILE);
                }
              }
            }
          }
          continue;
        }
        return;
      }
    }
    const items7 = [wishlistIdsAndUsers, USER_PROFILE, tmp24];
    cResult[18] = USER_PROFILE;
    cResult[19] = wishlistIdsAndUsers;
    cResult[20] = tmp24;
    cResult[21] = O;
    cResult[22] = items7;
  }
  obj2 = {};
  const item = wishlistIdsAndUsers.forEach((item, index) => {
    ({ userId, wishlistId } = item);
    let tmp = stateFromStoresArray2;
    if (index < stateFromStoresArray2.length) {
      if (null != wishlistId) {
        const _HermesInternal2 = HermesInternal;
        let combined = "" + userId + ":" + wishlistId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + userId + ":default";
      }
      tmp = tmp[index];
      obj2[combined] = tmp;
    }
  });
  cResult[15] = wishlistIdsAndUsers;
  cResult[16] = stateFromStoresArray2;
  cResult[17] = obj2;
}) : ((wishlistIdsAndUsers) => {
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  let stateFromStoresArray2;
  obj = wishlistIdsAndUsers(stateFromStoresArray2[9]);
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
  const items2 = [WishlistStore];
  const items3 = [wishlistIdsAndUsers];
  const isFetching = wishlistIdsAndUsers(stateFromStoresArray2[9]).useStateFromStores(items2, () => wishlistIdsAndUsers.some((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    let isFetchingResult = null != wishlistId;
    if (isFetchingResult) {
      isFetchingResult = fetching.isFetching(wishlistId);
    }
    return isFetchingResult;
  }), items3);
  let obj2 = wishlistIdsAndUsers(stateFromStoresArray2[9]);
  const items4 = [WishlistStore];
  const items5 = [wishlistIdsAndUsers];
  const errors = wishlistIdsAndUsers(stateFromStoresArray2[9]).useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    error = undefined;
    if (null != wishlistId) {
      error = error.getError(wishlistId);
    }
    return error;
  }), items5);
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[9]);
  const items6 = [UserProfileStore];
  stateFromStoresArray2 = wishlistIdsAndUsers(stateFromStoresArray2[9]).useStateFromStoresArray(items6, () => wishlistIdsAndUsers.map((wishlistId) => {
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
  const memo = noop.useMemo(() => {
    const obj = {};
    const item = obj.forEach((item, index) => {
      ({ userId, wishlistId } = item);
      let tmp = stateFromStoresArray2;
      if (index < stateFromStoresArray2.length) {
        if (null != wishlistId) {
          const _HermesInternal2 = HermesInternal;
          let combined = "" + userId + ":" + wishlistId;
        } else {
          const _HermesInternal = HermesInternal;
          combined = "" + userId + ":default";
        }
        tmp = tmp[index];
        obj[combined] = tmp;
      }
    });
    return obj;
  }, items7);
  const items8 = [wishlistIdsAndUsers, USER_PROFILE, memo];
  useEffect(() => {
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
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
    }
    return require("initialize").useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    let hasSkuIdResult = null != closure_0;
    if (hasSkuIdResult) {
      hasSkuIdResult = WishlistStore.hasSkuId(tmp, closure_1);
    }
    return hasSkuIdResult;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [WishlistStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasSkuIdResult = null != closure_0;
    if (hasSkuIdResult) {
      hasSkuIdResult = WishlistStore.hasSkuId(tmp, closure_1);
    }
    return hasSkuIdResult;
  });
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSocialLayerStorefrontEnabled) => {
  const cResult = giftRecipient(568).c(12);
  ({ isGift, giftRecipient } = isSocialLayerStorefrontEnabled);
  isSocialLayerStorefrontEnabled = isSocialLayerStorefrontEnabled.isSocialLayerStorefrontEnabled;
  let tmp4 = undefined === isSocialLayerStorefrontEnabled || isSocialLayerStorefrontEnabled;
  if (cResult[0] !== giftRecipient) {
    const fn = function l() {
      let id;
      if (giftRecipient != null) {
        id = tmp.id;
      }
      if (null != id) {
        maybeFetchUserProfileDefault(tmp.id);
      }
    };
    cResult[0] = giftRecipient;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let id;
  if (giftRecipient != null) {
    id = giftRecipient.id;
  }
  if (cResult[2] !== id) {
    const items = [id];
    cResult[2] = id;
    cResult[3] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  const effect = noop.useEffect(tmp5, tmp7);
  let id1;
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  if (cResult[4] !== id1) {
    const obj2 = { userId: id1 };
    cResult[4] = id1;
    cResult[5] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  const obj = giftRecipient(568);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[6] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== giftRecipient) {
    const fn2 = function w() {
      let id;
      if (giftRecipient != null) {
        id = tmp.id;
      }
      let firstWishlistId = null;
      if (null != id) {
        firstWishlistId = UserProfileStore.getFirstWishlistId(tmp.id);
      }
      return firstWishlistId;
    };
    cResult[7] = giftRecipient;
    cResult[8] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[8];
  }
  const arr2 = useDisplayProfileSocialLayerStorefrontApplicationIdsDefault(tmp10);
  const stateFromStores = giftRecipient(504).useStateFromStores(tmp11, tmp13);
  let tmp15 = null;
  if (null != stateFromStores) {
    tmp15 = null;
    if (isGift) {
      tmp15 = null;
      if (null != giftRecipient) {
        tmp15 = stateFromStores;
      }
    }
  }
  let id2;
  if (giftRecipient != null) {
    id2 = giftRecipient.id;
  }
  if (cResult[9] === id2) {
    if (cResult[10] === tmp15) {
      let tmp17 = cResult[11];
    }
    const wishlist = closure_13(tmp17).wishlist;
    tmp(9105);
    let flag2 = false;
    if (true === isGift) {
      flag2 = false;
      if (null != giftRecipient) {
        let tmp20 = arr4.length > 0;
        if (!tmp20) {
          if (tmp4) {
            tmp4 = arr2.length > 0;
          }
          tmp20 = tmp4;
        }
        flag2 = tmp20;
      }
    }
    return flag2;
  }
  const obj3 = { wishlistId: tmp15, userId: id2 };
  cResult[9] = id2;
  cResult[10] = tmp15;
  cResult[11] = obj3;
  tmp17 = obj3;
}) : ((isGift) => {
  isGift = isGift.isGift;
  const giftRecipient = isGift.giftRecipient;
  let flag = isGift.isSocialLayerStorefrontEnabled;
  if (flag === undefined) {
    flag = true;
  }
  let wishlistGiftableItems;
  let id;
  if (giftRecipient != null) {
    id = giftRecipient.id;
  }
  const items = [id];
  const effect = wishlistGiftableItems.useEffect(() => {
    let id;
    if (giftRecipient != null) {
      id = tmp.id;
    }
    if (null != id) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  }, items);
  let id1;
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  const tmp4Result = giftRecipient(flag[14])({ userId: id1 });
  const obj = wishlistGiftableItems;
  const tmp4 = giftRecipient(flag[14]);
  const tmp7 = isGift;
  const items1 = [UserProfileStore];
  const stateFromStores = isGift(flag[9]).useStateFromStores(items1, () => {
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
  if (null != stateFromStores) {
    tmp10 = null;
    if (isGift) {
      tmp10 = null;
      if (null != giftRecipient) {
        tmp10 = stateFromStores;
      }
    }
  }
  const obj3 = { wishlistId: tmp10, userId: null };
  let id2;
  if (giftRecipient != null) {
    id2 = giftRecipient.id;
  }
  obj3.userId = id2;
  const obj2 = isGift(flag[9]);
  const tmp9 = closure_13;
  wishlistGiftableItems = tmp7(flag[15]).useWishlistGiftableItems(tmp9(obj3).wishlist);
  const items2 = [isGift, giftRecipient, wishlistGiftableItems, tmp4Result, flag];
  return obj.useMemo(() => {
    let tmp = true === isGift;
    if (tmp) {
      tmp = null != giftRecipient;
    }
    if (tmp) {
      let tmp5 = wishlistGiftableItems.length > 0;
      if (!tmp5) {
        let tmp6 = flag;
        if (flag) {
          tmp6 = length.length > 0;
        }
        tmp5 = tmp6;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items2);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return UserStore.getUser(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        tmp = closure_0;
        userProfile = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          userProfile = closure_6.getUserProfile(tmp);
        }
        obj = { userProfile, wishlistId: null };
        firstWishlistId = null;
        if (null != tmp) {
          tmp5 = closure_6;
          firstWishlistId = closure_6.getFirstWishlistId(tmp);
        }
        obj.wishlistId = firstWishlistId;
        return obj;
      }
    }
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp11 = items2;
    const tmp10 = S;
  } else {
    class S {
      constructor() {
        tmp = closure_0;
        userProfile = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          userProfile = closure_6.getUserProfile(tmp);
        }
        obj = { userProfile, wishlistId: null };
        firstWishlistId = null;
        if (null != tmp) {
          tmp5 = closure_6;
          firstWishlistId = closure_6.getFirstWishlistId(tmp);
        }
        obj.wishlistId = firstWishlistId;
        return obj;
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp8, tmp10, tmp11);
  userProfile = stateFromStoresObject.userProfile;
  if (cResult[7] === stateFromStores) {
    class S {
      constructor() {
        tmp = closure_0;
        userProfile = null;
        if (null != closure_0) {
          tmp3 = closure_6;
          userProfile = closure_6.getUserProfile(tmp);
        }
        obj = { userProfile, wishlistId: null };
        firstWishlistId = null;
        if (null != tmp) {
          tmp5 = closure_6;
          firstWishlistId = closure_6.getFirstWishlistId(tmp);
        }
        obj.wishlistId = firstWishlistId;
        return obj;
      }
    }
  }
  class F {
    constructor() {
      tmp = null != closure_0;
      if (tmp) {
        tmp2 = userProfile;
        tmp = null == userProfile;
      }
      if (tmp) {
        tmp3 = closure_1;
        tmp = null != closure_1;
      }
      if (tmp) {
        tmp4 = userProfile;
        tmp = null == userProfile;
      }
      if (tmp) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        tmp8 = closure_1;
        num = 80;
        tmp7 = closure_1(closure_2[13]);
        tmp7Result = tmp7(closure_1.id, closure_1.getAvatarURL(null, 80));
      }
      return;
    }
  }
  const items3 = [stateFromStores, arg0, userProfile];
  cResult[7] = stateFromStores;
  cResult[8] = arg0;
  cResult[9] = userProfile;
  cResult[10] = F;
  cResult[11] = items3;
}) : ((userId) => {
  _require = userId;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0));
  let obj = require("initialize");
  const items1 = [UserProfileStore];
  const items2 = [userId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => {
    userProfile = null;
    if (null != closure_0) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: null };
    let firstWishlistId = null;
    if (null != closure_0) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    obj.wishlistId = firstWishlistId;
    return obj;
  }, items2);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, userId, userProfile];
  const effect = noop.useEffect(() => {
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
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(null, 80));
    }
  }, items3);
  const obj3 = {};
  const merged = Object.assign(closure_13({ wishlistId, userId }));
  obj3.wishlistId = wishlistId;
  obj3.userProfile = userProfile;
  return obj3;
});
let closure_14 = tmp7;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistHooks.tsx");

export const WISHLIST_IN_DM_LENGTH = 5;
export const WISHLIST_IN_DM_LENGTH_MOBILE = 6;
export const WISHLIST_TOOLTIP_DELAY_MS = 350;
export const WishlistItemSource = { WISHLIST: "wishlist", POPULAR: "popular" };
export { WishlistFetchSource };
export const useFetchWishlists = tmp2;
export const useFetchWishlist = tmp3;
export const useIsSkuInWishlist = tmp4;
export const useShouldShowWishlistInDMGifting = tmp5;
export const useCurrentUserWishlist = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function s() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return closure_14(initialize.useStateFromStores(tmp4, tmp5));
}) : (() => {
  const items = [AuthenticationStore];
  return closure_14(initialize.useStateFromStores(items, () => id.getId()));
});
export const useFetchWishlistAndProfileInfoForUser = tmp7;

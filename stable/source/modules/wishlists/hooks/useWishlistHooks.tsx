// Module ID: 8235
// Function ID: 8236
// Name: useWishlistHooks
// Dependencies: [32, 19, 7039, 502, 1378, 8236, 8237, 558, 576, 504, 8242, 12, 8243, 7636, 8249, 8254, 2]

// Module 8235 (useWishlistHooks)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 19 */;
import react3 from "react" /* 576 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7636 */;
import WishlistRecord from "WishlistRecord" /* 8237 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 8242 */;
import useDisplayProfileSocialLayerStorefrontApplicationIdsDefault from "useDisplayProfileSocialLayerStorefrontApplicationIds" /* 8249 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserProfileStore from "UserProfileStore" /* 7039 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1378 */;
import WishlistStore from "WishlistStore" /* 8236 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const react_mod = react2;
let _require, error, isSocialLayerStorefrontEnabled, wishlistIdsAndUsers;

let tmp;
const get_initialized = tmp(504);
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
let react = react_mod;
let useEffect = react2.useEffect;
const getWishlistSkuIds = WishlistRecord.getWishlistSkuIds;
const WishlistFetchSource = { USER_PROFILE: "user_profile" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistIdsAndUsers) => {
  let closure_4;
  let first;
  let obj2;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp22;
  let tmp7;
  let tmp8;
  const tmp = wishlistIdsAndUsers;
  let tmp2 = obj2;
  let obj = wishlistIdsAndUsers(obj2[8]);
  const cResult = obj.c(27);
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (undefined === USER_PROFILE) {
    let tmp4 = obj;
    USER_PROFILE = obj.USER_PROFILE;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[9]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp11 = WishlistStore;
    const items2 = [WishlistStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== wishlistIdsAndUsers) {
    const fn2 = function _() {
      let fetching;
      return wishlistIdsAndUsers.some((wishlistId) => {
        wishlistId = wishlistId.wishlistId;
        const isFetchingResult = null != wishlistId && fetching.isFetching(wishlistId);
        return isFetchingResult;
      });
    };
    const items3 = [wishlistIdsAndUsers];
    cResult[5] = wishlistIdsAndUsers;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult4 = tmp(tmp2[9]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp16 = WishlistStore;
    const items4 = [WishlistStore];
    cResult[8] = items4;
    tmp15 = items4;
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
    tmp18 = fn3;
    tmp17 = items5;
  } else {
    tmp17 = cResult[10];
    tmp18 = cResult[11];
  }
  const tmpResult5 = tmp(tmp2[9]);
  const stateFromStoresArray1 = tmpResult5.useStateFromStoresArray(tmp15, tmp18, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp21 = UserProfileStore;
    const items6 = [UserProfileStore];
    cResult[12] = items6;
    tmp20 = items6;
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
    tmp22 = R;
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
  const tmpResult6 = tmp(tmp2[9]);
  const stateFromStoresArray2 = tmpResult6.useStateFromStoresArray(tmp20, tmp22);
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
    react = tmp24;
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
        const iter = wishlistIdsAndUsers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let wishlistId = nextResult.wishlistId;
          let tmp3 = wishlistId;
          let userId = nextResult.userId;
          if (null != wishlistId) {
            obj2 = WishlistStore;
            if (!WishlistStore.isFetching(tmp3)) {
              if (null == obj2.getError(tmp3)) {
                let wishlist = obj2.getWishlist(tmp3);
                let updatedAt = obj2.getUpdatedAt(tmp3);
                let tmp11 = react[getUserWishlistKey(0, userId, tmp3)];
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
    let userId;
    let wishlistId;
    ({ userId, wishlistId } = item);
    if (index < stateFromStoresArray2.length) {
      let combined;
      const tmp2 = obj2;
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
  cResult[15] = wishlistIdsAndUsers;
  cResult[16] = stateFromStoresArray2;
  cResult[17] = obj2;
}) : ((wishlistIdsAndUsers) => {
  let obj;
  wishlistIdsAndUsers = wishlistIdsAndUsers.wishlistIdsAndUsers;
  let USER_PROFILE = wishlistIdsAndUsers.source;
  if (USER_PROFILE === undefined) {
    const tmp = obj;
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
  let obj2 = wishlistIdsAndUsers(stateFromStoresArray2[9]);
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
  const obj3 = wishlistIdsAndUsers(stateFromStoresArray2[9]);
  const errors = obj3.useStateFromStoresArray(items4, () => wishlistIdsAndUsers.map((wishlistId) => {
    wishlistId = wishlistId.wishlistId;
    error = undefined;
    if (null != wishlistId) {
      error = error.getError(wishlistId);
    }
    return error;
  }), items5);
  const items6 = [UserProfileStore];
  const obj4 = wishlistIdsAndUsers(stateFromStoresArray2[9]);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistId) => {
  let USER_PROFILE;
  let closure_5;
  let first;
  let first1;
  let stateFromStores;
  let tmp14;
  let tmp18;
  let tmp20;
  let tmp7;
  const tmp = wishlistId;
  const tmp2 = USER_PROFILE;
  let obj = wishlistId(USER_PROFILE[8]);
  const cResult = obj.c(25);
  wishlistId = wishlistId.wishlistId;
  const userId = wishlistId.userId;
  USER_PROFILE = wishlistId.source;
  if (undefined === USER_PROFILE) {
    USER_PROFILE = obj.USER_PROFILE;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = WishlistStore;
    let items = [WishlistStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== wishlistId) {
    const fn = function o() {
      let items1;
      if (null == wishlistId) {
        const items = [null, "success", undefined, undefined];
        items1 = items;
      } else {
        items1 = [WishlistStore.getWishlist(wishlistId), WishlistStore.getStatus(wishlistId), WishlistStore.getError(wishlistId), WishlistStore.getUpdatedAt(wishlistId)];
      }
      return items1;
    };
    cResult[1] = wishlistId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[9]);
  let tmp8 = first1(tmpResult.useStateFromStoresArray(first, tmp7), 4);
  first1 = tmp8[0];
  let closure_4 = tmp11;
  useEffect = tmp12;
  if (null != first1) {
    let tmp15;
    if (cResult[4] !== first1) {
      const tmpResult4 = tmp(tmp2[11]);
      const uniqResult = tmpResult4.uniq(getWishlistSkuIds(first1));
      cResult[4] = first1;
      cResult[5] = uniqResult;
      tmp15 = uniqResult;
    } else {
      tmp15 = cResult[5];
    }
    tmp14 = tmp15;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [];
      cResult[3] = items1;
      tmp14 = items1;
    } else {
      tmp14 = cResult[3];
    }
  }
  if (cResult[6] !== tmp14) {
    const obj2 = { skuIds: tmp14 };
    cResult[6] = tmp14;
    cResult[7] = obj2;
    tmp18 = obj2;
  } else {
    tmp18 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[12]);
  const getOrFetchStorefrontPricesForSkuIds = tmpResult5.useGetOrFetchStorefrontPricesForSkuIds(tmp18);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores];
    cResult[8] = items2;
    tmp20 = items2;
  } else {
    tmp20 = cResult[8];
  }
  if (cResult[9] === userId) {
    let tmp22;
    if (cResult[10] === wishlistId) {
      tmp22 = cResult[11];
    }
    const tmpResult6 = tmp(tmp2[9]);
    stateFromStores = tmpResult6.useStateFromStores(tmp20, tmp22);
    if (cResult[12] === tmp8[2]) {
      if (cResult[13] === USER_PROFILE) {
        if (cResult[14] === tmp8[3]) {
          if (cResult[15] === first1) {
            if (cResult[16] === wishlistId) {
              let tmp24;
              let tmp25;
              if (cResult[17] === stateFromStores) {
                tmp24 = cResult[18];
                tmp25 = cResult[19];
              }
              useEffect(tmp24, tmp25);
              class T {
                constructor() {
                  const isFetchingResult = null == wishlistId || WishlistStore.isFetching(tmp) || null != closure_4;
                  if (!isFetchingResult) {
                    let tmp6 = null == first1;
                    if (!tmp6) {
                      tmp6 = null != stateFromStores && closure_5 !== tmp7;
                      const tmp8 = null != stateFromStores && closure_5 !== tmp7;
                    }
                    if (tmp6) {
                      const obj = WishlistActionCreatorsDefault;
                      const wishlist = obj.fetchWishlist(tmp, stateFromStores, USER_PROFILE);
                    }
                  }
                }
              }
              const obj3 = { wishlist: first1, isFetching: "fetching" === tmp8[1], wasFetched: "success" === tmp8[1] || "error" === tmp8[1], error: tmp8[2] };
              cResult[20] = tmp8[2];
              cResult[21] = "fetching" === tmp8[1];
              cResult[22] = "success" === tmp8[1] || "error" === tmp8[1];
              cResult[23] = first1;
              cResult[24] = obj3;
            }
          }
        }
      }
    }
    class T {
      constructor() {
        const isFetchingResult = null == wishlistId || WishlistStore.isFetching(tmp) || null != closure_4;
        if (!isFetchingResult) {
          let tmp6 = null == first1;
          if (!tmp6) {
            tmp6 = null != stateFromStores && closure_5 !== tmp7;
            const tmp8 = null != stateFromStores && closure_5 !== tmp7;
          }
          if (tmp6) {
            const obj = WishlistActionCreatorsDefault;
            const wishlist = obj.fetchWishlist(tmp, stateFromStores, USER_PROFILE);
          }
        }
      }
    }
    const items3 = [wishlistId, USER_PROFILE, first1, stateFromStores, tmp12, tmp11];
    cResult[12] = tmp8[2];
    cResult[13] = USER_PROFILE;
    cResult[14] = tmp8[3];
    cResult[15] = first1;
    cResult[16] = wishlistId;
    cResult[17] = stateFromStores;
    cResult[18] = T;
    cResult[19] = items3;
    tmp25 = items3;
    tmp24 = T;
  }
  class G {
    constructor() {
      if (null != wishlistId) {
        if (null != userId) {
          const wishlistSettings = UserProfileStore.getWishlistSettings(tmp2, tmp);
          let updated_at;
          if (wishlistSettings != null) {
            updated_at = wishlistSettings.updated_at;
          }
          return updated_at;
        }
      }
    }
  }
  cResult[9] = userId;
  cResult[10] = wishlistId;
  cResult[11] = G;
  tmp22 = G;
}) : ((wishlistId) => {
  let closure_4;
  let closure_5;
  let obj;
  let source;
  wishlistId = wishlistId.wishlistId;
  ({ userId: importDefault, source } = wishlistId);
  if (source === undefined) {
    const tmp = obj;
    source = obj.USER_PROFILE;
  }
  let wishlist;
  let stateFromStores;
  obj = wishlistId(source[9]);
  let items = [WishlistStore];
  const tmp2 = wishlist(obj.useStateFromStoresArray(items, () => {
    let items1;
    if (null == wishlistId) {
      const items = [null, "success", undefined, undefined];
      items1 = items;
    } else {
      items1 = [WishlistStore.getWishlist(wishlistId), WishlistStore.getStatus(wishlistId), WishlistStore.getError(wishlistId), WishlistStore.getUpdatedAt(wishlistId)];
    }
    return items1;
  }), 4);
  wishlist = tmp2[0];
  react = tmp5;
  let tmp6 = tmp2[3];
  useEffect = tmp6;
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
  const obj2 = wishlistId(source[12]);
  const getOrFetchStorefrontPricesForSkuIds = obj2.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: memo });
  const items2 = [stateFromStores];
  const obj3 = wishlistId(source[9]);
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
  const items3 = [wishlistId, source, wishlist, stateFromStores, tmp6, tmp5];
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
  const obj4 = { wishlist, isFetching: "fetching" === tmp2[1], wasFetched: tmp11, error: tmp2[2] };
  return obj4;
});
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function u() {
    const hasSkuIdResult = null != closure_0 && WishlistStore.hasSkuId(tmp, closure_1);
    return hasSkuIdResult;
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [WishlistStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const hasSkuIdResult = null != closure_0 && WishlistStore.hasSkuId(tmp, closure_1);
    return hasSkuIdResult;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((isSocialLayerStorefrontEnabled) => {
  let giftRecipient;
  let isGift;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp7;
  const tmp = giftRecipient;
  const obj = giftRecipient(576);
  const cResult = obj.c(12);
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
        maybeFetchUserProfileDefault(giftRecipient.id);
      }
    };
    cResult[0] = giftRecipient;
    cResult[1] = fn;
    tmp5 = fn;
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
    tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp5, tmp7);
  let id1;
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  if (cResult[4] !== id1) {
    const obj2 = { userId: id1 };
    cResult[4] = id1;
    cResult[5] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  const arr2 = useDisplayProfileSocialLayerStorefrontApplicationIdsDefault(tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[6] = items1;
    tmp11 = items1;
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
    tmp13 = fn2;
  } else {
    tmp13 = cResult[8];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13);
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
    let tmp17;
    if (cResult[10] === tmp15) {
      tmp17 = cResult[11];
    }
    const wishlist = closure_13(tmp17).wishlist;
    tmp(8254);
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
  const tmp4 = giftRecipient(flag[14]);
  if (giftRecipient != null) {
    id1 = giftRecipient.id;
  }
  const tmp4Result = tmp4({ userId: id1 });
  length = tmp4Result;
  const items1 = [UserProfileStore];
  const obj2 = isGift(flag[9]);
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
  const tmp9 = closure_13;
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
  const tmp7Result = tmp7(flag[15]);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let id;
  let tmp4;
  let tmp5;
  const obj = react3;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return closure_14(tmpResult.useStateFromStores(tmp4, tmp5));
}) : (() => {
  let id;
  const items = [AuthenticationStore];
  const obj = get_initialized;
  return closure_14(obj.useStateFromStores(items, () => id.getId()));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  let userProfile;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return UserStore.getUser(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(userProfile[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        let firstWishlistId;
        userProfile = null;
        if (null != closure_0) {
          userProfile = UserProfileStore.getUserProfile(tmp);
        }
        const obj = { userProfile, wishlistId: firstWishlistId };
        firstWishlistId = null;
        if (null != closure_0) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
        }
        return obj;
      }
    }
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = S;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = S;
  } else {
    class S {
      constructor() {
        let firstWishlistId;
        userProfile = null;
        if (null != closure_0) {
          userProfile = UserProfileStore.getUserProfile(tmp);
        }
        const obj = { userProfile, wishlistId: firstWishlistId };
        firstWishlistId = null;
        if (null != closure_0) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
        }
        return obj;
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult2 = tmp(userProfile[9]);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp8, tmp10, tmp11);
  userProfile = stateFromStoresObject.userProfile;
  if (cResult[7] === stateFromStores) {
    class S {
      constructor() {
        let firstWishlistId;
        userProfile = null;
        if (null != closure_0) {
          userProfile = UserProfileStore.getUserProfile(tmp);
        }
        const obj = { userProfile, wishlistId: firstWishlistId };
        firstWishlistId = null;
        if (null != closure_0) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
        }
        return obj;
      }
    }
  }
  class F {
    constructor() {
      const tmp = null != closure_0 && null == userProfile && null != stateFromStores && null == userProfile;
      if (tmp) {
        const tmp7 = maybeFetchUserProfileDefault;
        tmp7(stateFromStores.id, stateFromStores.getAvatarURL(null, 80));
      }
    }
  }
  const items3 = [stateFromStores, arg0, userProfile];
  cResult[7] = stateFromStores;
  cResult[8] = arg0;
  cResult[9] = userProfile;
  cResult[10] = F;
  cResult[11] = items3;
}) : ((userId) => {
  let userProfile;
  _require = userId;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [UserProfileStore];
  const items2 = [userId];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let firstWishlistId;
    userProfile = null;
    if (null != userId) {
      userProfile = UserProfileStore.getUserProfile(tmp);
    }
    const obj = { userProfile, wishlistId: firstWishlistId };
    firstWishlistId = null;
    if (null != userId) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return obj;
  }, items2);
  userProfile = stateFromStoresObject.userProfile;
  const wishlistId = stateFromStoresObject.wishlistId;
  const items3 = [stateFromStores, userId, userProfile];
  const effect = react.useEffect(() => {
    const tmp = null != userId && null == userProfile && null != stateFromStores && null == userProfile;
    if (tmp) {
      const tmp7 = maybeFetchUserProfileDefault;
      tmp7(stateFromStores.id, stateFromStores.getAvatarURL(null, 80));
    }
  }, items3);
  const obj3 = { wishlistId, userProfile };
  const obj4 = { wishlistId, userId };
  const merged = Object.assign(closure_13(obj4));
  return obj3;
});
let closure_14 = tmp7;
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
export const useCurrentUserWishlist = tmp6;
export const useFetchWishlistAndProfileInfoForUser = tmp7;

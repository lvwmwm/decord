// Module ID: 12437
// Function ID: 12438
// Name: useFetchSocialLayerStorefrontEmbedWishlist
// Dependencies: [19, 7352, 9465, 502, 1388, 504, 8483, 9472, 9471, 2]
// Exports: useFetchSocialLayerStorefrontEmbedWishlist

// Module 12437 (useFetchSocialLayerStorefrontEmbedWishlist)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8483 */;
import WishlistFetchSource from "WishlistFetchSource" /* 9471 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 9472 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import WishlistStore from "WishlistStore" /* 9465 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_8 = { user: "a", profile: "Path", wishlistId: "container", wishlist: "animal", updatedAt: "chipmunk", storedUpdatedAt: "squirrel", fetching: "animal", error: "hedgehog" };
const result = size.fileFinishedImporting("modules/slayer_storefront/native/useFetchSocialLayerStorefrontEmbedWishlist.tsx");

export function useFetchSocialLayerStorefrontEmbedWishlist(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [AuthenticationStore, UserStore, UserProfileStore, WishlistStore];
  const items1 = [arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let error;
    let isFetchingResult;
    let tmp13;
    let updatedAt;
    let userProfile;
    let wishlist;
    const tmp = closure_0;
    if (tmp) {
      const id = AuthenticationStore.getId();
      let firstWishlistId = null;
      if (null != id) {
        firstWishlistId = UserProfileStore.getFirstWishlistId(id);
      }
      const obj = { user: UserStore.getUser(id), profile: userProfile, wishlistId: firstWishlistId, wishlist, updatedAt: tmp13, storedUpdatedAt: updatedAt, fetching: isFetchingResult, error };
      userProfile = null;
      if (null != id) {
        userProfile = UserProfileStore.getUserProfile(id);
      }
      wishlist = null;
      if (null != firstWishlistId) {
        wishlist = WishlistStore.getWishlist(firstWishlistId);
      }
      tmp13 = undefined;
      if (null != id) {
        if (null != firstWishlistId) {
          const wishlistSettings = UserProfileStore.getWishlistSettings(id, firstWishlistId);
          let updated_at;
          if (wishlistSettings != null) {
            updated_at = wishlistSettings.updated_at;
          }
          tmp13 = updated_at;
        }
      }
      updatedAt = undefined;
      if (null != firstWishlistId) {
        updatedAt = WishlistStore.getUpdatedAt(firstWishlistId);
      }
      error = undefined;
      isFetchingResult = null != firstWishlistId && WishlistStore.isFetching(firstWishlistId);
      if (null != firstWishlistId) {
        error = WishlistStore.getError(firstWishlistId);
      }
      return obj;
    } else {
      return closure_8;
    }
  }, items1);
  const items2 = [arg0, , ];
  ({ user: arr3[1], profile: arr3[2] } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    const tmp = closure_0 && null != stateFromStoresObject.user && null == stateFromStoresObject.profile;
    if (tmp) {
      const user = stateFromStoresObject.user;
      const tmp8 = maybeFetchUserProfileDefault;
      tmp8(stateFromStoresObject.user.id, user.getAvatarURL(null, 80));
    }
  }, items2);
  const items3 = [arg0, stateFromStoresObject];
  const effect1 = react.useEffect(() => {
    let updatedAt;
    let wishlistId;
    let tmp = closure_0 && null != stateFromStoresObject.wishlistId && !stateFromStoresObject.fetching && null == stateFromStoresObject.error;
    if (tmp) {
      let tmp9 = null == stateFromStoresObject.wishlist;
      if (!tmp9) {
        tmp9 = null != stateFromStoresObject.updatedAt && stateFromStoresObject.storedUpdatedAt !== stateFromStoresObject.updatedAt;
      }
      tmp = tmp9;
    }
    if (tmp) {
      ({ wishlistId, updatedAt } = stateFromStoresObject);
      const obj = WishlistActionCreatorsDefault;
      const wishlist = obj.fetchWishlist(wishlistId, updatedAt, WishlistFetchSource.WishlistFetchSource.USER_PROFILE);
    }
  }, items3);
}

// Module ID: 11711
// Function ID: 11712
// Name: useFetchSocialLayerStorefrontEmbedWishlist
// Dependencies: [19, 7848, 9555, 502, 1385, 504, 8829, 9562, 9561, 2]
// Exports: useFetchSocialLayerStorefrontEmbedWishlist

// Module 11711 (useFetchSocialLayerStorefrontEmbedWishlist)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8829 */;
import WishlistFetchSource from "WishlistFetchSource" /* 9561 */;
import WishlistActionCreatorsDefault from "WishlistActionCreators" /* 9562 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7848 */;
import WishlistStore from "WishlistStore" /* 9555 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_8 = { user: "a", profile: "flexDirection", wishlistId: "container", wishlist: "conjure.town", updatedAt: "conjure.city", storedUpdatedAt: "messageId", fetching: "(function CustomizeCommunityTsx1(){let[isNew,brandColor,withSequence,withTiming,Easing,withDelay]=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};})", error: "(function CustomizeCommunityTsx2(){let[isNew,brandColor,withSequence,withTiming,Easing,withDelay]=this.__closure;const rawBorderColor=isNew?brandColor+\"FF\":brandColor+\"00\";const borderColor=withSequence(withTiming(rawBorderColor,{duration:1,easing:Easing.in(Easing.ease)}),withDelay(500,withTiming(brandColor+\"00\",{duration:300,easing:Easing.out(Easing.ease)})));return{borderColor:borderColor};})" };
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

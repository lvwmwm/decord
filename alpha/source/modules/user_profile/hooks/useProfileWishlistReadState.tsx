// Module ID: 15229
// Function ID: 15230
// Name: useProfileWishlistReadState
// Dependencies: [32, 19, 9624, 7917, 15210, 504, 7929, 7928, 15230, 2]
// Exports: default

// Module 15229 (useProfileWishlistReadState)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7928 */;
import ProfileReadStateSection from "ProfileReadStateSection" /* 7929 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 15230 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 9624 */;
import UserProfileStore from "UserProfileStore" /* 7917 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
  let tmp7;
  let tmp8;
  ownerId = ownerId.ownerId;
  const wishlistId = ownerId.wishlistId;
  let flag = ownerId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores1;
  let closure_4;
  let tmp = ownerId;
  let obj = ownerId(wishlistId[4]);
  const profileReadStateConfigPeek = obj.useProfileReadStateConfigPeek();
  let obj2 = ownerId(wishlistId[5]);
  const items = [UserProfileStore];
  const items1 = [ownerId];
  const obj3 = stateFromStores1;
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  [tmp7, tmp8] = flag(stateFromStores1.useState(undefined), 2);
  const tmp2 = wishlistId;
  const tmp4 = UserProfileStore;
  const tmp6 = flag(stateFromStores1.useState(undefined), 2);
  const tmp9 = flag || undefined === tmp7;
  if (!tmp9) {
    tmp8(undefined);
  }
  const tmp11 = flag && null != ownerId && null != profileReadStateConfigPeek && undefined === tmp7;
  if (tmp11) {
    let tmp14 = null;
    if (profileReadStateConfigPeek.enabled) {
      tmp14 = stateFromStores;
    }
    tmp8(tmp14);
  }
  const items2 = [closure_4, tmp4];
  const items3 = [ownerId, wishlistId];
  const tmpResult = tmp(tmp2[5]);
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    if (null != ownerId) {
      if (null != wishlistId) {
        if (null != WishlistStore.getWishlist(wishlistId)) {
          if (!WishlistStore.isFetching(wishlistId)) {
            if (null == WishlistStore.getError(wishlistId)) {
              const wishlistSettings = UserProfileStore.getWishlistSettings(tmp, tmp7);
              let updated_at;
              const obj = UserProfileStore;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              let shouldAckWishlistResult = null == updated_at || obj3.getUpdatedAt(tmp7) === updated_at;
              if (shouldAckWishlistResult) {
                const obj2 = ProfileReadStateUtils;
                shouldAckWishlistResult = obj2.shouldAckWishlist(wishlistSettings, obj.getProfileReadState(tmp));
              }
              return shouldAckWishlistResult;
            }
          }
        }
      }
    }
    return false;
  }, items3);
  closure_4 = tmp17;
  const items4 = [flag, undefined !== tmp7, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    const tmp = flag && closure_4 && stateFromStores1 && null != ownerId;
    if (tmp) {
      const obj = ProfileReadStateActionCreators;
      obj.ackProfileWishlist(ownerId);
    }
  }, items4);
  return tmp7;
};

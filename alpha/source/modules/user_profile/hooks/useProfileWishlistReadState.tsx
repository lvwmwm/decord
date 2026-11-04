// Module ID: 15216
// Function ID: 15217
// Name: useProfileWishlistReadState
// Dependencies: [32, 19, 9618, 7912, 15197, 504, 7924, 7923, 15217, 2]
// Exports: default

// Module 15216 (useProfileWishlistReadState)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7923 */;
import ProfileReadStateSection from "ProfileReadStateSection" /* 7924 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 15217 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 9618 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
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
  const tmp6 = flag(stateFromStores1.useState(undefined), 2);
  const first = tmp6[0];
  let tmp9 = flag;
  const tmp2 = wishlistId;
  const tmp4 = UserProfileStore;
  const tmp8 = tmp6[1];
  if (flag) {
    tmp9 = null != ownerId;
  }
  if (tmp9) {
    tmp9 = null != profileReadStateConfigPeek;
  }
  if (tmp9) {
    tmp9 = undefined === first;
  }
  if (tmp9) {
    let tmp12 = null;
    if (profileReadStateConfigPeek.enabled) {
      tmp12 = stateFromStores;
    }
    tmp8(tmp12);
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
  closure_4 = tmp15;
  const items4 = [flag, undefined !== first, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    const tmp = flag && closure_4 && stateFromStores1 && null != ownerId;
    if (tmp) {
      const obj = ProfileReadStateActionCreators;
      obj.ackProfileWishlist(ownerId);
    }
  }, items4);
  return first;
};

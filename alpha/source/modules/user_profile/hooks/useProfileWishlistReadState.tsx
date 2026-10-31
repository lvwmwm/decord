// Module ID: 14995
// Function ID: 14996
// Name: useProfileWishlistReadState
// Dependencies: [32, 19, 9471, 7772, 7784, 14976, 504, 7783, 14996, 2]
// Exports: default

// Module 14995 (useProfileWishlistReadState)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7783 */;
import ProfileReadStateConstants from "ProfileReadStateConstants" /* 7784 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 14996 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 9471 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import size from "module_2" /* 2 */;

const ProfileReadStateSection = ProfileReadStateConstants.ProfileReadStateSection;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
  ownerId = ownerId.ownerId;
  const wishlistId = ownerId.wishlistId;
  let flag = ownerId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores1;
  let closure_5;
  let tmp = ownerId;
  let obj = ownerId(wishlistId[5]);
  const profileReadStateConfigPeek = obj.useProfileReadStateConfigPeek();
  const obj2 = ownerId(wishlistId[6]);
  const items = [closure_5];
  const items1 = [ownerId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  const tmp6 = flag(stateFromStores.useState(undefined), 2);
  const first = tmp6[0];
  let tmp9 = flag;
  const obj3 = stateFromStores;
  const tmp2 = wishlistId;
  const tmp4 = closure_5;
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
  const items2 = [stateFromStores1, tmp4];
  const items3 = [ownerId, wishlistId, stateFromStores];
  const tmpResult = tmp(tmp2[6]);
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    if (null != ownerId) {
      if (null != wishlistId) {
        if (null != WishlistStore.getWishlist(wishlistId)) {
          if (!WishlistStore.isFetching(wishlistId)) {
            if (null == WishlistStore.getError(wishlistId)) {
              const wishlistSettings = UserProfileStore.getWishlistSettings(tmp, tmp9);
              let updated_at;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              let shouldAckWishlistResult = null == updated_at || obj2.getUpdatedAt(tmp9) === updated_at;
              if (shouldAckWishlistResult) {
                const obj = ProfileReadStateUtils;
                shouldAckWishlistResult = obj.shouldAckWishlist(wishlistSettings, stateFromStores);
              }
              return shouldAckWishlistResult;
            }
          }
        }
      }
    }
    return false;
  }, items3);
  closure_5 = tmp15;
  const items4 = [flag, undefined !== first, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    const tmp = flag && closure_5 && stateFromStores1 && null != ownerId;
    if (tmp) {
      const obj = ProfileReadStateActionCreators;
      obj.ackProfileWishlist(ownerId);
    }
  }, items4);
  return first;
};

// Module ID: 14957
// Function ID: 14958
// Name: useProfileWishlistReadState
// Dependencies: [32, 19, 9449, 7765, 7777, 14938, 504, 14958, 14959, 2]
// Exports: default

// Module 14957 (useProfileWishlistReadState)
import ProfileReadStateConstants from "ProfileReadStateConstants" /* 7777 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 14959 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 9449 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const ProfileReadStateSection = ProfileReadStateConstants.ProfileReadStateSection;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

export default function useProfileWishlistReadState(ownerId) {
  let closure_3;
  let first;
  let tmp8;
  ownerId = ownerId.ownerId;
  const wishlistId = ownerId.wishlistId;
  let flag = ownerId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  _slicedToArray = undefined;
  let stateFromStores1;
  let closure_5;
  const tmp2 = flag;
  let tmp = ownerId;
  let obj = ownerId(flag[5]);
  const profileReadStateConfigPeek = obj.useProfileReadStateConfigPeek();
  const items = [UserProfileStore];
  const items1 = [ownerId];
  const obj2 = ownerId(flag[6]);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  [first, tmp8] = stateFromStores1.useState(undefined);
  let tmp9 = flag;
  const obj3 = stateFromStores1;
  const tmp4 = UserProfileStore;
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
  const tmp14 = wishlistId(tmp2[7])(ownerId);
  _slicedToArray = tmp14;
  const items2 = [closure_5, tmp4];
  const items3 = [ownerId, wishlistId];
  const tmpResult = tmp(tmp2[6]);
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    if (null != ownerId) {
      if (null != wishlistId) {
        if (null != WishlistStore.getWishlist(wishlistId)) {
          if (!WishlistStore.isFetching(wishlistId)) {
            if (null == WishlistStore.getError(wishlistId)) {
              const wishlistSettings = UserProfileStore.getWishlistSettings(tmp, tmp2);
              let updated_at;
              if (wishlistSettings != null) {
                updated_at = wishlistSettings.updated_at;
              }
              const tmp6 = null == updated_at || WishlistStore.getUpdatedAt(wishlistId) === updated_at;
              return tmp6;
            }
          }
        }
      }
    }
    return false;
  }, items3);
  closure_5 = tmp16;
  const items4 = [flag, undefined !== first, tmp14, stateFromStores1, ownerId];
  const effect = obj3.useEffect(() => {
    const tmp = flag && closure_5 && closure_3 && stateFromStores1 && null != ownerId;
    if (tmp) {
      const obj = ProfileReadStateActionCreators;
      obj.ackProfileWishlist(ownerId);
    }
  }, items4);
  return first;
};

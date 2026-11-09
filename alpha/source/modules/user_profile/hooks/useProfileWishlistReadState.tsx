// Module ID: 15267
// Function ID: 15268
// Name: useProfileWishlistReadState
// Dependencies: [32, 19, 9555, 7848, 15248, 504, 7860, 15268, 2]
// Exports: default

// Module 15267 (useProfileWishlistReadState)
import ProfileReadStateSection from "ProfileReadStateSection" /* 7860 */;
import ProfileReadStateActionCreators from "ProfileReadStateActionCreators" /* 15268 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 9555 */;
import UserProfileStore from "UserProfileStore" /* 7848 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileWishlistReadState.tsx");

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
  const items = [UserProfileStore];
  const items1 = [ownerId];
  const obj2 = ownerId(wishlistId[5]);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let profileReadStateSectionAckedAt = null;
    if (null != ownerId) {
      profileReadStateSectionAckedAt = UserProfileStore.getProfileReadStateSectionAckedAt(tmp, ProfileReadStateSection.ProfileReadStateSection.WISHLIST);
    }
    return profileReadStateSectionAckedAt;
  }, items1);
  [tmp7, tmp8] = flag(stateFromStores1.useState(undefined), 2);
  const obj3 = stateFromStores1;
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
    let result = null != ownerId;
    if (result) {
      const obj = ProfileReadStateActionCreators;
      result = obj.canAckProfileWishlist(tmp, wishlistId);
    }
    return result;
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

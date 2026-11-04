// Module ID: 15195
// Function ID: 15196
// Name: useProfileNewContent
// Dependencies: [9618, 1385, 7912, 15196, 15197, 504, 7924, 7923, 9617, 2]
// Exports: default

// Module 15195 (useProfileNewContent)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7923 */;
import ProfileReadStateSection from "ProfileReadStateSection" /* 7924 */;
import WishlistStore from "WishlistStore" /* 9618 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, profileReadStateSectionAckedAt;

let closure_6 = { hasNewWishlistItems: false, newWishlistItemCount: 0, shouldLogExposure: false };
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileNewContent.tsx");

export default function useProfileNewContent(id) {
  _require = id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isItemShown = obj.isItemShown;
  let profileReadStateConfigPeek;
  let obj2 = require("ProfileReadStateExperiment");
  profileReadStateConfigPeek = obj2.useProfileReadStateConfigPeek();
  const tmp2 = isItemShown(profileReadStateConfigPeek[4])(id);
  let wishlist = tmp2;
  let items = [UserProfileStore, UserStore];
  let items1 = [id, profileReadStateConfigPeek];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => {
    if (null != profileReadStateConfigPeek) {
      id = id.id;
      currentUser = UserStore.getCurrentUser();
      let id1;
      if (currentUser != null) {
        id1 = currentUser.id;
      }
      if (id !== id1) {
        const firstWishlistId = UserProfileStore.getFirstWishlistId(tmp7.id);
        if (null == firstWishlistId) {
          return null;
        } else {
          const wishlistSettings = obj2.getWishlistSettings(tmp7.id, firstWishlistId);
          profileReadStateSectionAckedAt = obj2.getProfileReadStateSectionAckedAt(tmp7.id, ProfileReadStateSection.ProfileReadStateSection.WISHLIST);
          let tmp6 = null;
          const obj = ProfileReadStateUtils;
          if (obj.hasWishlistBeenUpdatedSinceAcked(wishlistSettings, profileReadStateSectionAckedAt)) {
            tmp6 = firstWishlistId;
          }
          return tmp6;
        }
      }
    }
    return null;
  }, items1);
  const obj4 = require("useWishlistHooks");
  const obj5 = { wishlistId: stateFromStores, userId: id.id };
  const fetchWishlist = obj4.useFetchWishlist(obj5);
  const items2 = [UserProfileStore, UserStore, wishlist];
  const items3 = [id, profileReadStateConfigPeek, tmp2, isItemShown];
  const obj6 = require("get initialized");
  return obj6.useStateFromStoresObject(items2, () => {
    if (null != profileReadStateConfigPeek) {
      id = profileReadStateSectionAckedAt.id;
      currentUser = currentUser.getCurrentUser();
      let id1;
      if (currentUser != null) {
        id1 = currentUser.id;
      }
      if (id !== id1) {
        const obj2 = profileReadStateSectionAckedAt;
        profileReadStateSectionAckedAt = profileReadStateSectionAckedAt.getProfileReadStateSectionAckedAt(tmp7.id, id(profileReadStateConfigPeek[6]).ProfileReadStateSection.WISHLIST);
        if (null == profileReadStateSectionAckedAt) {
          return closure_1_6;
        } else {
          let items1;
          let firstWishlistId = null;
          if (wishlist) {
            firstWishlistId = obj2.getFirstWishlistId(tmp7.id);
          }
          if (null != firstWishlistId) {
            wishlist = wishlist.getWishlist(firstWishlistId);
            let items;
            if (wishlist != null) {
              items = wishlist.items;
            }
            if (items == null) {
              items = [];
            }
            items1 = items;
          } else {
            items1 = [];
          }
          const length = items1.filter((addedAt) => {
            let flag;
            if (isItemShown != null) {
              flag = isItemShown(addedAt);
            }
            if (flag == null) {
              flag = true;
            }
            if (flag) {
              const obj = ProfileReadStateUtils;
              flag = obj.isWishlistItemNew(addedAt.addedAt, profileReadStateSectionAckedAt);
            }
            return flag;
          }).length;
          const enabled = tmp.enabled && length > 0;
          let obj = { hasNewWishlistItems: enabled, newWishlistItemCount: length, shouldLogExposure: length > 0 };
          return obj;
        }
      }
    }
    return closure_1_6;
  }, items3);
};

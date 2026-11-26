// Module ID: 15027
// Function ID: 15028
// Name: useProfileNewContent
// Dependencies: [11116, 1387, 6163, 15028, 15029, 504, 6308, 6307, 11115, 2]
// Exports: default

// Module 15027 (useProfileNewContent)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 6307 */;
import ProfileReadStateSection from "ProfileReadStateSection" /* 6308 */;
import WishlistStore from "WishlistStore" /* 11116 */;
import UserStore from "UserStore" /* 1387 */;
import UserProfileStore from "UserProfileStore" /* 6163 */;
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
        const firstWishlistId = UserProfileStore.getFirstWishlistId(tmp8.id);
        if (null == firstWishlistId) {
          return null;
        } else {
          const wishlistSettings = obj.getWishlistSettings(tmp8.id, firstWishlistId);
          profileReadStateSectionAckedAt = obj.getProfileReadStateSectionAckedAt(tmp8.id, ProfileReadStateSection.ProfileReadStateSection.WISHLIST);
          let tmp7 = null;
          const obj2 = ProfileReadStateUtils;
          if (obj2.hasWishlistBeenUpdatedSinceAcked(wishlistSettings, profileReadStateSectionAckedAt)) {
            tmp7 = firstWishlistId;
          }
          return tmp7;
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

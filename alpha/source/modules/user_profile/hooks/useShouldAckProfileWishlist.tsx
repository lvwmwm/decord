// Module ID: 14958
// Function ID: 14959
// Name: useShouldAckProfileWishlist
// Dependencies: [1384, 7765, 7777, 14938, 504, 7776, 2]
// Exports: default

// Module 14958 (useShouldAckProfileWishlist)
import ProfileReadStateUtils from "ProfileReadStateUtils" /* 7776 */;
import ProfileReadStateConstants from "ProfileReadStateConstants" /* 7777 */;
import UserStore from "UserStore" /* 1384 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ProfileReadStateSection = ProfileReadStateConstants.ProfileReadStateSection;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useShouldAckProfileWishlist.tsx");

export default function useShouldAckProfileWishlist(arg0) {
  let closure_0;
  let profileReadStateConfigPeek;
  _require = arg0;
  const obj = require("ProfileReadStateExperiment");
  profileReadStateConfigPeek = obj.useProfileReadStateConfigPeek();
  let obj2 = require("get initialized");
  const items = [UserProfileStore, UserStore];
  const items1 = [arg0, profileReadStateConfigPeek];
  return obj2.useStateFromStores(items, () => {
    if (null != profileReadStateConfigPeek) {
      if (null != closure_0) {
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        if (closure_0 !== id) {
          const firstWishlistId = UserProfileStore.getFirstWishlistId(tmp8);
          let wishlistSettings = null;
          if (null != firstWishlistId) {
            wishlistSettings = obj.getWishlistSettings(tmp8, firstWishlistId);
          }
          const profileReadStateSectionAckedAt = obj.getProfileReadStateSectionAckedAt(tmp8, ProfileReadStateSection.WISHLIST);
          const obj2 = ProfileReadStateUtils;
          return obj2.shouldAckWishlist(wishlistSettings, profileReadStateSectionAckedAt);
        }
      }
    }
    return false;
  }, items1);
};

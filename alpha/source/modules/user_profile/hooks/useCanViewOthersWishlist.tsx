// Module ID: 15197
// Function ID: 15198
// Name: useCanViewOthersWishlist
// Dependencies: [9618, 5083, 7912, 13901, 504, 15198, 2]
// Exports: default

// Module 15197 (useCanViewOthersWishlist)
import useCanDMDefault from "useCanDM" /* 13901 */;
import WishlistVisibility from "WishlistVisibility" /* 15198 */;
import WishlistStore from "WishlistStore" /* 9618 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserProfileStore from "UserProfileStore" /* 7912 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useCanViewOthersWishlist.tsx");

export default function useCanViewOthersWishlist(id) {
  let closure_1;
  _require = id;
  const tmp = useCanDMDefault(id.id);
  importDefault = tmp;
  let obj = require("get initialized");
  const items = [UserProfileStore, WishlistStore, RelationshipStore];
  const items1 = [id, tmp];
  return obj.useStateFromStores(items, () => {
    const firstWishlistId = UserProfileStore.getFirstWishlistId(id.id);
    const obj = UserProfileStore;
    if (null == firstWishlistId) {
      return false;
    } else {
      let visibility;
      const wishlistSettings = obj.getWishlistSettings(tmp.id, firstWishlistId);
      if (wishlistSettings != null) {
        visibility = wishlistSettings.visibility;
      }
      const PUBLIC = WishlistVisibility.WishlistVisibility.PUBLIC;
      let tmp6 = WishlistStore.getWishlistItems(firstWishlistId).length > 0;
      const isFriendResult = tmp7 && RelationshipStore.isFriend(tmp.id);
      if (tmp6) {
        tmp6 = visibility === PUBLIC;
      }
      if (tmp6) {
        tmp6 = closure_1;
      }
      if (tmp6) {
        let tmp10 = !tmp7;
        if (false === id.nsfwAllowed) {
          tmp10 = isFriendResult;
        }
        tmp6 = tmp10;
      }
      return tmp6;
    }
  }, items1);
};

// Module ID: 14939
// Function ID: 14940
// Name: useCanViewOthersWishlist
// Dependencies: [9449, 4951, 7765, 13635, 504, 14940, 2]
// Exports: default

// Module 14939 (useCanViewOthersWishlist)
import useCanDMDefault from "useCanDM" /* 13635 */;
import WishlistVisibility from "WishlistVisibility" /* 14940 */;
import WishlistStore from "WishlistStore" /* 9449 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
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

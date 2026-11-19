// Module ID: 14499
// Function ID: 14500
// Name: useCanViewOthersWishlist
// Dependencies: [8863, 4734, 6837, 12685, 504, 14500, 2]
// Exports: default

// Module 14499 (useCanViewOthersWishlist)
import useCanDMDefault from "useCanDM" /* 12685 */;
import WishlistVisibility from "WishlistVisibility" /* 14500 */;
import WishlistStore from "WishlistStore" /* 8863 */;
import RelationshipStore from "RelationshipStore" /* 4734 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
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

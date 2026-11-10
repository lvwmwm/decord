// Module ID: 15275
// Function ID: 15276
// Name: useCanViewOthersWishlist
// Dependencies: [9561, 5084, 7852, 13936, 504, 15276, 2]
// Exports: default

// Module 15275 (useCanViewOthersWishlist)
import useCanDMDefault from "useCanDM" /* 13936 */;
import WishlistVisibility from "WishlistVisibility" /* 15276 */;
import WishlistStore from "WishlistStore" /* 9561 */;
import RelationshipStore from "RelationshipStore" /* 5084 */;
import UserProfileStore from "UserProfileStore" /* 7852 */;
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

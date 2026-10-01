// Module ID: 12679
// Function ID: 12680
// Name: useTrackUserProfileWishlistView
// Dependencies: [19, 8239, 504, 2]
// Exports: default

// Module 12679 (useTrackUserProfileWishlistView)
import react from "react" /* 19 */;
import WishlistStore from "WishlistStore" /* 8239 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default function useTrackUserProfileWishlistView(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  let obj = wishlistId(onAction[2]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => WishlistStore.isFetching(wishlistId));
  const ref = flag(false);
  const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
  productLines(() => {
    let tmp6;
    const tmp = flag;
    if (tmp) {
      const current = stateFromStores || ref.current;
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId, productLines: tmp6 };
        onAction(obj);
        ref.current = true;
        tmp6 = productLines;
      }
    } else {
      ref.current = false;
    }
  }, items1);
};

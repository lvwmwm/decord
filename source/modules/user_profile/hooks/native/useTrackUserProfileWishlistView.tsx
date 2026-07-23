// Module ID: 12125
// Function ID: 94981
// Name: useTrackUserProfileWishlistView
// Dependencies: [31, 8677, 566, 2]
// Exports: default

// Module 12125 (useTrackUserProfileWishlistView)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);
result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default function useTrackUserProfileWishlistView(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const onAction = wishlistId.onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  let closure_5;
  const items = [stateFromStores];
  stateFromStores = wishlistId(onAction[2]).useStateFromStores(items, () => stateFromStores.isFetching(wishlistId));
  closure_5 = flag(false);
  const items1 = [flag, stateFromStores, onAction, wishlistId, productLines];
  productLines(() => {
    if (flag) {
      let current = stateFromStores;
      if (!stateFromStores) {
        current = ref.current;
      }
      if (!current) {
        const obj = { action: "VIEW_WISHLIST", wishlistId };
        let tmp7;
        if (null != productLines) {
          tmp7 = productLines;
        }
        obj.productLines = tmp7;
        onAction(obj);
        ref.current = true;
        const tmp3 = onAction;
      }
    } else {
      ref.current = false;
    }
  }, items1);
};

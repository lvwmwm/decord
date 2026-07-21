// Module ID: 12007
// Function ID: 92804
// Name: useTrackUserProfileWishlistView
// Dependencies: []
// Exports: default

// Module 12007 (useTrackUserProfileWishlistView)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
let closure_4 = importDefault(dependencyMap[1]);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileWishlistView.tsx");

export default function useTrackUserProfileWishlistView(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  const require = wishlistId;
  const onAction = wishlistId.onAction;
  const dependencyMap = onAction;
  const productLines = wishlistId.productLines;
  let flag = wishlistId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  let closure_4;
  let closure_5;
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => stateFromStores.isFetching(wishlistId));
  closure_4 = stateFromStores;
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

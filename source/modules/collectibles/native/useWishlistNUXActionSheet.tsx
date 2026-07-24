// Module ID: 8711
// Function ID: 68820
// Name: useHasNeverWishlisted
// Dependencies: [31, 6855, 1194, 1345, 566, 3946, 1334, 1336, 4098, 8712, 1934, 2]
// Exports: default

// Module 8711 (useHasNeverWishlisted)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
function useHasNeverWishlisted() {
  const items = [closure_5];
  _require = _require(566).useStateFromStores(items, () => outer1_5.getId());
  const obj = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items1, () => outer1_4.getFirstWishlistId(closure_0));
  const obj2 = _require(566);
  const items2 = [_isNativeReflectConstruct];
  let stateFromStores1 = _require(566).useStateFromStores(items2, () => {
    const userProfile = outer1_4.getUserProfile(closure_0);
    let tmp2 = null != userProfile;
    if (tmp2) {
      tmp2 = userProfile.fetchEndedAt > 0;
    }
    return tmp2;
  });
  if (stateFromStores1) {
    stateFromStores1 = null == stateFromStores;
  }
  return stateFromStores1;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let tmp = useHasNeverWishlisted();
  let obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  obj = {};
  if (tmp) {
    tmp = !obj.useIsDismissibleContentDismissed_UNSAFE(require(1334) /* DismissibleContent */.DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  obj.shouldShowWishlistNUXActionSheet = tmp;
  obj.showWishlistNUXActionSheet = React.useCallback((product) => {
    let obj = outer1_0(outer1_2[7]);
    const result = obj.trackDismissibleContentShown(outer1_0(outer1_2[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
    obj = { product };
    outer1_1(outer1_2[8]).openLazy(outer1_0(outer1_2[10])(outer1_2[9], outer1_2.paths), "WishlistNUXAddedItemActionSheet", obj, "stack");
    const obj2 = outer1_1(outer1_2[8]);
    obj = { dismissAction: outer1_6.USER_DISMISS, forceTrack: true };
    const result1 = outer1_0(outer1_2[5]).UNSAFE_markDismissibleContentAsDismissed(outer1_0(outer1_2[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj);
  }, []);
  return obj;
};
export { useHasNeverWishlisted };

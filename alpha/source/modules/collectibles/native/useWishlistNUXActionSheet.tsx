// Module ID: 8858
// Function ID: 8859
// Name: useWishlistNUXActionSheet
// Dependencies: [19, 6837, 502, 4638, 504, 4824, 4625, 4626, 5006, 8859, 2121, 2]
// Exports: default, useHasNeverWishlisted

// Module 8858 (useWishlistNUXActionSheet)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4638 */;
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f95414 = () => id.getId();
const f95415 = () => UserProfileStore.getFirstWishlistId(closure_0);
const f95416 = () => {
  const userProfile = UserProfileStore.getUserProfile(closure_0);
  return null != userProfile && userProfile.fetchEndedAt > 0;
};
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/collectibles/native/useWishlistNUXActionSheet.tsx");

export default function useWishlistNUXActionSheet() {
  let closure_0;
  let id;
  let paths;
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, f95414);
  let obj2 = require("get initialized");
  const items1 = [UserProfileStore];
  const stateFromStores = obj2.useStateFromStores(items1, f95415);
  let obj3 = require("get initialized");
  const items2 = [UserProfileStore];
  let stateFromStores1 = obj3.useStateFromStores(items2, f95416) && null == stateFromStores;
  const useIsDismissibleContentDismissed_UNSAFE = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE;
  require("DismissibleContentUnsafeUtils");
  if (stateFromStores1) {
    stateFromStores1 = !useIsDismissibleContentDismissed_UNSAFE(tmp(4625).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
  }
  let obj4 = {
    shouldShowWishlistNUXActionSheet: stateFromStores1,
    showWishlistNUXActionSheet: react.useCallback((product) => {
      const obj = closure_0(paths[7]);
      const result = obj.trackDismissibleContentShown(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET);
      const obj2 = require("ActionSheetActionCreators");
      const obj3 = { product };
      obj2.openLazy(closure_0(paths[10])(paths[9], paths.paths), "WishlistNUXAddedItemActionSheet", obj3, "stack");
      const obj4 = closure_0(paths[5]);
      const obj5 = { dismissAction: constants.USER_DISMISS, forceTrack: true };
      const result1 = obj4.UNSAFE_markDismissibleContentAsDismissed(closure_0(paths[6]).DismissibleContent.WISHLIST_MOBILE_NUX_ACTION_SHEET, obj5);
    }, [])
  };
  return obj4;
};
export function useHasNeverWishlisted() {
  let closure_0;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  _require = obj.useStateFromStores(items, f95414);
  const items1 = [UserProfileStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, f95415);
  const items2 = [UserProfileStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, f95416) && null == stateFromStores;
  return stateFromStores1;
}

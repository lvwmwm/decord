// Module ID: 12682
// Function ID: 12683
// Name: useWishlistSuggestionsDismissibleContent
// Dependencies: [32, 19, 7035, 2042, 1091, 504, 6806, 2029, 2]
// Exports: default

// Module 12682 (useWishlistSuggestionsDismissibleContent)
import DurationsDefault from "Durations" /* 1091 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const cooldownDurationMs = 90 * DurationsDefault.Millis.DAY;
let closure_7 = 90 * DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
  let _undefined;
  let closure_3;
  let items2;
  let tmp4;
  let tmp5;
  userId = userId.userId;
  const wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  _slicedToArray = undefined;
  react = undefined;
  let num;
  if (wishlist != null) {
    num = wishlist.items.length;
  }
  if (num == null) {
    num = 0;
  }
  const tmp = num >= 3;
  [tmp4, tmp5] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = tmp5;
  let tmp6 = !hasFetchedWishlist;
  const obj = react;
  if (hasFetchedWishlist) {
    tmp6 = tmp;
  }
  if (!tmp6) {
    tmp6 = tmp4;
  }
  if (!tmp6) {
    tmp5(true);
  }
  const items = [UserProfileStore];
  const items1 = [wishlist, userId];
  const obj2 = userId(wishlist[5]);
  const stateFromStores = obj2.useStateFromStores(items, function() {
    let num = 0;
    if (null != wishlist) {
      const _Date = Date;
      const wishlistSettings = UserProfileStore.getWishlistSettings(userId, tmp.id);
      let num2;
      if (wishlistSettings != null) {
        num2 = wishlistSettings.updated_at;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const self = this;
      const self2 = this;
      const _Date1 = new _Date(num2);
      num = _Date1.valueOf();
    }
    return num;
  }, items1);
  const obj3 = userId(wishlist[6]);
  const obj4 = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs };
  const tmp2Result = tmp2(obj3.useSelectedTimeRecurringDismissibleContent(userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj4, undefined, true), 2);
  react = tmp11;
  const first = tmp2Result[0];
  if (hasFetchedWishlist) {
    hasFetchedWishlist = first === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
    first === userId(wishlist[7]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS || tmp4 || !tmp;
  }
  const obj5 = {
    isVisible: hasFetchedWishlist,
    isDismissible: tmp,
    markAsDismissed: obj.useCallback(() => {
      _undefined(false);
      closure_3(ContentDismissActionType.USER_DISMISS);
    }, items2)
  };
  items2 = [tmp2Result[1]];
  return obj5;
};

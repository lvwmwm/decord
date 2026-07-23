// Module ID: 12129
// Function ID: 95010
// Name: useWishlistSuggestionsDismissibleContent
// Dependencies: [57, 31, 6856, 1345, 664, 1428, 566, 5802, 1334, 2]
// Exports: default

// Module 12129 (useWishlistSuggestionsDismissibleContent)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import ApexExperiment from "ApexExperiment";

const require = arg1;
let closure_6 = 90 * require("set").Millis.DAY;
let closure_7 = 90 * require("set").Millis.DAY;
ApexExperiment = { name: "2026-07-smag-wishlist-recommendations-dismiss-threshold", kind: "user", defaultConfig: { minItemsToDismiss: 1 }, variations: { [0]: { minItemsToDismiss: 1 }, [1]: { minItemsToDismiss: 3 }, [2]: { minItemsToDismiss: 10 } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
  userId = userId.userId;
  const wishlist = userId.wishlist;
  let hasFetchedWishlist = userId.hasFetchedWishlist;
  let callback;
  let React;
  let length;
  if (null != wishlist) {
    length = wishlist.items.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const tmp2 = num >= ApexExperiment.useConfig({ location: "user_profile_wishlist_suggestions_grid" }).minItemsToDismiss;
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  callback = tmp5;
  if (!tmp6) {
    tmp5(true);
  }
  let obj = userId(wishlist[6]);
  const items = [_isNativeReflectConstruct];
  const items1 = [wishlist, userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != wishlist) {
      let _Date = Date;
      const wishlistSettings = outer1_4.getWishlistSettings(userId, wishlist.id);
      let updated_at;
      if (null != wishlistSettings) {
        updated_at = wishlistSettings.updated_at;
      }
      let num2 = 0;
      if (null != updated_at) {
        num2 = updated_at;
      }
      const prototype = _Date.prototype;
      _Date = new _Date(num2);
      num = _Date.valueOf();
    }
    return num;
  }, items1);
  obj = { showAfterTimestamp: stateFromStores + closure_7, cooldownDurationMs: closure_6 };
  const tmp9 = callback(userId(wishlist[7]).useSelectedTimeRecurringDismissibleContent(userId(wishlist[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj, undefined, true), 2);
  React = tmp10;
  let tmp11 = tmp9[0] === userId(wishlist[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
  obj = {};
  if (hasFetchedWishlist) {
    if (!tmp11) {
      tmp11 = first;
    }
    if (!tmp11) {
      tmp11 = !tmp2;
    }
    hasFetchedWishlist = tmp11;
  }
  obj.isVisible = hasFetchedWishlist;
  obj.isDismissible = tmp2;
  const items2 = [tmp9[1]];
  obj.markAsDismissed = React.useCallback(() => {
    _undefined(false);
    _undefined2(outer1_5.USER_DISMISS);
  }, items2);
  return obj;
};

// Module ID: 12011
// Function ID: 92833
// Name: useWishlistSuggestionsDismissibleContent
// Dependencies: [788070400, 778698752, 541261824, 357957632, 359268352, 516489216, 584056832, 584122368, 359727104, 560463872]
// Exports: default

// Module 12011 (useWishlistSuggestionsDismissibleContent)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
let closure_6 = 90 * importDefault(dependencyMap[4]).Millis.DAY;
let closure_7 = 90 * importDefault(dependencyMap[4]).Millis.DAY;
let closure_8 = arg1(dependencyMap[5]).createApexExperiment({ defaultConfig: { minItemsToDismiss: 1 }, variations: { [0]: { minItemsToDismiss: 1 }, [1]: { minItemsToDismiss: 3 }, [2]: { minItemsToDismiss: 10 } } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/hooks/useWishlistSuggestionsDismissibleContent.tsx");

export default function useWishlistSuggestionsDismissibleContent(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const wishlist = userId.wishlist;
  const dependencyMap = wishlist;
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
  const tmp2 = num >= closure_8.useConfig({ location: "user_profile_wishlist_suggestions_grid" }).minItemsToDismiss;
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  callback = tmp5;
  if (!tmp6) {
    tmp5(true);
  }
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const items1 = [wishlist, userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != wishlist) {
      let _Date = Date;
      const wishlistSettings = wishlistSettings.getWishlistSettings(userId, wishlist.id);
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
  const tmp9 = callback(arg1(dependencyMap[7]).useSelectedTimeRecurringDismissibleContent(arg1(dependencyMap[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS, obj, undefined, true), 2);
  React = tmp10;
  let tmp11 = tmp9[0] === arg1(dependencyMap[8]).DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
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
    tmp5(false);
    tmp10(constants.USER_DISMISS);
  }, items2);
  return obj;
};

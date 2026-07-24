// Module ID: 12155
// Function ID: 95243
// Name: UserProfileWishlistSuggestionsGridContent
// Dependencies: [31, 27, 8718, 5510, 33, 689, 4130, 12149, 566, 12156, 1324, 12150, 5462, 5450, 491, 12157, 8717, 12159, 4126, 1212, 7533, 5119, 12160, 2]
// Exports: default

// Module 12155 (UserProfileWishlistSuggestionsGridContent)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function UserProfileWishlistSuggestionsGridContent(arg0) {
  let containerWidth;
  let maxWidth;
  let userId;
  let wishlistId;
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  let obj = wishlistId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = outer1_4.getWishlist(wishlistId);
    }
    return wishlist;
  });
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = wishlistId(566).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = outer1_4.getLastFetchedAt(wishlistId);
    }
    return lastFetchedAt;
  });
  obj = { userId, wishlist: stateFromStores };
  let tmp4 = null == wishlistId;
  const obj2 = wishlistId(566);
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  obj.hasFetchedWishlist = tmp4;
  const tmp3 = importDefault(12156);
  let tmp8 = null;
  if (tmp3Result.isVisible) {
    obj = { userId, wishlistId, wishlist: stateFromStores, containerWidth, maxWidth, isDismissible: tmp6, markAsDismissed: tmp7 };
    tmp8 = callback(WishlistSuggestionsGridContents, obj);
  }
  return tmp8;
}
function WishlistSuggestionsGridContents(arg0) {
  let containerWidth;
  let isDismissible;
  let markAsDismissed;
  let maxWidth;
  let userId;
  let wishlist;
  let wishlistId;
  ({ userId, wishlist, isDismissible } = arg0);
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  const tmp = importDefault(1324)("UserProfileWishlistSuggestionsGridContent");
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_5 + PX_16 + 1, gap: closure_6 };
  const analyticsLocations = importDefault(5462)().analyticsLocations;
  let obj1 = require(12157) /* useAddToWishlistGridItems */;
  obj = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: require(8717) /* _createForOfIteratorHelperLoose */.WishlistFetchSource.USER_PROFILE };
  const items = obj1.useAddToWishlistGridItems(obj).items;
  let tmp15Result = null;
  if (0 !== items.length) {
    obj = {};
    obj1 = { impressionSessionId: tmp3, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: userId, wishlistId, analyticsLocations };
    obj.newValue = obj1;
    const obj2 = { style: tmp2.container };
    const obj3 = { style: tmp2.headerRow };
    const obj4 = { accessibilityRole: "header" };
    let str = "text-sm/semibold";
    if (tmp) {
      str = "text-sm/medium";
    }
    obj4.variant = str;
    let str2 = "text-default";
    if (tmp) {
      str2 = "text-strong";
    }
    obj4.color = str2;
    obj4.lineClamp = 1;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4.children = intl.string(require(1212) /* getSystemLocale */.t["+GB8Kt"]);
    const items1 = [callback(require(4126) /* Text */.Text, obj4), ];
    const obj5 = {};
    let hiddenDismissButton = !isDismissible;
    if (hiddenDismissButton) {
      hiddenDismissButton = tmp2.hiddenDismissButton;
    }
    obj5.style = hiddenDismissButton;
    let str3 = "none";
    if (isDismissible) {
      str3 = "auto";
    }
    obj5.pointerEvents = str3;
    obj5.accessibilityElementsHidden = !isDismissible;
    let str4 = "no-hide-descendants";
    if (isDismissible) {
      str4 = "auto";
    }
    obj5.importantForAccessibility = str4;
    const obj6 = { size: "sm", variant: "icon-only" };
    const obj7 = { size: "sm", color: importDefault(689).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj6.icon = callback(require(5119) /* XSmallIcon */.XSmallIcon, obj7);
    obj6.onPress = markAsDismissed;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj6.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.WAI6xu);
    obj5.children = callback(require(7533) /* IconButton */.IconButton, obj6);
    items1[1] = callback(View, obj5);
    obj3.children = items1;
    const items2 = [closure_8(View, obj3), ];
    const obj8 = { items, wishlist, analyticsLocations, cardSize: importDefault(12150)(obj).cardWidth };
    items2[1] = callback(importDefault(12160), obj8);
    obj2.children = items2;
    obj.children = closure_8(View, obj2);
    tmp15Result = callback(require(12159) /* useWishlistAnalyticsContext */.WishlistAnalyticsProvider, obj);
    const tmp15 = callback;
    const tmp18 = closure_8;
    const tmp19 = View;
    const tmp20 = closure_8;
    const tmp21 = View;
    const tmp22 = callback;
    const tmp7 = callback;
    const tmp8 = View;
  }
  return tmp15Result;
}
({ PROFILE_SIDE_PADDING: closure_5, WISHLIST_SUGGESTION_CARD_GAP: closure_6 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, padding: PX_16, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, background: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.headerRow = obj1;
_createForOfIteratorHelperLoose.hiddenDismissButton = { opacity: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let obj = require(12149) /* useIsMobileWishlistSuggestionsEnabled */;
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(UserProfileWishlistSuggestionsGridContent, obj);
  }
  return tmp;
};

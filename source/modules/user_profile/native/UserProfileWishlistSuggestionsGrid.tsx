// Module ID: 12132
// Function ID: 95053
// Name: UserProfileWishlistSuggestionsGridContent
// Dependencies: [31, 27, 4123, 8606, 8043, 5510, 653, 655, 33, 689, 4131, 12126, 566, 12133, 1324, 8045, 12127, 5462, 5450, 491, 12134, 8605, 4099, 5769, 5482, 4544, 11253, 1212, 12136, 3992, 4127, 6625, 5119, 12137, 2]
// Exports: default

// Module 12132 (UserProfileWishlistSuggestionsGridContent)
import IconButton from "IconButton";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { TrackUserProfileWishlistActions as closure_7 } from "USER_PROFILE_TOOLTIP_DELAY";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { SKUProductLines } from "ME";
import { CollectiblesMobileShopScreen as closure_11 } from "items";
import jsxProd from "AddToWishlistGrid";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function UserProfileWishlistSuggestionsGridContent(arg0) {
  let containerWidth;
  let maxWidth;
  let userId;
  let wishlistId;
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  let obj = wishlistId(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = outer1_6.getWishlist(wishlistId);
    }
    return wishlist;
  });
  const items1 = [closure_6];
  const stateFromStores1 = wishlistId(566).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = outer1_6.getLastFetchedAt(wishlistId);
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
  const tmp3 = importDefault(12133);
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
  let tmp = importDefault(1324)("UserProfileWishlistSuggestionsGridContent");
  let obj = trackUserProfileWishlistAction(8045);
  trackUserProfileWishlistAction = obj.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  const tmp2 = _createForOfIteratorHelperLoose();
  obj = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap: closure_9 };
  const analyticsLocations = importDefault(5462)().analyticsLocations;
  const tmp3 = (function useAnimations() {
    const items = [outer1_5];
    const stateFromStores = trackUserProfileWishlistAction(outer1_2[12]).useStateFromStores(items, () => outer2_5.useReducedMotion);
    const items1 = [stateFromStores];
    return outer1_3.useMemo(() => {
      const ReduceMotion = trackUserProfileWishlistAction(outer2_2[29]).ReduceMotion;
      const tmp = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      const obj = {};
      const FadeInDown = trackUserProfileWishlistAction(outer2_2[29]).FadeInDown;
      obj.entering = FadeInDown.reduceMotion(tmp);
      const FadeOutDown = trackUserProfileWishlistAction(outer2_2[29]).FadeOutDown;
      obj.exiting = FadeOutDown.reduceMotion(tmp);
      const LinearTransition = trackUserProfileWishlistAction(outer2_2[29]).LinearTransition;
      const springifyResult = LinearTransition.springify();
      const massResult = LinearTransition.springify().mass(0.8);
      const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
      obj.layout = LinearTransition.springify().mass(0.8).damping(100).stiffness(300).reduceMotion(tmp);
      return obj;
    }, items1);
  })();
  let obj2 = trackUserProfileWishlistAction(12134);
  obj = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: trackUserProfileWishlistAction(8605).WishlistFetchSource.USER_PROFILE };
  let items = obj2.useAddToWishlistGridItems(obj).items;
  let items1 = [trackUserProfileWishlistAction];
  const callback = React.useCallback(() => {
    let obj = { action: outer1_7.PRESS_ADD_WISHLIST_ITEM };
    const items = [outer1_10.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    outer1_1(outer1_2[22]).hideAllActionSheets();
    const obj2 = outer1_1(outer1_2[22]);
    obj = { analyticsSource: outer1_1(outer1_2[24]).USER_PROFILE_WISHLIST };
    const items1 = [outer1_1(outer1_2[24]).USER_PROFILE_WISHLIST];
    obj.analyticsLocations = items1;
    obj.screen = outer1_11.FEATURED_PAGE;
    const result = trackUserProfileWishlistAction(outer1_2[23]).openCollectiblesShopMobile(obj);
  }, items1);
  if (0 === items.length) {
    const obj1 = { style: tmp2.shopButtonContainer };
    obj2 = { size: "md", variant: "secondary" };
    const obj3 = { size: "sm" };
    obj2.icon = callback(trackUserProfileWishlistAction(11253).ShopIcon, obj3);
    const intl4 = trackUserProfileWishlistAction(1212).intl;
    obj2.text = intl4.string(trackUserProfileWishlistAction(1212).t.RSyoZu);
    obj2.onPress = callback;
    obj1.children = callback(trackUserProfileWishlistAction(4544).Button, obj2);
    let tmp27Result = callback(View, obj1);
  } else {
    const obj4 = {};
    const obj5 = { impressionSessionId: tmp4, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: userId, wishlistId, analyticsLocations };
    obj4.newValue = obj5;
    const obj6 = { style: tmp2.container };
    ({ entering: obj17.entering, exiting: obj17.exiting, layout: obj17.layout } = tmp3);
    const obj7 = { style: tmp2.headerRow };
    const obj8 = { accessibilityRole: "header" };
    let str = "text-sm/semibold";
    if (tmp) {
      str = "text-sm/medium";
    }
    obj8.variant = str;
    let str2 = "text-default";
    if (tmp) {
      str2 = "text-strong";
    }
    obj8.color = str2;
    obj8.lineClamp = 1;
    const intl = trackUserProfileWishlistAction(1212).intl;
    obj8.children = intl.string(trackUserProfileWishlistAction(1212).t["+GB8Kt"]);
    const items2 = [callback(trackUserProfileWishlistAction(4127).Text, obj8), ];
    const obj9 = {};
    const items3 = [tmp2.dismissButton, ];
    let hiddenDismissButton = !isDismissible;
    if (hiddenDismissButton) {
      hiddenDismissButton = tmp2.hiddenDismissButton;
    }
    items3[1] = hiddenDismissButton;
    obj9.style = items3;
    let str3 = "none";
    if (isDismissible) {
      str3 = "auto";
    }
    obj9.pointerEvents = str3;
    obj9.accessibilityElementsHidden = !isDismissible;
    let str4 = "no-hide-descendants";
    if (isDismissible) {
      str4 = "auto";
    }
    obj9.importantForAccessibility = str4;
    const obj10 = { size: "sm", variant: "icon-only" };
    const obj11 = { size: "sm", color: importDefault(689).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj10.icon = callback(trackUserProfileWishlistAction(5119).XSmallIcon, obj11);
    obj10.onPress = markAsDismissed;
    const intl2 = trackUserProfileWishlistAction(1212).intl;
    obj10.accessibilityLabel = intl2.string(trackUserProfileWishlistAction(1212).t.WAI6xu);
    obj9.children = callback(trackUserProfileWishlistAction(6625).IconButton, obj10);
    items2[1] = callback(View, obj9);
    obj7.children = items2;
    const items4 = [closure_13(View, obj7), , ];
    const obj12 = { items, wishlist, analyticsLocations, cardSize: importDefault(12127)(obj).cardWidth };
    items4[1] = callback(importDefault(12137), obj12);
    const obj13 = { style: tmp2.shopButtonContainer };
    const obj14 = { size: "md", variant: "secondary" };
    const obj15 = { size: "sm" };
    obj14.icon = callback(trackUserProfileWishlistAction(11253).ShopIcon, obj15);
    const intl3 = trackUserProfileWishlistAction(1212).intl;
    obj14.text = intl3.string(trackUserProfileWishlistAction(1212).t.RSyoZu);
    obj14.onPress = callback;
    obj13.children = callback(trackUserProfileWishlistAction(4544).Button, obj14);
    items4[2] = callback(View, obj13);
    obj6.children = items4;
    obj4.children = closure_13(importDefault(3992).View, obj6);
    tmp27Result = callback(trackUserProfileWishlistAction(12136).WishlistAnalyticsProvider, obj4);
    const tmp27 = callback;
    const tmp30 = closure_13;
    const tmp32 = closure_13;
    const tmp33 = View;
    const tmp34 = callback;
    const tmp8 = callback;
    const tmp9 = View;
  }
  return tmp27Result;
}
({ PROFILE_SIDE_PADDING: closure_8, WISHLIST_SUGGESTION_CARD_GAP: closure_9 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, padding: PX_16, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, background: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.headerRow = obj1;
_createForOfIteratorHelperLoose.dismissButton = { marginVertical: -require("_createForOfIteratorHelperLoose").space.PX_10 };
_createForOfIteratorHelperLoose.hiddenDismissButton = { opacity: 0 };
let obj2 = { marginVertical: -require("_createForOfIteratorHelperLoose").space.PX_10 };
_createForOfIteratorHelperLoose.shopButtonContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginHorizontal: "auto" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginHorizontal: "auto" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let obj = require(12126) /* useIsMobileWishlistSuggestionsEnabled */;
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(UserProfileWishlistSuggestionsGridContent, obj);
  }
  return tmp;
};

// Module ID: 12681
// Function ID: 12682
// Name: UserProfileWishlistSuggestionsGrid
// Dependencies: [19, 17, 4825, 8239, 7628, 6629, 1074, 1076, 21, 576, 4836, 12677, 504, 12682, 7635, 12560, 6583, 5910, 1255, 12683, 8238, 4800, 6961, 6603, 5281, 11620, 1115, 12684, 4566, 4832, 7363, 5992, 12685, 2]
// Exports: default

// Module 12681 (UserProfileWishlistSuggestionsGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import reactDefault from "react" /* 5910 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import Constants3 from "Constants" /* 7628 */;
import useCardGridLayoutDefault from "useCardGridLayout" /* 12560 */;
import MobileWishlistSuggestionsExperiment from "MobileWishlistSuggestionsExperiment" /* 12677 */;
import useWishlistSuggestionsDismissibleContentDefault from "useWishlistSuggestionsDismissibleContent" /* 12682 */;
import AddToWishlistGridDefault from "AddToWishlistGrid" /* 12685 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import WishlistStore from "WishlistStore" /* 8239 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function UserProfileWishlistSuggestionsGridContent(arg0) {
  let containerWidth;
  let maxWidth;
  let tmp4;
  let userId;
  let wishlistId;
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  const items = [WishlistStore];
  const obj = wishlistId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  });
  const items1 = [WishlistStore];
  const obj2 = wishlistId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
    }
    return lastFetchedAt;
  });
  const obj3 = { userId, wishlist: stateFromStores, hasFetchedWishlist: tmp4 };
  tmp4 = null == wishlistId;
  const tmp3 = useWishlistSuggestionsDismissibleContentDefault;
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  let tmp8 = null;
  const tmp3Result = tmp3(obj3);
  if (tmp3Result.isVisible) {
    const obj4 = { userId, wishlistId, wishlist: stateFromStores, containerWidth, maxWidth, isDismissible: tmp6, markAsDismissed: tmp7 };
    tmp8 = closure_12(WishlistSuggestionsGridContents, obj4);
  }
  return tmp8;
}
function WishlistSuggestionsGridContents(arg0) {
  let Button;
  let Button2;
  let IconButton;
  let XSmallIcon;
  let constants2;
  let containerWidth;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDismissible;
  let items4;
  let items6;
  let markAsDismissed;
  let maxWidth;
  let obj10;
  let obj14;
  let obj15;
  let obj33;
  let obj7;
  let obj9;
  let str;
  let str2;
  let tmp13Result;
  let useReducedMotion;
  let userId;
  let wishlist;
  let wishlistId;
  ({ userId, wishlist, isDismissible } = arg0);
  let trackUserProfileWishlistAction;
  let tmp = trackUserProfileWishlistAction;
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  let obj = trackUserProfileWishlistAction(7635);
  trackUserProfileWishlistAction = obj.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  const tmp3 = closure_15();
  let obj2 = trackUserProfileWishlistAction(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    let FadeInDown;
    let FadeOutDown;
    let stiffnessResult;
    const ReduceMotion = trackUserProfileWishlistAction(dependencyMap[28]).ReduceMotion;
    const tmp = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
    const obj = { entering: FadeInDown.reduceMotion(tmp), exiting: FadeOutDown.reduceMotion(tmp), layout: stiffnessResult.reduceMotion(tmp) };
    FadeInDown = trackUserProfileWishlistAction(dependencyMap[28]).FadeInDown;
    FadeOutDown = trackUserProfileWishlistAction(dependencyMap[28]).FadeOutDown;
    const LinearTransition = trackUserProfileWishlistAction(dependencyMap[28]).LinearTransition;
    const springifyResult = LinearTransition.springify();
    const massResult = springifyResult.mass(0.8);
    const dampingResult = massResult.damping(100);
    stiffnessResult = dampingResult.stiffness(300);
    return obj;
  }, items1);
  let obj3 = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap };
  const cardWidth = useCardGridLayoutDefault(obj3).cardWidth;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const tmp7 = reactDefault(() => {
    const obj = trackUserProfileWishlistAction(dependencyMap[18]);
    return obj.v4();
  });
  const obj4 = trackUserProfileWishlistAction(12683);
  const obj5 = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: trackUserProfileWishlistAction(8238).WishlistFetchSource.USER_PROFILE };
  const items2 = obj4.useAddToWishlistGridItems(obj5).items;
  const items3 = [trackUserProfileWishlistAction];
  const callback = react.useCallback(() => {
    let items;
    let items1;
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
    items = [SKUProductLines.COLLECTIBLES];
    new Set(items);
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const tmp4 = CollectiblesActionCreators;
    const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
    const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants2.FEATURED_PAGE };
    items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    const result = openCollectiblesShopMobile(obj3);
  }, items3);
  if (0 === items2.length) {
    const obj6 = { style: tmp3.shopButtonContainer, children: closure_12(Button2, obj7) };
    obj7 = { size: "md", variant: "secondary", icon: closure_12(tmp(11620).ShopIcon, { size: "sm" }), text: intl3.string(tmp(1115).t.RSyoZu), onPress: callback };
    Button2 = tmp(5281).Button;
    intl3 = tmp(1115).intl;
    tmp13Result = closure_12(View, obj6);
  } else {
    const obj8 = { newValue: obj9, children: closure_13(View, obj10) };
    obj9 = { impressionSessionId: tmp7, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: userId, wishlistId, analyticsLocations };
    const WishlistAnalyticsProvider = tmp(12684).WishlistAnalyticsProvider;
    obj10 = { style: tmp3.container, entering: null, exiting: null, layout: null, children: items6 };
    ({ entering: obj16.entering, exiting: obj16.exiting, layout: obj16.layout } = memo);
    const obj11 = { style: tmp3.headerRow, children: items4 };
    View = tmp6(4566).View;
    const obj12 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: intl4.string(tmp(1115).t["+GB8Kt"]) };
    const Text = tmp(4832).Text;
    intl4 = tmp(1115).intl;
    items4 = [closure_12(Text, obj12), ];
    const items5 = [tmp3.dismissButton, ];
    const tmp9 = !isDismissible && tmp3.hiddenDismissButton;
    items5[1] = tmp9;
    const obj13 = { style: items5, pointerEvents: str, accessibilityElementsHidden: !isDismissible, importantForAccessibility: str2, children: closure_12(IconButton, obj14) };
    str = "none";
    if (isDismissible) {
      str = "auto";
    }
    str2 = "no-hide-descendants";
    if (isDismissible) {
      str2 = "auto";
    }
    obj14 = { size: "sm", variant: "icon-only", icon: closure_12(XSmallIcon, obj15), onPress: markAsDismissed, accessibilityLabel: intl.string(tmp(1115).t.WAI6xu) };
    IconButton = tmp(7363).IconButton;
    obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    XSmallIcon = tmp(5992).XSmallIcon;
    intl = tmp(1115).intl;
    items4[1] = closure_12(View, obj13);
    items6 = [closure_13(View, obj11), , ];
    const obj17 = { items: items2, wishlist, analyticsLocations, cardSize: cardWidth };
    items6[1] = closure_12(AddToWishlistGridDefault, obj17);
    const obj18 = { style: tmp3.shopButtonContainer, children: closure_12(Button, obj33) };
    obj33 = { size: "md", variant: "secondary", icon: closure_12(tmp(11620).ShopIcon, { size: "sm" }), text: intl2.string(tmp(1115).t.RSyoZu), onPress: callback };
    Button = tmp(5281).Button;
    intl2 = tmp(1115).intl;
    items6[2] = closure_12(View, obj18);
    tmp13Result = tmp13(WishlistAnalyticsProvider, obj8);
  }
  return tmp13Result;
}
let View = react_native.View;
let closure_7 = Constants3.TrackUserProfileWishlistActions;
({ PROFILE_SIDE_PADDING: metroImportAll, WISHLIST_SUGGESTION_CARD_GAP: c9 } = Constants);
const SKUProductLines = Constants2.SKUProductLines;
let closure_11 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, dismissButton: obj4, hiddenDismissButton: { opacity: 0 }, shopButtonContainer: obj5 };
obj2 = { marginTop: nativeDefault.space.PX_16, padding: PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, background: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj4 = { marginVertical: -nativeDefault.space.PX_10 };
obj5 = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let tmp = null;
  const obj = MobileWishlistSuggestionsExperiment;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_12(UserProfileWishlistSuggestionsGridContent, obj2);
  }
  return tmp;
};

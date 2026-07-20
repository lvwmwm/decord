// Module ID: 12003
// Function ID: 92791
// Name: UserProfileWishlistSuggestionsGridContent
// Dependencies: []
// Exports: default

// Module 12003 (UserProfileWishlistSuggestionsGridContent)
function UserProfileWishlistSuggestionsGridContent(arg0) {
  let containerWidth;
  let maxWidth;
  let userId;
  let wishlistId;
  ({ userId, wishlistId } = arg0);
  const arg1 = wishlistId;
  ({ containerWidth, maxWidth } = arg0);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = store.getWishlist(wishlistId);
    }
    return wishlist;
  });
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = store.getLastFetchedAt(wishlistId);
    }
    return lastFetchedAt;
  });
  obj = { userId, wishlist: stateFromStores };
  let tmp4 = null == wishlistId;
  const obj2 = arg1(dependencyMap[8]);
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  obj.hasFetchedWishlist = tmp4;
  const tmp3 = importDefault(dependencyMap[9]);
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
  const tmp = importDefault(dependencyMap[10])("UserProfileWishlistSuggestionsGridContent");
  const tmp2 = callback2();
  let obj = { showUserCount: null, showEndDate: "5e2f785032385a803c0dd3d91ffe95da", containerWidth, maxWidth, sidePadding: closure_5 + PX_16 + 1, gap: closure_6 };
  const analyticsLocations = importDefault(dependencyMap[12])().analyticsLocations;
  let obj1 = arg1(dependencyMap[15]);
  obj = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: arg1(dependencyMap[16]).WishlistFetchSource.USER_PROFILE };
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
    const intl = arg1(dependencyMap[19]).intl;
    obj4.children = intl.string(arg1(dependencyMap[19]).t.+GB8Kt);
    const items1 = [callback(arg1(dependencyMap[18]).Text, obj4), ];
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
    const obj6 = { st: "done", borderWidth: "construct" };
    const obj7 = { size: "sm", color: importDefault(dependencyMap[5]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj6.icon = callback(arg1(dependencyMap[21]).XSmallIcon, obj7);
    obj6.onPress = markAsDismissed;
    const intl2 = arg1(dependencyMap[19]).intl;
    obj6.accessibilityLabel = intl2.string(arg1(dependencyMap[19]).t.WAI6xu);
    obj5.children = callback(arg1(dependencyMap[20]).IconButton, obj6);
    items1[1] = callback(View, obj5);
    obj3.children = items1;
    const items2 = [closure_8(View, obj3), ];
    const obj8 = { items, wishlist, analyticsLocations, cardSize: importDefault(dependencyMap[11])(obj).cardWidth };
    items2[1] = callback(importDefault(dependencyMap[22]), obj8);
    obj2.children = items2;
    obj.children = closure_8(View, obj2);
    tmp15Result = callback(arg1(dependencyMap[17]).WishlistAnalyticsProvider, obj);
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
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ PROFILE_SIDE_PADDING: closure_5, WISHLIST_SUGGESTION_CARD_GAP: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const PX_16 = importDefault(dependencyMap[5]).space.PX_16;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_24, padding: PX_16, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[5]).radii.lg, background: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.headerRow = { marginBottom: importDefault(dependencyMap[5]).space.PX_12 };
obj.hiddenDismissButton = { opacity: 0 };
let closure_10 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_12 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let obj = arg1(dependencyMap[7]);
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(UserProfileWishlistSuggestionsGridContent, obj);
  }
  return tmp;
};

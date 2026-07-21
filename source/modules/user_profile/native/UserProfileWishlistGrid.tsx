// Module ID: 12004
// Function ID: 92771
// Name: WishlistEmptyState
// Dependencies: []
// Exports: default

// Module 12004 (WishlistEmptyState)
class WishlistEmptyState {
  constructor(arg0) {
    shouldShowMRNotice = global.shouldShowMRNotice;
    closure_0 = undefined;
    obj = closure_0(dependencyMap[20]);
    tmp = f92774(obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState"));
    obj2 = closure_0(dependencyMap[21]);
    obj3 = closure_0(dependencyMap[22]);
    str = "mobile-text-heading-primary";
    if (obj3.isThemeDark(obj2.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    obj4 = closure_0(dependencyMap[23]);
    trackUserProfileWishlistAction = obj4.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
    closure_0 = trackUserProfileWishlistAction;
    items = [];
    items[0] = trackUserProfileWishlistAction;
    obj = {};
    obj1 = { style: tmp.emptyState };
    callback = importAll.useCallback(() => {
      let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM };
      const items = [constants2.COLLECTIBLES];
      obj.productLines = new Set(items);
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      callback(closure_2[24]).hideAllActionSheets();
      const obj2 = callback(closure_2[24]);
      obj = { analyticsSource: callback(closure_2[26]).USER_PROFILE_WISHLIST };
      const items1 = [callback(closure_2[26]).USER_PROFILE_WISHLIST];
      obj.analyticsLocations = items1;
      obj.screen = constants3.FEATURED_PAGE;
      const result = trackUserProfileWishlistAction(closure_2[25]).openCollectiblesShopMobile(obj);
    }, items);
    tmp3 = jsxs;
    tmp4 = Fragment;
    obj2 = {};
    obj2.color = str;
    intl = closure_0(dependencyMap[28]).intl;
    obj2.children = intl.string(closure_0(dependencyMap[28]).t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(closure_0(dependencyMap[27]).Text, obj2);
    obj3 = { hasMaxConnections: false, isBoostOnlySubscription: false };
    obj3.style = tmp.emptyStateText;
    intl2 = closure_0(dependencyMap[28]).intl;
    obj3.children = intl2.string(closure_0(dependencyMap[28]).t./X1ny6);
    items1[1] = jsx(closure_0(dependencyMap[27]).Text, obj3);
    obj4 = { style: tmp.emptyStateCta };
    obj5 = {};
    obj5.icon = jsx(closure_0(dependencyMap[30]).PlusMediumIcon, { size: "xs" });
    intl3 = closure_0(dependencyMap[28]).intl;
    obj5.text = intl3.string(closure_0(dependencyMap[28]).t.SDUwM0);
    obj5.onPress = callback;
    obj4.children = jsx(closure_0(dependencyMap[29]).Button, obj5);
    items1[2] = jsx(View, obj4);
    obj1.children = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    if (shouldShowMRNotice) {
      tmp5 = jsxs;
      tmp6 = View;
      obj6 = {};
      items3 = [, ];
      ({ disclaimer: arr4[0], disclaimerBottom: arr4[1] } = tmp);
      obj6.style = items3;
      tmp7 = jsx;
      tmp8 = closure_0;
      tmp9 = dependencyMap;
      num = 31;
      obj7 = {};
      str2 = "sm";
      obj7.size = "sm";
      items4 = [, ];
      items4[0] = jsx(closure_0(dependencyMap[31]).CircleInformationIcon, obj7);
      tmp10 = jsx;
      obj8 = {};
      intl4 = closure_0(dependencyMap[28]).intl;
      obj8.children = intl4.string(closure_0(dependencyMap[28]).t.Wp9bEl);
      items4[1] = jsx(closure_0(dependencyMap[27]).Text, obj8);
      obj6.children = items4;
      shouldShowMRNotice = jsxs(View, obj6);
    }
    items2[1] = shouldShowMRNotice;
    obj.children = items2;
    return tmp3(tmp4, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).isCollectiblesWishlistItemRecord;
const isSKUWishlistItemRecord = arg1(dependencyMap[7]).isSKUWishlistItemRecord;
const getWishlistProductLines = arg1(dependencyMap[8]).getWishlistProductLines;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
({ TrackUserProfileWishlistActions: closure_15, UserProfileSections: closure_16 } = arg1(dependencyMap[12]));
const tmp2 = arg1(dependencyMap[12]);
({ Routes: closure_17, SKUProductLines: closure_18 } = arg1(dependencyMap[13]));
let closure_19 = arg1(dependencyMap[14]).CollectiblesMobileShopScreen;
const tmp3 = arg1(dependencyMap[13]);
({ GiftingOrigin: closure_20, PremiumSubscriptionSKUToPremiumType: closure_21 } = arg1(dependencyMap[15]));
const tmp4 = arg1(dependencyMap[15]);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = arg1(dependencyMap[16]));
let importDefaultResult = importDefault(dependencyMap[17]);
importDefaultResult = new importDefaultResult("UserProfileWishlistGrid");
const tmp5 = arg1(dependencyMap[16]);
let closure_26 = arg1(dependencyMap[18]).createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { top: "<string:3435973836>", bottom: "<string:1903247380>", left: "r", marginBottom: importDefault(dependencyMap[19]).space.PX_12 };
  obj.headerRow = obj;
  obj = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[19]).space.PX_8 };
  obj.headerButtons = obj;
  obj.gridWrapper = { @braintree/wrap-promise: "BLURPLE_19", onPress: 1 };
  obj.itemsContainer = {};
  const obj1 = { alignItems: "center", paddingTop: importDefault(dependencyMap[19]).space.PX_48 };
  const space = importDefault(dependencyMap[19]).space;
  obj1.paddingBottom = flag ? space.PX_40 : space.PX_48;
  obj1.paddingHorizontal = importDefault(dependencyMap[19]).space.PX_32;
  obj1.gap = importDefault(dependencyMap[19]).space.PX_8;
  obj.emptyState = obj1;
  obj.emptyStateText = { textAlign: "center" };
  const obj2 = {};
  const space2 = importDefault(dependencyMap[19]).space;
  obj2.marginTop = flag ? space2.PX_20 : space2.PX_24;
  obj.emptyStateCta = obj2;
  obj.disclaimer = { padding: importDefault(dependencyMap[19]).space.PX_8, gap: importDefault(dependencyMap[19]).space.PX_4, borderRadius: importDefault(dependencyMap[19]).radii.sm, borderColor: importDefault(dependencyMap[19]).colors.BORDER_SUBTLE };
  const obj3 = { padding: importDefault(dependencyMap[19]).space.PX_8, gap: importDefault(dependencyMap[19]).space.PX_4, borderRadius: importDefault(dependencyMap[19]).radii.sm, borderColor: importDefault(dependencyMap[19]).colors.BORDER_SUBTLE };
  obj.disclaimerTop = { marginBottom: importDefault(dependencyMap[19]).space.PX_16 };
  const obj4 = { marginBottom: importDefault(dependencyMap[19]).space.PX_16 };
  obj.disclaimerBottom = { marginTop: importDefault(dependencyMap[19]).space.PX_16 };
  return obj;
});
const obj = arg1(dependencyMap[18]);
const result = arg1(dependencyMap[59]).fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  let containerWidth;
  let isVisible;
  let maxWidth;
  let rowWidth;
  wishlistId = wishlistId.wishlistId;
  const arg1 = wishlistId;
  let dependencyMap;
  let closure_3;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let isSKUWishlistItemRecord;
  let getWishlistProductLines;
  let closure_12;
  let closure_13;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  const tmp = callback3();
  ({ cardWidth: closure_1, rowWidth } = importDefault(dependencyMap[32])({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    const tmp3 = obj;
  }
  let obj1 = arg1(dependencyMap[23]);
  const userProfileAnalyticsContext = obj1.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  dependencyMap = context;
  const trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  closure_3 = trackUserProfileWishlistAction;
  const analyticsLocations = importDefault(dependencyMap[33])().analyticsLocations;
  React = analyticsLocations;
  let obj2 = importDefault(dependencyMap[34]);
  const storeFront = obj2.useNativeIAPPayments().storeFront;
  View = storeFront;
  let obj3 = arg1(dependencyMap[35]);
  const items = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items, () => stateFromStores5.getWishlist(wishlistId));
  closure_6 = stateFromStores;
  let obj4 = arg1(dependencyMap[35]);
  const items1 = [closure_8];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => stateFromStores5.isFetching(wishlistId));
  let obj5 = arg1(dependencyMap[35]);
  const items2 = [closure_8];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => stateFromStores5.getError(wishlistId));
  let obj6 = arg1(dependencyMap[35]);
  const items3 = [closure_14];
  const items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj6.useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = wishlistSettings.getWishlistSettings(stateFromStores.userId, wishlistId);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (null != stateFromStores3) {
    visibility = stateFromStores3.visibility;
  }
  let tmp10 = visibility === arg1(dependencyMap[36]).WishlistVisibility.PRIVATE;
  let obj7 = arg1(dependencyMap[35]);
  const items5 = [closure_12];
  const stateFromStores4 = obj7.useStateFromStores(items5, () => memo2.getCurrentUser());
  let id;
  if (null != stateFromStores4) {
    id = stateFromStores4.id;
  }
  let userId;
  if (null != stateFromStores) {
    userId = stateFromStores.userId;
  }
  let tmp14 = id === userId;
  closure_7 = tmp14;
  let obj8 = arg1(dependencyMap[35]);
  const items6 = [closure_12];
  const items7 = [stateFromStores];
  const stateFromStores5 = obj8.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = memo2.getUser(stateFromStores.userId);
    }
    return user;
  }, items7);
  closure_8 = stateFromStores5;
  let nsfwAllowed;
  if (null != stateFromStores5) {
    nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  const intl = arg1(dependencyMap[28]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[28]).t;
  if (tmp10) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj9 = arg1(dependencyMap[37]);
  const isEligibleForSocialLayerStorefrontMobilePurchasing = obj9.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "user_profile_wishlist_grid" });
  closure_9 = isEligibleForSocialLayerStorefrontMobilePurchasing;
  const items8 = [stateFromStores, tmp14, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = React.useMemo(() => {
    let found;
    if (null != stateFromStores) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = callback(closure_2[38]);
        obj = { isWishlistOwner: closure_7, isSocialLayerStorefrontMobilePurchasingEnabled: closure_9 };
        return obj.isEligibleWishlistItemOnMobile(sku, obj);
      });
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items8);
  const items9 = [stateFromStores];
  const memo1 = React.useMemo(() => {
    let found;
    if (null != stateFromStores) {
      const items = stateFromStores.items;
      found = items.filter(isEligibleForSocialLayerStorefrontMobilePurchasing);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items9);
  isSKUWishlistItemRecord = memo1;
  let obj10 = arg1(dependencyMap[35]);
  const items10 = [closure_7];
  const items11 = [memo1, stateFromStores5];
  const stateFromStoresArray = obj10.useStateFromStoresArray(items10, () => {
    if (null == stateFromStores5) {
      let items = [];
    } else {
      const found = memo1.filter((skuId) => closure_7.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  getWishlistProductLines = stateFromStoresArray;
  const items12 = [stateFromStoresArray];
  const memo2 = React.useMemo(() => new Set(stateFromStoresArray), items12);
  closure_12 = memo2;
  const items13 = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores, tmp14];
  const memo3 = React.useMemo(() => {
    let tmp = !isEligibleForSocialLayerStorefrontMobilePurchasing;
    if (tmp) {
      let someResult;
      if (null != stateFromStores) {
        const items = stateFromStores.items;
        someResult = items.some(memo1);
      }
      if (someResult) {
        someResult = tmp14;
      }
      tmp = null != someResult && someResult;
      const tmp7 = null != someResult && someResult;
    }
    return tmp;
  }, items13);
  obj = { wishlistId, onAction: trackUserProfileWishlistAction };
  let tmp25 = null;
  const tmp17 = false === nsfwAllowed;
  const tmp2 = importDefault(dependencyMap[32])({ containerWidth, maxWidth });
  if (null != stateFromStores) {
    tmp25 = getWishlistProductLines(stateFromStores);
  }
  obj.productLines = tmp25;
  obj.isVisible = isVisible;
  importDefault(dependencyMap[39])(obj);
  const items14 = [wishlistId, trackUserProfileWishlistAction, tmp14, stateFromStores5, memo2, ];
  let country;
  const tmp24 = importDefault(dependencyMap[39]);
  if (null != storeFront) {
    country = storeFront.country;
  }
  items14[5] = country;
  closure_13 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = trackUserProfileWishlistAction(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items14);
  const items15 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items16 = [trackUserProfileWishlistAction, wishlistId];
  const callback = React.useCallback(() => {
    let obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId };
    let tmp2;
    if (null != stateFromStores) {
      tmp2 = stateFromStoresArray(stateFromStores);
    }
    obj.productLines = tmp2;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId, analyticsContext: context, analyticsLocations };
    callback(context[24]).openLazy(wishlistId(context[55])(context[54], context.paths), "EditWishlistActionSheet", obj, "stack");
  }, items15);
  const callback1 = React.useCallback(() => {
    let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId };
    const items = [constants2.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    callback(context[24]).hideAllActionSheets();
    const obj2 = callback(context[24]);
    obj = { analyticsSource: callback(context[26]).USER_PROFILE_WISHLIST };
    const items1 = [callback(context[26]).USER_PROFILE_WISHLIST];
    obj.analyticsLocations = items1;
    obj.screen = constants3.FEATURED_PAGE;
    const result = wishlistId(context[25]).openCollectiblesShopMobile(obj);
  }, items16);
  if (stateFromStores1) {
    if (null == stateFromStores) {
      return null;
    }
  }
  if (null != stateFromStores2) {
    return null;
  } else if (null == stateFromStores) {
    return null;
  } else if (0 === memo.length) {
    obj = { shouldShowMRNotice: memo3 };
    return callback(WishlistEmptyState, obj);
  } else {
    obj1 = {};
    let tmp33 = tmp14;
    if (tmp14) {
      if (!tmp10) {
        tmp10 = tmp17;
      }
      tmp33 = tmp10;
    }
    if (tmp33) {
      obj2 = {};
      const items17 = [, ];
      ({ disclaimer: arr19[0], disclaimerTop: arr19[1] } = tmp);
      obj2.style = items17;
      obj3 = { size: "sm" };
      const items18 = [callback(arg1(dependencyMap[31]).CircleInformationIcon, obj3), ];
      obj4 = { children: stringResult };
      items18[1] = callback(arg1(dependencyMap[27]).Text, obj4);
      obj2.children = items18;
      tmp33 = callback2(View, obj2);
    }
    const items19 = [tmp33, , , ];
    obj5 = { style: tmp.headerRow };
    obj6 = {};
    const intl2 = arg1(dependencyMap[28]).intl;
    obj7 = { count: memo.length };
    obj6.children = intl2.formatToPlainString(arg1(dependencyMap[28]).t.r6Y1Lg, obj7);
    const items20 = [callback(arg1(dependencyMap[27]).Text, obj6), ];
    if (tmp14) {
      obj8 = { style: tmp.headerButtons };
      obj9 = {};
      obj10 = { size: "xs" };
      obj9.icon = callback(arg1(dependencyMap[30]).PlusMediumIcon, obj10);
      const intl3 = arg1(dependencyMap[28]).intl;
      obj9.text = intl3.string(arg1(dependencyMap[28]).t.SDUwM0);
      obj9.onPress = callback1;
      const items21 = [callback(arg1(dependencyMap[29]).Button, obj9), ];
      const obj11 = {};
      const obj12 = { size: "sm", color: importDefault(dependencyMap[19]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj11.icon = callback(arg1(dependencyMap[57]).PencilIcon, obj12);
      obj11.onPress = callback;
      const intl4 = arg1(dependencyMap[28]).intl;
      obj11.accessibilityLabel = intl4.string(arg1(dependencyMap[28]).t.bt75uw);
      items21[1] = callback(arg1(dependencyMap[56]).IconButton, obj11);
      obj8.children = items21;
      tmp14 = callback2(View, obj8);
    }
    items20[1] = tmp14;
    obj5.children = items20;
    items19[1] = callback2(View, obj5);
    const obj13 = { style: tmp.gridWrapper };
    const obj14 = {};
    const items22 = [tmp.itemsContainer, tmp3];
    obj14.style = items22;
    obj14.children = memo.map((sku) => {
      const wishlistId = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = {};
        ({ sku: obj.sku, isOwned: obj.isOwned } = sku);
        obj.onPress = function onPress() {
          return callback(arg0);
        };
        obj.size = callback;
        let id;
        if (null != stateFromStores5) {
          id = stateFromStores5.id;
        }
        obj.wishlistOwnerId = id;
        tmp = closure_22(callback(context[58]), obj, sku.skuId);
        const tmp2 = closure_22;
        const tmp5 = callback(context[58]);
      }
      return tmp;
    });
    obj13.children = callback(View, obj14);
    items19[2] = callback(View, obj13);
    let tmp58 = memo3;
    if (memo3) {
      const obj15 = {};
      const items23 = [, ];
      ({ disclaimer: arr25[0], disclaimerBottom: arr25[1] } = tmp);
      obj15.style = items23;
      const obj16 = { size: "sm" };
      const items24 = [callback(arg1(dependencyMap[31]).CircleInformationIcon, obj16), ];
      const obj17 = {};
      const intl5 = arg1(dependencyMap[28]).intl;
      obj17.children = intl5.string(arg1(dependencyMap[28]).t.Wp9bEl);
      items24[1] = callback(arg1(dependencyMap[27]).Text, obj17);
      obj15.children = items24;
      tmp58 = callback2(View, obj15);
    }
    items19[3] = tmp58;
    obj1.children = items19;
    return callback2(closure_24, obj1);
  }
  const tmp29 = () => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = trackUserProfileWishlistAction(tmp);
    return function() {
      return callback(...arguments);
    };
  }();
};
export { WishlistEmptyState };

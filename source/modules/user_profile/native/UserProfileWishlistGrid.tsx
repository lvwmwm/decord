// Module ID: 12148
// Function ID: 95184
// Name: WishlistEmptyState
// Dependencies: [5, 31, 27, 6774, 9787, 8718, 8721, 8723, 8719, 1849, 4175, 6855, 8308, 653, 655, 1851, 33, 3, 4130, 689, 12149, 3842, 3976, 8310, 4098, 6773, 5482, 4126, 1212, 4543, 11815, 4086, 12150, 5462, 7433, 566, 12151, 7882, 12132, 12152, 3982, 3831, 12153, 9713, 478, 7539, 5613, 9768, 8537, 3789, 8813, 5692, 3791, 8775, 12154, 1934, 7533, 9142, 9785, 2]
// Exports: default

// Module 12148 (WishlistEmptyState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CircleInformationIcon from "CircleInformationIcon";
import { View } from "Text";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { isCollectiblesWishlistItemRecord as closure_9 } from "_createForOfIteratorHelperLoose";
import { isSKUWishlistItemRecord } from "_isNativeReflectConstruct";
import { getWishlistProductLines } from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY";
import ME from "ME";
import { CollectiblesMobileShopScreen as closure_19 } from "items";
import GuildFeatures from "GuildFeatures";
import jsxProd from "mergeLocations";
import importDefaultResult from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
const require = arg1;
class WishlistEmptyState {
  constructor(arg0) {
    shouldShowMRNotice = global.shouldShowMRNotice;
    c0 = undefined;
    obj = require("useIsMobileWishlistSuggestionsEnabled");
    tmp = f95187(obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState"));
    obj2 = require("ManaContext");
    obj3 = require("AccessibilityAnnouncer");
    str = "mobile-text-heading-primary";
    if (obj3.isThemeDark(obj2.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    obj4 = require("UserProfileAnalyticsProvider");
    trackUserProfileWishlistAction = obj4.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
    c0 = trackUserProfileWishlistAction;
    items = [];
    items[0] = trackUserProfileWishlistAction;
    obj = {};
    obj1 = { style: tmp.emptyState };
    callback = CircleInformationIcon.useCallback(() => {
      let obj = { action: outer1_15.PRESS_ADD_WISHLIST_ITEM };
      const items = [outer1_18.COLLECTIBLES];
      obj.productLines = new Set(items);
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      outer1_1(outer1_2[24]).hideAllActionSheets();
      const obj2 = outer1_1(outer1_2[24]);
      obj = { analyticsSource: outer1_1(outer1_2[26]).USER_PROFILE_WISHLIST };
      const items1 = [outer1_1(outer1_2[26]).USER_PROFILE_WISHLIST];
      obj.analyticsLocations = items1;
      obj.screen = outer1_19.FEATURED_PAGE;
      const result = trackUserProfileWishlistAction(outer1_2[25]).openCollectiblesShopMobile(obj);
    }, items);
    tmp3 = jsxs;
    tmp4 = Fragment;
    obj2 = { variant: "text-md/medium", color: null, accessibilityRole: "header" };
    obj2.color = str;
    intl = require("getSystemLocale").intl;
    obj2.children = intl.string(require("getSystemLocale").t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(require("Text").Text, obj2);
    obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary" };
    obj3.style = tmp.emptyStateText;
    intl2 = require("getSystemLocale").intl;
    obj3.children = intl2.string(require("getSystemLocale").t["/X1ny6"]);
    items1[1] = jsx(require("Text").Text, obj3);
    obj4 = { style: tmp.emptyStateCta };
    obj5 = { size: "md", variant: "secondary" };
    obj5.icon = jsx(require("PlusMediumIcon").PlusMediumIcon, { size: "xs" });
    intl3 = require("getSystemLocale").intl;
    obj5.text = intl3.string(require("getSystemLocale").t.SDUwM0);
    obj5.onPress = callback;
    obj4.children = jsx(require("Button").Button, obj5);
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
      tmp8 = c0;
      tmp9 = closure_2;
      num = 31;
      obj7 = {};
      str2 = "sm";
      obj7.size = "sm";
      items4 = [, ];
      items4[0] = jsx(require("CircleInformationIcon").CircleInformationIcon, obj7);
      tmp10 = jsx;
      obj8 = { variant: "text-xs/medium", color: "text-subtle" };
      intl4 = require("getSystemLocale").intl;
      obj8.children = intl4.string(require("getSystemLocale").t.Wp9bEl);
      items4[1] = jsx(require("Text").Text, obj8);
      obj6.children = items4;
      shouldShowMRNotice = jsxs(View, obj6);
    }
    items2[1] = shouldShowMRNotice;
    obj.children = items2;
    return tmp3(tmp4, obj);
  }
}
({ TrackUserProfileWishlistActions: closure_15, UserProfileSections: closure_16 } = USER_PROFILE_TOOLTIP_DELAY);
({ Routes: closure_17, SKUProductLines: closure_18 } = ME);
({ GiftingOrigin: closure_20, PremiumSubscriptionSKUToPremiumType: closure_21 } = GuildFeatures);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
importDefaultResult = new importDefaultResult("UserProfileWishlistGrid");
let closure_26 = _createForOfIteratorHelperLoose.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: importDefault(689).space.PX_12 };
  obj.headerRow = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_8 };
  obj.headerButtons = obj;
  obj.gridWrapper = { width: "100%", alignItems: "center" };
  obj.itemsContainer = { flexDirection: "row", flexWrap: "wrap", gap: 16, justifyContent: "flex-start" };
  const obj1 = { alignItems: "center", paddingTop: importDefault(689).space.PX_48 };
  const space = importDefault(689).space;
  obj1.paddingBottom = flag ? space.PX_40 : space.PX_48;
  obj1.paddingHorizontal = importDefault(689).space.PX_32;
  obj1.gap = importDefault(689).space.PX_8;
  obj.emptyState = obj1;
  obj.emptyStateText = { textAlign: "center" };
  const obj2 = {};
  const space2 = importDefault(689).space;
  obj2.marginTop = flag ? space2.PX_20 : space2.PX_24;
  obj.emptyStateCta = obj2;
  const obj3 = { padding: importDefault(689).space.PX_8, gap: importDefault(689).space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: importDefault(689).radii.sm, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.disclaimer = obj3;
  obj.disclaimerTop = { marginBottom: importDefault(689).space.PX_16 };
  const obj4 = { marginBottom: importDefault(689).space.PX_16 };
  obj.disclaimerBottom = { marginTop: importDefault(689).space.PX_16 };
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  let containerWidth;
  let importDefault;
  let isVisible;
  let maxWidth;
  let rowWidth;
  wishlistId = wishlistId.wishlistId;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let storeFront;
  let stateFromStores;
  let c7;
  let stateFromStores5;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  let closure_13;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  let tmp = callback3();
  ({ cardWidth: importDefault, rowWidth } = importDefault(context[32])({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    const tmp3 = obj;
  }
  let obj1 = wishlistId(context[23]);
  const userProfileAnalyticsContext = obj1.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = importDefault(context[33])().analyticsLocations;
  let obj2 = importDefault(context[34]);
  storeFront = obj2.useNativeIAPPayments().storeFront;
  let obj3 = wishlistId(context[35]);
  let items = [stateFromStores5];
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores5.getWishlist(wishlistId));
  let obj4 = wishlistId(context[35]);
  let items1 = [stateFromStores5];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => stateFromStores5.isFetching(wishlistId));
  let obj5 = wishlistId(context[35]);
  const items2 = [stateFromStores5];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => stateFromStores5.getError(wishlistId));
  let obj6 = wishlistId(context[35]);
  const items3 = [closure_14];
  const items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj6.useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = outer1_14.getWishlistSettings(stateFromStores.userId, wishlistId);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (null != stateFromStores3) {
    visibility = stateFromStores3.visibility;
  }
  let tmp10 = visibility === wishlistId(context[36]).WishlistVisibility.PRIVATE;
  let obj7 = wishlistId(context[35]);
  const items5 = [memo2];
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
  c7 = tmp14;
  let obj8 = wishlistId(context[35]);
  const items6 = [memo2];
  const items7 = [stateFromStores];
  stateFromStores5 = obj8.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = memo2.getUser(stateFromStores.userId);
    }
    return user;
  }, items7);
  let nsfwAllowed;
  if (null != stateFromStores5) {
    nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  const intl = wishlistId(context[28]).intl;
  const string = intl.string;
  const t = wishlistId(context[28]).t;
  if (tmp10) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj9 = wishlistId(context[37]);
  isEligibleForSocialLayerStorefrontMobilePurchasing = obj9.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "user_profile_wishlist_grid" });
  const items8 = [stateFromStores, tmp14, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (null != stateFromStores) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = wishlistId(context[38]);
        obj = { isWishlistOwner: outer1_7, isSocialLayerStorefrontMobilePurchasingEnabled: outer1_9 };
        return obj.isEligibleWishlistItemOnMobile(sku, obj);
      });
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items8);
  const items9 = [stateFromStores];
  memo1 = analyticsLocations.useMemo(() => {
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
  let obj10 = wishlistId(context[35]);
  const items10 = [c7];
  const items11 = [memo1, stateFromStores5];
  stateFromStoresArray = obj10.useStateFromStoresArray(items10, () => {
    if (null == stateFromStores5) {
      let items = [];
    } else {
      const found = memo1.filter((skuId) => c7.hasSentGift(skuId.skuId, outer1_8.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => new Set(stateFromStoresArray), items12);
  const items13 = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores, tmp14];
  const memo3 = analyticsLocations.useMemo(() => {
    let tmp = !isEligibleForSocialLayerStorefrontMobilePurchasing;
    if (tmp) {
      let someResult;
      if (null != stateFromStores) {
        const items = stateFromStores.items;
        someResult = items.some(memo1);
      }
      if (someResult) {
        someResult = c7;
      }
      tmp = null != someResult && someResult;
      const tmp7 = null != someResult && someResult;
    }
    return tmp;
  }, items13);
  obj = { wishlistId, onAction: trackUserProfileWishlistAction };
  let tmp25 = null;
  const tmp17 = false === nsfwAllowed;
  let tmp2 = importDefault(context[32])({ containerWidth, maxWidth });
  if (null != stateFromStores) {
    tmp25 = stateFromStoresArray(stateFromStores);
  }
  obj.productLines = tmp25;
  obj.isVisible = isVisible;
  importDefault(context[39])(obj);
  const items14 = [wishlistId, trackUserProfileWishlistAction, tmp14, stateFromStores5, memo2, ];
  let country;
  const tmp24 = importDefault(context[39]);
  if (null != storeFront) {
    country = storeFront.country;
  }
  items14[5] = country;
  closure_13 = analyticsLocations.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = trackUserProfileWishlistAction(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items14);
  const items15 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items16 = [trackUserProfileWishlistAction, wishlistId];
  const callback = analyticsLocations.useCallback(() => {
    let obj = { action: outer1_15.PRESS_EDIT_WISHLIST, wishlistId };
    let tmp2;
    if (null != stateFromStores) {
      tmp2 = stateFromStoresArray(stateFromStores);
    }
    obj.productLines = tmp2;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId, analyticsContext: context, analyticsLocations };
    outer1_1(context[24]).openLazy(wishlistId(context[55])(context[54], context.paths), "EditWishlistActionSheet", obj, "stack");
  }, items15);
  const callback1 = analyticsLocations.useCallback(() => {
    let obj = { action: outer1_15.PRESS_ADD_WISHLIST_ITEM, wishlistId };
    const items = [outer1_18.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    outer1_1(context[24]).hideAllActionSheets();
    const obj2 = outer1_1(context[24]);
    obj = { analyticsSource: outer1_1(context[26]).USER_PROFILE_WISHLIST };
    const items1 = [outer1_1(context[26]).USER_PROFILE_WISHLIST];
    obj.analyticsLocations = items1;
    obj.screen = outer1_19.FEATURED_PAGE;
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
      const items18 = [callback(wishlistId(context[31]).CircleInformationIcon, obj3), ];
      obj4 = { variant: "text-xs/medium", color: "text-subtle", children: stringResult };
      items18[1] = callback(wishlistId(context[27]).Text, obj4);
      obj2.children = items18;
      tmp33 = callback2(storeFront, obj2);
    }
    const items19 = [tmp33, , , ];
    obj5 = { style: tmp.headerRow };
    obj6 = { variant: "text-sm/semibold", color: "text-muted" };
    const intl2 = wishlistId(context[28]).intl;
    obj7 = { count: memo.length };
    obj6.children = intl2.formatToPlainString(wishlistId(context[28]).t.r6Y1Lg, obj7);
    const items20 = [callback(wishlistId(context[27]).Text, obj6), ];
    if (tmp14) {
      obj8 = { style: tmp.headerButtons };
      obj9 = { size: "sm", variant: "secondary" };
      obj10 = { size: "xs" };
      obj9.icon = callback(wishlistId(context[30]).PlusMediumIcon, obj10);
      const intl3 = wishlistId(context[28]).intl;
      obj9.text = intl3.string(wishlistId(context[28]).t.SDUwM0);
      obj9.onPress = callback1;
      const items21 = [callback(wishlistId(context[29]).Button, obj9), ];
      const obj11 = { size: "sm", variant: "secondary" };
      const obj12 = { size: "sm", color: importDefault(context[19]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj11.icon = callback(wishlistId(context[57]).PencilIcon, obj12);
      obj11.onPress = callback;
      const intl4 = wishlistId(context[28]).intl;
      obj11.accessibilityLabel = intl4.string(wishlistId(context[28]).t.bt75uw);
      items21[1] = callback(wishlistId(context[56]).IconButton, obj11);
      obj8.children = items21;
      tmp14 = callback2(storeFront, obj8);
    }
    items20[1] = tmp14;
    obj5.children = items20;
    items19[1] = callback2(storeFront, obj5);
    const obj13 = { style: tmp.gridWrapper };
    const obj14 = {};
    const items22 = [tmp.itemsContainer, tmp3];
    obj14.style = items22;
    obj14.children = memo.map((sku) => {
      let closure_0 = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = {};
        ({ sku: obj.sku, isOwned: obj.isOwned } = sku);
        obj.onPress = function onPress() {
          return outer1_13(closure_0);
        };
        obj.size = closure_1;
        let id;
        if (null != stateFromStores5) {
          id = stateFromStores5.id;
        }
        obj.wishlistOwnerId = id;
        tmp = outer1_22(outer1_1(context[58]), obj, sku.skuId);
        const tmp2 = outer1_22;
        const tmp5 = outer1_1(context[58]);
      }
      return tmp;
    });
    obj13.children = callback(storeFront, obj14);
    items19[2] = callback(storeFront, obj13);
    let tmp58 = memo3;
    if (memo3) {
      const obj15 = {};
      const items23 = [, ];
      ({ disclaimer: arr25[0], disclaimerBottom: arr25[1] } = tmp);
      obj15.style = items23;
      const obj16 = { size: "sm" };
      const items24 = [callback(wishlistId(context[31]).CircleInformationIcon, obj16), ];
      const obj17 = { variant: "text-xs/medium", color: "text-subtle" };
      const intl5 = wishlistId(context[28]).intl;
      obj17.children = intl5.string(wishlistId(context[28]).t.Wp9bEl);
      items24[1] = callback(wishlistId(context[27]).Text, obj17);
      obj15.children = items24;
      tmp58 = callback2(storeFront, obj15);
    }
    items19[3] = tmp58;
    obj1.children = items19;
    return callback2(closure_24, obj1);
  }
  const tmp29 = (() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = trackUserProfileWishlistAction(tmp);
    return function() {
      return callback(...arguments);
    };
  })();
};
export { WishlistEmptyState };

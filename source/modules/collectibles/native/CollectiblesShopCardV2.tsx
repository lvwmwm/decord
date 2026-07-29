// Module ID: 8660
// Function ID: 8661
// Name: CollectiblesShopCardInternalV2
// Dependencies: [19, 17, 1302, 678, 21, 4189, 712, 8661, 5809, 8662, 8664, 8665, 8667, 1236, 3890, 5515, 8697, 8699, 8700, 589, 4035, 4717, 5810, 1901, 6627, 4185, 7967, 8702, 8704, 8705, 8707, 8712, 8715, 8663, 4157, 8731, 11915, 11916, 3835, 8710, 8761, 11917, 11919, 514, 2]

// Module 8660 (CollectiblesShopCardInternalV2)
import importAllResult from "initialize";
import get_ActivityIndicator from "useWishlistButtonState";
import handleThemeChange from "handleThemeChange";
import items from "items";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";

let PixelRatio;
let c4;
let c9;
let closure_6;
let error;
let metroImportAll;
let require = arg1;
function CollectiblesShopCardInternalV2(hidePrice) {
  let cardStyle;
  let cardWidth;
  let collectibleProductState;
  let disableBundleStaticBackground;
  let handleToggle;
  let hideWishlistButton;
  let isBusy;
  let isDisabled;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let product;
  let require;
  let solidBackground;
  let unpublishedAt;
  ({ product, onPress: require, unpublishedAt, collectibleProductState, isDisabled } = hidePrice);
  ({ solidBackground, preferVCPrice } = hidePrice);
  if (isDisabled === undefined) {
    isDisabled = false;
  }
  ({ cardWidth, hideWishlistButton, cardStyle } = hidePrice);
  if (hideWishlistButton === undefined) {
    hideWishlistButton = false;
  }
  let flag = hidePrice.hidePrice;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = hidePrice.isShopCardImpressionEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  let c4;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  let callback;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = hidePrice);
  const tmp = callback2();
  let obj = require(shouldShowWishlistNUXActionSheet[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = require(shouldShowWishlistNUXActionSheet[8]);
  selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = require(shouldShowWishlistNUXActionSheet[9]);
  const trackShopCardImpression = obj2.useTrackShopCardImpression(product, selectedProduct, flag2);
  if (null != cardWidth) {
    obj = { width: null };
    obj[0] = cardWidth;
  } else {
    obj = { width: 150 };
  }
  let tmp2Result = tmp2(tmp3[10]);
  const currentUser = tmp2Result.useCurrentUser();
  tmp2Result = tmp2(tmp3[11]);
  const result = tmp2Result.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp10 = selectedProduct(shouldShowWishlistNUXActionSheet[12])();
  shouldShowWishlistNUXActionSheet = tmp10.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp10.showWishlistNUXActionSheet;
  let obj7 = showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  callback = showWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[13]).intl;
  let stringResult = intl.string(require(shouldShowWishlistNUXActionSheet[13]).t.F8FvUy);
  c4 = stringResult;
  const items1 = [stringResult];
  const callback1 = showWishlistNUXActionSheet.useCallback(() => {
    let obj = selectedProduct(shouldShowWishlistNUXActionSheet[14]);
    obj = { key: "WISHLIST_ERROR", content: c4 };
    obj.open(obj);
  }, items1);
  trackShopCardClick = require(shouldShowWishlistNUXActionSheet[16]).useTrackShopCardClick({ product, analyticsLocations: selectedProduct(tmp3[15])().analyticsLocations });
  const tmp2Result1 = require(shouldShowWishlistNUXActionSheet[16]);
  obj1 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const wishlistButtonState = require(shouldShowWishlistNUXActionSheet[17]).useWishlistButtonState(obj1);
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp16 = "purchased" === collectibleProductState;
  let tmp17 = tmp16;
  if (!tmp16) {
    tmp17 = hideWishlistButton;
  }
  let tmp18 = !tmp17;
  let tmp20 = tmp18;
  if (!tmp17) {
    tmp20 = !tmp19;
  }
  if (tmp20) {
    tmp20 = !isBusy;
  }
  callback = tmp20;
  const items2 = [tmp20, isWishlisted];
  const items3 = [handleToggle];
  const memo = obj7.useMemo(() => {
    if (c8) {
      const intl = outer1_0(shouldShowWishlistNUXActionSheet[13]).intl;
      const string = intl.string;
      let t = outer1_0(shouldShowWishlistNUXActionSheet[13]).t;
      if (isWishlisted) {
        let stringResult = string(t.yr9TTf);
      } else {
        stringResult = string(t["8DkMEQ"]);
      }
      t = { name: "toggleWishlist", label: null };
      t[1] = stringResult;
      const items = [t];
    }
  }, items2);
  callback2 = obj7.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const tmp2Result2 = require(shouldShowWishlistNUXActionSheet[17]);
  const isProfileFramesEarlyAccessPhase = require(shouldShowWishlistNUXActionSheet[18]).useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardV2");
  const tmp2Result3 = require(shouldShowWishlistNUXActionSheet[18]);
  const items4 = [trackShopCardClick];
  let stateFromStores = require(shouldShowWishlistNUXActionSheet[19]).useStateFromStores(items4, () => callback(shouldShowWishlistNUXActionSheet[20]).isThemeDark(trackShopCardClick.theme));
  obj2 = {
    ref: trackShopCardImpression,
    style: items5,
    onPress() {
      trackShopCardClick(handleToggle.OPEN_DETAILS);
      if (callback != null) {
        callback();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2,
    children: null
  };
  items5 = [tmp.card, obj, cardStyle];
  const tmp2Result4 = require(shouldShowWishlistNUXActionSheet[19]);
  const badgeOverride = product.badgeOverride;
  const result1 = require(shouldShowWishlistNUXActionSheet[22]).shouldShowLimitedTimeBadge(unpublishedAt);
  const tmp2Result5 = require(shouldShowWishlistNUXActionSheet[22]);
  const productType = require(shouldShowWishlistNUXActionSheet[8]).getProductType(product);
  const tmp2Result6 = require(shouldShowWishlistNUXActionSheet[8]);
  if (product.hideBadge) {
    if (null != null) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.topRowOverlay;
      const items6 = [null, ];
      if (!tmp17) {
        const obj4 = { style: null, isWishlisted: null, onPress: null, busy: null, disabled: null, accessibilityHidden: true, onTrackPress: null };
        obj4[0] = tmp.wishlistButton;
        obj4[1] = isWishlisted;
        obj4[2] = handleToggle;
        obj4[3] = isBusy;
        obj4[4] = tmp19;
        obj4[6] = trackShopCardClick;
        tmp18 = callback(tmp2(tmp3[30]).WishlistButtonBase, obj4);
      }
      items6[1] = tmp18;
      obj3[1] = items6;
      let tmp25Result = tmp25(c4, obj3);
      const tmp40 = c4;
    } else {
      tmp25Result = null;
    }
    const items7 = [tmp25Result, , ];
    const obj5 = { solidBackground: null, product: null, isPurchased: null, isDisabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null, cardWidth: null };
    obj5[0] = solidBackground;
    obj5[1] = product;
    if (!tmp16) {
      tmp16 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj5[2] = tmp16;
    obj5[3] = isDisabled;
    obj5[4] = disableBundleStaticBackground;
    obj5[5] = muteBundleStaticBackground;
    obj5[6] = cardWidth;
    items7[1] = callback(tmp9(tmp3[31]), obj5);
    const obj6 = { product: null, collectibleProductState: null, preferVCPrice: null, isDisabled: null, hidePrice: null };
    obj6[0] = product;
    obj6[1] = collectibleProductState;
    obj6[2] = preferVCPrice;
    obj6[3] = isDisabled;
    obj6[4] = flag;
    items7[2] = callback(tmp9(tmp3[32]), obj6);
    obj2[7] = items7;
    return tmp25(tmp2(tmp3[21]).PressableOpacity, obj2);
  } else if (tmp28) {
    const items8 = [tmp.badgePill, ];
    obj7 = { style: null, accessibilityLabel: null, children: null };
    items8[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj7[0] = items8;
    const intl4 = tmp2(tmp3[13]).intl;
    obj7[1] = intl4.string(tmp2(tmp3[13]).t["1m6qcO"]);
    let str3 = "white";
    if (stateFromStores) {
      str3 = "black";
    }
    const obj8 = { size: "xs", color: null };
    obj8[1] = str3;
    stateFromStores = tmp36(tmp2(tmp3[24]).NitroWheelIcon, obj8);
    obj7[2] = stateFromStores;
    let tmp34Result = tmp36(c4, obj7);
    const tmp37 = c4;
  } else if (null != badgeOverride) {
    const items9 = [tmp.badgePill, ];
    const obj9 = { style: null, children: null };
    items9[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj9[0] = items9;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj10 = { variant: "text-xs/bold", color: null, allowFontScaling: false, style: null, lineClamp: 1, children: null };
    obj10[1] = str2;
    obj10[3] = tmp.badgeOverrideText;
    obj10[5] = badgeOverride;
    obj9[1] = callback(tmp2(tmp3[25]).Text, obj10);
    tmp34Result = tmp34(c4, obj9);
    const tmp35 = c4;
  } else {
    if (tmp2Result7.isDynamicProduct(selectedProduct)) {
      const obj11 = { icon: null, accessibilityLabel: null, isDark: null };
      obj11[0] = tmp2(tmp3[27]).DiceIcon;
      const intl3 = tmp2(tmp3[13]).intl;
      obj11[1] = intl3.string(tmp2(tmp3[13]).t["+drfVi"]);
      obj11[2] = stateFromStores;
      tmp34Result = callback(tmp2(tmp3[26]).IconBadgePill, obj11);
    } else if (result1) {
      const obj12 = { unpublishedAt: null, style: null };
      obj12[0] = unpublishedAt;
      obj12[1] = tmp.badge;
      tmp34Result = callback(tmp9(tmp3[28]), obj12);
    } else if ("nitroClaim" === collectibleProductState) {
      tmp34Result = callback(tmp2(tmp3[24]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
    } else {
      tmp34Result = null;
      if (tmp2Result8.isOrbsExclusiveProduct(selectedProduct)) {
        const obj13 = { icon: null, accessibilityLabel: null, isDark: null };
        obj13[0] = tmp2(tmp3[29]).OrbsIcon;
        const intl2 = tmp2(tmp3[13]).intl;
        obj13[1] = intl2.string(tmp2(tmp3[13]).t["0TmQRG"]);
        obj13[2] = stateFromStores;
        tmp34Result = callback(tmp2(tmp3[26]).IconBadgePill, obj13);
      }
      tmp2Result8 = tmp2(tmp3[8]);
    }
    tmp2Result7 = tmp2(tmp3[8]);
  }
}
function CollectiblesShopCardV2Inner(product) {
  let cardStyle;
  let cardWidth;
  let disableBundleStaticBackground;
  let hidePrice;
  let hideWishlistButton;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let solidBackground;
  let unpublishedAt;
  product = product.product;
  const require = product;
  let onPress = product.onPress;
  let defaultVariantIndex;
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  let isPurchased;
  let isPartiallyOwnedBundle;
  let obj;
  let result1;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  obj = require(analyticsLocations[7]);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const selectedProduct = require(analyticsLocations[8]).getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[15])().analyticsLocations;
  const obj2 = require(analyticsLocations[8]);
  const tmp = analyticsLocations;
  const tmp4 = defaultVariantIndex;
  collectiblesAnalyticsContext = require(analyticsLocations[33]).useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let obj = defaultVariantIndex(analyticsLocations[34]);
    obj.hideActionSheet();
    obj = { product: closure_0, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: null };
    obj[3] = collectiblesAnalyticsContext;
    const result = product(analyticsLocations[35]).openProductDetailsActionSheet(obj);
  }, items);
  const obj3 = require(analyticsLocations[33]);
  const obj4 = collectiblesAnalyticsContext;
  const isShopCardImpressionMobileEnabled = require(analyticsLocations[36]).useIsShopCardImpressionMobileEnabled("CollectiblesShopCardV2");
  const obj5 = require(analyticsLocations[36]);
  const obj6 = require(analyticsLocations[37]);
  const currentUser = require(analyticsLocations[10]).useCurrentUser();
  const obj7 = require(analyticsLocations[10]);
  const canUseCollectiblesResult = defaultVariantIndex(analyticsLocations[38]).canUseCollectibles(currentUser);
  const obj8 = defaultVariantIndex(analyticsLocations[38]);
  const productPurchaseState = require(analyticsLocations[39]).useProductPurchaseState(selectedProduct);
  isPurchased = productPurchaseState.isPurchased;
  isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj9 = require(analyticsLocations[39]);
  const obj10 = require(analyticsLocations[40]);
  const oneDayFractionalNitroEnabled = require(analyticsLocations[41]).useOneDayFractionalNitroEnabled("product_card");
  const obj11 = require(analyticsLocations[41]);
  let result = require(analyticsLocations[22]).isPremiumCollectiblesProduct(selectedProduct);
  const obj12 = require(analyticsLocations[22]);
  result1 = require(analyticsLocations[22]).isFreeCollectiblesProduct(selectedProduct);
  let tmp14 = result;
  if (result) {
    tmp14 = !canUseCollectiblesResult;
  }
  if (tmp14) {
    tmp14 = !result1;
  }
  obj = tmp14;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    result1 = result;
  }
  const items1 = [result1, isPartiallyOwnedBundle, isPurchased, tmp14];
  const memo = obj4.useMemo(() => {
    if (isPurchased === true) {
      return "purchased";
    } else if (isPartiallyOwnedBundle === true) {
      return "partiallyOwnedBundle";
    } else if (c6 === true) {
      return "nitroUpsell";
    } else if (result1 === true) {
      return "nitroClaim";
    } else {
      return null;
    }
  }, items1);
  if (product.skuId === obj.FRACTIONAL_PREMIUM_1_DAY) {
    if (!oneDayFractionalNitroEnabled) {
      return null;
    }
  }
  obj = { product, onPress: null, collectibleProductState: null, unpublishedAt: null, solidBackground: null, preferVCPrice: null, isDisabled: null, cardWidth: null, cardStyle: null, hideWishlistButton: null, hidePrice: null, isShopCardImpressionEnabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
  if (onPress == null) {
    onPress = callback;
  }
  obj[1] = onPress;
  obj[2] = memo;
  obj[3] = unpublishedAt;
  obj[4] = solidBackground;
  obj[5] = preferVCPrice;
  obj[6] = obj10.useProductDisableState(selectedProduct.skuId).isDisabled;
  obj[7] = cardWidth;
  obj[8] = cardStyle;
  obj[9] = hideWishlistButton;
  obj[10] = hidePrice;
  obj[11] = isShopCardImpressionMobileEnabled;
  obj[12] = disableBundleStaticBackground;
  obj[13] = muteBundleStaticBackground;
  let tmp17Result = tmp17(CollectiblesShopCardInternalV2, obj);
  if (!isShopCardImpressionMobileEnabled) {
    obj = { onChange: null, resetKey: null, children: null };
    obj[0] = obj6.useTrackProductCardImpression(product.skuId).handleCardVisibilityChange;
    obj[1] = product.skuId;
    obj[2] = tmp17Result;
    tmp17Result = tmp17(tmp4(tmp[42]), obj);
  }
  return tmp17Result;
}
let c3 = importAllResult;
({ PixelRatio, View: c4 } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_6, ShopCtaEnum: error } = items);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let obj = { card: null, topRowOverlay: null, badge: null, badgePill: null, badgeOverrideText: null, badgePillDarkMode: null, badgePillLightMode: null, wishlistButton: null };
obj = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
obj[0] = obj;
obj[1] = { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" };
obj[2] = { flexShrink: 1 };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_4, paddingVertical: 1.5, borderRadius: require("Themes").radii.round, flexShrink: 1 };
obj[3] = createCacheKey;
obj[4] = { textTransform: "uppercase" };
obj[5] = { backgroundColor: require("Themes").colors.WHITE };
let obj2 = { backgroundColor: require("Themes").colors.WHITE };
obj[6] = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
obj[7] = { marginLeft: "auto", flexShrink: 0 };
let closure_10 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
const memoResult = importAllResult.memo(function CollectiblesShopCardV2(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = importAllResult.useMemo(() => {
      const obj = { cardId: null };
      obj[0] = callback(table[43]).v4();
      return obj;
    }, items);
    let obj = { newValue: null, children: null };
    obj[0] = memo;
    obj = {};
    const merged1 = Object.assign(merged);
    obj[1] = callback(CollectiblesShopCardV2Inner, obj);
    return callback(require(8663) /* context */.CollectiblesAnalyticsProvider, obj);
  }
});
let result = require("handleThemeChange").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;

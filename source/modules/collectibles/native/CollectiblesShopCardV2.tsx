// Module ID: 8704
// Function ID: 68777
// Name: CollectiblesShopCardInternalV2
// Dependencies: [31, 27, 1278, 655, 33, 4130, 689, 8705, 6785, 8706, 8708, 8709, 8711, 1212, 3831, 5462, 8741, 8743, 8744, 566, 3976, 4660, 6786, 1876, 7486, 4126, 7958, 8746, 8748, 8749, 8751, 8756, 8759, 8707, 4098, 8775, 11871, 11872, 3776, 8754, 8805, 11873, 11875, 491, 2]

// Module 8704 (CollectiblesShopCardInternalV2)
import importAllResult from "PurchasedAssetOverlay";
import get_ActivityIndicator from "DiceIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import jsxProd from "useCollectiblesAnalyticsContext";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let PixelRatio;
let closure_4;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
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
    obj = { width: cardWidth };
  } else {
    obj = { width: 150 };
  }
  let obj5 = require(shouldShowWishlistNUXActionSheet[10]);
  const currentUser = obj5.useCurrentUser();
  let obj6 = require(shouldShowWishlistNUXActionSheet[11]);
  const result = obj6.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp7 = selectedProduct(shouldShowWishlistNUXActionSheet[12])();
  shouldShowWishlistNUXActionSheet = tmp7.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp7.showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  let num2 = 13;
  callback = showWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = require(shouldShowWishlistNUXActionSheet[13]).intl;
  let stringResult = intl.string(require(shouldShowWishlistNUXActionSheet[13]).t.F8FvUy);
  c4 = stringResult;
  const items1 = [stringResult];
  const callback1 = showWishlistNUXActionSheet.useCallback(() => {
    let obj = selectedProduct(shouldShowWishlistNUXActionSheet[14]);
    obj = { key: "WISHLIST_ERROR", content: c4 };
    obj.open(obj);
  }, items1);
  let obj7 = require(shouldShowWishlistNUXActionSheet[16]);
  trackShopCardClick = obj7.useTrackShopCardClick({ product, analyticsLocations: selectedProduct(shouldShowWishlistNUXActionSheet[15])().analyticsLocations });
  let obj8 = require(shouldShowWishlistNUXActionSheet[17]);
  obj1 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const wishlistButtonState = obj8.useWishlistButtonState(obj1);
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp13 = "purchased" === collectibleProductState;
  let tmp14 = tmp13;
  if (!tmp13) {
    tmp14 = hideWishlistButton;
  }
  let tmp15 = !tmp14;
  let tmp17 = tmp15;
  if (tmp15) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = !isBusy;
  }
  callback = tmp17;
  const items2 = [tmp17, isWishlisted];
  const items3 = [handleToggle];
  const memo = showWishlistNUXActionSheet.useMemo(() => {
    if (c8) {
      const obj = { name: "toggleWishlist" };
      const intl = outer1_0(shouldShowWishlistNUXActionSheet[13]).intl;
      const string = intl.string;
      let yr9TTf = outer1_0(shouldShowWishlistNUXActionSheet[13]).t;
      if (isWishlisted) {
        yr9TTf = yr9TTf.yr9TTf;
        let stringResult = string(yr9TTf);
      } else {
        stringResult = string(yr9TTf["8DkMEQ"]);
      }
      obj.label = stringResult;
      const items = [obj];
    }
  }, items2);
  callback2 = showWishlistNUXActionSheet.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  let obj10 = require(shouldShowWishlistNUXActionSheet[18]);
  const isProfileFramesEarlyAccessPhase = obj10.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardV2");
  let obj11 = require(shouldShowWishlistNUXActionSheet[19]);
  const items4 = [trackShopCardClick];
  const stateFromStores = obj11.useStateFromStores(items4, () => outer1_0(shouldShowWishlistNUXActionSheet[20]).isThemeDark(trackShopCardClick.theme));
  obj2 = {
    ref: trackShopCardImpression,
    style: items5,
    onPress() {
      trackShopCardClick(handleToggle.OPEN_DETAILS);
      if (null != callback) {
        callback();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2
  };
  items5 = [tmp.card, obj, cardStyle];
  let obj13 = require(shouldShowWishlistNUXActionSheet[22]);
  const badgeOverride = product.badgeOverride;
  const result1 = obj13.shouldShowLimitedTimeBadge(unpublishedAt);
  let obj14 = require(shouldShowWishlistNUXActionSheet[8]);
  const productType = obj14.getProductType(product);
  if (product.hideBadge) {
    if (null != null) {
      const obj3 = { style: tmp.topRowOverlay };
      const items6 = [null, ];
      if (tmp15) {
        const obj4 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: tmp16, accessibilityHidden: true, onTrackPress: trackShopCardClick };
        tmp15 = callback(require(shouldShowWishlistNUXActionSheet[30]).WishlistButtonBase, obj4);
      }
      items6[1] = tmp15;
      obj3.children = items6;
      let tmp51Result = closure_9(c4, obj3);
      const tmp51 = closure_9;
      const tmp52 = c4;
    } else {
      tmp51Result = null;
    }
    const items7 = [tmp51Result, , ];
    obj5 = { solidBackground, product };
    if (!tmp13) {
      tmp13 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj5.isPurchased = tmp13;
    obj5.isDisabled = isDisabled;
    obj5.disableBundleStaticBackground = disableBundleStaticBackground;
    obj5.muteBundleStaticBackground = muteBundleStaticBackground;
    obj5.cardWidth = cardWidth;
    items7[1] = callback(selectedProduct(shouldShowWishlistNUXActionSheet[31]), obj5);
    obj6 = { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag };
    items7[2] = callback(selectedProduct(shouldShowWishlistNUXActionSheet[32]), obj6);
    obj2.children = items7;
    return closure_9(require(shouldShowWishlistNUXActionSheet[21]).PressableOpacity, obj2);
  } else if (tmp25) {
    obj7 = {};
    const items8 = [tmp.badgePill, stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode];
    obj7.style = items8;
    const intl4 = require(shouldShowWishlistNUXActionSheet[num2]).intl;
    obj7.accessibilityLabel = intl4.string(require(shouldShowWishlistNUXActionSheet[num2]).t["1m6qcO"]);
    obj8 = { size: "xs" };
    let str5 = "white";
    if (stateFromStores) {
      str5 = "black";
    }
    obj8.color = str5;
    num2 = callback(require(shouldShowWishlistNUXActionSheet[24]).NitroWheelIcon, obj8);
    obj7.children = num2;
    let tmp39Result = callback(c4, obj7);
    const tmp44 = callback;
    const tmp45 = c4;
    const tmp48 = callback;
  } else if (null != badgeOverride) {
    const obj9 = {};
    const items9 = [tmp.badgePill, stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode];
    obj9.style = items9;
    obj10 = { variant: "text-xs/bold", color: null, allowFontScaling: false, style: null, lineClamp: 1 };
    let str3 = "text-overlay-light";
    if (stateFromStores) {
      str3 = "text-overlay-dark";
    }
    obj10.color = str3;
    obj10.style = tmp.badgeOverrideText;
    obj10.children = badgeOverride;
    obj9.children = callback(require(shouldShowWishlistNUXActionSheet[25]).Text, obj10);
    tmp39Result = callback(c4, obj9);
    const tmp39 = callback;
    const tmp40 = c4;
    const tmp41 = callback;
  } else {
    if (obj28.isDynamicProduct(selectedProduct)) {
      obj11 = { icon: require(shouldShowWishlistNUXActionSheet[27]).DiceIcon };
      const intl3 = require(shouldShowWishlistNUXActionSheet[num2]).intl;
      obj11.accessibilityLabel = intl3.string(require(shouldShowWishlistNUXActionSheet[num2]).t["+drfVi"]);
      obj11.isDark = stateFromStores;
      tmp39Result = callback(require(shouldShowWishlistNUXActionSheet[26]).IconBadgePill, obj11);
    } else if (result1) {
      const obj12 = { unpublishedAt, style: tmp.badge };
      tmp39Result = callback(selectedProduct(shouldShowWishlistNUXActionSheet[28]), obj12);
    } else if ("nitroClaim" === collectibleProductState) {
      obj13 = { color: "mobile-text-heading-primary" };
      tmp39Result = callback(require(shouldShowWishlistNUXActionSheet[24]).NitroWheelIcon, obj13);
    } else {
      tmp39Result = null;
      if (obj29.isOrbsExclusiveProduct(selectedProduct)) {
        obj14 = { icon: require(shouldShowWishlistNUXActionSheet[29]).OrbsIcon };
        const intl2 = require(shouldShowWishlistNUXActionSheet[num2]).intl;
        obj14.accessibilityLabel = intl2.string(require(shouldShowWishlistNUXActionSheet[num2]).t["0TmQRG"]);
        obj14.isDark = stateFromStores;
        tmp39Result = callback(require(shouldShowWishlistNUXActionSheet[26]).IconBadgePill, obj14);
      }
      obj29 = require(shouldShowWishlistNUXActionSheet[8]);
    }
    obj28 = require(shouldShowWishlistNUXActionSheet[8]);
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
  const onPress = product.onPress;
  let isPurchased;
  let isPartiallyOwnedBundle;
  let obj;
  let c7;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  obj = require(analyticsLocations[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const selectedProduct = require(analyticsLocations[8]).getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[15])().analyticsLocations;
  const obj2 = require(analyticsLocations[8]);
  const collectiblesAnalyticsContext = require(analyticsLocations[33]).useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  let callback = collectiblesAnalyticsContext.useCallback(() => {
    let obj = defaultVariantIndex(analyticsLocations[34]);
    obj.hideActionSheet();
    obj = { product: closure_0, initialVariantIndex: defaultVariantIndex, analyticsLocations };
    let tmp2;
    if (null != collectiblesAnalyticsContext) {
      tmp2 = collectiblesAnalyticsContext;
    }
    obj.shopAnalyticsContext = tmp2;
    const result = product(analyticsLocations[35]).openProductDetailsActionSheet(obj);
  }, items);
  if (null != onPress) {
    callback = onPress;
  }
  const obj3 = require(analyticsLocations[33]);
  const isShopCardImpressionMobileEnabled = require(analyticsLocations[36]).useIsShopCardImpressionMobileEnabled("CollectiblesShopCardV2");
  const obj4 = require(analyticsLocations[36]);
  const obj5 = require(analyticsLocations[37]);
  const currentUser = require(analyticsLocations[10]).useCurrentUser();
  const obj6 = require(analyticsLocations[10]);
  const canUseCollectiblesResult = defaultVariantIndex(analyticsLocations[38]).canUseCollectibles(currentUser);
  const obj7 = defaultVariantIndex(analyticsLocations[38]);
  const productPurchaseState = require(analyticsLocations[39]).useProductPurchaseState(selectedProduct);
  isPurchased = productPurchaseState.isPurchased;
  isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj8 = require(analyticsLocations[39]);
  const obj9 = require(analyticsLocations[40]);
  const oneDayFractionalNitroEnabled = require(analyticsLocations[41]).useOneDayFractionalNitroEnabled("product_card");
  const obj10 = require(analyticsLocations[41]);
  let result = require(analyticsLocations[22]).isPremiumCollectiblesProduct(selectedProduct);
  const obj11 = require(analyticsLocations[22]);
  const result1 = require(analyticsLocations[22]).isFreeCollectiblesProduct(selectedProduct);
  let tmp12 = result;
  if (result) {
    tmp12 = !canUseCollectiblesResult;
  }
  if (tmp12) {
    tmp12 = !result1;
  }
  obj = tmp12;
  let tmp13 = result1;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    tmp13 = result;
  }
  c7 = tmp13;
  const items1 = [tmp13, isPartiallyOwnedBundle, isPurchased, tmp12];
  const memo = collectiblesAnalyticsContext.useMemo(() => {
    if (isPurchased === true) {
      return "purchased";
    } else if (isPartiallyOwnedBundle === true) {
      return "partiallyOwnedBundle";
    } else if (c6 === true) {
      return "nitroUpsell";
    } else if (c7 === true) {
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
  obj = { product, onPress: callback, collectibleProductState: memo, unpublishedAt, solidBackground, preferVCPrice, isDisabled: obj9.useProductDisableState(selectedProduct.skuId).isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, isShopCardImpressionEnabled: isShopCardImpressionMobileEnabled, disableBundleStaticBackground, muteBundleStaticBackground };
  const tmp15 = callback(CollectiblesShopCardInternalV2, obj);
  let tmp16 = tmp15;
  if (!isShopCardImpressionMobileEnabled) {
    obj = { onChange: obj5.useTrackProductCardImpression(product.skuId).handleCardVisibilityChange, resetKey: product.skuId, children: tmp15 };
    tmp16 = callback(defaultVariantIndex(analyticsLocations[42]), obj);
  }
  return tmp16;
}
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_6, ShopCtaEnum: closure_7 } = items);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let obj = {};
obj = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.card = obj;
obj.topRowOverlay = { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" };
obj.badge = { flexShrink: 1 };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, paddingVertical: 1.5, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, flexShrink: 1 };
obj.badgePill = _createForOfIteratorHelperLoose;
obj.badgeOverrideText = { textTransform: "uppercase" };
obj.badgePillDarkMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.badgePillLightMode = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
obj.wishlistButton = { marginLeft: "auto", flexShrink: 0 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_BRAND };
const memoResult = importAllResult.memo(function CollectiblesShopCardV2(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = importAllResult.useMemo(() => {
      const obj = { cardId: outer1_0(outer1_2[43]).v4() };
      return obj;
    }, items);
    let obj = { newValue: memo };
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = callback(CollectiblesShopCardV2Inner, obj);
    return callback(require(8707) /* useCollectiblesAnalyticsContext */.CollectiblesAnalyticsProvider, obj);
  }
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;

// Module ID: 8655
// Function ID: 68505
// Name: CollectiblesShopCardInternalV2
// Dependencies: []

// Module 8655 (CollectiblesShopCardInternalV2)
let PixelRatio;
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
  let solidBackground;
  let unpublishedAt;
  ({ product, onPress: closure_0, unpublishedAt, collectibleProductState, isDisabled } = hidePrice);
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
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let stringResult;
  let closure_5;
  let ShopCtaEnum;
  handleToggle = undefined;
  let tmp17;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = hidePrice);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = arg1(dependencyMap[8]);
  const selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  importDefault = selectedProduct;
  let obj2 = arg1(dependencyMap[9]);
  const trackShopCardImpression = obj2.useTrackShopCardImpression(product, selectedProduct, flag2);
  if (null != cardWidth) {
    obj = { width: cardWidth };
  } else {
    obj = { width: 150 };
  }
  let obj5 = arg1(dependencyMap[10]);
  const currentUser = obj5.useCurrentUser();
  let obj6 = arg1(dependencyMap[11]);
  const result = obj6.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp7 = importDefault(dependencyMap[12])();
  const shouldShowWishlistNUXActionSheet = tmp7.shouldShowWishlistNUXActionSheet;
  dependencyMap = shouldShowWishlistNUXActionSheet;
  const showWishlistNUXActionSheet = tmp7.showWishlistNUXActionSheet;
  importAllResult = showWishlistNUXActionSheet;
  const items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  let num2 = 13;
  const callback = importAllResult.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  const intl = arg1(dependencyMap[13]).intl;
  stringResult = intl.string(arg1(dependencyMap[13]).t.F8FvUy);
  const items1 = [stringResult];
  const callback1 = importAllResult.useCallback(() => {
    let obj = selectedProduct(shouldShowWishlistNUXActionSheet[14]);
    obj = { key: "WISHLIST_ERROR", content: stringResult };
    obj.open(obj);
  }, items1);
  let obj7 = arg1(dependencyMap[16]);
  const trackShopCardClick = obj7.useTrackShopCardClick({ product, analyticsLocations: importDefault(dependencyMap[15])().analyticsLocations });
  closure_5 = trackShopCardClick;
  let obj8 = arg1(dependencyMap[17]);
  obj1 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const wishlistButtonState = obj8.useWishlistButtonState(obj1);
  const isWishlisted = wishlistButtonState.isWishlisted;
  ShopCtaEnum = isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp13 = "purchased" === collectibleProductState;
  let tmp14 = tmp13;
  if (!tmp13) {
    tmp14 = hideWishlistButton;
  }
  let tmp15 = !tmp14;
  tmp17 = tmp15;
  if (tmp15) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = !isBusy;
  }
  const items2 = [tmp17, isWishlisted];
  const items3 = [handleToggle];
  const memo = importAllResult.useMemo(() => {
    if (tmp17) {
      const obj = { name: "toggleWishlist" };
      const intl = callback(shouldShowWishlistNUXActionSheet[13]).intl;
      const string = intl.string;
      let yr9TTf = callback(shouldShowWishlistNUXActionSheet[13]).t;
      if (isWishlisted) {
        yr9TTf = yr9TTf.yr9TTf;
        let stringResult = string(yr9TTf);
      } else {
        stringResult = string(yr9TTf.8DkMEQ);
      }
      obj.label = stringResult;
      const items = [obj];
    }
  }, items2);
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  let obj10 = arg1(dependencyMap[18]);
  const isProfileFramesEarlyAccessPhase = obj10.useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardV2");
  let obj11 = arg1(dependencyMap[19]);
  const items4 = [closure_5];
  const stateFromStores = obj11.useStateFromStores(items4, () => callback(shouldShowWishlistNUXActionSheet[20]).isThemeDark(trackShopCardClick.theme));
  obj2 = {
    ref: trackShopCardImpression,
    style: items5,
    onPress() {
      trackShopCardClick(isWishlisted.OPEN_DETAILS);
      if (null != callback) {
        callback();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2
  };
  const items5 = [tmp.card, obj, cardStyle];
  let obj13 = arg1(dependencyMap[22]);
  const badgeOverride = product.badgeOverride;
  const result1 = obj13.shouldShowLimitedTimeBadge(unpublishedAt);
  let obj14 = arg1(dependencyMap[8]);
  const productType = obj14.getProductType(product);
  if (product.hideBadge) {
    if (null != null) {
      const obj3 = { style: tmp.topRowOverlay };
      const items6 = [null, ];
      if (tmp15) {
        const obj4 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: tmp16, accessibilityHidden: true, onTrackPress: trackShopCardClick };
        tmp15 = handleToggle(arg1(dependencyMap[30]).WishlistButtonBase, obj4);
      }
      items6[1] = tmp15;
      obj3.children = items6;
      let tmp51Result = tmp17(stringResult, obj3);
      const tmp51 = tmp17;
      const tmp52 = stringResult;
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
    items7[1] = handleToggle(importDefault(dependencyMap[31]), obj5);
    obj6 = { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag };
    items7[2] = handleToggle(importDefault(dependencyMap[32]), obj6);
    obj2.children = items7;
    return tmp17(arg1(dependencyMap[21]).PressableOpacity, obj2);
  } else if (tmp25) {
    obj7 = {};
    const items8 = [tmp.badgePill, stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode];
    obj7.style = items8;
    const intl4 = arg1(dependencyMap[num2]).intl;
    obj7.accessibilityLabel = intl4.string(arg1(dependencyMap[num2]).t.1m6qcO);
    obj8 = { size: "xs" };
    let str5 = "white";
    if (stateFromStores) {
      str5 = "black";
    }
    obj8.color = str5;
    num2 = handleToggle(arg1(dependencyMap[24]).NitroWheelIcon, obj8);
    obj7.children = num2;
    let tmp39Result = handleToggle(stringResult, obj7);
    const tmp44 = handleToggle;
    const tmp45 = stringResult;
    const tmp48 = handleToggle;
  } else if (null != badgeOverride) {
    const obj9 = {};
    const items9 = [tmp.badgePill, stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode];
    obj9.style = items9;
    obj10 = { "Null": 141689299, "Null": 33554432, "Null": 285212672, "Null": 38822721, "Null": 1602048 };
    let str3 = "text-overlay-light";
    if (stateFromStores) {
      str3 = "text-overlay-dark";
    }
    obj10.color = str3;
    obj10.style = tmp.badgeOverrideText;
    obj10.children = badgeOverride;
    obj9.children = handleToggle(arg1(dependencyMap[25]).Text, obj10);
    tmp39Result = handleToggle(stringResult, obj9);
    const tmp39 = handleToggle;
    const tmp40 = stringResult;
    const tmp41 = handleToggle;
  } else {
    if (obj28.isDynamicProduct(selectedProduct)) {
      obj11 = { icon: arg1(dependencyMap[27]).DiceIcon };
      const intl3 = arg1(dependencyMap[num2]).intl;
      obj11.accessibilityLabel = intl3.string(arg1(dependencyMap[num2]).t.+drfVi);
      obj11.isDark = stateFromStores;
      tmp39Result = handleToggle(arg1(dependencyMap[26]).IconBadgePill, obj11);
    } else if (result1) {
      const obj12 = { unpublishedAt, style: tmp.badge };
      tmp39Result = handleToggle(importDefault(dependencyMap[28]), obj12);
    } else if ("nitroClaim" === collectibleProductState) {
      obj13 = { color: "mobile-text-heading-primary" };
      tmp39Result = handleToggle(arg1(dependencyMap[24]).NitroWheelIcon, obj13);
    } else {
      tmp39Result = null;
      if (obj29.isOrbsExclusiveProduct(selectedProduct)) {
        obj14 = { icon: arg1(dependencyMap[29]).OrbsIcon };
        const intl2 = arg1(dependencyMap[num2]).intl;
        obj14.accessibilityLabel = intl2.string(arg1(dependencyMap[num2]).t.0TmQRG);
        obj14.isDark = stateFromStores;
        tmp39Result = handleToggle(arg1(dependencyMap[26]).IconBadgePill, obj14);
      }
      const obj29 = arg1(dependencyMap[8]);
    }
    const obj28 = arg1(dependencyMap[8]);
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
  const arg1 = product;
  const onPress = product.onPress;
  let isPurchased;
  let closure_5;
  let ShopCtaEnum;
  let tmp12;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = arg1(dependencyMap[7]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const importDefault = defaultVariantIndex;
  const selectedProduct = arg1(dependencyMap[8]).getSelectedProduct(product, defaultVariantIndex);
  const analyticsLocations = importDefault(dependencyMap[15])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  const obj2 = arg1(dependencyMap[8]);
  const collectiblesAnalyticsContext = arg1(dependencyMap[33]).useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  let callback = importAllResult.useCallback(() => {
    let obj = defaultVariantIndex(analyticsLocations[34]);
    obj.hideActionSheet();
    obj = { product, initialVariantIndex: defaultVariantIndex, analyticsLocations };
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
  const obj3 = arg1(dependencyMap[33]);
  const isShopCardImpressionMobileEnabled = arg1(dependencyMap[36]).useIsShopCardImpressionMobileEnabled("CollectiblesShopCardV2");
  const obj4 = arg1(dependencyMap[36]);
  const obj5 = arg1(dependencyMap[37]);
  const currentUser = arg1(dependencyMap[10]).useCurrentUser();
  const obj6 = arg1(dependencyMap[10]);
  const canUseCollectiblesResult = importDefault(dependencyMap[38]).canUseCollectibles(currentUser);
  const obj7 = importDefault(dependencyMap[38]);
  const productPurchaseState = arg1(dependencyMap[39]).useProductPurchaseState(selectedProduct);
  isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  closure_5 = isPartiallyOwnedBundle;
  const obj8 = arg1(dependencyMap[39]);
  const obj9 = arg1(dependencyMap[40]);
  let result = arg1(dependencyMap[22]).isPremiumCollectiblesProduct(selectedProduct);
  const obj10 = arg1(dependencyMap[22]);
  const result1 = arg1(dependencyMap[22]).isFreeCollectiblesProduct(selectedProduct);
  let tmp11 = result;
  if (result) {
    tmp11 = !canUseCollectiblesResult;
  }
  if (tmp11) {
    tmp11 = !result1;
  }
  ShopCtaEnum = tmp11;
  tmp12 = result1;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    tmp12 = result;
  }
  const items1 = [tmp12, isPartiallyOwnedBundle, isPurchased, tmp11];
  obj = {
    product,
    onPress: callback,
    collectibleProductState: collectiblesAnalyticsContext.useMemo(() => {
      if (isPurchased === true) {
        return "purchased";
      } else if (isPartiallyOwnedBundle === true) {
        return "partiallyOwnedBundle";
      } else if (tmp11 === true) {
        return "nitroUpsell";
      } else if (tmp12 === true) {
        return "nitroClaim";
      } else {
        return null;
      }
    }, items1),
    unpublishedAt,
    solidBackground,
    preferVCPrice,
    isDisabled: obj9.useProductDisableState(selectedProduct.skuId).isDisabled,
    cardWidth,
    cardStyle,
    hideWishlistButton,
    hidePrice,
    isShopCardImpressionEnabled: isShopCardImpressionMobileEnabled,
    disableBundleStaticBackground,
    muteBundleStaticBackground
  };
  const tmp13 = tmp12(CollectiblesShopCardInternalV2, obj);
  let tmp14 = tmp13;
  if (!isShopCardImpressionMobileEnabled) {
    obj = { onChange: obj5.useTrackProductCardImpression(product.skuId).handleCardVisibilityChange, resetKey: product.skuId, children: tmp13 };
    tmp14 = tmp12(importDefault(dependencyMap[41]), obj);
  }
  return tmp14;
}
const importAllResult = importAll(dependencyMap[0]);
({ PixelRatio, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { 9223372036854775807: "sh", 0: 11, 0: null, 9223372036854775807: "Path 11", 9223372036854775807: "ADBE Vector Shape - Group", 0: false, 9223372036854775807: null, 0: "\u{1F9D1}\u{1F3FE}", height: num, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.card = obj;
obj.topRowOverlay = { HI88Q3: true, EXPRESSION_FOOTER_HEIGHT: "#fff", sessionSampleRate: "small", errorSampleRate: "2026-04-collectibles-profile-frames-purchase", getOrCreate: "user", ITEM: "2026-03-friend-request-message", waxing_gibbous_moon: true, GYpoAq: "/assets/design/components/Icon/native/redesign/generated/images", JUMP_TO_PRESENT_BUTTON_SIZE: 24, rawSpec: 24 };
obj.badge = { flexShrink: 1 };
obj1 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_4, paddingVertical: 1.5, borderRadius: importDefault(dependencyMap[6]).radii.round, flexShrink: 1 };
obj.badgePill = obj1;
obj.badgeOverrideText = { textTransform: "uppercase" };
const tmp3 = arg1(dependencyMap[4]);
obj.badgePillDarkMode = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
obj.badgePillLightMode = { backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND };
obj.wishlistButton = { 0: -720897, 9223372036854775807: 65535 };
let closure_9 = obj1.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BADGE_BACKGROUND_BRAND };
const memoResult = importAllResult.memo(function CollectiblesShopCardV2(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = importAllResult.useMemo(() => {
      const obj = { cardId: callback(closure_2[42]).v4() };
      return obj;
    }, items);
    let obj = { newValue: memo };
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = callback(CollectiblesShopCardV2Inner, obj);
    return callback(arg1(dependencyMap[33]).CollectiblesAnalyticsProvider, obj);
  }
});
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;

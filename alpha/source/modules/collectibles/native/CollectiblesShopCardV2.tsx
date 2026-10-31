// Module ID: 9459
// Function ID: 9460
// Name: CollectiblesShopCardV2
// Dependencies: [19, 17, 1192, 7720, 1074, 21, 5014, 575, 9460, 7731, 9461, 8749, 9463, 9464, 1113, 5712, 7326, 9523, 9525, 504, 5021, 6980, 7732, 5624, 9526, 9529, 9531, 9528, 9532, 9534, 9539, 9550, 9462, 5258, 8747, 2047, 9537, 9574, 9575, 9577, 1266, 2]

// Module 9459 (CollectiblesShopCardV2)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import v1 from "v1" /* 1266 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 8747 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9462 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let PixelRatio;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
function CollectiblesShopCardInternalV2(product) {
  let Text;
  let cardStyle;
  let cardWidth;
  let collectibleProductState;
  let disableBundleStaticBackground;
  let handleToggle;
  let hideWishlistButton;
  let intl2;
  let intl3;
  let isBusy;
  let isDisabled;
  let items6;
  let items8;
  let items9;
  let muteBundleStaticBackground;
  let obj10;
  let obj5;
  let preferVCPrice;
  let solidBackground;
  let text;
  let tmp25Result;
  let unpublishedAt;
  product = product.product;
  require = product;
  ({ onPress: importDefault, unpublishedAt, collectibleProductState, isDisabled } = product);
  ({ solidBackground, preferVCPrice } = product);
  if (isDisabled === undefined) {
    isDisabled = false;
  }
  ({ cardWidth, hideWishlistButton, cardStyle } = product);
  if (hideWishlistButton === undefined) {
    hideWishlistButton = false;
  }
  let flag = product.hidePrice;
  if (flag === undefined) {
    flag = false;
  }
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  let c5;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  let closure_9;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let tmp = closure_12();
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = require("CollectiblesProductUtils");
  selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = require("useTrackShopCardImpression");
  const trackShopCardImpression = obj3.useTrackShopCardImpression(product, selectedProduct);
  if (null != cardWidth) {
    obj5 = { width: cardWidth };
    const obj4 = { width: cardWidth };
  } else {
    obj5 = { width: 150 };
  }
  const tmp2Result = require("useCurrentUser");
  const currentUser = tmp2Result.useCurrentUser();
  const tmp2Result9 = require("CollectiblesWishlistUtils");
  const result = tmp2Result9.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp10 = require("useWishlistNUXActionSheet")();
  shouldShowWishlistNUXActionSheet = tmp10.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp10.showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  const callback = shouldShowWishlistNUXActionSheet.useCallback(() => {
    const tmp = shouldShowWishlistNUXActionSheet;
    if (tmp) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[14]).intl;
  let stringResult = intl.string(tmp2(tmp3[14]).t.F8FvUy);
  c5 = stringResult;
  const items1 = [stringResult];
  const callback1 = shouldShowWishlistNUXActionSheet.useCallback(() => {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text };
    obj.open("WISHLIST_ERROR", obj2);
  }, items1);
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp2Result10 = require("useTrackShopCardClick");
  trackShopCardClick = tmp2Result10.useTrackShopCardClick({ product, analyticsLocations });
  const obj6 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const tmp2Result11 = require("useWishlistButtonState");
  const wishlistButtonState = tmp2Result11.useWishlistButtonState(obj6);
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp16 = "purchased" === collectibleProductState;
  let tmp18 = !tmp17;
  let tmp20 = tmp18;
  if (!(tmp16 || hideWishlistButton)) {
    tmp20 = !tmp19;
  }
  if (tmp20) {
    tmp20 = !isBusy;
  }
  closure_9 = tmp20;
  const items2 = [tmp20, isWishlisted];
  const items3 = [handleToggle];
  const memo = obj8.useMemo(() => {
    let tmp;
    if (closure_9) {
      let stringResult;
      const intl = intl4.intl;
      const string = intl.string;
      const t = intl4.t;
      if (isWishlisted) {
        stringResult = string(t.yr9TTf);
      } else {
        stringResult = string(t["8DkMEQ"]);
      }
      const items = [{ name: "toggleWishlist", label: stringResult }];
      tmp = items;
      const obj = { name: "toggleWishlist", label: stringResult };
    }
    return tmp;
  }, items2);
  const callback2 = obj8.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const items4 = [c5];
  const tmp2Result12 = require("get initialized");
  const stateFromStores = tmp2Result12.useStateFromStores(items4, () => {
    const obj = require("shared");
    return obj.isThemeDark(text.theme);
  });
  const items5 = [trackShopCardClick];
  const tmp2Result13 = require("get initialized");
  const stateFromStores1 = tmp2Result13.useStateFromStores(items5, () => {
    const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
    let unpublishedAt;
    if (category != null) {
      unpublishedAt = category.unpublishedAt;
    }
    return unpublishedAt;
  });
  if (unpublishedAt == null) {
    unpublishedAt = product.categoryWillUnpublishAt;
  }
  if (unpublishedAt == null) {
    unpublishedAt = stateFromStores1;
  }
  const obj7 = {
    ref: trackShopCardImpression,
    style: items6,
    onPress() {
      trackShopCardClick(metroImportAll.OPEN_DETAILS);
      if (importDefault != null) {
        importDefault();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2,
    children: items9
  };
  items6 = [tmp.card, obj5, cardStyle];
  const PressableOpacity = tmp2(tmp3[21]).PressableOpacity;
  require("CollectiblesUtils");
  const badgeOverride = product.badgeOverride;
  let tmp28 = null;
  if (!product.hideBadge) {
    let tmp34Result;
    if (null != badgeOverride) {
      const items7 = [tmp.badgePill, ];
      items7[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
      let str2 = "text-overlay-light";
      const obj9 = { style: items7, children: closure_9(Text, obj10) };
      Text = tmp2(tmp3[23]).Text;
      const tmp35 = showWishlistNUXActionSheet;
      if (stateFromStores) {
        str2 = "text-overlay-dark";
      }
      obj10 = { variant: "text-xs/bold", color: str2, allowFontScaling: false, style: tmp.badgeOverrideText, lineClamp: 1, children: badgeOverride };
      tmp34Result = tmp34(tmp35, obj9);
    } else {
      const tmp2Result15 = require("CollectiblesProductUtils");
      if (tmp2Result15.isDynamicProduct(selectedProduct)) {
        const obj11 = { icon: require("DiceIcon").DiceIcon, accessibilityLabel: intl3.string(require("intl").t["+drfVi"]), isDark: stateFromStores };
        const IconBadgePill2 = tmp2(tmp3[24]).IconBadgePill;
        intl3 = tmp2(tmp3[14]).intl;
        tmp34Result = closure_9(IconBadgePill2, obj11);
      } else if (tmp27) {
        const obj12 = { unpublishedAt, style: tmp.badge };
        tmp34Result = closure_9(tmp9(tmp3[26]), obj12);
      } else if ("nitroClaim" === collectibleProductState) {
        tmp34Result = closure_9(tmp2(tmp3[27]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
      } else {
        tmp34Result = null;
        const tmp2Result16 = require("CollectiblesProductUtils");
        if (tmp2Result16.isOrbsExclusiveProduct(selectedProduct)) {
          const obj13 = { icon: require("OrbsIcon").OrbsIcon, accessibilityLabel: intl2.string(require("intl").t["0TmQRG"]), isDark: stateFromStores };
          const IconBadgePill = tmp2(tmp3[24]).IconBadgePill;
          intl2 = tmp2(tmp3[14]).intl;
          tmp34Result = closure_9(IconBadgePill, obj13);
        }
      }
    }
    tmp28 = tmp34Result;
  }
  if (null != tmp28) {
    const obj14 = { style: tmp.topRowOverlay, children: items8 };
    items8 = [tmp28, ];
    const tmp37 = showWishlistNUXActionSheet;
    if (!(tmp16 || hideWishlistButton)) {
      const obj15 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: !result, accessibilityHidden: true, onTrackPress: trackShopCardClick };
      tmp18 = closure_9(tmp2(tmp3[29]).WishlistButtonBase, obj15);
    }
    items8[1] = tmp18;
    tmp25Result = tmp25(tmp37, obj14);
  } else {
    tmp25Result = null;
  }
  items9 = [tmp25Result, , ];
  const obj16 = { solidBackground, product, isPurchased: tmp16, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  const tmp9Result = require("CollectiblesShopCardAssetTileV2");
  if (!tmp16) {
    tmp16 = "partiallyOwnedBundle" === collectibleProductState;
  }
  items9[1] = closure_9(tmp9Result, obj16);
  items9[2] = closure_9(require("CollectiblesShopCardCardDetailsV2"), { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag });
  return closure_10(PressableOpacity, obj7);
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
  let tmp16Result;
  let unpublishedAt;
  product = product.product;
  require = product;
  let onPress = product.onPress;
  let analyticsLocations;
  const tmp2 = analyticsLocations;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj2 = require("CollectiblesProductUtils");
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[16])().analyticsLocations;
  const obj3 = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let tmp3;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { product: require, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: tmp3 };
    const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
    openProductDetailsActionSheet2;
    const result = openProductDetailsActionSheet(obj2);
    tmp3 = collectiblesAnalyticsContext;
  }, items);
  const obj4 = require("useCurrentUser");
  const currentUser = obj4.useCurrentUser();
  const obj5 = defaultVariantIndex(analyticsLocations[35]);
  const canUseCollectiblesResult = obj5.canUseCollectibles(currentUser);
  const obj6 = require("useProductPurchaseState");
  const productPurchaseState = obj6.useProductPurchaseState(selectedProduct);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj7 = require("useProductDisableState");
  const isDisabled = obj7.useProductDisableState(selectedProduct.skuId).isDisabled;
  const obj8 = require("OneDayFractionalNitroExperiment");
  const oneDayFractionalNitroEnabled = obj8.useOneDayFractionalNitroEnabled("product_card");
  const obj9 = require("CollectiblesUtils");
  let result = obj9.isPremiumCollectiblesProduct(selectedProduct);
  const obj10 = require("CollectiblesUtils");
  let result1 = obj10.isFreeCollectiblesProduct(selectedProduct);
  let closure_6 = tmp13;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    result1 = result;
  }
  const items1 = [result1, isPartiallyOwnedBundle, isPurchased, result && !canUseCollectiblesResult && !result1];
  if (product.skuId !== result1.FRACTIONAL_PREMIUM_1_DAY) {
    let tmp19 = null;
    const tmp16 = closure_10;
    const tmp17 = closure_11;
    const tmpResult = require("FractionalNitroPricingExperiment");
    if (tmpResult.isFractionalNitroPricingSku(product.skuId)) {
      tmp19 = closure_9(tmp(tmp2[39]).FractionalNitroPricingExposure, { location: "product_card" });
    }
    const items2 = [tmp19, ];
    const obj11 = { product, onPress, collectibleProductState: tmp14, unpublishedAt, solidBackground, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground };
    const tmp21 = closure_9;
    const tmp22 = CollectiblesShopCardInternalV2;
    if (onPress == null) {
      onPress = callback;
    }
    const obj12 = { children: items2 };
    items2[1] = tmp21(tmp22, obj11);
    tmp16Result = tmp16(tmp17, obj12);
  } else {
    tmp16Result = null;
  }
  return tmp16Result;
}
({ PixelRatio, View: closure_4 } = react_native);
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportDefault, ShopCtaEnum: metroImportAll } = CollectiblesShopConstants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let createStyles = createStyles_mod;
let obj = { card: size, topRowOverlay: { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" }, badge: { flexShrink: 1 }, badgePill: obj2, badgeOverrideText: { textTransform: "uppercase" }, badgePillDarkMode: obj3, badgePillLightMode: obj4, wishlistButton: { marginLeft: "auto", flexShrink: 0 } };
size = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj4 = { backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function CollectiblesShopCardV2(arg0) {
  let obj2;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = react.useMemo(() => {
      let obj2;
      const obj = { cardId: obj2.v4() };
      obj2 = v1;
      return obj;
    }, items);
    let obj = { newValue: memo, children: React4(CollectiblesShopCardV2Inner, obj2) };
    obj2 = {};
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    const merged1 = Object.assign(merged);
    return React4(CollectiblesAnalyticsProvider, obj);
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;

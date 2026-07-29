// Module ID: 8732
// Function ID: 8733
// Name: PreviewProfileTrigger
// Dependencies: [32, 19, 17, 678, 676, 505, 21, 4189, 712, 4604, 3901, 4035, 1236, 8733, 1901, 8664, 8359, 8731, 6502, 8735, 5515, 5535, 5809, 8736, 8737, 8663, 8426, 503, 8046, 698, 8700, 8738, 8739, 7967, 8702, 8705, 3848, 8740, 5243, 5245, 8707, 8741, 8757, 8763, 1297, 8764, 6665, 4157, 8766, 500, 2]
// Exports: default

// Module 8732 (PreviewProfileTrigger)
import DynamicBadgeTooltip from "DynamicBadgeTooltip";
import apexExperiment from "apexExperiment";
import noop from "apexExperiment";
import get_ActivityIndicator from "PRODUCT_DETAILS_ACTION_SHEET_KEY";
import { ShopCtaEnum } from "items";
import { AnalyticEvents } from "ME";
import sum from "sum";
import jsxProd from "QUICK_SWITCHER";
import createCacheKey from "createCacheKey";
import ManaContext from "ManaContext";
import ManaContext from "ManaContext";

let c5;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  let dependencyMap;
  let DynamicBadgeTooltip;
  let React;
  let closure_5;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = handlePreviewPress(3901);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(4035).isThemeLight(theme);
  DynamicBadgeTooltip = theme === constants2.MIDNIGHT;
  React = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [_undefined.previewProfileButton, apexExperiment, , ];
      let previewProfileButtonMidnight = DynamicBadgeTooltip;
      if (DynamicBadgeTooltip) {
        previewProfileButtonMidnight = _undefined.previewProfileButtonMidnight;
      }
      items[2] = previewProfileButtonMidnight;
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: React.useCallback(() => {
      onTrackPress(outer1_9.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl = tmp2(1236).intl;
  obj[3] = intl.string(handlePreviewPress(1236).t["3Qcx6K"]);
  obj = { size: "md", color: null };
  obj[1] = onTrackPress(712).colors.INTERACTIVE_ICON_DEFAULT;
  obj[4] = callback3(handlePreviewPress(8733).EyeIcon, obj);
  return callback3(closure_7, obj);
}
function ProductDetailsActionSheetInner(product) {
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp21;
  let tmp38;
  let type;
  product = product.product;
  let require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations = product.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const paymentGateway = product.paymentGateway;
  analyticsLocations = undefined;
  let callback;
  let trackPdpClick;
  let currentUser;
  let callback2;
  let c7;
  let c8;
  const OTPACOMOrderExperiment = require(analyticsLocations[18]).OTPACOMOrderExperiment;
  let obj = require(analyticsLocations[19]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp4 = createCacheKey();
  let obj1 = trackPdpClick;
  const ref1 = trackPdpClick.useRef(null);
  analyticsLocations = ref1;
  const items = [];
  const ref = trackPdpClick.useRef(null);
  const tmp8 = analyticsLocations(analyticsLocations[20]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(analyticsLocations[21]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp8(items).analyticsLocations;
  const tmp11 = callback(trackPdpClick.useState(true), 2);
  callback = tmp12;
  const items1 = [product];
  const tmp13 = callback2(() => product(analyticsLocations[22]).getProductSkuIds(closure_0), items1);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  const tmp10 = callback;
  [tmp15, tmp16] = callback(trackPdpClick.useState(num), 2);
  let obj2 = require(analyticsLocations[22]);
  const selectedProduct = obj2.getSelectedProduct(product, tmp15);
  let obj3 = require(analyticsLocations[23]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp13, analyticsLocations };
  trackPdpClick = obj3.useTrackPdpClick(obj);
  const tmp14 = callback(trackPdpClick.useState(num), 2);
  [tmp20, tmp21] = callback(trackPdpClick.useState(undefined), 2);
  currentUser = tmp21;
  const tmp19 = callback(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp22[0]) {
    tmp23(selectedProduct.skuId);
    tmp21(undefined);
  }
  let tmpResult = tmp(tmp2[24]);
  const previewCollectibleProduct = tmpResult.usePreviewCollectibleProduct(selectedProduct, tmp11[0], tmp20);
  tmpResult = tmp(tmp2[25]);
  const collectiblesAnalyticsContext = tmpResult.useCollectiblesAnalyticsContext();
  obj = { type: null, name: null, properties: null };
  let tmp7Result = tmp7(tmp2[26]);
  obj[0] = require(analyticsLocations[27]).ImpressionTypes.HALFSHEET;
  obj[1] = require(analyticsLocations[27]).ImpressionNames.SHOP_PRODUCT_DETAIL;
  obj1 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: null, position_in_section: null, shop_session_id: null, product_sku_ids: null };
  let cardId;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj1[2] = cardId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj1[3] = tilePosition;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj1[4] = sessionId;
  obj1[5] = tmp13;
  obj[2] = obj1;
  tmp7Result(obj);
  require = product;
  analyticsLocations = tmp15;
  callback = tmp33;
  trackPdpClick = tmp12;
  tmp22 = callback(trackPdpClick.useState(selectedProduct.skuId), 2);
  currentUser = require(analyticsLocations[15]).useCurrentUser();
  const items2 = [product, tmp15, tmp11[1], currentUser.id, analyticsLocations, collectiblesAnalyticsContext];
  callback = obj1.useCallback(() => {
    trackPdpClick(false);
    analyticsLocations(analyticsLocations[16])({
      userId: currentUser.id,
      isPreviewingChanges: true,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj = outer1_0(outer1_2[17]);
        obj = { product: closure_0, initialVariantIndex: closure_1, analyticsLocations: closure_2, shopAnalyticsContext: DynamicBadgeTooltip };
        return obj.openProductDetailsActionSheet(obj);
      }
    });
  }, items2);
  const tmpResult1 = require(analyticsLocations[15]);
  callback2 = require(analyticsLocations[28]).useShopProductItems(product);
  const tmp36 = product.type === require(analyticsLocations[14]).CollectiblesItemType.BUNDLE;
  c7 = tmp36;
  const tmpResult2 = require(analyticsLocations[28]);
  [type, tmp38] = tmp10(obj1.useState(() => {
    if (c7) {
      if (null != firstProfileEffect.firstProfileEffect) {
        let NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != tmp.firstAvatarDecoration) {
        NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != tmp.firstNameplate) {
        NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  c8 = tmp38;
  const tmp10Result = tmp10(obj1.useState(() => {
    if (c7) {
      if (null != firstProfileEffect.firstProfileEffect) {
        let NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != tmp.firstAvatarDecoration) {
        NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != tmp.firstNameplate) {
        NAMEPLATE = product(analyticsLocations[14]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  const tmp39 = currentUser;
  if (!tmp36) {
    type = selectedProduct.type;
  }
  let tmp57Result = null != type;
  if (tmp57Result) {
    tmp57Result = type === tmp(tmp2[14]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[14]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[14]).CollectiblesItemType.AVATAR_DECORATION;
    const tmp42 = type === tmp(tmp2[14]).CollectiblesItemType.PROFILE_EFFECT || type === tmp(tmp2[14]).CollectiblesItemType.PROFILE_FRAME || type === tmp(tmp2[14]).CollectiblesItemType.AVATAR_DECORATION;
  }
  const items3 = [product, tmp11[1]];
  const items4 = [analyticsLocations, product.skuId];
  const tmp40 = currentUser((type) => {
    currentUser(type);
    _undefined2(type.type);
  }, []);
  const effect = obj1.useEffect(() => {
    let obj = analyticsLocations(analyticsLocations[29]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(outer1_10.OPEN_MODAL, obj);
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp39Result = tmp39(() => {
    if (product.type === product(analyticsLocations[14]).CollectiblesItemType.BUNDLE) {
      _undefined(false);
    }
  }, items3);
  const isProfileFramesEarlyAccessPhase = require(analyticsLocations[30]).useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmpResult3 = require(analyticsLocations[30]);
  const tmp46 = selectedProduct.type === require(analyticsLocations[14]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const tmpResult4 = require(analyticsLocations[10]);
  const isThemeDarkResult = require(analyticsLocations[11]).isThemeDark(tmpResult4.useThemeContext().theme);
  let tmp48 = selectedProduct;
  if (tmp36) {
    tmp48 = selectedProduct;
    if (null != tmp20) {
      obj2 = { skuId: null, type: null, items: null };
      ({ skuId: obj15[0], type: obj15[1] } = tmp20);
      const items5 = [tmp20];
      obj2[2] = items5;
      tmp48 = obj2;
    }
  }
  if (tmp46) {
    let tmp49 = callback3(tmp7(tmp2[31]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp49 = null;
    if (null == product.badgeOverride) {
      if (tmpResult6.isDynamicProduct(tmp48)) {
        if (!hideBadge) {
          obj3 = { accessibilityLabel: null, children: null };
          const intl = tmp(tmp2[12]).intl;
          obj3[0] = intl.string(tmp(tmp2[12]).t["+drfVi"]);
          const obj4 = { icon: null, label: null, isDark: null };
          obj4[0] = tmp(tmp2[34]).DiceIcon;
          const intl2 = tmp(tmp2[12]).intl;
          obj4[1] = intl2.string(tmp(tmp2[12]).t["+drfVi"]);
          obj4[2] = isThemeDarkResult;
          obj3[1] = callback3(tmp(tmp2[33]).IconTextBadge, obj4);
          tmp49 = callback3(tmp(tmp2[32]).DynamicBadgeTooltip, obj3);
        }
      }
      tmpResult6 = tmp(tmp2[22]);
      const tmpResult7 = tmp(tmp2[22]);
      tmp49 = null;
      if (tmp51) {
        const obj5 = { icon: null, label: null, isDark: null };
        obj5[0] = tmp(tmp2[35]).OrbsIcon;
        const intl3 = tmp(tmp2[12]).intl;
        obj5[1] = intl3.string(tmp(tmp2[12]).t["0TmQRG"]);
        obj5[2] = isThemeDarkResult;
        tmp49 = callback3(tmp(tmp2[33]).IconTextBadge, obj5);
      }
      tmp51 = tmp(tmp2[22]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  let enabled = paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
  if (enabled) {
    enabled = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" }).enabled;
  }
  if (!enabled) {
    let result = paymentGateway === tmp54.GOOGLE;
    if (result) {
      result = tmp(tmp2[36]).isGooglePlayBillingSupported();
      const tmpResult8 = tmp(tmp2[36]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    enabled = result;
  }
  tmp54 = constants;
  const tmpResult5 = require(analyticsLocations[11]);
  const obj6 = { value: analyticsLocations, children: null };
  const obj7 = {
    scrollable: true,
    startExpanded: true,
    onExpand(arg0) {
      const current = analyticsLocations.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd({ animated: true });
      }
      return scrollToEndResult;
    },
    onDismiss() {
      return trackPdpClick(outer1_9.CLOSE_DETAIL);
    },
    ref,
    children: null
  };
  const obj8 = { scrollsToTop: false, style: tmp4.container, ref: ref1, children: null };
  const obj9 = { style: tmp4.actionButtons, children: null };
  if (tmp57Result) {
    const obj10 = { handlePreviewPress: null, onTrackPress: null };
    obj10[0] = callback;
    obj10[1] = trackPdpClick;
    tmp57Result = tmp57(PreviewProfileTrigger, obj10);
  }
  const items6 = [tmp57Result, callback3(analyticsLocations(analyticsLocations[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj9[1] = items6;
  const items7 = [closure_14(c8, obj9), , , , , ];
  tmp57Result = null != tmp49;
  if (tmp57Result) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp4.badgeWrapper;
    obj11[1] = tmp49;
    tmp57Result = tmp57(tmp59, obj11);
  }
  items7[1] = tmp57Result;
  items7[2] = callback3(analyticsLocations(analyticsLocations[41]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemTypeChange: tmp38, onBundleActiveItemChange: tmp40 });
  items7[3] = callback3(analyticsLocations(analyticsLocations[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items7[4] = callback3(analyticsLocations(analyticsLocations[43]), { product, selectedVariantIndex: tmp15, onVariantSelect: tmp16 });
  const obj12 = { size: null };
  obj12[0] = analyticsLocations(analyticsLocations[8]).space.PX_16;
  items7[5] = callback3(require(analyticsLocations[44]).Spacer, obj12);
  obj8[3] = items7;
  const items8 = [closure_14(require(analyticsLocations[39]).BottomSheetScrollView, obj8), ];
  const obj13 = { skuIDs: [], activeSubscription: null, children: null };
  const obj14 = {
    paymentGateway,
    orderRequired: enabled,
    skuIds: items9,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: analyticsLocations(analyticsLocations[37])(selectedProduct),
    onOrderRetryCancellation() {
      return analyticsLocations(analyticsLocations[47]).hideActionSheet(product(analyticsLocations[17]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  };
  items9 = [selectedProduct.skuId];
  tmp7Result = tmp7(tmp2[46]);
  obj14[7] = callback3(analyticsLocations(analyticsLocations[48]), { onBuy: tmp39Result, product: selectedProduct, analyticsLocations, onTrackPress: trackPdpClick });
  obj13[2] = callback3(tmp7Result, obj14, selectedProduct.skuId);
  items8[1] = callback3(require(analyticsLocations[45]).NativePaymentContextProvider, obj13);
  obj7[5] = items8;
  obj6[1] = closure_14(require(analyticsLocations[38]).BottomSheet, obj7);
  return callback3(require(analyticsLocations[20]).AnalyticsLocationProvider, obj6);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  let obj = require(500) /* set */;
  obj = {};
  const merged = Object.assign(arg0);
  obj.paymentGateway = obj.isIOS() ? closure_11.APPLE_ADVANCED_COMMERCE : closure_11.GOOGLE;
  return callback3(ProductDetailsActionSheetInner, obj);
}
({ useCallback: c5, useMemo: closure_6 } = noop);
({ Pressable: error, View: metroImportAll } = get_ActivityIndicator);
({ PaymentGateways: unpackModuleId, ThemeTypes: closure_12 } = sum);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = {};
createCacheKey = { container: { position: "relative", flex: 1 }, actionButtons: null, previewProfileButton: null, previewProfileButtonLight: null, previewProfileButtonLightPressed: null, previewProfileButtonDark: null, previewProfileButtonDarkPressed: null, previewProfileButtonMidnight: null, badgeWrapper: null };
createCacheKey = { position: "absolute", top: 0, right: require("Themes").space.PX_16, zIndex: 2, flexDirection: "row", gap: require("Themes").space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
let obj2 = { backgroundColor: null };
obj2[0] = ManaContext.setColorOpacity("white", 0.72);
createCacheKey[3] = obj2;
let obj3 = { backgroundColor: null };
obj3[0] = ManaContext.setColorOpacity("white", 0.62);
createCacheKey[4] = obj3;
let obj1 = { width: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, height: require("MINIMUM_HIT_AREA").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, borderWidth: 1, borderColor: require("Themes").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
createCacheKey[5] = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
ManaContext = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
createCacheKey[6] = ManaContext;
let obj4 = { backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[7] = { borderColor: require("Themes").colors.BORDER_STRONG };
ManaContext = { position: "absolute", top: 0, left: require("Themes").space.PX_16, zIndex: 2 };
createCacheKey[8] = ManaContext;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { borderColor: require("Themes").colors.BORDER_STRONG };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.create(null));
  let obj = { newValue: shopAnalyticsContext, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = callback3(ProductDetailsActionSheetWithOrderCTX, obj);
  return callback3(require(8663) /* context */.CollectiblesAnalyticsProvider, obj);
};

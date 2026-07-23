// Module ID: 8737
// Function ID: 69107
// Name: PreviewProfileTrigger
// Dependencies: [57, 31, 27, 655, 653, 482, 33, 4130, 689, 4547, 3842, 3976, 1212, 8738, 1876, 8667, 8492, 8736, 7194, 8740, 5464, 5484, 6785, 8741, 8742, 8666, 8559, 480, 8207, 675, 8703, 8743, 8744, 7869, 8705, 8708, 3789, 8745, 5187, 5189, 8710, 8746, 8762, 8768, 1273, 8769, 7195, 4098, 8771, 477, 2]
// Exports: default

// Module 8737 (PreviewProfileTrigger)
import _slicedToArray from "_slicedToArray";
import BadgeWithTooltip from "BadgeWithTooltip";
import result from "BadgeWithTooltip";
import get_ActivityIndicator from "isThrottled";
import { ShopCtaEnum } from "items";
import { AnalyticEvents } from "ME";
import sum from "sum";
import jsxProd from "NewBadge";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ManaContext from "ManaContext";
import ManaContext from "ManaContext";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  let React;
  let closure_5;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = handlePreviewPress(3842);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = handlePreviewPress(3976).isThemeLight(theme);
  let _slicedToArray = theme === constants2.MIDNIGHT;
  React = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [tmp.previewProfileButton, BadgeWithTooltip, , ];
      let previewProfileButtonMidnight = _slicedToArray;
      if (_slicedToArray) {
        previewProfileButtonMidnight = tmp.previewProfileButtonMidnight;
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
    accessibilityRole: "button"
  };
  const intl = handlePreviewPress(1212).intl;
  obj.accessibilityLabel = intl.string(handlePreviewPress(1212).t["3Qcx6K"]);
  obj = { size: "md", color: onTrackPress(689).colors.INTERACTIVE_ICON_DEFAULT };
  obj.children = callback4(handlePreviewPress(8738).EyeIcon, obj);
  return callback4(closure_7, obj);
}
function ProductDetailsActionSheetInner(product) {
  let tmp15;
  let tmp16;
  let tmp32;
  let type;
  product = product.product;
  const require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations = product.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const paymentGateway = product.paymentGateway;
  let ref1;
  let callback;
  let trackPdpClick;
  let callback2;
  let callback3;
  let c7;
  let c8;
  const OTPACOMOrderExperiment = require(ref1[18]).OTPACOMOrderExperiment;
  let obj = require(ref1[19]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp2 = _createForOfIteratorHelperLoose();
  ref1 = trackPdpClick.useRef(null);
  let items = [];
  const ref = trackPdpClick.useRef(null);
  const tmp5 = analyticsLocations(ref1[20]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = analyticsLocations(ref1[21]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp5(items).analyticsLocations;
  const tmp7 = callback(trackPdpClick.useState(true), 2);
  callback = tmp8;
  const items1 = [product];
  const tmp9 = callback3(() => product(ref1[22]).getProductSkuIds(closure_0), items1);
  const tmp10 = callback(trackPdpClick.useState(num), 2);
  const first = tmp10[0];
  let obj1 = require(ref1[22]);
  const selectedProduct = obj1.getSelectedProduct(product, first);
  let obj2 = require(ref1[23]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp9, analyticsLocations };
  trackPdpClick = obj2.useTrackPdpClick(obj);
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  [tmp15, tmp16] = callback(trackPdpClick.useState(undefined), 2);
  callback2 = tmp16;
  const tmp14 = callback(trackPdpClick.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp17[0]) {
    tmp18(selectedProduct.skuId);
    tmp16(undefined);
  }
  let obj4 = require(ref1[24]);
  const previewCollectibleProduct = obj4.usePreviewCollectibleProduct(selectedProduct, tmp7[0], tmp15);
  let obj5 = require(ref1[25]);
  const collectiblesAnalyticsContext = obj5.useCollectiblesAnalyticsContext();
  obj = {};
  tmp17 = callback(trackPdpClick.useState(selectedProduct.skuId), 2);
  obj.type = require(ref1[27]).ImpressionTypes.HALFSHEET;
  obj.name = require(ref1[27]).ImpressionNames.SHOP_PRODUCT_DETAIL;
  obj1 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations };
  let cardId;
  if (null != collectiblesAnalyticsContext) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  obj1.card_id = cardId;
  let tilePosition;
  if (null != collectiblesAnalyticsContext) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  obj1.position_in_section = tilePosition;
  let sessionId;
  if (null != collectiblesAnalyticsContext) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  obj1.shop_session_id = sessionId;
  obj1.product_sku_ids = tmp9;
  obj.properties = obj1;
  analyticsLocations(ref1[26])(obj);
  obj2 = { product, variantIndex: first, analyticsLocations, setShouldReset: tmp8 };
  let tmp28;
  if (null != collectiblesAnalyticsContext) {
    tmp28 = collectiblesAnalyticsContext;
  }
  obj2.shopAnalyticsContext = tmp28;
  const tmp29 = (function useHandlePreviewPress(product) {
    product = product.product;
    let closure_0 = product;
    const variantIndex = product.variantIndex;
    const analyticsLocations = product.analyticsLocations;
    const shopAnalyticsContext = product.shopAnalyticsContext;
    const setShouldReset = product.setShouldReset;
    const currentUser = product(ref1[15]).useCurrentUser();
    const items = [product, variantIndex, setShouldReset, currentUser.id, analyticsLocations, shopAnalyticsContext];
    return trackPdpClick.useCallback(() => {
      setShouldReset(false);
      analyticsLocations(ref1[16])({
        userId: currentUser.id,
        isPreviewingChanges: true,
        sourceAnalyticsLocations: analyticsLocations,
        onClose() {
          let obj = product(ref1[17]);
          obj = { product: outer1_0, initialVariantIndex: outer1_1, analyticsLocations: outer1_2, shopAnalyticsContext: outer1_3 };
          return obj.openProductDetailsActionSheet(obj);
        }
      });
    }, items);
  })(obj2);
  let obj9 = require(ref1[28]);
  callback3 = obj9.useShopProductItems(product);
  const tmp30 = product.type === require(ref1[14]).CollectiblesItemType.BUNDLE;
  c7 = tmp30;
  const tmp23 = analyticsLocations(ref1[26]);
  [type, tmp32] = callback(trackPdpClick.useState(() => {
    if (c7) {
      if (null != closure_6.firstProfileEffect) {
        let NAMEPLATE = product(ref1[14]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != closure_6.firstAvatarDecoration) {
        NAMEPLATE = product(ref1[14]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != closure_6.firstNameplate) {
        NAMEPLATE = product(ref1[14]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  c8 = tmp32;
  const tmp31 = callback(trackPdpClick.useState(() => {
    if (c7) {
      if (null != closure_6.firstProfileEffect) {
        let NAMEPLATE = product(ref1[14]).CollectiblesItemType.PROFILE_EFFECT;
      } else if (null != closure_6.firstAvatarDecoration) {
        NAMEPLATE = product(ref1[14]).CollectiblesItemType.AVATAR_DECORATION;
      } else if (null != closure_6.firstNameplate) {
        NAMEPLATE = product(ref1[14]).CollectiblesItemType.NAMEPLATE;
      }
      return NAMEPLATE;
    }
  }), 2);
  if (!tmp30) {
    type = selectedProduct.type;
  }
  let tmp34 = null != type;
  if (tmp34) {
    let tmp37 = type === require(ref1[14]).CollectiblesItemType.PROFILE_EFFECT;
    if (!tmp37) {
      tmp37 = type === require(ref1[14]).CollectiblesItemType.PROFILE_FRAME;
    }
    if (!tmp37) {
      tmp37 = type === require(ref1[14]).CollectiblesItemType.AVATAR_DECORATION;
    }
    tmp34 = tmp37;
  }
  const items2 = [product, tmp7[1]];
  const items3 = [analyticsLocations, product.skuId];
  const tmp33 = callback2((type) => {
    _undefined2(type);
    _undefined3(type.type);
  }, []);
  const effect = trackPdpClick.useEffect(() => {
    let obj = analyticsLocations(ref1[29]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(outer1_10.OPEN_MODAL, obj);
  }, items3);
  const hideBadge = product.hideBadge;
  let obj10 = require(ref1[30]);
  const isProfileFramesEarlyAccessPhase = obj10.useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmp42 = callback2(() => {
    if (product.type === product(ref1[14]).CollectiblesItemType.BUNDLE) {
      _undefined(false);
    }
  }, items2);
  let obj11 = require(ref1[10]);
  let obj12 = require(ref1[11]);
  const isThemeDarkResult = obj12.isThemeDark(obj11.useThemeContext().theme);
  let tmp47 = selectedProduct;
  if (tmp30) {
    tmp47 = selectedProduct;
    if (null != tmp15) {
      const obj3 = {};
      ({ skuId: obj14.skuId, type: obj14.type } = tmp15);
      const items4 = [tmp15];
      obj3.items = items4;
      tmp47 = obj3;
    }
  }
  if (tmp45) {
    let tmp48 = callback4(analyticsLocations(ref1[31]), { location: "ProductDetailsActionSheet", disablePressable: true });
  } else {
    tmp48 = null;
    if (null == product.badgeOverride) {
      let obj14 = require(ref1[22]);
      if (obj14.isDynamicProduct(tmp47)) {
        if (!hideBadge) {
          obj4 = {};
          const intl = require(ref1[12]).intl;
          obj4.accessibilityLabel = intl.string(require(ref1[12]).t["+drfVi"]);
          obj5 = { icon: require(ref1[34]).DiceIcon };
          const intl2 = require(ref1[12]).intl;
          obj5.label = intl2.string(require(ref1[12]).t["+drfVi"]);
          obj5.isDark = isThemeDarkResult;
          obj4.children = callback4(require(ref1[33]).IconTextBadge, obj5);
          tmp48 = callback4(require(ref1[32]).DynamicBadgeTooltip, obj4);
        }
      }
      const obj18 = require(ref1[22]);
      tmp48 = null;
      if (tmp57) {
        const obj6 = { icon: require(ref1[35]).OrbsIcon };
        const intl3 = require(ref1[12]).intl;
        obj6.label = intl3.string(require(ref1[12]).t["0TmQRG"]);
        obj6.isDark = isThemeDarkResult;
        tmp48 = callback4(require(ref1[33]).IconTextBadge, obj6);
      }
      tmp57 = require(ref1[22]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  let tmp64 = paymentGateway === constants.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" }).enabled;
  if (!tmp64) {
    let result = paymentGateway === constants.GOOGLE;
    if (result) {
      result = require(ref1[36]).isGooglePlayBillingSupported();
      const obj20 = require(ref1[36]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp64 = result;
  }
  tmp45 = selectedProduct.type === require(ref1[14]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const obj7 = { value: analyticsLocations };
  const obj8 = {
    scrollable: true,
    startExpanded: true,
    onExpand(arg0) {
      const current = ref1.current;
      let scrollToEndResult;
      if (null != current) {
        const obj = { animated: true };
        scrollToEndResult = current.scrollToEnd(obj);
      }
      return scrollToEndResult;
    },
    onDismiss() {
      return trackPdpClick(outer1_9.CLOSE_DETAIL);
    },
    ref
  };
  obj9 = { scrollsToTop: false, style: tmp2.container, ref: ref1 };
  obj10 = { style: tmp2.actionButtons };
  if (tmp34) {
    obj11 = { handlePreviewPress: tmp29, onTrackPress: trackPdpClick };
    tmp34 = callback4(PreviewProfileTrigger, obj11);
  }
  const items5 = [tmp34, callback4(analyticsLocations(ref1[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj10.children = items5;
  const items6 = [closure_14(c8, obj10), , , , , ];
  let tmp77 = null != tmp48;
  if (tmp77) {
    obj12 = { style: tmp2.badgeWrapper, children: tmp48 };
    tmp77 = callback4(c8, obj12);
  }
  items6[1] = tmp77;
  items6[2] = callback4(analyticsLocations(ref1[41]), { product: selectedProduct, handlePreviewPress: tmp29, onTrackPress: trackPdpClick, onBundleActiveItemTypeChange: tmp32, onBundleActiveItemChange: tmp33 });
  items6[3] = callback4(analyticsLocations(ref1[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items6[4] = callback4(analyticsLocations(ref1[43]), { product, selectedVariantIndex: first, onVariantSelect: tmp10[1] });
  const obj13 = { size: analyticsLocations(ref1[8]).space.PX_16 };
  items6[5] = callback4(require(ref1[44]).Spacer, obj13);
  obj9.children = items6;
  const items7 = [closure_14(require(ref1[39]).BottomSheetScrollView, obj9), ];
  obj14 = { skuIDs: [], activeSubscription: null };
  const obj15 = { paymentGateway, orderRequired: tmp64 };
  const items8 = [selectedProduct.skuId];
  obj15.skuIds = items8;
  obj15.isGift = false;
  obj15.activeSubscription = null;
  obj15.initialExternalGatewayFacet = analyticsLocations(ref1[37])(selectedProduct);
  obj15.onOrderRetryCancellation = function onOrderRetryCancellation() {
    return analyticsLocations(ref1[47]).hideActionSheet(product(ref1[17]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
  };
  const tmp69 = analyticsLocations(ref1[37])(selectedProduct);
  const tmp70 = callback4;
  const tmp71 = closure_14;
  const tmp72 = closure_14;
  const tmp73 = closure_14;
  const tmp74 = c8;
  obj15.children = callback4(analyticsLocations(ref1[48]), { onBuy: tmp42, product: selectedProduct, analyticsLocations, onTrackPress: trackPdpClick });
  obj14.children = callback4(analyticsLocations(ref1[46]), obj15, selectedProduct.skuId);
  items7[1] = callback4(require(ref1[45]).NativePaymentContextProvider, obj14);
  obj8.children = items7;
  obj7.children = tmp71(require(ref1[38]).BottomSheet, obj8);
  return tmp70(require(ref1[20]).AnalyticsLocationProvider, obj7);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  let obj = require(477) /* set */;
  obj = {};
  const merged = Object.assign(arg0);
  obj["paymentGateway"] = obj.isIOS() ? closure_11.APPLE_ADVANCED_COMMERCE : closure_11.GOOGLE;
  return callback4(ProductDetailsActionSheetInner, obj);
}
({ useCallback: closure_5, useMemo: closure_6 } = result);
({ Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
({ PaymentGateways: closure_11, ThemeTypes: closure_12 } = sum);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = {};
_createForOfIteratorHelperLoose = { container: { position: "relative", flex: 1 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, right: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 2, flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.actionButtons = _createForOfIteratorHelperLoose;
let obj1 = { width: require("getButtonPadding").MEDIUM_BUTTON_HEIGHT, height: require("getButtonPadding").MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.previewProfileButton = obj1;
let obj2 = {};
obj2.backgroundColor = ManaContext.setColorOpacity("white", 0.72);
_createForOfIteratorHelperLoose.previewProfileButtonLight = obj2;
let obj3 = {};
obj3.backgroundColor = ManaContext.setColorOpacity("white", 0.62);
_createForOfIteratorHelperLoose.previewProfileButtonLightPressed = obj3;
_createForOfIteratorHelperLoose.previewProfileButtonDark = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
ManaContext = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
_createForOfIteratorHelperLoose.previewProfileButtonDarkPressed = ManaContext;
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.previewProfileButtonMidnight = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
ManaContext = { position: "absolute", top: 0, left: require("_createForOfIteratorHelperLoose").space.PX_16, zIndex: 2 };
_createForOfIteratorHelperLoose.badgeWrapper = ManaContext;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  let obj = Object.create(null);
  obj.shopAnalyticsContext = 0;
  const merged = Object.assign(shopAnalyticsContext, obj);
  obj = { newValue: shopAnalyticsContext };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = callback4(ProductDetailsActionSheetWithOrderCTX, obj);
  return callback4(require(8666) /* useCollectiblesAnalyticsContext */.CollectiblesAnalyticsProvider, obj);
};

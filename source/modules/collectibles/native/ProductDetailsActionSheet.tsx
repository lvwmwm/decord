// Module ID: 8729
// Function ID: 69043
// Name: PreviewProfileTrigger
// Dependencies: []
// Exports: default

// Module 8729 (PreviewProfileTrigger)
function PreviewProfileTrigger(handlePreviewPress) {
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const arg1 = handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const importDefault = onTrackPress;
  let React;
  let closure_5;
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[10]);
  const theme = obj.useThemeContext().theme;
  const isThemeLightResult = arg1(dependencyMap[11]).isThemeLight(theme);
  let closure_3 = theme === constants2.MIDNIGHT;
  React = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  const items = [handlePreviewPress, onTrackPress];
  obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [tmp.previewProfileButton, closure_4, , ];
      let previewProfileButtonMidnight = closure_3;
      if (closure_3) {
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
      onTrackPress(constants.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button"
  };
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.3Qcx6K);
  obj = { size: "md", color: importDefault(dependencyMap[8]).colors.INTERACTIVE_ICON_DEFAULT };
  obj.children = callback3(arg1(dependencyMap[13]).EyeIcon, obj);
  return callback3(closure_7, obj);
}
function ProductDetailsActionSheetInner(product) {
  let tmp15;
  let tmp16;
  let tmp32;
  let type;
  product = product.product;
  const arg1 = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations = product.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const importDefault = analyticsLocations;
  const paymentGateway = product.paymentGateway;
  let dependencyMap;
  let callback;
  let React;
  tmp16 = undefined;
  let callback2;
  let tmp30;
  tmp32 = undefined;
  const OTPACOMOrderExperiment = arg1(dependencyMap[18]).OTPACOMOrderExperiment;
  let obj = arg1(dependencyMap[19]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "ProductDetailsActionSheetInner" });
  const tmp2 = callback4();
  const ref1 = React.useRef(null);
  dependencyMap = ref1;
  const items = [];
  const ref = React.useRef(null);
  const tmp5 = importDefault(dependencyMap[20]);
  items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = importDefault(dependencyMap[21]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  analyticsLocations = tmp5(items).analyticsLocations;
  const tmp7 = callback(React.useState(true), 2);
  callback = tmp8;
  const items1 = [product];
  const tmp9 = callback2(() => product(ref1[22]).getProductSkuIds(product), items1);
  const tmp10 = callback(React.useState(num), 2);
  const first = tmp10[0];
  let obj1 = arg1(dependencyMap[22]);
  const selectedProduct = obj1.getSelectedProduct(product, first);
  let obj2 = arg1(dependencyMap[23]);
  obj = { skuId: selectedProduct.skuId, productSkuIds: tmp9, analyticsLocations };
  const trackPdpClick = obj2.useTrackPdpClick(obj);
  React = trackPdpClick;
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  [tmp15, tmp16] = callback(React.useState(undefined), 2);
  const tmp14 = callback(React.useState(undefined), 2);
  if (selectedProduct.skuId !== tmp17[0]) {
    tmp18(selectedProduct.skuId);
    tmp16(undefined);
  }
  let obj4 = arg1(dependencyMap[24]);
  const previewCollectibleProduct = obj4.usePreviewCollectibleProduct(selectedProduct, tmp7[0], tmp15);
  let obj5 = arg1(dependencyMap[25]);
  const collectiblesAnalyticsContext = obj5.useCollectiblesAnalyticsContext();
  obj = {};
  const tmp17 = callback(React.useState(selectedProduct.skuId), 2);
  obj.type = arg1(dependencyMap[27]).ImpressionTypes.HALFSHEET;
  obj.name = arg1(dependencyMap[27]).ImpressionNames.SHOP_PRODUCT_DETAIL;
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
  importDefault(dependencyMap[26])(obj);
  obj2 = { product, variantIndex: first, analyticsLocations, setShouldReset: tmp8 };
  let tmp28;
  if (null != collectiblesAnalyticsContext) {
    tmp28 = collectiblesAnalyticsContext;
  }
  obj2.shopAnalyticsContext = tmp28;
  const tmp29 = function useHandlePreviewPress(product) {
    product = product.product;
    const variantIndex = product.variantIndex;
    let analyticsLocations = variantIndex;
    analyticsLocations = product.analyticsLocations;
    const shopAnalyticsContext = product.shopAnalyticsContext;
    const setShouldReset = product.setShouldReset;
    const trackPdpClick = setShouldReset;
    const currentUser = product(analyticsLocations[15]).useCurrentUser();
    const items = [product, variantIndex, setShouldReset, currentUser.id, analyticsLocations, shopAnalyticsContext];
    return trackPdpClick.useCallback(() => {
      setShouldReset(false);
      variantIndex(analyticsLocations[16])({
        userId: currentUser.id,
        isPreviewingChanges: true,
        sourceAnalyticsLocations: analyticsLocations,
        onClose() {
          let obj = callback(closure_2[17]);
          obj = { product: callback, initialVariantIndex: closure_1, analyticsLocations: closure_2, shopAnalyticsContext: closure_3 };
          return obj.openProductDetailsActionSheet(obj);
        }
      });
    }, items);
  }(obj2);
  let obj9 = arg1(dependencyMap[28]);
  callback2 = obj9.useShopProductItems(product);
  tmp30 = product.type === arg1(dependencyMap[14]).CollectiblesItemType.BUNDLE;
  const tmp23 = importDefault(dependencyMap[26]);
  [type, tmp32] = callback(React.useState(() => {
    if (tmp30) {
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
  const tmp31 = callback(React.useState(() => {
    if (tmp30) {
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
    let tmp37 = type === arg1(dependencyMap[14]).CollectiblesItemType.PROFILE_EFFECT;
    if (!tmp37) {
      tmp37 = type === arg1(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME;
    }
    if (!tmp37) {
      tmp37 = type === arg1(dependencyMap[14]).CollectiblesItemType.AVATAR_DECORATION;
    }
    tmp34 = tmp37;
  }
  const items2 = [product, tmp7[1]];
  const items3 = [analyticsLocations, product.skuId];
  const tmp33 = tmp16((type) => {
    tmp16(type);
    tmp32(type.type);
  }, []);
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(ref1[29]);
    obj = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations, sku_id: product.skuId };
    obj.track(constants2.OPEN_MODAL, obj);
  }, items3);
  const hideBadge = product.hideBadge;
  let obj10 = arg1(dependencyMap[30]);
  const isProfileFramesEarlyAccessPhase = obj10.useIsProfileFramesEarlyAccessPhase("ProductDetailsActionSheet");
  const tmp42 = tmp16(() => {
    if (product.type === product(ref1[14]).CollectiblesItemType.BUNDLE) {
      tmp8(false);
    }
  }, items2);
  let obj11 = arg1(dependencyMap[10]);
  let obj12 = arg1(dependencyMap[11]);
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
    let tmp48 = callback3(importDefault(dependencyMap[31]), {});
  } else {
    tmp48 = null;
    if (null == product.badgeOverride) {
      let obj14 = arg1(dependencyMap[22]);
      if (obj14.isDynamicProduct(tmp47)) {
        if (!hideBadge) {
          obj4 = {};
          const intl = arg1(dependencyMap[12]).intl;
          obj4.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.+drfVi);
          obj5 = { icon: arg1(dependencyMap[34]).DiceIcon };
          const intl2 = arg1(dependencyMap[12]).intl;
          obj5.label = intl2.string(arg1(dependencyMap[12]).t.+drfVi);
          obj5.isDark = isThemeDarkResult;
          obj4.children = callback3(arg1(dependencyMap[33]).IconTextBadge, obj5);
          tmp48 = callback3(arg1(dependencyMap[32]).DynamicBadgeTooltip, obj4);
        }
      }
      const obj18 = arg1(dependencyMap[22]);
      tmp48 = null;
      if (tmp57) {
        const obj6 = { icon: arg1(dependencyMap[35]).OrbsIcon };
        const intl3 = arg1(dependencyMap[12]).intl;
        obj6.label = intl3.string(arg1(dependencyMap[12]).t.0TmQRG);
        obj6.isDark = isThemeDarkResult;
        tmp48 = callback3(arg1(dependencyMap[33]).IconTextBadge, obj6);
      }
      const tmp57 = arg1(dependencyMap[22]).isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    }
  }
  let tmp64 = paymentGateway === constants.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" }).enabled;
  if (!tmp64) {
    let result = paymentGateway === constants.GOOGLE;
    if (result) {
      result = arg1(dependencyMap[36]).isGooglePlayBillingSupported();
      const obj20 = arg1(dependencyMap[36]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp64 = result;
  }
  const tmp45 = selectedProduct.type === arg1(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase && !hideBadge;
  const obj7 = { value: analyticsLocations };
  const obj8 = {
    1891290120: null,
    -475247768: null,
    onExpand() {
      const current = ref1.current;
      let scrollToEndResult;
      if (null != current) {
        const obj = { animated: true };
        scrollToEndResult = current.scrollToEnd(obj);
      }
      return scrollToEndResult;
    },
    onDismiss() {
      return trackPdpClick(constants.CLOSE_DETAIL);
    },
    ref
  };
  obj9 = { scrollsToTop: false, style: tmp2.container, ref: ref1 };
  obj10 = { style: tmp2.actionButtons };
  if (tmp34) {
    obj11 = { handlePreviewPress: tmp29, onTrackPress: trackPdpClick };
    tmp34 = callback3(PreviewProfileTrigger, obj11);
  }
  const items5 = [tmp34, callback3(importDefault(dependencyMap[40]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  obj10.children = items5;
  const items6 = [closure_14(tmp32, obj10), , , , , ];
  let tmp77 = null != tmp48;
  if (tmp77) {
    obj12 = { style: tmp2.badgeWrapper, children: tmp48 };
    tmp77 = callback3(tmp32, obj12);
  }
  items6[1] = tmp77;
  items6[2] = callback3(importDefault(dependencyMap[41]), { product: selectedProduct, handlePreviewPress: tmp29, onTrackPress: trackPdpClick, onBundleActiveItemTypeChange: tmp32, onBundleActiveItemChange: tmp33 });
  items6[3] = callback3(importDefault(dependencyMap[42]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items6[4] = callback3(importDefault(dependencyMap[43]), { product, selectedVariantIndex: first, onVariantSelect: tmp10[1] });
  const obj13 = { size: importDefault(dependencyMap[8]).space.PX_16 };
  items6[5] = callback3(arg1(dependencyMap[44]).Spacer, obj13);
  obj9.children = items6;
  const items7 = [closure_14(arg1(dependencyMap[39]).BottomSheetScrollView, obj9), ];
  obj14 = { skuIDs: [], activeSubscription: null };
  const obj15 = { paymentGateway, orderRequired: tmp64 };
  const items8 = [selectedProduct.skuId];
  obj15.skuIds = items8;
  obj15.isGift = false;
  obj15.activeSubscription = null;
  obj15.initialExternalGatewayFacet = importDefault(dependencyMap[37])(selectedProduct);
  obj15.onOrderRetryCancellation = function onOrderRetryCancellation() {
    return analyticsLocations(ref1[47]).hideActionSheet(product(ref1[17]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
  };
  const tmp69 = importDefault(dependencyMap[37])(selectedProduct);
  const tmp70 = callback3;
  const tmp71 = closure_14;
  const tmp72 = closure_14;
  const tmp73 = closure_14;
  const tmp74 = tmp32;
  obj15.children = callback3(importDefault(dependencyMap[48]), { onBuy: tmp42, product: selectedProduct, analyticsLocations, onTrackPress: trackPdpClick });
  obj14.children = callback3(importDefault(dependencyMap[46]), obj15, selectedProduct.skuId);
  items7[1] = callback3(arg1(dependencyMap[45]).NativePaymentContextProvider, obj14);
  obj8.children = items7;
  obj7.children = tmp71(arg1(dependencyMap[38]).BottomSheet, obj8);
  return tmp70(arg1(dependencyMap[20]).AnalyticsLocationProvider, obj7);
}
function ProductDetailsActionSheetWithOrderCTX(arg0) {
  let obj = arg1(dependencyMap[49]);
  obj = {};
  const merged = Object.assign(arg0);
  obj["paymentGateway"] = obj.isIOS() ? closure_11.APPLE_ADVANCED_COMMERCE : closure_11.GOOGLE;
  return callback3(ProductDetailsActionSheetInner, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ useCallback: closure_5, useMemo: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ Pressable: closure_7, View: closure_8 } = arg1(dependencyMap[2]));
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[2]);
({ PaymentGateways: closure_11, ThemeTypes: closure_12 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[6]));
let closure_15 = {};
let obj = arg1(dependencyMap[7]);
obj = { container: {} };
obj = { right: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.actionButtons = obj;
const tmp5 = arg1(dependencyMap[6]);
obj.previewProfileButton = { width: arg1(dependencyMap[9]).MEDIUM_BUTTON_HEIGHT, height: arg1(dependencyMap[9]).MEDIUM_BUTTON_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.round, borderColor: importDefault(dependencyMap[8]).colors.CONTROL_SECONDARY_BORDER_DEFAULT };
const obj2 = {};
let obj5 = arg1(dependencyMap[10]);
obj2.backgroundColor = obj5.setColorOpacity("white", 0.72);
obj.previewProfileButtonLight = obj2;
const obj3 = {};
let obj7 = arg1(dependencyMap[10]);
obj3.backgroundColor = obj7.setColorOpacity("white", 0.62);
obj.previewProfileButtonLightPressed = obj3;
const obj1 = { width: arg1(dependencyMap[9]).MEDIUM_BUTTON_HEIGHT, height: arg1(dependencyMap[9]).MEDIUM_BUTTON_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.round, borderColor: importDefault(dependencyMap[8]).colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj.previewProfileButtonDark = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj.previewProfileButtonDarkPressed = obj5;
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.previewProfileButtonMidnight = { borderColor: importDefault(dependencyMap[8]).colors.BORDER_STRONG };
obj7 = { left: importDefault(dependencyMap[8]).space.PX_16 };
obj.badgeWrapper = obj7;
let closure_16 = obj.createStyles(obj);
const obj6 = { borderColor: importDefault(dependencyMap[8]).colors.BORDER_STRONG };
const result = arg1(dependencyMap[50]).fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

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
  obj.children = callback3(ProductDetailsActionSheetWithOrderCTX, obj);
  return callback3(arg1(dependencyMap[25]).CollectiblesAnalyticsProvider, obj);
};

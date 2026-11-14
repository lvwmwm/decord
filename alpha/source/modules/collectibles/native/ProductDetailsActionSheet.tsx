// Module ID: 9408
// Function ID: 9409
// Name: ProductDetailsActionSheet
// Dependencies: [32, 19, 17, 8485, 1074, 1072, 1083, 21, 3, 5306, 575, 5942, 5377, 5313, 1113, 7635, 2114, 9409, 8476, 9407, 8496, 9410, 9411, 9412, 7918, 7937, 9419, 9424, 9420, 6338, 1264, 1256, 504, 9425, 9433, 9437, 8497, 9439, 9442, 9444, 9454, 5570, 9455, 9521, 9523, 15489, 15499, 1187, 15500, 15515, 5566, 10457, 11671, 10433, 9723, 8596, 5936, 15518, 9405, 2]
// Exports: default

// Module 9408 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5566 */;
import ButtonConstants from "ButtonConstants" /* 5942 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8496 */;
import ShopStandalonePdpMobileExperiment from "ShopStandalonePdpMobileExperiment" /* 9405 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9420 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 10433 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8485 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import native_mod from "native" /* 5377 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let rect1;
let size;
let unpackModuleId;
function PreviewProfileTrigger(handlePreviewPress) {
  let EyeIcon;
  let closure_2;
  let closure_4;
  let intl;
  let obj4;
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_19();
  dependencyMap = tmp;
  const obj = handlePreviewPress(5377);
  const theme = obj.useThemeContext().theme;
  const obj2 = handlePreviewPress(5313);
  const isThemeLightResult = obj2.isThemeLight(theme);
  let closure_3 = theme === ThemeTypes.ONYX;
  react = isThemeLightResult ? tmp.previewProfileButtonLight : tmp.previewProfileButtonDark;
  let closure_5 = isThemeLightResult ? tmp.previewProfileButtonLightPressed : tmp.previewProfileButtonDarkPressed;
  let items = [handlePreviewPress, onTrackPress];
  const obj3 = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_2.previewProfileButton, closure_4, closure_3 && closure_2.previewProfileButtonMidnight, ];
      if (pressed) {
        pressed = closure_5;
      }
      items[3] = pressed;
      return items;
    },
    onPress: react.useCallback(() => {
      onTrackPress(ShopCtaEnum.FULL_PROFILE_PREVIEW_BUTTON);
      handlePreviewPress();
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: intl.string(handlePreviewPress(1113).t["3Qcx6K"]),
    children: closure_14(EyeIcon, obj4)
  };
  intl = tmp2(1113).intl;
  obj4 = { size: "md", color: onTrackPress(575).colors.INTERACTIVE_ICON_DEFAULT };
  EyeIcon = tmp2(7635).EyeIcon;
  return closure_14(closure_7, obj3);
}
function ProductDetailsActionSheetContent(product) {
  let IconTextBadge;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c7;
  let c8;
  let c9;
  let cardId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj5;
  let obj8;
  let sessionId;
  let tilePosition;
  let tmp17;
  let tmp18;
  let tmp23;
  let tmp24;
  let tmp55;
  let tmp57;
  let type;
  const f98119 = () => {
    let tmp;
    if (closure_6) {
      const first = require.items[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      tmp = type;
    }
    return tmp;
  };
  product = product.product;
  require = product;
  let num = product.initialVariantIndex;
  if (num === undefined) {
    num = 0;
  }
  let analyticsLocations1 = product.analyticsLocations;
  if (analyticsLocations1 === undefined) {
    analyticsLocations1 = [];
  }
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let ref1;
  let selectedProduct;
  let trackPdpClick;
  let c5;
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let closure_10;
  const tmp3 = ref1;
  const ref = product.ref;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp5 = closure_19();
  let obj = require("CollectiblesPromotionsEndpointMobileExperiment");
  const collectiblesPromotionEndpointReferenceMobile = obj.useCollectiblesPromotionEndpointReferenceMobile("ProductDetailsActionSheet");
  let tmp9;
  const tmp8 = analyticsLocations1(ref1[23]);
  if (collectiblesPromotionEndpointReferenceMobile) {
    tmp9 = closure_12;
  }
  tmp8(tmp9);
  let obj2 = trackPdpClick;
  ref1 = trackPdpClick.useRef(null);
  const items = [];
  const tmp7Result = analyticsLocations1(tmp3[24]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations1, 0);
  items[arraySpreadResult] = analyticsLocations1(tmp3[25]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp7Result(items).analyticsLocations;
  const items1 = [product];
  const tmp14 = closure_6(() => {
    const obj = CollectiblesProductUtils;
    return obj.getProductSkuIds(require);
  }, items1);
  [tmp17, tmp18] = selectedProduct(trackPdpClick.useState(num), 2);
  const tmp16 = selectedProduct(trackPdpClick.useState(num), 2);
  const tmp2Result = require("CollectiblesProductUtils");
  selectedProduct = tmp2Result.getSelectedProduct(product, tmp17);
  let obj3 = { skuId: selectedProduct.skuId, productSkuIds: tmp14, analyticsLocations };
  const tmp2Result13 = require("useTrackPdpClick");
  trackPdpClick = tmp2Result13.useTrackPdpClick(obj3);
  const items2 = [trackPdpClick];
  const imperativeHandle = trackPdpClick.useImperativeHandle(ref, () => {
    let ref;
    return {
      scrollToEnd() {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: true });
        }
        return scrollToEndResult;
      },
      notifyDismissed() {
        return trackPdpClick(constants.CLOSE_DETAIL);
      }
    };
  }, items2);
  [tmp23, tmp24] = selectedProduct(trackPdpClick.useState(undefined), 2);
  c5 = tmp24;
  selectedProduct(trackPdpClick.useState(undefined), 2);
  const tmp25 = selectedProduct(trackPdpClick.useState(selectedProduct.skuId), 2);
  if (selectedProduct.skuId !== tmp25[0]) {
    tmp26(selectedProduct.skuId);
    tmp24(undefined);
  }
  const tmp2Result14 = require("useCollectibleProfileOverrides");
  const collectibleProfileOverrides = tmp2Result14.useCollectibleProfileOverrides(selectedProduct, tmp23);
  const tmp2Result15 = require("CollectiblesAnalyticsContext");
  let collectiblesAnalyticsContext = tmp2Result15.useCollectiblesAnalyticsContext();
  let obj4 = { type: tmp2(tmp3[30]).ImpressionTypes.HALFSHEET, name: tmp2(tmp3[30]).ImpressionNames.SHOP_PRODUCT_DETAIL, properties: obj5 };
  obj5 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp14 };
  cardId = undefined;
  const tmp7Result2 = analyticsLocations1(tmp3[29]);
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  tilePosition = undefined;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  sessionId = undefined;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  tmp7Result2(obj4);
  let closure_1 = tmp17;
  collectiblesAnalyticsContext = tmp36;
  const tmp2Result16 = require("useCurrentUser");
  const currentUser = tmp2Result16.useCurrentUser();
  const items3 = [product, tmp17, collectibleProfileOverrides, currentUser.id, analyticsLocations, collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile];
  const callback = obj2.useCallback(() => {
    let initialVariantIndex;
    let shopAnalyticsContext;
    let obj = {
      userId: currentUser.id,
      isPreviewingChanges: true,
      collectibleProfileOverrides,
      sourceAnalyticsLocations: analyticsLocations,
      onClose() {
        let obj2;
        if (null == stageCollectibleChangeForEditProfile) {
          const obj4 = { product, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
          const obj3 = product(analyticsLocations[19]);
          const result = obj3.openProductDetailsActionSheet(obj4);
        } else {
          const obj = { skuId: obj2.getSelectedProduct(product, initialVariantIndex).skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile: tmp };
          const openProductDetailsActionSheetForSku = product(analyticsLocations[19]).openProductDetailsActionSheetForSku;
          product(analyticsLocations[19]);
          obj2 = product(analyticsLocations[20]);
          const result1 = openProductDetailsActionSheetForSku(obj);
        }
      }
    };
    const tmp = analyticsLocations1(ref1[18])(obj);
  }, items3);
  const tmp39 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  closure_6 = tmp39;
  [type, c7] = selectedProduct(obj2.useState(f98119), 2);
  selectedProduct(obj2.useState(f98119), 2);
  const tmp41 = c5((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  if (!tmp39) {
    type = selectedProduct.type;
  }
  let tmp42 = null != type;
  if (tmp42) {
    tmp42 = type === tmp2(tmp3[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp2(tmp3[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp2(tmp3[16]).CollectiblesItemType.AVATAR_DECORATION;
    type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME || type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [analyticsLocations1, product.skuId];
  const effect = obj2.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: require.skuId };
    obj.track(unpackModuleId.OPEN_MODAL, obj2);
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp2Result17 = require("native");
  const theme = tmp2Result17.useThemeContext().theme;
  const tmp2Result18 = require("shared");
  const isThemeDarkResult = tmp2Result18.isThemeDark(theme);
  const items5 = [c9];
  let categoryWillUnpublishAt = product.categoryWillUnpublishAt;
  const tmp2Result19 = require("get initialized");
  if (categoryWillUnpublishAt == null) {
    categoryWillUnpublishAt = tmp2Result19.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  let tmp46 = selectedProduct;
  if (tmp39) {
    tmp46 = selectedProduct;
    if (null != tmp23) {
      const obj6 = { skuId: null, type: null, items: items6 };
      ({ skuId: obj14.skuId, type: obj14.type } = tmp23);
      items6 = [tmp23];
      tmp46 = obj6;
    }
  }
  let tmp47 = null;
  if (null == product.badgeOverride) {
    const tmp2Result20 = require("CollectiblesProductUtils");
    if (tmp2Result20.isDynamicProduct(tmp46)) {
      if (!hideBadge) {
        const obj7 = { accessibilityLabel: intl.string(require("intl").t["+drfVi"]), children: closure_14(IconTextBadge, obj8) };
        const DynamicBadgeTooltip = tmp2(tmp3[33]).DynamicBadgeTooltip;
        intl = tmp2(tmp3[14]).intl;
        obj8 = { icon: require("DiceIcon").DiceIcon, label: intl2.string(require("intl").t["+drfVi"]), isDark: isThemeDarkResult };
        IconTextBadge = tmp2(tmp3[34]).IconTextBadge;
        intl2 = tmp2(tmp3[14]).intl;
        tmp47 = closure_14(DynamicBadgeTooltip, obj7);
      }
    }
    if (null != categoryWillUnpublishAt) {
      const tmp2Result21 = require("CollectiblesUtils");
      if (tmp2Result21.shouldShowLimitedTimeBadge(categoryWillUnpublishAt)) {
        if (!hideBadge) {
          const obj9 = { unpublishedAt: categoryWillUnpublishAt };
          tmp47 = closure_14(tmp7(tmp3[37]), obj9);
        }
      }
    }
    tmp47 = null;
    const tmp2Result22 = require("CollectiblesProductUtils");
    const tmp50 = tmp2Result22.isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    if (tmp50) {
      const obj10 = { icon: require("OrbsIcon").OrbsIcon, label: intl3.string(require("intl").t["0TmQRG"]), isDark: isThemeDarkResult };
      const IconTextBadge2 = tmp2(tmp3[34]).IconTextBadge;
      intl3 = tmp2(tmp3[14]).intl;
      tmp47 = closure_14(IconTextBadge2, obj10);
    }
  }
  const tmp2Result23 = require("useCollectiblesPromotionForProduct");
  const collectiblesPromotionForProduct = tmp2Result23.useCollectiblesPromotionForProduct(selectedProduct);
  const tmp2Result24 = require("CollectiblesPromotionBadgeUtils");
  let tmp64Result = tmp2Result24.shouldShowPromotionBadge(collectiblesPromotionForProduct) && !hideBadge;
  [tmp55, c8] = selectedProduct(obj2.useState(false), 2);
  selectedProduct(obj2.useState(false), 2);
  [tmp57, c9] = selectedProduct(obj2.useState(null), 2);
  selectedProduct(obj2.useState(null), 2);
  const tmp15Result6 = selectedProduct(obj2.useState(0), 2);
  closure_10 = tmp15Result6[1];
  let first = tmp15Result6[0];
  const obj11 = { value: analyticsLocations, children: items10 };
  const AnalyticsLocationProvider = tmp2(tmp3[24]).AnalyticsLocationProvider;
  const obj12 = { scrollsToTop: false, style: tmp5.container, ref: ref1, children: items8 };
  const obj13 = { style: tmp5.actionButtons, children: items7 };
  const BottomSheetScrollView = tmp2(tmp3[41]).BottomSheetScrollView;
  if (tmp42) {
    const obj15 = { handlePreviewPress: callback, onTrackPress: trackPdpClick };
    tmp42 = closure_14(PreviewProfileTrigger, obj15);
  }
  items7 = [tmp42, closure_14(tmp7(tmp3[42]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  items8 = [closure_15(c8, obj13), , , , , ];
  let tmp60Result = null != tmp47 || tmp64Result;
  if (tmp60Result) {
    const obj16 = { style: tmp5.badgeWrapper, children: items9 };
    items9 = [tmp47, ];
    if (tmp64Result) {
      const obj17 = { icon: require("TagIcon").TagIcon, label: intl4.string(require("intl").t["nb5PC/"]), isDark: isThemeDarkResult };
      const IconTextBadge3 = tmp2(tmp3[34]).IconTextBadge;
      intl4 = tmp2(tmp3[14]).intl;
      tmp64Result = tmp64(IconTextBadge3, obj17);
    }
    items9[1] = tmp64Result;
    tmp60Result = tmp60(tmp61, obj16);
  }
  items8[1] = tmp60Result;
  items8[2] = closure_14(analyticsLocations1(tmp3[44]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp41 });
  items8[3] = closure_14(analyticsLocations1(tmp3[45]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = closure_14(analyticsLocations1(tmp3[46]), { product, selectedVariantIndex: tmp17, disabled: tmp55, onVariantSelect: tmp18 });
  const obj18 = { size: analyticsLocations1(tmp3[10]).space.PX_16 };
  const Spacer = tmp2(tmp3[47]).Spacer;
  items8[5] = closure_14(Spacer, obj18);
  items10 = [closure_15(BottomSheetScrollView, obj12), , ];
  const obj19 = {
    product: selectedProduct,
    analyticsLocations,
    onTrackPress: trackPdpClick,
    isBuying: tmp55,
    onStartPurchase() {
      _undefined4(selectedProduct);
      closure_10((arg0) => arg0 + 1);
      _undefined3(true);
    },
    stageCollectibleChangeForEditProfile
  };
  items10[1] = closure_14(analyticsLocations1(tmp3[48]), obj19);
  let tmp64Result2 = null != tmp57;
  if (tmp64Result2) {
    const obj20 = {
      product: tmp57,
      attempt: first,
      analyticsLocations,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp64Result2 = tmp64(tmp7(tmp3[49]), obj20);
  }
  items10[2] = tmp64Result2;
  return closure_15(AnalyticsLocationProvider, obj11);
}
function ProductDetailsActionSheetInner(arg0) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let stageCollectibleChangeForEditProfile;
  ({ product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile } = arg0);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const obj = {
    scrollable: true,
    startExpanded: true,
    onExpand() {
      const current = ref1.current;
      let scrollToEndResult;
      if (current != null) {
        scrollToEndResult = current.scrollToEnd();
      }
      return scrollToEndResult;
    },
    onDismiss() {
      const current = ref1.current;
      let notifyDismissedResult;
      if (current != null) {
        notifyDismissedResult = current.notifyDismissed();
      }
      return notifyDismissedResult;
    },
    ref,
    children: gesture(ProductDetailsActionSheetContent, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  return gesture(BottomSheet, obj);
}
function ManagedProductDetailsActionSheetInner(skuId) {
  let Button;
  let analyticsLocations;
  let c2;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let intl;
  let intl2;
  let obj8;
  let retry;
  let stageCollectibleChangeForEditProfile;
  let state;
  let tmp10;
  let tmp11;
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  let ref1;
  const tmp = skuId;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  let obj = skuId(10457);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj2 = skuId(11671);
  const getOrFetchPurchases = obj2.useGetOrFetchPurchases();
  let items = [product];
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const obj3 = closure_6(() => {
    let googleSkuIds;
    if (null != c2) {
      const items = [tmp];
      const obj = collectibles_CollectiblesUtils;
      googleSkuIds = obj.getGoogleSkuIds(items);
    } else {
      googleSkuIds = closure_18;
    }
    return googleSkuIds;
  }, items);
  const obj4 = initialVariantIndex(9723);
  set = obj4.useLoadedGoogleSkuIds(obj3);
  const everyResult = obj3.every((item) => set.has(item));
  const ref = ref1.useRef(null);
  ref1 = ref1.useRef(null);
  const items1 = [product, skuId, initialVariantIndex];
  const tmp5 = initialVariantIndex;
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      if (everyResult) {
        if (null != product) {
          const obj5 = { ref: ref1, product, initialVariantIndex: tmp9, analyticsLocations, stageCollectibleChangeForEditProfile };
          tmp11 = closure_14(ProductDetailsActionSheetContent, obj5);
          tmp10 = closure_14;
        }
        const obj6 = {
          scrollable: true,
          startExpanded: true,
          onExpand() {
                  const current = ref1.current;
                  let scrollToEndResult;
                  if (current != null) {
                    scrollToEndResult = current.scrollToEnd();
                  }
                  return scrollToEndResult;
                },
          onDismiss() {
                  const current = ref1.current;
                  let notifyDismissedResult;
                  if (current != null) {
                    notifyDismissedResult = current.notifyDismissed();
                  }
                  return notifyDismissedResult;
                },
          ref,
          children: tmp11
        };
        return tmp10(tmp(5566).BottomSheet, obj6);
      }
    }
  }
  if ("error" === state) {
    const obj7 = { Illustration: tmp(8596).NoResults, body: intl.string(tmp(1113).t.eAn6z2), children: closure_14(Button, obj8) };
    const EmptyState = tmp(1187).EmptyState;
    intl = tmp(1113).intl;
    obj8 = { text: intl2.string(tmp(1113).t["+hivLW"]), onPress: retry };
    Button = tmp(5936).Button;
    intl2 = tmp(1113).intl;
    tmp11 = closure_14(EmptyState, obj7);
    tmp10 = closure_14;
  } else {
    tmp10 = closure_14;
    tmp11 = closure_14(tmp5(15518), {});
  }
}
function ProductDetailsActionSheetWithOrderCTX(skuId) {
  let tmp9Result;
  const obj = ShopStandalonePdpMobileExperiment;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    const tmp10 = ManagedProductDetailsActionSheetInner;
    const tmp9 = gesture;
    if ("skuId" in skuId) {
      skuId = skuId.skuId;
    } else {
      skuId = skuId.product.skuId;
    }
    const obj2 = { skuId, initialVariantIndex: null, analyticsLocations: null, stageCollectibleChangeForEditProfile: null };
    ({ initialVariantIndex: obj3.initialVariantIndex, analyticsLocations: obj3.analyticsLocations, stageCollectibleChangeForEditProfile: obj3.stageCollectibleChangeForEditProfile } = skuId);
    tmp9Result = tmp9(tmp10, obj2);
  } else if ("product" in skuId) {
    const obj5 = {};
    const merged = Object.assign(skuId);
    tmp9Result = gesture(ProductDetailsActionSheetInner, obj5);
  } else {
    logger.error("ProductDetailsActionSheet opened with a skuId but no product, and the experiment is disabled");
    tmp9Result = null;
  }
  return tmp9Result;
}
let react = react_mod;
({ useCallback: hasOwnProperty, useMemo: metroRequire } = react);
({ Pressable: metroImportDefault, View: metroImportAll } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ AnalyticEvents: unpackModuleId, COLLECTIBLES_APPLICATION_ID: closure_12 } = Constants);
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = {};
const logger = new LoggerDefault("ProductDetailsActionSheet");
let closure_18 = [];
const tmp6 = new LoggerDefault("ProductDetailsActionSheet");
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", flex: 1 }, actionButtons: rect, previewProfileButton: size, previewProfileButtonLight: obj2, previewProfileButtonLightPressed: obj3, previewProfileButtonDark: obj4, previewProfileButtonDarkPressed: obj5, previewProfileButtonMidnight: obj6, badgeWrapper: rect1 };
rect = { position: "absolute", top: 0, right: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: ButtonConstants.MEDIUM_BUTTON_HEIGHT, height: ButtonConstants.MEDIUM_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT };
obj2 = { backgroundColor: native.setColorOpacity("white", 0.72) };
native = native_mod;
obj3 = { backgroundColor: native.setColorOpacity("white", 0.62) };
native = native_mod;
obj4 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE };
obj6 = { borderColor: nativeDefault.colors.BORDER_STRONG };
rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2, flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_19 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  let obj2;
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_16;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: gesture(ProductDetailsActionSheetWithOrderCTX, obj2) };
  obj2 = {};
  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
  const merged1 = Object.assign(merged);
  return gesture(CollectiblesAnalyticsProvider, obj);
};

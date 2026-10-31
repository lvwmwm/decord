// Module ID: 8748
// Function ID: 8749
// Name: ProductDetailsActionSheet
// Dependencies: [32, 19, 17, 7720, 1074, 1072, 1083, 21, 3, 5014, 575, 5640, 5080, 5021, 1113, 7137, 1987, 8749, 8750, 8747, 7731, 9909, 7326, 7351, 15022, 15023, 9462, 6028, 1260, 1252, 504, 15024, 9526, 9529, 7732, 9531, 9532, 5275, 9534, 15025, 15035, 15046, 1187, 15047, 15059, 5272, 9580, 10604, 8805, 5634, 15062, 8745, 2]
// Exports: default

// Module 8748 (ProductDetailsActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7731 */;
import ShopStandalonePdpMobileExperiment from "ShopStandalonePdpMobileExperiment" /* 8745 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9462 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import native_mod from "native" /* 5080 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let closure_14;
let hasOwnProperty;
let map1;
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
function PreviewProfileTrigger(handlePreviewPress) {
  let EyeIcon;
  let closure_2;
  let closure_4;
  let intl;
  let obj4;
  handlePreviewPress = handlePreviewPress.handlePreviewPress;
  const onTrackPress = handlePreviewPress.onTrackPress;
  const tmp = closure_17();
  dependencyMap = tmp;
  const obj = handlePreviewPress(5080);
  const theme = obj.useThemeContext().theme;
  const obj2 = handlePreviewPress(5021);
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
    children: closure_13(EyeIcon, obj4)
  };
  intl = tmp2(1113).intl;
  obj4 = { size: "md", color: onTrackPress(575).colors.INTERACTIVE_ICON_DEFAULT };
  EyeIcon = tmp2(7137).EyeIcon;
  return closure_13(closure_7, obj3);
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
  let items6;
  let items7;
  let items8;
  let items9;
  let obj6;
  let obj9;
  let sessionId;
  let tilePosition;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp20;
  let tmp49;
  let tmp51;
  let type;
  const f93182 = () => {
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
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let closure_10;
  const ref = product.ref;
  const OTPACOMOrderExperiment = require("ACOMExperiments").OTPACOMOrderExperiment;
  const config = OTPACOMOrderExperiment.useConfig({ location: "ProductDetailsActionSheetInner" });
  const tmp5 = closure_17();
  let obj = trackPdpClick;
  ref1 = trackPdpClick.useRef(null);
  const items = [];
  const tmp8 = analyticsLocations1(ref1[22]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations1, 0);
  items[arraySpreadResult] = analyticsLocations1(ref1[23]).COLLECTIBLES_SHOP_PROFILE_PREVIEW;
  const analyticsLocations = tmp8(items).analyticsLocations;
  const items1 = [product];
  const tmp10 = closure_6(() => {
    const obj = CollectiblesProductUtils;
    return obj.getProductSkuIds(require);
  }, items1);
  [tmp13, tmp14] = selectedProduct(trackPdpClick.useState(num), 2);
  const tmp12 = selectedProduct(trackPdpClick.useState(num), 2);
  let obj2 = require("CollectiblesProductUtils");
  selectedProduct = obj2.getSelectedProduct(product, tmp13);
  let obj3 = require("useTrackPdpClick");
  let obj4 = { skuId: selectedProduct.skuId, productSkuIds: tmp10, analyticsLocations };
  trackPdpClick = obj3.useTrackPdpClick(obj4);
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
  [tmp19, tmp20] = selectedProduct(trackPdpClick.useState(undefined), 2);
  let c5 = tmp20;
  selectedProduct(trackPdpClick.useState(undefined), 2);
  const tmp21 = selectedProduct(trackPdpClick.useState(selectedProduct.skuId), 2);
  if (selectedProduct.skuId !== tmp21[0]) {
    tmp22(selectedProduct.skuId);
    tmp20(undefined);
  }
  const tmp2Result = require("useCollectibleProfileOverrides");
  const collectibleProfileOverrides = tmp2Result.useCollectibleProfileOverrides(selectedProduct, tmp19);
  const tmp2Result9 = require("CollectiblesAnalyticsContext");
  let collectiblesAnalyticsContext = tmp2Result9.useCollectiblesAnalyticsContext();
  const obj5 = { type: require("discord_common/AnalyticsUtils").ImpressionTypes.HALFSHEET, name: require("discord_common/AnalyticsUtils").ImpressionNames.SHOP_PRODUCT_DETAIL, properties: obj6 };
  obj6 = { sku_id: selectedProduct.skuId, location_stack: analyticsLocations, card_id: cardId, position_in_section: tilePosition, shop_session_id: sessionId, product_sku_ids: tmp10 };
  cardId = undefined;
  const tmp7Result = analyticsLocations1(ref1[27]);
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
  tmp7Result(obj5);
  let closure_1 = tmp13;
  collectiblesAnalyticsContext = tmp32;
  const tmp2Result10 = require("useCurrentUser");
  const currentUser = tmp2Result10.useCurrentUser();
  const items3 = [product, tmp13, collectibleProfileOverrides, currentUser.id, analyticsLocations, collectiblesAnalyticsContext, stageCollectibleChangeForEditProfile];
  const callback = obj.useCallback(() => {
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
  const tmp35 = product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE;
  closure_6 = tmp35;
  [type, c7] = selectedProduct(obj.useState(f93182), 2);
  selectedProduct(obj.useState(f93182), 2);
  const tmp37 = c5((type) => {
    _undefined(type);
    _undefined2(type.type);
  }, []);
  if (!tmp35) {
    type = selectedProduct.type;
  }
  let tmp38 = null != type;
  if (tmp38) {
    tmp38 = type === tmp2(tmp3[16]).CollectiblesItemType.PROFILE_EFFECT || type === tmp2(tmp3[16]).CollectiblesItemType.PROFILE_FRAME || type === tmp2(tmp3[16]).CollectiblesItemType.AVATAR_DECORATION;
    type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME || type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION;
  }
  const items4 = [analyticsLocations1, product.skuId];
  const effect = obj.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Collectibles Shop Details Modal", location_stack: analyticsLocations1, sku_id: require.skuId };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  }, items4);
  const hideBadge = product.hideBadge;
  const tmp2Result11 = require("native");
  const theme = tmp2Result11.useThemeContext().theme;
  const tmp2Result12 = require("shared");
  const isThemeDarkResult = tmp2Result12.isThemeDark(theme);
  const items5 = [c9];
  let categoryWillUnpublishAt = product.categoryWillUnpublishAt;
  const tmp2Result13 = require("get initialized");
  if (categoryWillUnpublishAt == null) {
    categoryWillUnpublishAt = tmp2Result13.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(require.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  let tmp42 = selectedProduct;
  if (tmp35) {
    tmp42 = selectedProduct;
    if (null != tmp19) {
      const obj7 = { skuId: null, type: null, items: items6 };
      ({ skuId: obj13.skuId, type: obj13.type } = tmp19);
      items6 = [tmp19];
      tmp42 = obj7;
    }
  }
  let tmp43 = null;
  if (null == product.badgeOverride) {
    const tmp2Result14 = require("CollectiblesProductUtils");
    if (tmp2Result14.isDynamicProduct(tmp42)) {
      if (!hideBadge) {
        const obj8 = { accessibilityLabel: intl.string(require("intl").t["+drfVi"]), children: closure_13(IconTextBadge, obj9) };
        const DynamicBadgeTooltip = tmp2(tmp3[31]).DynamicBadgeTooltip;
        intl = tmp2(tmp3[14]).intl;
        obj9 = { icon: require("DiceIcon").DiceIcon, label: intl2.string(require("intl").t["+drfVi"]), isDark: isThemeDarkResult };
        IconTextBadge = tmp2(tmp3[32]).IconTextBadge;
        intl2 = tmp2(tmp3[14]).intl;
        tmp43 = closure_13(DynamicBadgeTooltip, obj8);
      }
    }
    if (null != categoryWillUnpublishAt) {
      const tmp2Result15 = require("CollectiblesUtils");
      if (tmp2Result15.shouldShowLimitedTimeBadge(categoryWillUnpublishAt)) {
        if (!hideBadge) {
          const obj10 = { unpublishedAt: categoryWillUnpublishAt };
          tmp43 = closure_13(tmp7(tmp3[35]), obj10);
        }
      }
    }
    tmp43 = null;
    const tmp2Result16 = require("CollectiblesProductUtils");
    const tmp46 = tmp2Result16.isOrbsExclusiveProduct(selectedProduct) && !hideBadge;
    if (tmp46) {
      const obj11 = { icon: require("OrbsIcon").OrbsIcon, label: intl3.string(require("intl").t["0TmQRG"]), isDark: isThemeDarkResult };
      const IconTextBadge2 = tmp2(tmp3[32]).IconTextBadge;
      intl3 = tmp2(tmp3[14]).intl;
      tmp43 = closure_13(IconTextBadge2, obj11);
    }
  }
  [tmp49, c8] = selectedProduct(obj.useState(false), 2);
  selectedProduct(obj.useState(false), 2);
  [tmp51, c9] = selectedProduct(obj.useState(null), 2);
  selectedProduct(obj.useState(null), 2);
  const tmp11Result6 = selectedProduct(obj.useState(0), 2);
  closure_10 = tmp11Result6[1];
  let first = tmp11Result6[0];
  const obj12 = { value: analyticsLocations, children: items9 };
  const AnalyticsLocationProvider = tmp2(tmp3[22]).AnalyticsLocationProvider;
  const obj14 = { scrollsToTop: false, style: tmp5.container, ref: ref1, children: items8 };
  const obj15 = { style: tmp5.actionButtons, children: items7 };
  const BottomSheetScrollView = tmp2(tmp3[37]).BottomSheetScrollView;
  if (tmp38) {
    const obj16 = { handlePreviewPress: callback, onTrackPress: trackPdpClick };
    tmp38 = closure_13(PreviewProfileTrigger, obj16);
  }
  items7 = [tmp38, closure_13(tmp7(tmp3[38]), { selectedProduct, size: "md", onTrackPress: trackPdpClick })];
  items8 = [closure_14(c8, obj15), , , , , ];
  let tmp58Result = null != tmp43;
  if (tmp58Result) {
    const obj17 = { style: tmp5.badgeWrapper, children: tmp43 };
    tmp58Result = tmp58(tmp55, obj17);
  }
  items8[1] = tmp58Result;
  items8[2] = closure_13(analyticsLocations1(ref1[39]), { product: selectedProduct, handlePreviewPress: callback, onTrackPress: trackPdpClick, onBundleActiveItemChange: tmp37 });
  items8[3] = closure_13(analyticsLocations1(ref1[40]), { product: selectedProduct, onTrackPress: trackPdpClick });
  items8[4] = closure_13(analyticsLocations1(ref1[41]), { product, selectedVariantIndex: tmp13, disabled: tmp49, onVariantSelect: tmp14 });
  const obj18 = { size: analyticsLocations1(ref1[10]).space.PX_16 };
  const Spacer = tmp2(tmp3[42]).Spacer;
  items8[5] = closure_13(Spacer, obj18);
  items9 = [closure_14(BottomSheetScrollView, obj14), , ];
  const obj19 = {
    product: selectedProduct,
    analyticsLocations,
    onTrackPress: trackPdpClick,
    isBuying: tmp49,
    onStartPurchase() {
      _undefined4(selectedProduct);
      closure_10((arg0) => arg0 + 1);
      _undefined3(true);
    },
    stageCollectibleChangeForEditProfile
  };
  items9[1] = closure_13(analyticsLocations1(ref1[43]), obj19);
  let tmp58Result2 = null != tmp51;
  if (tmp58Result2) {
    const obj20 = {
      product: tmp51,
      attempt: first,
      analyticsLocations,
      onBuySettled() {
          return _undefined3(false);
        },
      stageCollectibleChangeForEditProfile
    };
    tmp58Result2 = tmp58(tmp7(tmp3[44]), obj20);
  }
  items9[2] = tmp58Result2;
  return closure_14(AnalyticsLocationProvider, obj12);
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
    children: map1(ProductDetailsActionSheetContent, { ref: ref1, product, initialVariantIndex, analyticsLocations, stageCollectibleChangeForEditProfile })
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  return map1(BottomSheet, obj);
}
function ManagedProductDetailsActionSheetInner(skuId) {
  let Button;
  let analyticsLocations;
  let c2;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let intl;
  let intl2;
  let obj6;
  let retry;
  let stageCollectibleChangeForEditProfile;
  let state;
  let tmp11;
  let tmp13;
  skuId = skuId.skuId;
  const initialVariantIndex = skuId.initialVariantIndex;
  const tmp = skuId;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = skuId);
  let obj = skuId(9580);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, seedCategoryStore: true });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  ({ state, retry } = collectiblesShopProduct);
  const obj2 = skuId(10604);
  const getOrFetchPurchases = obj2.useGetOrFetchPurchases();
  ({ hasPreviouslyFetched, fetchPurchasesError } = getOrFetchPurchases);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const items = [product, skuId, initialVariantIndex];
  if ("ready" === state) {
    if (hasPreviouslyFetched) {
      let tmp8;
      let tmp10;
      if (null != product) {
        tmp8 = closure_13;
        const obj3 = { ref: ref1, product, initialVariantIndex: tmp7, analyticsLocations, stageCollectibleChangeForEditProfile };
        tmp10 = closure_13(ProductDetailsActionSheetContent, obj3);
      }
      const obj4 = {
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
        children: tmp10
      };
      return tmp8(tmp(5272).BottomSheet, obj4);
    }
  }
  if ("error" === state) {
    const obj5 = { Illustration: tmp(8805).NoResults, body: intl.string(tmp(1113).t.eAn6z2), children: closure_13(Button, obj6) };
    const EmptyState = tmp(1187).EmptyState;
    intl = tmp(1113).intl;
    obj6 = { text: intl2.string(tmp(1113).t["+hivLW"]), onPress: retry };
    Button = tmp(5634).Button;
    intl2 = tmp(1113).intl;
    tmp13 = closure_13(EmptyState, obj5);
    tmp11 = closure_13;
  } else {
    tmp11 = closure_13;
    tmp13 = closure_13(initialVariantIndex(15062), {});
  }
  tmp8 = tmp11;
  tmp10 = tmp13;
}
function ProductDetailsActionSheetWithOrderCTX(skuId) {
  let tmp9Result;
  const obj = ShopStandalonePdpMobileExperiment;
  if (obj.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet")) {
    const tmp10 = ManagedProductDetailsActionSheetInner;
    const tmp9 = map1;
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
    tmp9Result = map1(ProductDetailsActionSheetInner, obj5);
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
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = {};
let tmp5 = new LoggerDefault("ProductDetailsActionSheet");
const logger = tmp5;
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
rect1 = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, zIndex: 2 };
let closure_17 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheet.tsx");

export default function ProductDetailsActionSheet(shopAnalyticsContext) {
  let obj2;
  shopAnalyticsContext = shopAnalyticsContext.shopAnalyticsContext;
  if (shopAnalyticsContext === undefined) {
    shopAnalyticsContext = closure_15;
  }
  const merged = Object.assign(shopAnalyticsContext, Object.assign({ shopAnalyticsContext: 0 }));
  const obj = { newValue: shopAnalyticsContext, children: map1(ProductDetailsActionSheetWithOrderCTX, obj2) };
  obj2 = {};
  const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
  const merged1 = Object.assign(merged);
  return map1(CollectiblesAnalyticsProvider, obj);
};

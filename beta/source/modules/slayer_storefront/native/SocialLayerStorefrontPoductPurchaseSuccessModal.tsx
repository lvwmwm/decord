// Module ID: 14691
// Function ID: 14692
// Name: SocialLayerStorefrontPoductPurchaseSuccessModal
// Dependencies: [32, 717, 19, 17, 5171, 6984, 7504, 1072, 21, 5170, 575, 1652, 5793, 5402, 5408, 1493, 504, 8877, 7501, 5783, 5790, 1113, 5874, 5747, 7388, 7104, 7153, 9638, 7424, 7421, 11560, 7445, 1252, 5753, 10820, 3896, 9554, 5226, 2]
// Exports: SocialLayerStorefrontProductGiftPurchaseSuccessModal, SocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 14691 (SocialLayerStorefrontPoductPurchaseSuccessModal)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef3896 from "module_3896" /* 3896 */;
import UserUtilsDefault from "UserUtils" /* 5226 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import XSmallIcon from "XSmallIcon" /* 7153 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7501 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 7504 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10820 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 717 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import SKUStore from "SKUStore" /* 6984 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set, set2;

let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj16;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function PurchaseSuccessModalBase(sku) {
  let Button;
  let HeaderBackButton;
  let body;
  let closeButtonIcon;
  let closure_7;
  let ctaIcon;
  let ctaLabel;
  let ctaLoading;
  let finePrint;
  let first;
  let intl2;
  let items15;
  let items19;
  let items21;
  let items22;
  let items23;
  let items24;
  let items26;
  let items27;
  let items28;
  let obj12;
  let obj15;
  let obj9;
  let onClose;
  let onCtaPress;
  let ref;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp35Result4;
  let useReducedMotion;
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let isScreenLandscape;
  first = undefined;
  closure_7 = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  let tmp = closure_16();
  _slicedToArray = tmp;
  let tmp3 = callback1;
  const width = require("useWindowDimensions")().width;
  let obj = sku(callback1[16]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = sku(callback1[11]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = sku(callback1[11]);
  const sharedValue1 = obj3.useSharedValue(0);
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = isScreenLandscape.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!stateFromStores) {
      const withDelay = sku(callback1[11]).withDelay;
      sku(callback1[11]);
      const _Math = Math;
      const obj = { duration: Math.round(333.3333333333333), dampingRatio: 0.7 };
      const withSpring = sku(callback1[12]).withSpring;
      sku(callback1[12]);
      num = withDelay(200, withSpring(1, obj));
    }
    const result = set(num);
    let num4 = 1;
    set2 = sharedValue1.set;
    if (!stateFromStores) {
      const withDelay2 = sku(callback1[11]).withDelay;
      sku(callback1[11]);
      const obj2 = sku(callback1[13]);
      num4 = withDelay2(200, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num4);
  }, items1);
  const items2 = [closure_18, , ];
  const useAnimatedStyle = sku(callback1[11]).useAnimatedStyle;
  const tmp9 = sku(callback1[11]);
  items2[1] = sku(callback1[11]).interpolate;
  items2[2] = sharedValue;
  let c0;
  let c1;
  [tmp10, tmp11, tmp12] = items2;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0.1, 1]), transform: items };
      items = [{ scale: _undefined(_undefined2.get(), [0, 1], [0, 1]) }];
      ({ scale: _undefined(_undefined2.get(), [0, 1], [0, 1]) });
      return obj;
    }
  }
  const items3 = [tmp11, tmp12];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__closure = items3;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__workletHash = 1000739966762;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(SocialLayerStorefrontPoductPurchaseSuccessModalTsx1);
  const items4 = [closure_19, , ];
  const useAnimatedStyle2 = tmp4(tmp3[11]).useAnimatedStyle;
  sku(tmp3[11]);
  items4[1] = sku(tmp3[11]).interpolate;
  items4[2] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  [tmp15, tmp16, tmp17] = items4;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 1]), transform: items };
      items = [{ scale: _undefined(_undefined2.get(), [0, 1], [0.75, 1]) }];
      ({ scale: _undefined(_undefined2.get(), [0, 1], [0.75, 1]) });
      return obj;
    }
  }
  const items5 = [tmp16, tmp17];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__closure = items5;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__workletHash = 3853789941754;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(SocialLayerStorefrontPoductPurchaseSuccessModalTsx2);
  const items6 = [closure_20, , ];
  const useAnimatedStyle3 = tmp4(tmp3[11]).useAnimatedStyle;
  sku(tmp3[11]);
  items6[1] = sku(tmp3[11]).interpolate;
  items6[2] = sharedValue1;
  c0 = undefined;
  c1 = undefined;
  [tmp20, tmp21, tmp22] = items6;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx3 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0.5, 0]) };
      return obj;
    }
  }
  const items7 = [tmp21, tmp22];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__closure = items7;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__workletHash = 10933347757;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__initData = tmp20;
  const animatedStyle3 = useAnimatedStyle3(SocialLayerStorefrontPoductPurchaseSuccessModalTsx3);
  const tmp4Result4 = sku(tmp3[17]);
  isScreenLandscape = tmp4Result4.useIsScreenLandscape();
  const tmp25 = isScreenLandscape ? closure_12 : closure_13;
  [first, closure_7] = isScreenLandscape.useState(null);
  const items8 = [isScreenLandscape];
  const items9 = [isScreenLandscape, first];
  const callback = obj4.useCallback((height) => {
    const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
    closure_7(obj);
  }, items8);
  const memo = obj4.useMemo(() => {
    if (isScreenLandscape) {
      if (null != first) {
        if (first.landscape === tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          return Math.max(120, Math.min(250, Math.floor(first.height - 32)));
        }
      }
      return null;
    } else {
      return 250;
    }
  }, items9);
  const items10 = [sku];
  const memo1 = obj4.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    let str = obj.getCardBackgroundImageURL(sku);
    const tmp3 = sku;
    if (str == null) {
      const tmpResult = SlayerStorefrontUtils;
      str = tmpResult.getCardImageURL(tmp3);
    }
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    return str1;
  }, items10);
  const items11 = [width];
  const memo2 = obj4.useMemo(() => ({ width }), items11);
  importDefault = obj4.useRef(length);
  callback1 = obj4.useCallback(() => {
    const arr = _toArray(ref.current);
    first = arr[0];
    const substr = arr.slice(1);
    const tmp = ref;
    if (null != first) {
      if (0 === substr.length) {
        const obj3 = HapticUtils;
        const result = obj3.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback1, first);
      }
      tmp.current = substr;
    }
    if (substr.length >= length.length / 2) {
      const obj2 = HapticUtils;
      const result1 = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    } else {
      const obj = HapticUtils;
      const result2 = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  }, []);
  const items12 = [callback1];
  const effect1 = obj4.useEffect(() => {
    callback1();
    return () => {
      ref.current = [];
    };
  }, items12);
  const items13 = [tmp.messages, , ];
  let messagesLandscape = isScreenLandscape;
  const View = tmp2(tmp3[11]).View;
  if (isScreenLandscape) {
    messagesLandscape = tmp.messagesLandscape;
  }
  const obj5 = { style: items13, children: items15 };
  items13[1] = messagesLandscape;
  items13[2] = animatedStyle2;
  const items14 = [tmp.title, ];
  let textLandscape = isScreenLandscape;
  const Text = tmp4(tmp3[19]).Text;
  if (isScreenLandscape) {
    textLandscape = tmp.textLandscape;
  }
  items14[1] = textLandscape;
  items15 = [closure_14(Text, { variant: "heading-xl/semibold", color: "text-overlay-light", style: items14, children: title }), ];
  const items16 = [tmp.description, ];
  let textLandscape2 = isScreenLandscape;
  const Text2 = tmp4(tmp3[19]).Text;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items16[1] = textLandscape2;
  items15[1] = closure_14(Text2, { variant: "body-md/medium", color: "text-overlay-light", style: items16, children: body });
  const tmp34Result = closure_15(View, obj5);
  const items17 = [tmp.footer, ];
  const obj6 = { style: items17, children: items19 };
  const tmp38 = isScreenLandscape && tmp.footerLandscape;
  items17[1] = tmp38;
  let tmp35Result = null != finePrint;
  if (tmp35Result) {
    const items18 = [tmp.finePrint, ];
    let textLandscape3 = isScreenLandscape;
    const Text3 = tmp4(tmp3[19]).Text;
    if (isScreenLandscape) {
      textLandscape3 = tmp.textLandscape;
    }
    const obj7 = { variant: "body-xs/normal", color: "text-overlay-light", style: items18, children: finePrint };
    items18[1] = textLandscape3;
    tmp35Result = tmp35(Text3, obj7);
  }
  items19 = [tmp35Result, ];
  const items20 = [tmp.cta, ];
  const tmp40 = isScreenLandscape && tmp.ctaLandscape;
  items20[1] = tmp40;
  const obj8 = { style: items20, children: closure_14(Button, obj9) };
  Button = tmp4(tmp3[20]).Button;
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  obj9 = { onPress: onCtaPress, text: ctaLabel, icon: ctaIcon, loading: ctaLoading, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl = tmp4(tmp3[21]).intl;
    ctaLabel = intl.string(tmp4(tmp3[21]).t.cpT0Cq);
  }
  items19[1] = closure_14(closure_7, obj8);
  const tmp34Result3 = closure_15(closure_7, obj6);
  const obj10 = { style: items21, children: items22 };
  items21 = [tmp.root, memo2];
  let tmp35Result3 = null != memo1;
  if (tmp35Result3) {
    const obj11 = { source: obj12, style: tmp.backdropImage, blurRadius: 4, resizeMode: "cover" };
    obj12 = { uri: memo1 };
    tmp35Result3 = tmp35(tmp2(tmp3[22]), obj11);
  }
  items22 = [tmp35Result3, , , ];
  const obj13 = { style: tmp.backdropGradient, start: tmp25.START, end: tmp25.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
  items22[1] = closure_14(require("LinearGradient"), obj13);
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items23 };
  const obj14 = { style: tmp.header, children: closure_14(HeaderBackButton, obj15) };
  const SafeAreaPaddingView = tmp4(tmp3[24]).SafeAreaPaddingView;
  obj15 = {
    onPress: onClose,
    backImage() {
      const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
      return authStore3(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl2.string(sku(tmp3[21]).t.cpT0Cq),
    displayMode: "minimal"
  };
  HeaderBackButton = tmp4(tmp3[25]).HeaderBackButton;
  intl2 = tmp4(tmp3[21]).intl;
  items23 = [closure_14(closure_7, obj14), , ];
  const obj16 = { style: tmp.scroll, contentContainerStyle: items24, onLayout: callback, alwaysBounceVertical: false, children: items26 };
  items24 = [tmp.body, ];
  let bodyLandscape = isScreenLandscape;
  const tmp43 = first;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items24[1] = bodyLandscape;
  const items25 = [tmp.preview, , ];
  let previewLandscape = isScreenLandscape;
  const View2 = tmp2(tmp3[11]).View;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj17 = { style: items25, children: tmp35Result4 };
  items25[1] = previewLandscape;
  items25[2] = animatedStyle;
  tmp35Result4 = null != memo;
  if (tmp35Result4) {
    const obj18 = { sku, size: memo };
    tmp35Result4 = tmp35(tmp2(tmp3[27]), obj18);
  }
  items26 = [closure_14(View2, obj17), ];
  let tmp34Result4 = tmp34Result;
  if (isScreenLandscape) {
    const obj19 = { style: tmp.contentColumnLandscape, children: items27 };
    items27 = [tmp34Result, tmp34Result3];
    tmp34Result4 = tmp34(tmp37, obj19);
  }
  items26[1] = tmp34Result4;
  items23[1] = closure_15(tmp43, obj16);
  items23[2] = !isScreenLandscape && tmp34Result3;
  items22[2] = closure_15(SafeAreaPaddingView, rect);
  const obj20 = { style: items28, pointerEvents: "none" };
  items28 = [tmp.curtain, animatedStyle3];
  items22[3] = closure_14(require("module_1652").View, obj20);
  return closure_15(closure_7, obj10);
}
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
let numDays = SocialLayerStorefrontConstants.SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, VerticalGradient: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, backdropImage: { position: "absolute", inset: 0, opacity: 0.45 }, backdropGradient: { position: "absolute", inset: 0 }, curtain: obj3, main: { flex: 1 }, header: obj4, closeButtonIcon: obj5, scroll: { flex: 1 }, body: { flexGrow: 1, flexDirection: "column", justifyContent: "center" }, bodyLandscape: { flexDirection: "row", alignItems: "center" }, preview: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, previewLandscape: { flex: 1 }, messages: obj6, messagesLandscape: { paddingTop: 0, alignItems: "stretch" }, contentColumnLandscape: { flex: 1 }, title: obj7, description: obj8, textLandscape: obj9, footer: obj10, footerLandscape: obj11, cta: obj12, ctaLandscape: obj13, finePrint: obj14 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj4 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { tintColor: nativeDefault.colors.WHITE };
obj6 = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj8 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj9 = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
obj10 = { marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
obj12 = { marginHorizontal: nativeDefault.space.PX_24 };
obj13 = { marginHorizontal: nativeDefault.space.PX_16 };
obj14 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
createStyles = createStyles_mod;
let obj15 = { linkAccountIcon: obj16 };
obj16 = { marginRight: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj15);
let closure_18 = { code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};})" };
let closure_19 = { code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};})" };
let closure_20 = { code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){let[interpolate,linearInput]=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};})" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  let analyticsLocations;
  let applicationId2;
  let closure_10;
  let orbsReward;
  let stringResult;
  let stringResult1;
  let tmp29Result;
  let tmp33;
  skuId = skuId.skuId;
  ({ orbsReward, analyticsLocations } = skuId);
  let stateFromStores;
  let getOrFetchApplication;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let memo;
  let ref;
  numDays = undefined;
  const onClose = skuId.onClose;
  let tmp2 = skuId;
  let tmp = closure_17();
  let obj = skuId(stateFromStores[16]);
  let items = [ref];
  stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId));
  let applicationId;
  const useGetOrFetchApplication = skuId(stateFromStores[28]).useGetOrFetchApplication;
  const tmp5 = skuId(stateFromStores[28]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  const tmp9 = analyticsLocations(stateFromStores[29]);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  const tmp9Result = tmp9(tmp10);
  fetched = tmp9Result.fetched;
  hasAlreadyLinked = tmp9Result.hasAlreadyLinked;
  canStartAuthorization = tmp9Result.canStartAuthorization;
  startAuthorization = tmp9Result.startAuthorization;
  let applicationId1;
  const useSocialLayerStorefrontMobileAccountLinkingDisabled = tmp2(tmp3[30]).useSocialLayerStorefrontMobileAccountLinkingDisabled;
  tmp2(stateFromStores[30]);
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  let obj2 = hasAlreadyLinked;
  let items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = hasAlreadyLinked.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  let obj3 = { analyticsLocations: memo, skuId, applicationId: applicationId2, canStartAuthorization };
  applicationId2 = undefined;
  const useRef = hasAlreadyLinked.useRef;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  ref = useRef(obj3);
  const items2 = [canStartAuthorization];
  const effect = obj2.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj2.useEffect(() => {
    let applicationId;
    const tmp = fetched;
    if (tmp) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  const useCallback = obj2.useCallback;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = useCallback(() => {
    let applicationId;
    const obj = { location_stack: memo, sku_id: skuId, application_id: applicationId, is_gift: false };
    applicationId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED = unpackModuleId.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED;
    AnalyticsUtilsDefault;
    const tmp2 = memo;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: tmp2 });
  }, items4);
  analyticsLocations(stateFromStores[33])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = unpackModuleId.OPEN_MODAL;
    const obj = { location_stack: memo, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  let intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    stringResult = string(tmp2(tmp3[21]).t["5glWta"]);
  } else {
    stringResult = string(tmp8(tmp3[35]).bRPsNX);
  }
  numDays = tmp23;
  const items5 = [hasAlreadyLinked, !hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled, , ];
  let name;
  const useMemo = obj2.useMemo;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  items5[2] = name;
  let name1;
  if (stateFromStores != null) {
    name1 = stateFromStores.name;
  }
  items5[3] = name1;
  let formatToPlainStringResult;
  const memo1 = useMemo(() => {
    let formatToPlainString2Result;
    let str3;
    let str5;
    const tmp = hasAlreadyLinked;
    if (tmp) {
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str4;
      const W2znvX = intl4.t.W2znvX;
      if (stateFromStores != null) {
        str4 = stateFromStores.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      const obj2 = { skuName: str4, applicationName: str5 };
      str5 = undefined;
      if (getOrFetchApplication != null) {
        str5 = getOrFetchApplication.name;
      }
      if (str5 == null) {
        str5 = "";
      }
      formatToPlainString2Result = formatToPlainString2(W2znvX, obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      if (closure_10) {
        let str2;
        const prop = intl4.t["EgCl+Q"];
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj3 = { skuName: str2, applicationName: str3 };
        str3 = undefined;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        formatToPlainString2Result = formatToPlainString(prop, obj3);
      } else {
        let str;
        const eNNnIG = _modDef3896.eNNnIG;
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { applicationName: str };
        formatToPlainString2Result = formatToPlainString(eNNnIG, obj);
      }
    }
    return formatToPlainString2Result;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[21]).intl;
    const obj4 = { numDays };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[21]).t.TTj7ME, obj4);
  }
  const obj5 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: stringResult1, ctaIcon: tmp29Result, ctaLoading: !fetched, onCtaPress: tmp33, onClose };
  stringResult1 = undefined;
  const tmp30 = PurchaseSuccessModalBase;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const intl3 = tmp2(tmp3[21]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[21]).t["VDAhr+"]);
  }
  tmp29Result = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const obj6 = { size: "xs", color: analyticsLocations(stateFromStores[10]).colors.WHITE, style: tmp.linkAccountIcon };
    const ExperimentalGameControllerLinkIcon = tmp2(tmp3[36]).ExperimentalGameControllerLinkIcon;
    tmp29Result = tmp29(ExperimentalGameControllerLinkIcon, obj6);
  }
  tmp33 = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    tmp33 = callback;
  }
  return closure_14(tmp30, obj5);
}
export function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  let orbsReward;
  let recipient;
  let require;
  let sku_id;
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const onClose = analyticsLocations.onClose;
  let obj = require("get initialized");
  let items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(require));
  let items1 = [analyticsLocations];
  const location_stack = react.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[33])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = unpackModuleId.OPEN_MODAL;
    const obj = { location_stack, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: require, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  let intl = require("intl").intl;
  let name;
  const useMemo = react.useMemo;
  const stringResult = intl.string(require("intl").t["5glWta"]);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  let obj2 = {
    sku: stateFromStores,
    title: stringResult,
    body: useMemo(() => {
      let str;
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      let name;
      const v2VjPTw = intl4.t["2VjPTw"];
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const obj = { itemName: name, giftRecipient: str };
      const obj2 = UserUtilsDefault;
      str = obj2.getName(recipient);
      if (str == null) {
        str = "your recipient";
      }
      return formatToPlainString(v2VjPTw, obj);
    }, items2),
    onClose
  };
  return closure_14(PurchaseSuccessModalBase, obj2);
}

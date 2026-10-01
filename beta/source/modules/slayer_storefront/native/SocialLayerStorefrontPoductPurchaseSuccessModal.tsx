// Module ID: 10471
// Function ID: 10472
// Name: SocialLayerStorefrontPoductPurchaseSuccessModal
// Dependencies: [32, 718, 19, 17, 4825, 5822, 6650, 1074, 21, 4836, 576, 4566, 5280, 4837, 4801, 1479, 504, 5438, 6647, 4832, 5281, 1115, 5293, 6544, 5943, 5992, 8288, 6589, 6586, 10472, 6603, 1241, 5298, 10262, 3585, 8197, 4678, 2]
// Exports: SocialLayerStorefrontProductGiftPurchaseSuccessModal, SocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 10471 (SocialLayerStorefrontPoductPurchaseSuccessModal)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef3585 from "module_3585" /* 3585 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 6650 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10262 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 718 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SKUStore from "SKUStore" /* 5822 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set, set2;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
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
  let items13;
  let items15;
  let items16;
  let items17;
  let items18;
  let items20;
  let items21;
  let items22;
  let items9;
  let obj16;
  let obj19;
  let obj22;
  let onClose;
  let onCtaPress;
  let ref;
  let title;
  let tmp23Result4;
  let useReducedMotion;
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let isScreenLandscape;
  first = undefined;
  closure_7 = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  let tmp = closure_17();
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
  let obj4 = isScreenLandscape;
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = isScreenLandscape.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!stateFromStores) {
      const withDelay = sku(callback1[11]).withDelay;
      sku(callback1[11]);
      const obj = sku(callback1[12]);
      num = withDelay(200, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num3 = 1;
    set2 = sharedValue1.set;
    if (!stateFromStores) {
      const withDelay2 = sku(callback1[11]).withDelay;
      sku(callback1[11]);
      const obj2 = sku(callback1[13]);
      num3 = withDelay2(200, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num3);
  }, items1);
  const fn = function n() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items };
    obj2 = sku(callback1[11]);
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0, 1]) };
    items = [obj3];
    obj4 = sku(callback1[11]);
    return obj;
  };
  const obj5 = sku(callback1[11]);
  fn.__closure = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn.__workletHash = 7750024112371;
  fn.__initData = __initData;
  ({ interpolate: sku(callback1[11]).interpolate, springInput: sharedValue });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const fn2 = function s() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
    obj2 = sku(callback1[11]);
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
    items = [obj3];
    obj4 = sku(callback1[11]);
    return obj;
  };
  const obj7 = sku(callback1[11]);
  fn2.__closure = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn2.__workletHash = 3400602564931;
  fn2.__initData = __initData2;
  ({ interpolate: sku(callback1[11]).interpolate, springInput: sharedValue });
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const fn3 = function c() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
    obj2 = sku(callback1[11]);
    return obj;
  };
  const obj9 = sku(callback1[11]);
  fn3.__closure = { interpolate: sku(callback1[11]).interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 4092396015860;
  fn3.__initData = __initData3;
  ({ interpolate: sku(callback1[11]).interpolate, linearInput: sharedValue1 });
  const animatedStyle2 = obj9.useAnimatedStyle(fn3);
  const obj11 = sku(callback1[17]);
  isScreenLandscape = obj11.useIsScreenLandscape();
  const tmp13 = isScreenLandscape ? closure_13 : closure_14;
  [first, closure_7] = obj4.useState(null);
  const items2 = [isScreenLandscape];
  const items3 = [isScreenLandscape, first];
  const callback = obj4.useCallback((height) => {
    const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
    closure_7(obj);
  }, items2);
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
  }, items3);
  const items4 = [sku];
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
  }, items4);
  const items5 = [width];
  const memo2 = obj4.useMemo(() => ({ width }), items5);
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
  const items6 = [callback1];
  const effect1 = obj4.useEffect(() => {
    callback1();
    return () => {
      ref.current = [];
    };
  }, items6);
  const items7 = [tmp.messages, , ];
  let messagesLandscape = isScreenLandscape;
  const View = tmp2(tmp3[11]).View;
  if (isScreenLandscape) {
    messagesLandscape = tmp.messagesLandscape;
  }
  const obj12 = { style: items7, children: items9 };
  items7[1] = messagesLandscape;
  items7[2] = animatedStyle1;
  const items8 = [tmp.title, ];
  let textLandscape = isScreenLandscape;
  const Text = tmp4(tmp3[19]).Text;
  if (isScreenLandscape) {
    textLandscape = tmp.textLandscape;
  }
  items8[1] = textLandscape;
  items9 = [closure_15(Text, { variant: "heading-xl/semibold", color: "text-overlay-light", style: items8, children: title }), ];
  const items10 = [tmp.description, ];
  let textLandscape2 = isScreenLandscape;
  const Text2 = tmp4(tmp3[19]).Text;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items10[1] = textLandscape2;
  items9[1] = closure_15(Text2, { variant: "text-md/medium", color: "text-overlay-light", style: items10, children: body });
  const tmp22Result = closure_16(View, obj12);
  const items11 = [tmp.footer, ];
  const obj13 = { style: items11, children: items13 };
  const tmp26 = isScreenLandscape && tmp.footerLandscape;
  items11[1] = tmp26;
  let tmp23Result = null != finePrint;
  if (tmp23Result) {
    const items12 = [tmp.finePrint, ];
    let textLandscape3 = isScreenLandscape;
    const Text3 = tmp4(tmp3[19]).Text;
    if (isScreenLandscape) {
      textLandscape3 = tmp.textLandscape;
    }
    const obj14 = { variant: "text-xs/normal", color: "text-overlay-light", style: items12, children: finePrint };
    items12[1] = textLandscape3;
    tmp23Result = tmp23(Text3, obj14);
  }
  items13 = [tmp23Result, ];
  const items14 = [tmp.cta, ];
  const tmp28 = isScreenLandscape && tmp.ctaLandscape;
  items14[1] = tmp28;
  const obj15 = { style: items14, children: closure_15(Button, obj16) };
  Button = tmp4(tmp3[20]).Button;
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  obj16 = { onPress: onCtaPress, text: ctaLabel, icon: ctaIcon, loading: ctaLoading, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl = tmp4(tmp3[21]).intl;
    ctaLabel = intl.string(tmp4(tmp3[21]).t.cpT0Cq);
  }
  items13[1] = closure_15(closure_8, obj15);
  const tmp22Result3 = closure_16(closure_8, obj13);
  const obj17 = { style: items15, children: items16 };
  items15 = [tmp.root, memo2];
  let tmp23Result3 = null != memo1;
  if (tmp23Result3) {
    const obj18 = { source: obj19, style: tmp.backdropImage, blurRadius: 4, resizeMode: "cover" };
    obj19 = { uri: memo1 };
    tmp23Result3 = tmp23(first, obj18);
  }
  items16 = [tmp23Result3, , , ];
  const obj20 = { style: tmp.backdropGradient, start: tmp13.START, end: tmp13.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
  items16[1] = closure_15(require("LinearGradient"), obj20);
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items17 };
  const obj21 = { style: tmp.header, children: closure_15(HeaderBackButton, obj22) };
  const SafeAreaPaddingView = tmp4(tmp3[23]).SafeAreaPaddingView;
  obj22 = {
    onPress: onClose,
    backImage() {
      const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
      return closure_15(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl2.string(sku(tmp3[21]).t.cpT0Cq),
    displayMode: "minimal"
  };
  HeaderBackButton = tmp4(tmp3[24]).HeaderBackButton;
  intl2 = tmp4(tmp3[21]).intl;
  items17 = [closure_15(closure_8, obj21), , ];
  const obj23 = { style: tmp.scroll, contentContainerStyle: items18, onLayout: callback, alwaysBounceVertical: false, children: items20 };
  items18 = [tmp.body, ];
  let bodyLandscape = isScreenLandscape;
  const tmp32 = closure_7;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items18[1] = bodyLandscape;
  const items19 = [tmp.preview, , ];
  let previewLandscape = isScreenLandscape;
  const View2 = tmp2(tmp3[11]).View;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj24 = { style: items19, children: tmp23Result4 };
  items19[1] = previewLandscape;
  items19[2] = animatedStyle;
  tmp23Result4 = null != memo;
  if (tmp23Result4) {
    const obj25 = { sku, size: memo };
    tmp23Result4 = tmp23(tmp2(tmp3[26]), obj25);
  }
  items20 = [closure_15(View2, obj24), ];
  let tmp22Result4 = tmp22Result;
  if (isScreenLandscape) {
    const obj26 = { style: tmp.contentColumnLandscape, children: items21 };
    items21 = [tmp22Result, tmp22Result3];
    tmp22Result4 = tmp22(tmp25, obj26);
  }
  items20[1] = tmp22Result4;
  items17[1] = closure_16(tmp32, obj23);
  items17[2] = !isScreenLandscape && tmp22Result3;
  items16[2] = closure_16(SafeAreaPaddingView, rect);
  const obj27 = { style: items22, pointerEvents: "none" };
  items22 = [tmp.curtain, animatedStyle2];
  items16[3] = closure_15(require("ReanimatedRexport").View, obj27);
  return closure_16(closure_8, obj17);
}
let _slicedToArray = _slicedToArray_mod;
({ Image: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native);
const numDays = SocialLayerStorefrontConstants.SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
({ AnalyticEvents: closure_12, HorizontalGradient: map1, VerticalGradient: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
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
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let obj15 = { linkAccountIcon: obj16 };
obj16 = { marginRight: nativeDefault.space.PX_4 };
let closure_18 = createStyles.createStyles(obj15);
const __initData = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData2 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_22 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  let analyticsLocations;
  let applicationId2;
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
  let closure_10;
  const onClose = skuId.onClose;
  let tmp2 = skuId;
  let tmp = closure_18();
  let obj = skuId(stateFromStores[16]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId));
  let applicationId;
  const useGetOrFetchApplication = skuId(stateFromStores[27]).useGetOrFetchApplication;
  const tmp5 = skuId(stateFromStores[27]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  const tmp9 = analyticsLocations(stateFromStores[28]);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  const tmp9Result = tmp9(tmp10);
  fetched = tmp9Result.fetched;
  hasAlreadyLinked = tmp9Result.hasAlreadyLinked;
  canStartAuthorization = tmp9Result.canStartAuthorization;
  startAuthorization = tmp9Result.startAuthorization;
  let applicationId1;
  const useSocialLayerStorefrontMobileAccountLinkingDisabled = tmp2(tmp3[29]).useSocialLayerStorefrontMobileAccountLinkingDisabled;
  tmp2(stateFromStores[29]);
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
      obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
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
    const SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED = constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED;
    AnalyticsUtilsDefault;
    const tmp2 = memo;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: tmp2 });
  }, items4);
  analyticsLocations(stateFromStores[32])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
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
    stringResult = string(tmp8(tmp3[34]).bRPsNX);
  }
  closure_10 = tmp23;
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
        const eNNnIG = _modDef3585.eNNnIG;
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
    const ExperimentalGameControllerLinkIcon = tmp2(tmp3[35]).ExperimentalGameControllerLinkIcon;
    tmp29Result = tmp29(ExperimentalGameControllerLinkIcon, obj6);
  }
  tmp33 = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    tmp33 = callback;
  }
  return closure_15(tmp30, obj5);
};
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  let orbsReward;
  let recipient;
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
  recipient(analyticsLocations[32])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
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
  return closure_15(PurchaseSuccessModalBase, obj2);
};

// Module ID: 9784
// Function ID: 76054
// Name: PurchaseSuccessModalBase
// Dependencies: [830, 31, 27, 4122, 4175, 5612, 653, 33, 4130, 689, 3991, 4542, 4131, 4099, 1450, 566, 5609, 8347, 4554, 5121, 5094, 5119, 1212, 8256, 4126, 4543, 5468, 5465, 8252, 5482, 675, 4559, 9768, 3104, 8689, 3969, 2]
// Exports: SocialLayerStorefrontProductGiftPurchaseSuccessModal, SocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9784 (PurchaseSuccessModalBase)
import _toArray from "_toArray";
import useMountLayoutEffect from "useMountLayoutEffect";
import get_ActivityIndicator from "useStartAuthorize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM as closure_10 } from "STOREFRONT_MARKETING_GUILD_ID";
import ME from "ME";
import jsxProd from "messagesProxy";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function PurchaseSuccessModalBase(sku) {
  let body;
  let ctaIcon;
  let ctaLabel;
  let ctaLoading;
  let curtainViewStyle;
  let finePrint;
  let onClose;
  let onCtaPress;
  let previewViewStyle;
  let textViewStyle;
  let title;
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  let callback;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = _createForOfIteratorHelperLoose();
  let _toArray = tmp;
  const width = importDefault(callback[14])().width;
  let obj = sku(callback[15]);
  let items = [_isNativeReflectConstruct];
  const items1 = [sku];
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = (function useAnimationStyles(arg0) {
    let closure_0 = arg0;
    let obj = sku(callback[10]);
    const sharedValue = obj.useSharedValue(0);
    let obj1 = sku(callback[10]);
    const sharedValue1 = obj1.useSharedValue(0);
    let items = [sharedValue, arg0, sharedValue1];
    const effect = width.useEffect(() => {
      let num = 1;
      if (!closure_0) {
        let obj = sku(callback[10]);
        num = obj.withDelay(200, sku(callback[11]).withSpring(1, { duration: 500, dampingRatio: 0.7 }));
        const obj2 = sku(callback[11]);
      }
      const result = sharedValue.set(num);
      let num5 = 1;
      if (!closure_0) {
        const obj3 = sku(callback[10]);
        obj = { duration: 200 };
        num5 = obj3.withDelay(200, sku(callback[12]).withTiming(1, obj));
        const obj4 = sku(callback[12]);
      }
      const result1 = sharedValue1.set(num5);
    }, items);
    obj = {};
    const fn = function o() {
      let obj = { opacity: sku(callback[10]).interpolate(sharedValue.get(), [0, 1], [0.1, 1]) };
      obj = {};
      const obj2 = sku(callback[10]);
      obj.scale = sku(callback[10]).interpolate(sharedValue.get(), [0, 1], [0, 1]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { interpolate: sku(callback[10]).interpolate, springInput: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 7750024112371;
    fn.__initData = outer1_18;
    obj.previewViewStyle = sku(callback[10]).useAnimatedStyle(fn);
    let obj4 = sku(callback[10]);
    const fn2 = function l() {
      let obj = { opacity: sku(callback[10]).interpolate(sharedValue.get(), [0, 1], [0, 1]) };
      obj = {};
      const obj2 = sku(callback[10]);
      obj.scale = sku(callback[10]).interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj1 = { interpolate: sku(callback[10]).interpolate, springInput: sharedValue };
    fn2.__closure = obj1;
    fn2.__workletHash = 3400602564931;
    fn2.__initData = outer1_19;
    obj.textViewStyle = sku(callback[10]).useAnimatedStyle(fn2);
    const obj6 = sku(callback[10]);
    const fn3 = function c() {
      const obj = { opacity: sku(callback[10]).interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
      return obj;
    };
    const obj8 = sku(callback[10]);
    fn3.__closure = { interpolate: sku(callback[10]).interpolate, linearInput: sharedValue1 };
    fn3.__workletHash = 4092396015860;
    fn3.__initData = outer1_20;
    obj.curtainViewStyle = obj8.useAnimatedStyle(fn3);
    return obj;
  })(obj.useStateFromStores(items, () => outer1_8.useReducedMotion)));
  const memo = width.useMemo(() => {
    let str = sku(callback[16]).getCardBackgroundImageURL(sku);
    if (null == str) {
      str = sku(callback[16]).getCardImageURL(sku);
      const obj2 = sku(callback[16]);
    }
    str = undefined;
    if (null != str) {
      str = str.toString();
    }
    return str;
  }, items1);
  const items2 = [width];
  const memo1 = width.useMemo(() => ({ width }), items2);
  importDefault = width.useRef(closure_21);
  callback = width.useCallback(() => {
    const arr = tmp(ref.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = sku(callback[13]).triggerHapticFeedback(sku(callback[13]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = sku(callback[13]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      ref.current = substr;
    }
    if (substr.length >= outer1_21.length / 2) {
      const result1 = sku(callback[13]).triggerHapticFeedback(sku(callback[13]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = sku(callback[13]);
    } else {
      const result2 = sku(callback[13]).triggerHapticFeedback(sku(callback[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = sku(callback[13]);
    }
  }, []);
  const items3 = [callback];
  let effect = width.useEffect(() => {
    callback();
    return () => {
      outer1_1.current = [];
    };
  }, items3);
  const effect1 = width.useEffect(() => {
    sku(callback[17]).lockOrientation(outer1_12.PORTRAIT);
    return () => {
      const result = sku(callback[17]).restoreDefaultOrientation();
    };
  }, []);
  obj = { style: items4 };
  items4 = [tmp.root, memo1];
  let tmp10 = null != memo;
  if (tmp10) {
    obj = {};
    let obj1 = { uri: memo };
    obj.source = obj1;
    obj.style = tmp.backdropImage;
    obj.blurRadius = 4;
    obj.resizeMode = "cover";
    tmp10 = callback(closure_5, obj);
  }
  const items5 = [tmp10, callback(importDefault(callback[18]), { style: tmp.backdropGradient, start: constants.START, end: constants.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] }), , ];
  let obj3 = { style: tmp.main, top: true, bottom: true, left: true, right: true };
  let obj4 = { style: tmp.header };
  const obj5 = {
    onPress: onClose,
    backImage() {
      return outer1_14(sku(callback[21]).XSmallIcon, { size: "lg", style: tmp.closeButtonIcon });
    }
  };
  const intl = sku(callback[22]).intl;
  obj5.accessibilityLabel = intl.string(sku(callback[22]).t.cpT0Cq);
  obj5.labelVisible = false;
  obj4.children = callback(sku(callback[20]).HeaderBackButton, obj5);
  const items6 = [callback(closure_7, obj4), , ];
  let obj6 = { style: { flex: 1 }, contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  const obj7 = { style: items7 };
  items7 = [tmp.preview, previewViewStyle];
  obj7.children = callback(importDefault(callback[23]), { sku, size: 250 });
  const items8 = [callback(importDefault(callback[10]).View, obj7), ];
  let obj8 = { style: items9 };
  items9 = [tmp.messages, textViewStyle];
  const obj9 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: tmp.title, children: title };
  const items10 = [callback(sku(callback[24]).Text, obj9), ];
  const obj10 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp.description, children: body };
  items10[1] = callback(sku(callback[24]).Text, obj10);
  obj8.children = items10;
  items8[1] = callback2(importDefault(callback[10]).View, obj8);
  obj6.children = items8;
  items6[1] = callback2(closure_6, obj6);
  const obj11 = { style: tmp.footer };
  let tmp16 = null != finePrint;
  if (tmp16) {
    const obj12 = { variant: "text-xs/normal", color: "text-muted", style: tmp.finePrint, children: finePrint };
    tmp16 = callback(sku(callback[24]).Text, obj12);
  }
  const items11 = [tmp16, ];
  const obj13 = { style: tmp.cta };
  const obj14 = {};
  if (null != onCtaPress) {
    onClose = onCtaPress;
  }
  obj14.onPress = onClose;
  if (null == ctaLabel) {
    const intl2 = sku(callback[22]).intl;
    ctaLabel = intl2.string(sku(callback[22]).t.cpT0Cq);
  }
  obj14.text = ctaLabel;
  obj14.icon = ctaIcon;
  obj14.loading = ctaLoading;
  obj14.size = "lg";
  obj14.grow = true;
  obj13.children = callback(sku(callback[25]).Button, obj14);
  items11[1] = callback(closure_7, obj13);
  obj11.children = items11;
  items6[2] = callback2(closure_7, obj11);
  obj3.children = items6;
  items5[2] = callback2(sku(callback[19]).SafeAreaPaddingView, obj3);
  const items12 = [tmp.curtain, curtainViewStyle];
  items5[3] = callback(importDefault(callback[10]).View, { style: items12, pointerEvents: "none" });
  obj.children = items5;
  return callback2(closure_7, obj);
}
({ Image: closure_5, ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_11, Orientation: closure_12, VerticalGradient: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.backdropImage = { position: "absolute", inset: 0, opacity: 0.45 };
_createForOfIteratorHelperLoose.backdropGradient = { position: "absolute", inset: 0 };
let obj1 = { position: "absolute", inset: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.curtain = obj1;
_createForOfIteratorHelperLoose.main = { flex: 1 };
let obj2 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = obj2;
_createForOfIteratorHelperLoose.closeButtonIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
_createForOfIteratorHelperLoose.preview = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj4 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.messages = obj4;
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj5 = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj6 = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.footer = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj7 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.cta = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj8 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.finePrint = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj10 = {};
let obj9 = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj10.linkAccountIcon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj10);
let closure_18 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
let closure_19 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj11 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  let analyticsLocations;
  let orbsReward;
  skuId = skuId.skuId;
  ({ orbsReward, analyticsLocations } = skuId);
  let getOrFetchApplication;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let memo;
  let closure_9;
  let c10;
  let obj = skuId(stateFromStores[15]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => ref.get(skuId));
  let obj1 = skuId(stateFromStores[26]);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = obj1.useGetOrFetchApplication(applicationId);
  let tmp6 = null;
  const tmp = callback3();
  if (null != getOrFetchApplication) {
    tmp6 = getOrFetchApplication;
  }
  const tmp5Result = analyticsLocations(stateFromStores[27])(tmp6);
  fetched = tmp5Result.fetched;
  hasAlreadyLinked = tmp5Result.hasAlreadyLinked;
  canStartAuthorization = tmp5Result.canStartAuthorization;
  startAuthorization = tmp5Result.startAuthorization;
  let obj2 = skuId(stateFromStores[28]);
  let applicationId1;
  if (null != stateFromStores) {
    applicationId1 = stateFromStores.applicationId;
  }
  const items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = obj2.useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = fetched.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], analyticsLocations(stateFromStores[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items;
  }, items1);
  obj = { analyticsLocations: memo, skuId };
  let applicationId2;
  if (null != stateFromStores) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj.applicationId = applicationId2;
  obj.canStartAuthorization = canStartAuthorization;
  closure_9 = fetched.useRef(obj);
  const items2 = [canStartAuthorization];
  const effect = fetched.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = fetched.useEffect(() => {
    let analyticsLocations;
    let applicationId;
    let canStartAuthorization;
    let skuId;
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      let obj = analyticsLocations(stateFromStores[30]);
      obj = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      obj.track(outer1_11.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (null != stateFromStores) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = fetched.useCallback(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.is_gift = false;
    obj.track(outer1_11.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    obj = { analyticsLocations: memo };
    startAuthorization(obj);
  }, items4);
  analyticsLocations(stateFromStores[31])(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, type: skuId(stateFromStores[32]).SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(outer1_11.OPEN_MODAL, obj);
  });
  let intl = skuId(stateFromStores[22]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    let stringResult = string(skuId(tmp20[22]).t["5glWta"]);
  } else {
    stringResult = string(analyticsLocations(tmp20[33]).bRPsNX);
  }
  c10 = tmp23;
  const items5 = [hasAlreadyLinked, !hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled, , ];
  let name;
  if (null != getOrFetchApplication) {
    name = getOrFetchApplication.name;
  }
  items5[2] = name;
  let name1;
  if (null != stateFromStores) {
    name1 = stateFromStores.name;
  }
  items5[3] = name1;
  let formatToPlainStringResult;
  const memo1 = fetched.useMemo(() => {
    if (hasAlreadyLinked) {
      const intl2 = skuId(stateFromStores[22]).intl;
      let obj = {};
      let name;
      if (null != stateFromStores) {
        name = stateFromStores.name;
      }
      let str4 = "";
      let str5 = "";
      if (null != name) {
        str5 = name;
      }
      obj.skuName = str5;
      let name1;
      if (null != getOrFetchApplication) {
        name1 = getOrFetchApplication.name;
      }
      if (null != name1) {
        str4 = name1;
      }
      obj.applicationName = str4;
      let formatToPlainStringResult = intl2.formatToPlainString(skuId(stateFromStores[22]).t.W2znvX, obj);
    } else {
      const intl = skuId(stateFromStores[22]).intl;
      const formatToPlainString = intl.formatToPlainString;
      if (c10) {
        obj = {};
        let name2;
        if (null != stateFromStores) {
          name2 = stateFromStores.name;
        }
        let str2 = "";
        let str3 = "";
        if (null != name2) {
          str3 = name2;
        }
        obj.skuName = str3;
        let name3;
        if (null != getOrFetchApplication) {
          name3 = getOrFetchApplication.name;
        }
        if (null != name3) {
          str2 = name3;
        }
        obj.applicationName = str2;
        formatToPlainStringResult = formatToPlainString(tmp2(tmp3[22]).t["EgCl+Q"], obj);
      } else {
        obj = {};
        let name4;
        if (null != getOrFetchApplication) {
          name4 = getOrFetchApplication.name;
        }
        let str = "";
        if (null != name4) {
          str = name4;
        }
        obj.applicationName = str;
        formatToPlainStringResult = formatToPlainString(analyticsLocations(tmp3[33]).eNNnIG, obj);
      }
      tmp2 = skuId;
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = skuId(stateFromStores[22]).intl;
    obj = { numDays: c10 };
    formatToPlainStringResult = intl2.formatToPlainString(skuId(stateFromStores[22]).t.TTj7ME, obj);
  }
  obj1 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult };
  let stringResult1;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const intl3 = skuId(stateFromStores[22]).intl;
    stringResult1 = intl3.string(skuId(stateFromStores[22]).t["VDAhr+"]);
  }
  obj1.ctaLabel = stringResult1;
  let tmp37;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    obj2 = { size: "xs", color: analyticsLocations(stateFromStores[9]).colors.WHITE, style: tmp.linkAccountIcon };
    tmp37 = callback(skuId(stateFromStores[34]).ExperimentalGameControllerLinkIcon, obj2);
  }
  obj1.ctaIcon = tmp37;
  obj1.ctaLoading = !fetched;
  let tmp42;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    tmp42 = callback;
  }
  obj1.onCtaPress = tmp42;
  obj1.onClose = skuId.onClose;
  return callback(PurchaseSuccessModalBase, obj1);
};
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  let orbsReward;
  let recipient;
  let require;
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let obj = require(analyticsLocations[15]);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.get(closure_0));
  const items1 = [analyticsLocations];
  React = React.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], recipient(analyticsLocations[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items;
  }, items1);
  recipient(analyticsLocations[31])(() => {
    let obj = recipient(analyticsLocations[30]);
    obj = { location_stack: useMountLayoutEffect, type: outer1_0(analyticsLocations[32]).SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: closure_0 };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(outer1_11.OPEN_MODAL, obj);
  });
  let intl = require(analyticsLocations[22]).intl;
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  obj = {
    sku: stateFromStores,
    title: intl.string(require(analyticsLocations[22]).t["5glWta"]),
    body: React.useMemo(() => {
      const intl = outer1_0(analyticsLocations[22]).intl;
      const obj = {};
      let name;
      if (null != stateFromStores) {
        name = stateFromStores.name;
      }
      obj.itemName = name;
      const name1 = recipient(analyticsLocations[35]).getName(recipient);
      let str = "your recipient";
      if (null != name1) {
        str = name1;
      }
      obj.giftRecipient = str;
      return intl.formatToPlainString(outer1_0(analyticsLocations[22]).t["2VjPTw"], obj);
    }, items2),
    onClose: analyticsLocations.onClose
  };
  return callback(PurchaseSuccessModalBase, obj);
};

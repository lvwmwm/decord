// Module ID: 9737
// Function ID: 75760
// Name: PurchaseSuccessModalBase
// Dependencies: []
// Exports: SocialLayerStorefrontProductGiftPurchaseSuccessModal, SocialLayerStorefrontProductSelfPurchaseSuccessModal

// Module 9737 (PurchaseSuccessModalBase)
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
  const arg1 = sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  let dependencyMap;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = callback3();
  let closure_3 = tmp;
  const width = importDefault(dependencyMap[14])().width;
  const React = width;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_8];
  const items1 = [sku];
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = function useAnimationStyles(arg0) {
    const sku = arg0;
    let obj = sku(callback[10]);
    const sharedValue = obj.useSharedValue(0);
    let closure_1 = sharedValue;
    let obj1 = sku(callback[10]);
    const sharedValue1 = obj1.useSharedValue(0);
    const callback = sharedValue1;
    const items = [sharedValue, arg0, sharedValue1];
    const effect = width.useEffect(() => {
      let num = 1;
      if (!arg0) {
        let obj = arg0(sharedValue1[10]);
        num = obj.withDelay(200, arg0(sharedValue1[11]).withSpring(1, { position: "transparent", left: null }));
        const obj2 = arg0(sharedValue1[11]);
      }
      const result = sharedValue.set(num);
      let num5 = 1;
      if (!arg0) {
        const obj3 = arg0(sharedValue1[10]);
        obj = { duration: 200 };
        num5 = obj3.withDelay(200, arg0(sharedValue1[12]).withTiming(1, obj));
        const obj4 = arg0(sharedValue1[12]);
      }
      const result1 = sharedValue1.set(num5);
    }, items);
    obj = {};
    const fn = function o() {
      let obj = { opacity: arg0(sharedValue1[10]).interpolate(sharedValue.get(), [null, null], ["<string:3813801988>", "<string:1147353132>"]) };
      obj = {};
      const obj2 = arg0(sharedValue1[10]);
      obj.scale = arg0(sharedValue1[10]).interpolate(sharedValue.get(), [null, null], [null, null]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj = { interpolate: sku(callback[10]).interpolate, springInput: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 7750024112371;
    fn.__initData = closure_18;
    obj.previewViewStyle = sku(callback[10]).useAnimatedStyle(fn);
    const obj4 = sku(callback[10]);
    const fn2 = function l() {
      let obj = { opacity: arg0(sharedValue1[10]).interpolate(sharedValue.get(), [null, null], [null, null]) };
      obj = {};
      const obj2 = arg0(sharedValue1[10]);
      obj.scale = arg0(sharedValue1[10]).interpolate(sharedValue.get(), [null, null], ["<string:1075222413>", "construct"]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj1 = { interpolate: sku(callback[10]).interpolate, springInput: sharedValue };
    fn2.__closure = obj1;
    fn2.__workletHash = 3400602564931;
    fn2.__initData = closure_19;
    obj.textViewStyle = sku(callback[10]).useAnimatedStyle(fn2);
    const obj6 = sku(callback[10]);
    const fn3 = function c() {
      const obj = { opacity: arg0(sharedValue1[10]).interpolate(sharedValue1.get(), [null, null], ["<string:2558152960>", "<string:30754627>"]) };
      return obj;
    };
    const obj8 = sku(callback[10]);
    fn3.__closure = { interpolate: sku(callback[10]).interpolate, linearInput: sharedValue1 };
    fn3.__workletHash = 4092396015860;
    fn3.__initData = closure_20;
    obj.curtainViewStyle = obj8.useAnimatedStyle(fn3);
    return obj;
  }(obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)));
  const memo = React.useMemo(() => {
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
  const memo1 = React.useMemo(() => ({ width }), items2);
  const importDefault = React.useRef(closure_21);
  const callback = React.useCallback(() => {
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
    if (substr.length >= length.length / 2) {
      const result1 = sku(callback[13]).triggerHapticFeedback(sku(callback[13]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = sku(callback[13]);
    } else {
      const result2 = sku(callback[13]).triggerHapticFeedback(sku(callback[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = sku(callback[13]);
    }
  }, []);
  dependencyMap = callback;
  const items3 = [callback];
  const effect = React.useEffect(() => {
    callback();
    return () => {
      closure_1.current = [];
    };
  }, items3);
  const effect1 = React.useEffect(() => {
    sku(callback[17]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = callback(closure_2[17]).restoreDefaultOrientation();
    };
  }, []);
  obj = { style: items4 };
  const items4 = [tmp.root, memo1];
  let tmp10 = null != memo;
  if (tmp10) {
    obj = {};
    const obj1 = { uri: memo };
    obj.source = obj1;
    obj.style = tmp.backdropImage;
    obj.blurRadius = 4;
    obj.resizeMode = "cover";
    tmp10 = callback(closure_5, obj);
  }
  const items5 = [tmp10, callback(importDefault(dependencyMap[18]), { style: tmp.backdropGradient, start: constants.START, end: constants.END, locations: [0.167, 0.167, 16.667], colors: [] }), , ];
  const obj3 = { style: tmp.main };
  const obj4 = { style: tmp.header };
  const obj5 = {
    onPress: onClose,
    backImage() {
      return callback(sku(callback[21]).XSmallIcon, { size: "lg", style: tmp.closeButtonIcon });
    }
  };
  const intl = arg1(dependencyMap[22]).intl;
  obj5.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.cpT0Cq);
  obj5.labelVisible = false;
  obj4.children = callback(arg1(dependencyMap[20]).HeaderBackButton, obj5);
  const items6 = [callback(closure_7, obj4), , ];
  const obj6 = { style: { flex: 1 }, contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  const obj7 = { style: items7 };
  const items7 = [tmp.preview, previewViewStyle];
  obj7.children = callback(importDefault(dependencyMap[23]), { sku, size: 250 });
  const items8 = [callback(importDefault(dependencyMap[10]).View, obj7), ];
  const obj8 = { style: items9 };
  const items9 = [tmp.messages, textViewStyle];
  const obj9 = { INTEGRATION_CREATE: "<string:1602048>", ConstraintReasonCode: "<string:1572864>", style: tmp.title, children: title };
  const items10 = [callback(arg1(dependencyMap[24]).Text, obj9), ];
  const obj10 = { INTEGRATION_CREATE: "<string:3574726658>", ConstraintReasonCode: "<string:1234436097>", style: tmp.description, children: body };
  items10[1] = callback(arg1(dependencyMap[24]).Text, obj10);
  obj8.children = items10;
  items8[1] = callback2(importDefault(dependencyMap[10]).View, obj8);
  obj6.children = items8;
  items6[1] = callback2(closure_6, obj6);
  const obj11 = { style: tmp.footer };
  let tmp16 = null != finePrint;
  if (tmp16) {
    const obj12 = { style: tmp.finePrint, children: finePrint };
    tmp16 = callback(arg1(dependencyMap[24]).Text, obj12);
  }
  const items11 = [tmp16, ];
  const obj13 = { style: tmp.cta };
  const obj14 = {};
  if (null != onCtaPress) {
    onClose = onCtaPress;
  }
  obj14.onPress = onClose;
  if (null == ctaLabel) {
    const intl2 = arg1(dependencyMap[22]).intl;
    ctaLabel = intl2.string(arg1(dependencyMap[22]).t.cpT0Cq);
  }
  obj14.text = ctaLabel;
  obj14.icon = ctaIcon;
  obj14.loading = ctaLoading;
  obj14.size = "lg";
  obj14.grow = true;
  obj13.children = callback(arg1(dependencyMap[25]).Button, obj14);
  items11[1] = callback(closure_7, obj13);
  obj11.children = items11;
  items6[2] = callback2(closure_7, obj11);
  obj3.children = items6;
  items5[2] = callback2(arg1(dependencyMap[19]).SafeAreaPaddingView, obj3);
  const items12 = [tmp.curtain, curtainViewStyle];
  items5[3] = callback(importDefault(dependencyMap[10]).View, { style: items12, pointerEvents: "none" });
  obj.children = items5;
  return callback2(closure_7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_11, Orientation: closure_12, VerticalGradient: closure_13 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
obj.root = obj;
obj.backdropImage = {};
obj.backdropGradient = { "Bool(false)": null, "Bool(false)": null };
const obj1 = { "Bool(false)": null, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
obj.curtain = obj1;
obj.main = { flex: 1 };
const tmp4 = arg1(dependencyMap[7]);
obj.header = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
obj.closeButtonIcon = { tintColor: importDefault(dependencyMap[9]).colors.WHITE };
obj.body = {};
obj.preview = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
const obj3 = { tintColor: importDefault(dependencyMap[9]).colors.WHITE };
obj.messages = { paddingTop: importDefault(dependencyMap[9]).space.PX_24, gap: importDefault(dependencyMap[9]).space.PX_8 };
const obj4 = { paddingTop: importDefault(dependencyMap[9]).space.PX_24, gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.title = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_32 };
const obj5 = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_32 };
obj.description = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_32 };
const obj6 = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_32 };
obj.footer = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
const obj7 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
obj.cta = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_24 };
const obj8 = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_24 };
obj.finePrint = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_24, marginBottom: importDefault(dependencyMap[9]).space.PX_12 };
let closure_16 = obj.createStyles(obj);
const obj9 = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_24, marginBottom: importDefault(dependencyMap[9]).space.PX_12 };
const obj10 = {};
const obj13 = arg1(dependencyMap[8]);
obj10.linkAccountIcon = { marginRight: importDefault(dependencyMap[9]).space.PX_4 };
let closure_17 = obj13.createStyles(obj10);
let closure_18 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
let closure_19 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [];
const obj11 = { marginRight: importDefault(dependencyMap[9]).space.PX_4 };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  let analyticsLocations;
  let orbsReward;
  skuId = skuId.skuId;
  const arg1 = skuId;
  ({ orbsReward, analyticsLocations } = skuId);
  const importDefault = analyticsLocations;
  let closure_3;
  let React;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let closure_8;
  let closure_9;
  let closure_10;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => ref.get(skuId));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[26]);
  let applicationId;
  if (null != stateFromStores) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(applicationId);
  closure_3 = getOrFetchApplication;
  let tmp6 = null;
  const tmp = callback4();
  if (null != getOrFetchApplication) {
    tmp6 = getOrFetchApplication;
  }
  const tmp5Result = importDefault(dependencyMap[27])(tmp6);
  const fetched = tmp5Result.fetched;
  React = fetched;
  hasAlreadyLinked = tmp5Result.hasAlreadyLinked;
  canStartAuthorization = tmp5Result.canStartAuthorization;
  startAuthorization = tmp5Result.startAuthorization;
  let obj2 = arg1(dependencyMap[28]);
  let applicationId1;
  if (null != stateFromStores) {
    applicationId1 = stateFromStores.applicationId;
  }
  const items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = obj2.useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  const memo = React.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], analyticsLocations(stateFromStores[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items;
  }, items1);
  closure_8 = memo;
  obj = { analyticsLocations: memo, skuId };
  let applicationId2;
  if (null != stateFromStores) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj.applicationId = applicationId2;
  obj.canStartAuthorization = canStartAuthorization;
  closure_9 = React.useRef(obj);
  const items2 = [canStartAuthorization];
  const effect = React.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = React.useEffect(() => {
    let analyticsLocations;
    let applicationId;
    let canStartAuthorization;
    let skuId;
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      let obj = analyticsLocations(stateFromStores[30]);
      obj = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (null != stateFromStores) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = React.useCallback(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.is_gift = false;
    obj.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    obj = { analyticsLocations: memo };
    startAuthorization(obj);
  }, items4);
  importDefault(dependencyMap[31])(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, type: skuId(stateFromStores[32]).SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  const intl = arg1(dependencyMap[22]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    let stringResult = string(arg1(tmp20[22]).t.5glWta);
  } else {
    stringResult = string(importDefault(tmp20[33]).bRPsNX);
  }
  closure_10 = tmp23;
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
  const memo1 = React.useMemo(() => {
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
      if (tmp23) {
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
        formatToPlainStringResult = formatToPlainString(tmp2(tmp3[22]).t.EgCl+Q, obj);
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
      const tmp2 = skuId;
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj = { numDays: closure_10 };
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.TTj7ME, obj);
  }
  obj1 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult };
  let stringResult1;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const intl3 = arg1(dependencyMap[22]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[22]).t.VDAhr+);
  }
  obj1.ctaLabel = stringResult1;
  let tmp37;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    obj2 = { size: "xs", color: importDefault(dependencyMap[9]).colors.WHITE, style: tmp.linkAccountIcon };
    tmp37 = callback(arg1(dependencyMap[34]).ExperimentalGameControllerLinkIcon, obj2);
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
  ({ skuId: closure_0, orbsReward, recipient } = analyticsLocations);
  const importDefault = recipient;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_9.get(closure_0));
  let closure_3 = stateFromStores;
  const items1 = [analyticsLocations];
  const React = React.useMemo(() => {
    const items = [...null != analyticsLocations ? analyticsLocations : [], recipient(analyticsLocations[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items;
  }, items1);
  importDefault(dependencyMap[31])(() => {
    let obj = recipient(analyticsLocations[30]);
    obj = { location_stack: closure_4, type: callback(analyticsLocations[32]).SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: callback };
    let applicationId;
    if (null != stateFromStores) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  const intl = arg1(dependencyMap[22]).intl;
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  obj = {
    sku: stateFromStores,
    title: intl.string(arg1(dependencyMap[22]).t.5glWta),
    body: React.useMemo(() => {
      const intl = callback(analyticsLocations[22]).intl;
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
      return intl.formatToPlainString(callback(analyticsLocations[22]).t.2VjPTw, obj);
    }, items2),
    onClose: analyticsLocations.onClose
  };
  return callback(PurchaseSuccessModalBase, obj);
};

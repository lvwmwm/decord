// Module ID: 9766
// Function ID: 75955
// Name: CancelButton
// Dependencies: []
// Exports: default

// Module 9766 (CancelButton)
function CancelButton(arg0) {
  let onCancel;
  ({ tintColor: closure_0, onCancel } = arg0);
  const importDefault = onCancel;
  let closure_2 = callback4();
  const items = [onCancel];
  const callback = React.useCallback(() => {
    if (null != onCancel) {
      onCancel();
    }
    onCancel(closure_2[11]).close();
  }, items);
  const obj = {
    onPress: callback,
    backImage() {
      const style = [closeButtonIcon.closeButtonIcon, { tintColor: callback }];
      return callback2(callback(closeButtonIcon[13]).XSmallIcon, { size: "lg", style });
    }
  };
  const intl = arg1(closure_2[14]).intl;
  obj.accessibilityLabel = intl.string(arg1(closure_2[14]).t.cpT0Cq);
  obj.labelVisible = false;
  return callback3(arg1(closure_2[12]).HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  product = product.product;
  let importDefault;
  let dependencyMap;
  let closure_3;
  const backgroundColors = importDefault(dependencyMap[20])(product.styles).backgroundColors;
  const arg1 = backgroundColors;
  let tertiary;
  if (null != backgroundColors) {
    tertiary = backgroundColors.tertiary;
  }
  importDefault = tmp3;
  let obj = arg1(dependencyMap[21]);
  const token = obj.useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW);
  dependencyMap = token;
  const tmp = callback5(product.type);
  const token1 = arg1(dependencyMap[21]).useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH);
  closure_3 = token1;
  const items = [backgroundColors, token, token1, null != tertiary];
  const memo = React.useMemo(() => {
    if (null == backgroundColors) {
      const items = [token, token, token1, closure_22, closure_22];
      let items2 = items;
    } else {
      const primary2 = backgroundColors.primary;
      const toHexStringResult = primary2.toHexString();
      if (tmp3) {
        const items1 = [toHexStringResult, , ];
        const secondary2 = tmp9.secondary;
        items1[1] = secondary2.toHexString();
        const tertiary = tmp9.tertiary;
        items1[2] = tertiary.toHexString();
        items2 = items1;
      } else {
        items2 = [toHexStringResult, , , , ];
        const primary = tmp9.primary;
        items2[1] = primary.toHexString();
        const secondary = tmp9.secondary;
        items2[2] = secondary.toHexString();
        items2[3] = closure_22;
        items2[4] = closure_22;
      }
    }
    return items2;
  }, items);
  obj = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [-1313751041, 949895137, 505290752] : [1341581688, 28992, 993067008, -1752346657, 843063854], colors: memo };
  return callback3(importDefault(dependencyMap[22]), obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, ScrollView: closure_7, View: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const BUNDLE_PREVIEW_CONFIG = arg1(dependencyMap[5]).BUNDLE_PREVIEW_CONFIG;
const tmp2 = arg1(dependencyMap[3]);
({ Orientation: closure_10, VerticalGradient: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let closure_15 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.closeButtonIcon = obj;
let closure_16 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
let closure_17 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
  obj.header = obj;
  obj.headerLeading = { Text: null, applicationId: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", message: true };
  obj.imageBackground = { marginRight: "title", height: "__closure", width: "title", marginRight: "__closure", display: "then", alignItems: "url" };
  obj.backdrop = {};
  obj.main = { flex: 1 };
  obj.curtain = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
  obj.body = {};
  const obj2 = {};
  let num = 0;
  if (arg0 === arg1(dependencyMap[10]).CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  obj2.flex = num;
  let str = 0;
  if (arg0 === arg1(dependencyMap[10]).CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  obj2.marginTop = str;
  let PX_32;
  if (arg0 === arg1(dependencyMap[10]).CollectiblesItemType.NAMEPLATE) {
    PX_32 = importDefault(dependencyMap[9]).space.PX_32;
  }
  obj2.marginHorizontal = PX_32;
  if (flag) {
    if (arg0 === arg1(dependencyMap[10]).CollectiblesItemType.AVATAR_DECORATION) {
      const obj3 = { shadowColor: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_630, shadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" } };
      let obj8 = obj3;
    }
    const merged = Object.assign(obj8);
    obj.preview = obj2;
    obj.previewBundle = {};
    const obj4 = { paddingTop: importDefault(dependencyMap[9]).space.PX_24 };
    let str2;
    if (arg0 === arg1(dependencyMap[10]).CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj4.minHeight = str2;
    obj4.gap = importDefault(dependencyMap[9]).space.PX_16;
    obj.messages = obj4;
    const obj5 = { textAlign: "center", marginHorizontal: importDefault(dependencyMap[9]).space.PX_32 };
    obj.title = obj5;
    const obj6 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
    obj.footer = obj6;
    const obj7 = { flexDirection: "row", gap: importDefault(dependencyMap[9]).space.PX_12, paddingVertical: importDefault(dependencyMap[9]).space.PX_16, marginHorizontal: importDefault(dependencyMap[9]).space.PX_24, borderRadius: importDefault(dependencyMap[9]).radii.round };
    obj.cta = obj7;
    return obj;
  }
  obj8 = {};
});
let closure_18 = { code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
let closure_19 = { code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [];
const obj4 = arg1(dependencyMap[8]);
let closure_22 = importDefault(dependencyMap[19])("black").toHexString();
const obj5 = importDefault(dependencyMap[19])("black");
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default function ProductPurchaseSuccessModal(orbBalancePriorToPurchase) {
  let avatarDecorationSize;
  let avatarSize;
  let canUseNow;
  let curtainViewStyle;
  let handleEditProfile;
  let handleUseNow;
  let onCancel;
  let onSuccess;
  let previewViewStyle;
  let product;
  let renderMessages;
  let showOrbBalancePill;
  let textViewStyle;
  let useCategoryImage;
  ({ product, useCategoryImage } = orbBalancePriorToPurchase);
  if (useCategoryImage === undefined) {
    useCategoryImage = false;
  }
  ({ renderMessages, showOrbBalancePill, onSuccess, onCancel } = orbBalancePriorToPurchase);
  if (showOrbBalancePill === undefined) {
    showOrbBalancePill = false;
  }
  let prop = orbBalancePriorToPurchase.orbBalancePriorToPurchase;
  if (prop === undefined) {
    prop = null;
  }
  let callback;
  let importDefault;
  let obj = callback(dependencyMap[23]);
  const currentUser = obj.useCurrentUser();
  const backgroundColors = importDefault(dependencyMap[20])(product.styles).backgroundColors;
  let tertiary;
  if (null != backgroundColors) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp3 = callback5(product.type, null != tertiary);
  let obj2 = callback(dependencyMap[21]);
  let token = obj2.useToken(importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_ACTIVE);
  callback = React.useRef(closure_21);
  callback = React.useCallback(() => {
    const arr = callback(ref.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = ref(closure_2[18]).triggerHapticFeedback(ref(closure_2[18]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = ref(closure_2[18]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      ref.current = substr;
    }
    if (substr.length >= length.length / 2) {
      const result1 = ref(closure_2[18]).triggerHapticFeedback(ref(closure_2[18]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = ref(closure_2[18]);
    } else {
      const result2 = ref(closure_2[18]).triggerHapticFeedback(ref(closure_2[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = ref(closure_2[18]);
    }
  }, []);
  importDefault = callback;
  const items = [callback];
  const effect = React.useEffect(() => {
    callback();
    return () => {
      closure_0.current = [];
    };
  }, items);
  let obj3 = callback(dependencyMap[24]);
  const avatarDecorationPreviewSizes = obj3.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  let obj4 = callback(dependencyMap[25]);
  const items1 = [closure_9];
  const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp9 = product.type === callback(dependencyMap[10]).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp9) {
    tmp9 = product.type === callback(dependencyMap[10]).CollectiblesItemType.PROFILE_FRAME;
  }
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = function useAnimationStyles(stateFromStores, isProfilePreview) {
    const callback = isProfilePreview;
    let obj = ref(sharedValue[15]);
    const sharedValue = obj.useSharedValue(0);
    let obj1 = ref(sharedValue[15]);
    const sharedValue1 = obj1.useSharedValue(0);
    const items = [sharedValue, stateFromStores, sharedValue1];
    const effect = React.useEffect(() => {
      let num = 1;
      if (!arg0) {
        let obj = arg0(sharedValue[15]);
        num = obj.withDelay(200, arg0(sharedValue[16]).withSpring(1, { -255503206: "transparent", 1694983704: null }));
        const obj2 = arg0(sharedValue[16]);
      }
      const result = sharedValue.set(num);
      let num5 = 1;
      if (!arg0) {
        const obj3 = arg0(sharedValue[15]);
        obj = { duration: 200 };
        num5 = obj3.withDelay(200, arg0(sharedValue[17]).withTiming(1, obj));
        const obj4 = arg0(sharedValue[17]);
      }
      const result1 = sharedValue1.set(num5);
    }, items);
    obj = {};
    const fn = function n() {
      let obj = { opacity: arg0(sharedValue[15]).interpolate(sharedValue.get(), [77601039, 1612144654], []) };
      obj = {};
      const obj2 = arg0(sharedValue[15]);
      let num = 0;
      const value = sharedValue.get();
      if (arg1) {
        num = 0.6;
      }
      const items = [num, 1];
      obj.scale = arg0(sharedValue[15]).interpolate(value, [77601039, 1612144654], items);
      const items1 = [obj];
      obj.transform = items1;
      return obj;
    };
    obj = { interpolate: ref(sharedValue[15]).interpolate, springInput: sharedValue, isProfilePreview };
    fn.__closure = obj;
    fn.__workletHash = 15385317790278;
    fn.__initData = closure_18;
    obj.previewViewStyle = stateFromStores(sharedValue[15]).useAnimatedStyle(fn);
    const obj4 = stateFromStores(sharedValue[15]);
    const fn2 = function s() {
      let obj = { opacity: arg0(sharedValue[15]).interpolate(sharedValue.get(), [77601039, 1612144654], [77601039, 1612144654]) };
      obj = {};
      const obj2 = arg0(sharedValue[15]);
      obj.scale = arg0(sharedValue[15]).interpolate(sharedValue.get(), [77601039, 1612144654], ["<string:1075222413>", "construct"]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj1 = { interpolate: ref(sharedValue[15]).interpolate, springInput: sharedValue };
    fn2.__closure = obj1;
    fn2.__workletHash = 4517716462039;
    fn2.__initData = closure_19;
    obj.textViewStyle = stateFromStores(sharedValue[15]).useAnimatedStyle(fn2);
    const obj6 = stateFromStores(sharedValue[15]);
    const fn3 = function c() {
      const obj = { opacity: arg0(sharedValue[15]).interpolate(sharedValue1.get(), [77601039, 1612144654], ["borderRadius", "transform"]) };
      return obj;
    };
    const obj8 = stateFromStores(sharedValue[15]);
    fn3.__closure = { interpolate: stateFromStores(sharedValue[15]).interpolate, linearInput: sharedValue1 };
    fn3.__workletHash = 6018737312;
    fn3.__initData = closure_20;
    obj.curtainViewStyle = obj8.useAnimatedStyle(fn3);
    return obj;
  }(stateFromStores, tmp9));
  let obj5 = callback(dependencyMap[26]);
  const category = obj5.useFetchCollectiblesProductCategory(product.skuId).category;
  if (null != category) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  let obj6 = callback(dependencyMap[27]);
  handleUseNow = obj6.useHandleUseNow({ product, onSuccess });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  let obj7 = callback(dependencyMap[28]);
  const effect1 = React.useEffect(() => {
    ref(closure_2[29]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = callback(closure_2[29]).restoreDefaultOrientation();
    };
  }, []);
  let obj8 = callback(dependencyMap[30]);
  const previewCollectibleProduct = obj8.usePreviewCollectibleProduct(product, true);
  let obj9 = callback(dependencyMap[31]);
  const shopProductItems = obj9.useShopProductItems(product);
  obj = { style: tmp3.root, id: product.skuId };
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      obj = {};
      const obj1 = { uri: mobileBgUrl };
      obj.source = obj1;
      obj.style = tmp3.imageBackground;
      let tmp20 = callback3(closure_6, obj);
    }
    const items2 = [tmp20, , ];
    obj2 = {};
    const items3 = [tmp3.main, ];
    obj3 = {};
    let str;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    obj3.backgroundColor = str;
    items3[1] = obj3;
    obj2.style = items3;
    obj4 = { style: tmp3.header };
    obj5 = { style: tmp3.headerLeading };
    if (showOrbBalancePill) {
      obj6 = { initialRenderedBalance: prop, balance: obj7.useFetchVirtualCurrencyBalance().balance };
      showOrbBalancePill = callback3(callback(dependencyMap[33]).BalanceWidgetPill, obj6);
    }
    obj5.children = showOrbBalancePill;
    const items4 = [callback3(closure_8, obj5), ];
    obj7 = {};
    let toHexStringResult;
    if (null != backgroundColors) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (null != toHexStringResult) {
      token = toHexStringResult;
    }
    obj7.tintColor = token;
    obj7.onCancel = onCancel;
    items4[1] = callback3(CancelButton, obj7);
    obj4.children = items4;
    const items5 = [closure_13(closure_8, obj4), , ];
    obj8 = {};
    obj9 = { flex: 1 };
    obj8.style = obj9;
    obj8.contentContainerStyle = tmp3.body;
    obj8.alwaysBounceVertical = false;
    const obj10 = {};
    const items6 = [tmp3.preview, previewViewStyle];
    obj10.style = items6;
    const type = product.type;
    if (callback(dependencyMap[10]).CollectiblesItemType.BUNDLE === type) {
      const obj11 = { style: tmp3.previewBundle };
      const obj12 = {};
      ({ firstAvatarDecoration: obj27.deco, firstProfileEffect: obj27.pfx, firstNameplate: obj27.nameplate } = shopProductItems);
      obj12.previewAssets = product.previewAssets;
      obj12.disableStaticBackground = true;
      obj12.size = "large";
      obj12.targetSize = closure_15;
      obj12.exposureLocation = "ProductPurchaseSuccessModal";
      obj11.children = callback3(importDefault(dependencyMap[34]), obj12);
      let tmp43 = callback3(closure_8, obj11);
    } else if (callback(dependencyMap[10]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj13 = { item: callback2(product.items, 1)[0], size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
      tmp43 = callback3(importDefault(dependencyMap[35]), obj13);
    } else if (callback(dependencyMap[10]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj14 = { user: currentUser, profileEffect: product.items[0] };
      tmp43 = callback3(importDefault(dependencyMap[36]), obj14);
    } else if (callback(dependencyMap[10]).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj15 = { user: currentUser, profileFrame: product.items[0] };
      tmp43 = callback3(importDefault(dependencyMap[37]), obj15);
    } else {
      tmp43 = null;
      if (callback(dependencyMap[10]).CollectiblesItemType.NAMEPLATE === type) {
        const obj16 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp43 = callback3(callback(dependencyMap[38]).NameplatePreview, obj16);
      }
    }
    obj10.children = tmp43;
    const items7 = [callback3(importDefault(dependencyMap[15]).View, obj10), ];
    const obj17 = {};
    const items8 = [tmp3.messages, textViewStyle];
    obj17.style = items8;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj18 = {};
      const obj19 = { cachedAt: "png", edpbxy: "md", style: tmp3.title };
      const intl3 = callback(dependencyMap[14]).intl;
      const obj20 = { itemName: product.name };
      obj19.children = intl3.format(callback(dependencyMap[14]).t.YNaxMp, obj20);
      const items9 = [callback3(callback(dependencyMap[39]).Text, obj19), ];
      const obj21 = { cachedAt: "<string:3559849986>", edpbxy: "<string:1240334337>", style: tmp3.title };
      const result = callback(dependencyMap[40]).isPremiumCollectiblesProduct(product);
      const intl4 = callback(dependencyMap[14]).intl;
      const format = intl4.format;
      const t = callback(dependencyMap[14]).t;
      if (result) {
        const obj22 = { itemName: product.name };
        let formatResult = format(t.nW6E3m, obj22);
      } else {
        const obj23 = { itemName: product.name };
        formatResult = format(t.4kp0AB, obj23);
      }
      obj21.children = formatResult;
      items9[1] = callback3(callback(dependencyMap[39]).Text, obj21);
      obj18.children = items9;
      renderMessagesResult = closure_13(closure_14, obj18);
      const obj41 = callback(dependencyMap[40]);
      const tmp84 = closure_13;
      const tmp85 = closure_14;
      const tmp89 = callback3;
    }
    obj17.children = renderMessagesResult;
    items7[1] = callback3(importDefault(dependencyMap[15]).View, obj17);
    obj8.children = items7;
    items5[1] = closure_13(closure_7, obj8);
    const obj24 = { style: tmp3.footer };
    const obj25 = { style: tmp3.cta };
    if (canUseNow) {
      const obj26 = { loading: isApplying, disabled: isApplying, onPress: handleUseNow };
      const intl2 = callback(dependencyMap[14]).intl;
      obj26.text = intl2.string(callback(dependencyMap[14]).t.MAS7uK);
      obj26.size = "lg";
      obj26.grow = true;
      let obj27 = obj26;
    } else {
      obj27 = { onPress: handleEditProfile };
      const intl = callback(dependencyMap[14]).intl;
      obj27.text = intl.string(callback(dependencyMap[14]).t.2p2aYz);
      obj27.size = "lg";
      obj27.grow = true;
    }
    obj25.children = callback3(callback(dependencyMap[41]).Button, obj27);
    obj24.children = callback3(closure_8, obj25);
    items5[2] = callback3(closure_8, obj24);
    obj2.children = items5;
    items2[1] = closure_13(callback(dependencyMap[32]).SafeAreaPaddingView, obj2);
    const obj28 = {};
    const items10 = [tmp3.curtain, curtainViewStyle];
    obj28.style = items10;
    obj28.pointerEvents = "none";
    items2[2] = callback3(importDefault(dependencyMap[15]).View, obj28);
    obj.children = items2;
    return tmp18(tmp19, obj);
  }
  tmp20 = callback3(ProductPurchaseGradientBackground, { product });
};

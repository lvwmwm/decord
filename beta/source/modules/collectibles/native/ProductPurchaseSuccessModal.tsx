// Module ID: 10543
// Function ID: 10544
// Name: ProductPurchaseSuccessModal
// Dependencies: [32, 718, 19, 17, 4825, 1074, 21, 4836, 576, 1974, 10542, 5943, 5992, 1115, 4566, 5280, 4837, 4801, 6972, 10544, 4531, 5293, 7623, 10546, 504, 10547, 10548, 8316, 7780, 7616, 6544, 10553, 8260, 8273, 10571, 10789, 10790, 4832, 6974, 5281, 2]
// Exports: default

// Module 10543 (ProductPurchaseSuccessModal)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import _mod5943 from "module_5943" /* 5943 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import _modDef6972 from "module_6972" /* 6972 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10542 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 718 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set, set2;

let c10;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function CancelButton(arg0) {
  let closeButtonIcon;
  let intl;
  let onCancel;
  let require;
  let tintColor;
  ({ tintColor: require, onCancel } = arg0);
  dependencyMap = closure_15();
  let items = [onCancel];
  const callback = react.useCallback(() => {
    if (onCancel != null) {
      tmp();
    }
    const obj = ProductPurchaseSuccessActionCreatorsDefault;
    obj.close();
  }, items);
  let obj = {
    onPress: callback,
    backImage() {
      let items;
      const obj = { size: "lg", style: items };
      items = [closeButtonIcon.closeButtonIcon, ];
      const obj2 = { tintColor: require };
      items[1] = obj2;
      return closure_12(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl.string(intl5.t.cpT0Cq),
    displayMode: "minimal"
  };
  const HeaderBackButton = _mod5943.HeaderBackButton;
  intl = intl5.intl;
  return closure_12(HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  let closure_1;
  product = product.product;
  importDefault = undefined;
  let token;
  let token1;
  const tmp = closure_16(product.type);
  const backgroundColors = require("useCollectiblesShopStyles")(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  importDefault = tmp5;
  const obj = backgroundColors(token[20]);
  token = obj.useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const obj2 = backgroundColors(token[20]);
  token1 = obj2.useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [backgroundColors, token, token1, tmp5];
  const memo = react.useMemo(() => {
    let items2;
    if (null == backgroundColors) {
      const items = [token, token, token1, closure_22, closure_22];
      items2 = items;
    } else {
      const primary2 = tmp.primary;
      const toHexStringResult = primary2.toHexString();
      if (closure_1) {
        const items1 = [toHexStringResult, , ];
        const secondary2 = tmp.secondary;
        items1[1] = secondary2.toHexString();
        const tertiary = tmp.tertiary;
        items1[2] = tertiary.toHexString();
        items2 = items1;
      } else {
        items2 = [toHexStringResult, , , , ];
        const primary = tmp.primary;
        items2[1] = primary.toHexString();
        const secondary = tmp.secondary;
        items2[2] = secondary.toHexString();
        items2[3] = closure_22;
        items2[4] = closure_22;
      }
    }
    return items2;
  }, items);
  const obj3 = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1], colors: memo };
  return closure_12(require("LinearGradient"), obj3);
}
({ Image: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ Orientation: c10, VerticalGradient: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { closeButtonIcon: obj2 };
obj2 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_15 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles((arg0) => {
  let PX_32;
  let rect;
  let str;
  let str2;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, headerLeading: { flex: 1, flexDirection: "row", alignItems: "center" }, imageBackground: { resizeMode: "cover", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, backdrop: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, main: { flex: 1 }, curtain: rect, body: { flexGrow: 1, flexDirection: "column", justifyContent: "center" }, preview: null, previewBundle: null, messages: null, title: null, footer: null, cta: null };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  rect = { position: "absolute", backgroundColor: nativeDefault.colors.BLACK, top: 0, bottom: 0, left: 0, right: 0 };
  let num = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  const obj4 = { flexDirection: "row", justifyContent: "center", alignItems: "center", flex: num, marginTop: str, marginHorizontal: PX_32 };
  str = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  PX_32 = undefined;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    PX_32 = tmp(576).space.PX_32;
  }
  if (flag) {
    let obj10;
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      obj10 = { shadowColor: nativeDefault.unsafe_rawColors.PRIMARY_630, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 60, elevation: 24 };
      const obj5 = { shadowColor: nativeDefault.unsafe_rawColors.PRIMARY_630, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 60, elevation: 24 };
    }
    const merged = Object.assign(obj10);
    obj.preview = obj4;
    obj.previewBundle = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj6 = { paddingTop: nativeDefault.space.PX_24, minHeight: str2, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_16 };
    str2 = undefined;
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj.messages = obj6;
    obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
    const obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
    obj.footer = { marginBottom: nativeDefault.space.PX_16 };
    const obj8 = { marginBottom: nativeDefault.space.PX_16 };
    obj.cta = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
    const obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.round };
    return obj;
  }
  obj10 = {};
});
const __initData = { code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
const __initData2 = { code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj5 = _modDef6972("black");
let closure_22 = obj5.toHexString();
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default function ProductPurchaseSuccessModal(orbBalancePriorToPurchase) {
  let Button;
  let _undefined;
  let avatarDecorationSize;
  let avatarSize;
  let c2;
  let canUseNow;
  let formatResult;
  let handleEditProfile;
  let handleUseNow;
  let intl;
  let intl2;
  let intl3;
  let items11;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let mobileBgUrl;
  let obj24;
  let obj30;
  let obj32;
  let obj8;
  let onCancel;
  let onSuccess;
  let product;
  let ref;
  let renderMessages;
  let renderMessagesResult;
  let showOrbBalancePill;
  let tmp25;
  let tmp30Result;
  let tmp30Result2;
  let useCategoryImage;
  let useReducedMotion;
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
  _require = undefined;
  let callback;
  dependencyMap = undefined;
  const stageCollectibleChangeForEditProfile = orbBalancePriorToPurchase.stageCollectibleChangeForEditProfile;
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const backgroundColors = callback(10544)(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_16(product.type, null != tertiary);
  let obj4 = react;
  const tmp2Result = require("useToken");
  const token = tmp2Result.useToken(tmp4(576).colors.INTERACTIVE_TEXT_ACTIVE);
  _require = react.useRef(length);
  callback = react.useCallback(() => {
    const arr = _toArray(ref.current);
    const first = arr[0];
    const substr = arr.slice(1);
    const tmp = ref;
    if (null != first) {
      if (0 === substr.length) {
        const obj3 = HapticUtils;
        const result = obj3.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
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
  let items = [callback];
  const effect = react.useEffect(() => {
    callback();
    return () => {
      ref.current = [];
    };
  }, items);
  const tmp2Result13 = require("useAvatarDecorationPreviewSizes");
  const avatarDecorationPreviewSizes = tmp2Result13.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  let items1 = [AccessibilityStore];
  const tmp2Result14 = require("get initialized");
  const stateFromStores = tmp2Result14.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp12 = product.type === tmp2(1974).CollectiblesItemType.PROFILE_EFFECT || product.type === tmp2(1974).CollectiblesItemType.PROFILE_FRAME;
  let closure_1 = tmp12;
  const tmp2Result15 = require("ReanimatedRexport");
  const sharedValue = tmp2Result15.useSharedValue(0);
  const tmp2Result16 = require("ReanimatedRexport");
  const sharedValue1 = tmp2Result16.useSharedValue(0);
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = obj4.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!stateFromStores) {
      const withDelay = stateFromStores(sharedValue[14]).withDelay;
      stateFromStores(sharedValue[14]);
      const obj = stateFromStores(sharedValue[15]);
      num = withDelay(200, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num3 = 1;
    set2 = sharedValue1.set;
    if (!stateFromStores) {
      const withDelay2 = stateFromStores(sharedValue[14]).withDelay;
      stateFromStores(sharedValue[14]);
      const obj2 = stateFromStores(sharedValue[16]);
      num3 = withDelay2(200, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num3);
  }, items2);
  const fn = function l() {
    let items;
    let items1;
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items1 };
    obj2 = stateFromStores(sharedValue[14]);
    const interpolate = stateFromStores(sharedValue[14]).interpolate;
    let num = 0;
    stateFromStores(sharedValue[14]);
    const value = sharedValue.get();
    if (closure_1) {
      num = 0.6;
    }
    const obj3 = { scale: interpolate(value, [0, 1], items) };
    items = [num, 1];
    items1 = [obj3];
    return obj;
  };
  const tmp2Result17 = require("ReanimatedRexport");
  let obj2 = { interpolate: tmp2(4566).interpolate, springInput: sharedValue, isProfilePreview: tmp12 };
  fn.__closure = obj2;
  fn.__workletHash = 15385317790278;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result17.useAnimatedStyle(fn);
  const fn2 = function n() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
    obj2 = stateFromStores(sharedValue[14]);
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
    items = [obj3];
    obj4 = stateFromStores(sharedValue[14]);
    return obj;
  };
  const tmp2Result18 = require("ReanimatedRexport");
  let obj3 = { interpolate: tmp2(4566).interpolate, springInput: sharedValue };
  fn2.__closure = obj3;
  fn2.__workletHash = 4517716462039;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmp2Result18.useAnimatedStyle(fn2);
  const fn3 = function s() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
    obj2 = stateFromStores(sharedValue[14]);
    return obj;
  };
  const tmp2Result19 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 6018737312;
  fn3.__initData = __initData3;
  ({ interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 });
  const animatedStyle2 = tmp2Result19.useAnimatedStyle(fn3);
  const tmp2Result20 = require("useFetchCollectiblesProductCategory");
  const category = tmp2Result20.useFetchCollectiblesProductCategory(product.skuId).category;
  if (category != null) {
    mobileBgUrl = category.mobileBgUrl;
  }
  let first = _slicedToArray(product.items, 1)[0];
  const tmp2Result21 = require("useHandleUseNow");
  const handleUseNow1 = tmp2Result21.useHandleUseNow({ product, onSuccess, stageCollectibleChangeForEditProfile });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  const tmp2Result22 = require("useFetchVirtualCurrencyBalance");
  const balance = tmp2Result22.useFetchVirtualCurrencyBalance().balance;
  const effect2 = obj4.useEffect(() => {
    let obj = ref(c2[28]);
    obj.lockOrientation(constants.PORTRAIT);
    return () => {
      const obj = ref(_undefined[28]);
      const result = obj.restoreDefaultOrientation();
    };
  }, []);
  const tmp2Result23 = require("useShopProductItems");
  const shopProductItems = tmp2Result23.useShopProductItems(product);
  [tmp25, c2] = obj4.useState();
  const obj6 = { style: tmp6.root, id: product.skuId, children: null };
  _slicedToArray(obj4.useState(), 2);
  if (useCategoryImage) {
    let tmp29;
    let tmp30;
    let tmp31;
    if (null != mobileBgUrl) {
      const obj7 = { source: obj8, style: tmp6.imageBackground };
      obj8 = { uri: mobileBgUrl };
      tmp29 = closure_12(closure_6, obj7);
      tmp30 = closure_12;
      tmp31 = closure_12;
    }
    const items3 = [tmp29, , ];
    const items4 = [tmp6.main, ];
    let str;
    const SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    const rect = { style: items4, top: true, bottom: true, left: true, right: true, children: items6 };
    const obj9 = { backgroundColor: str };
    items4[1] = obj9;
    const obj10 = { style: tmp6.header, children: items5 };
    const obj11 = { style: tmp6.headerLeading, children: showOrbBalancePill };
    if (showOrbBalancePill) {
      const obj12 = { initialRenderedBalance: prop, balance };
      showOrbBalancePill = tmp31(tmp2(10553).BalanceWidgetPill, obj12);
    }
    items5 = [tmp31(closure_8, obj11), ];
    let toHexStringResult;
    const tmp34 = CancelButton;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj13 = { tintColor: toHexStringResult, onCancel };
    items5[1] = tmp31(tmp34, obj13);
    items6 = [closure_13(closure_8, obj10), , ];
    const obj15 = { style: items7, children: tmp30Result2 };
    items7 = [tmp6.preview, animatedStyle];
    const type = product.type;
    const obj14 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: items8 };
    const View = tmp4(4566).View;
    const tmp36 = closure_7;
    if (require("CollectiblesItemType").CollectiblesItemType.BUNDLE === type) {
      const obj16 = { style: tmp6.previewBundle, onLayout: tmp26, children: tmp30Result };
      tmp30Result = null != tmp25;
      if (tmp30Result) {
        const obj17 = { deco: null, pfx: null, nameplate: null, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp25 };
        ({ firstAvatarDecoration: obj34.deco, firstProfileEffect: obj34.pfx, firstNameplate: obj34.nameplate } = shopProductItems);
        tmp30Result = tmp30(tmp4(8260), obj17);
      }
      tmp30Result2 = tmp30(tmp28, obj16);
    } else if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj18 = { item: first, size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
      tmp30Result2 = tmp30(tmp4(8273), obj18);
    } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj19 = { user: currentUser, profileEffect: product.items[0] };
      tmp30Result2 = tmp30(tmp4(10571), obj19);
    } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME === type) {
      const obj20 = { user: currentUser, profileFrame: product.items[0] };
      tmp30Result2 = tmp30(tmp4(10789), obj20);
    } else {
      tmp30Result2 = null;
      if (require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE === type) {
        const obj21 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp30Result2 = tmp30(tmp2(10790).NameplatePreview, obj21);
      }
    }
    items8 = [tmp31(View, obj15), ];
    const obj22 = { style: items9, children: renderMessagesResult };
    items9 = [tmp6.messages, animatedStyle1];
    const View2 = tmp4(4566).View;
    if (null != renderMessages) {
      renderMessagesResult = renderMessages();
    } else {
      const obj23 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp6.title, children: intl3.format(require("intl").t.YNaxMp, obj24) };
      const Text = tmp2(4832).Text;
      intl3 = tmp2(1115).intl;
      obj24 = { itemName: product.name };
      const items10 = [tmp31(Text, obj23), ];
      const obj25 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: formatResult };
      const Text2 = tmp2(4832).Text;
      const tmp2Result24 = require("CollectiblesUtils");
      let result = tmp2Result24.isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(1115).intl;
      const format = intl4.format;
      const t = tmp2(1115).t;
      const tmp41 = closure_14;
      if (result) {
        const obj26 = { itemName: product.name };
        formatResult = format(t.nW6E3m, obj26);
      } else {
        const obj27 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj27);
      }
      const obj28 = { children: items10 };
      items10[1] = tmp31(Text2, obj25);
      renderMessagesResult = tmp27(tmp41, obj28);
    }
    items8[1] = tmp31(View2, obj22);
    items6[1] = closure_13(tmp36, obj14);
    const obj29 = { style: tmp6.footer, children: tmp31(closure_8, obj30) };
    obj30 = { style: tmp6.cta, children: tmp31(Button, obj32) };
    Button = tmp2(5281).Button;
    if (canUseNow) {
      const obj31 = { loading: isApplying, disabled: isApplying, onPress: handleUseNow, text: intl2.string(require("intl").t.MAS7uK), size: "lg", grow: true };
      intl2 = tmp2(1115).intl;
      obj32 = obj31;
    } else {
      obj32 = { onPress: handleEditProfile, text: intl.string(tmp2(1115).t["2p2aYz"]), size: "lg", grow: true };
      intl = tmp2(1115).intl;
    }
    items6[2] = tmp31(closure_8, obj29);
    items3[1] = closure_13(SafeAreaPaddingView, rect);
    const obj33 = { style: items11, pointerEvents: "none" };
    items11 = [tmp6.curtain, animatedStyle2];
    items3[2] = tmp31(callback(4566).View, obj33);
    obj6.children = items3;
    return closure_13(closure_8, obj6);
  }
  tmp29 = closure_12(ProductPurchaseGradientBackground, { product });
  tmp30 = closure_12;
  tmp31 = closure_12;
};

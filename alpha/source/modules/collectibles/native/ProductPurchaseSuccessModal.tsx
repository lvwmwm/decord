// Module ID: 14707
// Function ID: 14708
// Name: ProductPurchaseSuccessModal
// Dependencies: [32, 717, 19, 17, 5142, 1072, 21, 5141, 575, 2116, 14706, 7146, 7195, 1113, 1652, 5771, 5378, 5384, 7870, 14708, 5732, 5723, 8890, 14710, 504, 14711, 11701, 9705, 9044, 8883, 5851, 7428, 14712, 9640, 9653, 11580, 11694, 11695, 5761, 7872, 5768, 2]
// Exports: default

// Module 14707 (ProductPurchaseSuccessModal)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2116 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import _mod7146 from "module_7146" /* 7146 */;
import XSmallIcon from "XSmallIcon" /* 7195 */;
import _modDef7870 from "module_7870" /* 7870 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 14706 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 717 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, set, set2;

let c10;
let c9;
let closure_12;
let map1;
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
  dependencyMap = closure_14();
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
      return unpackModuleId(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl.string(intl5.t.cpT0Cq),
    displayMode: "minimal"
  };
  const HeaderBackButton = _mod7146.HeaderBackButton;
  intl = intl5.intl;
  return closure_11(HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  let closure_1;
  product = product.product;
  importDefault = undefined;
  let token;
  let token1;
  const tmp = closure_15(product.type);
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
      const items = [token, token, token1, closure_21, closure_21];
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
        items2[3] = closure_21;
        items2[4] = closure_21;
      }
    }
    return items2;
  }, items);
  const obj3 = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1], colors: memo };
  return closure_11(require("LinearGradient"), obj3);
}
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ Orientation: c9, VerticalGradient: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { closeButtonIcon: obj2 };
obj2 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_14 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles((arg0) => {
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
    PX_32 = tmp(575).space.PX_32;
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
let closure_17 = { code: "(function ProductPurchaseSuccessModalTsx1(){let[interpolate,springInput,isProfilePreview]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};})" };
let closure_18 = { code: "(function ProductPurchaseSuccessModalTsx2(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};})" };
let closure_19 = { code: "(function ProductPurchaseSuccessModalTsx3(){let[interpolate,linearInput]=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};})" };
let closure_20 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj5 = _modDef7870("black");
let closure_21 = obj5.toHexString();
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
  let items12;
  let items13;
  let items14;
  let items15;
  let items17;
  let mobileBgUrl;
  let obj21;
  let obj27;
  let obj30;
  let obj5;
  let onCancel;
  let onSuccess;
  let product;
  let ref;
  let renderMessages;
  let renderMessagesResult;
  let showOrbBalancePill;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp38;
  let tmp43Result;
  let tmp43Result2;
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
  const backgroundColors = callback(14708)(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_15(product.type, null != tertiary);
  const tmp2Result = require("useToken");
  const token = tmp2Result.useToken(tmp4(575).colors.INTERACTIVE_TEXT_ACTIVE);
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
  const tmp12 = product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME;
  const tmp2Result15 = require("module_1652");
  const sharedValue = tmp2Result15.useSharedValue(0);
  const tmp2Result16 = require("module_1652");
  const sharedValue1 = tmp2Result16.useSharedValue(0);
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = obj4.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!stateFromStores) {
      const withDelay = stateFromStores(sharedValue1[14]).withDelay;
      stateFromStores(sharedValue1[14]);
      const _Math = Math;
      const obj = { duration: Math.round(333.3333333333333), dampingRatio: 0.7 };
      const withSpring = stateFromStores(sharedValue1[15]).withSpring;
      stateFromStores(sharedValue1[15]);
      num = withDelay(200, withSpring(1, obj));
    }
    const result = set(num);
    let num4 = 1;
    set2 = sharedValue1.set;
    if (!stateFromStores) {
      const withDelay2 = stateFromStores(sharedValue1[14]).withDelay;
      stateFromStores(sharedValue1[14]);
      const obj2 = stateFromStores(sharedValue1[16]);
      num4 = withDelay2(200, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num4);
  }, items2);
  const items3 = [closure_17, , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  require("module_1652");
  items3[1] = require("module_1652").interpolate;
  items3[2] = sharedValue;
  items3[3] = tmp12;
  let c0;
  let c1;
  dependencyMap = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items3;
  class ProductPurchaseSuccessModalTsx1 {
    constructor() {
      let items;
      let items1;
      let num = 0;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0.1, 1]), transform: items1 };
      const value = _undefined2.get();
      const tmp = _undefined;
      if (c2) {
        num = 0.6;
      }
      const obj2 = { scale: tmp(value, [0, 1], items) };
      items = [num, 1];
      items1 = [obj2];
      return obj;
    }
  }
  const items4 = [tmp18, tmp19, tmp20];
  ProductPurchaseSuccessModalTsx1.__closure = items4;
  ProductPurchaseSuccessModalTsx1.__workletHash = 9824734884799;
  ProductPurchaseSuccessModalTsx1.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(ProductPurchaseSuccessModalTsx1);
  const items5 = [closure_18, , ];
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  require("module_1652");
  items5[1] = require("module_1652").interpolate;
  items5[2] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  [tmp23, tmp24, tmp25] = items5;
  class ProductPurchaseSuccessModalTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0, 1]), transform: items };
      items = [{ scale: _undefined(_undefined2.get(), [0, 1], [0.75, 1]) }];
      ({ scale: _undefined(_undefined2.get(), [0, 1], [0.75, 1]) });
      return obj;
    }
  }
  const items6 = [tmp24, tmp25];
  ProductPurchaseSuccessModalTsx2.__closure = items6;
  ProductPurchaseSuccessModalTsx2.__workletHash = 4962255800686;
  ProductPurchaseSuccessModalTsx2.__initData = tmp23;
  const animatedStyle2 = useAnimatedStyle2(ProductPurchaseSuccessModalTsx2);
  const items7 = [closure_19, , ];
  const useAnimatedStyle3 = tmp2(1652).useAnimatedStyle;
  require("module_1652");
  items7[1] = require("module_1652").interpolate;
  items7[2] = sharedValue1;
  c0 = undefined;
  c1 = undefined;
  [tmp28, tmp29, tmp30] = items7;
  class ProductPurchaseSuccessModalTsx3 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0.5, 0]) };
      return obj;
    }
  }
  const items8 = [tmp29, tmp30];
  ProductPurchaseSuccessModalTsx3.__closure = items8;
  ProductPurchaseSuccessModalTsx3.__workletHash = 11513940629753;
  ProductPurchaseSuccessModalTsx3.__initData = tmp28;
  const animatedStyle3 = useAnimatedStyle3(ProductPurchaseSuccessModalTsx3);
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
  [tmp38, c2] = react.useState();
  let obj2 = { style: tmp6.root, id: product.skuId, children: null };
  _slicedToArray(react.useState(), 2);
  if (useCategoryImage) {
    let tmp42;
    let tmp43;
    let tmp44;
    if (null != mobileBgUrl) {
      let obj3 = { source: obj5, style: tmp6.imageBackground };
      obj5 = { uri: mobileBgUrl };
      tmp42 = closure_11(tmp4(5851), obj3);
      tmp43 = closure_11;
      tmp44 = closure_11;
    }
    const items9 = [tmp42, , ];
    const items10 = [tmp6.main, ];
    let str;
    const SafeAreaPaddingView = tmp2(7428).SafeAreaPaddingView;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    const rect = { style: items10, top: true, bottom: true, left: true, right: true, children: items12 };
    const obj6 = { backgroundColor: str };
    items10[1] = obj6;
    const obj7 = { style: tmp6.header, children: items11 };
    const obj8 = { style: tmp6.headerLeading, children: showOrbBalancePill };
    if (showOrbBalancePill) {
      const obj9 = { initialRenderedBalance: prop, balance };
      showOrbBalancePill = tmp44(tmp2(14712).BalanceWidgetPill, obj9);
    }
    items11 = [tmp44(closure_7, obj8), ];
    let toHexStringResult;
    const tmp46 = CancelButton;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj10 = { tintColor: toHexStringResult, onCancel };
    items11[1] = tmp44(tmp46, obj10);
    items12 = [closure_12(closure_7, obj7), , ];
    const obj12 = { style: items13, children: tmp43Result2 };
    items13 = [tmp6.preview, animatedStyle];
    const type = product.type;
    const obj11 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: items14 };
    const View = tmp4(1652).View;
    const tmp48 = closure_6;
    if (require("CollectiblesItemType").CollectiblesItemType.BUNDLE === type) {
      const obj13 = { style: tmp6.previewBundle, onLayout: tmp39, children: tmp43Result };
      tmp43Result = null != tmp38;
      if (tmp43Result) {
        const obj14 = { deco: null, pfx: null, nameplate: null, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp38 };
        ({ firstAvatarDecoration: obj28.deco, firstProfileEffect: obj28.pfx, firstNameplate: obj28.nameplate } = shopProductItems);
        tmp43Result = tmp43(tmp4(9640), obj14);
      }
      tmp43Result2 = tmp43(tmp41, obj13);
    } else if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj15 = { item: first, size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
      tmp43Result2 = tmp43(tmp4(9653), obj15);
    } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj16 = { user: currentUser, profileEffect: product.items[0] };
      tmp43Result2 = tmp43(tmp4(11580), obj16);
    } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME === type) {
      const obj17 = { user: currentUser, profileFrame: product.items[0] };
      tmp43Result2 = tmp43(tmp4(11694), obj17);
    } else {
      tmp43Result2 = null;
      if (require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE === type) {
        const obj18 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp43Result2 = tmp43(tmp2(11695).NameplatePreview, obj18);
      }
    }
    items14 = [tmp44(View, obj12), ];
    const obj19 = { style: items15, children: renderMessagesResult };
    items15 = [tmp6.messages, animatedStyle2];
    const View2 = tmp4(1652).View;
    if (null != renderMessages) {
      renderMessagesResult = renderMessages();
    } else {
      const obj20 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: tmp6.title, children: intl3.format(require("intl").t.YNaxMp, obj21) };
      const Text = tmp2(5761).Text;
      intl3 = tmp2(1113).intl;
      obj21 = { itemName: product.name };
      const items16 = [tmp44(Text, obj20), ];
      const obj22 = { variant: "body-md/medium", color: "text-overlay-light", style: tmp6.title, children: formatResult };
      const Text2 = tmp2(5761).Text;
      const tmp2Result24 = require("CollectiblesUtils");
      let result = tmp2Result24.isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(1113).intl;
      const format = intl4.format;
      const t = tmp2(1113).t;
      const tmp53 = closure_13;
      if (result) {
        const obj23 = { itemName: product.name };
        formatResult = format(t.nW6E3m, obj23);
      } else {
        const obj24 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj24);
      }
      const obj25 = { children: items16 };
      items16[1] = tmp44(Text2, obj22);
      renderMessagesResult = tmp40(tmp53, obj25);
    }
    items14[1] = tmp44(View2, obj19);
    items12[1] = closure_12(tmp48, obj11);
    const obj26 = { style: tmp6.footer, children: tmp44(closure_7, obj27) };
    obj27 = { style: tmp6.cta, children: tmp44(Button, obj30) };
    Button = tmp2(5768).Button;
    if (canUseNow) {
      const obj29 = { loading: isApplying, disabled: isApplying, onPress: handleUseNow, text: intl2.string(require("intl").t.MAS7uK), size: "lg", grow: true };
      intl2 = tmp2(1113).intl;
      obj30 = obj29;
    } else {
      obj30 = { onPress: handleEditProfile, text: intl.string(tmp2(1113).t["2p2aYz"]), size: "lg", grow: true };
      intl = tmp2(1113).intl;
    }
    items12[2] = tmp44(closure_7, obj26);
    items9[1] = closure_12(SafeAreaPaddingView, rect);
    const obj31 = { style: items17, pointerEvents: "none" };
    items17 = [tmp6.curtain, animatedStyle3];
    items9[2] = tmp44(callback(1652).View, obj31);
    obj2.children = items9;
    class ProductPurchaseSuccessModalTsx1 {
      constructor() {
        let items;
        let items1;
        let num = 0;
        const obj = { opacity: _undefined(_undefined2.get(), [0, 1], [0.1, 1]), transform: items1 };
        const value = _undefined2.get();
        const tmp = _undefined;
        if (c2) {
          num = 0.6;
        }
        const obj2 = { scale: tmp(value, [0, 1], items) };
        items = [num, 1];
        items1 = [obj2];
        return obj;
      }
    }
  }
  tmp42 = closure_11(ProductPurchaseGradientBackground, { product });
  tmp43 = closure_11;
  tmp44 = closure_11;
};

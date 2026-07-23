// Module ID: 9773
// Function ID: 75996
// Name: CancelButton
// Dependencies: [57, 830, 31, 27, 4122, 8200, 653, 33, 4130, 689, 1876, 9772, 5094, 5119, 1212, 3991, 4542, 4131, 4099, 6784, 9774, 3834, 4554, 8667, 9776, 566, 9777, 9778, 8723, 8303, 8742, 8207, 5121, 9786, 8215, 8226, 8234, 8750, 9805, 4126, 6786, 4543, 2]
// Exports: default

// Module 9773 (CancelButton)
import _slicedToArray from "_slicedToArray";
import _toArray from "_toArray";
import ItemsSortingHat from "ItemsSortingHat";
import get_ActivityIndicator from "useHandleUseNow";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BUNDLE_PREVIEW_CONFIG } from "SAMPLE_PROFILE_ASPECT_RATIO";
import ME from "ME";
import jsxProd from "BalanceWidgetPill";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function CancelButton(arg0) {
  let onCancel;
  let require;
  ({ tintColor: require, onCancel } = arg0);
  const dependencyMap = _createForOfIteratorHelperLoose();
  const items = [onCancel];
  const callback = React.useCallback(() => {
    if (null != onCancel) {
      onCancel();
    }
    onCancel(closeButtonIcon[11]).close();
  }, items);
  const obj = {
    onPress: callback,
    backImage() {
      const style = [closeButtonIcon.closeButtonIcon, { tintColor: closure_0 }];
      return outer1_12(outer1_0(closeButtonIcon[13]).XSmallIcon, { size: "lg", style });
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.labelVisible = false;
  return callback2(require(5094) /* Background */.HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  product = product.product;
  let importDefault;
  let token;
  let token1;
  const backgroundColors = importDefault(token[20])(product.styles).backgroundColors;
  let tertiary;
  if (null != backgroundColors) {
    tertiary = backgroundColors.tertiary;
  }
  importDefault = tmp3;
  let obj = backgroundColors(token[21]);
  token = obj.useToken(importDefault(token[9]).colors.BACKGROUND_BASE_LOW);
  const tmp = callback3(product.type);
  token1 = backgroundColors(token[21]).useToken(importDefault(token[9]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [backgroundColors, token, token1, null != tertiary];
  const memo = React.useMemo(() => {
    if (null == backgroundColors) {
      const items = [token, token, token1, outer1_22, outer1_22];
      let items2 = items;
    } else {
      const primary2 = backgroundColors.primary;
      const toHexStringResult = primary2.toHexString();
      if (c1) {
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
        items2[3] = outer1_22;
        items2[4] = outer1_22;
      }
    }
    return items2;
  }, items);
  obj = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1], colors: memo };
  return callback2(importDefault(token[22]), obj);
}
({ Image: closure_6, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
({ Orientation: closure_10, VerticalGradient: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let closure_15 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.closeButtonIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_17 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { flex: 1, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj = { flexDirection: "row", alignItems: "center", paddingHorizontal: importDefault(689).space.PX_16 };
  obj.header = obj;
  obj.headerLeading = { flex: 1, flexDirection: "row", alignItems: "center" };
  obj.imageBackground = { resizeMode: "cover", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.backdrop = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.main = { flex: 1 };
  const obj1 = { position: "absolute", backgroundColor: importDefault(689).colors.BLACK, top: 0, bottom: 0, left: 0, right: 0 };
  obj.curtain = obj1;
  obj.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
  const obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
  let num = 0;
  if (arg0 === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  obj2.flex = num;
  let str = 0;
  if (arg0 === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  obj2.marginTop = str;
  let PX_32;
  if (arg0 === require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    PX_32 = importDefault(689).space.PX_32;
  }
  obj2.marginHorizontal = PX_32;
  if (flag) {
    if (arg0 === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
      const obj3 = { shadowColor: importDefault(689).unsafe_rawColors.PRIMARY_630, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 60, elevation: 24 };
      let obj8 = obj3;
    }
    const merged = Object.assign(obj8);
    obj.preview = obj2;
    obj.previewBundle = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj4 = { paddingTop: importDefault(689).space.PX_24, minHeight: null, flexDirection: "column", alignItems: "center", justifyContent: "flex-start" };
    let str2;
    if (arg0 === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj4.minHeight = str2;
    obj4.gap = importDefault(689).space.PX_16;
    obj.messages = obj4;
    const obj5 = { textAlign: "center", marginHorizontal: importDefault(689).space.PX_32 };
    obj.title = obj5;
    const obj6 = { marginBottom: importDefault(689).space.PX_16 };
    obj.footer = obj6;
    const obj7 = { flexDirection: "row", gap: importDefault(689).space.PX_12, paddingVertical: importDefault(689).space.PX_16, marginHorizontal: importDefault(689).space.PX_24, borderRadius: importDefault(689).radii.round };
    obj.cta = obj7;
    return obj;
  }
  obj8 = {};
});
let closure_18 = { code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
let closure_19 = { code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let closure_22 = require("tinycolor")("black").toHexString();
let obj5 = require("tinycolor")("black");
let result = require("result").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

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
  let _require;
  let callback;
  let obj = _require(8667);
  const currentUser = obj.useCurrentUser();
  const backgroundColors = callback(9774)(product.styles).backgroundColors;
  let tertiary;
  if (null != backgroundColors) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp3 = callback3(product.type, null != tertiary);
  let obj2 = _require(3834);
  let token = obj2.useToken(callback(689).colors.INTERACTIVE_TEXT_ACTIVE);
  _require = React.useRef(closure_21);
  callback = React.useCallback(() => {
    const arr = outer1_4(ref.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = ref(outer1_2[18]).triggerHapticFeedback(ref(outer1_2[18]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = ref(outer1_2[18]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      ref.current = substr;
    }
    if (substr.length >= outer1_21.length / 2) {
      const result1 = ref(outer1_2[18]).triggerHapticFeedback(ref(outer1_2[18]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = ref(outer1_2[18]);
    } else {
      const result2 = ref(outer1_2[18]).triggerHapticFeedback(ref(outer1_2[18]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = ref(outer1_2[18]);
    }
  }, []);
  let items = [callback];
  let effect = React.useEffect(() => {
    callback();
    return () => {
      outer1_0.current = [];
    };
  }, items);
  let obj3 = _require(9776);
  const avatarDecorationPreviewSizes = obj3.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  let obj4 = _require(566);
  let items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj4.useStateFromStores(items1, () => outer1_9.useReducedMotion);
  let tmp9 = product.type === _require(1876).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp9) {
    tmp9 = product.type === _require(1876).CollectiblesItemType.PROFILE_FRAME;
  }
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = (function useAnimationStyles(stateFromStores, isProfilePreview) {
    let closure_1 = isProfilePreview;
    let obj = ref(outer1_2[15]);
    const sharedValue = obj.useSharedValue(0);
    let obj1 = ref(outer1_2[15]);
    const sharedValue1 = obj1.useSharedValue(0);
    let items = [sharedValue, stateFromStores, sharedValue1];
    const effect = outer1_5.useEffect(() => {
      let num = 1;
      if (!stateFromStores) {
        let obj = stateFromStores(outer2_2[15]);
        num = obj.withDelay(200, stateFromStores(outer2_2[16]).withSpring(1, { duration: 500, dampingRatio: 0.7 }));
        const obj2 = stateFromStores(outer2_2[16]);
      }
      const result = sharedValue.set(num);
      let num5 = 1;
      if (!stateFromStores) {
        const obj3 = stateFromStores(outer2_2[15]);
        obj = { duration: 200 };
        num5 = obj3.withDelay(200, stateFromStores(outer2_2[17]).withTiming(1, obj));
        const obj4 = stateFromStores(outer2_2[17]);
      }
      const result1 = sharedValue1.set(num5);
    }, items);
    obj = {};
    const fn = function n() {
      let obj = { opacity: stateFromStores(outer2_2[15]).interpolate(sharedValue.get(), [0, 1], [0.1, 1]) };
      obj = {};
      const obj2 = stateFromStores(outer2_2[15]);
      let num = 0;
      const value = sharedValue.get();
      if (closure_1) {
        num = 0.6;
      }
      const items = [num, 1];
      obj.scale = stateFromStores(outer2_2[15]).interpolate(value, [0, 1], items);
      const items1 = [obj];
      obj.transform = items1;
      return obj;
    };
    obj = { interpolate: ref(outer1_2[15]).interpolate, springInput: sharedValue, isProfilePreview };
    fn.__closure = obj;
    fn.__workletHash = 15385317790278;
    fn.__initData = outer1_18;
    obj.previewViewStyle = stateFromStores(outer1_2[15]).useAnimatedStyle(fn);
    let obj4 = stateFromStores(outer1_2[15]);
    const fn2 = function s() {
      let obj = { opacity: stateFromStores(outer2_2[15]).interpolate(sharedValue.get(), [0, 1], [0, 1]) };
      obj = {};
      const obj2 = stateFromStores(outer2_2[15]);
      obj.scale = stateFromStores(outer2_2[15]).interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
      const items = [obj];
      obj.transform = items;
      return obj;
    };
    obj1 = { interpolate: ref(outer1_2[15]).interpolate, springInput: sharedValue };
    fn2.__closure = obj1;
    fn2.__workletHash = 4517716462039;
    fn2.__initData = outer1_19;
    obj.textViewStyle = stateFromStores(outer1_2[15]).useAnimatedStyle(fn2);
    const obj6 = stateFromStores(outer1_2[15]);
    const fn3 = function c() {
      const obj = { opacity: stateFromStores(outer2_2[15]).interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
      return obj;
    };
    const obj8 = stateFromStores(outer1_2[15]);
    fn3.__closure = { interpolate: stateFromStores(outer1_2[15]).interpolate, linearInput: sharedValue1 };
    fn3.__workletHash = 6018737312;
    fn3.__initData = outer1_20;
    obj.curtainViewStyle = obj8.useAnimatedStyle(fn3);
    return obj;
  })(stateFromStores, tmp9));
  let obj5 = _require(9777);
  const category = obj5.useFetchCollectiblesProductCategory(product.skuId).category;
  if (null != category) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  let obj6 = _require(9778);
  handleUseNow = obj6.useHandleUseNow({ product, onSuccess });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  let obj7 = _require(8723);
  const effect1 = React.useEffect(() => {
    ref(outer1_2[29]).lockOrientation(outer1_10.PORTRAIT);
    return () => {
      const result = callback(outer2_2[29]).restoreDefaultOrientation();
    };
  }, []);
  let obj8 = _require(8742);
  const previewCollectibleProduct = obj8.usePreviewCollectibleProduct(product, true);
  let obj9 = _require(8207);
  const shopProductItems = obj9.useShopProductItems(product);
  obj = { style: tmp3.root, id: product.skuId };
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      obj = {};
      let obj1 = { uri: mobileBgUrl };
      obj.source = obj1;
      obj.style = tmp3.imageBackground;
      let tmp20 = callback2(closure_6, obj);
    }
    const items2 = [tmp20, , ];
    obj2 = { style: null, top: true, bottom: true, left: true, right: true };
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
      showOrbBalancePill = callback2(_require(9786).BalanceWidgetPill, obj6);
    }
    obj5.children = showOrbBalancePill;
    const items4 = [callback2(closure_8, obj5), ];
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
    items4[1] = callback2(CancelButton, obj7);
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
    if (_require(1876).CollectiblesItemType.BUNDLE === type) {
      const obj11 = { style: tmp3.previewBundle };
      const obj12 = {};
      ({ firstAvatarDecoration: obj27.deco, firstProfileEffect: obj27.pfx, firstNameplate: obj27.nameplate } = shopProductItems);
      obj12.previewAssets = product.previewAssets;
      obj12.disableStaticBackground = true;
      obj12.size = "large";
      obj12.targetSize = closure_15;
      obj12.exposureLocation = "ProductPurchaseSuccessModal";
      obj11.children = callback2(callback(8215), obj12);
      let tmp43 = callback2(closure_8, obj11);
    } else if (_require(1876).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj13 = { item: callback(product.items, 1)[0], size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
      tmp43 = callback2(callback(8226), obj13);
    } else if (_require(1876).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj14 = { user: currentUser, profileEffect: product.items[0] };
      tmp43 = callback2(callback(8234), obj14);
    } else if (_require(1876).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj15 = { user: currentUser, profileFrame: product.items[0] };
      tmp43 = callback2(callback(8750), obj15);
    } else {
      tmp43 = null;
      if (_require(1876).CollectiblesItemType.NAMEPLATE === type) {
        const obj16 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp43 = callback2(_require(9805).NameplatePreview, obj16);
      }
    }
    obj10.children = tmp43;
    const items7 = [callback2(callback(3991).View, obj10), ];
    const obj17 = {};
    const items8 = [tmp3.messages, textViewStyle];
    obj17.style = items8;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj18 = {};
      const obj19 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp3.title };
      const intl3 = _require(1212).intl;
      const obj20 = { itemName: product.name };
      obj19.children = intl3.format(_require(1212).t.YNaxMp, obj20);
      const items9 = [callback2(_require(4126).Text, obj19), ];
      const obj21 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp3.title };
      let result = _require(6786).isPremiumCollectiblesProduct(product);
      const intl4 = _require(1212).intl;
      const format = intl4.format;
      const t = _require(1212).t;
      if (result) {
        const obj22 = { itemName: product.name };
        let formatResult = format(t.nW6E3m, obj22);
      } else {
        const obj23 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj23);
      }
      obj21.children = formatResult;
      items9[1] = callback2(_require(4126).Text, obj21);
      obj18.children = items9;
      renderMessagesResult = closure_13(closure_14, obj18);
      const obj41 = _require(6786);
      const tmp84 = closure_13;
      const tmp85 = closure_14;
      const tmp89 = callback2;
    }
    obj17.children = renderMessagesResult;
    items7[1] = callback2(callback(3991).View, obj17);
    obj8.children = items7;
    items5[1] = closure_13(closure_7, obj8);
    const obj24 = { style: tmp3.footer };
    const obj25 = { style: tmp3.cta };
    if (canUseNow) {
      const obj26 = { loading: isApplying, disabled: isApplying, onPress: handleUseNow };
      const intl2 = _require(1212).intl;
      obj26.text = intl2.string(_require(1212).t.MAS7uK);
      obj26.size = "lg";
      obj26.grow = true;
      let obj27 = obj26;
    } else {
      obj27 = { onPress: handleEditProfile };
      const intl = _require(1212).intl;
      obj27.text = intl.string(_require(1212).t["2p2aYz"]);
      obj27.size = "lg";
      obj27.grow = true;
    }
    obj25.children = callback2(_require(4543).Button, obj27);
    obj24.children = callback2(closure_8, obj25);
    items5[2] = callback2(closure_8, obj24);
    obj2.children = items5;
    items2[1] = closure_13(_require(5121).SafeAreaPaddingView, obj2);
    const obj28 = {};
    const items10 = [tmp3.curtain, curtainViewStyle];
    obj28.style = items10;
    obj28.pointerEvents = "none";
    items2[2] = callback2(callback(3991).View, obj28);
    obj.children = items2;
    return tmp18(tmp19, obj);
  }
  tmp20 = callback2(ProductPurchaseGradientBackground, { product });
};

// Module ID: 12771
// Function ID: 12772
// Name: ProductPurchaseSuccessModal
// Dependencies: [32, 729, 19, 17, 5081, 1085, 21, 5092, 587, 1993, 558, 576, 12770, 6207, 1126, 6209, 4850, 5378, 5093, 5057, 7273, 12772, 4818, 5391, 8302, 12774, 504, 12775, 10635, 9061, 8450, 8295, 9000, 9013, 10510, 10626, 10627, 6156, 12776, 5088, 7275, 5379, 6813, 2]

// Module 12771 (ProductPurchaseSuccessModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import useToken from "useToken" /* 4818 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import timing from "timing" /* 5093 */;
import spring from "spring" /* 5378 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import XSmallIcon from "XSmallIcon" /* 6207 */;
import _mod6209 from "module_6209" /* 6209 */;
import _modDef7273 from "module_7273" /* 7273 */;
import BundleSampleV2Default from "BundleSampleV2" /* 9000 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9013 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10510 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 10626 */;
import NameplatePreview from "NameplatePreview" /* 10627 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 12770 */;
import useCollectiblesShopStylesDefault from "useCollectiblesShopStyles" /* 12772 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let _require, dependencyMap, importDefault, set, set2;

let c10;
let c9;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
let unpackModuleId;
const get_initialized = tmp(504);
const Text_Text = tmp(5088);
const common_SafeAreaView = tmp(6813);
const CollectiblesUtils = tmp(7275);
const useShopProductItems = tmp(8295);
const useCurrentUser = tmp(8302);
const useFetchVirtualCurrencyBalance = tmp(9061);
const useHandleUseNow = tmp(10635);
const useAvatarDecorationPreviewSizes = tmp(12774);
const useFetchCollectiblesProductCategory = tmp(12775);
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
    PX_32 = tmp(587).space.PX_32;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function CancelButton(tintColor) {
  let closeButtonIcon;
  let tmp5;
  const tmp = tintColor;
  let obj = tintColor(576);
  const cResult = obj.c(9);
  tintColor = tintColor.tintColor;
  const onCancel = tintColor.onCancel;
  const tmp4 = closure_14();
  dependencyMap = tmp4;
  if (cResult[0] !== onCancel) {
    const fn = function t() {
      if (onCancel != null) {
        tmp();
      }
      const obj = ProductPurchaseSuccessActionCreatorsDefault;
      obj.close();
    };
    cResult[0] = onCancel;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.closeButtonIcon) {
    let tmp6;
    let tmp8;
    if (cResult[3] === tintColor) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.cpT0Cq);
      cResult[5] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] === tmp5) {
      let tmp10;
      if (cResult[7] === tmp6) {
        tmp10 = cResult[8];
      }
      return tmp10;
    }
    let obj2 = { onPress: tmp5, backImage: tmp6, accessibilityLabel: tmp8, displayMode: "minimal" };
    const tmp12 = closure_11(tmp(6209).HeaderBackButton, obj2);
    cResult[6] = tmp5;
    cResult[7] = tmp6;
    cResult[8] = tmp12;
    tmp10 = tmp12;
  }
  const fn2 = function c() {
    let items;
    const obj = { size: "lg", style: items };
    items = [closeButtonIcon.closeButtonIcon, ];
    const obj2 = { tintColor };
    items[1] = obj2;
    return unpackModuleId(XSmallIcon.XSmallIcon, obj);
  };
  cResult[2] = tmp4.closeButtonIcon;
  cResult[3] = tintColor;
  cResult[4] = fn2;
  tmp6 = fn2;
}) : (function CancelButton(arg0) {
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
  const HeaderBackButton = _mod6209.HeaderBackButton;
  intl = intl5.intl;
  return closure_11(HeaderBackButton, obj);
});
let c17 = 200;
const __initData = { code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
const __initData2 = { code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
const __initData4 = { code: "function ProductPurchaseSuccessModalTsx4(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
const __initData5 = { code: "function ProductPurchaseSuccessModalTsx5(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData6 = { code: "function ProductPurchaseSuccessModalTsx6(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimationStyles(arg0, isProfilePreview) {
  let closure_0;
  let sharedValue;
  _require = arg0;
  let closure_1 = isProfilePreview;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  let obj2 = require("ReanimatedRexport");
  sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const sharedValue1 = obj3.useSharedValue(0);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === arg0) {
      let tmp6;
      let tmp7;
      if (cResult[2] === sharedValue) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect = react.useEffect(tmp6, tmp7);
      const fn2 = function p() {
        let items;
        let items1;
        let obj2;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items1 };
        obj2 = ReanimatedRexport;
        const interpolate = ReanimatedRexport.interpolate;
        let num = 0;
        ReanimatedRexport;
        const value = sharedValue.get();
        if (isProfilePreview) {
          num = 0.6;
        }
        const obj3 = { scale: interpolate(value, [0, 1], items) };
        items = [num, 1];
        items1 = [obj3];
        return obj;
      };
      let obj4 = { interpolate: tmp(tmp2[16]).interpolate, springInput: sharedValue, isProfilePreview };
      const useAnimatedStyle = tmp(tmp2[16]).useAnimatedStyle;
      tmp(sharedValue[16]);
      fn2.__closure = obj4;
      let num = 15385317790278;
      fn2.__workletHash = 15385317790278;
      fn2.__initData = __initData;
      const animatedStyle = useAnimatedStyle(fn2);
      const fn3 = function y() {
        let items;
        let obj2;
        let obj4;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
        obj2 = ReanimatedRexport;
        const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
        items = [obj3];
        obj4 = ReanimatedRexport;
        return obj;
      };
      const obj5 = { interpolate: tmp(sharedValue[16]).interpolate, springInput: sharedValue };
      const useAnimatedStyle2 = tmp(tmp2[16]).useAnimatedStyle;
      tmp(sharedValue[16]);
      fn3.__closure = obj5;
      let num2 = 4517716462039;
      fn3.__workletHash = 4517716462039;
      fn3.__initData = __initData2;
      const animatedStyle2 = useAnimatedStyle2(fn3);
      const fn4 = function h() {
        let obj2;
        const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
        obj2 = ReanimatedRexport;
        return obj;
      };
      const obj6 = { interpolate: tmp(sharedValue[16]).interpolate, linearInput: sharedValue1 };
      const useAnimatedStyle3 = tmp(tmp2[16]).useAnimatedStyle;
      tmp(sharedValue[16]);
      fn4.__closure = obj6;
      fn4.__workletHash = 6018737312;
      fn4.__initData = __initData3;
      const animatedStyle3 = useAnimatedStyle3(fn4);
      if (cResult[5] === animatedStyle3) {
        if (cResult[6] === animatedStyle) {
          let tmp19;
          if (cResult[7] === animatedStyle2) {
            tmp19 = cResult[8];
          }
          return tmp19;
        }
      }
      const obj7 = { previewViewStyle: animatedStyle, textViewStyle: animatedStyle2, curtainViewStyle: animatedStyle3 };
      cResult[5] = animatedStyle3;
      cResult[6] = animatedStyle;
      cResult[7] = animatedStyle2;
      cResult[8] = obj7;
      tmp19 = obj7;
    }
  }
  const fn = function l() {
    let num = 1;
    set = sharedValue.set;
    if (!closure_0) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      num = withDelay(c17, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num2 = 1;
    set2 = sharedValue1.set;
    if (!closure_0) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      num2 = withDelay2(c17, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num2);
  };
  let items = [sharedValue, arg0, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = arg0;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = fn;
}) : (function useAnimationStyles(arg0, isProfilePreview) {
  let closure_0;
  let fn;
  let fn2;
  let fn3;
  let obj4;
  let obj6;
  let obj8;
  let sharedValue;
  _require = arg0;
  let closure_1 = isProfilePreview;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(0);
  let items = [sharedValue, arg0, sharedValue1];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!closure_0) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      num = withDelay(c17, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num2 = 1;
    set2 = sharedValue1.set;
    if (!closure_0) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      num2 = withDelay2(c17, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num2);
  }, items);
  let obj3 = { previewViewStyle: obj4.useAnimatedStyle(fn), textViewStyle: obj6.useAnimatedStyle(fn2), curtainViewStyle: obj8.useAnimatedStyle(fn3) };
  obj4 = require("ReanimatedRexport");
  fn = function l() {
    let items;
    let items1;
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items1 };
    obj2 = ReanimatedRexport;
    const interpolate = ReanimatedRexport.interpolate;
    let num = 0;
    ReanimatedRexport;
    const value = sharedValue.get();
    if (isProfilePreview) {
      num = 0.6;
    }
    const obj3 = { scale: interpolate(value, [0, 1], items) };
    items = [num, 1];
    items1 = [obj3];
    return obj;
  };
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue, isProfilePreview };
  fn.__workletHash = 10896341320227;
  fn.__initData = __initData4;
  ({ interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue, isProfilePreview });
  fn2 = function n() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
    obj2 = ReanimatedRexport;
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
    items = [obj3];
    obj4 = ReanimatedRexport;
    return obj;
  };
  obj6 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn2.__workletHash = 9497838659120;
  fn2.__initData = __initData5;
  ({ interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue });
  fn3 = function s() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
    obj2 = ReanimatedRexport;
    return obj;
  };
  obj8 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 4654057886085;
  fn3.__initData = __initData6;
  ({ interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 });
  return obj3;
});
let closure_25 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
function useDrummingHapticFeedbacks() {

}
let obj7 = _modDef7273("black");
let closure_27 = obj7.toHexString();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductPurchaseGradientBackground(product) {
  let tmp10;
  let tmp27;
  const obj = react2;
  const cResult = obj.c(29);
  product = product.product;
  const tmp4 = closure_15(product.type);
  const backgroundColors = useCollectiblesShopStylesDefault(product.styles).backgroundColors;
  let tertiary1;
  if (backgroundColors != null) {
    tertiary1 = backgroundColors.tertiary;
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(tmp5(587).colors.BACKGROUND_BASE_LOW);
  const tmpResult2 = useToken;
  const token1 = tmpResult2.useToken(tmp5(587).colors.BACKGROUND_SURFACE_HIGH);
  if (null != backgroundColors) {
    if (null != tertiary1) {
      let tmp20;
      let tmp22;
      let tmp24;
      if (cResult[3] !== backgroundColors.primary) {
        const primary3 = backgroundColors.primary;
        const toHexStringResult = primary3.toHexString();
        cResult[3] = backgroundColors.primary;
        cResult[4] = toHexStringResult;
        tmp20 = toHexStringResult;
      } else {
        tmp20 = cResult[4];
      }
      if (cResult[5] !== backgroundColors.secondary) {
        const secondary2 = backgroundColors.secondary;
        const toHexStringResult1 = secondary2.toHexString();
        cResult[5] = backgroundColors.secondary;
        cResult[6] = toHexStringResult1;
        tmp22 = toHexStringResult1;
      } else {
        tmp22 = cResult[6];
      }
      if (cResult[7] !== backgroundColors.tertiary) {
        const tertiary = backgroundColors.tertiary;
        const toHexStringResult2 = tertiary.toHexString();
        cResult[7] = backgroundColors.tertiary;
        cResult[8] = toHexStringResult2;
        tmp24 = toHexStringResult2;
      } else {
        tmp24 = cResult[8];
      }
      if (cResult[9] === tmp20) {
        if (cResult[10] === tmp22) {
          let tmp26;
          if (cResult[11] === tmp24) {
            tmp26 = cResult[12];
          }
          tmp10 = tmp26;
        }
      }
      const items = [tmp20, tmp22, tmp24];
      cResult[9] = tmp20;
      cResult[10] = tmp22;
      cResult[11] = tmp24;
      cResult[12] = items;
      tmp26 = items;
    } else {
      let tmp12;
      let tmp14;
      let tmp16;
      if (cResult[13] !== backgroundColors.primary) {
        const primary = backgroundColors.primary;
        const toHexStringResult3 = primary.toHexString();
        cResult[13] = backgroundColors.primary;
        cResult[14] = toHexStringResult3;
        tmp12 = toHexStringResult3;
      } else {
        tmp12 = cResult[14];
      }
      if (cResult[15] !== backgroundColors.primary) {
        const primary2 = backgroundColors.primary;
        const toHexStringResult4 = primary2.toHexString();
        cResult[15] = backgroundColors.primary;
        cResult[16] = toHexStringResult4;
        tmp14 = toHexStringResult4;
      } else {
        tmp14 = cResult[16];
      }
      if (cResult[17] !== backgroundColors.secondary) {
        const secondary = backgroundColors.secondary;
        const toHexStringResult5 = secondary.toHexString();
        cResult[17] = backgroundColors.secondary;
        cResult[18] = toHexStringResult5;
        tmp16 = toHexStringResult5;
      } else {
        tmp16 = cResult[18];
      }
      if (cResult[19] === tmp12) {
        if (cResult[20] === tmp14) {
          let tmp18;
          if (cResult[21] === tmp16) {
            tmp18 = cResult[22];
          }
          tmp10 = tmp18;
        }
      }
      const items1 = [tmp12, tmp14, tmp16, closure_27, closure_27];
      cResult[19] = tmp12;
      cResult[20] = tmp14;
      cResult[21] = tmp16;
      cResult[22] = items1;
      tmp18 = items1;
    }
  } else {
    if (cResult[0] === token) {
      if (cResult[1] === token1) {
        tmp10 = cResult[2];
      }
    }
    const items2 = [token, token, token1, closure_27, closure_27];
    cResult[0] = token;
    cResult[1] = token1;
    cResult[2] = items2;
    tmp10 = items2;
  }
  if (cResult[23] !== (null != tertiary1)) {
    const tmp28 = null != tertiary1 ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1];
    cResult[23] = null != tertiary1;
    cResult[24] = tmp28;
    tmp27 = tmp28;
  } else {
    tmp27 = cResult[24];
  }
  if (cResult[25] === tmp10) {
    if (cResult[26] === tmp27) {
      let tmp29;
      if (cResult[27] === tmp4.backdrop) {
        tmp29 = cResult[28];
      }
      return tmp29;
    }
  }
  const obj2 = { style: tmp4.backdrop, start: constants.START, end: constants.END, locations: tmp27, colors: tmp10 };
  const tmp30 = unpackModuleId(LinearGradientDefault, obj2);
  cResult[25] = tmp10;
  cResult[26] = tmp27;
  cResult[27] = tmp4.backdrop;
  cResult[28] = tmp30;
  tmp29 = tmp30;
}) : (function ProductPurchaseGradientBackground(product) {
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
  const obj = backgroundColors(token[22]);
  token = obj.useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const obj2 = backgroundColors(token[22]);
  token1 = obj2.useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [backgroundColors, token, token1, tmp5];
  const memo = react.useMemo(() => {
    let items2;
    if (null == backgroundColors) {
      const items = [token, token, token1, closure_27, closure_27];
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
        items2[3] = closure_27;
        items2[4] = closure_27;
      }
    }
    return items2;
  }, items);
  const obj3 = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1], colors: memo };
  return closure_11(require("LinearGradient"), obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductPurchaseSuccessModal(product) {
  let avatarDecorationSize;
  let avatarSize;
  let canUseNow;
  let curtainViewStyle;
  let first1;
  let formatResult;
  let handleEditProfile;
  let intl2;
  let isApplying;
  let item;
  let items10;
  let items3;
  let items6;
  let obj19;
  let onCancel;
  let onSuccess;
  let orbBalancePriorToPurchase;
  let previewBundle;
  let previewViewStyle;
  let renderMessages;
  let showOrbBalancePill;
  let stageCollectibleChangeForEditProfile;
  let textViewStyle;
  let tmp16;
  let tmp17;
  let useCategoryImage;
  let obj = react2;
  const cResult = obj.c(99);
  product = product.product;
  const require = product;
  ({ useCategoryImage, renderMessages, onSuccess, onCancel, showOrbBalancePill, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile } = product);
  let tmp6 = null;
  if (undefined !== orbBalancePriorToPurchase) {
    tmp6 = orbBalancePriorToPurchase;
  }
  const tmpResult = useCurrentUser;
  const currentUser = tmpResult.useCurrentUser();
  const backgroundColors = currentUser(12772)(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp9 = closure_15(product.type, null != tertiary);
  dependencyMap = tmp9;
  const tmpResult9 = useToken;
  const token = tmpResult9.useToken(tmp7(587).colors.INTERACTIVE_TEXT_ACTIVE);
  if (typeof useDrummingHapticFeedbacks === "function") {
    let mobileBgUrl;
    let obj5 = item;
    let closure_0 = item.useRef(closure_25);
    const callback = item.useCallback(() => {
      const arr = _toArray(ref.current);
      const first = arr[0];
      const substr = arr.slice(1);
      const tmp = ref;
      if (null != first) {
        if (0 === substr.length) {
          const obj3 = ref(dependencyMap[19]);
          const result = obj3.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(callback, first);
        }
        tmp.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const obj2 = ref(dependencyMap[19]);
        const result1 = obj2.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const obj = ref(dependencyMap[19]);
        const result2 = obj.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    const items = [callback];
    const effect = item.useEffect(() => {
      callback();
      return () => {
        ref.current = [];
      };
    }, items);
    const tmpResult10 = useAvatarDecorationPreviewSizes;
    const avatarDecorationPreviewSizes = tmpResult10.useAvatarDecorationPreviewSizes();
    ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [first1];
      class N {
        constructor() {
          return first1.useReducedMotion;
        }
      }
      cResult[0] = items1;
      cResult[1] = N;
      tmp16 = items1;
      tmp17 = N;
    } else {
      [tmp16, tmp17] = cResult;
    }
    const tmpResult11 = get_initialized;
    const stateFromStores = tmpResult11.useStateFromStores(tmp16, tmp17);
    let tmp20 = product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT || product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
    ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_24(stateFromStores, tmp20));
    const tmp22 = closure_24(stateFromStores, tmp20);
    const tmpResult12 = useFetchCollectiblesProductCategory;
    const category = tmpResult12.useFetchCollectiblesProductCategory(product.skuId).category;
    if (category != null) {
      mobileBgUrl = category.mobileBgUrl;
    }
    const tmp23 = avatarDecorationSize;
    item = avatarDecorationSize(product.items, 1)[0];
    if (cResult[2] === onSuccess) {
      if (cResult[3] === product) {
        let tmp25;
        let avatarSource;
        if (cResult[4] === stageCollectibleChangeForEditProfile) {
          tmp25 = cResult[5];
        }
        const tmpResult13 = useHandleUseNow;
        const handleUseNow = tmpResult13.useHandleUseNow(tmp25);
        class N {
          constructor() {
            return first1.useReducedMotion;
          }
        }
        ({ canUseNow, isApplying, handleEditProfile } = handleUseNow);
        if (cResult[6] === avatarSize) {
          let tmp28;
          let tmp33;
          let tmp32;
          let tmp38;
          if (cResult[7] === currentUser) {
            tmp28 = cResult[8];
          }
          avatarSource = tmp28;
          useFetchVirtualCurrencyBalance;
          class N {
            constructor() {
              return first1.useReducedMotion;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            function ae() {
              let obj = require("DeviceOrientation");
              obj.lockOrientation(closure_9.PORTRAIT);
              return () => {
                const obj = closure_1_0(previewBundle[30]);
                const result = obj.restoreDefaultOrientation();
              };
            }
            const items2 = [];
            class N {
              constructor() {
                return first1.useReducedMotion;
              }
            }
            cResult[10] = items2;
            tmp33 = items2;
            tmp32 = ae;
          } else {
            tmp32 = cResult[9];
            tmp33 = cResult[10];
          }
          const effect1 = obj5.useEffect(tmp32, tmp33);
          const tmpResult15 = useShopProductItems;
          const shopProductItems = tmpResult15.useShopProductItems(product);
          const tmp23Result = tmp23(obj5.useState(), 2);
          first1 = tmp23Result[0];
          let closure_9 = tmp23Result[1];
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            function se(nativeEvent) {
              let closure_129_0;
              let closure_129_1;
              ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
              closure_9((arg0) => {
                size = arg0;
                if (null != arg0) {
                  return size;
                }
                const size1 = { width, height };
                size = size1;
              });
            }
            cResult[11] = se;
            class N {
              constructor() {
                return first1.useReducedMotion;
              }
            }
          } else {
            tmp38 = cResult[11];
          }
          const onLayout = tmp38;
          if (cResult[12] === avatarDecorationSize) {
            if (cResult[13] === shopProductItems) {
              if (cResult[14] === first1) {
                if (cResult[15] === currentUser) {
                  if (cResult[16] === item) {
                    if (cResult[17] === product.items[0]) {
                      if (cResult[18] === product.previewAssets) {
                        if (cResult[19] === product.type) {
                          if (cResult[20] === stateFromStores) {
                            if (cResult[21] === tmp9.previewBundle) {
                              let tmp39;
                              let tmp42;
                              if (cResult[22] === tmp28) {
                                tmp39 = cResult[23];
                              }
                              if (cResult[24] === mobileBgUrl) {
                                if (cResult[25] === product) {
                                  if (cResult[26] === tmp9.imageBackground) {
                                    if (cResult[27] === (undefined !== useCategoryImage && useCategoryImage)) {
                                      tmp42 = cResult[28];
                                    }
                                    class N {
                                      constructor() {
                                        return first1.useReducedMotion;
                                      }
                                    }
                                    if (cResult[31] === tmp9.main) {
                                      let tmp47;
                                      if (cResult[32] === tmp46) {
                                        tmp47 = cResult[33];
                                      }
                                      if (cResult[34] === tmp31) {
                                        if (cResult[35] === tmp6) {
                                          let tmp48;
                                          if (cResult[36] === (undefined !== showOrbBalancePill && showOrbBalancePill)) {
                                            tmp48 = cResult[37];
                                          }
                                          if (cResult[38] === tmp9.headerLeading) {
                                            let tmp50;
                                            if (cResult[39] === tmp48) {
                                              tmp50 = cResult[40];
                                            }
                                            const tmp53 = cResult[41];
                                            class N {
                                              constructor() {
                                                return first1.useReducedMotion;
                                              }
                                            }
                                            if (tmp53 === undefined) {
                                              let tmp55;
                                              if (cResult[42] === token) {
                                                tmp55 = cResult[43];
                                              }
                                              if (cResult[44] === onCancel) {
                                                let tmp58;
                                                if (cResult[45] === tmp55) {
                                                  tmp58 = cResult[46];
                                                }
                                                if (cResult[47] === tmp9.header) {
                                                  if (cResult[48] === tmp50) {
                                                    let tmp61;
                                                    if (cResult[49] === tmp58) {
                                                      tmp61 = cResult[50];
                                                    }
                                                    const _Symbol4 = Symbol;
                                                    class N {
                                                      constructor() {
                                                        return first1.useReducedMotion;
                                                      }
                                                    }
                                                    if (cResult[52] === previewViewStyle) {
                                                      let tmp67;
                                                      let tmp68;
                                                      if (cResult[53] === tmp9.preview) {
                                                        tmp67 = cResult[54];
                                                      }
                                                      if (cResult[55] !== tmp39) {
                                                        const tmp39Result = tmp39();
                                                        cResult[55] = tmp39;
                                                        class N {
                                                          constructor() {
                                                            return first1.useReducedMotion;
                                                          }
                                                        }
                                                        cResult[56] = tmp39Result;
                                                        tmp68 = tmp39Result;
                                                      } else {
                                                        tmp68 = cResult[56];
                                                      }
                                                      if (cResult[57] === tmp67) {
                                                        let tmp70;
                                                        if (cResult[58] === tmp68) {
                                                          tmp70 = cResult[59];
                                                        }
                                                        if (cResult[60] === tmp9.messages) {
                                                          let tmp72;
                                                          let renderMessagesResult;
                                                          if (cResult[61] === textViewStyle) {
                                                            tmp72 = cResult[62];
                                                          }
                                                          if (cResult[63] === product) {
                                                            if (cResult[64] === renderMessages) {
                                                              let tmp73;
                                                              if (cResult[65] === tmp9.title) {
                                                                tmp73 = cResult[66];
                                                              }
                                                              if (cResult[67] === tmp72) {
                                                                let tmp76;
                                                                if (cResult[68] === tmp73) {
                                                                  tmp76 = cResult[69];
                                                                }
                                                                if (cResult[70] === tmp9.body) {
                                                                  if (cResult[71] === tmp70) {
                                                                    let tmp80;
                                                                    let obj7;
                                                                    if (cResult[72] === tmp76) {
                                                                      tmp80 = cResult[73];
                                                                    }
                                                                    if (cResult[74] === canUseNow) {
                                                                      if (cResult[75] === handleEditProfile) {
                                                                        if (cResult[76] === tmp27) {
                                                                          let tmp83;
                                                                          if (cResult[77] === isApplying) {
                                                                            tmp83 = cResult[78];
                                                                          }
                                                                          if (cResult[79] === tmp9.cta) {
                                                                            let tmp88;
                                                                            if (cResult[80] === tmp83) {
                                                                              tmp88 = cResult[81];
                                                                            }
                                                                            if (cResult[82] === tmp9.footer) {
                                                                              let tmp91;
                                                                              if (cResult[83] === tmp88) {
                                                                                tmp91 = cResult[84];
                                                                              }
                                                                              if (cResult[85] === tmp47) {
                                                                                if (cResult[86] === tmp61) {
                                                                                  if (cResult[87] === tmp80) {
                                                                                    let tmp94;
                                                                                    if (cResult[88] === tmp91) {
                                                                                      tmp94 = cResult[89];
                                                                                    }
                                                                                    if (cResult[90] === curtainViewStyle) {
                                                                                      let tmp98;
                                                                                      if (cResult[91] === tmp9.curtain) {
                                                                                        tmp98 = cResult[92];
                                                                                      }
                                                                                      if (cResult[93] === product.skuId) {
                                                                                        if (cResult[94] === tmp9.root) {
                                                                                          if (cResult[95] === tmp42) {
                                                                                            if (cResult[96] === tmp94) {
                                                                                              let tmp102;
                                                                                              if (cResult[97] === tmp98) {
                                                                                                tmp102 = cResult[98];
                                                                                              }
                                                                                              return tmp102;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      class N {
                                                                                        constructor() {
                                                                                          return first1.useReducedMotion;
                                                                                        }
                                                                                      }
                                                                                      let obj2 = { style: tmp40, id: tmp41, children: items3 };
                                                                                      items3 = [tmp42, tmp94, tmp98];
                                                                                      const tmp104 = closure_12(shopProductItems, obj2);
                                                                                      cResult[93] = product.skuId;
                                                                                      cResult[94] = tmp9.root;
                                                                                      cResult[95] = tmp42;
                                                                                      cResult[96] = tmp94;
                                                                                      cResult[97] = tmp98;
                                                                                      cResult[98] = tmp104;
                                                                                      tmp102 = tmp104;
                                                                                    }
                                                                                    class N {
                                                                                      constructor() {
                                                                                        return first1.useReducedMotion;
                                                                                      }
                                                                                    }
                                                                                    const items4 = [tmp9.curtain, curtainViewStyle];
                                                                                    tmp100[0] = items4;
                                                                                    const tmp101 = closure_11(currentUser(4850).View, tmp100);
                                                                                    cResult[90] = curtainViewStyle;
                                                                                    cResult[91] = tmp9.curtain;
                                                                                    cResult[92] = tmp101;
                                                                                    tmp98 = tmp101;
                                                                                  }
                                                                                }
                                                                              }
                                                                              class N {
                                                                                constructor() {
                                                                                  return first1.useReducedMotion;
                                                                                }
                                                                              }
                                                                              tmp96[0] = tmp47;
                                                                              const items5 = [tmp61, tmp80, tmp91];
                                                                              tmp96[5] = items5;
                                                                              const tmp97 = closure_12(common_SafeAreaView.SafeAreaPaddingView, tmp96);
                                                                              cResult[85] = tmp47;
                                                                              cResult[86] = tmp61;
                                                                              cResult[87] = tmp80;
                                                                              cResult[88] = tmp91;
                                                                              cResult[89] = tmp97;
                                                                              tmp94 = tmp97;
                                                                            }
                                                                            class N {
                                                                              constructor() {
                                                                                return first1.useReducedMotion;
                                                                              }
                                                                            }
                                                                            let obj3 = { style: tmp9.footer, children: tmp88 };
                                                                            const tmp93 = closure_11(shopProductItems, obj3);
                                                                            cResult[82] = tmp9.footer;
                                                                            cResult[83] = tmp88;
                                                                            cResult[84] = tmp93;
                                                                            tmp91 = tmp93;
                                                                          }
                                                                          class N {
                                                                            constructor() {
                                                                              return first1.useReducedMotion;
                                                                            }
                                                                          }
                                                                          let obj4 = { style: tmp9.cta, children: tmp83 };
                                                                          const tmp90 = closure_11(shopProductItems, obj4);
                                                                          cResult[79] = tmp9.cta;
                                                                          cResult[80] = tmp83;
                                                                          cResult[81] = tmp90;
                                                                          tmp88 = tmp90;
                                                                        }
                                                                      }
                                                                    }
                                                                    const tmp84 = closure_11;
                                                                    class N {
                                                                      constructor() {
                                                                        return first1.useReducedMotion;
                                                                      }
                                                                    }
                                                                    if (canUseNow) {
                                                                      const obj6 = { loading: isApplying, disabled: isApplying, onPress: null, text: intl2.string(intl5.t.MAS7uK), size: "lg", grow: true };
                                                                      class N {
                                                                        constructor() {
                                                                          return first1.useReducedMotion;
                                                                        }
                                                                      }
                                                                      intl2 = intl5.intl;
                                                                      obj7 = obj6;
                                                                    } else {
                                                                      obj7 = { onPress: handleEditProfile, text: tmp86(intl5.t["2p2aYz"]), size: "lg", grow: true };
                                                                      const intl = intl5.intl;
                                                                      class N {
                                                                        constructor() {
                                                                          return first1.useReducedMotion;
                                                                        }
                                                                      }
                                                                    }
                                                                    const tmp84Result = tmp84(tmp85, obj7);
                                                                    cResult[74] = canUseNow;
                                                                    cResult[75] = handleEditProfile;
                                                                    cResult[76] = tmp27;
                                                                    cResult[77] = isApplying;
                                                                    cResult[78] = tmp84Result;
                                                                    tmp83 = tmp84Result;
                                                                  }
                                                                }
                                                                class N {
                                                                  constructor() {
                                                                    return first1.useReducedMotion;
                                                                  }
                                                                }
                                                                const obj8 = { style: tmp65, contentContainerStyle: tmp66, alwaysBounceVertical: false, children: items6 };
                                                                items6 = [tmp70, tmp76];
                                                                const tmp82 = closure_12(avatarSource, obj8);
                                                                cResult[70] = tmp9.body;
                                                                cResult[71] = tmp70;
                                                                cResult[72] = tmp76;
                                                                cResult[73] = tmp82;
                                                                tmp80 = tmp82;
                                                              }
                                                              class N {
                                                                constructor() {
                                                                  return first1.useReducedMotion;
                                                                }
                                                              }
                                                              tmp78[0] = tmp72;
                                                              tmp78[1] = tmp73;
                                                              const tmp79 = closure_11(currentUser(4850).View, tmp78);
                                                              cResult[67] = tmp72;
                                                              cResult[68] = tmp73;
                                                              cResult[69] = tmp79;
                                                              tmp76 = tmp79;
                                                            }
                                                          }
                                                          if (null != renderMessages) {
                                                            renderMessagesResult = renderMessages();
                                                          } else {
                                                            const tmp105 = closure_12;
                                                            const tmp106 = closure_13;
                                                            const tmp107 = closure_11;
                                                            class N {
                                                              constructor() {
                                                                return first1.useReducedMotion;
                                                              }
                                                            }
                                                            tmp108[2] = tmp9.title;
                                                            const Text = Text_Text.Text;
                                                            const intl3 = intl5.intl;
                                                            const obj9 = { itemName: product.name };
                                                            tmp108[3] = intl3.format(intl5.t.YNaxMp, obj9);
                                                            const items7 = [closure_11(Text, tmp108), ];
                                                            const obj10 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp9.title, children: formatResult };
                                                            const Text2 = Text_Text.Text;
                                                            const tmpResult16 = CollectiblesUtils;
                                                            let result = tmpResult16.isPremiumCollectiblesProduct(product);
                                                            const intl4 = intl5.intl;
                                                            const format = intl4.format;
                                                            const t = intl5.t;
                                                            if (result) {
                                                              let obj11 = { itemName: product.name };
                                                              formatResult = format(t.nW6E3m, obj11);
                                                            } else {
                                                              const obj12 = { itemName: product.name };
                                                              formatResult = format(t["4kp0AB"], obj12);
                                                            }
                                                            const obj13 = { children: items7 };
                                                            items7[1] = tmp107(Text2, obj10);
                                                            renderMessagesResult = tmp105(tmp106, obj13);
                                                          }
                                                          class N {
                                                            constructor() {
                                                              return first1.useReducedMotion;
                                                            }
                                                          }
                                                          cResult[63] = product;
                                                          cResult[64] = renderMessages;
                                                          cResult[65] = tmp9.title;
                                                          cResult[66] = renderMessagesResult;
                                                          tmp73 = renderMessagesResult;
                                                        }
                                                        const items8 = [, ];
                                                        class N {
                                                          constructor() {
                                                            return first1.useReducedMotion;
                                                          }
                                                        }
                                                        items8[1] = textViewStyle;
                                                        cResult[60] = tmp9.messages;
                                                        cResult[61] = textViewStyle;
                                                        cResult[62] = items8;
                                                        tmp72 = items8;
                                                      }
                                                      class N {
                                                        constructor() {
                                                          return first1.useReducedMotion;
                                                        }
                                                      }
                                                      const obj14 = { style: tmp67, children: tmp68 };
                                                      const tmp71 = closure_11(currentUser(4850).View, obj14);
                                                      cResult[57] = tmp67;
                                                      cResult[58] = tmp68;
                                                      cResult[59] = tmp71;
                                                      tmp70 = tmp71;
                                                    }
                                                    const items9 = [tmp9.preview, previewViewStyle];
                                                    cResult[52] = previewViewStyle;
                                                    cResult[53] = tmp9.preview;
                                                    cResult[54] = items9;
                                                    tmp67 = items9;
                                                  }
                                                }
                                                class N {
                                                  constructor() {
                                                    return first1.useReducedMotion;
                                                  }
                                                }
                                                const obj15 = { style: tmp9.header, children: items10 };
                                                items10 = [tmp50, tmp58];
                                                const tmp63 = closure_12(shopProductItems, obj15);
                                                cResult[47] = tmp9.header;
                                                cResult[48] = tmp50;
                                                cResult[49] = tmp58;
                                                cResult[50] = tmp63;
                                                tmp61 = tmp63;
                                              }
                                              class N {
                                                constructor() {
                                                  return first1.useReducedMotion;
                                                }
                                              }
                                              const obj16 = { tintColor: tmp55, onCancel };
                                              const tmp60 = closure_11(closure_16, obj16);
                                              cResult[44] = onCancel;
                                              cResult[45] = tmp55;
                                              cResult[46] = tmp60;
                                              tmp58 = tmp60;
                                            }
                                            let toHexStringResult;
                                            if (backgroundColors != null) {
                                              const label = backgroundColors.label;
                                              toHexStringResult = label.toHexString();
                                            }
                                            if (toHexStringResult == null) {
                                              toHexStringResult = token;
                                            }
                                            let label1;
                                            if (backgroundColors != null) {
                                              label1 = backgroundColors.label;
                                            }
                                            cResult[41] = label1;
                                            cResult[42] = token;
                                            cResult[43] = toHexStringResult;
                                            tmp55 = toHexStringResult;
                                          }
                                          class N {
                                            constructor() {
                                              return first1.useReducedMotion;
                                            }
                                          }
                                          const obj17 = { style: tmp9.headerLeading, children: tmp48 };
                                          const tmp52 = closure_11(shopProductItems, obj17);
                                          cResult[38] = tmp9.headerLeading;
                                          cResult[39] = tmp48;
                                          cResult[40] = tmp52;
                                          tmp50 = tmp52;
                                        }
                                      }
                                      class N {
                                        constructor() {
                                          return first1.useReducedMotion;
                                        }
                                      }
                                      cResult[34] = tmp31;
                                      cResult[35] = tmp6;
                                      cResult[36] = undefined !== showOrbBalancePill && showOrbBalancePill;
                                      cResult[37] = undefined !== showOrbBalancePill && showOrbBalancePill;
                                      tmp48 = tmp49;
                                    }
                                    const items11 = [tmp9.main, tmp46];
                                    cResult[31] = tmp9.main;
                                    cResult[32] = tmp46;
                                    cResult[33] = items11;
                                    tmp47 = items11;
                                  }
                                }
                              }
                              if (undefined !== useCategoryImage && useCategoryImage) {
                                let tmp44;
                                if (null != mobileBgUrl) {
                                  const obj18 = { source: obj19, style: tmp9.imageBackground };
                                  obj19 = { uri: null };
                                  class N {
                                    constructor() {
                                      return first1.useReducedMotion;
                                    }
                                  }
                                  tmp44 = closure_11(tmp7(6156), obj18);
                                }
                                cResult[24] = mobileBgUrl;
                                class N {
                                  constructor() {
                                    return first1.useReducedMotion;
                                  }
                                }
                                cResult[25] = product;
                                cResult[26] = tmp9.imageBackground;
                                cResult[27] = undefined !== useCategoryImage && useCategoryImage;
                                cResult[28] = tmp44;
                                tmp42 = tmp44;
                              }
                              class N {
                                constructor() {
                                  return first1.useReducedMotion;
                                }
                              }
                              const obj20 = { product };
                              tmp44 = closure_11(closure_28, obj20);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          function renderProduct() {
            let tmp19Result;
            const type = require.type;
            if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
              const obj2 = { style: previewBundle.previewBundle, onLayout, children: tmp19Result };
              tmp19Result = null != first1;
              const tmp20 = metroImportDefault;
              if (tmp19Result) {
                const obj3 = { deco: null, pfx: null, nameplate: null, previewAssets: require.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp23 };
                ({ firstAvatarDecoration: obj6.deco, firstProfileEffect: obj6.pfx, firstNameplate: obj6.nameplate } = shopProductItems);
                tmp19Result = tmp19(BundleSampleV2Default, obj3);
              }
              return unpackModuleId(tmp20, obj2);
            } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
              const obj4 = { item, size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
              return unpackModuleId(AvatarDecorationSampleV2Default, obj4);
            } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
              const obj5 = { user: currentUser, profileEffect: require.items[0] };
              return unpackModuleId(ProfileEffectUserPreviewDefault, obj5);
            } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
              const obj11 = { user: currentUser, profileFrame: require.items[0] };
              return unpackModuleId(ProfileFrameUserPreviewDefault, obj11);
            } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
              const obj = { user: currentUser, nameplate: require.items[0], animate: true };
              return unpackModuleId(NameplatePreview.NameplatePreview, obj);
            } else {
              return null;
            }
          }
          cResult[12] = avatarDecorationSize;
          cResult[13] = shopProductItems;
          cResult[14] = first1;
          cResult[15] = currentUser;
          cResult[16] = item;
          cResult[17] = product.items[0];
          cResult[18] = product.previewAssets;
          cResult[19] = product.type;
          cResult[20] = stateFromStores;
          cResult[21] = tmp9.previewBundle;
          cResult[22] = tmp28;
          cResult[23] = renderProduct;
          tmp39 = renderProduct;
        }
        avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
        cResult[6] = avatarSize;
        cResult[7] = currentUser;
        cResult[8] = avatarSource;
        tmp28 = avatarSource;
      }
    }
    const obj21 = { product, onSuccess, stageCollectibleChangeForEditProfile };
    cResult[2] = onSuccess;
    cResult[3] = product;
    cResult[4] = stageCollectibleChangeForEditProfile;
    cResult[5] = obj21;
    tmp25 = obj21;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function ProductPurchaseSuccessModal(orbBalancePriorToPurchase) {
  let Button;
  let avatarDecorationSize;
  let avatarSize;
  let c0;
  let canUseNow;
  let curtainViewStyle;
  let formatResult;
  let handleEditProfile;
  let handleUseNow;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj22;
  let obj29;
  let obj31;
  let obj6;
  let onCancel;
  let onSuccess;
  let previewViewStyle;
  let product;
  let renderMessages;
  let renderMessagesResult;
  let showOrbBalancePill;
  let textViewStyle;
  let tmp25;
  let tmp32Result;
  let tmp32Result2;
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
  const stageCollectibleChangeForEditProfile = orbBalancePriorToPurchase.stageCollectibleChangeForEditProfile;
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const backgroundColors = useCollectiblesShopStylesDefault(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_15(product.type, null != tertiary);
  require("useToken");
  if (typeof useDrummingHapticFeedbacks === "function") {
    let mobileBgUrl;
    let obj3 = react;
    const _undefined = react.useRef(length);
    const callback = react.useCallback(() => {
      const arr = _toArray(ref.current);
      const first = arr[0];
      const substr = arr.slice(1);
      const tmp = ref;
      if (null != first) {
        if (0 === substr.length) {
          const obj3 = ref(dependencyMap[19]);
          const result = obj3.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(callback, first);
        }
        tmp.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const obj2 = ref(dependencyMap[19]);
        const result1 = obj2.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const obj = ref(dependencyMap[19]);
        const result2 = obj.triggerHapticFeedback(ref(dependencyMap[19]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    const items = [callback];
    const effect = react.useEffect(() => {
      callback();
      return () => {
        ref.current = [];
      };
    }, items);
    const tmp2Result8 = require("useAvatarDecorationPreviewSizes");
    const avatarDecorationPreviewSizes = tmp2Result8.useAvatarDecorationPreviewSizes();
    ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
    const items1 = [AccessibilityStore];
    const tmp2Result9 = require("get initialized");
    const stateFromStores = tmp2Result9.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
    const tmp15 = product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT || product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME;
    ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_24(stateFromStores, tmp15));
    closure_24(stateFromStores, tmp15);
    const tmp2Result10 = require("useFetchCollectiblesProductCategory");
    const category = tmp2Result10.useFetchCollectiblesProductCategory(product.skuId).category;
    if (category != null) {
      mobileBgUrl = category.mobileBgUrl;
    }
    let first = _slicedToArray(product.items, 1)[0];
    let obj2 = { product, onSuccess, stageCollectibleChangeForEditProfile };
    const tmp2Result11 = require("useHandleUseNow");
    const handleUseNow1 = tmp2Result11.useHandleUseNow(obj2);
    const isApplying = handleUseNow1.isApplying;
    ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
    const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
    const tmp2Result12 = require("useFetchVirtualCurrencyBalance");
    const balance = tmp2Result12.useFetchVirtualCurrencyBalance().balance;
    const effect1 = obj3.useEffect(() => {
      let obj = _undefined(dependencyMap[30]);
      obj.lockOrientation(constants.PORTRAIT);
      return () => {
        const obj = _undefined(closure_1_2[30]);
        const result = obj.restoreDefaultOrientation();
      };
    }, []);
    const tmp2Result13 = require("useShopProductItems");
    const shopProductItems = tmp2Result13.useShopProductItems(product);
    [tmp25, c0] = obj3.useState();
    const obj4 = { style: tmp6.root, id: product.skuId, children: null };
    _slicedToArray(obj3.useState(), 2);
    if (useCategoryImage) {
      let tmp31;
      let tmp32;
      let tmp33;
      if (null != mobileBgUrl) {
        const obj5 = { source: obj6, style: tmp6.imageBackground };
        obj6 = { uri: mobileBgUrl };
        tmp31 = closure_11(tmp4(6156), obj5);
        tmp32 = closure_11;
        tmp33 = closure_11;
      }
      const items2 = [tmp31, , ];
      const items3 = [tmp6.main, ];
      let str;
      const SafeAreaPaddingView = tmp2(6813).SafeAreaPaddingView;
      if (useCategoryImage) {
        str = "rgba(0, 0, 0, 0.3)";
      }
      const rect = { style: items3, top: true, bottom: true, left: true, right: true, children: items5 };
      const obj7 = { backgroundColor: str };
      items3[1] = obj7;
      const obj8 = { style: tmp6.header, children: items4 };
      const obj9 = { style: tmp6.headerLeading, children: showOrbBalancePill };
      if (showOrbBalancePill) {
        const obj10 = { initialRenderedBalance: prop, balance };
        showOrbBalancePill = tmp33(tmp2(12776).BalanceWidgetPill, obj10);
      }
      items4 = [tmp33(closure_7, obj9), ];
      let toHexStringResult;
      const tmp35 = closure_16;
      if (backgroundColors != null) {
        const label = backgroundColors.label;
        toHexStringResult = label.toHexString();
      }
      if (toHexStringResult == null) {
        toHexStringResult = tmp8;
      }
      const obj11 = { tintColor: toHexStringResult, onCancel };
      items4[1] = tmp33(tmp35, obj11);
      items5 = [closure_12(closure_7, obj8), , ];
      const obj13 = { style: items6, children: tmp32Result2 };
      items6 = [tmp6.preview, previewViewStyle];
      const type = product.type;
      const obj12 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: items7 };
      const View = tmp4(4850).View;
      const tmp37 = closure_6;
      if (require("CollectiblesItemType").CollectiblesItemType.BUNDLE === type) {
        const obj14 = { style: tmp6.previewBundle, onLayout: tmp26, children: tmp32Result };
        tmp32Result = null != tmp25;
        if (tmp32Result) {
          const obj15 = { deco: null, pfx: null, nameplate: null, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp25 };
          ({ firstAvatarDecoration: obj27.deco, firstProfileEffect: obj27.pfx, firstNameplate: obj27.nameplate } = shopProductItems);
          tmp32Result = tmp32(tmp4(9000), obj15);
        }
        tmp32Result2 = tmp32(tmp28, obj14);
      } else if (require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj16 = { item: first, size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
        tmp32Result2 = tmp32(tmp4(9013), obj16);
      } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj17 = { user: currentUser, profileEffect: product.items[0] };
        tmp32Result2 = tmp32(tmp4(10510), obj17);
      } else if (require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME === type) {
        const obj18 = { user: currentUser, profileFrame: product.items[0] };
        tmp32Result2 = tmp32(tmp4(10626), obj18);
      } else {
        tmp32Result2 = null;
        if (require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE === type) {
          const obj19 = { user: currentUser, nameplate: product.items[0], animate: true };
          tmp32Result2 = tmp32(tmp2(10627).NameplatePreview, obj19);
        }
      }
      items7 = [tmp33(View, obj13), ];
      const obj20 = { style: items8, children: renderMessagesResult };
      items8 = [tmp6.messages, textViewStyle];
      const View2 = tmp4(4850).View;
      if (null != renderMessages) {
        renderMessagesResult = renderMessages();
      } else {
        const obj21 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp6.title, children: intl3.format(require("intl").t.YNaxMp, obj22) };
        const Text = tmp2(5088).Text;
        intl3 = tmp2(1126).intl;
        obj22 = { itemName: product.name };
        const items9 = [tmp33(Text, obj21), ];
        const obj23 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: formatResult };
        const Text2 = tmp2(5088).Text;
        const tmp2Result14 = require("CollectiblesUtils");
        let result = tmp2Result14.isPremiumCollectiblesProduct(product);
        const intl4 = tmp2(1126).intl;
        const format = intl4.format;
        const t = tmp2(1126).t;
        const tmp42 = closure_13;
        if (result) {
          const obj24 = { itemName: product.name };
          formatResult = format(t.nW6E3m, obj24);
        } else {
          const obj25 = { itemName: product.name };
          formatResult = format(t["4kp0AB"], obj25);
        }
        const obj26 = { children: items9 };
        items9[1] = tmp33(Text2, obj23);
        renderMessagesResult = tmp27(tmp42, obj26);
      }
      items7[1] = tmp33(View2, obj20);
      items5[1] = closure_12(tmp37, obj12);
      const obj28 = { style: tmp6.footer, children: tmp33(closure_7, obj29) };
      obj29 = { style: tmp6.cta, children: tmp33(Button, obj31) };
      Button = tmp2(5379).Button;
      if (canUseNow) {
        const obj30 = { loading: isApplying, disabled: isApplying, onPress: handleUseNow, text: intl2.string(require("intl").t.MAS7uK), size: "lg", grow: true };
        intl2 = tmp2(1126).intl;
        obj31 = obj30;
      } else {
        obj31 = { onPress: handleEditProfile, text: intl.string(tmp2(1126).t["2p2aYz"]), size: "lg", grow: true };
        intl = tmp2(1126).intl;
      }
      items5[2] = tmp33(closure_7, obj28);
      items2[1] = closure_12(SafeAreaPaddingView, rect);
      const obj32 = { style: items10, pointerEvents: "none" };
      items10 = [tmp6.curtain, curtainViewStyle];
      items2[2] = tmp33(ReanimatedRexportDefault.View, obj32);
      obj4.children = items2;
      return closure_12(closure_7, obj4);
    }
    const obj33 = { product };
    tmp31 = closure_11(closure_28, obj33);
    tmp32 = closure_11;
    tmp33 = closure_11;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default tmp5;

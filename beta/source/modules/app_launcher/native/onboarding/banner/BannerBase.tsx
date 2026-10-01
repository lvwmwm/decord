// Module ID: 11543
// Function ID: 11544
// Name: BannerBase
// Dependencies: [32, 19, 17, 4825, 21, 576, 4836, 11532, 4566, 1479, 4683, 504, 5280, 5293, 5841, 11544, 4832, 2]
// Exports: default

// Module 11543 (BannerBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import ApplicationsImage from "ApplicationsImage" /* 11532 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let rect1;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
let createStyles = createStyles_mod;
let obj = { banner: rect, bannerGradientColor: { backgroundColor: "#7eaaff" }, bannerBackgroundGradient: rect1, imageContainer: { width: 72 }, trinketsLottie: { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" }, bannerTextContainer: obj2, bannerText: { width: "100%" } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
let closure_10 = createStyles(obj);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(arg0) {
  let _undefined;
  let c0;
  let image;
  let items3;
  let items4;
  let items5;
  let obj12;
  let text;
  let tmp3;
  let useReducedMotion;
  _require = undefined;
  ({ image, text } = arg0);
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1479)().width - 2 * sharedValue(576).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj2 = require("ColorUtils");
  let items = [obj2.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj3 = require("ColorUtils");
  items[1] = obj3.hexOpacityToRgba(backgroundColor, 0);
  let obj4 = require("get initialized");
  const items1 = [AccessibilityStore];
  const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const fn = function _() {
    let items;
    let num = 0;
    const obj = sharedValue;
    if (sharedValue.get()) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = spring;
      num = withDelay(150, obj2.withSpring(1, SPRING_CONFIG));
    }
    let num4 = 30;
    const obj3 = { opacity: num, transform: items };
    if (obj.get()) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj4 = spring;
      num4 = withDelay2(150, obj4.withSpring(0, SPRING_CONFIG));
    }
    items = [{ translateY: num4 }];
    return obj3;
  };
  const obj5 = require("ReanimatedRexport");
  fn.__closure = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  fn.__workletHash = 5314641176204;
  fn.__initData = __initData;
  ({ bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items2 = [tmp.banner, , ];
  View = sharedValue(4566).View;
  if (tmp3 > 0) {
    num = 1;
  }
  const obj7 = {
    style: items2,
    onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      let height;
      if (layout != null) {
        height = layout.height;
      }
      if (height > 0) {
        _undefined(height);
        const result = sharedValue.set(true);
      }
    },
    children: items4
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items3 };
  items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  items4 = [closure_7(tmp7(5293), obj8), , ];
  const obj9 = { style: tmp.imageContainer, children: items5 };
  const obj10 = { style: tmp.trinketsLottie, source: require("module_11544"), autoPlay: !stateFromStores };
  const tmp7Result = sharedValue(5841);
  items5 = [closure_7(tmp7Result, obj10), image];
  items4[1] = closure_8(View, obj9);
  const obj11 = { style: tmp.bannerTextContainer, children: closure_7(require("Text/Text").Text, obj12) };
  obj12 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text };
  items4[2] = closure_7(View, obj11);
  return closure_8(View, obj7);
};

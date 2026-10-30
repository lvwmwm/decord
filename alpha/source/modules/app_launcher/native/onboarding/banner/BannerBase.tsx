// Module ID: 12211
// Function ID: 12212
// Name: BannerBase
// Dependencies: [32, 19, 17, 5010, 21, 575, 5009, 12200, 5090, 1492, 5006, 504, 5632, 5582, 5613, 12212, 5619, 2]
// Exports: default

// Module 12211 (BannerBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import ApplicationsImage from "ApplicationsImage" /* 12200 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let obj = { banner: rect, bannerGradientColor: { backgroundColor: "#7eaaff" }, bannerBackgroundGradient: rect1, imageContainer: { width: 72 }, trinketsLottie: { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" }, bannerTextContainer: { alignItems: "center", justifyContent: "center", flexShrink: 1 }, bannerTextContainerWithImage: obj2, bannerTextContainerWithoutImage: { flex: 1 }, bannerText: { width: "100%" }, bannerTextCentered: { textAlign: "center" } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(image) {
  let Text;
  let _undefined;
  let c0;
  let items3;
  let items4;
  let items5;
  let items7;
  let tmp3;
  let useReducedMotion;
  image = image.image;
  _require = undefined;
  const text = image.text;
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1492)().width - 2 * sharedValue(575).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj2 = require("ColorUtils");
  let items = [obj2.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj3 = require("ColorUtils");
  items[1] = obj3.hexOpacityToRgba(backgroundColor, 0);
  let obj4 = require("get initialized");
  const items1 = [AccessibilityStore];
  const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const fn = function x() {
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
  View = sharedValue(5090).View;
  if (tmp3 > 0) {
    num = 1;
  }
  const obj7 = {
    style: items2,
    onLayout: function handleLayout(nativeEvent) {
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
  items4 = [closure_7(tmp7(5582), obj8), , ];
  let tmp11Result = null != image;
  if (tmp11Result) {
    const obj9 = { style: tmp.imageContainer, children: items5 };
    const obj10 = { style: tmp.trinketsLottie, source: require("module_12212"), autoPlay: !stateFromStores };
    const tmp7Result = sharedValue(5613);
    items5 = [tmp12(tmp7Result, obj10), image];
    tmp11Result = tmp11(View, obj9);
  }
  items4[1] = tmp11Result;
  const items6 = [tmp.bannerTextContainer, ];
  items6[1] = null != image ? tmp.bannerTextContainerWithImage : tmp.bannerTextContainerWithoutImage;
  const obj11 = { style: items6, children: closure_7(Text, { variant: "text-md/semibold", color: "text-overlay-light", style: items7, children: text }) };
  items7 = [tmp.bannerText, ];
  let bannerTextCentered = null == image;
  Text = tmp4(5619).Text;
  const tmp16 = View;
  if (bannerTextCentered) {
    bannerTextCentered = tmp.bannerTextCentered;
  }
  items7[1] = bannerTextCentered;
  items4[2] = closure_7(tmp16, obj11);
  return closure_8(View, obj7);
};

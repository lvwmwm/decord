// Module ID: 12606
// Function ID: 12607
// Name: BannerBase
// Dependencies: [32, 19, 17, 5142, 21, 575, 5141, 12595, 1652, 1493, 5138, 504, 5771, 5723, 5755, 12607, 5761, 2]
// Exports: default

// Module 12606 (BannerBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ApplicationsImage from "ApplicationsImage" /* 12595 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let closure_9 = { mass: 1, stiffness: 100, damping: 15 };
let createStyles = createStyles_mod;
let obj = { banner: rect, bannerGradientColor: { backgroundColor: "#7eaaff" }, bannerBackgroundGradient: rect1, imageContainer: { width: 72 }, trinketsLottie: { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" }, bannerTextContainer: { alignItems: "center", justifyContent: "center", flexShrink: 1 }, bannerTextContainerWithImage: obj2, bannerTextContainerWithoutImage: { flex: 1 }, bannerText: { width: "100%" }, bannerTextCentered: { textAlign: "center" } };
rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: ApplicationsImage.APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function BannerBaseTsx1(){let[bannerMeasured,withDelay,withSpring,SPRING_CONFIG]=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};})" };
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(image) {
  let Text;
  let _undefined;
  let c0;
  let items5;
  let items6;
  let items7;
  let items9;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp3;
  let useReducedMotion;
  image = image.image;
  _require = undefined;
  const text = image.text;
  const tmp = closure_10();
  [tmp3, c0] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1493)().width - 2 * sharedValue(575).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj2 = require("ColorUtils");
  let items = [obj2.hexOpacityToRgba(backgroundColor, 0.2), ];
  const obj3 = require("ColorUtils");
  items[1] = obj3.hexOpacityToRgba(backgroundColor, 0);
  const items1 = [AccessibilityStore];
  const obj4 = require("get initialized");
  const stateFromStores = obj4.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const items2 = [closure_11, sharedValue, , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items2[2] = require("module_1652").withDelay;
  items2[3] = require("spring/spring").withSpring;
  items2[4] = closure_9;
  _require = undefined;
  let c1;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class BannerBaseTsx1 {
    constructor() {
      let items;
      let num = 0;
      const obj = _undefined;
      if (_undefined.get()) {
        num = _undefined2(150, _undefined3(1, c3));
      }
      let num4 = 30;
      const obj2 = { opacity: num, transform: items };
      if (obj.get()) {
        num4 = _undefined2(150, _undefined3(0, c3));
      }
      items = [{ translateY: num4 }];
      return obj2;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15];
  BannerBaseTsx1.__closure = items3;
  BannerBaseTsx1.__workletHash = 11568759794709;
  BannerBaseTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(BannerBaseTsx1);
  const items4 = [tmp.banner, , ];
  let num = 0;
  View = tmp7(1652).View;
  if (tmp3 > 0) {
    num = 1;
  }
  const obj5 = {
    style: items4,
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
    children: items6
  };
  items4[1] = { opacity: num, width: diff };
  items4[2] = animatedStyle;
  const obj6 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items5 };
  items5 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  items6 = [closure_7(sharedValue(5723), obj6), , ];
  let tmp17Result = null != image;
  if (tmp17Result) {
    const obj7 = { style: tmp.imageContainer, children: items7 };
    const obj8 = { style: tmp.trinketsLottie, source: require("module_12607"), autoPlay: !stateFromStores };
    const tmp7Result = sharedValue(5755);
    items7 = [closure_7(tmp7Result, obj8), image];
    tmp17Result = tmp17(View, obj7);
  }
  items6[1] = tmp17Result;
  const items8 = [tmp.bannerTextContainer, ];
  items8[1] = null != image ? tmp.bannerTextContainerWithImage : tmp.bannerTextContainerWithoutImage;
  const obj9 = { style: items8, children: closure_7(Text, { variant: "body-md/semibold", color: "text-overlay-light", style: items9, children: text }) };
  items9 = [tmp.bannerText, ];
  let bannerTextCentered = null == image;
  Text = tmp4(5761).Text;
  const tmp22 = View;
  if (bannerTextCentered) {
    bannerTextCentered = tmp.bannerTextCentered;
  }
  items9[1] = bannerTextCentered;
  items6[2] = closure_7(tmp22, obj9);
  return closure_8(View, obj5);
};

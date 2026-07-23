// Module ID: 11181
// Function ID: 86937
// Name: BannerBase
// Dependencies: [57, 31, 27, 4122, 33, 689, 4130, 11170, 3991, 1450, 3974, 566, 4542, 4554, 5453, 11182, 4126, 2]
// Exports: default

// Module 11181 (BannerBase)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
let closure_9 = { mass: 1, stiffness: 100, damping: 15 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, position: "absolute", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: require("ApplicationsImage").APP_ICON_SIZE + 2 * PX_12 + 4, bottom: require("_createForOfIteratorHelperLoose").space.PX_16, left: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.banner = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bannerGradientColor = { backgroundColor: "#7eaaff" };
let obj1 = { position: "absolute", top: 0, left: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.bannerBackgroundGradient = obj1;
_createForOfIteratorHelperLoose.imageContainer = { width: 72 };
_createForOfIteratorHelperLoose.trinketsLottie = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
let obj2 = { alignItems: "center", justifyContent: "center", marginLeft: require("_createForOfIteratorHelperLoose").space.PX_12, flexShrink: 1 };
_createForOfIteratorHelperLoose.bannerTextContainer = obj2;
_createForOfIteratorHelperLoose.bannerText = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_11 = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default function BannerBase(arg0) {
  let image;
  let text;
  ({ image, text } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let num = 0;
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  let obj = _require(3991);
  const sharedValue = obj.useSharedValue(false);
  const diff = sharedValue(1450)().width - 2 * sharedValue(689).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  let obj1 = _require(3974);
  let items = [obj1.hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = _require(3974);
  items[1] = obj2.hexOpacityToRgba(backgroundColor, 0);
  let obj3 = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items1, () => outer1_6.useReducedMotion);
  let obj4 = _require(3991);
  const fn = function _() {
    let obj = {};
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = callback(outer1_2[8]);
      num = obj2.withDelay(150, callback(outer1_2[12]).withSpring(1, outer1_9));
      const obj3 = callback(outer1_2[12]);
    }
    obj.opacity = num;
    obj = {};
    let num6 = 30;
    if (sharedValue.get()) {
      const obj5 = callback(outer1_2[8]);
      num6 = obj5.withDelay(150, callback(outer1_2[12]).withSpring(0, outer1_9));
      const obj6 = callback(outer1_2[12]);
    }
    obj.translateY = num6;
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { bannerMeasured: sharedValue, withDelay: _require(3991).withDelay, withSpring: _require(4542).withSpring, SPRING_CONFIG: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 5314641176204;
  fn.__initData = closure_11;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  obj = {};
  const items2 = [tmp.banner, , ];
  obj1 = {};
  if (first > 0) {
    num = 1;
  }
  obj1.opacity = num;
  obj1.width = diff;
  items2[1] = obj1;
  items2[2] = animatedStyle;
  obj.style = items2;
  obj.onLayout = function onLayout(nativeEvent) {
    const layout = nativeEvent.nativeEvent.layout;
    let height;
    if (null != layout) {
      height = layout.height;
    }
    if (height > 0) {
      callback(height);
      const result = sharedValue.set(true);
    }
  };
  const items3 = [tmp.bannerBackgroundGradient, { height: first, width: diff }];
  const items4 = [callback2(sharedValue(4554), { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: items3 }), , ];
  obj2 = { style: tmp.imageContainer };
  obj3 = { style: tmp.trinketsLottie, source: _require(11182), autoPlay: !stateFromStores };
  const items5 = [callback2(sharedValue(5453), obj3), image];
  obj2.children = items5;
  items4[1] = callback3(View, obj2);
  obj4 = { style: tmp.bannerTextContainer, children: callback2(_require(4126).Text, obj5) };
  obj5 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text };
  items4[2] = callback2(View, obj4);
  obj.children = items4;
  return callback3(sharedValue(3991).View, obj);
};

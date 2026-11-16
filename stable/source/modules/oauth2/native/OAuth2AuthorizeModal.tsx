// Module ID: 11063
// Function ID: 11064
// Name: OAuth2AuthorizeModal
// Dependencies: [19, 17, 21, 5170, 575, 9863, 1627, 1652, 5793, 7076, 1113, 11064, 7153, 5783, 7388, 11066, 2]
// Exports: default

// Module 11063 (OAuth2AuthorizeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import spring_spring from "spring/spring" /* 5793 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, goBackOrCancel, set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flex: 1 }, titleContainer: { padding: 16, flexDirection: "row", gap: 16 }, titleContainerBorder: rect, title: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginEnd: 40 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function OAuth2AuthorizeModalTsx1(){let[borderOpacity]=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};})" };
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  let Text;
  let intl3;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj13;
  let sharedValue;
  let stringResult;
  let tmp13Result;
  let tmp2Result;
  let tmp7;
  let tmp8;
  const tmp = closure_8();
  const tmp2 = sharedValue;
  const tmp4 = sharedValue(9863)(arg0);
  _require = tmp4;
  const top = sharedValue(1627)().top;
  const obj = require("module_1652");
  sharedValue = obj.useSharedValue(0);
  const items = [closure_9, sharedValue];
  let c0;
  [tmp7, tmp8] = items;
  const obj2 = require("module_1652");
  class OAuth2AuthorizeModalTsx1 {
    constructor() {
      let opacity = _undefined.get();
      if (opacity == null) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items1 = [tmp8];
  OAuth2AuthorizeModalTsx1.__closure = items1;
  OAuth2AuthorizeModalTsx1.__workletHash = 9078225687376;
  OAuth2AuthorizeModalTsx1.__initData = tmp7;
  const items2 = [sharedValue];
  const animatedStyle = obj2.useAnimatedStyle(OAuth2AuthorizeModalTsx1);
  const obj4 = { style: items3, children: items4 };
  items3 = [tmp.titleContainer, ];
  const obj3 = { style: tmp.container, children: items6 };
  const obj5 = { paddingTop: top + 16 };
  items3[1] = obj5;
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = set(withSpring(num, closure_7));
  }, items2);
  const PressableOpacity = tmp5(7076).PressableOpacity;
  if (null != tmp4.backStep) {
    const intl2 = tmp5(1113).intl;
    stringResult = intl2.string(tmp5(1113).t["13/7kX"]);
  } else {
    const intl = tmp5(1113).intl;
    stringResult = intl.string(tmp5(1113).t.cpT0Cq);
  }
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    onPress() {
      goBackOrCancel = goBackOrCancel.goBackOrCancel;
      let goBackOrCancelResult;
      if (goBackOrCancel != null) {
        goBackOrCancelResult = goBackOrCancel();
      }
      return goBackOrCancelResult;
    },
    children: tmp13Result
  };
  if (null != tmp4.backStep) {
    const obj7 = { color: tmp2(575).colors.INTERACTIVE_TEXT_DEFAULT };
    const ArrowSmallLeftIcon = tmp5(11064).ArrowSmallLeftIcon;
    tmp13Result = tmp13(ArrowSmallLeftIcon, obj7);
  } else {
    const obj8 = { color: tmp2(575).colors.INTERACTIVE_TEXT_DEFAULT };
    const XSmallIcon = tmp5(7153).XSmallIcon;
    tmp13Result = tmp13(XSmallIcon, obj8);
  }
  items4 = [closure_5(PressableOpacity, obj6), , ];
  const obj9 = { style: tmp.title, children: closure_5(Text, obj10) };
  obj10 = { variant: "heading-md/semibold", accessibilityRole: "header", children: intl3.string(require("intl").t["y+/PE9"]) };
  Text = tmp5(5783).Text;
  intl3 = tmp5(1113).intl;
  items4[1] = closure_5(View, obj9);
  const obj11 = { style: items5 };
  items5 = [tmp.titleContainerBorder, animatedStyle];
  items4[2] = closure_5(tmp2(1652).View, obj11);
  items6 = [closure_6(View, obj4), ];
  const obj12 = { bottom: true, style: tmp.contentContainer, children: closure_5(tmp2Result, obj13) };
  const SafeAreaPaddingView = tmp5(7388).SafeAreaPaddingView;
  obj13 = { onScroll: callback, centerContent: true };
  tmp2Result = tmp2(11066);
  const merged = Object.assign(tmp4);
  items6[1] = closure_5(SafeAreaPaddingView, obj12);
  return closure_6(View, obj3);
};

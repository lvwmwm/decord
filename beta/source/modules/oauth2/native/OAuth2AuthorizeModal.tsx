// Module ID: 8513
// Function ID: 8514
// Name: OAuth2AuthorizeModal
// Dependencies: [19, 17, 21, 4836, 576, 8514, 1613, 4566, 5280, 5435, 1115, 8743, 5992, 4832, 6544, 8745, 2]
// Exports: default

// Module 8513 (OAuth2AuthorizeModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
const __initData = { code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  let Text;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj13;
  let sharedValue;
  let stringResult;
  let tmp11Result;
  let tmp2Result;
  const tmp = closure_8();
  const tmp2 = sharedValue;
  const tmp4 = sharedValue(8514)(arg0);
  _require = tmp4;
  const top = sharedValue(1613)().top;
  const obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  const fn = function b() {
    let opacity = sharedValue.get();
    if (opacity == null) {
      opacity = 1;
    }
    return { opacity };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 5916964482569;
  fn.__initData = __initData;
  const items = [sharedValue];
  const obj2 = require("ReanimatedRexport");
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: items1, children: items2 };
  items1 = [tmp.titleContainer, ];
  const obj3 = { style: tmp.container, children: items4 };
  const obj5 = { paddingTop: top + 16 };
  items1[1] = obj5;
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = set(withSpring(num, closure_7));
  }, items);
  const PressableOpacity = require("Pressables").PressableOpacity;
  if (null != tmp4.backStep) {
    const intl2 = tmp5(1115).intl;
    stringResult = intl2.string(tmp5(1115).t["13/7kX"]);
  } else {
    const intl = tmp5(1115).intl;
    stringResult = intl.string(tmp5(1115).t.cpT0Cq);
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
    children: tmp11Result
  };
  if (null != tmp4.backStep) {
    const obj7 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    const ArrowSmallLeftIcon = tmp5(8743).ArrowSmallLeftIcon;
    tmp11Result = tmp11(ArrowSmallLeftIcon, obj7);
  } else {
    const obj8 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    const XSmallIcon = tmp5(5992).XSmallIcon;
    tmp11Result = tmp11(XSmallIcon, obj8);
  }
  items2 = [closure_5(PressableOpacity, obj6), , ];
  const obj9 = { style: tmp.title, children: closure_5(Text, obj10) };
  obj10 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: intl3.string(require("intl").t["y+/PE9"]) };
  Text = tmp5(4832).Text;
  intl3 = tmp5(1115).intl;
  items2[1] = closure_5(View, obj9);
  const obj11 = { style: items3 };
  items3 = [tmp.titleContainerBorder, animatedStyle];
  items2[2] = closure_5(tmp2(4566).View, obj11);
  items4 = [closure_6(View, obj4), ];
  const obj12 = { bottom: true, style: tmp.contentContainer, children: closure_5(tmp2Result, obj13) };
  const SafeAreaPaddingView = tmp5(6544).SafeAreaPaddingView;
  obj13 = { onScroll: callback, centerContent: true };
  tmp2Result = tmp2(8745);
  const merged = Object.assign(tmp4);
  items4[1] = closure_5(SafeAreaPaddingView, obj12);
  return closure_6(View, obj3);
};

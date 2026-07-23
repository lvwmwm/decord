// Module ID: 9995
// Function ID: 77276
// Name: OAuth2AuthorizeModal
// Dependencies: [31, 27, 33, 4130, 689, 8952, 1557, 3991, 4542, 4660, 1212, 9996, 5119, 4126, 5121, 9998, 2]
// Exports: default

// Module 9995 (OAuth2AuthorizeModal)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { flex: 1 };
_createForOfIteratorHelperLoose.titleContainer = { padding: 16, flexDirection: "row", gap: 16 };
let obj1 = { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.titleContainerBorder = obj1;
let obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, marginEnd: 40 };
_createForOfIteratorHelperLoose.title = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
let result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = sharedValue(8952)(arg0);
  const require = tmp2;
  let obj = require(3991);
  sharedValue = obj.useSharedValue(0);
  let obj1 = require(3991);
  const fn = function b() {
    const obj = {};
    const value = sharedValue.get();
    let num = 1;
    if (null != value) {
      num = value;
    }
    obj.opacity = num;
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 5916964482569;
  fn.__initData = closure_9;
  const items = [sharedValue];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: tmp.container };
  obj = { style: items1 };
  items1 = [tmp.titleContainer, ];
  obj1 = { paddingTop: sharedValue(1557)().top + 16 };
  items1[1] = obj1;
  const callback = React.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(tmp2(outer1_2[8]).withSpring(num, outer1_7));
  }, items);
  const obj2 = { accessibilityRole: "button" };
  if (null != tmp2.backStep) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  }
  obj2.accessibilityLabel = stringResult;
  obj2.onPress = function onPress() {
    let goBackOrCancelResult;
    if (null != tmp2.goBackOrCancel) {
      goBackOrCancelResult = tmp2.goBackOrCancel();
    }
    return goBackOrCancelResult;
  };
  if (null != tmp2.backStep) {
    const obj3 = { color: sharedValue(689).colors.INTERACTIVE_TEXT_DEFAULT };
    let tmp18 = callback(require(9996) /* ArrowSmallLeftIcon */.ArrowSmallLeftIcon, obj3);
  } else {
    const obj4 = { color: sharedValue(689).colors.INTERACTIVE_TEXT_DEFAULT };
    tmp18 = callback(require(5119) /* XSmallIcon */.XSmallIcon, obj4);
  }
  obj2.children = tmp18;
  const items2 = [callback(require(4660) /* PressableBase */.PressableOpacity, obj2), , ];
  const obj5 = { style: tmp.title };
  const obj6 = { variant: "redesign/heading-18/bold", accessibilityRole: "header" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl3.string(require(1212) /* getSystemLocale */.t["y+/PE9"]);
  obj5.children = callback(require(4126) /* Text */.Text, obj6);
  items2[1] = callback(View, obj5);
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  items2[2] = callback(sharedValue(3991).View, { style: items3 });
  obj.children = items2;
  const items4 = [closure_6(View, obj), ];
  const obj7 = { bottom: true, style: tmp.contentContainer };
  const obj8 = {};
  const merged = Object.assign(tmp2);
  obj8["onScroll"] = callback;
  obj8["centerContent"] = true;
  obj7.children = callback(sharedValue(9998), obj8);
  items4[1] = callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj7);
  obj.children = items4;
  return closure_6(View, obj);
};

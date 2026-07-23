// Module ID: 12426
// Function ID: 96482
// Name: PremiumMarketingFloatingSubscribeButton
// Dependencies: [31, 27, 4122, 653, 33, 4130, 689, 1557, 566, 12424, 5484, 666, 3991, 4131, 4554, 8560, 2]
// Exports: default

// Module 12426 (PremiumMarketingFloatingSubscribeButton)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 } };
_createForOfIteratorHelperLoose = { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.buttonContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
let closure_11 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(isVisible) {
  let buttonText;
  let openPayment;
  isVisible = isVisible.isVisible;
  const backgroundColor = isVisible.backgroundColor;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = isVisible(stateFromStores[8]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const tmp3 = backgroundColor(stateFromStores[9]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = backgroundColor(stateFromStores[9])(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA));
  const memo = React.useMemo(() => {
    const obj = backgroundColor(stateFromStores[11])(backgroundColor);
    const items = [backgroundColor(stateFromStores[11])(backgroundColor).alpha(0).hex(), backgroundColor, backgroundColor];
    return items;
  }, items1);
  let obj1 = isVisible(stateFromStores[12]);
  class A {
    constructor() {
      obj = {};
      obj2 = isVisible(outer1_2[13]);
      num = 0;
      if (isVisible.get()) {
        num = 1;
      }
      obj = {};
      num2 = 150;
      num3 = 150;
      if (closure_2) {
        num3 = 0;
      }
      obj.duration = num3;
      obj.opacity = obj2.withTiming(num, obj);
      obj1 = {};
      obj5 = isVisible(outer1_2[13]);
      num4 = 12;
      if (isVisible.get()) {
        num4 = 0;
      }
      obj2 = {};
      if (closure_2) {
        num2 = 0;
      }
      obj2.duration = num2;
      obj1.translateY = obj5.withTiming(num4, obj2);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj = { withTiming: isVisible(stateFromStores[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  A.__closure = obj;
  A.__workletHash = 4035217753570;
  A.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(A);
  let obj3 = isVisible(stateFromStores[12]);
  class E {
    constructor() {
      obj = {};
      str = "none";
      if (isVisible.get()) {
        str = "box-none";
      }
      obj.pointerEvents = str;
      obj.accessibilityElementsHidden = !isVisible.get();
      str2 = "no-hide-descendants";
      if (isVisible.get()) {
        str2 = "auto";
      }
      obj.importantForAccessibility = str2;
      return obj;
    }
  }
  E.__closure = { isVisible };
  E.__workletHash = 14964730036713;
  E.__initData = closure_11;
  const animatedProps = obj3.useAnimatedProps(E);
  obj = { animatedProps, style: items2 };
  items2 = [tmp.container, animatedStyle];
  obj1 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  const items3 = [callback(backgroundColor(stateFromStores[14]), obj1), ];
  const obj2 = {};
  const items4 = [tmp.buttonContainer, , ];
  obj3 = { paddingBottom: Math.max(backgroundColor(stateFromStores[7])().bottom, backgroundColor(stateFromStores[6]).space.PX_16) };
  items4[1] = obj3;
  items4[2] = isVisible.style;
  obj2.style = items4;
  obj2.children = callback(backgroundColor(stateFromStores[15]), { onPress: openPayment, text: buttonText });
  items3[1] = callback(View, obj2);
  obj.children = items3;
  return callback2(backgroundColor(stateFromStores[12]).View, obj);
};

// Module ID: 12307
// Function ID: 94303
// Name: PremiumMarketingFloatingSubscribeButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 12307 (PremiumMarketingFloatingSubscribeButton)
import closure_3 from "result";
import { View } from "result";
import closure_5 from "result";
import { VerticalGradient } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_7, jsxs: closure_8 } = result);
result = { container: {}, gradient: { backgroundColor: false, padding: false, borderRadius: false, alignItems: false, borderWidth: false } };
result = { <string:1211512470>: "<string:544294082>", <string:2892040516>: "<string:16777216>", <string:2181768798>: "useIsDisabled", <string:3077029956>: "displayNameAccessibilityHint", paddingTop: require("result").space.PX_12 };
result.buttonContainer = result;
result = result.createStyles(result);
let closure_10 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
let closure_11 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
result = result.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(isVisible) {
  let buttonText;
  let openPayment;
  isVisible = isVisible.isVisible;
  const arg1 = isVisible;
  const backgroundColor = isVisible.backgroundColor;
  const importDefault = backgroundColor;
  const tmp = result();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const dependencyMap = stateFromStores;
  const tmp3 = importDefault(dependencyMap[9]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = importDefault(dependencyMap[9])(importDefault(dependencyMap[10]).PREMIUM_MARKETING_FLOATING_CTA));
  const memo = React.useMemo(() => {
    const obj = backgroundColor(stateFromStores[11])(backgroundColor);
    const items = [backgroundColor(stateFromStores[11])(backgroundColor).alpha(0).hex(), backgroundColor, backgroundColor];
    return items;
  }, items1);
  let obj1 = arg1(dependencyMap[12]);
  class A {
    constructor() {
      obj = {};
      obj2 = isVisible(closure_2[13]);
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
      obj5 = isVisible(closure_2[13]);
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
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  A.__closure = obj;
  A.__workletHash = 4035217753570;
  A.__initData = closure_10;
  const animatedStyle = obj1.useAnimatedStyle(A);
  let obj3 = arg1(dependencyMap[12]);
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
  const items2 = [tmp.container, animatedStyle];
  obj1 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [], start: VerticalGradient.START, end: VerticalGradient.END };
  const items3 = [callback(importDefault(dependencyMap[14]), obj1), ];
  const obj2 = {};
  const items4 = [tmp.buttonContainer, , ];
  obj3 = { paddingBottom: Math.max(importDefault(dependencyMap[7])().bottom, importDefault(dependencyMap[6]).space.PX_16) };
  items4[1] = obj3;
  items4[2] = isVisible.style;
  obj2.style = items4;
  const obj4 = { -77431875: "<string:16777600>", 651579808: "<string:35647043>", -1437179293: "<string:35646720>", 1640527953: "<string:23841536>", 101339451: "<string:9859328>", text: buttonText, onPress: openPayment };
  obj2.children = callback(arg1(dependencyMap[15]).Button, obj4);
  items3[1] = callback(View, obj2);
  obj.children = items3;
  return callback2(importDefault(dependencyMap[12]).View, obj);
};

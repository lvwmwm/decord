// Module ID: 13035
// Function ID: 13036
// Name: PremiumMarketingFloatingSubscribeButton
// Dependencies: [19, 17, 4825, 1074, 21, 4836, 576, 1613, 504, 13033, 6603, 672, 4566, 4837, 5293, 9425, 2]
// Exports: default

// Module 13035 (PremiumMarketingFloatingSubscribeButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1074 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: { position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1 }, gradient: { position: "absolute", left: 0, right: 0, bottom: 0, top: -64 }, buttonContainer: obj2 };
obj2 = { marginLeft: "auto", marginRight: "auto", width: "100%", paddingHorizontal: 12, paddingTop: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function PremiumMarketingFloatingSubscribeButtonTsx1(){const{withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX}=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};}" };
const __initData2 = { code: "function PremiumMarketingFloatingSubscribeButtonTsx2(){const{isVisible}=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};}" };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(isVisible) {
  let buttonText;
  let items2;
  let items3;
  let items4;
  let openPayment;
  let useReducedMotion;
  isVisible = isVisible.isVisible;
  const backgroundColor = isVisible.backgroundColor;
  let stateFromStores;
  const style = isVisible.style;
  const tmp = closure_9();
  const bottom = backgroundColor(stateFromStores[7])().bottom;
  let obj = isVisible(stateFromStores[8]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp3 = backgroundColor(stateFromStores[9]);
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = tmp3(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA));
  tmp3(backgroundColor(stateFromStores[10]).PREMIUM_MARKETING_FLOATING_CTA);
  const memo = react.useMemo(() => {
    const items = [, , ];
    const obj = _modDef672(backgroundColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = backgroundColor;
    items[2] = backgroundColor;
    return items;
  }, items1);
  let obj2 = isVisible(stateFromStores[12]);
  class A {
    constructor() {
      let items;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      const obj = isVisible;
      if (isVisible.get()) {
        num = 1;
      }
      let num2 = 150;
      let num3 = 150;
      if (stateFromStores) {
        num3 = 0;
      }
      const obj2 = { opacity: withTiming(num, { duration: num3 }), transform: items };
      const withTiming2 = tmp(4837).withTiming;
      let num4 = 12;
      timing;
      if (obj.get()) {
        num4 = 0;
      }
      if (stateFromStores) {
        num2 = 0;
      }
      items = [{ translateY: withTiming2(num4, { duration: num2 }) }];
      ({ translateY: withTiming2(num4, { duration: num2 }) });
      return obj2;
    }
  }
  const obj3 = { withTiming: isVisible(stateFromStores[13]).withTiming, isVisible, useReducedMotion: stateFromStores, FADE_DURATION_MS: 150, ENTER_TRANSLATE_PX: 12 };
  A.__closure = obj3;
  A.__workletHash = 4035217753570;
  A.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(A);
  const obj4 = isVisible(stateFromStores[12]);
  class E {
    constructor() {
      let str2;
      let str = "none";
      if (isVisible.get()) {
        str = "box-none";
      }
      const obj2 = { pointerEvents: str, accessibilityElementsHidden: !isVisible.get(), importantForAccessibility: str2 };
      str2 = "no-hide-descendants";
      if (isVisible.get()) {
        str2 = "auto";
      }
      return obj2;
    }
  }
  E.__closure = { isVisible };
  E.__workletHash = 14964730036713;
  E.__initData = __initData2;
  const animatedProps = obj4.useAnimatedProps(E);
  const obj5 = { animatedProps, style: items2, children: items3 };
  items2 = [tmp.container, animatedStyle];
  View = backgroundColor(stateFromStores[12]).View;
  items3 = [, ];
  const obj6 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items3[0] = closure_7(backgroundColor(stateFromStores[14]), obj6);
  const obj7 = { style: items4, children: closure_7(backgroundColor(stateFromStores[15]), { onPress: openPayment, text: buttonText }) };
  items4 = [tmp.buttonContainer, { paddingBottom: Math.max(bottom, backgroundColor(stateFromStores[6]).space.PX_16) }, style];
  ({ paddingBottom: Math.max(bottom, backgroundColor(stateFromStores[6]).space.PX_16) });
  items3[1] = closure_7(View, obj7);
  return closure_8(View, obj5);
};

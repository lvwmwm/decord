// Module ID: 15703
// Function ID: 15704
// Name: PremiumMarketingFloatingSubscribeButton
// Dependencies: [19, 17, 5171, 1072, 21, 5170, 575, 1627, 504, 15701, 7445, 671, 1652, 5402, 5747, 10441, 2]
// Exports: default

// Module 15703 (PremiumMarketingFloatingSubscribeButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7445 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10441 */;
import useOpenPremiumMarketingPaymentDefault from "useOpenPremiumMarketingPayment" /* 15701 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
let closure_10 = { code: "(function PremiumMarketingFloatingSubscribeButtonTsx1(){let[withTiming,isVisible,useReducedMotion,FADE_DURATION_MS,ENTER_TRANSLATE_PX]=this.__closure;return{opacity:withTiming(isVisible.get()?1:0,{duration:useReducedMotion?0:FADE_DURATION_MS}),transform:[{translateY:withTiming(isVisible.get()?0:ENTER_TRANSLATE_PX,{duration:useReducedMotion?0:FADE_DURATION_MS})}]};})" };
let closure_11 = { code: "(function PremiumMarketingFloatingSubscribeButtonTsx2(){let[isVisible]=this.__closure;return{pointerEvents:isVisible.get()?'box-none':'none',accessibilityElementsHidden:!isVisible.get(),importantForAccessibility:isVisible.get()?'auto':'no-hide-descendants'};})" };
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumMarketingFloatingSubscribeButton.tsx");

export default function PremiumMarketingFloatingSubscribeButton(style) {
  let backgroundColor;
  let buttonText;
  let isVisible;
  let items6;
  let items7;
  let items8;
  let openPayment;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let useReducedMotion;
  ({ isVisible, backgroundColor } = style);
  style = style.style;
  const tmp = closure_9();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = backgroundColor(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp6 = useOpenPremiumMarketingPaymentDefault;
  const items1 = [backgroundColor];
  ({ openPayment, buttonText } = tmp6(AnalyticsLocationDefault.PREMIUM_MARKETING_FLOATING_CTA));
  tmp6(AnalyticsLocationDefault.PREMIUM_MARKETING_FLOATING_CTA);
  const memo = react.useMemo(() => {
    const items = [, , ];
    const obj = _modDef671(backgroundColor);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = backgroundColor;
    items[2] = backgroundColor;
    return items;
  }, items1);
  const items2 = [closure_10, , , , , ];
  const useAnimatedStyle = backgroundColor(1652).useAnimatedStyle;
  backgroundColor(1652);
  items2[1] = backgroundColor(5402).withTiming;
  items2[2] = isVisible;
  items2[3] = stateFromStores;
  items2[4] = 150;
  items2[5] = 12;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  const tmp4 = backgroundColor;
  class PremiumMarketingFloatingSubscribeButtonTsx1 {
    constructor() {
      let items;
      let num = 0;
      const obj = _undefined;
      if (_undefined.get()) {
        num = 1;
      }
      let num2 = 0;
      if (!c2) {
        num2 = c3;
      }
      let num3 = 0;
      const obj2 = { opacity: _undefined(num, { duration: num2 }), transform: items };
      if (!obj.get()) {
        num3 = c4;
      }
      let num4 = 0;
      if (!c2) {
        num4 = c3;
      }
      items = [{ translateY: _undefined(num3, { duration: num4 }) }];
      ({ translateY: _undefined(num3, { duration: num4 }) });
      return obj2;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  PremiumMarketingFloatingSubscribeButtonTsx1.__closure = items3;
  PremiumMarketingFloatingSubscribeButtonTsx1.__workletHash = 2100931871963;
  PremiumMarketingFloatingSubscribeButtonTsx1.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(PremiumMarketingFloatingSubscribeButtonTsx1);
  const items4 = [closure_11, isVisible];
  c0 = undefined;
  [tmp17, tmp18] = items4;
  const tmp4Result = tmp4(1652);
  class PremiumMarketingFloatingSubscribeButtonTsx2 {
    constructor() {
      let str2;
      let str = "none";
      if (_undefined.get()) {
        str = "box-none";
      }
      const obj2 = { pointerEvents: str, accessibilityElementsHidden: !_undefined.get(), importantForAccessibility: str2 };
      str2 = "no-hide-descendants";
      if (_undefined.get()) {
        str2 = "auto";
      }
      return obj2;
    }
  }
  const items5 = [tmp18];
  PremiumMarketingFloatingSubscribeButtonTsx2.__closure = items5;
  PremiumMarketingFloatingSubscribeButtonTsx2.__workletHash = 4354740509872;
  PremiumMarketingFloatingSubscribeButtonTsx2.__initData = tmp17;
  const animatedProps = tmp4Result.useAnimatedProps(PremiumMarketingFloatingSubscribeButtonTsx2);
  let obj2 = { animatedProps, style: items6, children: items7 };
  items6 = [tmp.container, animatedStyle];
  View = tmp2(1652).View;
  const obj3 = { pointerEvents: "none", style: tmp.gradient, colors: memo, locations: [0, 0.75, 1], start: VerticalGradient.START, end: VerticalGradient.END };
  items7 = [closure_7(tmp2(5747), obj3), ];
  const obj4 = { style: items8, children: closure_7(NitroUpsellButtonDefault, { onPress: openPayment, text: buttonText }) };
  items8 = [tmp.buttonContainer, { paddingBottom: Math.max(bottom, tmp2(575).space.PX_16) }, style];
  ({ paddingBottom: Math.max(bottom, nativeDefault.space.PX_16) });
  items7[1] = closure_7(View, obj4);
  return closure_8(View, obj2);
};

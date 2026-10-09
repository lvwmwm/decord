// Module ID: 14859
// Function ID: 14860
// Name: UserProfilePremiumTryItOutUpsell
// Dependencies: [19, 6898, 21, 5091, 14858, 558, 576, 1631, 4811, 5375, 1126, 2]

// Module 14859 (UserProfilePremiumTryItOutUpsell)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import spring from "spring" /* 5375 */;
import Constants from "Constants" /* 6898 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 14858 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp4;
const ReanimatedRexportDefault = tmp4(4811);
const UserProfileUpsellCardV2Default = tmp4(14858);
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const jsx = Fragment.jsx;
let c5 = 0.9;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
let closure_7 = createStyles.createStyles((bottom) => {
  let obj2;
  const obj = { container: obj2, card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  obj2 = { position: "absolute", bottom, start: 0, end: 0 };
  ({ marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
  return obj;
});
const __initData = { code: "function UserProfilePremiumTryItOutUpsellTsx1(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}" };
const __initData2 = { code: "function UserProfilePremiumTryItOutUpsellTsx2(){const{isVisible}=this.__closure;const visible_0=isVisible.get();return{pointerEvents:visible_0?\"box-none\":\"none\",accessibilityElementsHidden:!visible_0,importantForAccessibility:visible_0?\"auto\":\"no-hide-descendants\"};}" };
const __initData3 = { code: "function UserProfilePremiumTryItOutUpsellTsx3(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}" };
const __initData4 = { code: "function UserProfilePremiumTryItOutUpsellTsx4(){const{isVisible}=this.__closure;const visible_0=isVisible.get();return{pointerEvents:visible_0?'box-none':'none',accessibilityElementsHidden:!visible_0,importantForAccessibility:visible_0?'auto':'no-hide-descendants'};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePremiumTryItOutUpsell(isVisible) {
  let obj = isVisible(576);
  const cResult = obj.c(12);
  isVisible = isVisible.isVisible;
  const onPreviewPremium = isVisible.onPreviewPremium;
  const tmp5 = closure_7(useSafeAreaInsetsDefault().bottom);
  const obj2 = isVisible(4811);
  const fn = function c() {
    let items;
    const value = isVisible.get();
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (value) {
      num = 1;
    }
    let num2 = 60;
    const obj = { opacity: withSpring(num, FLOATING_UPSELL_SPRING), transform: items };
    const withSpring2 = spring.withSpring;
    spring;
    if (value) {
      num2 = 0;
    }
    items = [{ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) }, ];
    ({ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) });
    let num3 = 1;
    const withSpring3 = spring.withSpring;
    spring;
    if (!value) {
      num3 = c5;
    }
    items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
    ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
    return obj;
  };
  const obj3 = { isVisible, withSpring: isVisible(5375).withSpring, FLOATING_UPSELL_SPRING, DISMISSED_TRANSLATE_Y: 60, DISMISSED_SCALE };
  fn.__closure = obj3;
  fn.__workletHash = 7434922701119;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function u() {
    let str2;
    const value = isVisible.get();
    let str = "none";
    if (value) {
      str = "box-none";
    }
    const obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: str2 };
    str2 = "no-hide-descendants";
    if (value) {
      str2 = "auto";
    }
    return obj;
  };
  fn2.__closure = { isVisible };
  fn2.__workletHash = 5163998995941;
  fn2.__initData = __initData2;
  const obj4 = isVisible(4811);
  const animatedProps = obj4.useAnimatedProps(fn2);
  if (cResult[0] === animatedStyle) {
    let tmp8;
    let tmp11;
    let tmp10;
    if (cResult[1] === tmp5.container) {
      tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    const card = tmp5.card;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(isVisible(1126).t["MswR/h"]);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(isVisible(1126).t.PxUx8e);
      let num = 3;
      cResult[3] = stringResult;
      let num2 = 4;
      cResult[4] = stringResult1;
      tmp11 = stringResult1;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    if (cResult[5] === onPreviewPremium) {
      let tmp14;
      if (cResult[6] === tmp5.card) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === animatedProps) {
        if (cResult[9] === tmp8) {
          let tmp17;
          if (cResult[10] === tmp14) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
      const tmp19 = jsx(ReanimatedRexportDefault.View, { animatedProps, style: tmp8, children: tmp14 });
      cResult[8] = animatedProps;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      cResult[11] = tmp19;
      tmp17 = tmp19;
    }
    const tmp16 = jsx(UserProfileUpsellCardV2Default, { style: card, text: tmp10, buttonText: tmp11, onButtonPress: onPreviewPremium, buttonVariant: "primary" });
    let num3 = 5;
    cResult[5] = onPreviewPremium;
    cResult[6] = tmp5.card;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  let items = [tmp5.container, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp5.container;
  cResult[2] = items;
  tmp8 = items;
}) : (function UserProfilePremiumTryItOutUpsell(isVisible) {
  let intl;
  let intl2;
  isVisible = isVisible.isVisible;
  const onPreviewPremium = isVisible.onPreviewPremium;
  const tmp = closure_7(useSafeAreaInsetsDefault().bottom);
  let obj = isVisible(4811);
  const fn = function _() {
    let items;
    const value = isVisible.get();
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (value) {
      num = 1;
    }
    let num2 = 60;
    const obj = { opacity: withSpring(num, FLOATING_UPSELL_SPRING), transform: items };
    const withSpring2 = spring.withSpring;
    spring;
    if (value) {
      num2 = 0;
    }
    items = [{ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) }, ];
    ({ translateY: withSpring2(num2, FLOATING_UPSELL_SPRING) });
    let num3 = 1;
    const withSpring3 = spring.withSpring;
    spring;
    if (!value) {
      num3 = c5;
    }
    items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
    ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
    return obj;
  };
  const obj2 = { isVisible, withSpring: isVisible(5375).withSpring, FLOATING_UPSELL_SPRING, DISMISSED_TRANSLATE_Y: 60, DISMISSED_SCALE };
  fn.__closure = obj2;
  fn.__workletHash = 14790282051517;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = isVisible(4811);
  class I {
    constructor() {
      let str2;
      const value = isVisible.get();
      let str = "none";
      if (value) {
        str = "box-none";
      }
      const obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: str2 };
      str2 = "no-hide-descendants";
      if (value) {
        str2 = "auto";
      }
      return obj;
    }
  }
  I.__closure = { isVisible };
  I.__workletHash = 15404222413955;
  I.__initData = __initData4;
  const animatedProps = obj3.useAnimatedProps(I);
  let items = [tmp.container, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  ({ style: tmp.card, text: intl.string(isVisible(1126).t["MswR/h"]), buttonText: intl2.string(isVisible(1126).t.PxUx8e), onButtonPress: onPreviewPremium, buttonVariant: "primary" });
  intl = isVisible(1126).intl;
  intl2 = isVisible(1126).intl;
  return <View animatedProps={animatedProps} style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default tmp3;

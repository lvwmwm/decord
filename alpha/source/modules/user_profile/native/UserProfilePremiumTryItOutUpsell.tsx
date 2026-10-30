// Module ID: 16510
// Function ID: 16511
// Name: UserProfilePremiumTryItOutUpsell
// Dependencies: [19, 7371, 21, 5009, 16486, 1626, 5090, 5632, 1114, 2]
// Exports: default

// Module 16510 (UserProfilePremiumTryItOutUpsell)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import Constants from "Constants" /* 7371 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 16486 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const jsx = Fragment.jsx;
const FLOATING_UPSELL_SPRING = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
let closure_6 = createStyles.createStyles((bottom) => {
  let obj2;
  const obj = { container: obj2, card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  obj2 = { position: "absolute", bottom, start: 0, end: 0 };
  ({ marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
  return obj;
});
const __initData = { code: "function UserProfilePremiumTryItOutUpsellTsx1(){const{isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE}=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};}" };
const __initData2 = { code: "function UserProfilePremiumTryItOutUpsellTsx2(){const{isVisible}=this.__closure;const visible=isVisible.get();return{pointerEvents:visible?'box-none':'none',accessibilityElementsHidden:!visible,importantForAccessibility:visible?'auto':'no-hide-descendants'};}" };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default function UserProfilePremiumTryItOutUpsell(isVisible) {
  let intl;
  let intl2;
  isVisible = isVisible.isVisible;
  const onPreviewPremium = isVisible.onPreviewPremium;
  const tmp = closure_6(useSafeAreaInsetsDefault().bottom);
  let obj = isVisible(5090);
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
    let num3 = 0.9;
    const withSpring3 = spring.withSpring;
    spring;
    if (value) {
      num3 = 1;
    }
    items[1] = { scale: withSpring3(num3, FLOATING_UPSELL_SPRING) };
    ({ scale: withSpring3(num3, FLOATING_UPSELL_SPRING) });
    return obj;
  };
  const obj2 = { isVisible, withSpring: isVisible(5632).withSpring, FLOATING_UPSELL_SPRING, DISMISSED_TRANSLATE_Y: 60, DISMISSED_SCALE: 0.9 };
  fn.__closure = obj2;
  fn.__workletHash = 7434922701119;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = isVisible(5090);
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
  fn2.__workletHash = 4173826125285;
  fn2.__initData = __initData2;
  const animatedProps = obj3.useAnimatedProps(fn2);
  let items = [tmp.container, animatedStyle];
  const View = ReanimatedRexportDefault.View;
  ({ style: tmp.card, text: intl.string(isVisible(1114).t["MswR/h"]), buttonText: intl2.string(isVisible(1114).t.PxUx8e), onButtonPress: onPreviewPremium, buttonVariant: "primary" });
  intl = isVisible(1114).intl;
  intl2 = isVisible(1114).intl;
  return <View animatedProps={animatedProps} style={items}>{null}</View>;
};

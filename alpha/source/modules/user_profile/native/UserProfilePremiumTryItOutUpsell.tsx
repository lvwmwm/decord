// Module ID: 16833
// Function ID: 16834
// Name: UserProfilePremiumTryItOutUpsell
// Dependencies: [19, 7515, 21, 5143, 16799, 1627, 1652, 5773, 1113, 2]
// Exports: default

// Module 16833 (UserProfilePremiumTryItOutUpsell)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5773 */;
import Constants from "Constants" /* 7515 */;
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2" /* 16799 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;
let num, num2, num3, obj1, obj4, str, str2, tmp2, value;

const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
const jsx = Fragment.jsx;
let closure_5 = { mass: 1, damping: 25, stiffness: 400, overshootClamping: false };
let closure_6 = createStyles.createStyles((bottom) => {
  let obj2;
  const obj = { container: obj2, card: { marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH } };
  obj2 = { position: "absolute", bottom, start: 0, end: 0 };
  ({ marginHorizontal: PROFILE_SIDE_PADDING - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH });
  return obj;
});
let closure_7 = { code: "(function UserProfilePremiumTryItOutUpsellTsx1(){let[isVisible,withSpring,FLOATING_UPSELL_SPRING,DISMISSED_TRANSLATE_Y,DISMISSED_SCALE]=this.__closure;const visible=isVisible.get();return{opacity:withSpring(visible?1:0,FLOATING_UPSELL_SPRING),transform:[{translateY:withSpring(visible?0:DISMISSED_TRANSLATE_Y,FLOATING_UPSELL_SPRING)},{scale:withSpring(visible?1:DISMISSED_SCALE,FLOATING_UPSELL_SPRING)}]};})" };
let closure_8 = { code: "(function UserProfilePremiumTryItOutUpsellTsx2(){let[isVisible]=this.__closure;const visible=isVisible.get();return{pointerEvents:visible?'box-none':'none',accessibilityElementsHidden:!visible,importantForAccessibility:visible?'auto':'no-hide-descendants'};})" };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutUpsell.tsx");

export default function UserProfilePremiumTryItOutUpsell(isVisible) {
  let intl;
  let intl2;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  isVisible = isVisible.isVisible;
  const onPreviewPremium = isVisible.onPreviewPremium;
  const tmp3 = closure_6(useSafeAreaInsetsDefault().bottom);
  let items = [closure_7, isVisible, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = spring_spring.withSpring;
  items[3] = closure_5;
  items[4] = 60;
  items[5] = 0.9;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class UserProfilePremiumTryItOutUpsellTsx1 {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_1;
      num = 0;
      if (value) {
        num = 1;
      }
      obj = { opacity: tmp2(num, closure_2), transform: null };
      tmp3 = closure_2;
      num2 = 0;
      if (!value) {
        num2 = closure_3;
      }
      obj1 = { translateY: tmp2(num2, tmp3) };
      items = [, ];
      items[0] = obj1;
      num3 = 1;
      if (!value) {
        num3 = closure_4;
      }
      obj4 = { scale: tmp2(num3, tmp3) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  UserProfilePremiumTryItOutUpsellTsx1.__closure = items1;
  UserProfilePremiumTryItOutUpsellTsx1.__workletHash = 3911087995142;
  UserProfilePremiumTryItOutUpsellTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(UserProfilePremiumTryItOutUpsellTsx1);
  const items2 = [closure_8, isVisible];
  c0 = undefined;
  [tmp13, tmp14] = items2;
  const tmp4Result = _mod1652;
  class UserProfilePremiumTryItOutUpsellTsx2 {
    constructor() {
      value = closure_0.get();
      str = "none";
      if (value) {
        str = "box-none";
      }
      obj = { pointerEvents: str, accessibilityElementsHidden: !value, importantForAccessibility: null };
      str2 = "no-hide-descendants";
      if (value) {
        str2 = "auto";
      }
      obj.importantForAccessibility = str2;
      return obj;
    }
  }
  const items3 = [tmp14];
  UserProfilePremiumTryItOutUpsellTsx2.__closure = items3;
  UserProfilePremiumTryItOutUpsellTsx2.__workletHash = 15138098665436;
  UserProfilePremiumTryItOutUpsellTsx2.__initData = tmp13;
  const animatedProps = tmp4Result.useAnimatedProps(UserProfilePremiumTryItOutUpsellTsx2);
  const items4 = [tmp3.container, animatedStyle];
  const View = tmp(1652).View;
  const obj2 = { style: tmp3.card, text: intl.string(intl3.t["MswR/h"]), buttonText: intl2.string(intl3.t.PxUx8e), onButtonPress: onPreviewPremium, buttonVariant: "primary" };
  UserProfileUpsellCardV2Default;
  intl = tmp4(1113).intl;
  intl2 = tmp4(1113).intl;
  return <View animatedProps={animatedProps} style={items4}>{null}</View>;
};

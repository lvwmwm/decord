// Module ID: 17759
// Function ID: 17760
// Name: FloatingApplyButton
// Dependencies: [19, 5171, 1623, 21, 504, 1627, 1652, 575, 5793, 5408, 5790, 2]
// Exports: default

// Module 17759 (FloatingApplyButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1623 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import HapticUtils from "HapticUtils" /* 5408 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

let closure_5 = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = Fragment.jsx;
let closure_7 = { code: "(function FloatingApplyButtonTsx1(){let[visible]=this.__closure;return{pointerEvents:visible?'box-none':'none'};})" };
let closure_8 = { code: "(function FloatingApplyButtonTsx2(){let[visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};})" };
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default function FloatingApplyButton(renderButton) {
  let disabled;
  let onPress;
  let text;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  let useReducedMotion;
  let visible;
  ({ visible, disabled, text, onPress } = renderButton);
  renderButton = renderButton.renderButton;
  const loading = renderButton.loading;
  let obj = onPress(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items1 = [closure_7, visible];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = onPress(1652);
  class FloatingApplyButtonTsx1 {
    constructor() {
      let pointerEvents = "none";
      if (c0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items2 = [tmp6];
  FloatingApplyButtonTsx1.__closure = items2;
  FloatingApplyButtonTsx1.__workletHash = 4329148887087;
  FloatingApplyButtonTsx1.__initData = tmp5;
  const animatedProps = obj2.useAnimatedProps(FloatingApplyButtonTsx1);
  const items3 = [closure_8, visible, , , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  onPress(1652);
  items3[2] = nativeDefault;
  items3[3] = stateFromStores;
  items3[4] = onPress(5793).withSpring;
  items3[5] = closure_5;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items3;
  class FloatingApplyButtonTsx2 {
    constructor() {
      let items;
      let tmp9;
      let num = 0;
      if (c0) {
        num = 1;
      }
      let num2 = 60;
      if (c0) {
        num2 = 0;
      }
      let num3 = 0.9;
      if (c0) {
        num3 = 1;
      }
      const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: _undefined.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: tmp9 };
      let tmp3 = num2;
      if (!c2) {
        tmp3 = _undefined2(num2, c4);
      }
      items = [{ translateY: tmp3 }, ];
      let tmp6 = num3;
      if (!c2) {
        tmp6 = _undefined2(num3, c4);
      }
      items[1] = { scale: tmp6 };
      tmp9 = num;
      if (!c2) {
        tmp9 = _undefined2(num, c4);
      }
      return rect;
    }
  }
  const items4 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  FloatingApplyButtonTsx2.__closure = items4;
  FloatingApplyButtonTsx2.__workletHash = 13112691757829;
  FloatingApplyButtonTsx2.__initData = tmp9;
  const items5 = [onPress];
  const animatedStyle = useAnimatedStyle(FloatingApplyButtonTsx2);
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items5);
  const View = tmp4(1652).View;
  let renderButtonResult;
  const View2 = tmp4(1652).View;
  if (renderButton != null) {
    const obj5 = { text, disabled, onPress: callback };
    renderButtonResult = renderButton(obj5);
  }
  if (renderButtonResult == null) {
    const obj6 = { variant: "primary", size: "lg", disabled, onPress: callback, text, loading };
    renderButtonResult = tmp17(tmp(5790).Button, obj6);
  }
  return <View style={animatedStyle}>{null}</View>;
};

// Module ID: 14954
// Function ID: 14955
// Name: FloatingApplyButton
// Dependencies: [19, 4825, 1609, 21, 504, 1613, 4566, 576, 5280, 4801, 5281, 2]
// Exports: default

// Module 14954 (FloatingApplyButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const MEDIA_PICKER_SEND_BUTTON_SPRING = MediaKeyboardConstants.MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = Fragment.jsx;
const __initData = { code: "function FloatingApplyButtonTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}" };
const __initData2 = { code: "function FloatingApplyButtonTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.space.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}" };
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/FloatingApplyButton.tsx");

export default function FloatingApplyButton(visible) {
  let disabled;
  let onPress;
  let text;
  let useReducedMotion;
  visible = visible.visible;
  ({ disabled, text, onPress } = visible);
  const renderButton = visible.renderButton;
  let stateFromStores;
  const loading = visible.loading;
  let obj = visible(stateFromStores[4]);
  let items = [AccessibilityStore];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const bottom = onPress(stateFromStores[5])().bottom;
  let obj2 = visible(stateFromStores[6]);
  const tmp = visible;
  class I {
    constructor() {
      let pointerEvents = "none";
      if (visible) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  I.__closure = { visible };
  I.__workletHash = 8866673550486;
  I.__initData = __initData;
  const animatedProps = obj2.useAnimatedProps(I);
  let obj3 = visible(stateFromStores[6]);
  class P {
    constructor() {
      let items;
      let withSpringResult2;
      let num = 0;
      if (visible) {
        num = 1;
      }
      let num2 = 60;
      if (visible) {
        num2 = 0;
      }
      let num3 = 0.9;
      if (visible) {
        num3 = 1;
      }
      const rect = { position: "absolute", bottom: 0, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "flex-end", transform: items, opacity: withSpringResult2 };
      let withSpringResult = num2;
      if (!stateFromStores) {
        const obj2 = spring;
        withSpringResult = obj2.withSpring(num2, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items = [{ translateY: withSpringResult }, ];
      let withSpringResult1 = num3;
      if (!stateFromStores) {
        const obj3 = spring;
        withSpringResult1 = obj3.withSpring(num3, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      items[1] = { scale: withSpringResult1 };
      withSpringResult2 = num;
      if (!stateFromStores) {
        const obj4 = spring;
        withSpringResult2 = obj4.withSpring(num, MEDIA_PICKER_SEND_BUTTON_SPRING);
      }
      return rect;
    }
  }
  let obj4 = { visible, tokens: onPress(stateFromStores[7]), reducedMotion: stateFromStores, withSpring: visible(stateFromStores[8]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING };
  P.__closure = obj4;
  P.__workletHash = 17409059357308;
  P.__initData = __initData2;
  const items1 = [onPress];
  const animatedStyle = obj3.useAnimatedStyle(P);
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onPress();
  }, items1);
  const View = onPress(stateFromStores[6]).View;
  let renderButtonResult;
  const View2 = onPress(stateFromStores[6]).View;
  if (renderButton != null) {
    const obj7 = { text, disabled, onPress: callback };
    renderButtonResult = renderButton(obj7);
  }
  if (renderButtonResult == null) {
    const obj8 = { variant: "primary", size: "lg", disabled, onPress: callback, text, loading };
    renderButtonResult = tmp7(tmp(tmp2[10]).Button, obj8);
  }
  return <View style={animatedStyle}>{null}</View>;
};

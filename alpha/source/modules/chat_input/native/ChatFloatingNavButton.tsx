// Module ID: 11965
// Function ID: 11966
// Name: ChatFloatingNavButton
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 4850, 4818, 5378, 5382, 6156, 2]

// Module 11965 (ChatFloatingNavButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import spring from "spring" /* 5378 */;
import springPresets from "springPresets" /* 5382 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pill: size, icon: size1 };
size = { height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
let closure_6 = createStyles(obj);
const __initData = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function ChatFloatingNavButtonTsx2(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let sharedValue;
  let tmp10;
  let tmp11;
  let token;
  let token1;
  const tmp = token1;
  let obj = sharedValue(token1[6]);
  const cResult = obj.c(24);
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp3 = closure_6();
  let obj2 = sharedValue(token1[7]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(token1[8]);
  token = obj3.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj4 = sharedValue(token1[8]);
  token1 = obj4.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  const obj5 = sharedValue(token1[8]);
  const token2 = obj5.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const fn = function _() {
    let interpolateColorResult;
    let withSpring;
    const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [token, token1];
    const obj2 = ReanimatedRexport;
    interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  const obj6 = sharedValue(token1[7]);
  fn.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING };
  fn.__workletHash = 6110457262684;
  fn.__initData = __initData;
  ({ withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING });
  const animatedStyle = obj6.useAnimatedStyle(fn);
  if (cResult[0] !== sharedValue) {
    const fn2 = function c() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== sharedValue) {
    const fn3 = function h() {
      const result = sharedValue.set(0);
    };
    cResult[2] = sharedValue;
    cResult[3] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === animatedStyle) {
    let tmp12;
    let tmp13;
    if (cResult[5] === tmp3.pill) {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== token2) {
      const obj8 = { tintColor: token2 };
      cResult[7] = token2;
      cResult[8] = obj8;
      tmp13 = obj8;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp3.icon) {
      let tmp14;
      if (cResult[10] === tmp13) {
        tmp14 = cResult[11];
      }
      if (cResult[12] === icon) {
        let tmp15;
        if (cResult[13] === tmp14) {
          tmp15 = cResult[14];
        }
        if (cResult[15] === tmp12) {
          let tmp18;
          if (cResult[16] === tmp15) {
            tmp18 = cResult[17];
          }
          if (cResult[18] === accessibilityLabel) {
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp11) {
                if (cResult[21] === onPress) {
                  let tmp21;
                  if (cResult[22] === tmp18) {
                    tmp21 = cResult[23];
                  }
                  return tmp21;
                }
              }
            }
          }
          const tmp24 = <Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={tmp10} onPressOut={tmp11}>{tmp18}</Pressable>;
          cResult[18] = accessibilityLabel;
          cResult[19] = tmp10;
          cResult[20] = tmp11;
          cResult[21] = onPress;
          cResult[22] = tmp18;
          cResult[23] = tmp24;
          tmp21 = tmp24;
        }
        const tmp20 = jsx(token(tmp[7]).View, { style: tmp12, children: tmp15 });
        cResult[15] = tmp12;
        cResult[16] = tmp15;
        cResult[17] = tmp20;
        tmp18 = tmp20;
      }
      const tmp17 = jsx(token(tmp[11]), { source: icon, style: tmp14 });
      cResult[12] = icon;
      cResult[13] = tmp14;
      cResult[14] = tmp17;
      tmp15 = tmp17;
    }
    let items = [tmp3.icon, tmp13];
    cResult[9] = tmp3.icon;
    cResult[10] = tmp13;
    cResult[11] = items;
    tmp14 = items;
  }
  const items1 = [tmp3.pill, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp3.pill;
  cResult[6] = items1;
  tmp12 = items1;
}) : (function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_6();
  let obj = sharedValue(token1[7]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(token1[8]);
  token = obj2.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj3 = sharedValue(token1[8]);
  token1 = obj3.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = sharedValue(token1[8]);
  const token2 = obj4.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const fn = function u() {
    let interpolateColorResult;
    let withSpring;
    const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
    withSpring = spring.withSpring;
    spring;
    const items = [token, token1];
    const obj2 = ReanimatedRexport;
    interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  const obj5 = sharedValue(token1[7]);
  fn.__closure = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING };
  fn.__workletHash = 11350052873759;
  fn.__initData = __initData2;
  let items = [sharedValue];
  ({ withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[7]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[10]).ON_PRESS_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items2 = [tmp.pill, animatedStyle];
  const View = token(token1[7]).View;
  const items3 = [tmp.icon, { tintColor: token2 }];
  return <Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</Pressable>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default tmp3;

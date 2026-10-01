// Module ID: 11750
// Function ID: 11751
// Name: ChatFloatingNavButton
// Dependencies: [19, 17, 21, 4836, 576, 4566, 4531, 5280, 5284, 2]
// Exports: default

// Module 11750 (ChatFloatingNavButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
let size1;
({ Image: closure_4, Pressable: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { pill: size, icon: size1 };
size = { height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
size1 = { width: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: nativeDefault.modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
let closure_7 = createStyles(obj);
const __initData = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let sharedValue;
  let token;
  let token1;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(token1[5]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(token1[6]);
  token = obj2.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj3 = sharedValue(token1[6]);
  token1 = obj3.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = sharedValue(token1[6]);
  const token2 = obj4.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj5 = sharedValue(token1[5]);
  class C {
    constructor() {
      let interpolateColorResult;
      let withSpring;
      const obj = { backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      const items = [token, token1];
      const obj2 = ReanimatedRexport;
      interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
      return obj;
    }
  }
  C.__closure = { withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING };
  C.__workletHash = 9363515218556;
  C.__initData = __initData;
  let items = [sharedValue];
  ({ withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(C);
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items2 = [tmp.pill, animatedStyle];
  const items3 = [tmp.icon, { tintColor: token2 }];
  const View = token(token1[5]).View;
  return <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</closure_5>;
};

// Module ID: 13810
// Function ID: 13811
// Name: ChatFloatingNavButton
// Dependencies: [19, 17, 21, 5014, 575, 5095, 5596, 5637, 5638, 5717, 2]
// Exports: default

// Module 13810 (ChatFloatingNavButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  const tmp = closure_6();
  let obj = sharedValue(token1[5]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(token1[6]);
  token = obj2.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj3 = sharedValue(token1[6]);
  token1 = obj3.useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  const obj4 = sharedValue(token1[6]);
  const token2 = obj4.useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const fn = function c() {
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
  const obj5 = sharedValue(token1[5]);
  fn.__closure = { withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING };
  fn.__workletHash = 9363515218556;
  fn.__initData = __initData;
  let items = [sharedValue];
  ({ withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items2 = [tmp.pill, animatedStyle];
  const View = token(token1[5]).View;
  const items3 = [tmp.icon, { tintColor: token2 }];
  return <Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)}>{null}</Pressable>;
};

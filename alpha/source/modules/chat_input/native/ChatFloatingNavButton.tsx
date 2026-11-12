// Module ID: 14561
// Function ID: 14562
// Name: ChatFloatingNavButton
// Dependencies: [19, 17, 21, 5243, 575, 1652, 5839, 5876, 5877, 5957, 2]
// Exports: default

// Module 14561 (ChatFloatingNavButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5839 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
let closure_7 = { code: "(function ChatFloatingNavButtonTsx1(){let[withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp9;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = closure_6();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const obj4 = useToken;
  const token2 = obj4.useToken(nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  let items = [closure_7, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = _mod1652.interpolateColor;
  items[3] = sharedValue;
  items[4] = token;
  items[5] = token1;
  items[6] = springPresets.ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class ChatFloatingNavButtonTsx1 {
    constructor() {
      let items;
      const obj = { backgroundColor: _undefined(_undefined2(_undefined3.get(), [0, 1], items), c5, "animate-always") };
      items = [c3, c4];
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  ChatFloatingNavButtonTsx1.__closure = items1;
  ChatFloatingNavButtonTsx1.__workletHash = 13689460805797;
  ChatFloatingNavButtonTsx1.__initData = tmp9;
  const items2 = [sharedValue];
  const animatedStyle = useAnimatedStyle(ChatFloatingNavButtonTsx1);
  const items3 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const items4 = [tmp.pill, animatedStyle];
  const View = tmp4(1652).View;
  const items5 = [tmp.icon, { tintColor: token2 }];
  return <Pressable accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3)}>{null}</Pressable>;
};

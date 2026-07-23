// Module ID: 11375
// Function ID: 88432
// Name: ChatFloatingNavButton
// Dependencies: [31, 27, 33, 4130, 689, 3991, 3834, 4542, 4546, 2]
// Exports: default

// Module 11375 (ChatFloatingNavButton)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, Pressable: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.pill = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { width: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
let obj1 = { width: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = sharedValue(token1[5]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = sharedValue(token1[6]);
  token = obj1.useToken(token(token1[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  token1 = sharedValue(token1[6]).useToken(token(token1[4]).colors.BACKGROUND_BASE_LOWEST);
  let obj3 = sharedValue(token1[6]);
  const token2 = sharedValue(token1[6]).useToken(token(token1[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = sharedValue(token1[6]);
  class C {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[7]);
      obj3 = outer1_0(outer1_2[5]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      interpolateColorResult = obj3.interpolateColor(closure_0.get(), [0, 1], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, outer1_0(outer1_2[8]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[7]).withSpring, interpolateColor: sharedValue(token1[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: sharedValue(token1[8]).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 9363515218556;
  C.__initData = closure_8;
  let items = [sharedValue];
  const animatedStyle = sharedValue(token1[5]).useAnimatedStyle(C);
  const items1 = [sharedValue];
  const callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    onPress,
    onPressIn: callback,
    onPressOut: React.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1)
  };
  obj1 = { style: items2 };
  items2 = [tmp.pill, animatedStyle];
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj1.children = <closure_4 source={icon} style={items3} />;
  obj.children = jsx(token(token1[5]).View, { style: items2 });
  return <closure_5 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={onPress} onPressIn={callback} onPressOut={React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1)} />;
};

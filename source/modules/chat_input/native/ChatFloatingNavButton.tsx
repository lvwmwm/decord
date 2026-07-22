// Module ID: 11365
// Function ID: 88382
// Name: ChatFloatingNavButton
// Dependencies: []
// Exports: default

// Module 11365 (ChatFloatingNavButton)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, Pressable: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { height: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: importDefault(dependencyMap[4]).modules.button.BORDER_RADIUS, borderWidth: importDefault(dependencyMap[4]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj.pill = obj;
const tmp2 = arg1(dependencyMap[1]);
obj.icon = { width: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function ChatFloatingNavButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
const obj1 = { width: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: importDefault(dependencyMap[4]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/chat_input/native/ChatFloatingNavButton.tsx");

export default function ChatFloatingNavButton(arg0) {
  let accessibilityLabel;
  let icon;
  let onPress;
  ({ accessibilityLabel, icon, onPress } = arg0);
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  let obj1 = arg1(dependencyMap[6]);
  const token = obj1.useToken(importDefault(dependencyMap[4]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const importDefault = token;
  const token1 = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST);
  const dependencyMap = token1;
  const obj3 = arg1(dependencyMap[6]);
  const token2 = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[4]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = arg1(dependencyMap[6]);
  class C {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[7]);
      obj3 = closure_0(closure_2[5]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      interpolateColorResult = obj3.interpolateColor(closure_0.get(), [77601039, 1612144654], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, closure_0(closure_2[8]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, interpolateColor: arg1(dependencyMap[5]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: arg1(dependencyMap[8]).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 9363515218556;
  C.__initData = closure_8;
  const items = [sharedValue];
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(C);
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
  const items2 = [tmp.pill, animatedStyle];
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj1.children = <closure_4 source={icon} style={items3} />;
  obj.children = jsx(importDefault(dependencyMap[5]).View, obj1);
  return <closure_5 {...obj} />;
};

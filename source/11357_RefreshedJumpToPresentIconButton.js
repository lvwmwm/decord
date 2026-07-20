// Module ID: 11357
// Function ID: 88327
// Name: RefreshedJumpToPresentIconButton
// Dependencies: []
// Exports: default

// Module 11357 (RefreshedJumpToPresentIconButton)
function RefreshedJumpToPresentIconButton(arg0) {
  let accessibilityLabel;
  let onPress;
  ({ accessibilityLabel, onPress } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  let obj1 = arg1(dependencyMap[9]);
  const token = obj1.useToken(importDefault(dependencyMap[7]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const importDefault = token;
  let obj2 = arg1(dependencyMap[9]);
  const token1 = obj2.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST);
  const dependencyMap = token1;
  const token2 = arg1(dependencyMap[9]).useToken(importDefault(dependencyMap[7]).colors.CHAT_INPUT_ICON_DEFAULT_TINT);
  const obj4 = arg1(dependencyMap[9]);
  const fn = function u() {
    const obj = {};
    const obj2 = sharedValue(token1[10]);
    const items = [token, token1];
    const obj3 = sharedValue(token1[8]);
    obj.backgroundColor = obj2.withSpring(sharedValue(token1[8]).interpolateColor(sharedValue.get(), [null, null], items), sharedValue(token1[11]).ON_PRESS_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, interpolateColor: arg1(dependencyMap[8]).interpolateColor, pressed: sharedValue, bgColor: token, pressedBgColor: token1, ON_PRESS_SPRING: arg1(dependencyMap[11]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 10422296555385;
  fn.__initData = closure_14;
  const items = [sharedValue];
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn);
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
  obj2 = { source: importDefault(dependencyMap[12]) };
  const items3 = [tmp.icon, { tintColor: token2 }];
  obj2.style = items3;
  obj1.children = <closure_4 {...obj2} />;
  obj.children = jsx(importDefault(dependencyMap[8]).View, obj1);
  return <closure_5 {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[2]).useChatInputContainerHeight;
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[7]).radii.round, position: "absolute", right: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
obj.container = obj;
const obj1 = { "Bool(true)": "", "Bool(true)": "", "Bool(true)": "Array", marginBottom: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING };
obj.containerIOS = obj1;
let closure_12 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[6]);
const obj2 = {};
const tmp2 = arg1(dependencyMap[1]);
obj2.pill = { height: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: importDefault(dependencyMap[7]).modules.button.BORDER_RADIUS, borderWidth: importDefault(dependencyMap[7]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj4 = { width: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE, height: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_ICON_SIZE };
obj2.icon = obj4;
let closure_13 = obj4.createStyles(obj2);
let closure_14 = { code: "function JumpToPresentButtonTsx1(){const{withSpring,interpolateColor,pressed,bgColor,pressedBgColor,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[bgColor,pressedBgColor]),ON_PRESS_SPRING,'animate-always')};}" };
const obj3 = { height: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, width: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BUTTON_SIZE, borderRadius: importDefault(dependencyMap[7]).modules.button.BORDER_RADIUS, borderWidth: importDefault(dependencyMap[7]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, alignItems: "center", justifyContent: "center", overflow: "hidden" };
let closure_15 = arg1(dependencyMap[13]).isIOS() ? () => null : (arg0) => {
  let obj = arg1(dependencyMap[9]);
  obj = {};
  const token = obj.useToken(importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj.bottom = callback2(arg0) + token;
  return obj;
};
const obj9 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  const tmp = callback3();
  const tmp2 = callback5(screenIndex);
  let obj = arg1(closure_2[15]);
  const items = [closure_9];
  closure_2 = obj.useStateFromStores(items, () => connected.isConnected(), []);
  const tmp4 = callback((showingAutoComplete) => {
    let tmp2 = !tmp;
    if (!!closure_2) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      let tmp4 = !showingAutoComplete.get(screenIndex);
      if (tmp4) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp4 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
  let obj1 = arg1(closure_2[16]);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  const tmp3 = importDefault(closure_2[14])("JumpToPresentButton");
  const isVoicePanelOpen = arg1(closure_2[16]).useIsVoicePanelOpen(channelId);
  const obj3 = arg1(closure_2[16]);
  const items1 = [closure_10];
  const stateFromStores = arg1(closure_2[15]).useStateFromStores(items1, () => null != messages.getMessages(channelId).jumpReturnTargetId);
  if (!tmp4) {
    return null;
  }
  let containerIOS = tmp2;
  if (null == tmp2) {
    containerIOS = tmp.containerIOS;
  }
  const intl = arg1(closure_2[17]).intl;
  const string = intl.string;
  const t = arg1(closure_2[17]).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: items2 };
  const items2 = [tmp.container, containerIOS];
  if (tmp4) {
    if (tmp3) {
      obj = { accessibilityLabel: stringResult, onPress: onJumpToPresent };
      let tmp12Result = tmp12(RefreshedJumpToPresentIconButton, obj);
    } else {
      obj1 = { accessibilityLabel: stringResult, onPress: onJumpToPresent, icon: importDefault(closure_2[12]), variant: "primary-overlay" };
      tmp12Result = tmp12(arg1(closure_2[18]).IconButton, obj1);
    }
  } else {
    obj.children = tmp12(arg1(closure_2[19]).MemoedVoicePanelDismissChatButton, {});
    return tmp10(tmp11, obj);
  }
};

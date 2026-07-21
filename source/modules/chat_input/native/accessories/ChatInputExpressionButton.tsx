// Module ID: 11286
// Function ID: 87836
// Dependencies: []

// Module 11286
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles((arg0, arg1, height) => {
  let obj = {};
  obj = {};
  const radii = importDefault(dependencyMap[3]).radii;
  obj.borderRadius = arg0 ? radii.sm : radii.round;
  obj.height = height;
  obj.width = height;
  if (arg0) {
    obj = { "Null": null, "Null": null };
  } else {
    obj = { paddingHorizontal: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_PILL_PADDING, paddingVertical: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_PILL_PADDING };
  }
  const merged = Object.assign(obj);
  obj.expressionButton = obj;
  obj.expressionButtonIconPosition = { position: "absolute", left: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  const obj1 = { position: "absolute", left: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  obj.expressionButtonIconTint = { tintColor: importDefault(dependencyMap[3]).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  return obj;
});
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo((active) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  const arg1 = onPress;
  let obj = arg1(dependencyMap[4]);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputExpressionButton" });
  const enabled = mobileVisualRefreshConfig.enabled;
  let obj1 = arg1(dependencyMap[5]);
  const token = obj1.useToken(importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = arg1(dependencyMap[5]).useToken(importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_PILL_PADDING);
  const obj3 = arg1(dependencyMap[5]);
  const token2 = arg1(dependencyMap[5]).useToken(importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  const obj4 = arg1(dependencyMap[5]);
  const token3 = arg1(dependencyMap[5]).useToken(importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_ICON_SIZE);
  const obj5 = arg1(dependencyMap[5]);
  let diff = token;
  const token4 = arg1(dependencyMap[5]).useToken(importDefault(dependencyMap[3]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  if (!enabled) {
    diff = token - 2 * (token1 + token2);
  }
  const tmp8 = callback(enabled, mobileVisualRefreshConfig.chatInputFloating, diff);
  const bound = Math.max(0, (token4 - diff) / 2);
  const items = [onPress];
  const callback = importAllResult.useCallback(() => {
    onPress(undefined);
  }, items);
  const obj6 = arg1(dependencyMap[5]);
  obj = { ref: importAllResult.useRef(null), style: items1 };
  const items1 = [tmp8.expressionButton, active.style];
  let tmp13;
  if (bound > 0) {
    tmp13 = bound;
  }
  obj.hitSlop = tmp13;
  obj.accessibilityRole = "button";
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.iZ7Mz9);
  obj = { expanded: flag };
  obj.accessibilityState = obj;
  obj.onPress = callback;
  obj1 = { size: token3 };
  let expressionButtonIconPosition = !enabled;
  if (expressionButtonIconPosition) {
    expressionButtonIconPosition = tmp8.expressionButtonIconPosition;
  }
  const items2 = [expressionButtonIconPosition, tmp8.expressionButtonIconTint];
  obj1.style = items2;
  if (showKeyboardIcon) {
    let tmp17 = tmp16[9];
  } else {
    tmp17 = tmp16[10];
  }
  obj1.source = importDefault(tmp17);
  obj.children = jsx(arg1(dependencyMap[8]).Icon, obj1);
  return jsx(arg1(dependencyMap[6]).PressableOpacity, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;

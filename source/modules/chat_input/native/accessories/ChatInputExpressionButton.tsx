// Module ID: 11297
// Function ID: 87899
// Dependencies: [31, 33, 4130, 689, 1324, 3834, 4660, 1212, 1273, 9856, 8008, 2]

// Module 11297
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, height) => {
  let obj = {};
  obj = {};
  const radii = importDefault(689).radii;
  obj.borderRadius = arg0 ? radii.sm : radii.round;
  obj.height = height;
  obj.width = height;
  if (arg0) {
    obj = { alignItems: "center", justifyContent: "center" };
  } else {
    obj = { paddingHorizontal: importDefault(689).modules.mobile.CHAT_INPUT_PILL_PADDING, paddingVertical: importDefault(689).modules.mobile.CHAT_INPUT_PILL_PADDING };
  }
  const merged = Object.assign(obj);
  obj.expressionButton = obj;
  obj.expressionButtonIconPosition = { position: "absolute", left: importDefault(689).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: importDefault(689).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  const obj1 = { position: "absolute", left: importDefault(689).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: importDefault(689).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  obj.expressionButtonIconTint = { tintColor: importDefault(689).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  return obj;
});
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
  let obj = onPress(1324);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputExpressionButton" });
  const enabled = mobileVisualRefreshConfig.enabled;
  let obj1 = onPress(3834);
  const token = obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = onPress(3834).useToken(importDefault(689).modules.mobile.CHAT_INPUT_PILL_PADDING);
  const obj3 = onPress(3834);
  const token2 = onPress(3834).useToken(importDefault(689).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  const obj4 = onPress(3834);
  const token3 = onPress(3834).useToken(importDefault(689).modules.mobile.CHAT_INPUT_ICON_SIZE);
  const obj5 = onPress(3834);
  let diff = token;
  const token4 = onPress(3834).useToken(importDefault(689).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  if (!enabled) {
    diff = token - 2 * (token1 + token2);
  }
  const tmp8 = callback(enabled, mobileVisualRefreshConfig.chatInputFloating, diff);
  const bound = Math.max(0, (token4 - diff) / 2);
  const items = [onPress];
  callback = importAllResult.useCallback(() => {
    onPress(undefined);
  }, items);
  const obj6 = onPress(3834);
  obj = { ref: importAllResult.useRef(null), style: items1 };
  items1 = [tmp8.expressionButton, active.style];
  let tmp13;
  if (bound > 0) {
    tmp13 = bound;
  }
  obj.hitSlop = tmp13;
  obj.accessibilityRole = "button";
  const intl = onPress(1212).intl;
  obj.accessibilityLabel = intl.string(onPress(1212).t.iZ7Mz9);
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
    let tmp17 = 9856;
  } else {
    tmp17 = 8008;
  }
  obj1.source = importDefault(tmp17);
  obj.children = jsx(onPress(1273).Icon, { size: token3 });
  return jsx(onPress(4660).PressableOpacity, { expanded: flag });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;

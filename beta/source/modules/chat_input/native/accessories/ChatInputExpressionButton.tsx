// Module ID: 11656
// Function ID: 11657
// Name: ChatInputExpressionButton
// Dependencies: [19, 21, 4836, 576, 4531, 5435, 1115, 1177, 10817, 8220, 2]

// Module 11656 (ChatInputExpressionButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((height) => {
  const obj = { expressionButton: size, expressionButtonIconTint: { tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT } };
  size = { borderRadius: nativeDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT });
  return obj;
});
const memoResult = react.memo((active) => {
  let flag = active.active;
  const style = active.style;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
  const obj3 = useToken;
  const token2 = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_5(token);
  const bound = Math.max(0, (token2 - token) / 2);
  const items = [onPress];
  const callback = react.useCallback(() => {
    onPress(undefined);
  }, items);
  const items1 = [tmp7.expressionButton, style];
  let tmp12;
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp3 = importDefault;
  if (bound > 0) {
    tmp12 = bound;
  }
  const intl = tmp(1115).intl;
  ({ size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 10817 : 8220) });
  const Icon = tmp(1177).Icon;
  return <PressableOpacity ref={react.useRef(null)} style={items1} hitSlop={tmp12} accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.iZ7Mz9)} accessibilityState={{ expanded: flag }} onPress={callback}>{null}</PressableOpacity>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;

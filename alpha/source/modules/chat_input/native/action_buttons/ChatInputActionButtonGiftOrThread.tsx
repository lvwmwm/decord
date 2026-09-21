// Module ID: 12498
// Function ID: 12499
// Name: ChatInputActionButtonGiftOrThread
// Dependencies: [19, 17, 12215, 21, 4756, 12499, 12492, 1115, 12490, 12501, 4457, 576, 4466, 2]

// Module 12498 (ChatInputActionButtonGiftOrThread)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import native from "native" /* 4466 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12499 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  const obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    const obj2 = { accessible, accessibilityLabel: null, disabled: null, IconComponent: null, onPress: null, style: null };
    const intl = onPress(1115).intl;
    obj2.accessibilityLabel = intl.string(onPress(1115).t["4WNcpu"]);
    obj2.disabled = !canStartThreads;
    obj2.IconComponent = onPress(12490).ThreadPlusIcon;
    obj2.onPress = function onPress(arg0) {
      return onPress(arg0, ChatInputActionType.THREAD);
    };
    obj2.style = styleButton;
    let tmpResult = tmp(tmp2(12492), obj2);
    const tmp2Result = tmp2(12492);
  } else {
    const obj3 = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmpResult = tmp(tmp2(12501), obj3);
  }
  obj.children = tmpResult;
  return jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, children: null }, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const View = fn(17).View;
const ChatInputActionType = fn(12215).ChatInputActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles((height, arg1) => {
  const obj = { container: null };
  const size = { width: height + 2 * arg1, height };
  obj.container = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default noop.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  closure_0 = arg0;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj3 = { style: closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container, children: null };
  const memo = noop.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj3.children = jsx(native.TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View style={closure_7(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container}>{null}</View>;
});

// Module ID: 13146
// Function ID: 13147
// Name: ChatInputActionButtonGiftOrThread
// Dependencies: [19, 17, 12908, 21, 5012, 13147, 13140, 1112, 13138, 13149, 5576, 575, 5073, 2]

// Module 13146 (ChatInputActionButtonGiftOrThread)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5576 */;
import ChatInputConstants from "ChatInputConstants" /* 12908 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 13140 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 13147 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  let accessible;
  let canStartThreads;
  let channel;
  let intl;
  let onPress;
  let shouldShowThread;
  let styleButtonWrapper;
  let tmpResult;
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  ChatInputActionButtonTransitionItemDefault;
  if (shouldShowThread) {
    const obj2 = {
      accessible,
      accessibilityLabel: intl.string(onPress(1112).t["4WNcpu"]),
      disabled: !canStartThreads,
      IconComponent: onPress(13138).ThreadPlusIcon,
      onPress(arg0) {
          return onPress(arg0, ChatInputActionType.THREAD);
        },
      style: styleButton
    };
    const tmp2Result = ChatInputActionButtonDefault;
    intl = onPress(1112).intl;
    tmpResult = tmp(tmp2Result, obj2);
  } else {
    const obj3 = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmpResult = tmp(tmp2(13149), obj3);
  }
  return <tmp4 key={arg0} cleanup={arg3} state={arg2}>{tmpResult}</tmp4>;
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const View = react_native.View;
const ChatInputActionType = ChatInputConstants.ChatInputActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((height, arg1) => {
  const obj = { container: size };
  size = { width: height + 2 * arg1, height };
  return obj;
});
const memoResult = react.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  let closure_0 = arg0;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = useToken;
  const memo = react.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  return <View style={closure_7(token, obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container}>{null}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

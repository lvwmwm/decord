// Module ID: 11620
// Function ID: 11621
// Name: ChatInputActionButtonGiftOrThread
// Dependencies: [19, 17, 11320, 21, 4837, 11621, 11613, 1127, 11611, 11623, 558, 576, 4535, 588, 4544, 2]

// Module 11620 (ChatInputActionButtonGiftOrThread)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import useToken from "useToken" /* 4535 */;
import ChatInputConstants from "ChatInputConstants" /* 11320 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11613 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11621 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const native = tmp(4544);
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
      accessibilityLabel: intl.string(onPress(1127).t["4WNcpu"]),
      disabled: !canStartThreads,
      IconComponent: onPress(11611).ThreadPlusIcon,
      onPress(arg0) {
          return onPress(arg0, ChatInputActionType.THREAD);
        },
      style: styleButton
    };
    const tmp2Result = ChatInputActionButtonDefault;
    intl = onPress(1127).intl;
    tmpResult = tmp(tmp2Result, obj2);
  } else {
    const obj3 = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmpResult = tmp(tmp2(11623), obj3);
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj3 = useToken;
  const tmp5 = closure_7(token, obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN));
  if (cResult[0] !== arg0) {
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const tmp11 = jsx(native.TransitionGroup, { items: tmp6, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
    cResult[2] = tmp6;
    cResult[3] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5.container) {
    let tmp12;
    if (cResult[5] === tmp7) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const tmp13 = <View style={tmp5.container}>{tmp7}</View>;
  cResult[4] = tmp5.container;
  cResult[5] = tmp7;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
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
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

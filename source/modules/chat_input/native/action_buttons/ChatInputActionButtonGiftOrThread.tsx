// Module ID: 11340
// Function ID: 88161
// Name: renderChatInputActionButtonGiftAndThread
// Dependencies: []

// Module 11340 (renderChatInputActionButtonGiftAndThread)
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  let accessible;
  let canStartThreads;
  let channel;
  let onPress;
  let shouldShowThread;
  let styleButtonWrapper;
  ({ accessible, onPress } = styleButton);
  styleButton = onPress;
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  let obj = { cleanup, state };
  if (shouldShowThread) {
    obj = { accessible };
    const intl = styleButton(tmp5[7]).intl;
    obj.accessibilityLabel = intl.string(styleButton(tmp5[7]).t.4WNcpu);
    obj.disabled = !canStartThreads;
    obj.IconComponent = styleButton(tmp5[8]).ThreadPlusIcon;
    obj.onPress = function onPress(arg0) {
      return onPress(arg0, constants.THREAD);
    };
    obj.style = styleButton;
    let tmp3Result = tmp3(tmp4(tmp5[6]), obj);
    const tmp4Result = tmp4(tmp5[6]);
  } else {
    obj = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmp3Result = tmp3(tmp4(tmp5[9]), obj);
  }
  obj.children = tmp3Result;
  return jsx(importDefault(dependencyMap[5]), obj, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ChatInputActionType = arg1(dependencyMap[2]).ChatInputActionType;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles((height) => {
  const container = { width: height + 2 * arg1, height };
  return { container };
});
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[10]);
  const token = obj.useToken(importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const items = [arg0];
  const obj2 = arg1(dependencyMap[10]);
  obj = { style: callback(token, arg1(dependencyMap[10]).useToken(importDefault(dependencyMap[11]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container };
  const memo = importAllResult.useMemo(() => {
    const items = [arg0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj.children = jsx(arg1(dependencyMap[12]).TransitionGroup, obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

// Module ID: 11351
// Function ID: 88236
// Name: renderChatInputActionButtonGiftAndThread
// Dependencies: [31, 27, 11105, 33, 4130, 11352, 11345, 1212, 11343, 11354, 3834, 689, 4476, 2]

// Module 11351 (renderChatInputActionButtonGiftAndThread)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { ChatInputActionType } from "TextAreaCta";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  let accessible;
  let canStartThreads;
  let channel;
  let onPress;
  let shouldShowThread;
  let styleButtonWrapper;
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  let obj = { cleanup, state };
  if (shouldShowThread) {
    obj = { accessible };
    const intl = onPress(1212).intl;
    obj.accessibilityLabel = intl.string(onPress(1212).t["4WNcpu"]);
    obj.disabled = !canStartThreads;
    obj.IconComponent = onPress(11343).ThreadPlusIcon;
    obj.onPress = function onPress(arg0) {
      return onPress(arg0, outer1_5.THREAD);
    };
    obj.style = styleButton;
    let tmp3Result = tmp3(tmp4(11345), obj);
    const tmp4Result = tmp4(11345);
  } else {
    obj = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmp3Result = tmp3(tmp4(11354), obj);
  }
  obj.children = tmp3Result;
  return jsx(importDefault(11352), { cleanup, state }, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
let closure_7 = _createForOfIteratorHelperLoose.createStyles((height) => {
  const container = { width: height + 2 * arg1, height };
  return { container };
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  const _require = arg0;
  let obj = _require(3834);
  const token = obj.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = _require(3834);
  obj = { style: callback(token, _require(3834).useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj.children = jsx(_require(4476).TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

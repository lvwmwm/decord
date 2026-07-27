// Module ID: 11343
// Function ID: 88137
// Name: renderChatInputActionButtonGiftAndThread
// Dependencies: [31, 27, 11093, 33, 4131, 11344, 11337, 1212, 11335, 11346, 3835, 689, 4477, 2]

// Module 11343 (renderChatInputActionButtonGiftAndThread)
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
    obj.IconComponent = onPress(11335).ThreadPlusIcon;
    obj.onPress = function onPress(arg0) {
      return onPress(arg0, outer1_5.THREAD);
    };
    obj.style = styleButton;
    let tmp3Result = tmp3(tmp4(11337), obj);
    const tmp4Result = tmp4(11337);
  } else {
    obj = { accessible, channel, onPress, style: styleButtonWrapper, styleButton };
    tmp3Result = tmp3(tmp4(11346), obj);
  }
  obj.children = tmp3Result;
  return jsx(importDefault(11344), { cleanup, state }, arg0);
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
  let obj = _require(3835);
  const token = obj.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = _require(3835);
  obj = { style: callback(token, _require(3835).useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj.children = jsx(_require(4477).TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

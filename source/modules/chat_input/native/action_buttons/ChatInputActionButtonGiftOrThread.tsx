// Module ID: 11676
// Function ID: 11677
// Name: renderChatInputActionButtonGiftAndThread
// Dependencies: [19, 17, 11428, 21, 4344, 11677, 11670, 1236, 11668, 11679, 4065, 712, 4688, 2]

// Module 11676 (renderChatInputActionButtonGiftAndThread)
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { ChatInputActionType } from "TextAreaCta";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

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
  let obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    obj = { accessible: null, accessibilityLabel: null, disabled: null, IconComponent: null, onPress: null, style: null };
    obj[0] = accessible;
    const intl = onPress(1236).intl;
    obj[1] = intl.string(onPress(1236).t["4WNcpu"]);
    obj[2] = !canStartThreads;
    obj[3] = onPress(11668).ThreadPlusIcon;
    obj[4] = function onPress(arg0) {
      return onPress(arg0, outer1_5.THREAD);
    };
    obj[5] = styleButton;
    let tmpResult = tmp(tmp2(11670), obj);
    const tmp2Result = tmp2(11670);
  } else {
    obj = { accessible: null, channel: null, onPress: null, style: null, styleButton: null };
    obj[0] = accessible;
    obj[1] = channel;
    obj[2] = onPress;
    obj[3] = styleButtonWrapper;
    obj[4] = styleButton;
    tmpResult = tmp(tmp2(11679), obj);
  }
  obj[2] = tmpResult;
  return jsx(importDefault(11677), { cleanup, state, children: null }, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles((height) => {
  const container = { width: height + 2 * arg1, height };
  return { container };
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  const _require = arg0;
  let obj = _require(4065);
  const token = obj.useToken(importDefault(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = _require(4065);
  obj = { style: callback(token, _require(4065).useToken(importDefault(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container, children: null };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj[1] = jsx(_require(4688).TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("TextAreaCta").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;

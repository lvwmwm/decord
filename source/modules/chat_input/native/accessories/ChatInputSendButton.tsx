// Module ID: 11389
// Function ID: 88532
// Name: renderChatInputSendButton
// Dependencies: [57, 31, 27, 4122, 6927, 11132, 33, 4130, 689, 3834, 11381, 11390, 11374, 4076, 1212, 1324, 566, 4476, 11394, 3991, 2]

// Module 11389 (renderChatInputSendButton)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_8 } from "TextAreaCta";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={arg0} type={arg0} state={arg2} cleanup={arg3} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  if (!sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    return tmp ? tmp2.BUTTON_SEND : tmp2.BUTTON_SEND_DISABLED;
  }
}
function FloatingSlot(arg0) {
  let buttonHeight;
  let buttonMargin;
  let buttonWidth;
  let children;
  let sendVoiceMessageEnabled;
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const style = [{ height: buttonHeight }, importDefault(11394)({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  return jsx(importDefault(3991).View, { style, children });
}
let closure_10 = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles((width, height) => {
  obj = { button: obj };
  obj = { width, height };
  obj = { backgroundColor: importDefault(689).colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.buttonActive = obj;
  obj.iconActive = { tintColor: importDefault(689).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  return obj;
});
let closure_12 = importAllResult.memo((type) => {
  let channelId;
  let cleanup;
  let isOnCooldown;
  let onSendMessage;
  let sendEnabled;
  let state;
  let withBounce;
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = require(3834) /* map */;
  let tmp3 = type === constants.BUTTON_SEND_VOICE_MESSAGE;
  if (!tmp3) {
    tmp3 = type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
  }
  let num = 0;
  if (tmp3) {
    num = closure_8;
  }
  obj = { cleanup, state, withBounce, bounceEnterDelayMs: num };
  const tmp2 = callback2(token, obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  const tmp5 = jsx;
  if (tmp3) {
    obj = { disabled: isOnCooldown, channelId };
    let tmp7Result = tmp7(tmp8(11390), obj);
  } else {
    obj1 = { active: true };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp2);
    obj1.IconComponent = require(4076) /* SendMessageIcon */.SendMessageIcon;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.TXNS7S);
    obj1.onPress = onSendMessage;
    obj1.disabled = !sendEnabled;
    tmp7Result = tmp7(tmp8(11374), obj1);
    const tmp8Result = tmp8(11374);
  }
  obj.children = tmp7Result;
  return tmp5(importDefault(11381), obj);
});
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let onSendMessage;
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  let chatInputFloating;
  let callback;
  let stateFromStores1;
  let c5;
  canSendVoiceMessage = undefined;
  let obj = channel(chatInputFloating[9]);
  const token = obj.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = channel(chatInputFloating[9]);
  const token1 = obj1.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj2 = channel(chatInputFloating[9]);
  const token2 = obj2.useToken(onSendMessage(chatInputFloating[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj3 = channel(chatInputFloating[15]);
  chatInputFloating = obj3.useMobileVisualRefreshConfig({ location: "ChatInputSendButton" }).chatInputFloating;
  let obj4 = channel(chatInputFloating[16]);
  let items = [canSendVoiceMessage];
  const stateFromStores = obj4.useStateFromStores(items, () => canSendVoiceMessage.useReducedMotion);
  const tmp6 = callback(stateFromStores1.useState(defaultValue.length > 0), 2);
  let first = tmp6[0];
  callback = tmp6[1];
  let obj5 = channel(chatInputFloating[16]);
  const items1 = [closure_7];
  const items2 = [channel];
  stateFromStores1 = obj5.useStateFromStores(items1, () => outer1_7.isChannelOnCooldown(channel), items2);
  let tmp9 = !stateFromStores1 || hasPendingEdit;
  if (tmp9) {
    if (!first) {
      first = hasPendingAttachments;
    }
    if (!first) {
      first = !flag;
    }
    tmp9 = first;
  }
  c5 = tmp9;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp9;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp9, canSendVoiceMessage, chatInputFloating];
  const memo = stateFromStores1.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: c5, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: chatInputFloating }];
    return items;
  }, items3);
  const imperativeHandle = stateFromStores1.useImperativeHandle(arg1, () => ({ setHasText: _slicedToArray }));
  if (stateFromStores) {
    if (chatInputFloating) {
      obj = {};
      obj = {};
      const result = 2 * token2;
      obj.width = canSendVoiceMessage ? token1 + result : token + result;
      obj.height = token1;
      obj.alignItems = "center";
      obj.justifyContent = "center";
      obj.style = obj;
      if (canSendVoiceMessage) {
        obj1 = { disabled: stateFromStores1, channelId: channel.id };
        let tmp20Result = tmp20(tmp21(tmp22[11]), obj1);
      } else {
        obj2 = { active: true };
        ({ button: obj13.style, buttonActive: obj13.activeStyle, iconActive: obj13.activeIconStyle } = tmp4);
        obj2.IconComponent = channel(tmp22[13]).SendMessageIcon;
        const intl = channel(tmp22[14]).intl;
        obj2.accessibilityLabel = intl.string(channel(tmp22[14]).t.TXNS7S);
        obj2.onPress = onSendMessage;
        obj2.disabled = !tmp9;
        tmp20Result = tmp20(tmp21(tmp22[12]), obj2);
        const tmp21Result = tmp21(tmp22[12]);
      }
      obj.children = tmp20Result;
      return <c5 />;
    }
  }
  obj3 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
  const tmp12 = jsx(channel(chatInputFloating[17]).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey });
  if (chatInputFloating) {
    obj4 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: tmp12 };
    let tmp13Result = tmp13(FloatingSlot, obj4);
  } else {
    obj5 = {};
    const obj6 = { width: token + 2 * token2, height: token1 };
    obj5.style = obj6;
    obj5.children = tmp12;
    tmp13Result = tmp13(c5, obj5);
  }
  return tmp13Result;
});
forwardRefResult.displayName = "ChatInputSendButton";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;

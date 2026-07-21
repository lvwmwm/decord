// Module ID: 11349
// Function ID: 88217
// Name: renderChatInputSendButton
// Dependencies: []

// Module 11349 (renderChatInputSendButton)
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
  const style = [{ height: buttonHeight }, importDefault(dependencyMap[18])({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  return jsx(importDefault(dependencyMap[19]).View, { style, children });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = arg1(dependencyMap[6]).jsx;
let closure_10 = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = arg1(dependencyMap[7]).createStyles((width, height) => {
  let obj = { button: obj };
  obj = { width, height };
  obj = { backgroundColor: importDefault(dependencyMap[8]).colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.buttonActive = obj;
  obj.iconActive = { tintColor: importDefault(dependencyMap[8]).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
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
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = arg1(dependencyMap[9]);
  let tmp3 = type === constants.BUTTON_SEND_VOICE_MESSAGE;
  if (!tmp3) {
    tmp3 = type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
  }
  let num = 0;
  if (tmp3) {
    num = closure_8;
  }
  obj = { cleanup, state, withBounce, bounceEnterDelayMs: num };
  const tmp2 = callback2(token, obj1.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  const tmp5 = jsx;
  if (tmp3) {
    obj = { disabled: isOnCooldown, channelId };
    let tmp7Result = tmp7(tmp8(tmp9[11]), obj);
  } else {
    obj1 = { active: true };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp2);
    obj1.IconComponent = arg1(tmp9[13]).SendMessageIcon;
    const intl = arg1(tmp9[14]).intl;
    obj1.accessibilityLabel = intl.string(arg1(tmp9[14]).t.TXNS7S);
    obj1.onPress = onSendMessage;
    obj1.disabled = !sendEnabled;
    tmp7Result = tmp7(tmp8(tmp9[12]), obj1);
    const tmp8Result = tmp8(tmp9[12]);
  }
  obj.children = tmp7Result;
  return tmp5(importDefault(dependencyMap[10]), obj);
});
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let onSendMessage;
  channel = channel.channel;
  const arg1 = channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  const importDefault = onSendMessage;
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let callback;
  let importAllResult;
  let View;
  let closure_6;
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj1 = arg1(dependencyMap[9]);
  const token1 = obj1.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj2 = arg1(dependencyMap[9]);
  const token2 = obj2.useToken(importDefault(dependencyMap[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj3 = arg1(dependencyMap[15]);
  const chatInputFloating = obj3.useMobileVisualRefreshConfig({ location: "ChatInputSendButton" }).chatInputFloating;
  dependencyMap = chatInputFloating;
  let obj4 = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj4.useStateFromStores(items, () => canSendVoiceMessage.useReducedMotion);
  const tmp6 = callback(importAllResult.useState(defaultValue.length > 0), 2);
  let first = tmp6[0];
  callback = tmp6[1];
  let obj5 = arg1(dependencyMap[16]);
  const items1 = [closure_7];
  const items2 = [channel];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => channelOnCooldown.isChannelOnCooldown(channel), items2);
  importAllResult = stateFromStores1;
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
  View = tmp9;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp9;
  }
  closure_6 = canSendVoiceMessage;
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp9, canSendVoiceMessage, chatInputFloating];
  const memo = importAllResult.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: tmp9, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: chatInputFloating }];
    return items;
  }, items3);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ setHasText: closure_3 }));
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
        obj2.IconComponent = arg1(tmp22[13]).SendMessageIcon;
        const intl = arg1(tmp22[14]).intl;
        obj2.accessibilityLabel = intl.string(arg1(tmp22[14]).t.TXNS7S);
        obj2.onPress = onSendMessage;
        obj2.disabled = !tmp9;
        tmp20Result = tmp20(tmp21(tmp22[12]), obj2);
        const tmp21Result = tmp21(tmp22[12]);
      }
      obj.children = tmp20Result;
      return <View {...obj} />;
    }
  }
  obj3 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
  const tmp12 = jsx(arg1(dependencyMap[17]).TransitionGroup, obj3);
  if (chatInputFloating) {
    obj4 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: tmp12 };
    let tmp13Result = tmp13(FloatingSlot, obj4);
  } else {
    obj5 = {};
    const obj6 = { width: token + 2 * token2, height: token1 };
    obj5.style = obj6;
    obj5.children = tmp12;
    tmp13Result = tmp13(View, obj5);
  }
  return tmp13Result;
});
forwardRefResult.displayName = "ChatInputSendButton";
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;

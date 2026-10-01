// Module ID: 11736
// Function ID: 11737
// Name: ChatInputSendButton
// Dependencies: [32, 19, 17, 4825, 7100, 11444, 21, 4836, 576, 4531, 11728, 11737, 11721, 4777, 1115, 504, 4540, 11741, 4566, 2]

// Module 11736 (ChatInputSendButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import SendMessageIcon from "SendMessageIcon" /* 4777 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11721 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11728 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 11741 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SlowmodeStore from "SlowmodeStore" /* 7100 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let channel, dependencyMap;

function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={arg0} type={arg0} state={arg2} cleanup={arg3} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  let tmp3;
  if (sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    tmp3 = sendVoiceMessageEnabled.isOnCooldown ? tmp2.BUTTON_SEND_VOICE_MESSAGE_DISABLED : tmp2.BUTTON_SEND_VOICE_MESSAGE;
  } else {
    tmp3 = tmp ? tmp2.BUTTON_SEND : tmp2.BUTTON_SEND_DISABLED;
  }
  return tmp3;
}
function FloatingSlot(arg0) {
  let buttonHeight;
  let buttonMargin;
  let buttonWidth;
  let children;
  let sendVoiceMessageEnabled;
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const items = [, ];
  const obj = { expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin };
  items[0] = { height: buttonHeight };
  items[1] = useChatInputFloatingWidthDefault(obj).animatedStyle;
  return jsx(ReanimatedRexportDefault.View, { style: items, children });
}
let react = react_mod;
const View = react_native.View;
let closure_8 = ChatInputConstants.CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = Fragment.jsx;
const constants = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
let closure_11 = createStyles.createStyles((width, height) => {
  const obj = { button: size, buttonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, iconActive: { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT } };
  size = { width, height };
  ({ backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND });
  ({ tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT });
  return obj;
});
let closure_12 = react.memo((type) => {
  let channelId;
  let cleanup;
  let intl;
  let isOnCooldown;
  let onSendMessage;
  let sendEnabled;
  let state;
  let tmp7Result;
  let withBounce;
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let num = 0;
  const obj2 = useToken;
  const tmp5 = closure_11(token, obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  ChatInputActionButtonTransitionItemDefault;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    const obj5 = { disabled: isOnCooldown, channelId };
    tmp7Result = tmp7(tmp3(11737), obj5);
  } else {
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    const obj8 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl.string(intl2.t.TXNS7S), onPress: onSendMessage, disabled: !sendEnabled };
    const tmp3Result2 = ChatInputActionButtonDefault;
    intl = tmp(1115).intl;
    tmp7Result = tmp7(tmp3Result2, obj8);
  }
  return <tmp3Result cleanup={cleanup} state={state} withBounce={withBounce} bounceEnterDelayMs={num}>{tmp7Result}</tmp3Result>;
});
const forwardRefResult = react.forwardRef((channel, ref) => {
  let c2;
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let intl;
  let onSendMessage;
  let sendEnabled;
  let setHasText;
  let tmp10;
  let useReducedMotion;
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let stateFromStores1;
  react = undefined;
  canSendVoiceMessage = undefined;
  let obj = channel(4531);
  const token = obj.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj2 = channel(4531);
  const token1 = obj2.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj3 = channel(4531);
  const token2 = obj3.useToken(onSendMessage(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let items = [AccessibilityStore];
  const tmp7 = closure_11(token, token1);
  const obj4 = channel(504);
  const stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp10, c2] = stateFromStores1(react.useState(defaultValue.length > 0), 2);
  stateFromStores1(react.useState(defaultValue.length > 0), 2);
  const items1 = [SlowmodeStore];
  const items2 = [channel];
  const obj6 = channel(504);
  stateFromStores1 = obj6.useStateFromStores(items1, () => SlowmodeStore.isChannelOnCooldown(channel), items2);
  let tmp12 = !stateFromStores1;
  if (stateFromStores1) {
    tmp12 = hasPendingEdit;
  }
  if (tmp12) {
    if (!tmp10) {
      tmp10 = hasPendingAttachments;
    }
    if (!tmp10) {
      tmp10 = !flag;
    }
    tmp12 = tmp10;
  }
  react = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage];
  const memo = obj5.useMemo(() => {
    const items = [];
    const obj = { channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true };
    items[0] = obj;
    return items;
  }, items3);
  const imperativeHandle = obj5.useImperativeHandle(ref, () => ({ setHasText }));
  if (stateFromStores) {
    let tmp15Result;
    const result = 2 * token2;
    size = { width: canSendVoiceMessage ? token1 + result : token + result, height: token1, alignItems: "center", justifyContent: "center" };
    const tmp19 = canSendVoiceMessage;
    if (tmp19) {
      const obj8 = { disabled: stateFromStores1, channelId: channel.id };
      tmp15Result = tmp15(tmp3(11737), obj8);
    } else {
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: channel(4777).SendMessageIcon, accessibilityLabel: intl.string(channel(1115).t.TXNS7S), onPress: onSendMessage, disabled: !tmp12 };
      const tmp3Result = onSendMessage(11721);
      intl = tmp(1115).intl;
      tmp15Result = tmp15(tmp3Result, obj9);
    }
    return <tmp19 style={size}>{tmp15Result}</tmp19>;
  } else {
    return <FloatingSlot buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{jsx(channel(4540).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey })}</FloatingSlot>;
  }
});
forwardRefResult.displayName = "ChatInputSendButton";
const memoResult = react.memo(forwardRefResult);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;

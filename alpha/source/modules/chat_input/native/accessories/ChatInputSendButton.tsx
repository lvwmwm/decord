// Module ID: 11952
// Function ID: 11953
// Name: ChatInputSendButton
// Dependencies: [32, 19, 17, 5081, 7374, 11634, 21, 5092, 587, 558, 576, 4818, 11953, 11935, 5040, 1126, 11943, 504, 4827, 11957, 4850, 2]

// Module 11952 (ChatInputSendButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useToken from "useToken" /* 4818 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4850 */;
import SendMessageIcon from "SendMessageIcon" /* 5040 */;
import ChatInputConstants from "ChatInputConstants" /* 11634 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11935 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11943 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 11957 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import SlowmodeStore from "SlowmodeStore" /* 7374 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

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
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputSendButtonInner(arg0) {
  let channelId;
  let cleanup;
  let intl;
  let isOnCooldown;
  let onSendMessage;
  let sendEnabled;
  let state;
  let tmp9Result;
  let type;
  let withBounce;
  const obj = react2;
  const cResult = obj.c(13);
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, type, withBounce } = arg0);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj3 = useToken;
  const tmp6 = closure_11(token, obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === isOnCooldown) {
      if (cResult[2] === (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED)) {
        if (cResult[3] === onSendMessage) {
          if (cResult[4] === sendEnabled) {
            let tmp8;
            if (cResult[5] === tmp6) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === num) {
              if (cResult[8] === cleanup) {
                if (cResult[9] === state) {
                  if (cResult[10] === tmp8) {
                    let tmp12;
                    if (cResult[11] === withBounce) {
                      tmp12 = cResult[12];
                    }
                    return tmp12;
                  }
                }
              }
            }
            const tmp14 = jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, withBounce, bounceEnterDelayMs: num, children: tmp8 });
            cResult[7] = num;
            cResult[8] = cleanup;
            cResult[9] = state;
            cResult[10] = tmp8;
            cResult[11] = withBounce;
            cResult[12] = tmp14;
            tmp12 = tmp14;
          }
        }
      }
    }
  }
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    const obj6 = { disabled: isOnCooldown, channelId };
    tmp9Result = tmp9(tmp4(11953), obj6);
  } else {
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp6);
    const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl.string(intl2.t.TXNS7S), onPress: onSendMessage, disabled: !sendEnabled };
    const tmp4Result = ChatInputActionButtonDefault;
    intl = tmp(1126).intl;
    tmp9Result = tmp9(tmp4Result, obj9);
  }
  cResult[0] = channelId;
  cResult[1] = isOnCooldown;
  cResult[2] = type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
  cResult[3] = onSendMessage;
  cResult[4] = sendEnabled;
  cResult[5] = tmp6;
  cResult[6] = tmp9Result;
  tmp8 = tmp9Result;
}) : (function ChatInputSendButtonInner(type) {
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
    tmp7Result = tmp7(tmp3(11953), obj5);
  } else {
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    const obj8 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: SendMessageIcon.SendMessageIcon, accessibilityLabel: intl.string(intl2.t.TXNS7S), onPress: onSendMessage, disabled: !sendEnabled };
    const tmp3Result2 = ChatInputActionButtonDefault;
    intl = tmp(1126).intl;
    tmp7Result = tmp7(tmp3Result2, obj8);
  }
  return <tmp3Result cleanup={cleanup} state={state} withBounce={withBounce} bounceEnterDelayMs={num}>{tmp7Result}</tmp3Result>;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputSendButton(channel) {
  let canSendVoiceMessage;
  let defaultValue;
  let hasPendingAttachments;
  let hasPendingEdit;
  let onSendMessage;
  let ref;
  let requireTextContent;
  let setHasText;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let useReducedMotion;
  const obj = channel(576);
  const cResult = obj.c(34);
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage, requireTextContent } = channel);
  let tmp4 = undefined !== requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit, ref } = channel);
  if (tmp4) {
    tmp4 = requireTextContent;
  }
  const tmpResult = channel(4818);
  const token = tmpResult.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmpResult5 = channel(4818);
  const token1 = tmpResult5.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmpResult6 = channel(4818);
  const token2 = tmpResult6.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const tmp9 = closure_11(token, token1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult7 = channel(504);
  const stateFromStores = tmpResult7.useStateFromStores(tmp10, tmp11);
  [tmp15, importDefault] = react.useState(defaultValue.length > 0);
  _slicedToArray(react.useState(defaultValue.length > 0), 2);
  const obj6 = react;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SlowmodeStore];
    cResult[2] = items1;
    tmp16 = items1;
  } else {
    tmp16 = cResult[2];
  }
  if (cResult[3] !== channel) {
    const fn2 = function f() {
      return SlowmodeStore.isChannelOnCooldown(channel);
    };
    const items2 = [channel];
    cResult[3] = channel;
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp19 = items2;
    tmp18 = fn2;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  const tmpResult8 = channel(504);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp16, tmp18, tmp19);
  let tmp21 = !stateFromStores1;
  if (stateFromStores1) {
    tmp21 = hasPendingEdit;
  }
  if (tmp21) {
    if (!tmp15) {
      tmp15 = hasPendingAttachments;
    }
    if (!tmp15) {
      tmp15 = !tmp4;
    }
    tmp21 = tmp15;
  }
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp21;
  }
  if (cResult[6] === channel.id) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === onSendMessage) {
        if (cResult[9] === tmp21) {
          let tmp23;
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class K {
              constructor() {
                return { setHasText: importDefault };
              }
            }
            cResult[12] = K;
            tmp23 = K;
          } else {
            class K {
              constructor() {
                return { setHasText: importDefault };
              }
            }
          }
          const imperativeHandle = obj6.useImperativeHandle(ref, tmp23);
          if (stateFromStores) {
            class K {
              constructor() {
                return { setHasText: importDefault };
              }
            }
            const tmp31 = canSendVoiceMessage ? token1 + tmp30 : token + tmp30;
            if (cResult[13] === token1) {
              let tmp34Result;
              class K {
                constructor() {
                  return { setHasText: importDefault };
                }
              }
              if (cResult[16] === channel.id) {
                class K {
                  constructor() {
                    return { setHasText: importDefault };
                  }
                }
              }
              if (canSendVoiceMessage) {
                class K {
                  constructor() {
                    return { setHasText: importDefault };
                  }
                }
                tmp38[0] = stateFromStores1;
                tmp38[1] = channel.id;
                tmp34Result = tmp34(tmp5(11953), tmp38);
              } else {
                class K {
                  constructor() {
                    return { setHasText: importDefault };
                  }
                }
                ({ button: tmp36[1], buttonActive: tmp36[2], iconActive: tmp36[3] } = tmp9);
                const tmp5Result = ChatInputActionButtonDefault;
                tmp36[4] = channel(5040).SendMessageIcon;
                const intl = tmp(1126).intl;
                tmp36[5] = intl.string(channel(1126).t.TXNS7S);
                tmp36[6] = onSendMessage;
                tmp36[7] = !tmp21;
                tmp34Result = tmp34(tmp5Result, tmp36);
              }
              cResult[16] = channel.id;
              cResult[17] = stateFromStores1;
              cResult[18] = onSendMessage;
              cResult[19] = tmp21;
              cResult[20] = canSendVoiceMessage;
              cResult[21] = tmp9;
              cResult[22] = tmp34Result;
            }
            size = { width: tmp31, height: token1, alignItems: "center", justifyContent: "center" };
            cResult[13] = token1;
            cResult[14] = tmp31;
            cResult[15] = size;
          } else {
            class K {
              constructor() {
                return { setHasText: importDefault };
              }
            }
            if (cResult[28] === token1) {
              class K {
                constructor() {
                  return { setHasText: importDefault };
                }
              }
            }
            const tmp29 = <closure_15 buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{tmp25}</closure_15>;
            cResult[28] = token1;
            cResult[29] = token2;
            cResult[30] = token;
            cResult[31] = canSendVoiceMessage;
            cResult[32] = tmp25;
            cResult[33] = tmp29;
          }
        }
      }
    }
  }
  const items3 = [];
  const obj3 = { channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: tmp21, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true };
  items3[0] = obj3;
  cResult[6] = channel.id;
  cResult[7] = stateFromStores1;
  cResult[8] = onSendMessage;
  cResult[9] = tmp21;
  cResult[10] = canSendVoiceMessage;
  cResult[11] = items3;
}) : (function ChatInputSendButton(channel) {
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
  const ref = channel.ref;
  let obj = channel(4818);
  const token = obj.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj2 = channel(4818);
  const token1 = obj2.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj3 = channel(4818);
  const token2 = obj3.useToken(onSendMessage(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
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
      tmp15Result = tmp15(tmp3(11953), obj8);
    } else {
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: channel(5040).SendMessageIcon, accessibilityLabel: intl.string(channel(1126).t.TXNS7S), onPress: onSendMessage, disabled: !tmp12 };
      const tmp3Result = onSendMessage(11935);
      intl = tmp(1126).intl;
      tmp15Result = tmp15(tmp3Result, obj9);
    }
    return <tmp19 style={size}>{tmp15Result}</tmp19>;
  } else {
    return <closure_15 buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{jsx(channel(4827).TransitionGroup, { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey })}</closure_15>;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingSlot(sendVoiceMessageEnabled) {
  let buttonHeight;
  let buttonMargin;
  let children;
  const obj = react2;
  const cResult = obj.c(12);
  ({ buttonHeight, buttonMargin, children } = sendVoiceMessageEnabled);
  const sum = buttonHeight + 2 * buttonMargin;
  const sum1 = sendVoiceMessageEnabled.buttonWidth + 2 * buttonMargin;
  if (cResult[0] === !sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    if (cResult[1] === sum) {
      let tmp6;
      let tmp8;
      if (cResult[2] === sum1) {
        tmp6 = cResult[3];
      }
      const animatedStyle = useChatInputFloatingWidthDefault(tmp6).animatedStyle;
      const tmp7 = importDefault;
      if (cResult[4] !== buttonHeight) {
        const obj2 = { height: buttonHeight };
        cResult[4] = buttonHeight;
        cResult[5] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === children) {
          let tmp10;
          if (cResult[10] === tmp9) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const tmp12 = jsx(tmp7(4850).View, { style: tmp9, children });
        cResult[9] = children;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        tmp10 = tmp12;
      }
      const items = [tmp8, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp8;
      cResult[8] = items;
      tmp9 = items;
    }
  }
  const obj4 = { expanded: !sendVoiceMessageEnabled.sendVoiceMessageEnabled, collapsedWidth: sum, expandedWidth: sum1 };
  cResult[0] = !sendVoiceMessageEnabled.sendVoiceMessageEnabled;
  cResult[1] = sum;
  cResult[2] = sum1;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : (function FloatingSlot(arg0) {
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
});
tmp2.displayName = "ChatInputSendButton";
const memoResult = react.memo(tmp2);
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default memoResult;

// Module ID: 12401
// Function ID: 12402
// Name: ChatInputSendButton
// Dependencies: [32, 19, 17, 4750, 7928, 12092, 21, 4758, 580, 558, 568, 4462, 12402, 12385, 4702, 1119, 12393, 504, 4471, 12406, 4497, 2]

// Module 12401 (ChatInputSendButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4497 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12393 */;
import useChatInputFloatingWidthDefault from "useChatInputFloatingWidth" /* 12406 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import SlowmodeStore from "SlowmodeStore" /* 7928 */;

require = fn;
function renderChatInputSendButton(type, arg1, state, cleanup) {
  const merged = Object.assign(arg1);
  return <closure_12 key={arg0} type={arg0} state={arg2} cleanup={arg3} />;
}
function getChatInputSendButtonItemKey(sendVoiceMessageEnabled) {
  if (!sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    return tmp ? tmp2.BUTTON_SEND : tmp2.BUTTON_SEND_DISABLED;
  }
}
const View = fn(17).View;
let closure_8 = fn(12092).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsx = fn(21).jsx;
const constants = { BUTTON_SEND: "send-button", BUTTON_SEND_DISABLED: "send-button-disabled", BUTTON_SEND_VOICE_MESSAGE: "voice-message-button", BUTTON_SEND_VOICE_MESSAGE_DISABLED: "voice-message-button-disabled" };
const createStyles = fn(4758);
let closure_11 = createStyles.createStyles((width, height) => {
  const obj = { button: null, buttonActive: { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND }, iconActive: null };
  const size = { width, height };
  obj.button = size;
  const obj2 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
  obj.iconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, type, withBounce } = arg0);
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmp6 = closure_11(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  let num = 0;
  let num2 = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num2 = closure_8;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === isOnCooldown) {
      if (cResult[2] === tmp7) {
        if (cResult[3] === onSendMessage) {
          if (cResult[4] === sendEnabled) {
            if (cResult[5] === tmp6) {
              if (cResult[7] === num2) {
                if (cResult[8] === cleanup) {
                  if (cResult[9] === state) {
                    if (cResult[10] === tmp8) {
                      if (cResult[11] === withBounce) {
                        let tmp12 = cResult[12];
                      }
                      return tmp12;
                    }
                  }
                }
              }
              const obj5 = { cleanup, state, withBounce, bounceEnterDelayMs: num2, children: cResult[6] };
              const tmp14 = jsx(tmp4(12393), { cleanup, state, withBounce, bounceEnterDelayMs: num2, children: cResult[6] });
              cResult[7] = num2;
              cResult[8] = cleanup;
              cResult[9] = state;
              cResult[10] = cResult[6];
              cResult[11] = withBounce;
              cResult[12] = tmp14;
              tmp12 = tmp14;
            }
          }
        }
      }
    }
  }
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    const obj6 = { disabled: isOnCooldown, channelId };
    let tmp9Result = tmp9(tmp4(12402), obj6);
  } else {
    const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp6);
    obj9.IconComponent = tmp(4702).SendMessageIcon;
    const intl = tmp(1119).intl;
    obj9.accessibilityLabel = intl.string(tmp(1119).t.TXNS7S);
    obj9.onPress = onSendMessage;
    obj9.disabled = !sendEnabled;
    tmp9Result = tmp9(tmp4(12385), obj9);
    const tmp4Result = tmp4(12385);
  }
  cResult[num] = channelId;
  cResult[1] = isOnCooldown;
  cResult[2] = type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
  cResult[3] = onSendMessage;
  cResult[4] = sendEnabled;
  cResult[5] = tmp6;
  num = 6;
  cResult[6] = tmp9Result;
}) : ((type) => {
  type = type.type;
  ({ onSendMessage, sendEnabled, isOnCooldown, channelId, state, cleanup, withBounce } = type);
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let num = 0;
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    num = closure_8;
  }
  const obj3 = { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null };
  const tmp5 = closure_11(token, useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT));
  if (type === constants.BUTTON_SEND_VOICE_MESSAGE || type === constants.BUTTON_SEND_VOICE_MESSAGE_DISABLED) {
    const obj5 = { disabled: isOnCooldown, channelId };
    let tmp7Result = tmp7(tmp3(12402), obj5);
  } else {
    const obj8 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
    ({ button: obj4.style, buttonActive: obj4.activeStyle, iconActive: obj4.activeIconStyle } = tmp5);
    obj8.IconComponent = tmp(4702).SendMessageIcon;
    const intl = tmp(1119).intl;
    obj8.accessibilityLabel = intl.string(tmp(1119).t.TXNS7S);
    obj8.onPress = onSendMessage;
    obj8.disabled = !sendEnabled;
    tmp7Result = tmp7(tmp3(12385), obj8);
    const tmp3Result2 = tmp3(12385);
  }
  obj3.children = tmp7Result;
  return jsx(ChatInputActionButtonTransitionItemDefault, { cleanup, state, withBounce, bounceEnterDelayMs: num, children: null });
}));
ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, ref) => {
  const cResult = id(568).c(34);
  id = channel.channel;
  ({ canSendVoiceMessage, onSendMessage, requireTextContent } = channel);
  let tmp4 = undefined !== requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (tmp4) {
    tmp4 = requireTextContent;
  }
  const obj = id(568);
  const token = id(4462).useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmpResult = id(4462);
  const token1 = id(4462).useToken(nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmpResult5 = id(4462);
  const token2 = id(4462).useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const tmp8 = closure_11(token, token1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class I {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp10 = I;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult6 = id(4462);
  const stateFromStores = id(504).useStateFromStores(tmp9, tmp10);
  const obj6 = noop;
  const tmpResult7 = id(504);
  [tmp14, importDefault] = noop.useState(defaultValue.length > 0);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SlowmodeStore];
    class I {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    let tmp15 = items1;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn = function f() {
      return SlowmodeStore.isChannelOnCooldown(id);
    };
    const items2 = [id];
    class I {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[3] = id;
    cResult[4] = fn;
    cResult[5] = items2;
    let tmp18 = items2;
    let tmp17 = fn;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const tmp13 = _slicedToArray(noop.useState(defaultValue.length > 0), 2);
  const stateFromStores1 = id(504).useStateFromStores(tmp15, tmp17, tmp18);
  let tmp20 = !stateFromStores1;
  if (stateFromStores1) {
    tmp20 = hasPendingEdit;
  }
  if (tmp20) {
    if (!tmp14) {
      tmp14 = hasPendingAttachments;
    }
    if (!tmp14) {
      tmp14 = !tmp4;
    }
    tmp20 = tmp14;
  }
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp20;
  }
  if (cResult[6] === id.id) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === onSendMessage) {
        if (cResult[9] === tmp20) {
          if (cResult[10] === canSendVoiceMessage) {
            let tmp21 = cResult[11];
          }
          const _Symbol = Symbol;
          class I {
            constructor() {
              return closure_1_6.useReducedMotion;
            }
          }
          const imperativeHandle = obj6.useImperativeHandle(ref, tmp23);
          if (stateFromStores) {
            const result = 2 * token2;
            const tmp34 = canSendVoiceMessage ? token1 + result : token + result;
            if (cResult[13] === token1) {
              if (cResult[14] === tmp34) {
                let tmp35 = cResult[15];
              }
              if (cResult[16] === id.id) {
                if (cResult[17] === stateFromStores1) {
                  if (cResult[18] === onSendMessage) {
                    if (cResult[19] === tmp20) {
                      if (cResult[20] === canSendVoiceMessage) {
                        if (cResult[21] === tmp8) {
                          if (cResult[23] === tmp35) {
                            if (cResult[24] === tmp37) {
                              let tmp41 = cResult[25];
                            }
                            return tmp41;
                          }
                          class I {
                            constructor() {
                              return closure_1_6.useReducedMotion;
                            }
                          }
                          const obj2 = { style: tmp35, children: cResult[22] };
                          const tmp43 = <View style={tmp35}>{cResult[22]}</View>;
                          cResult[23] = tmp35;
                          cResult[24] = cResult[22];
                          cResult[25] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                    }
                  }
                }
              }
              class I {
                constructor() {
                  return closure_1_6.useReducedMotion;
                }
              }
              id = id.id;
              cResult[16] = id;
              cResult[17] = stateFromStores1;
              cResult[18] = onSendMessage;
              cResult[19] = tmp20;
              cResult[20] = canSendVoiceMessage;
              cResult[21] = tmp8;
              cResult[22] = tmp39;
            }
            class I {
              constructor() {
                return closure_1_6.useReducedMotion;
              }
            }
            tmp36[0] = tmp34;
            tmp36[1] = token1;
            cResult[13] = token1;
            cResult[14] = tmp34;
            cResult[15] = tmp36;
            tmp35 = tmp36;
          } else {
            if (cResult[26] !== tmp21) {
              const obj3 = { items: tmp21, renderItem: null, getItemKey: null };
              class I {
                constructor() {
                  return closure_1_6.useReducedMotion;
                }
              }
              obj3.renderItem = renderChatInputSendButton;
              obj3.getItemKey = getChatInputSendButtonItemKey;
              const tmp29 = jsx(tmp(4471).TransitionGroup, { items: tmp21, renderItem: null, getItemKey: null });
              cResult[26] = tmp21;
              cResult[27] = tmp29;
              let tmp26 = tmp29;
            } else {
              tmp26 = cResult[27];
            }
            if (cResult[28] === token1) {
              if (cResult[29] === token2) {
                if (cResult[30] === token) {
                  if (cResult[31] === canSendVoiceMessage) {
                    if (cResult[32] === tmp26) {
                      let tmp30 = cResult[33];
                    }
                    return tmp30;
                  }
                }
              }
            }
            class I {
              constructor() {
                return closure_1_6.useReducedMotion;
              }
            }
            const obj4 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: tmp26 };
            const tmp32 = <closure_15 buttonWidth={token} buttonHeight={token1} buttonMargin={token2} sendVoiceMessageEnabled={canSendVoiceMessage}>{tmp26}</closure_15>;
            cResult[28] = token1;
            cResult[29] = token2;
            cResult[30] = token;
            cResult[31] = canSendVoiceMessage;
            cResult[32] = tmp26;
            cResult[33] = tmp32;
            tmp30 = tmp32;
          }
        }
      }
    }
  }
  const items3 = [{ channelId: id.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled: tmp20, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true }];
  cResult[6] = id.id;
  cResult[7] = stateFromStores1;
  cResult[8] = onSendMessage;
  cResult[9] = tmp20;
  cResult[10] = canSendVoiceMessage;
  cResult[11] = items3;
  tmp21 = items3;
}) : ((channel, ref) => {
  channel = channel.channel;
  ({ canSendVoiceMessage, onSendMessage } = channel);
  let flag = channel.requireTextContent;
  ({ defaultValue, hasPendingAttachments, hasPendingEdit } = channel);
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let stateFromStores1;
  noop = undefined;
  canSendVoiceMessage = undefined;
  const token = channel(4462).useToken(onSendMessage(580).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const obj = channel(4462);
  const token1 = channel(4462).useToken(onSendMessage(580).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const obj2 = channel(4462);
  const token2 = channel(4462).useToken(onSendMessage(580).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = channel(4462);
  const tmp7 = closure_11(token, token1);
  let items = [AccessibilityStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = channel(504);
  [tmp10, c2] = stateFromStores1(noop.useState(defaultValue.length > 0), 2);
  const tmp9 = stateFromStores1(noop.useState(defaultValue.length > 0), 2);
  const items1 = [SlowmodeStore];
  const items2 = [channel];
  stateFromStores1 = channel(504).useStateFromStores(items1, () => SlowmodeStore.isChannelOnCooldown(channel), items2);
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
  noop = tmp12;
  if (canSendVoiceMessage) {
    canSendVoiceMessage = !tmp12;
  }
  const items3 = [channel.id, stateFromStores1, onSendMessage, tmp12, canSendVoiceMessage];
  const memo = obj5.useMemo(() => {
    const items = [{ channelId: channel.id, isOnCooldown: stateFromStores1, onSendMessage, sendEnabled, sendVoiceMessageEnabled: canSendVoiceMessage, withBounce: true }];
    return items;
  }, items3);
  const imperativeHandle = obj5.useImperativeHandle(ref, () => ({ setHasText }));
  if (stateFromStores) {
    const result = 2 * token2;
    const obj7 = { style: null, children: null };
    const size = { width: canSendVoiceMessage ? token1 + result : token + result, height: token1, alignItems: "center", justifyContent: "center" };
    obj7.style = size;
    if (canSendVoiceMessage) {
      const obj8 = { disabled: stateFromStores1, channelId: channel.id };
      let tmp15Result = tmp15(tmp3(12402), obj8);
    } else {
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ button: obj11.style, buttonActive: obj11.activeStyle, iconActive: obj11.activeIconStyle } = tmp7);
      obj9.IconComponent = tmp(4702).SendMessageIcon;
      const intl = tmp(1119).intl;
      obj9.accessibilityLabel = intl.string(tmp(1119).t.TXNS7S);
      obj9.onPress = onSendMessage;
      obj9.disabled = !tmp12;
      tmp15Result = tmp15(tmp3(12385), obj9);
      const tmp3Result = tmp3(12385);
    }
    obj7.children = tmp15Result;
    return tmp15(canSendVoiceMessage, obj7);
  } else {
    const obj10 = { items: memo, renderItem: renderChatInputSendButton, getItemKey: getChatInputSendButtonItemKey };
    const obj12 = { buttonWidth: token, buttonHeight: token1, buttonMargin: token2, sendVoiceMessageEnabled: canSendVoiceMessage, children: tmp15(tmp(4471).TransitionGroup, obj10) };
    return tmp15(closure_15, obj12);
  }
  const obj6 = channel(504);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((sendVoiceMessageEnabled) => {
  const cResult = c.c(12);
  ({ buttonHeight, buttonMargin, children } = sendVoiceMessageEnabled);
  const sum = buttonHeight + 2 * buttonMargin;
  const sum1 = sendVoiceMessageEnabled.buttonWidth + 2 * buttonMargin;
  if (cResult[0] === !sendVoiceMessageEnabled.sendVoiceMessageEnabled) {
    if (cResult[1] === sum) {
      if (cResult[2] === sum1) {
        let tmp6 = cResult[3];
      }
      const animatedStyle = useChatInputFloatingWidthDefault(tmp6).animatedStyle;
      if (cResult[4] !== buttonHeight) {
        const obj2 = { height: buttonHeight };
        cResult[4] = buttonHeight;
        cResult[5] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        if (cResult[7] === tmp8) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === children) {
          if (cResult[10] === tmp9) {
            let tmp10 = cResult[11];
          }
          return tmp10;
        }
        const obj3 = { style: tmp9, children };
        const tmp12 = jsx(tmp7(4497).View, { style: tmp9, children });
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
      tmp7 = importDefault;
    }
  }
  const obj4 = { expanded: !sendVoiceMessageEnabled.sendVoiceMessageEnabled, collapsedWidth: sum, expandedWidth: sum1 };
  cResult[0] = !sendVoiceMessageEnabled.sendVoiceMessageEnabled;
  cResult[1] = sum;
  cResult[2] = sum1;
  cResult[3] = obj4;
  tmp6 = obj4;
}) : ((arg0) => {
  ({ buttonHeight, buttonMargin } = arg0);
  ({ buttonWidth, sendVoiceMessageEnabled, children } = arg0);
  const obj2 = { style: null, children };
  const items = [{ height: buttonHeight }, useChatInputFloatingWidthDefault({ expanded: !sendVoiceMessageEnabled, collapsedWidth: buttonHeight + 2 * buttonMargin, expandedWidth: buttonWidth + 2 * buttonMargin }).animatedStyle];
  obj2.style = items;
  return jsx(ReanimatedRexportDefault.View, { style: null, children });
});
forwardRefResult.displayName = "ChatInputSendButton";
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputSendButton.tsx");

export default noop.memo(forwardRefResult);

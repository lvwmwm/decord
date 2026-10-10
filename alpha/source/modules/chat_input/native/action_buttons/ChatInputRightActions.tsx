// Module ID: 12142
// Function ID: 12143
// Name: ChatInputRightActions
// Dependencies: [32, 19, 17, 11634, 21, 5092, 587, 558, 576, 4818, 4827, 12143, 1629, 11860, 11944, 11943, 11942, 4850, 2]

// Module 12142 (ChatInputRightActions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4827 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4850 */;
import ChatInputConstants from "ChatInputConstants" /* 11634 */;
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread" /* 11942 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 11944 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let tmp;
const ChatInputActionButtonTransitionItem = tmp(11943);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const enterDelayMs = ChatInputConstants.CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP }, leftSlot: { alignItems: "center", justifyContent: "center" } };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputRightActions(channel) {
  let items1;
  let keyboardType;
  let onPressAction;
  let onPressExpression;
  let ref;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  let suggestedExpressions;
  let suggestedExpressionsRef;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp9;
  let obj = channel(576);
  const cResult = obj.c(23);
  channel = channel.channel;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressAction } = channel);
  ({ onPressExpression, suggestedExpressions, suggestedExpressionsRef, ref } = channel);
  const obj2 = channel(4818);
  const token = obj2.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj3 = channel(4818);
  const sum = token + 2 * obj3.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp7 = closure_9();
  const _slicedToArray = tmp7;
  const obj4 = react;
  const tmp8 = _slicedToArray(react.useState(true), 2);
  [tmp9, react] = tmp8;
  const tmp4 = onPressAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return {
        onDismissActions() {
          return closure_1_4(false);
        },
        onShowActions() {
          return closure_1_4(true);
        }
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = fn;
    tmp11 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const imperativeHandle = obj4.useImperativeHandle(ref, tmp10, tmp11);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {};
    cResult[2] = obj5;
    tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === sum) {
    if (cResult[4] === channel) {
      if (cResult[5] === onPressAction) {
        let tmp14;
        if (cResult[6] === tmp7.leftSlot) {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp14) {
          if (cResult[9] === shouldShowGiftButton) {
            let tmp15;
            let tmp23;
            if (cResult[10] === tmp9) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === channel) {
              if (cResult[13] === keyboardType) {
                if (cResult[14] === onPressExpression) {
                  if (cResult[15] === showKeyboardIcon) {
                    if (cResult[16] === suggestedExpressions) {
                      let tmp19;
                      if (cResult[17] === suggestedExpressionsRef) {
                        tmp19 = cResult[18];
                      }
                      if (cResult[19] === tmp7.container) {
                        if (cResult[20] === tmp15) {
                          let tmp28;
                          if (cResult[21] === tmp19) {
                            tmp28 = cResult[22];
                          }
                          return tmp28;
                        }
                      }
                      const obj6 = { style: tmp7.container, children: items1 };
                      items1 = [tmp15, tmp19];
                      const tmp31 = closure_8(View, obj6);
                      cResult[19] = tmp7.container;
                      cResult[20] = tmp15;
                      cResult[21] = tmp19;
                      cResult[22] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                }
              }
            }
            if (null != suggestedExpressions) {
              const obj7 = { ref: suggestedExpressionsRef, active: keyboardType === channel(1629).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression, channel };
              const EmojiSuggestionChatButton = tmp(12143).EmojiSuggestionChatButton;
              const merged = Object.assign(suggestedExpressions);
              tmp23 = closure_7(EmojiSuggestionChatButton, obj7);
            } else {
              const obj8 = { active: keyboardType === channel(1629).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
              const tmp4Result = tmp4(11860);
              tmp23 = closure_7(tmp4Result, obj8);
            }
            cResult[12] = channel;
            cResult[13] = keyboardType;
            cResult[14] = onPressExpression;
            cResult[15] = showKeyboardIcon;
            cResult[16] = suggestedExpressions;
            cResult[17] = suggestedExpressionsRef;
            cResult[18] = tmp23;
            tmp19 = tmp23;
          }
        }
        let tmp17Result = null;
        if (shouldShowGiftButton) {
          let tmp18;
          const TransitionItem = tmp(4827).TransitionItem;
          const tmp17 = closure_7;
          if (tmp9) {
            tmp18 = tmp13;
          }
          const obj9 = { item: tmp18, renderItem: tmp14 };
          tmp17Result = tmp17(TransitionItem, obj9);
        }
        cResult[8] = tmp14;
        cResult[9] = shouldShowGiftButton;
        cResult[10] = tmp9;
        cResult[11] = tmp17Result;
        tmp15 = tmp17Result;
      }
    }
  }
  class U {
    constructor(arg0, arg1, state, cleanup) {
      const obj = { state, cleanup, channel, onPress: onPressAction, wrapperStyle: leftSlot.leftSlot, slotWidth: dependencyMap };
      return metroImportDefault(closure_10, obj, arg0);
    }
  }
  cResult[3] = sum;
  cResult[4] = channel;
  cResult[5] = onPressAction;
  cResult[6] = tmp7.leftSlot;
  cResult[7] = U;
  tmp14 = U;
}) : (function ChatInputRightActions(channel) {
  let c4;
  let items1;
  let keyboardType;
  let onPressAction;
  let onPressExpression;
  let ref;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  let slotWidth;
  let suggestedExpressions;
  let suggestedExpressionsRef;
  let tmp19;
  let tmp8;
  channel = channel.channel;
  ({ keyboardType, showKeyboardIcon, onPressAction } = channel);
  ({ onPressExpression, suggestedExpressions } = channel);
  react = undefined;
  ({ shouldShowGiftButton, suggestedExpressionsRef, ref } = channel);
  let obj = channel(4818);
  const token = obj.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = channel(4818);
  const sum = token + 2 * obj2.useToken(onPressAction(587).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = closure_9();
  const _slicedToArray = tmp6;
  [tmp8, c4] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    onDismissActions() {
      return closure_1_4(false);
    },
    onShowActions() {
      return closure_1_4(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp6.leftSlot];
  const memo = react.useMemo(() => ({}), []);
  let tmp15Result = null;
  const obj3 = { style: tmp6.container, children: items1 };
  const tmp12 = closure_8;
  const tmp13 = View;
  const tmp3 = onPressAction;
  if (shouldShowGiftButton) {
    let tmp16;
    const TransitionItem = tmp(4827).TransitionItem;
    const tmp15 = closure_7;
    if (tmp8) {
      tmp16 = memo;
    }
    const obj4 = { item: tmp16, renderItem: tmp11 };
    tmp15Result = tmp15(TransitionItem, obj4);
  }
  items1 = [tmp15Result, ];
  if (null != suggestedExpressions) {
    const obj5 = { ref: suggestedExpressionsRef, active: keyboardType === channel(1629).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression, channel };
    const EmojiSuggestionChatButton = tmp(12143).EmojiSuggestionChatButton;
    const merged = Object.assign(suggestedExpressions);
    tmp19 = closure_7(EmojiSuggestionChatButton, obj5);
  } else {
    const obj6 = { active: keyboardType === channel(1629).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
    const tmp3Result = tmp3(11860);
    tmp19 = closure_7(tmp3Result, obj6);
  }
  items1[1] = tmp19;
  return tmp12(tmp13, obj3);
});
tmp3.displayName = "ChatInputRightActions";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function LeftSlot(arg0) {
  let animatedStyle;
  let channel;
  let cleanup;
  let isInteractive;
  let onPress;
  let slotWidth;
  let state;
  let wrapperStyle;
  const obj = react2;
  const cResult = obj.c(19);
  ({ state, cleanup, channel, onPress, slotWidth, wrapperStyle } = arg0);
  const tmp4 = state !== native.TransitionStates.YEETED;
  const tmp5 = state !== native.TransitionStates.ENTERED;
  if (cResult[0] === cleanup) {
    if (cResult[1] === tmp4) {
      let tmp6;
      let tmp9;
      if (cResult[2] === tmp5) {
        tmp6 = cResult[3];
      }
      ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp6));
      useChatInputFloatingBounceDefault(tmp6);
      if (cResult[4] !== slotWidth) {
        const obj2 = { width: slotWidth };
        cResult[4] = slotWidth;
        cResult[5] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        if (cResult[7] === tmp9) {
          let tmp10;
          let tmp11;
          if (cResult[8] === wrapperStyle) {
            tmp10 = cResult[9];
          }
          if (cResult[10] !== isInteractive) {
            const tmpResult = ChatInputActionButtonTransitionItem;
            const interactivityPropsResult = tmpResult.interactivityProps(isInteractive);
            cResult[10] = isInteractive;
            cResult[11] = interactivityPropsResult;
            tmp11 = interactivityPropsResult;
          } else {
            tmp11 = cResult[11];
          }
          if (cResult[12] === channel) {
            let tmp13;
            if (cResult[13] === onPress) {
              tmp13 = cResult[14];
            }
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp11) {
                let tmp16;
                if (cResult[17] === tmp13) {
                  tmp16 = cResult[18];
                }
                return tmp16;
              }
            }
            const obj3 = { style: tmp10, children: tmp13 };
            View = tmp7(4850).View;
            const merged = Object.assign(tmp11);
            const tmp21 = metroImportDefault(View, obj3);
            cResult[15] = tmp10;
            cResult[16] = tmp11;
            cResult[17] = tmp13;
            cResult[18] = tmp21;
            tmp16 = tmp21;
          }
          const obj4 = { canStartThreads: false, channel, onPress, styleButton: "Set", shouldShowThread: -1.5 };
          const tmp15 = metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, obj4);
          cResult[12] = channel;
          cResult[13] = onPress;
          cResult[14] = tmp15;
          tmp13 = tmp15;
        }
      }
      const items = [wrapperStyle, tmp9, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp9;
      cResult[8] = wrapperStyle;
      cResult[9] = items;
      tmp10 = items;
    }
  }
  const obj5 = { visible: tmp4, initiallyVisible: tmp5, enterDelayMs, onExitComplete: cleanup };
  cResult[0] = cleanup;
  cResult[1] = tmp4;
  cResult[2] = tmp5;
  cResult[3] = obj5;
  tmp6 = obj5;
}) : (function LeftSlot(state) {
  let animatedStyle;
  let channel;
  let cleanup;
  let isInteractive;
  let items;
  let onPress;
  let slotWidth;
  let wrapperStyle;
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  const YEETED = native.TransitionStates.YEETED;
  const obj = { visible: state !== YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(obj));
  const obj2 = { style: items, children: metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "Set", shouldShowThread: -1.5 }) };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  useChatInputFloatingBounceDefault(obj);
  View = ReanimatedRexportDefault.View;
  const obj3 = ChatInputActionButtonTransitionItem;
  const merged = Object.assign(obj3.interactivityProps(isInteractive));
  return metroImportDefault(View, obj2);
});
const memoResult = react.memo(tmp3);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;

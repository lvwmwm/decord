// Module ID: 12579
// Function ID: 12580
// Name: ChatInputRightActions
// Dependencies: [32, 19, 17, 12092, 21, 4758, 580, 558, 568, 4462, 4471, 1614, 12314, 12394, 12393, 12392, 4497, 2]

// Module 12579 (ChatInputRightActions)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 4471 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4497 */;
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread" /* 12392 */;
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem" /* 12393 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 12394 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const enterDelayMs = fn(12092).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4758);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP }, leftSlot: { alignItems: "center", justifyContent: "center" } };
  return obj;
});
let ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channel, ref) => {
  const cResult = channel(568).c(20);
  channel = channel.channel;
  ({ showKeyboardIcon, shouldShowGiftButton, onPressAction } = channel);
  ({ onPressExpression, keyboardType } = channel);
  const obj = channel(568);
  const token = channel(4462).useToken(onPressAction(580).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = channel(4462);
  const tmp4 = onPressAction;
  const sum = token + 2 * channel(4462).useToken(onPressAction(580).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp7 = closure_9();
  const _slicedToArray = tmp7;
  const obj3 = channel(4462);
  const obj4 = noop;
  [tmp9, noop] = noop.useState(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
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
    let tmp13 = obj5;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === sum) {
    if (cResult[4] === channel) {
      if (cResult[5] === onPressAction) {
        if (cResult[6] === tmp7.leftSlot) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === tmp14) {
          if (cResult[9] === shouldShowGiftButton) {
            if (cResult[10] === tmp9) {
              let tmp15 = cResult[11];
            }
            const tmp19 = keyboardType === tmp(1614).KeyboardTypes.EXPRESSION;
            if (cResult[12] === onPressExpression) {
              if (cResult[13] === showKeyboardIcon) {
                if (cResult[14] === tmp19) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === tmp7.container) {
                  if (cResult[17] === tmp15) {
                    if (cResult[18] === tmp20) {
                      let tmp23 = cResult[19];
                    }
                    return tmp23;
                  }
                }
                const obj6 = { style: tmp7.container, children: null };
                const items1 = [tmp15, tmp20];
                obj6.children = items1;
                const tmp26 = closure_8(View, obj6);
                cResult[16] = tmp7.container;
                cResult[17] = tmp15;
                cResult[18] = tmp20;
                cResult[19] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj7 = { active: tmp19, showKeyboardIcon, onPress: onPressExpression };
            const tmp22 = closure_7(tmp4(12314), obj7);
            cResult[12] = onPressExpression;
            cResult[13] = showKeyboardIcon;
            cResult[14] = tmp19;
            cResult[15] = tmp22;
            tmp20 = tmp22;
          }
        }
        let tmp17Result = null;
        if (shouldShowGiftButton) {
          let tmp18;
          if (tmp9) {
            tmp18 = tmp13;
          }
          const obj8 = { item: tmp18, renderItem: tmp14 };
          tmp17Result = closure_7(tmp(4471).TransitionItem, obj8);
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
    constructor(arg0, arg1, arg2, arg3) {
      obj = { state: arg2, cleanup: arg3, channel, onPress: onPressAction, wrapperStyle: closure_3.leftSlot, slotWidth: closure_2 };
      return jsx(f60778, obj, channel);
    }
  }
  cResult[3] = sum;
  cResult[4] = channel;
  cResult[5] = onPressAction;
  cResult[6] = tmp7.leftSlot;
  cResult[7] = U;
  tmp14 = U;
}) : ((channel, ref) => {
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  noop = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  const token = channel(4462).useToken(onPressAction(580).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj = channel(4462);
  const tmp3 = onPressAction;
  const sum = token + 2 * channel(4462).useToken(onPressAction(580).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = closure_9();
  const _slicedToArray = tmp6;
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  noop = tmp7[1];
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onDismissActions() {
      return closure_1_4(false);
    },
    onShowActions() {
      return closure_1_4(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp6.leftSlot];
  const memo = noop.useMemo(() => ({}), []);
  const obj3 = { style: tmp6.container, children: null };
  let tmp14Result = null;
  if (shouldShowGiftButton) {
    let tmp15;
    if (tmp7[0]) {
      tmp15 = memo;
    }
    const obj4 = { item: tmp15, renderItem: tmp10 };
    tmp14Result = closure_7(tmp(4471).TransitionItem, obj4);
  }
  const items1 = [tmp14Result, ];
  const obj5 = { active: null, showKeyboardIcon: null, onPress: null };
  const obj2 = channel(4462);
  const tmp11 = closure_8;
  const tmp12 = View;
  obj5.active = keyboardType === channel(1614).KeyboardTypes.EXPRESSION;
  obj5.showKeyboardIcon = showKeyboardIcon;
  obj5.onPress = onPressExpression;
  items1[1] = closure_7(tmp3(12314), obj5);
  obj3.children = items1;
  return tmp11(tmp12, obj3);
}));
forwardRefResult.displayName = "ChatInputRightActions";
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ state, cleanup, channel, onPress, slotWidth, wrapperStyle } = arg0);
  const tmp4 = state !== native.TransitionStates.YEETED;
  const tmp5 = state !== native.TransitionStates.ENTERED;
  if (cResult[0] === cleanup) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp5) {
        let tmp6 = cResult[3];
      }
      ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp6));
      if (cResult[4] !== slotWidth) {
        const obj2 = { width: slotWidth };
        cResult[4] = slotWidth;
        cResult[5] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === animatedStyle) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === wrapperStyle) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] !== isInteractive) {
            const interactivityPropsResult = ChatInputActionButtonTransitionItem.interactivityProps(isInteractive);
            cResult[10] = isInteractive;
            cResult[11] = interactivityPropsResult;
            let tmp11 = interactivityPropsResult;
            const tmpResult = ChatInputActionButtonTransitionItem;
          } else {
            tmp11 = cResult[11];
          }
          if (cResult[12] === channel) {
            if (cResult[13] === onPress) {
              let tmp13 = cResult[14];
            }
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp11) {
                if (cResult[17] === tmp13) {
                  let tmp16 = cResult[18];
                }
                return tmp16;
              }
            }
            const obj3 = { style: tmp10 };
            const merged = Object.assign(tmp11);
            obj3.children = tmp13;
            const tmp21 = React5(tmp7(4497).View, obj3);
            cResult[15] = tmp10;
            cResult[16] = tmp11;
            cResult[17] = tmp13;
            cResult[18] = tmp21;
            tmp16 = tmp21;
          }
          const obj4 = { canStartThreads: false, channel, onPress, styleButton: "Set", shouldShowThread: "getInfoByName" };
          const tmp15 = React5(tmp7(12392), obj4);
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
      const tmp8 = useChatInputFloatingBounceDefault(tmp6);
    }
  }
  const obj5 = { visible: tmp4, initiallyVisible: tmp5, enterDelayMs, onExitComplete: cleanup };
  cResult[0] = cleanup;
  cResult[1] = tmp4;
  cResult[2] = tmp5;
  cResult[3] = obj5;
  tmp6 = obj5;
}) : ((state) => {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  const obj = { visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault({ visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup }));
  const obj2 = { style: null };
  const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  obj2.style = items;
  const tmp = useChatInputFloatingBounceDefault({ visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup });
  const merged = Object.assign(ChatInputActionButtonTransitionItem.interactivityProps(isInteractive));
  obj2.children = React5(ChatInputActionButtonGiftOrThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "Set", shouldShowThread: "getInfoByName" });
  return React5(ReanimatedRexportDefault.View, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default noop.memo(forwardRefResult);

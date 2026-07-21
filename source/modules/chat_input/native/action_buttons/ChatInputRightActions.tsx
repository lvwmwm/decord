// Module ID: 11452
// Function ID: 89214
// Name: LeftSlot
// Dependencies: [4345, 653, 11360, 566, 2, 31, 4147, 8588, 653, 566, 8586, 8592, 2, 31, 4163, 5337]

// Module 11452 (LeftSlot)
import closure_3 from "_isNativeReflectConstruct";
import importAllResult from "ME";
import { View } from "MAX_MESSAGES_ALLOWED_FOR_GREETING";
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_6 } from "initialize";
import result2 from "result2";
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function LeftSlot(state) {
  let animatedStyle;
  let channel;
  let cleanup;
  let isInteractive;
  let onPress;
  let slotWidth;
  let wrapperStyle;
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  let obj = { visible: state !== arg1(dependencyMap[8]).TransitionStates.YEETED, initiallyVisible: state !== arg1(dependencyMap[8]).TransitionStates.ENTERED, enterDelayMs: closure_6, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = importDefault(dependencyMap[11])(obj));
  obj = { style: items };
  const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  const tmp = importDefault(dependencyMap[11])(obj);
  const merged = Object.assign(arg1(dependencyMap[13]).interactivityProps(isInteractive));
  obj["children"] = callback2(importDefault(dependencyMap[14]), { canStartThreads: false, channel, onPress, styleButton: undefined, shouldShowThread: false });
  return callback2(importDefault(dependencyMap[12]).View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = result2);
let closure_9 = module_31.createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj.container = obj;
  obj.leftSlot = {};
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let keyboardType;
  let onPressExpression;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  channel = channel.channel;
  const arg1 = channel;
  const onPressAction = channel.onPressAction;
  const importDefault = onPressAction;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj1 = arg1(dependencyMap[7]);
  const sum = token + 2 * obj1.useToken(importDefault(dependencyMap[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const dependencyMap = sum;
  const tmp3 = callback3();
  const callback = tmp3;
  const tmp4 = callback(React.useState(true), 2);
  const React = tmp4[1];
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({
    onDismissActions() {
      return callback(false);
    },
    onShowActions() {
      return callback(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp3.leftSlot];
  const memo = React.useMemo(() => ({}), []);
  obj = { style: tmp3.container };
  let tmp11Result = null;
  if (shouldShowGiftButton) {
    obj = {};
    let tmp14;
    if (tmp4[0]) {
      tmp14 = memo;
    }
    obj.item = tmp14;
    obj.renderItem = tmp7;
    tmp11Result = callback2(arg1(dependencyMap[8]).TransitionItem, obj);
    const tmp11 = callback2;
  }
  const items1 = [tmp11Result, ];
  obj1 = { active: keyboardType === arg1(dependencyMap[10]).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
  items1[1] = callback2(importDefault(dependencyMap[9]), obj1);
  obj.children = items1;
  return closure_8(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default importAllResult.memo(forwardRefResult);

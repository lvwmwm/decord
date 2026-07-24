// Module ID: 11493
// Function ID: 89534
// Name: LeftSlot
// Dependencies: [57, 31, 27, 11132, 33, 4130, 689, 3834, 4476, 11326, 1555, 11382, 3991, 11381, 11380, 2]

// Module 11493 (LeftSlot)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_6 } from "TextAreaCta";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
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
  let obj = { visible: state !== require(4476) /* _createForOfIteratorHelperLoose */.TransitionStates.YEETED, initiallyVisible: state !== require(4476) /* _createForOfIteratorHelperLoose */.TransitionStates.ENTERED, enterDelayMs: closure_6, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = importDefault(11382)(obj));
  obj = { style: items };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  const tmp = importDefault(11382)(obj);
  const merged = Object.assign(require(11381) /* interactivityProps */.interactivityProps(isInteractive));
  obj["children"] = callback2(importDefault(11380), { canStartThreads: false, channel, onPress, styleButton: undefined, shouldShowThread: false });
  return callback2(importDefault(3991).View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj.container = obj;
  obj.leftSlot = { alignItems: "center", justifyContent: "center" };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((channel) => {
  let keyboardType;
  let onPressExpression;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(3834);
  const token = obj.useToken(onPressAction(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj1 = channel(3834);
  const sum = token + 2 * obj1.useToken(onPressAction(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const dependencyMap = sum;
  const tmp3 = callback3();
  const callback = tmp3;
  const tmp4 = callback(importAllResult.useState(true), 2);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    onDismissActions() {
      return outer1_4(false);
    },
    onShowActions() {
      return outer1_4(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp3.leftSlot];
  const memo = importAllResult.useMemo(() => ({}), []);
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
    tmp11Result = callback2(channel(4476).TransitionItem, obj);
    const tmp11 = callback2;
  }
  const items1 = [tmp11Result, ];
  obj1 = { active: keyboardType === channel(1555).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
  items1[1] = callback2(onPressAction(11326), obj1);
  obj.children = items1;
  return closure_8(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;

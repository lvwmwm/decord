// Module ID: 11923
// Function ID: 11924
// Name: ChatInputRightActions
// Dependencies: [32, 19, 17, 11444, 21, 4836, 576, 4531, 4540, 11656, 1611, 11729, 4566, 11728, 11727, 2]

// Module 11923 (ChatInputRightActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4540 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread" /* 11727 */;
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem" /* 11728 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 11729 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
function LeftSlot(state) {
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
  const obj2 = { style: items, children: metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "flex", shouldShowThread: "couple_with_heart_woman_woman_tone1_tone5" }) };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  useChatInputFloatingBounceDefault(obj);
  View = ReanimatedRexportDefault.View;
  const obj3 = ChatInputActionButtonTransitionItem;
  const merged = Object.assign(obj3.interactivityProps(isInteractive));
  return metroImportDefault(View, obj2);
}
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
const forwardRefResult = react.forwardRef((channel, ref) => {
  let closure_4;
  let first;
  let items1;
  let keyboardType;
  let leftSlot;
  let onPressExpression;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  let slotWidth;
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  react = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(4531);
  const token = obj.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = channel(4531);
  const sum = token + 2 * obj2.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = closure_9();
  _slicedToArray = tmp6;
  [first, react] = react.useState(true);
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
    const TransitionItem = tmp(4540).TransitionItem;
    const tmp15 = closure_7;
    if (first) {
      tmp16 = memo;
    }
    const obj4 = { item: tmp16, renderItem: tmp11 };
    tmp15Result = tmp15(TransitionItem, obj4);
  }
  items1 = [tmp15Result, ];
  const obj5 = { active: keyboardType === channel(1611).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
  const tmp3Result = tmp3(11656);
  items1[1] = closure_7(tmp3Result, obj5);
  return tmp12(tmp13, obj3);
});
forwardRefResult.displayName = "ChatInputRightActions";
const memoResult = react.memo(forwardRefResult);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;

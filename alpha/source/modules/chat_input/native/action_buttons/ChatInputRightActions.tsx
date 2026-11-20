// Module ID: 13182
// Function ID: 13183
// Name: ChatInputRightActions
// Dependencies: [32, 19, 17, 12705, 21, 4794, 575, 5358, 4855, 13183, 1626, 12924, 12987, 1653, 12986, 12985, 2]

// Module 13182 (ChatInputRightActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1653 from "module_1653" /* 1653 */;
import native from "native" /* 4855 */;
import ChatInputConstants from "ChatInputConstants" /* 12705 */;
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread" /* 12985 */;
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem" /* 12986 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 12987 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
class ChatInputRightActions {
  constructor(channel) {
    let c4;
    let items1;
    let keyboardType;
    let leftSlot;
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
    let obj = channel(5358);
    const token = obj.useToken(onPressAction(575).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
    const obj2 = channel(5358);
    const sum = token + 2 * obj2.useToken(onPressAction(575).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
    dependencyMap = sum;
    const tmp6 = closure_9();
    _slicedToArray = tmp6;
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
      const TransitionItem = tmp(4855).TransitionItem;
      const tmp15 = closure_7;
      if (tmp8) {
        tmp16 = memo;
      }
      const obj4 = { item: tmp16, renderItem: tmp11 };
      tmp15Result = tmp15(TransitionItem, obj4);
    }
    items1 = [tmp15Result, ];
    if (null != suggestedExpressions) {
      const obj5 = { ref: suggestedExpressionsRef, active: keyboardType === channel(1626).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression, channel };
      const EmojiSuggestionChatButton = tmp(13183).EmojiSuggestionChatButton;
      const merged = Object.assign(suggestedExpressions);
      tmp19 = closure_7(EmojiSuggestionChatButton, obj5);
    } else {
      const obj6 = { active: keyboardType === channel(1626).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
      const tmp3Result = tmp3(12924);
      tmp19 = closure_7(tmp3Result, obj6);
    }
    items1[1] = tmp19;
    return tmp12(tmp13, obj3);
  }
}
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
  const obj2 = { style: items, children: metroImportDefault(ChatInputActionButtonGiftOrThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "Path", shouldShowThread: "fist_tone3" }) };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  useChatInputFloatingBounceDefault(obj);
  View = _modDef1653.View;
  const obj3 = ChatInputActionButtonTransitionItem;
  const merged = Object.assign(obj3.interactivityProps(isInteractive));
  return metroImportDefault(View, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const enterDelayMs = ChatInputConstants.CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const React4 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP }, leftSlot: { alignItems: "center", justifyContent: "center" } };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP });
  return obj;
});
ChatInputRightActions.displayName = "ChatInputRightActions";
const memoResult = react.memo(ChatInputRightActions);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;

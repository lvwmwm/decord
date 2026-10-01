// Module ID: 11373
// Function ID: 11374
// Name: Chat
// Dependencies: [19, 4825, 21, 4836, 6073, 11374, 11375, 504, 10842, 2]

// Module 11373 (Chat)
import get_initialized from "get initialized" /* 504 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 10842 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 11374 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11375 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function DCDChatList() {
  let obj2;
  let tmp3;
  const tmp = closure_7();
  const memo = react.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    const disallowInterruptionResult = NativeResult.disallowInterruption(true);
    return disallowInterruptionResult.shouldCancelWhenOutside(false);
  }, []);
  const obj = { gesture: memo, children: hasOwnProperty(tmp3, obj2) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  obj2 = { style: tmp.chatList, floatingChatInputEnabled: true, children: hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" }) };
  tmp3 = ChatListNativeComponentDefault;
  return hasOwnProperty(GestureDetector, obj);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
const forwardRefResult = react.forwardRef((children, ref) => {
  let items1;
  let roleStyle;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const obj2 = { roleStyle: stateFromStores, ref, children: items1 };
  const tmp2 = ChatNativeComponentDefault;
  const merged = Object.assign(children);
  items1 = [hasOwnProperty(DCDChatList, {}), children.children];
  return metroRequire(tmp2, obj2);
});
const result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;

// Module ID: 13592
// Function ID: 13593
// Name: Chat
// Dependencies: [19, 5171, 21, 5170, 13593, 5452, 13599, 13600, 504, 10262, 2]
// Exports: default

// Module 13592 (Chat)
import get_initialized from "get initialized" /* 504 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 10262 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 13599 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function DCDChatList() {
  let navigationTTIContentPainted;
  let obj3;
  let tmp5;
  const tmp = closure_7();
  const obj = navigationTTIContentPainted(13593);
  navigationTTIContentPainted = obj.useNavigationTTIContentPainted();
  const items = [navigationTTIContentPainted];
  const memo = react.useMemo(() => {
    const Gesture = navigationTTIContentPainted(dependencyMap[5]).Gesture;
    const NativeResult = Gesture.Native();
    const disallowInterruptionResult = NativeResult.disallowInterruption(true);
    return disallowInterruptionResult.shouldCancelWhenOutside(false);
  }, []);
  const callback = react.useCallback((nativeEvent) => navigationTTIContentPainted(nativeEvent.nativeEvent), items);
  const obj2 = { gesture: memo, children: closure_5(tmp5, obj3) };
  const GestureDetector = navigationTTIContentPainted(5452).GestureDetector;
  obj3 = { style: tmp.chatList, floatingChatInputEnabled: true, onContentPaintStateChange: callback, children: closure_5(navigationTTIContentPainted(13600).TTIFirstContentfulPaint, { label: "chat_list_android" }) };
  tmp5 = ChatListNativeComponentDefault;
  return closure_5(GestureDetector, obj2);
}
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
const result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default function Chat(ref) {
  let items1;
  let roleStyle;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  const obj2 = { roleStyle: stateFromStores, ref, children: items1 };
  const tmp3 = ChatNativeComponentDefault;
  const merged1 = Object.assign(merged);
  items1 = [hasOwnProperty(DCDChatList, {}), merged.children];
  return metroRequire(tmp3, obj2);
};

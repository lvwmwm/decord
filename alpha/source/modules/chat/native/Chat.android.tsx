// Module ID: 11511
// Function ID: 11512
// Name: Chat
// Dependencies: [109, 19, 5079, 21, 5090, 558, 576, 11512, 6326, 11518, 11521, 504, 9533, 2]

// Module 11511 (Chat)
import react2 from "react" /* 576 */;
import ChatNativeComponentDefault from "ChatNativeComponent" /* 9533 */;
import useNavigationTTIContentPainted from "useNavigationTTIContentPainted" /* 11512 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11518 */;
import ChatListNativeComponentDefault from "ChatListNativeComponent" /* 11521 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const get_initialized = tmp(504);
let closure_3 = ["ref"];
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ chatList: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function DCDChatList() {
  let first;
  let obj4;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_9();
  const obj2 = useNavigationTTIContentPainted;
  const navigationTTIContentPainted = obj2.useNavigationTTIContentPainted();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const Gesture = tmp(6326).Gesture;
    const NativeResult = Gesture.Native();
    const disallowInterruptionResult = NativeResult.disallowInterruption(true);
    const result = disallowInterruptionResult.shouldCancelWhenOutside(false);
    cResult[0] = result;
    first = result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== navigationTTIContentPainted) {
    const fn = function s(nativeEvent) {
      return navigationTTIContentPainted(nativeEvent.nativeEvent);
    };
    cResult[1] = navigationTTIContentPainted;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp8) {
    let tmp12;
    if (cResult[5] === tmp4.chatList) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj3 = { gesture: first, children: metroImportDefault(ChatListNativeComponentDefault, obj4) };
  const GestureDetector = tmp(6326).GestureDetector;
  obj4 = { style: tmp4.chatList, floatingChatInputEnabled: true, onContentPaintStateChange: tmp8, children: tmp9 };
  const tmp13 = metroImportDefault(GestureDetector, obj3);
  cResult[4] = tmp8;
  cResult[5] = tmp4.chatList;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function DCDChatList() {
  let navigationTTIContentPainted;
  let obj3;
  let tmp5;
  const tmp = closure_9();
  const obj = navigationTTIContentPainted(11512);
  navigationTTIContentPainted = obj.useNavigationTTIContentPainted();
  const items = [navigationTTIContentPainted];
  const memo = react.useMemo(() => {
    const Gesture = navigationTTIContentPainted(dependencyMap[8]).Gesture;
    const NativeResult = Gesture.Native();
    const disallowInterruptionResult = NativeResult.disallowInterruption(true);
    return disallowInterruptionResult.shouldCancelWhenOutside(false);
  }, []);
  const callback = react.useCallback((nativeEvent) => navigationTTIContentPainted(nativeEvent.nativeEvent), items);
  const obj2 = { gesture: memo, children: closure_7(tmp5, obj3) };
  const GestureDetector = navigationTTIContentPainted(6326).GestureDetector;
  obj3 = { style: tmp.chatList, floatingChatInputEnabled: true, onContentPaintStateChange: callback, children: closure_7(navigationTTIContentPainted(11518).TTIFirstContentfulPaint, { label: "chat_list_android" }) };
  tmp5 = ChatListNativeComponentDefault;
  return closure_7(GestureDetector, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Chat(ref) {
  let items1;
  let roleStyle;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = ref.ref;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = ref;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function v() {
      return roleStyle.roleStyle;
    };
    cResult[3] = items;
    cResult[4] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = metroImportDefault(closure_10, {});
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      let tmp17;
      if (cResult[8] === stateFromStores) {
        tmp17 = cResult[9];
      }
      return tmp17;
    }
  }
  const obj2 = { roleStyle: stateFromStores, ref: tmp4, children: items1 };
  const tmp18 = ChatNativeComponentDefault;
  const merged = Object.assign(tmp5);
  items1 = [tmp13, tmp5.children];
  const tmp20 = metroImportAll(tmp18, obj2);
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = stateFromStores;
  cResult[9] = tmp20;
  tmp17 = tmp20;
}) : (function Chat(ref) {
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
  items1 = [metroImportDefault(closure_10, {}), merged.children];
  return metroImportAll(tmp3, obj2);
});
let result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default tmp3;

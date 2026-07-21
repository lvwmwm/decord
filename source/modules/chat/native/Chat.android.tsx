// Module ID: 10014
// Function ID: 77394
// Name: DCDChatList
// Dependencies: []

// Module 10014 (DCDChatList)
function DCDChatList() {
  let obj = arg1(dependencyMap[4]);
  const memo = importAllResult.useMemo(() => {
    const Gesture = callback(closure_2[5]).Gesture;
    const NativeResult = Gesture.Native();
    return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
  }, []);
  obj = { gesture: memo };
  obj = { style: callback3().chatList, floatingChatInputEnabled: obj.useMobileVisualRefreshConfig({ location: "DCDChatList" }).chatInputFloating };
  const tmp = callback3();
  obj.children = callback(arg1(dependencyMap[7]).TTIFirstContentfulPaint, { label: "chat_list_android" });
  obj.children = callback(importDefault(dependencyMap[6]), obj);
  return callback(arg1(dependencyMap[5]).GestureDetector, obj);
}
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ chatList: { flex: 1 } });
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((children) => {
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj = {};
  const merged = Object.assign(children);
  obj["roleStyle"] = stateFromStores;
  obj["ref"] = arg1;
  const items1 = [callback(DCDChatList, {}), children.children];
  obj["children"] = items1;
  return callback2(importDefault(dependencyMap[9]), obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;

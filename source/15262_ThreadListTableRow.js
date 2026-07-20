// Module ID: 15262
// Function ID: 115243
// Name: ThreadListTableRow
// Dependencies: []

// Module 15262 (ThreadListTableRow)
function ThreadListTableRow(thread) {
  let end;
  let start;
  thread = thread.thread;
  const arg1 = thread;
  const onPress = thread.onPress;
  const dependencyMap = onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = importAllResult.useMemo(() => null != onPress ? () => callback(id.id) : undefined, items);
  let obj = { label: thread.name };
  obj = { style: callback().subLabel, children: jsx(arg1(dependencyMap[6]).ThreadSubtext, { thread }) };
  obj.subLabel = <View {...obj} />;
  obj.onPress = memo;
  obj.start = start;
  obj.end = end;
  obj.arrow = true;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles({ subLabel: { "Null": false, "Null": false } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((threadId) => {
  let end;
  let onPress;
  let start;
  const arg1 = threadId.threadId;
  ({ onPress, start, end } = threadId);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { thread: stateFromStores, start, end, onPress };
    tmp2 = <ThreadListTableRow {...obj} />;
  }
  return tmp2;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;

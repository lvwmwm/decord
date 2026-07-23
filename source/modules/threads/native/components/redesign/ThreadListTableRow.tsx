// Module ID: 15397
// Function ID: 117518
// Name: ThreadListTableRow
// Dependencies: [31, 27, 1348, 33, 4130, 5165, 15398, 566, 2]

// Module 15397 (ThreadListTableRow)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function ThreadListTableRow(thread) {
  let end;
  let start;
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = importAllResult.useMemo(() => null != onPress ? (() => outer1_1(outer1_0.id)) : undefined, items);
  let obj = { label: thread.name };
  obj = { style: callback().subLabel, children: jsx(thread(onPress[6]).ThreadSubtext, { thread }) };
  obj.subLabel = <View style={callback().subLabel}>{jsx(thread(onPress[6]).ThreadSubtext, { thread })}</View>;
  obj.onPress = memo;
  obj.start = start;
  obj.end = end;
  obj.arrow = true;
  return jsx(thread(onPress[5]).TableRow, { style: callback().subLabel, children: jsx(thread(onPress[6]).ThreadSubtext, { thread }) });
}
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const memoResult = importAllResult.memo((threadId) => {
  let end;
  let onPress;
  let start;
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  let obj = threadId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { thread: stateFromStores, start, end, onPress };
    tmp2 = <ThreadListTableRow thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;

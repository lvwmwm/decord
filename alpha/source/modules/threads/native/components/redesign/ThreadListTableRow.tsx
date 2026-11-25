// Module ID: 18973
// Function ID: 18974
// Name: ThreadListTableRow
// Dependencies: [19, 17, 4861, 21, 5012, 6113, 18974, 504, 2]

// Module 18973 (ThreadListTableRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 6113 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

function ThreadListTableRow(thread) {
  let end;
  let start;
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const tmp = closure_6();
  const memo = react.useMemo(() => {
    let id;
    return null != onPress ? (() => onPress(id.id)) : undefined;
  }, items);
  const TableRow = TableRow2.TableRow;
  return <TableRow label={thread.name} subLabel={null} onPress={memo} start={start} end={end} arrow />;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const memoResult = react.memo(function ConnectedThreadListTableRow(threadId) {
  let end;
  let onPress;
  let start;
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <ThreadListTableRow thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default memoResult;

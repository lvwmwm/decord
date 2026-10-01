// Module ID: 16537
// Function ID: 16538
// Name: ThreadListTableRow
// Dependencies: [19, 17, 2045, 21, 4836, 5917, 16538, 504, 2]

// Module 16537 (ThreadListTableRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 5917 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let threadId;

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
const memoResult = react.memo((threadId) => {
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

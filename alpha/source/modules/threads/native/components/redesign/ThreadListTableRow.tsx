// Module ID: 17289
// Function ID: 17290
// Name: ThreadListTableRow
// Dependencies: [19, 17, 2044, 21, 4829, 5910, 17290, 504, 2]

// Module 17289 (ThreadListTableRow)
import TableRow from "TableRow" /* 5910 */;
import ThreadBrowserRowSubtext from "ThreadBrowserRowSubtext" /* 17290 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
function ThreadListTableRow(thread) {
  thread = thread.thread;
  const onPress = thread.onPress;
  ({ start, end } = thread);
  const items = [onPress, thread.id];
  const memo = noop.useMemo(() => null != onPress ? (() => onPress(id.id)) : undefined, items);
  const obj = { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true };
  const tmp = closure_6();
  obj.subLabel = <View style={closure_6().subLabel}>{jsx(ThreadBrowserRowSubtext.ThreadSubtext, { thread })}</View>;
  obj.onPress = memo;
  obj.start = start;
  obj.end = end;
  return jsx(TableRow.TableRow, { label: thread.name, subLabel: null, onPress: null, start: null, end: null, arrow: true });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({ subLabel: { maxWidth: "100%", marginTop: 2 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListTableRow.tsx");

export default noop.memo((threadId) => {
  threadId = threadId.threadId;
  ({ onPress, start, end } = threadId);
  const items = [ChannelStore];
  const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { thread: stateFromStores, start, end, onPress };
    tmp2 = <ThreadListTableRow thread={stateFromStores} start={start} end={end} onPress={onPress} />;
  }
  return tmp2;
});

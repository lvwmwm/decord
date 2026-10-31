// Module ID: 18888
// Function ID: 18889
// Name: ThreadAutoArchiveBottomSheet
// Dependencies: [19, 4870, 21, 9777, 7058, 1113, 7061, 2]

// Module 18888 (ThreadAutoArchiveBottomSheet)
import Fragment from "Fragment" /* 21 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelFlags = ChannelConstants.ChannelFlags;
const jsx = Fragment.jsx;
const memoResult = react.memo(function AutoArchiveDurationOptions(channel) {
  let description;
  let disabled;
  let onSelectDuration;
  let selected;
  let title;
  channel = channel.channel;
  _require = undefined;
  ({ title, description, selected, onSelectDuration } = channel);
  const obj = require("ThreadAutoArchive");
  const autoArchiveOptions = obj.getAutoArchiveOptions();
  _require = null != channel && channel.isForumPost() && channel.hasFlag(ChannelFlags.PINNED);
  const hasFlagResult = null != channel && channel.isForumPost() && channel.hasFlag(ChannelFlags.PINNED);
  const TableRadioGroup = tmp(7058).TableRadioGroup;
  const intl = tmp(1113).intl;
  return <TableRadioGroup value={selected} title={title} description={description} accessibilityLabel={intl.string(require("intl").t.H4mGfI)} onChange={onSelectDuration} hasIcons={false}>{autoArchiveOptions.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, disabled, label: value.label }, value.value))}</TableRadioGroup>;
});
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx");

export const AutoArchiveDurationOptions = memoResult;

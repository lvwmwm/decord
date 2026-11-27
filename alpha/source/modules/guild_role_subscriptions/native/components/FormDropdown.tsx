// Module ID: 15311
// Function ID: 15312
// Name: FormDropdown
// Dependencies: [19, 21, 6144, 5634, 7161, 2]
// Exports: default

// Module 15311 (FormDropdown)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 6144 */;
import LockIcon from "LockIcon" /* 7161 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let disabled;
  let label;
  let leading;
  let onPress;
  let placeholder;
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const TableRow = TableRow2.TableRow;
  if (label == null) {
    const obj2 = { variant: "body-md/medium", color: "text-muted", children: placeholder };
    label = tmp(tmp2(5634).Text, obj2);
  }
  let tmpResult;
  if (disabled) {
    const obj3 = { IconComponent: LockIcon.LockIcon };
    const Icon = tmp2(6144).TableRow.Icon;
    tmpResult = tmp(Icon, obj3);
  }
  return <TableRow start end icon={leading} label={label} trailing={tmpResult} arrow={!disabled} disabled={disabled} onPress={onPress} />;
};

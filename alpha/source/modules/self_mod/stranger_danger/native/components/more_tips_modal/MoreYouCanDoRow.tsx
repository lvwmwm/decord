// Module ID: 10917
// Function ID: 10918
// Name: MoreYouCanDoRow
// Dependencies: [19, 21, 5912, 2]
// Exports: default

// Module 10917 (MoreYouCanDoRow)
import TableRow from "TableRow" /* 5912 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

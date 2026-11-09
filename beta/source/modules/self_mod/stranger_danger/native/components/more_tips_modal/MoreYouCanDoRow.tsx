// Module ID: 11431
// Function ID: 11432
// Name: MoreYouCanDoRow
// Dependencies: [19, 21, 7038, 2]
// Exports: default

// Module 11431 (MoreYouCanDoRow)
import Fragment from "Fragment" /* 21 */;
import TableRow from "TableRow" /* 7038 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRow.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

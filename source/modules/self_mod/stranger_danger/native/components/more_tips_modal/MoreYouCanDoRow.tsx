// Module ID: 11318
// Function ID: 11319
// Name: MoreYouCanDoRow
// Dependencies: [19, 21, 5560, 2]
// Exports: default

// Module 11318 (MoreYouCanDoRow)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5560 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(TableRowInner.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

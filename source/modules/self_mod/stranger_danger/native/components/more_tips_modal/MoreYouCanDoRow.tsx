// Module ID: 10285
// Function ID: 10286
// Name: MoreYouCanDoRow
// Dependencies: [19, 21, 5354, 2]
// Exports: default

// Module 10285 (MoreYouCanDoRow)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(require(5354) /* TableRowInner */.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

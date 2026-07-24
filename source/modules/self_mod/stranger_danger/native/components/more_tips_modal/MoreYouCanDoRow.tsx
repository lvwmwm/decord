// Module ID: 10454
// Function ID: 80493
// Name: MoreYouCanDoRow
// Dependencies: [31, 33, 5165, 2]
// Exports: default

// Module 10454 (MoreYouCanDoRow)
import "result";
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
  return jsx(require(5165) /* TableRowInner */.TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

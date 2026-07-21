// Module ID: 10414
// Function ID: 80227
// Name: MoreYouCanDoRow
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 10414 (MoreYouCanDoRow)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

export default function MoreYouCanDoRow(arg0) {
  let description;
  let disabled;
  let icon;
  let onClick;
  let title;
  let variant;
  ({ title, description, variant, onClick, icon, disabled } = arg0);
  return jsx(arg1(dependencyMap[2]).TableRow, { label, subLabel, onPress, icon, variant, disabled });
};

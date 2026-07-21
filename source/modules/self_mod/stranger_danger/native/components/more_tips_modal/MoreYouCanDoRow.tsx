// Module ID: 10414
// Function ID: 80238
// Name: MoreYouCanDoRow
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 10414 (MoreYouCanDoRow)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

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

// Module ID: 10408
// Function ID: 80204
// Name: MoreYouCanDoRow
// Dependencies: []
// Exports: default

// Module 10408 (MoreYouCanDoRow)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreYouCanDoRow.tsx");

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

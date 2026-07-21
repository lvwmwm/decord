// Module ID: 10987
// Function ID: 85516
// Name: ClockWarningIcon
// Dependencies: []
// Exports: ClockWarningIcon

// Module 10987 (ClockWarningIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx");

export const ClockWarningIcon = function ClockWarningIcon(qXtNtS) {
  let INTERACTIVE_ICON_DEFAULT = qXtNtS.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[2]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(qXtNtS, obj);
  obj = { source: arg1(dependencyMap[4]), color: INTERACTIVE_ICON_DEFAULT, style: qXtNtS.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).BaseIconImage, obj);
};

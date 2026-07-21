// Module ID: 14999
// Function ID: 112950
// Name: ConnectionFineIcon
// Dependencies: []
// Exports: ConnectionFineIcon

// Module 14999 (ConnectionFineIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export const ConnectionFineIcon = function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = importDefault(dependencyMap[2]).colors.ICON_FEEDBACK_POSITIVE;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: arg1(dependencyMap[4]), color: ICON_FEEDBACK_POSITIVE, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).BaseIconImage, obj);
};

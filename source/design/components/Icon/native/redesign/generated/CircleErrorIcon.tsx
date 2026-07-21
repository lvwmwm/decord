// Module ID: 7501
// Function ID: 60127
// Name: CircleErrorIcon
// Dependencies: [0, 0, 0]
// Exports: CircleErrorIcon

// Module 7501 (CircleErrorIcon)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = require("__exportStarResult1"));
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = function CircleErrorIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[3]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = { disableCalls: "spring", _coerce: "linear", HOSTED_FIELDS_FIELD_NOT_PRESENT: "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  obj = {};
  obj = { source: arg1(dependencyMap[5]), color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(arg1(dependencyMap[4]).BaseIconImage, obj), ];
  const obj1 = { source: arg1(dependencyMap[6]), color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), {}];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(arg1(dependencyMap[4]).BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};

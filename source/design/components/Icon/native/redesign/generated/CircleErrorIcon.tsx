// Module ID: 7502
// Function ID: 60139
// Name: CircleErrorIcon
// Dependencies: [0, 0, 0]
// Exports: CircleErrorIcon

// Module 7502 (CircleErrorIcon)
import "result";
import { View } from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

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
  let obj = { body: false, borderRadius: false, accessibilityRole: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  obj = {};
  obj = { source: arg1(dependencyMap[5]), color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(arg1(dependencyMap[4]).BaseIconImage, obj), ];
  const obj1 = { source: arg1(dependencyMap[6]), color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), { force: null, trackAnalytics: null }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(arg1(dependencyMap[4]).BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};

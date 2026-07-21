// Module ID: 14077
// Function ID: 106875
// Name: CircleMinusIcon
// Dependencies: [7655, 1212, 10086, 3801, 2, 1188, 1194, 7655]
// Exports: CircleMinusIcon

// Module 14077 (CircleMinusIcon)
import "MobileSetting";
import { View } from "getSystemLocale";
import createToggle from "createToggle";
import MobileSetting from "MobileSetting";

({ jsx: closure_4, jsxs: closure_5 } = createToggle);
const result = MobileSetting.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx");

export const CircleMinusIcon = function CircleMinusIcon(color) {
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

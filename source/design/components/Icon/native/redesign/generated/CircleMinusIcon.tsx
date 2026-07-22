// Module ID: 14087
// Function ID: 106947
// Name: CircleMinusIcon
// Dependencies: [7656, 1212, 10087, 3801, 2, 7656, 10087, 1212]
// Exports: CircleMinusIcon

// Module 14087 (CircleMinusIcon)
import "MobileSetting";
import { View } from "getSystemLocale";
import createToggle from "createToggle";
import getSystemLocale from "getSystemLocale";

({ jsx: closure_4, jsxs: closure_5 } = createToggle);
const result = getSystemLocale.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx");

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
  let obj = { -1435702126: "spring", -1718953382: 0.4, 2085832679: 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  obj = {};
  obj = { source: arg1(dependencyMap[5]), color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(arg1(dependencyMap[4]).BaseIconImage, obj), ];
  const obj1 = { source: arg1(dependencyMap[6]), color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), { 10360: 40, 10496: 40 }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(arg1(dependencyMap[4]).BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};

// Module ID: 10149
// Function ID: 78498
// Name: WindowLaunchIcon
// Dependencies: [6, 7, 15, 17, 18, 31]
// Exports: WindowLaunchIcon

// Module 10149 (WindowLaunchIcon)
import "_classCallCheck";
import { jsx } from "_defineProperties";
import module_31 from "module_31";

const result = module_31.fileFinishedImporting("design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx");

export const WindowLaunchIcon = function WindowLaunchIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[2]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: arg1(dependencyMap[4]), color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[3]).BaseIconImage, obj);
};

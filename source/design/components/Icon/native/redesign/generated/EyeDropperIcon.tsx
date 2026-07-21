// Module ID: 14115
// Function ID: 107180
// Name: EyeDropperIcon
// Dependencies: [4294967295, 0, 4294967295, 0, 0, 0]
// Exports: EyeDropperIcon

// Module 14115 (EyeDropperIcon)
import { jsx } from "result";
import result from "result";

importAll(dependencyMap[0]);
result = result.fileFinishedImporting("design/components/Icon/native/redesign/generated/EyeDropperIcon.tsx");

export const EyeDropperIcon = function EyeDropperIcon(color) {
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

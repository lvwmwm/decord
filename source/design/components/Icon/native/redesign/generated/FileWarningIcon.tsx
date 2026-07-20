// Module ID: 14269
// Function ID: 107860
// Name: FileWarningIcon
// Dependencies: [4294967295, 0, 0, 0, 0, 0]
// Exports: FileWarningIcon

// Module 14269 (FileWarningIcon)
import { jsx } from "result";
import result from "result";

importAll(dependencyMap[0]);
result = result.fileFinishedImporting("design/components/Icon/native/redesign/generated/FileWarningIcon.tsx");

export const FileWarningIcon = function FileWarningIcon(color) {
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

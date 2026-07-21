// Module ID: 14131
// Function ID: 107256
// Name: LanguageIcon
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: LanguageIcon

// Module 14131 (LanguageIcon)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/components/Icon/native/redesign/generated/LanguageIcon.tsx");

export const LanguageIcon = function LanguageIcon(color) {
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

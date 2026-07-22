// Module ID: 9410
// Function ID: 73279
// Name: FlagIcon
// Dependencies: [57, 31, 27, 4120, 1348, 1917]
// Exports: FlagIcon

// Module 9410 (FlagIcon)
import "_slicedToArray";
import { jsx } from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = _isNativeReflectConstruct.fileFinishedImporting("design/components/Icon/native/redesign/generated/FlagIcon.tsx");

export const FlagIcon = function FlagIcon(color) {
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

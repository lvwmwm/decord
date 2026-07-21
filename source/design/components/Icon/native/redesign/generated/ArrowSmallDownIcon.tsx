// Module ID: 14584
// Function ID: 109916
// Name: ArrowSmallDownIcon
// Dependencies: [57, 31, 27, 4530, 33, 4126]
// Exports: ArrowSmallDownIcon

// Module 14584 (ArrowSmallDownIcon)
import "_slicedToArray";
import { jsx } from "module_31";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = _createForOfIteratorHelperLoose.fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowSmallDownIcon.tsx");

export const ArrowSmallDownIcon = function ArrowSmallDownIcon(color) {
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

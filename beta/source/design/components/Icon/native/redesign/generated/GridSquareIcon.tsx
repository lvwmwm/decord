// Module ID: 17289
// Function ID: 17290
// Name: GridSquareIcon
// Dependencies: [19, 21, 576, 4488, 16097, 2]
// Exports: GridSquareIcon

// Module 17289 (GridSquareIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod16097 from "module_16097" /* 16097 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GridSquareIcon.tsx");

export const GridSquareIcon = function GridSquareIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16097, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

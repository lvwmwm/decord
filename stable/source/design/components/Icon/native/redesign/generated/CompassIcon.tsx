// Module ID: 15876
// Function ID: 15877
// Name: CompassIcon
// Dependencies: [19, 21, 576, 4488, 15877, 2]
// Exports: CompassIcon

// Module 15876 (CompassIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15877 from "module_15877" /* 15877 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CompassIcon.tsx");

export const CompassIcon = function CompassIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15877, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

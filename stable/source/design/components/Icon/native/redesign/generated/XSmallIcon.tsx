// Module ID: 5929
// Function ID: 5930
// Name: XSmallIcon
// Dependencies: [19, 21, 576, 4488, 5930, 2]
// Exports: XSmallIcon

// Module 5929 (XSmallIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5930 from "module_5930" /* 5930 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XSmallIcon.tsx");

export const XSmallIcon = function XSmallIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5930, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 4589
// Function ID: 4590
// Name: XLargeIcon
// Dependencies: [19, 21, 576, 4337, 4590, 2]
// Exports: XLargeIcon

// Module 4589 (XLargeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod4590 from "module_4590" /* 4590 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XLargeIcon.tsx");

export const XLargeIcon = function XLargeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4590, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

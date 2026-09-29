// Module ID: 4750
// Function ID: 4751
// Name: ClockIcon
// Dependencies: [19, 21, 576, 4488, 4751, 2]
// Exports: ClockIcon

// Module 4750 (ClockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4751 from "module_4751" /* 4751 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ClockIcon.tsx");

export const ClockIcon = function ClockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4751, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

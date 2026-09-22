// Module ID: 11987
// Function ID: 11988
// Name: ClockWarningIcon
// Dependencies: [19, 21, 576, 4337, 11988, 2]
// Exports: ClockWarningIcon

// Module 11987 (ClockWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod11988 from "module_11988" /* 11988 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ClockWarningIcon.tsx");

export const ClockWarningIcon = function ClockWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11988, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

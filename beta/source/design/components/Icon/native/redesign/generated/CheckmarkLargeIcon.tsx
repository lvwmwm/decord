// Module ID: 4738
// Function ID: 4739
// Name: CheckmarkLargeIcon
// Dependencies: [19, 21, 576, 4488, 4739, 2]
// Exports: CheckmarkLargeIcon

// Module 4738 (CheckmarkLargeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4739 from "module_4739" /* 4739 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx");

export const CheckmarkLargeIcon = function CheckmarkLargeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4739, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

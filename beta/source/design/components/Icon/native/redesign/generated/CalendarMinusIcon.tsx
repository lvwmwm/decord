// Module ID: 17106
// Function ID: 17107
// Name: CalendarMinusIcon
// Dependencies: [19, 21, 576, 4488, 17107, 2]
// Exports: CalendarMinusIcon

// Module 17106 (CalendarMinusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod17107 from "module_17107" /* 17107 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CalendarMinusIcon.tsx");

export const CalendarMinusIcon = function CalendarMinusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17107, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

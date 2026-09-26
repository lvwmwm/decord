// Module ID: 15544
// Function ID: 15545
// Name: ThemeMidnightIcon
// Dependencies: [19, 21, 576, 4488, 15545, 2]
// Exports: ThemeMidnightIcon

// Module 15544 (ThemeMidnightIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15545 from "module_15545" /* 15545 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeMidnightIcon.tsx");

export const ThemeMidnightIcon = function ThemeMidnightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15545, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

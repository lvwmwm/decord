// Module ID: 9193
// Function ID: 9194
// Name: ScreenIcon
// Dependencies: [19, 21, 576, 4488, 9194, 2]
// Exports: ScreenIcon

// Module 9193 (ScreenIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9194 from "module_9194" /* 9194 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenIcon.tsx");

export const ScreenIcon = function ScreenIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9194, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

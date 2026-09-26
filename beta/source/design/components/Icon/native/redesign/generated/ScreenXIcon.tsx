// Module ID: 17664
// Function ID: 17665
// Name: ScreenXIcon
// Dependencies: [19, 21, 576, 4488, 10267, 2]
// Exports: ScreenXIcon

// Module 17664 (ScreenXIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10267 from "module_10267" /* 10267 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenXIcon.tsx");

export const ScreenXIcon = function ScreenXIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10267, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

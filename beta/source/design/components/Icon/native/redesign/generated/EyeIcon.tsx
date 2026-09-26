// Module ID: 7245
// Function ID: 7246
// Name: EyeIcon
// Dependencies: [19, 21, 576, 4488, 7246, 2]
// Exports: EyeIcon

// Module 7245 (EyeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod7246 from "module_7246" /* 7246 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EyeIcon.tsx");

export const EyeIcon = function EyeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7246, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

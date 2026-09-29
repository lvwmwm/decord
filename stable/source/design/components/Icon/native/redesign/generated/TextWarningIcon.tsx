// Module ID: 5326
// Function ID: 5327
// Name: TextWarningIcon
// Dependencies: [19, 21, 576, 4488, 5287, 2]
// Exports: TextWarningIcon

// Module 5326 (TextWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5287 from "module_5287" /* 5287 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TextWarningIcon.tsx");

export const TextWarningIcon = function TextWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5287, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

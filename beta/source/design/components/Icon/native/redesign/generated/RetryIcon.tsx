// Module ID: 10476
// Function ID: 10477
// Name: RetryIcon
// Dependencies: [19, 21, 576, 4488, 10477, 2]
// Exports: RetryIcon

// Module 10476 (RetryIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10477 from "module_10477" /* 10477 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/RetryIcon.tsx");

export const RetryIcon = function RetryIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10477, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 5311
// Function ID: 5312
// Name: AppsLockIcon
// Dependencies: [19, 21, 576, 4488, 5312, 2]
// Exports: AppsLockIcon

// Module 5311 (AppsLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5312 from "module_5312" /* 5312 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppsLockIcon.tsx");

export const AppsLockIcon = function AppsLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5312, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

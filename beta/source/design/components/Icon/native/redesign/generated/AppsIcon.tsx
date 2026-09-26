// Module ID: 5310
// Function ID: 5311
// Name: AppsIcon
// Dependencies: [19, 21, 576, 4488, 5276, 2]
// Exports: AppsIcon

// Module 5310 (AppsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5276 from "module_5276" /* 5276 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppsIcon.tsx");

export const AppsIcon = function AppsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5276, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

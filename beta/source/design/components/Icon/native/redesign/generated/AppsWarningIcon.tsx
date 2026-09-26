// Module ID: 5353
// Function ID: 5354
// Name: AppsWarningIcon
// Dependencies: [19, 21, 576, 4488, 5298, 2]
// Exports: AppsWarningIcon

// Module 5353 (AppsWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5298 from "module_5298" /* 5298 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppsWarningIcon.tsx");

export const AppsWarningIcon = function AppsWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5298, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

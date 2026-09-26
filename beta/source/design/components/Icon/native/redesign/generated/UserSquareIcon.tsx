// Module ID: 9523
// Function ID: 9524
// Name: UserSquareIcon
// Dependencies: [19, 21, 576, 4488, 9524, 2]
// Exports: UserSquareIcon

// Module 9523 (UserSquareIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9524 from "module_9524" /* 9524 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/UserSquareIcon.tsx");

export const UserSquareIcon = function UserSquareIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9524, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

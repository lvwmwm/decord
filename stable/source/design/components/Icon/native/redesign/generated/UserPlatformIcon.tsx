// Module ID: 4575
// Function ID: 4576
// Name: UserPlatformIcon
// Dependencies: [19, 21, 576, 4337, 4576, 2]
// Exports: UserPlatformIcon

// Module 4575 (UserPlatformIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod4576 from "module_4576" /* 4576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/UserPlatformIcon.tsx");

export const UserPlatformIcon = function UserPlatformIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4576, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 4724
// Function ID: 4725
// Name: UserPlusIcon
// Dependencies: [19, 21, 576, 4488, 4725, 2]
// Exports: UserPlusIcon

// Module 4724 (UserPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4725 from "module_4725" /* 4725 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/UserPlusIcon.tsx");

export const UserPlusIcon = function UserPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4725, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

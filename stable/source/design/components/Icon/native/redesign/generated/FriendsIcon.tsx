// Module ID: 4487
// Function ID: 4488
// Name: FriendsIcon
// Dependencies: [19, 21, 576, 4488, 4723, 2]
// Exports: FriendsIcon

// Module 4487 (FriendsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4723 from "module_4723" /* 4723 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FriendsIcon.tsx");

export const FriendsIcon = function FriendsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4723, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

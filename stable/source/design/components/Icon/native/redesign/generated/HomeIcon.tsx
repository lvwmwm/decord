// Module ID: 17990
// Function ID: 17991
// Name: HomeIcon
// Dependencies: [19, 21, 576, 4488, 17991, 2]
// Exports: HomeIcon

// Module 17990 (HomeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod17991 from "module_17991" /* 17991 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HomeIcon.tsx");

export const HomeIcon = function HomeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17991, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

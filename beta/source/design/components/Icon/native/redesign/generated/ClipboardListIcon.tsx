// Module ID: 5787
// Function ID: 5788
// Name: ClipboardListIcon
// Dependencies: [19, 21, 576, 4488, 5788, 2]
// Exports: ClipboardListIcon

// Module 5787 (ClipboardListIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5788 from "module_5788" /* 5788 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ClipboardListIcon.tsx");

export const ClipboardListIcon = function ClipboardListIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5788, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

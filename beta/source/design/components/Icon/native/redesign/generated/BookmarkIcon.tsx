// Module ID: 11989
// Function ID: 11990
// Name: BookmarkIcon
// Dependencies: [19, 21, 576, 4488, 11990, 2]
// Exports: BookmarkIcon

// Module 11989 (BookmarkIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11990 from "module_11990" /* 11990 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BookmarkIcon.tsx");

export const BookmarkIcon = function BookmarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11990, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

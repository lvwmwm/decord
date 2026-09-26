// Module ID: 17501
// Function ID: 17502
// Name: ArrowLargeDownIcon
// Dependencies: [19, 21, 576, 4530, 11751, 2]
// Exports: ArrowLargeDownIcon

// Module 17501 (ArrowLargeDownIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod11751 from "module_11751" /* 11751 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowLargeDownIcon.tsx");

export const ArrowLargeDownIcon = function ArrowLargeDownIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11751, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

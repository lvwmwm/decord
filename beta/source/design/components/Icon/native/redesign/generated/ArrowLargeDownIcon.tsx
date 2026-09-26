// Module ID: 18141
// Function ID: 18142
// Name: ArrowLargeDownIcon
// Dependencies: [19, 21, 576, 4488, 12551, 2]
// Exports: ArrowLargeDownIcon

// Module 18141 (ArrowLargeDownIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod12551 from "module_12551" /* 12551 */;
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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12551, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

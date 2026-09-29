// Module ID: 11449
// Function ID: 11450
// Name: ChevronSmallDownIcon
// Dependencies: [19, 21, 576, 4488, 11450, 2]
// Exports: ChevronSmallDownIcon

// Module 11449 (ChevronSmallDownIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11450 from "module_11450" /* 11450 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx");

export const ChevronSmallDownIcon = function ChevronSmallDownIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11450, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

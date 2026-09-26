// Module ID: 10649
// Function ID: 10650
// Name: BicycleIcon
// Dependencies: [19, 21, 576, 4488, 10650, 2]
// Exports: BicycleIcon

// Module 10649 (BicycleIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10650 from "module_10650" /* 10650 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BicycleIcon.tsx");

export const BicycleIcon = function BicycleIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10650, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

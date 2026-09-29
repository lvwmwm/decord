// Module ID: 10547
// Function ID: 10548
// Name: PencilIcon
// Dependencies: [19, 21, 576, 4488, 8256, 2]
// Exports: PencilIcon

// Module 10547 (PencilIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8256 from "module_8256" /* 8256 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PencilIcon.tsx");

export const PencilIcon = function PencilIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8256, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

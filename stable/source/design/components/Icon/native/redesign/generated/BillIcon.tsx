// Module ID: 12269
// Function ID: 12270
// Name: BillIcon
// Dependencies: [19, 21, 576, 4337, 12270, 2]
// Exports: BillIcon

// Module 12269 (BillIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod12270 from "module_12270" /* 12270 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BillIcon.tsx");

export const BillIcon = function BillIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12270, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

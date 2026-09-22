// Module ID: 10950
// Function ID: 10951
// Name: ClydeIcon
// Dependencies: [19, 21, 576, 4337, 10951, 2]
// Exports: ClydeIcon

// Module 10950 (ClydeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod10951 from "module_10951" /* 10951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ClydeIcon.tsx");

export const ClydeIcon = function ClydeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10951, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

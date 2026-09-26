// Module ID: 11109
// Function ID: 11110
// Name: ClydeIcon
// Dependencies: [19, 21, 576, 4488, 11110, 2]
// Exports: ClydeIcon

// Module 11109 (ClydeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11110 from "module_11110" /* 11110 */;
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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11110, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

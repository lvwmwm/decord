// Module ID: 13145
// Function ID: 13146
// Name: FlashIcon
// Dependencies: [19, 21, 576, 4337, 13146, 2]
// Exports: FlashIcon

// Module 13145 (FlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod13146 from "module_13146" /* 13146 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FlashIcon.tsx");

export const FlashIcon = function FlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13146, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

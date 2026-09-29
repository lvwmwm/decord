// Module ID: 15227
// Function ID: 15228
// Name: LaptopPhoneIcon
// Dependencies: [19, 21, 576, 4488, 15228, 2]
// Exports: LaptopPhoneIcon

// Module 15227 (LaptopPhoneIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15228 from "module_15228" /* 15228 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx");

export const LaptopPhoneIcon = function LaptopPhoneIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15228, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

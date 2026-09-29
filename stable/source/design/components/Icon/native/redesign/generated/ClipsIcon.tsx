// Module ID: 15253
// Function ID: 15254
// Name: ClipsIcon
// Dependencies: [19, 21, 576, 4488, 15254, 2]
// Exports: ClipsIcon

// Module 15253 (ClipsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15254 from "module_15254" /* 15254 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ClipsIcon.tsx");

export const ClipsIcon = function ClipsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15254, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

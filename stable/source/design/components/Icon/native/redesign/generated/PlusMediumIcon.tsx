// Module ID: 12886
// Function ID: 12887
// Name: PlusMediumIcon
// Dependencies: [19, 21, 576, 4337, 12332, 2]
// Exports: PlusMediumIcon

// Module 12886 (PlusMediumIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod12332 from "module_12332" /* 12332 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PlusMediumIcon.tsx");

export const PlusMediumIcon = function PlusMediumIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12332, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

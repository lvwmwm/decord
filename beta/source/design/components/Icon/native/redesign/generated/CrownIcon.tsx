// Module ID: 11187
// Function ID: 11188
// Name: CrownIcon
// Dependencies: [19, 21, 576, 4488, 11188, 2]
// Exports: CrownIcon

// Module 11187 (CrownIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11188 from "module_11188" /* 11188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CrownIcon.tsx");

export const CrownIcon = function CrownIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11188, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

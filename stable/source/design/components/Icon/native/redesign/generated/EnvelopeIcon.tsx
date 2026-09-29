// Module ID: 7358
// Function ID: 7359
// Name: EnvelopeIcon
// Dependencies: [19, 21, 576, 4488, 7359, 2]
// Exports: EnvelopeIcon

// Module 7358 (EnvelopeIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod7359 from "module_7359" /* 7359 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EnvelopeIcon.tsx");

export const EnvelopeIcon = function EnvelopeIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7359, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

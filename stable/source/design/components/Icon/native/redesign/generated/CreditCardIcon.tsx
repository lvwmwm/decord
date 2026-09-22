// Module ID: 12056
// Function ID: 12057
// Name: CreditCardIcon
// Dependencies: [19, 21, 576, 4337, 12057, 2]
// Exports: CreditCardIcon

// Module 12056 (CreditCardIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod12057 from "module_12057" /* 12057 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CreditCardIcon.tsx");

export const CreditCardIcon = function CreditCardIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12057, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 12267
// Function ID: 12268
// Name: PiggyBankIcon
// Dependencies: [19, 21, 576, 4525, 12268, 2]
// Exports: PiggyBankIcon

// Module 12267 (PiggyBankIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4525 */;
import _mod12268 from "module_12268" /* 12268 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PiggyBankIcon.tsx");

export const PiggyBankIcon = function PiggyBankIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12268, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

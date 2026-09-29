// Module ID: 17672
// Function ID: 17673
// Name: MobilePhoneDenyIcon
// Dependencies: [19, 21, 576, 4488, 17673, 2]
// Exports: MobilePhoneDenyIcon

// Module 17672 (MobilePhoneDenyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod17673 from "module_17673" /* 17673 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MobilePhoneDenyIcon.tsx");

export const MobilePhoneDenyIcon = function MobilePhoneDenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17673, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

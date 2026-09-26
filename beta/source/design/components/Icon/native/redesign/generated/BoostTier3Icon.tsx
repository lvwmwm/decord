// Module ID: 13818
// Function ID: 13819
// Name: BoostTier3Icon
// Dependencies: [19, 21, 576, 4488, 13819, 2]
// Exports: BoostTier3Icon

// Module 13818 (BoostTier3Icon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13819 from "module_13819" /* 13819 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx");

export const BoostTier3Icon = function BoostTier3Icon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13819, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 18014
// Function ID: 18015
// Name: BoostGemOutlineIcon
// Dependencies: [19, 21, 576, 4488, 18015, 2]
// Exports: BoostGemOutlineIcon

// Module 18014 (BoostGemOutlineIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod18015 from "module_18015" /* 18015 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BoostGemOutlineIcon.tsx");

export const BoostGemOutlineIcon = function BoostGemOutlineIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod18015, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

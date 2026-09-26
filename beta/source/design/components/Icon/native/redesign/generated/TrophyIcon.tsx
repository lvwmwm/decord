// Module ID: 9023
// Function ID: 9024
// Name: TrophyIcon
// Dependencies: [19, 21, 576, 4488, 8438, 2]
// Exports: TrophyIcon

// Module 9023 (TrophyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8438 from "module_8438" /* 8438 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TrophyIcon.tsx");

export const TrophyIcon = function TrophyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8438, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

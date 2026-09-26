// Module ID: 8997
// Function ID: 8998
// Name: SteamNeutralIcon
// Dependencies: [19, 21, 576, 4488, 8998, 2]
// Exports: SteamNeutralIcon

// Module 8997 (SteamNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8998 from "module_8998" /* 8998 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SteamNeutralIcon.tsx");

export const SteamNeutralIcon = function SteamNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8998, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

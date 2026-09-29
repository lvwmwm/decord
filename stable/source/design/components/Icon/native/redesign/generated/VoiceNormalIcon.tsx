// Module ID: 5351
// Function ID: 5352
// Name: VoiceNormalIcon
// Dependencies: [19, 21, 576, 4488, 5281, 2]
// Exports: VoiceNormalIcon

// Module 5351 (VoiceNormalIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5281 from "module_5281" /* 5281 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx");

export const VoiceNormalIcon = function VoiceNormalIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5281, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

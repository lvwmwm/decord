// Module ID: 5348
// Function ID: 5349
// Name: VoiceLockIcon
// Dependencies: [19, 21, 576, 4488, 5283, 2]
// Exports: VoiceLockIcon

// Module 5348 (VoiceLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5283 from "module_5283" /* 5283 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceLockIcon.tsx");

export const VoiceLockIcon = function VoiceLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5283, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 10334
// Function ID: 10335
// Name: VoiceXIcon
// Dependencies: [19, 21, 576, 4525, 10335, 2]
// Exports: VoiceXIcon

// Module 10334 (VoiceXIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4525 */;
import _mod10335 from "module_10335" /* 10335 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/VoiceXIcon.tsx");

export const VoiceXIcon = function VoiceXIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10335, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

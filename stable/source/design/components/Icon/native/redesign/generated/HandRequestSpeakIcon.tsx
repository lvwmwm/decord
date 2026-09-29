// Module ID: 10232
// Function ID: 10233
// Name: HandRequestSpeakIcon
// Dependencies: [19, 21, 576, 4488, 10233, 2]
// Exports: HandRequestSpeakIcon

// Module 10232 (HandRequestSpeakIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10233 from "module_10233" /* 10233 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HandRequestSpeakIcon.tsx");

export const HandRequestSpeakIcon = function HandRequestSpeakIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10233, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

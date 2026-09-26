// Module ID: 10057
// Function ID: 10058
// Name: FireIcon
// Dependencies: [19, 21, 576, 4488, 10058, 2]
// Exports: FireIcon

// Module 10057 (FireIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10058 from "module_10058" /* 10058 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FireIcon.tsx");

export const FireIcon = function FireIcon(ORANGE_260) {
  let INTERACTIVE_ICON_DEFAULT = ORANGE_260.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(ORANGE_260, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10058, color: INTERACTIVE_ICON_DEFAULT, style: ORANGE_260.style });
};

// Module ID: 10657
// Function ID: 10658
// Name: BackspaceIcon
// Dependencies: [19, 21, 576, 4488, 10658, 2]
// Exports: BackspaceIcon

// Module 10657 (BackspaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10658 from "module_10658" /* 10658 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BackspaceIcon.tsx");

export const BackspaceIcon = function BackspaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10658, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

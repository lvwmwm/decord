// Module ID: 15623
// Function ID: 15624
// Name: EyeDropperIcon
// Dependencies: [19, 21, 576, 4456, 15624, 2]
// Exports: EyeDropperIcon

// Module 15623 (EyeDropperIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod15624 from "module_15624" /* 15624 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EyeDropperIcon.tsx");

export const EyeDropperIcon = function EyeDropperIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15624, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

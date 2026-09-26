// Module ID: 5329
// Function ID: 5330
// Name: TextControllerIcon
// Dependencies: [19, 21, 576, 4488, 5314, 2]
// Exports: TextControllerIcon

// Module 5329 (TextControllerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5314 from "module_5314" /* 5314 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TextControllerIcon.tsx");

export const TextControllerIcon = function TextControllerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5314, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 15946
// Function ID: 15947
// Name: LettersIcon
// Dependencies: [19, 21, 576, 4488, 15947, 2]
// Exports: LettersIcon

// Module 15946 (LettersIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15947 from "module_15947" /* 15947 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LettersIcon.tsx");

export const LettersIcon = function LettersIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15947, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 5328
// Function ID: 5329
// Name: TextLockIcon
// Dependencies: [19, 21, 576, 4488, 5297, 2]
// Exports: TextLockIcon

// Module 5328 (TextLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5297 from "module_5297" /* 5297 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TextLockIcon.tsx");

export const TextLockIcon = function TextLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5297, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

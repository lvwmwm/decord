// Module ID: 15657
// Function ID: 15658
// Name: EmojiNerdFaceIcon
// Dependencies: [19, 21, 576, 4488, 15658, 2]
// Exports: EmojiNerdFaceIcon

// Module 15657 (EmojiNerdFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15658 from "module_15658" /* 15658 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiNerdFaceIcon.tsx");

export const EmojiNerdFaceIcon = function EmojiNerdFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15658, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

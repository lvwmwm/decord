// Module ID: 15650
// Function ID: 15651
// Name: EmojiMeltingFaceIcon
// Dependencies: [19, 21, 576, 4456, 15651, 2]
// Exports: EmojiMeltingFaceIcon

// Module 15650 (EmojiMeltingFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod15651 from "module_15651" /* 15651 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiMeltingFaceIcon.tsx");

export const EmojiMeltingFaceIcon = function EmojiMeltingFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15651, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

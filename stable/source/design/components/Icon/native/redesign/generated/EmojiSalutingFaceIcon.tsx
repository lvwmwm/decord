// Module ID: 15471
// Function ID: 15472
// Name: EmojiSalutingFaceIcon
// Dependencies: [19, 21, 576, 4337, 15472, 2]
// Exports: EmojiSalutingFaceIcon

// Module 15471 (EmojiSalutingFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod15472 from "module_15472" /* 15472 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiSalutingFaceIcon.tsx");

export const EmojiSalutingFaceIcon = function EmojiSalutingFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15472, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

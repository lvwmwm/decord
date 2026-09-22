// Module ID: 15481
// Function ID: 15482
// Name: EmojiUpsideDownFaceIcon
// Dependencies: [19, 21, 576, 4337, 15482, 2]
// Exports: EmojiUpsideDownFaceIcon

// Module 15481 (EmojiUpsideDownFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod15482 from "module_15482" /* 15482 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiUpsideDownFaceIcon.tsx");

export const EmojiUpsideDownFaceIcon = function EmojiUpsideDownFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15482, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

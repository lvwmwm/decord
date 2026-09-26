// Module ID: 15655
// Function ID: 15656
// Name: EmojiMoneyMouthFaceIcon
// Dependencies: [19, 21, 576, 4488, 15656, 2]
// Exports: EmojiMoneyMouthFaceIcon

// Module 15655 (EmojiMoneyMouthFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15656 from "module_15656" /* 15656 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiMoneyMouthFaceIcon.tsx");

export const EmojiMoneyMouthFaceIcon = function EmojiMoneyMouthFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15656, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

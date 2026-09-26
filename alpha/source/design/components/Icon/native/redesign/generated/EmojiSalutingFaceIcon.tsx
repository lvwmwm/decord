// Module ID: 14936
// Function ID: 14937
// Name: EmojiSalutingFaceIcon
// Dependencies: [19, 21, 576, 4530, 14937, 2]
// Exports: EmojiSalutingFaceIcon

// Module 14936 (EmojiSalutingFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod14937 from "module_14937" /* 14937 */;
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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod14937, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

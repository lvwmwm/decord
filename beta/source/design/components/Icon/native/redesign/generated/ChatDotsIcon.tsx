// Module ID: 15631
// Function ID: 15632
// Name: ChatDotsIcon
// Dependencies: [19, 21, 576, 4488, 15632, 2]
// Exports: ChatDotsIcon

// Module 15631 (ChatDotsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15632 from "module_15632" /* 15632 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatDotsIcon.tsx");

export const ChatDotsIcon = function ChatDotsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15632, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

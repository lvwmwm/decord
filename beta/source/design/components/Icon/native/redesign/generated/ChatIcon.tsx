// Module ID: 5321
// Function ID: 5322
// Name: ChatIcon
// Dependencies: [19, 21, 576, 4488, 5291, 2]
// Exports: ChatIcon

// Module 5321 (ChatIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5291 from "module_5291" /* 5291 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatIcon.tsx");

export const ChatIcon = function ChatIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5291, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

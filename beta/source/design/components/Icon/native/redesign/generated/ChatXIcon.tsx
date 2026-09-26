// Module ID: 12748
// Function ID: 12749
// Name: ChatXIcon
// Dependencies: [19, 21, 576, 4488, 12749, 2]
// Exports: ChatXIcon

// Module 12748 (ChatXIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod12749 from "module_12749" /* 12749 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatXIcon.tsx");

export const ChatXIcon = function ChatXIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12749, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

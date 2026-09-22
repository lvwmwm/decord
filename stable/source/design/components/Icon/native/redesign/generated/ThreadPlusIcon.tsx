// Module ID: 12370
// Function ID: 12371
// Name: ThreadPlusIcon
// Dependencies: [19, 21, 576, 4337, 12371, 2]
// Exports: ThreadPlusIcon

// Module 12370 (ThreadPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod12371 from "module_12371" /* 12371 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ThreadPlusIcon.tsx");

export const ThreadPlusIcon = function ThreadPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12371, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

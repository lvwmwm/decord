// Module ID: 10374
// Function ID: 10375
// Name: AttachmentIcon
// Dependencies: [19, 21, 576, 4457, 10375, 2]
// Exports: AttachmentIcon

// Module 10374 (AttachmentIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4457 */;
import _mod10375 from "module_10375" /* 10375 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AttachmentIcon.tsx");

export const AttachmentIcon = function AttachmentIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10375, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 8208
// Function ID: 8209
// Name: InstagramNeutralIcon
// Dependencies: [19, 21, 576, 4337, 8209, 2]
// Exports: InstagramNeutralIcon

// Module 8208 (InstagramNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod8209 from "module_8209" /* 8209 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx");

export const InstagramNeutralIcon = function InstagramNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8209, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 7233
// Function ID: 7234
// Name: KeyIcon
// Dependencies: [19, 21, 576, 4488, 7234, 2]
// Exports: KeyIcon

// Module 7233 (KeyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod7234 from "module_7234" /* 7234 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/KeyIcon.tsx");

export const KeyIcon = function KeyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7234, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

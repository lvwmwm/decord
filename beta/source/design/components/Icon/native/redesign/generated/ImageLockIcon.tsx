// Module ID: 5335
// Function ID: 5336
// Name: ImageLockIcon
// Dependencies: [19, 21, 576, 4488, 5316, 2]
// Exports: ImageLockIcon

// Module 5335 (ImageLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5316 from "module_5316" /* 5316 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageLockIcon.tsx");

export const ImageLockIcon = function ImageLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5316, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 5395
// Function ID: 5396
// Name: ImageWarningIcon
// Dependencies: [19, 21, 576, 4530, 5360, 2]
// Exports: ImageWarningIcon

// Module 5395 (ImageWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod5360 from "module_5360" /* 5360 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx");

export const ImageWarningIcon = function ImageWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5360, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 15733
// Function ID: 15734
// Name: ImageTextIcon
// Dependencies: [19, 21, 576, 4488, 15734, 2]
// Exports: ImageTextIcon

// Module 15733 (ImageTextIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15734 from "module_15734" /* 15734 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageTextIcon.tsx");

export const ImageTextIcon = function ImageTextIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15734, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

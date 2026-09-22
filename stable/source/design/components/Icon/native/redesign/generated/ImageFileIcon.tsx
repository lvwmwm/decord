// Module ID: 11374
// Function ID: 11375
// Name: ImageFileIcon
// Dependencies: [19, 21, 576, 4337, 11375, 2]
// Exports: ImageFileIcon

// Module 11374 (ImageFileIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod11375 from "module_11375" /* 11375 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageFileIcon.tsx");

export const ImageFileIcon = function ImageFileIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11375, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

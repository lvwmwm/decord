// Module ID: 18195
// Function ID: 18196
// Name: ImagePlusIcon
// Dependencies: [19, 21, 576, 4488, 18196, 2]
// Exports: ImagePlusIcon

// Module 18195 (ImagePlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod18196 from "module_18196" /* 18196 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImagePlusIcon.tsx");

export const ImagePlusIcon = function ImagePlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod18196, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

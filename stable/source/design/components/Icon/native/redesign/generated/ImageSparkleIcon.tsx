// Module ID: 10258
// Function ID: 10259
// Name: ImageSparkleIcon
// Dependencies: [19, 21, 576, 4488, 10259, 2]
// Exports: ImageSparkleIcon

// Module 10258 (ImageSparkleIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10259 from "module_10259" /* 10259 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ImageSparkleIcon.tsx");

export const ImageSparkleIcon = function ImageSparkleIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10259, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

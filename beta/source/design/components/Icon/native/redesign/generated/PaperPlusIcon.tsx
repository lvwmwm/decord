// Module ID: 13380
// Function ID: 13381
// Name: PaperPlusIcon
// Dependencies: [19, 21, 576, 4488, 13381, 2]
// Exports: PaperPlusIcon

// Module 13380 (PaperPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13381 from "module_13381" /* 13381 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PaperPlusIcon.tsx");

export const PaperPlusIcon = function PaperPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13381, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

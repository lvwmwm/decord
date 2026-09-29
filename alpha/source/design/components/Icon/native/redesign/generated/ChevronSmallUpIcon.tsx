// Module ID: 13283
// Function ID: 13284
// Name: ChevronSmallUpIcon
// Dependencies: [19, 21, 576, 4530, 12314, 2]
// Exports: ChevronSmallUpIcon

// Module 13283 (ChevronSmallUpIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod12314 from "module_12314" /* 12314 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx");

export const ChevronSmallUpIcon = function ChevronSmallUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12314, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

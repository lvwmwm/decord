// Module ID: 13617
// Function ID: 13618
// Name: VideoDenyIcon
// Dependencies: [19, 21, 576, 4488, 13618, 2]
// Exports: VideoDenyIcon

// Module 13617 (VideoDenyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13618 from "module_13618" /* 13618 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/VideoDenyIcon.tsx");

export const VideoDenyIcon = function VideoDenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13618, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

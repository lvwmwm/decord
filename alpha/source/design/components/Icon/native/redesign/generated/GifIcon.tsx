// Module ID: 10009
// Function ID: 10010
// Name: GifIcon
// Dependencies: [19, 21, 576, 4530, 7692, 2]
// Exports: GifIcon

// Module 10009 (GifIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod7692 from "module_7692" /* 7692 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GifIcon.tsx");

export const GifIcon = function GifIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7692, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

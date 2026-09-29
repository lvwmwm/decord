// Module ID: 10409
// Function ID: 10410
// Name: StickerIcon
// Dependencies: [19, 21, 576, 4488, 10410, 2]
// Exports: StickerIcon

// Module 10409 (StickerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10410 from "module_10410" /* 10410 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/StickerIcon.tsx");

export const StickerIcon = function StickerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10410, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

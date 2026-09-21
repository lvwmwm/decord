// Module ID: 18016
// Function ID: 18017
// Name: StickerPlusIcon
// Dependencies: [19, 21, 576, 4456, 18017, 2]
// Exports: StickerPlusIcon

// Module 18016 (StickerPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod18017 from "module_18017" /* 18017 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/StickerPlusIcon.tsx");

export const StickerPlusIcon = function StickerPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod18017, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

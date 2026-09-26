// Module ID: 18021
// Function ID: 18022
// Name: StickerPlusIcon
// Dependencies: [19, 21, 576, 4488, 18022, 2]
// Exports: StickerPlusIcon

// Module 18021 (StickerPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod18022 from "module_18022" /* 18022 */;
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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod18022, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

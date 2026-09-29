// Module ID: 5324
// Function ID: 5325
// Name: FolderIcon
// Dependencies: [19, 21, 576, 4488, 5274, 2]
// Exports: FolderIcon

// Module 5324 (FolderIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod5274 from "module_5274" /* 5274 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FolderIcon.tsx");

export const FolderIcon = function FolderIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5274, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

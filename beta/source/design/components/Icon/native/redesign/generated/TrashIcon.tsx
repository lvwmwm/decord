// Module ID: 4745
// Function ID: 4746
// Name: TrashIcon
// Dependencies: [19, 21, 576, 4488, 4746, 2]
// Exports: TrashIcon

// Module 4745 (TrashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4746 from "module_4746" /* 4746 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TrashIcon.tsx");

export const TrashIcon = function TrashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4746, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

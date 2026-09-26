// Module ID: 9613
// Function ID: 9614
// Name: BellSlashIcon
// Dependencies: [19, 21, 576, 4530, 9614, 2]
// Exports: BellSlashIcon

// Module 9613 (BellSlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod9614 from "module_9614" /* 9614 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BellSlashIcon.tsx");

export const BellSlashIcon = function BellSlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9614, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

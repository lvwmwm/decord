// Module ID: 10449
// Function ID: 10450
// Name: BellSlashIcon
// Dependencies: [19, 21, 576, 4488, 10450, 2]
// Exports: BellSlashIcon

// Module 10449 (BellSlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10450 from "module_10450" /* 10450 */;
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
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10450, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

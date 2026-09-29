// Module ID: 16055
// Function ID: 16056
// Name: BugIcon
// Dependencies: [19, 21, 576, 4488, 16056, 2]
// Exports: BugIcon

// Module 16055 (BugIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod16056 from "module_16056" /* 16056 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BugIcon.tsx");

export const BugIcon = function BugIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16056, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

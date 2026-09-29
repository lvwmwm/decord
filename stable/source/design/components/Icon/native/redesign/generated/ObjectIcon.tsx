// Module ID: 10651
// Function ID: 10652
// Name: ObjectIcon
// Dependencies: [19, 21, 576, 4488, 10652, 2]
// Exports: ObjectIcon

// Module 10651 (ObjectIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10652 from "module_10652" /* 10652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ObjectIcon.tsx");

export const ObjectIcon = function ObjectIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10652, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

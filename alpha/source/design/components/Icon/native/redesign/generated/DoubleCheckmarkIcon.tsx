// Module ID: 15147
// Function ID: 15148
// Name: DoubleCheckmarkIcon
// Dependencies: [19, 21, 576, 4527, 15148, 2]
// Exports: DoubleCheckmarkIcon

// Module 15147 (DoubleCheckmarkIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4527 */;
import _mod15148 from "module_15148" /* 15148 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/DoubleCheckmarkIcon.tsx");

export const DoubleCheckmarkIcon = function DoubleCheckmarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15148, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

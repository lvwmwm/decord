// Module ID: 9973
// Function ID: 9974
// Name: HeadphonesDenyIcon
// Dependencies: [19, 21, 576, 4488, 9974, 2]
// Exports: HeadphonesDenyIcon

// Module 9973 (HeadphonesDenyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9974 from "module_9974" /* 9974 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HeadphonesDenyIcon.tsx");

export const HeadphonesDenyIcon = function HeadphonesDenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9974, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

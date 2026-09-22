// Module ID: 11544
// Function ID: 11545
// Name: EducationIcon
// Dependencies: [19, 21, 576, 4337, 11543, 2]
// Exports: EducationIcon

// Module 11544 (EducationIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod11543 from "module_11543" /* 11543 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EducationIcon.tsx");

export const EducationIcon = function EducationIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11543, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

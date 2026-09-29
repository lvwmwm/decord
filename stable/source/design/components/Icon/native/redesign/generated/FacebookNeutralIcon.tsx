// Module ID: 8389
// Function ID: 8390
// Name: FacebookNeutralIcon
// Dependencies: [19, 21, 576, 4488, 8390, 2]
// Exports: FacebookNeutralIcon

// Module 8389 (FacebookNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8390 from "module_8390" /* 8390 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx");

export const FacebookNeutralIcon = function FacebookNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8390, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

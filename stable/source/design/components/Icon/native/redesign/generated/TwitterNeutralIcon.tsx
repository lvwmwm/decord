// Module ID: 12639
// Function ID: 12640
// Name: TwitterNeutralIcon
// Dependencies: [19, 21, 576, 4488, 12640, 2]
// Exports: TwitterNeutralIcon

// Module 12639 (TwitterNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod12640 from "module_12640" /* 12640 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TwitterNeutralIcon.tsx");

export const TwitterNeutralIcon = function TwitterNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod12640, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

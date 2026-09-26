// Module ID: 13222
// Function ID: 13223
// Name: HourglassIcon
// Dependencies: [19, 21, 576, 4488, 13223, 2]
// Exports: HourglassIcon

// Module 13222 (HourglassIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13223 from "module_13223" /* 13223 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HourglassIcon.tsx");

export const HourglassIcon = function HourglassIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13223, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

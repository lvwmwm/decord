// Module ID: 9832
// Function ID: 9833
// Name: LocationIcon
// Dependencies: [19, 21, 576, 4488, 9833, 2]
// Exports: LocationIcon

// Module 9832 (LocationIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9833 from "module_9833" /* 9833 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LocationIcon.tsx");

export const LocationIcon = function LocationIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9833, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

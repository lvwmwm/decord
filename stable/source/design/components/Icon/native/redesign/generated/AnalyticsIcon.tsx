// Module ID: 10679
// Function ID: 10680
// Name: AnalyticsIcon
// Dependencies: [19, 21, 576, 4488, 10680, 2]
// Exports: AnalyticsIcon

// Module 10679 (AnalyticsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10680 from "module_10680" /* 10680 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AnalyticsIcon.tsx");

export const AnalyticsIcon = function AnalyticsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10680, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

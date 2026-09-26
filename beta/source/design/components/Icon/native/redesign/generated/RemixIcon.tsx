// Module ID: 16953
// Function ID: 16954
// Name: RemixIcon
// Dependencies: [19, 21, 576, 4488, 16954, 2]
// Exports: RemixIcon

// Module 16953 (RemixIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod16954 from "module_16954" /* 16954 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/RemixIcon.tsx");

export const RemixIcon = function RemixIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16954, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

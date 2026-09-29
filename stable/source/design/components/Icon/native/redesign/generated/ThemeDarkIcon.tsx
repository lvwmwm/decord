// Module ID: 11612
// Function ID: 11613
// Name: ThemeDarkIcon
// Dependencies: [19, 21, 576, 4488, 11613, 2]
// Exports: ThemeDarkIcon

// Module 11612 (ThemeDarkIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11613 from "module_11613" /* 11613 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeDarkIcon.tsx");

export const ThemeDarkIcon = function ThemeDarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11613, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

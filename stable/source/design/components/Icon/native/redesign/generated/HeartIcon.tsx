// Module ID: 9086
// Function ID: 9087
// Name: HeartIcon
// Dependencies: [19, 21, 576, 4488, 9087, 2]
// Exports: HeartIcon

// Module 9086 (HeartIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9087 from "module_9087" /* 9087 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HeartIcon.tsx");

export const HeartIcon = function HeartIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9087, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

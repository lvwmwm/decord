// Module ID: 11511
// Function ID: 11512
// Name: generated/SpoilerIcon
// Dependencies: [19, 21, 576, 4457, 11512, 2]
// Exports: SpoilerIcon

// Module 11511 (generated/SpoilerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4457 */;
import _mod11512 from "module_11512" /* 11512 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SpoilerIcon.tsx");

export const SpoilerIcon = function SpoilerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11512, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

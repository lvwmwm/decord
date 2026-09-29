// Module ID: 15312
// Function ID: 15313
// Name: HashmarkIcon
// Dependencies: [19, 21, 576, 4530, 15313, 2]
// Exports: HashmarkIcon

// Module 15312 (HashmarkIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4530 */;
import _mod15313 from "module_15313" /* 15313 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HashmarkIcon.tsx");

export const HashmarkIcon = function HashmarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15313, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

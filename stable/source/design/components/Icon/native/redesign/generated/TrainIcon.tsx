// Module ID: 15880
// Function ID: 15881
// Name: TrainIcon
// Dependencies: [19, 21, 576, 4488, 15881, 2]
// Exports: TrainIcon

// Module 15880 (TrainIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15881 from "module_15881" /* 15881 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TrainIcon.tsx");

export const TrainIcon = function TrainIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15881, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

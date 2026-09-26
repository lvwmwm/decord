// Module ID: 8577
// Function ID: 8578
// Name: PlayIcon
// Dependencies: [19, 21, 576, 4488, 8578, 2]
// Exports: PlayIcon

// Module 8577 (PlayIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8578 from "module_8578" /* 8578 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PlayIcon.tsx");

export const PlayIcon = function PlayIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8578, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

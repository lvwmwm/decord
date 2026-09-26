// Module ID: 9380
// Function ID: 9381
// Name: GameControllerIcon
// Dependencies: [19, 21, 576, 4488, 8439, 2]
// Exports: GameControllerIcon

// Module 9380 (GameControllerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod8439 from "module_8439" /* 8439 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GameControllerIcon.tsx");

export const GameControllerIcon = function GameControllerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8439, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

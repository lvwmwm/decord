// Module ID: 9559
// Function ID: 9560
// Name: MusicSlashIcon
// Dependencies: [19, 21, 576, 4559, 9560, 2]
// Exports: MusicSlashIcon

// Module 9559 (MusicSlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4559 */;
import _mod9560 from "module_9560" /* 9560 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MusicSlashIcon.tsx");

export const MusicSlashIcon = function MusicSlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9560, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

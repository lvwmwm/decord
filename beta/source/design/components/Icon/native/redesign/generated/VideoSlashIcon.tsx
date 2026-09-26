// Module ID: 13368
// Function ID: 13369
// Name: VideoSlashIcon
// Dependencies: [19, 21, 576, 4488, 13369, 2]
// Exports: VideoSlashIcon

// Module 13368 (VideoSlashIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13369 from "module_13369" /* 13369 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/VideoSlashIcon.tsx");

export const VideoSlashIcon = function VideoSlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13369, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

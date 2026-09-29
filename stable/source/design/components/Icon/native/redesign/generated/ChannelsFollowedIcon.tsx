// Module ID: 17311
// Function ID: 17312
// Name: ChannelsFollowedIcon
// Dependencies: [19, 21, 576, 4488, 17312, 2]
// Exports: ChannelsFollowedIcon

// Module 17311 (ChannelsFollowedIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod17312 from "module_17312" /* 17312 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChannelsFollowedIcon.tsx");

export const ChannelsFollowedIcon = function ChannelsFollowedIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17312, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 14142
// Function ID: 14143
// Name: ChannelListMagnifyingGlassIcon
// Dependencies: [19, 21, 576, 4488, 14143, 2]
// Exports: ChannelListMagnifyingGlassIcon

// Module 14142 (ChannelListMagnifyingGlassIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod14143 from "module_14143" /* 14143 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx");

export const ChannelListMagnifyingGlassIcon = function ChannelListMagnifyingGlassIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod14143, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

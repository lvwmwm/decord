// Module ID: 9208
// Function ID: 9209
// Name: TwitchNeutralIcon
// Dependencies: [19, 21, 576, 4488, 9209, 2]
// Exports: TwitchNeutralIcon

// Module 9208 (TwitchNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod9209 from "module_9209" /* 9209 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TwitchNeutralIcon.tsx");

export const TwitchNeutralIcon = function TwitchNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9209, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

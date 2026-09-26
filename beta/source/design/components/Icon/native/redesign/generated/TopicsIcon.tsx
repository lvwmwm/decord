// Module ID: 11933
// Function ID: 11934
// Name: TopicsIcon
// Dependencies: [19, 21, 576, 4488, 11934, 2]
// Exports: TopicsIcon

// Module 11933 (TopicsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod11934 from "module_11934" /* 11934 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TopicsIcon.tsx");

export const TopicsIcon = function TopicsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11934, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

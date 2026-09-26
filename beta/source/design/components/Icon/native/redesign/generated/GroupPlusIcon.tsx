// Module ID: 10328
// Function ID: 10329
// Name: GroupPlusIcon
// Dependencies: [19, 21, 576, 4488, 10327, 2]
// Exports: GroupPlusIcon

// Module 10328 (GroupPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod10327 from "module_10327" /* 10327 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GroupPlusIcon.tsx");

export const GroupPlusIcon = function GroupPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10327, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

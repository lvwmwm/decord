// Module ID: 11387
// Function ID: 11388
// Name: TagsIcon
// Dependencies: [19, 21, 576, 4337, 11388, 2]
// Exports: TagsIcon

// Module 11387 (TagsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod11388 from "module_11388" /* 11388 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TagsIcon.tsx");

export const TagsIcon = function TagsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11388, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

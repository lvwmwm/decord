// Module ID: 10293
// Function ID: 10294
// Name: IdIcon
// Dependencies: [19, 21, 576, 4560, 10294, 2]
// Exports: IdIcon

// Module 10293 (IdIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4560 */;
import _mod10294 from "module_10294" /* 10294 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/IdIcon.tsx");

export const IdIcon = function IdIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10294, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

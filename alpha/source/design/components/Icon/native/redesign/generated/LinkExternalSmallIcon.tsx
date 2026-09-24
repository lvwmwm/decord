// Module ID: 8935
// Function ID: 8936
// Name: LinkExternalSmallIcon
// Dependencies: [19, 21, 576, 4525, 8936, 2]
// Exports: LinkExternalSmallIcon

// Module 8935 (LinkExternalSmallIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4525 */;
import _mod8936 from "module_8936" /* 8936 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx");

export const LinkExternalSmallIcon = function LinkExternalSmallIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8936, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

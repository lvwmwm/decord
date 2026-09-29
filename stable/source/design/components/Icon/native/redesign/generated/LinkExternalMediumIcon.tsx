// Module ID: 13244
// Function ID: 13245
// Name: LinkExternalMediumIcon
// Dependencies: [19, 21, 576, 4488, 13245, 2]
// Exports: LinkExternalMediumIcon

// Module 13244 (LinkExternalMediumIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod13245 from "module_13245" /* 13245 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LinkExternalMediumIcon.tsx");

export const LinkExternalMediumIcon = function LinkExternalMediumIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13245, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

// Module ID: 4736
// Function ID: 4737
// Name: DownloadIcon
// Dependencies: [19, 21, 576, 4488, 4737, 2]
// Exports: DownloadIcon

// Module 4736 (DownloadIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod4737 from "module_4737" /* 4737 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/DownloadIcon.tsx");

export const DownloadIcon = function DownloadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4737, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

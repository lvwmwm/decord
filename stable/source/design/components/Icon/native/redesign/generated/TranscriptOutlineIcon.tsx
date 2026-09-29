// Module ID: 15310
// Function ID: 15311
// Name: TranscriptOutlineIcon
// Dependencies: [19, 21, 576, 4488, 15311, 2]
// Exports: TranscriptOutlineIcon

// Module 15310 (TranscriptOutlineIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15311 from "module_15311" /* 15311 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TranscriptOutlineIcon.tsx");

export const TranscriptOutlineIcon = function TranscriptOutlineIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15311, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};

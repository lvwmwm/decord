// Module ID: 11717
// Function ID: 11718
// Name: getInlineFramePresentation
// Dependencies: [6296, 2]
// Exports: default

// Module 11717 (getInlineFramePresentation)
import FramesConstants from "FramesConstants" /* 6296 */;
import size from "module_2" /* 2 */;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const result = size.fileFinishedImporting("modules/frames/native/getInlineFramePresentation.tsx");

export default function getInlineFramePresentation(top, arg1) {
  let bottom;
  let left;
  let right;
  let num = 0;
  ({ bottom, left, right } = top);
  if (!arg1) {
    num = top.top;
  }
  const rect = { top: { disable: false, override: num }, bottom: { disable: false, override: bottom }, left: { disable: false, override: left }, right: { disable: false, override: right } };
  return { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: rect, landscapeSafeAreasConfig: rect };
};
